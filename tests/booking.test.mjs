import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../server/index.js';
import {localDatabase} from '../scripts/local-db.mjs';
import {dailySlots,defaults,dayStart,indiaDate,validateSettings} from '../server/scheduling.mjs';

const origin='https://rida.test';
function setup(){const DB=localDatabase();return {DB,STAFF_SUBJECTS:'staff-one',SITE_ORIGIN:origin};}
function call(env,path,method='GET',value,extra={}){return worker.fetch(new Request(origin+path,{method,headers:{'Origin':origin,'Content-Type':'application/json','cf-connecting-ip':crypto.randomUUID(),...extra},...(value?{body:JSON.stringify(value)}:{})}),env);}
const staff={'oai-authenticated-user-id':'staff-one','oai-authenticated-user-email':'owner@example.invalid'};
const token=()=>Array.from(crypto.getRandomValues(new Uint8Array(32)),b=>b.toString(16).padStart(2,'0')).join('');
function nextMonday(){let n=dayStart(indiaDate())+1440;while(new Date((n+330)*60000).getUTCDay()!==1)n+=1440;return indiaDate(n);}
async function make(env,start){const a=await(await call(env,'/api/availability?date='+nextMonday())).json();const input={name:'Test Visitor',contact:'visitor@example.invalid',service:'individual',language:'English',mode:'Online',start:start||a.slots[0].start,settingsVersion:a.settings.version,consent:true,idempotency:crypto.randomUUID(),token:token()};const response=await call(env,'/api/appointments','POST',input);return {response,input,data:await response.json()};}
test('Weekday slots respect session length, recovery gap, lunch and closing',()=>{
 const date='2026-09-14',now=dayStart('2026-09-10');
 assert.deepEqual(dailySlots(date,defaults,false,now).map(s=>s.label),['10:00','11:15','12:30','14:30','15:45']);
 assert.equal(dailySlots('2026-09-12',defaults,false,now).length,0);
 assert.equal(dailySlots(date,defaults,true,now).length,0);
 assert.throws(()=>validateSettings({...defaults,lunchEnd:'18:00'}));
});
test('Concurrent visitors cannot reserve the same minute; retries are idempotent',async()=>{
 const env=setup();const a=await(await call(env,'/api/availability?date='+nextMonday())).json();
 const requests=await Promise.all([make(env,a.slots[0].start),make(env,a.slots[0].start)]);
 assert.deepEqual(requests.map(r=>r.response.status).sort(),[201,409]);
 const accepted=requests.find(r=>r.response.status===201);const retry=await call(env,'/api/appointments','POST',accepted.input);assert.equal(retry.status,200);
 assert.equal(env.DB.sqlite.prepare('SELECT COUNT(*) AS n FROM appointments').get().n,1);
 assert.equal(env.DB.sqlite.prepare('SELECT COUNT(*) AS n FROM reservations').get().n,75);
 const available=await(await call(env,'/api/availability?date='+nextMonday())).json();assert.equal(available.slots.length,4);
});
test('Management tokens isolate visitor records; cancellation frees the time',async()=>{
 const env=setup(),a=await make(env);assert.equal(a.response.status,201);
 assert.equal((await call(env,'/api/manage')).status,404);
 assert.equal((await call(env,'/api/manage','GET',null,{Authorization:'Bearer '+token()})).status,404);
 const own=await call(env,'/api/manage','GET',null,{Authorization:'Bearer '+a.input.token});assert.equal((await own.json()).booking.id,a.data.booking.id);
 const cancel=await call(env,'/api/manage','POST',{action:'cancel',version:1},{Authorization:'Bearer '+a.input.token});assert.equal(cancel.status,200);assert.equal((await cancel.json()).booking.status,'cancelled');
 assert.equal(env.DB.sqlite.prepare('SELECT COUNT(*) AS n FROM reservations').get().n,0);
});
test('A conflicting reschedule preserves the original appointment and reservation',async()=>{
 const env=setup(),a=await make(env),b=await make(env);
 const bad=await call(env,'/api/manage','POST',{action:'reschedule',version:1,start:b.data.booking.start,settingsVersion:1},{Authorization:'Bearer '+a.input.token});assert.equal(bad.status,409);
 const row=env.DB.sqlite.prepare('SELECT * FROM appointments WHERE id=?').get(a.data.booking.id);assert.equal(row.start,a.data.booking.start);assert.equal(row.version,1);
 assert.equal(env.DB.sqlite.prepare('SELECT COUNT(*) AS n FROM reservations WHERE appointment_id=?').get(row.id).n,75);
 const available=await(await call(env,'/api/availability?date='+nextMonday())).json();
 const ok=await call(env,'/api/manage','POST',{action:'reschedule',version:1,start:available.slots[0].start,settingsVersion:1},{Authorization:'Bearer '+a.input.token});assert.equal(ok.status,200);assert.equal((await ok.json()).booking.version,2);
 const stale=await call(env,'/api/manage','POST',{action:'cancel',version:1},{Authorization:'Bearer '+a.input.token});assert.equal(stale.status,409);
});
test('Staff authorization, origin checks and days-off conflicts are enforced on the server',async()=>{
 const env=setup();await make(env);
 assert.equal((await call(env,'/api/staff/overview')).status,403);
 assert.equal((await call(env,'/api/staff/overview','GET',null,{'oai-authenticated-user-id':'outsider','oai-authenticated-user-email':'owner@example.invalid'})).status,403);
 const overview=await call(env,'/api/staff/overview','GET',null,staff);assert.equal(overview.status,200);
 const day=await call(env,'/api/staff/day-off','PUT',{date:nextMonday()},staff);assert.equal(day.status,409);
 const settings=await call(env,'/api/staff/settings','PUT',{settings:{...defaults,enabled:false},version:1},staff);assert.equal(settings.status,200);
 const slots=await(await call(env,'/api/availability?date='+nextMonday())).json();assert.equal(slots.slots.length,0);
 const csrf=await call(env,'/api/appointments','POST',{}, {Origin:'https://elsewhere.test'});assert.equal(csrf.status,403);
 assert.equal((await call(env,'/api/appointments','POST',{name:'malformed'})).status,400);
});
