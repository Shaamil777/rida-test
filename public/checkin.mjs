import {questions,createCheckin,stem} from './checkin-model.mjs?v=4';

const dialog=document.querySelector('#checkin-dialog');
const intro=document.querySelector('#checkin-intro');
const questionView=document.querySelector('#checkin-question');
const resultView=document.querySelector('#checkin-result');
const model=createCheckin();
let trigger=null;
const heading=document.querySelector('#checkin-title');
const nextButton=document.querySelector('#checkin-next');
const backButton=document.querySelector('#checkin-back');
const choices=document.querySelector('#checkin-choices');
const adult=document.querySelector('#checkin-adult');
const startButton=document.querySelector('#checkin-start');
const scoreView=document.querySelector('#phq-score');
const stemView=document.querySelector('#checkin-stem');
stemView.textContent=stem;

function render(moveFocus=true) {
 const state=model.state();
 intro.hidden=state.step!==-1;questionView.hidden=state.step<0||state.complete;resultView.hidden=!state.complete;
 stemView.hidden=state.step<0||state.complete;
 document.querySelector('#checkin-counter').textContent=state.step<0?'PHQ-4 · ENGLISH · ADULTS 18+':state.complete?'PHQ-4 · SCREENING RESULT':`QUESTION ${state.step+1} OF ${questions.length}`;
 if(state.step<0){
   heading.textContent='A brief anxiety & depression screen.';
   choices.replaceChildren();document.querySelector('#checkin-summary').replaceChildren();
   document.querySelector('#checkin-result-copy').textContent='';document.querySelector('#checkin-next-copy').textContent='';
   document.querySelector('#checkin-progress').value=1;nextButton.disabled=true;backButton.disabled=true;
   adult.checked=false;startButton.disabled=true;scoreView.hidden=true;
   scoreView.querySelectorAll('[data-score-value]').forEach(element=>element.textContent='');
 }
 else if(state.complete){
   const score=model.score();scoreView.hidden=!score.scored;
   if(!score.scored)scoreView.querySelectorAll('[data-score-value]').forEach(element=>element.textContent='');
   heading.textContent=score.scored?'Your PHQ-4 result.':'Your questionnaire is incomplete.';
   document.querySelector('#checkin-summary').replaceChildren(...model.summary().map(item=>{const row=document.createElement('div');const label=document.createElement('dt');const answer=document.createElement('dd');label.textContent=item.label;answer.textContent=item.answer;row.append(label,answer);return row;}));
   document.querySelector('#checkin-result-copy').textContent=score.scored?'These scores describe the symptoms you reported over the last two weeks. They do not establish a diagnosis, rule out a condition or assess your safety.':'No total or subscale scores are calculated when an answer is missing. You can review your answers, leave this screen, or ask for support without a score.';
   if(score.scored){
     document.querySelector('#phq-total').textContent=String(score.total);
     document.querySelector('#phq-band').textContent=score.band;
     document.querySelector('#phq-anxiety').textContent=`${score.anxiety} / 6`;
     document.querySelector('#phq-depression').textContent=`${score.depression} / 6`;
     document.querySelector('#phq-anxiety-note').textContent=score.anxietyPositive?'Screening threshold reached: further assessment suggested.':'Below the screening threshold; this does not rule out an anxiety disorder.';
     document.querySelector('#phq-depression-note').textContent=score.depressionPositive?'Screening threshold reached: further assessment suggested.':'Below the screening threshold; this does not rule out a depressive disorder.';
   }
   document.querySelector('#checkin-next-copy').textContent=!score.scored?'You do not need to finish a questionnaire to seek care. A doctor or qualified mental health professional can discuss any concerns you have.':score.anxietyPositive||score.depressionPositive?'At least one subscale reaches the published threshold of 3. Consider arranging an assessment with a doctor or qualified mental health professional. Further questions and a clinical conversation are needed to understand what the result means for you.':'Neither subscale reaches the published threshold of 3. If symptoms concern you, persist or affect daily life, speak with a doctor or qualified mental health professional regardless of the score.';
 } else {
   const q=questions[state.step];heading.textContent=q.text;
   document.querySelector('#checkin-progress').value=state.step+1;
   document.querySelector('#checkin-progress').setAttribute('aria-label',`Question ${state.step+1} of ${questions.length}`);
   choices.replaceChildren(...q.choices.map((text,index)=>{const label=document.createElement('label');label.className='checkin-option';const radio=document.createElement('input');radio.type='radio';radio.name='checkin-answer';radio.value=String(index);radio.checked=state.answers[state.step]===index;radio.addEventListener('change',()=>{model.answer(index);nextButton.disabled=false;});const span=document.createElement('span');span.textContent=text;label.append(radio,span);return label;}));
   backButton.disabled=state.step===0;nextButton.disabled=state.answers[state.step]===null;nextButton.textContent=state.step===questions.length-1?'See my result':'Next question';
 }
 if(moveFocus){heading.focus();dialog.scrollTop=0;}
}
function startCheckin(){
 trigger=document.activeElement;
 const nav=document.querySelector('#mobile-nav'),menu=document.querySelector('.menu');
 nav.hidden=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');menu.textContent='☰';
 model.reset();render(false);window.openDialog(dialog);heading.focus();
}
document.querySelectorAll('[data-checkin]').forEach(button=>button.addEventListener('click',startCheckin));
adult.addEventListener('change',()=>{startButton.disabled=!adult.checked;});
startButton.addEventListener('click',()=>{if(!adult.checked)return;model.start();render();});
nextButton.addEventListener('click',()=>{model.next();render();});
backButton.addEventListener('click',()=>{model.back();render();});
document.querySelector('#checkin-skip').addEventListener('click',()=>{model.skip();render();});
document.querySelector('#checkin-edit').addEventListener('click',()=>{model.back();render();});
document.querySelector('#checkin-restart').addEventListener('click',()=>{model.start();render();});
document.querySelector('#checkin-enquire').addEventListener('click',()=>{dialog.close();trigger?.focus();document.dispatchEvent(new Event('rida:checkin-enquiry'));});
document.querySelector('#checkin-services').addEventListener('click',()=>{dialog.close();requestAnimationFrame(()=>{const section=document.querySelector('#services');section.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});const title=section.querySelector('h2');title.setAttribute('tabindex','-1');title.focus({preventScroll:true});});});
dialog.addEventListener('close',()=>{model.reset();render(false);});
window.addEventListener('pagehide',()=>{model.reset();render(false);});
render(false);
