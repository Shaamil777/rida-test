import {createThreadLettering} from './thread-lettering.mjs';
const prologue=document.querySelector('.thread-prologue');
if(prologue)startStory();
async function startStory(){
 const entryHash=location.hash;
 let entryUntouched=true;
 const cancelEntryAlignment=()=>{entryUntouched=false;};
 const entryEvents=['wheel','touchstart','pointerdown','keydown'];
 entryEvents.forEach(type=>window.addEventListener(type,cancelEntryAlignment,{passive:true,once:true}));
 function finishEntryAlignment(){
  if(entryUntouched&&entryHash&&location.hash===entryHash){
   let target;try{target=document.getElementById(decodeURIComponent(entryHash.slice(1)));}catch{}
   target?.scrollIntoView({behavior:'instant',block:'start'});
  }
  entryEvents.forEach(type=>window.removeEventListener(type,cancelEntryAlignment));
 }
 const main=document.querySelector('main'),hero=prologue.querySelector('.thread-hero'),stage=prologue.querySelector('.thread-stage'),signature=main.querySelector('.thread-signature'),button=stage.querySelector('.thread-motion'),phase=stage.querySelector('.thread-phase'),ml=document.documentElement.lang==='ml';
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const say=(en,mal)=>ml?mal:en,clamp=x=>Math.max(0,Math.min(1,x)),ease=x=>{x=clamp(x);return x*x*(3-2*x);};
 button.hidden=true;
 let scene;
 try{const module=await import('/thread-scene.bundle.mjs?v=2');scene=module.createThreadScene(stage);}catch{document.documentElement.classList.add('thread-static');entryEvents.forEach(type=>window.removeEventListener(type,cancelEntryAlignment));return;}
 let paused=reduced.matches,disposed=false,frameId=0,progress=0,measuring=false,visible=true,heroStart=0,heroRange=1,mainTop=0,points=[],pathLength=0,signatureStart=0,signatureHeight=1,leanX=0,leanY=0,lastTime=0,lastScroll=-1;
 const lettering=createThreadLettering(signature);
 const NS='http://www.w3.org/2000/svg';
 const svg=document.createElementNS(NS,'svg');svg.classList.add('thread-trail');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');
 svg.innerHTML='<defs><linearGradient id="rida-thread-metal" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox"><stop offset="0%" stop-color="#ba7555"/><stop offset="22%" stop-color="#b97955"/><stop offset="55%" stop-color="#a46145"/><stop offset="100%" stop-color="#c38a61"/></linearGradient></defs><path class="trail-shadow"/><path class="trail-body"/><path class="trail-shine"/><circle class="trail-tip" r="3.5"/>';
 const paths=[...svg.querySelectorAll('path')],line=paths[1],tip=svg.querySelector('circle');main.append(svg);
 function requestFrame(){if(!frameId&&!disposed&&!document.hidden)frameId=requestAnimationFrame(frame);}
 function measure(){
  if(measuring||disposed)return;measuring=true;
  const y=scrollY,mainRect=main.getBoundingClientRect(),p=prologue.getBoundingClientRect(),h=hero.getBoundingClientRect(),s=stage.getBoundingClientRect(),end=signature.getBoundingClientRect(),width=mainRect.width;
  mainTop=mainRect.top+y;heroStart=p.top+y-document.querySelector('.header').getBoundingClientRect().height;heroRange=Math.max(1,p.height-h.height);
  signatureStart=end.top+y;signatureHeight=end.height;
  scene.resize();const exit=scene.exit();
  const startX=s.left-mainRect.left+exit.x,startY=p.top+y-mainTop+p.height-h.height+(s.top-h.top)+exit.y;
  const narrow=width<761,left=narrow?8:Math.max(20,width*.035),right=width-left;
  const signatureY=end.top+y-mainTop;
  let side=right,currentY=startY,d=`M ${startX} ${startY}`;
  const joinY=Math.min(signatureY-80,startY+100);
  d+=` C ${startX} ${startY+55}, ${right} ${startY+45}, ${right} ${joinY}`;currentY=joinY;
  const sections=[...main.children].filter(el=>el.matches('section.section,section.checkin-invitation,section.closing')&&!el.classList.contains('thread-signature'));
  // Cross only in the generous section padding, keeping the line out of reading areas.
  sections.forEach((section,index)=>{
   const r=section.getBoundingClientRect(),padding=parseFloat(getComputedStyle(section).paddingBottom),bottom=r.bottom+y-mainTop;
   if(bottom<=currentY+100||padding<38)return;
   const bendY=bottom-Math.min(padding*.36,35),other=index%3===1?left:right;
   d+=` C ${side} ${currentY+Math.min((bendY-currentY)*.25,100)}, ${side+(side===right?-1:1)*(narrow?3:11)} ${bendY-90}, ${side} ${bendY-34}`;
   if(side!==other){d+=` C ${side} ${bendY+2}, ${other} ${bendY+6}, ${other} ${bendY+24}`;currentY=bendY+24;side=other;}else{d+=` Q ${side+(side===right?-1:1)*(narrow?5:17)} ${bendY-8}, ${side} ${bendY+12}`;currentY=bendY+12;}
  });
  // The next SVG starts at this exact margin point and draws the actual letters.
  d+=` C ${side} ${currentY+40}, ${left} ${signatureY-45}, ${left} ${signatureY}`;
  svg.setAttribute('viewBox',`0 0 ${width} ${mainRect.height}`);svg.style.height=mainRect.height+'px';paths.forEach(path=>path.setAttribute('d',d));
  pathLength=line.getTotalLength();paths.forEach(path=>{path.style.strokeDasharray=pathLength+' '+pathLength;});
  points=Array.from({length:901},(_,i)=>{const point=line.getPointAtLength(i/900*pathLength);return{x:point.x,y:point.y,length:i/900*pathLength};});
  lettering.measure();lastScroll=-1;measuring=false;requestFrame();
 }
 function drawTrail(){
  if(paused){svg.style.display='none';lettering.draw(1);return;}
  svg.style.display='';const frontier=scrollY+innerHeight*.79-mainTop;
  let low=0,high=points.length-1;while(low<high){const mid=Math.ceil((low+high)/2);if(points[mid].y<=frontier)low=mid;else high=mid-1;}
  const p=points[low],next=points[Math.min(low+1,points.length-1)],f=clamp((frontier-p.y)/(next.y-p.y||1));
  let length=p.length+(next.length-p.length)*f;if(frontier<points[0].y)length=0;
  if(scrollY+innerHeight>=document.documentElement.scrollHeight-4)length=pathLength;
  paths.forEach(path=>path.style.strokeDashoffset=pathLength-length);
  const point=line.getPointAtLength(length);tip.setAttribute('cx',point.x);tip.setAttribute('cy',point.y);tip.style.opacity=length>1&&length<pathLength-1?'1':'0';
  const headerHeight=document.querySelector('.header').getBoundingClientRect().height;
  const run=Math.max(1,signatureHeight-lettering.panel.clientHeight),lead=innerHeight*.2;
  // Finish before the panel unpins, leaving time to read the complete signature.
  const written=clamp((scrollY+headerHeight-signatureStart+lead)/((run+lead)*.8));
  const arrival=clamp((frontier-(signatureStart-mainTop))/(lettering.panel.clientHeight*.23));
  lettering.draw(written,arrival);
 }
 function frame(time){
  frameId=0;if(disposed||document.hidden)return;
  const target=paused?0:clamp((scrollY-heroStart)/heroRange),dt=Math.min(64,time-(lastTime||time));lastTime=time;
  progress+= (target-progress)*(1-Math.exp(-Math.max(16,dt)/62));if(Math.abs(target-progress)<.00015)progress=target;
  if(visible)scene.update(progress,paused?0:leanX,paused?0:leanY);
  if(lastScroll!==scrollY){drawTrail();lastScroll=scrollY;}
  phase.textContent=progress<.2?say('Two forms. One connection.','രണ്ട് രൂപങ്ങൾ. ഒരു ബന്ധം.'):progress<.83?say('Let the thread unfold.','നൂൽ അഴിയട്ടെ.'):say('One thread. Your whole story.','ഒരേ നൂൽ. നിങ്ങളുടെ മുഴുവൻ കഥ.');
  if(progress!==target)requestFrame();
 }
 function setPaused(value){
  paused=value;progress=0;document.documentElement.classList.toggle('thread-active',!paused);document.documentElement.classList.toggle('thread-static',paused);button.setAttribute('aria-pressed',String(paused));button.textContent=paused?say('Play animation','ചലനം ആരംഭിക്കുക'):say('Pause animation','ചലനം നിർത്തുക');lastScroll=-1;measure();
 }
 const onScroll=()=>requestFrame(),onResize=()=>{lastScroll=-1;measure();},onVisibility=()=>{if(document.hidden){cancelAnimationFrame(frameId);frameId=0;}else{lastScroll=-1;measure();}},onPreference=()=>setPaused(reduced.matches),onMotion=()=>setPaused(!paused),onPointer=e=>{const r=stage.getBoundingClientRect();leanX=clamp((e.clientX-r.left)/r.width)*2-1;leanY=clamp((e.clientY-r.top)/r.height)*2-1;requestFrame();},onPointerLeave=()=>{leanX=0;leanY=0;requestFrame();},onContext=()=>{setPaused(true);button.hidden=true;};
 button.hidden=false;button.addEventListener('click',onMotion);window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onResize,{passive:true});document.addEventListener('visibilitychange',onVisibility);reduced.addEventListener('change',onPreference);stage.addEventListener('pointermove',onPointer,{passive:true});stage.addEventListener('pointerleave',onPointerLeave,{passive:true});stage.addEventListener('thread-context-lost',onContext);
 const intersection=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)requestFrame();},{rootMargin:'100px'});intersection.observe(stage);
 const resizeObserver=new ResizeObserver(()=>{lastScroll=-1;measure();});resizeObserver.observe(main);
 setPaused(paused);
 Promise.resolve(document.fonts?.ready).then(()=>{if(!disposed){measure();requestAnimationFrame(finishEntryAlignment);}});
 // BFCache keeps the scene; a real navigation releases all GPU resources.
 window.addEventListener('pagehide',event=>{cancelAnimationFrame(frameId);frameId=0;if(event.persisted)return;disposed=true;intersection.disconnect();resizeObserver.disconnect();scene.dispose();window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onResize);document.removeEventListener('visibilitychange',onVisibility);reduced.removeEventListener('change',onPreference);},{once:true});
 window.addEventListener('pageshow',()=>{if(!disposed){lastScroll=-1;measure();}});
}
