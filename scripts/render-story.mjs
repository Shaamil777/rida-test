import {readFileSync,writeFileSync} from 'node:fs';
import {renderIntro} from './intro-markup.mjs';
for(const [file,ml] of [['public/index.html',false],['public/ml/index.html',true]]){
 let html=readFileSync(file,'utf8');
 if(!html.includes('/thread-story.css'))html=html.replace('</head>','<link rel="stylesheet" href="/thread-story.css?v=1"><script type="module" src="/thread-story.mjs?v=1"></script></head>');
 if(!html.includes('class="thread-prologue"')){
  html=html.replace(/<section class="hero">([\s\S]*?)<\/section>/,(_,body)=>{
   body=body.replace(/<h1>[\s\S]*?<\/h1>/,ml?'<h1><span>മനസ്സിനൊരു<br> ഇടം.</span><em>ഹൃദയത്തിനൊരു<br> ഇടം.</em></h1>':'<h1><span>Space for<br> your mind.</span><em>Room for<br> your heart.</em></h1>');
   body=body.replace('class="hero-image mind-heart-art"','class="hero-image mind-heart-art thread-stage"');
   body=body.replace(/<div class="image-label">[\s\S]*?<\/div>/,`<div class="image-label"><span>${ml?'മനസ്സും ഹൃദയവും':'MIND & HEART'}</span><span>${ml?'ഒരേ നൂലിൽ':'ONE CONTINUOUS THREAD'}</span></div>`);
   body=body.replace(/<div class="image-caption">[\s\S]*?<\/div>/,`<div class="image-caption"><span class="thread-phase" aria-hidden="true">${ml?'രണ്ട് രൂപങ്ങൾ. ഒരു ബന്ധം.':'Two forms. One connection.'}</span></div><span class="thread-exit" aria-hidden="true"></span><button class="thread-motion" type="button" hidden aria-pressed="false">${ml?'ചലനം നിർത്തുക':'Pause animation'}</button>`);
   body=body.replace(/<div class="hero-foot">[\s\S]*?<\/div>/,'');
   body+=`<div class="hero-foot thread-cue"><span aria-hidden="true">01 / ${ml?'ബന്ധം':'CONNECTION'}</span><p>${ml?'നൂലിനെ പിന്തുടരാൻ താഴേക്ക് നീങ്ങുക':'Scroll to follow the thread'} <span aria-hidden="true">↓</span></p></div>`;
   return `<div class="thread-prologue"><section class="hero thread-hero">${body}</section></div>`;
  });
 }
 const signature=`<section class="thread-signature" id="thread-signature-title" aria-labelledby="thread-signature-heading"><div class="signature-panel"><div class="signature-light" aria-hidden="true"></div><p class="eyebrow">${ml?'എല്ലാം ഒരേ കഥയുടെ ഭാഗം':'EVERY PART OF YOU. ONE WHOLE STORY.'}</p><div class="signature-copy"><h2 id="thread-signature-heading" aria-label="Rida by Rahma"><span class="signature-rida">riḍā</span><span class="signature-rahma" lang="en">BY RAHMA</span></h2><p class="signature-note" lang="en">Mind & heart, in conversation.</p></div>${ml?'<p class="signature-translation">മനസ്സും ഹൃദയവും, സംഭാഷണത്തിൽ.</p>':''}<span class="signature-endpoint" aria-hidden="true"></span></div></section>`;
 if(html.includes('class="thread-signature"'))html=html.replace(/<section class="thread-signature"[\s\S]*?<\/section>/,signature);
 else html=html.replace('</main>',signature+'</main>');
 if(!html.includes('/entrance.css'))html=html.replace('</head>','<link rel="stylesheet" href="/entrance.css?v=1"><script type="module" src="/entrance.mjs?v=1"></script></head>');
 const replay=`<button class="intro-replay" type="button" data-intro-replay hidden>${ml?'ആമുഖം വീണ്ടും കാണുക':'Replay introduction'}</button>`;
 html=html.replace(/<button class="intro-replay"[\s\S]*?<\/button>/g,'');
 html=html.replace(/(<button class="thread-motion"[\s\S]*?<\/button>)/,`$1${replay}`);
 const intro=renderIntro(ml);
 if(html.includes('id="rida-intro"'))html=html.replace(/<dialog id="rida-intro"[\s\S]*?<\/dialog>/,intro);
 else html=html.replace('</body>',intro+'</body>');
 writeFileSync(file,html);
}
console.log('Rendered the brain–heart scroll story on both homepages.');
