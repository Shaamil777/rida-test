import assert from 'node:assert/strict';
import {createCheckin,questions,choices,stem,scorePHQ4} from '../public/checkin-model.mjs';
assert.equal(stem,'Over the last 2 weeks, how often have you been bothered by the following problems?');
assert.deepEqual(questions.map(q=>q.text),['Feeling nervous, anxious, or on edge','Not being able to stop or control worrying','Feeling down, depressed, or hopeless','Little interest or pleasure in doing things']);
assert.deepEqual(choices,['Not at all','Several days','More than half the days','Nearly every day']);
const m=createCheckin();assert.throws(()=>m.summary());assert.throws(()=>m.score());
m.start();const before=m.state();assert.throws(()=>m.answer(99));assert.deepEqual(m.state(),before);assert.throws(()=>m.next());
m.answer(2);m.next();m.answer(1);m.back();assert.equal(m.state().answers[0],2);m.answer(0);m.next();assert.equal(m.state().answers[1],1);
m.reset();assert.deepEqual(m.state(),{step:-1,answers:[null,null,null,null],complete:false});
const bands=['Normal range','Normal range','Normal range','Mild','Mild','Mild','Moderate','Moderate','Moderate','Severe','Severe','Severe','Severe'];
let full=0,incomplete=0;
for(let pattern=0;pattern<625;pattern++){
 m.start();let n=pattern;const expected=[],values=[];
 for(const q of questions){const choice=n%5;n=Math.floor(n/5);if(choice===4){m.skip();expected.push('Not answered');values.push(null);}else{m.answer(choice);m.next();expected.push(q.choices[choice]);values.push(choice);}}
 assert.equal(m.state().complete,true);assert.deepEqual(m.summary().map(row=>row.answer),expected);
 const result=m.score();
 if(values.includes(null)){incomplete++;assert.deepEqual(result,{scored:false,total:null,band:null,anxiety:null,depression:null,anxietyPositive:null,depressionPositive:null});}
 else{full++;const total=values.reduce((a,b)=>a+b,0);assert.equal(result.total,total);assert.equal(result.band,bands[total]);assert.equal(result.anxiety,values[0]+values[1]);assert.equal(result.depression,values[2]+values[3]);assert.equal(result.anxietyPositive,(values[0]+values[1])>=3);assert.equal(result.depressionPositive,(values[2]+values[3])>=3);}
 m.back();assert.equal(m.state().step,3);assert.equal(m.state().complete,false);assert.throws(()=>m.score());
}
for(const input of [[],[0,0,0],[0,0,0,0,0],Array(4),[undefined,0,0,0],['0',0,0,0],[true,0,0,0],[-1,0,0,0],[4,0,0,0],[0.5,0,0,0],[NaN,0,0,0],null])assert.throws(()=>scorePHQ4(input));
m.reset();assert(m.state().answers.every(answer=>answer===null));
assert.equal(full,256);assert.equal(incomplete,369);
console.log('PHQ-4 wording/options verified; all 256 complete patterns match total bands and both subscale thresholds; 369 incomplete patterns produce no score; invalid inputs, edit/back and clearing pass.');
