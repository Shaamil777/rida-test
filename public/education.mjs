for(const form of document.querySelectorAll('[data-learning-check]')){
  const fallback=form.parentElement.querySelector('.learn-answer');
  form.hidden=false;
  if(fallback)fallback.hidden=true;
  form.addEventListener('submit',event=>{
    event.preventDefault();
    const answer=form.querySelector('input:checked');
    if(!answer)return;
    const correct=answer.dataset.correct==='true';
    const feedback=form.querySelector('.learn-feedback');
    feedback.textContent=(correct?'That’s right. ':'A useful distinction: ')+form.dataset.explanation;
    form.dataset.result=correct?'correct':'review';
  });
  form.addEventListener('change',()=>{
    form.querySelector('.learn-feedback').textContent='';
    delete form.dataset.result;
  });
}
// Include the explanations when a reader prints, then restore their reading state.
const printAnswers=[...document.querySelectorAll('.learn-answer')];
let answerStates=[];
window.addEventListener('beforeprint',()=>{
  answerStates=printAnswers.map(answer=>answer.open);
  printAnswers.forEach(answer=>{answer.open=true;});
});
window.addEventListener('afterprint',()=>{
  printAnswers.forEach((answer,index)=>{answer.open=answerStates[index]??false;});
});
