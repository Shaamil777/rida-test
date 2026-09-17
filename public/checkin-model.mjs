// PHQ-4, Kroenke et al. (2009), Appendix 1. Wording and item order preserved.
// Instrument released by Pfizer for unrestricted reproduction and use.
export const choices = Object.freeze(['Not at all','Several days','More than half the days','Nearly every day']);
export const stem = 'Over the last 2 weeks, how often have you been bothered by the following problems?';
export const questions = Object.freeze([
  {id:'anxiety',label:'Feeling nervous, anxious, or on edge',text:'Feeling nervous, anxious, or on edge',choices},
  {id:'worry',label:'Not being able to stop or control worrying',text:'Not being able to stop or control worrying',choices},
  {id:'mood',label:'Feeling down, depressed, or hopeless',text:'Feeling down, depressed, or hopeless',choices},
  {id:'interest',label:'Little interest or pleasure in doing things',text:'Little interest or pleasure in doing things',choices}
]);

export function scorePHQ4(answers) {
 if(!Array.isArray(answers)||answers.length!==4||!Array.from(answers).every(value=>value===null||(Number.isInteger(value)&&value>=0&&value<=3)))throw new Error('PHQ-4 requires four answers, each 0–3 or unanswered.');
 if(answers.some(value=>value===null))return {scored:false,total:null,band:null,anxiety:null,depression:null,anxietyPositive:null,depressionPositive:null};
 const anxiety=answers[0]+answers[1],depression=answers[2]+answers[3],total=anxiety+depression;
 return {scored:true,total,band:total<=2?'Normal range':total<=5?'Mild':total<=8?'Moderate':'Severe',anxiety,depression,anxietyPositive:anxiety>=3,depressionPositive:depression>=3};
}

export function createCheckin() {
  let answers=Array(questions.length).fill(null);
  let step=-1;
  return {
    start(){answers.fill(null);step=0;return this.state();},
    answer(choice){
      if(step<0||step>=questions.length||!Number.isInteger(choice)||choice<0||choice>=questions[step].choices.length) throw new Error('Choose one of the answers for this question.');
      answers[step]=choice;return this.state();
    },
    next(){if(step<0||step>=questions.length||answers[step]===null)throw new Error('Choose an answer or skip this question.');step++;return this.state();},
    skip(){if(step<0||step>=questions.length)throw new Error('No question to skip.');answers[step]=null;step++;return this.state();},
    back(){if(step>0)step--;return this.state();},
    reset(){answers.fill(null);step=-1;return this.state();},
    state(){return {step,answers:[...answers],complete:step===questions.length};},
    summary(){
      if(step!==questions.length)throw new Error('Finish or skip the questions before viewing your reflection.');
      return questions.map((question,index)=>({label:question.label,answer:answers[index]===null?'Not answered':question.choices[answers[index]]}));
    },
    score(){
      if(step!==questions.length)throw new Error('Finish the questionnaire before scoring.');
      return scorePHQ4(answers);
    }
  };
}
