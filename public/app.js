const $ = (s) => document.querySelector(s);
const isMalayalam = document.documentElement.lang === 'ml';
const enquiries = $('#enquiry-dialog');
let returnFocus = null;
function openDialog(dialog) { returnFocus = document.activeElement; dialog.showModal(); document.body.classList.add('modal-open'); }
document.querySelectorAll('dialog:not(.rida-intro)').forEach(dialog => {
  dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { if (!document.querySelector('dialog[open]')) { document.body.classList.remove('modal-open'); if (returnFocus?.isConnected) returnFocus.focus(); } });
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r=dialog.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close(); }});
});
function updateMessage() {
 const service=$('#support-choice').value, language=$('input[name="language"]:checked').value, mode=$('input[name="mode"]:checked').value;
 const englishMessage=`Hello Riḍā by Rahma, I’d like to enquire about ${service === 'Not sure yet' ? 'support, but I’m not sure which service fits yet' : service.toLowerCase()}. My preferred language is ${language}, and my session preference is ${mode.toLowerCase()}. Could you share availability, session fees, duration and the cancellation policy? Thank you.`;
 const selectedLabel=$('#support-choice').selectedOptions[0].textContent;
 const preferenceLabels={English:'ഇംഗ്ലീഷ്',Malayalam:'മലയാളം',Hindi:'ഹിന്ദി',Online:'ഓൺലൈൻ','In person':'നേരിട്ട്',Either:'ഏതെങ്കിലും'};
 const message=isMalayalam?`Riḍā by Rahma, ${service==='Not sure yet'?'ഏത് സേവനമാണ് അനുയോജ്യമെന്ന് ഇനിയും തീരുമാനിച്ചിട്ടില്ല; പിന്തുണയെക്കുറിച്ച് അന്വേഷിക്കാൻ ആഗ്രഹിക്കുന്നു.':selectedLabel+' എന്ന വിഷയത്തിൽ അന്വേഷിക്കാൻ ആഗ്രഹിക്കുന്നു.'} ഇഷ്ടമുള്ള ഭാഷ: ${preferenceLabels[language]}. സെഷൻ രീതി: ${preferenceLabels[mode]}. ലഭ്യത, ഫീസ്, ദൈർഘ്യം, റദ്ദാക്കൽ നിബന്ധനകൾ എന്നിവ അറിയിക്കാമോ? നന്ദി.`:englishMessage;
 $('#message-preview').textContent=message;
 $('#enquiry-copy-status').textContent='';
 return message;
}
function enquire(service = 'Not sure yet') {
 if (!Array.from($('#support-choice').options).some(option => option.value === service)) throw new Error('Unknown enquiry service.');
 $('#support-choice').value=service; updateMessage(); openDialog(enquiries);
}
const enquiryIntents = {fees:'Fees and availability',intro:'An introductory conversation',fit:'Clinician fit and credentials'};
document.querySelectorAll('[data-enquire]').forEach(button=>button.addEventListener('click',()=>enquire(button.dataset.serviceChoice || enquiryIntents[button.dataset.intent])));
$('#enquiry-form').addEventListener('change',updateMessage);
$('#enquiry-form').addEventListener('submit',event=>event.preventDefault());
$('#copy-enquiry').addEventListener('click',async()=>{
 try {await navigator.clipboard.writeText(updateMessage());$('#enquiry-copy-status').textContent=isMalayalam?'പകർത്തി. സന്ദേശം അയച്ചിട്ടില്ല.':'Copied. Your enquiry has not been sent.';}
 catch {$('#enquiry-copy-status').textContent=isMalayalam?'മുകളിലെ സന്ദേശം തിരഞ്ഞെടുത്ത് പകർത്തുക. സന്ദേശം അയച്ചിട്ടില്ല.':'Select and copy the message above. Your enquiry has not been sent.';}
});
document.querySelectorAll('[data-print]').forEach(button=>{button.hidden=false;button.addEventListener('click',()=>window.print());});
document.addEventListener('rida:checkin-enquiry',()=>enquire('Not sure yet'));
const descriptions=window.ridaSupport;
let currentService='Not sure yet';
function showDetail(key){
 const d=descriptions[key]; if(!d) throw new Error('Unknown support topic.');
 $('#detail-title').textContent=d.title; $('#detail-label').textContent=d.label; $('#detail-intro').textContent=d.intro;
 $('#detail-meta').textContent=d.format || ''; $('#detail-meta').hidden=!d.format;
 const note=$('#detail-note');note.replaceChildren();note.hidden=!d.note;
 if(d.note){const p=document.createElement('p'),a=document.createElement('a');p.textContent=d.note;a.textContent=d.source+' ↗';a.href=d.url;a.target='_blank';a.rel='noopener noreferrer';note.append(p,a);}
 $('#service-depth').hidden=!d.audience; $('#detail-audience').textContent=d.audience || ''; $('#detail-session').textContent=d.session || '';
 $('#detail-list-title').textContent=d.audience?'Useful details to discuss':'A starting point for your conversation';
 $('#detail-list').replaceChildren(...d.points.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));
 currentService=d.service; $('#detail-appointment').href='/appointment/?service='+encodeURIComponent(key in {individual:1,couples:1,children:1,assessment:1,group:1,burnout:1}?key:Object.keys(descriptions).find(k=>descriptions[k].service===d.service)||''); openDialog($('#detail-dialog'));
}
document.querySelectorAll('[data-service],[data-topic]').forEach(button=>button.addEventListener('click',()=>showDetail(button.dataset.service||button.dataset.topic)));
$('#detail-enquire')?.addEventListener('click',()=>{const origin=returnFocus;$('#detail-dialog').close();enquire(currentService);returnFocus=origin;});
$('[data-policy]').addEventListener('click',()=>openDialog($('#policy-dialog')));
const menu=$('.menu'),mobile=$('#mobile-nav');menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));menu.setAttribute('aria-label',isMalayalam?(expanded?'നാവിഗേഷൻ തുറക്കുക':'നാവിഗേഷൻ അടയ്ക്കുക'):(expanded?'Open navigation':'Close navigation'));menu.textContent=expanded?'☰':'×';mobile.hidden=expanded;});mobile.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{mobile.hidden=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label',isMalayalam?'നാവിഗേഷൻ തുറക്കുക':'Open navigation');menu.textContent='☰';}));
updateMessage();
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!mobile.hidden&&!document.querySelector('dialog[open]')){mobile.hidden=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label',isMalayalam?'നാവിഗേഷൻ തുറക്കുക':'Open navigation');menu.textContent='☰';menu.focus();}});
if (document.modelContext?.registerTool) {
 const lifecycle = new AbortController();
 const services=Array.from($('#support-choice').options,option=>option.value);
 try { Promise.resolve(document.modelContext.registerTool({
  name:'prepare_practice_enquiry', title:'Prepare a practice enquiry',
  description:'Set service, language and session preferences and open the visible message preview. Does not send a message or book an appointment.',
  inputSchema:{type:'object',properties:{service:{type:'string',enum:services},language:{type:'string',enum:['English','Malayalam','Hindi']},mode:{type:'string',enum:['Online','In person','Either']}},required:['service','language','mode'],additionalProperties:false},
  annotations:{readOnlyHint:false,untrustedContentHint:false},
  execute(input){
   if(!input||typeof input!=='object'||!services.includes(input.service)||!['English','Malayalam','Hindi'].includes(input.language)||!['Online','In person','Either'].includes(input.mode)||Object.keys(input).some(key=>!['service','language','mode'].includes(key))) throw new Error('Choose a listed service, language and session preference.');
   $('#support-choice').value=input.service;
   document.querySelectorAll('input[name="language"]').forEach(radio=>radio.checked=radio.value===input.language);
   document.querySelectorAll('input[name="mode"]').forEach(radio=>radio.checked=radio.value===input.mode);
   if(!enquiries.open){document.querySelectorAll('dialog[open]').forEach(dialog=>dialog.close());openDialog(enquiries);}
   return {status:'prepared',message:updateMessage(),sent:false,bookingConfirmed:false};
  }
 },{signal:lifecycle.signal})).catch(()=>{}); } catch {}
 window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
}

const languageSwitch=document.querySelector('.language-switch');
if(languageSwitch){
 const destination=languageSwitch.getAttribute('href');
 const sharedHomeAnchors=new Set(['#main','#support','#practice','#services','#wellbeing-check','#questions','#contact','#urgent','#thread-signature-title']);
 const updateLanguageLink=()=>{const home=location.pathname==='/'||location.pathname==='/ml/';const hash=home&&!sharedHomeAnchors.has(location.hash)?'':location.hash;languageSwitch.href=destination+location.search+hash;};
 updateLanguageLink();window.addEventListener('hashchange',updateLanguageLink);languageSwitch.addEventListener('click',updateLanguageLink);
}
