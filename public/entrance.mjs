const dialog=document.getElementById('rida-intro');
if(dialog&&typeof dialog.showModal==='function')startEntrance();

function startEntrance(){
 const root=document.documentElement,art=dialog.querySelector('.intro-art'),range=dialog.querySelector('.intro-scroll-range');
 const replay=document.querySelector('[data-intro-replay]'),enter=dialog.querySelector('[data-intro-enter]'),skip=dialog.querySelector('[data-intro-skip]');
 const motion=dialog.querySelector('[data-intro-motion]'),next=dialog.querySelector('[data-intro-next]'),turn=dialog.querySelector('[data-intro-turn]');
 const cards=[...dialog.querySelectorAll('[data-orbit-card]')],brand=dialog.querySelector('.intro-brand'),openingCopy=dialog.querySelector('.intro-opening');
 const count=dialog.querySelector('.intro-count'),meter=dialog.querySelector('.intro-meter');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),ml=root.lang==='ml',seenKey='rida-orbit-introduction-seen';
 const say=(en,mal)=>ml?mal:en,clamp=x=>Math.max(0,Math.min(1,x)),smooth=x=>{x=clamp(x);return x*x*(3-2*x);};
 let scene=null,loading=null,frame=0,time=0,lastPaint=0,paused=reduced.matches,closing=false,returnFocus=null;
 let width=1,height=1,offset=1,step=1,brandStop=1,maxScroll=1,active=-1,leanX=0,leanY=0,currentX=0,currentY=0;
 let cursor=-1,renderedCursor=-1,story=0,opening=0,frozenStory=0,frozenTime=0,frozenOpening=0,scrolled=false;
 let turnIndex=0,targetOrbit=0,currentOrbit=0;
 if(replay)replay.hidden=false;
 function remember(){try{sessionStorage.setItem(seenKey,'1');}catch{}}
 function hasSeen(){try{return sessionStorage.getItem(seenKey)==='1';}catch{return false;}}
 function requestFrame(){if(!frame&&dialog.open&&!document.hidden)frame=requestAnimationFrame(paint);}
 function measure(){
  if(!dialog.open)return;
  const oldMax=maxScroll,progress=dialog.scrollTop/oldMax;
  width=dialog.clientWidth;height=dialog.clientHeight;offset=height*.94;step=height*1.14;
  brandStop=offset+step*(cards.length-.05);maxScroll=brandStop+height*1.05;
  range.style.height=`${Math.ceil(maxScroll+height)}px`;
  if(oldMax>1)dialog.scrollTop=progress*maxScroll;
  scene?.resize();lastPaint=0;requestFrame();
 }
 function setAccessible(element,visible){
  if(element.inert===!visible)return;
  // Return focus to the persistent advance control before hiding its old panel.
  if(!visible&&element.contains(document.activeElement))next.focus({preventScroll:true});
  element.inert=!visible;element.setAttribute('aria-hidden',String(!visible));
 }
 function paint(now){
  frame=0;if(!dialog.open||document.hidden)return;
  const elapsed=lastPaint?Math.min(70,now-lastPaint):32;
  if(elapsed<30&&lastPaint){requestFrame();return;}
  lastPaint=now;if(!paused)time+=elapsed/1000;
  const y=dialog.scrollTop;cursor=(y-offset)/step;opening=clamp(y/offset);story=clamp(y/brandStop);
  renderedCursor=paused?cursor:renderedCursor+(cursor-renderedCursor)*.24;
  if(Math.abs(cursor-renderedCursor)<.0005)renderedCursor=cursor;
  const reveal=smooth((y-(brandStop-height*.82))/(height*.82));
  const exit=smooth((y-(maxScroll-height*.32))/(height*.32));
  const galleryIn=smooth(y/(height*.58)),galleryOut=1-smooth((y-(brandStop-height*.76))/(height*.65));
  active=cursor<-.55?-1:cursor>cards.length-.35?cards.length:Math.max(0,Math.min(cards.length-1,Math.round(cursor)));
  const brandVisible=reveal>.55;
  if(brandVisible)active=cards.length;
  dialog.dataset.stage=active<0?'opening':brandVisible?'brand':'gallery';
  dialog.dataset.chapter=String(active);dialog.dataset.progress=(y/maxScroll).toFixed(4);
  dialog.style.setProperty('--intro-progress',clamp(y/maxScroll).toFixed(4));
  dialog.style.setProperty('--opening-opacity',(1-smooth(y/(height*.42))).toFixed(4));
  dialog.style.setProperty('--brand-reveal',paused?(brandVisible?'1':'0'):reveal.toFixed(4));
  dialog.style.setProperty('--intro-fade',paused?'0':exit.toFixed(4));
  dialog.style.setProperty('--focus-blur',`${(smooth(y/(height*.7))*(width<600?5:9)).toFixed(2)}px`);
  dialog.style.setProperty('--art-opacity',(1-smooth(y/(height*.7))*.42-reveal*.25).toFixed(4));
  currentX+=(leanX-currentX)*.065;currentY+=(leanY-currentY)*.065;
  const driftX=paused?0:currentX*12,driftY=paused?0:currentY*8;
  for(let i=0;i<cards.length;i++){
   const card=cards[i],raw=i-renderedCursor;
   // A shallow hold gives each face time to be read; all faces still follow
   // the same rising helix. Incoming panels are below/right and leave above/left.
   const d=Math.sign(raw)*Math.max(0,Math.abs(raw)-.13)/.87;
   const theta=d*.86,visible=paused?i===active&&active<cards.length:Math.abs(d)<2.55;
   const focus=1-smooth((Math.abs(d)-.18)/.65);
   const opacity=paused?(visible?1:0):galleryIn*galleryOut*(1-smooth((Math.abs(d)-1.28)/1.15));
   const x=Math.sin(theta)*width*.88+driftX;
   const lift=d*height*.38+driftY;
   const z=(Math.cos(theta)-1)*(width<600?700:1000);
   const yaw=-d*49,tilt=d*10,roll=d*3.5;
   card.style.transform=paused?'translate(-50%,-50%)':`translate(-50%,-50%) translate3d(${x.toFixed(2)}px,${lift.toFixed(2)}px,${z.toFixed(2)}px) rotateY(${yaw.toFixed(2)}deg) rotateX(${tilt.toFixed(2)}deg) rotateZ(${roll.toFixed(2)}deg)`;
   card.style.visibility=visible&&opacity>.002?'visible':'hidden';
   card.style.opacity=opacity.toFixed(4);card.style.zIndex=String(Math.round(100-Math.abs(d)*10));
   card.style.setProperty('--card-focus',paused?'1':focus.toFixed(4));
   card.style.setProperty('--card-blur',paused?'0px':`${(smooth((Math.abs(d)-.7)/1.6)*2.5).toFixed(2)}px`);
   setAccessible(card,i===active&&active>=0&&!brandVisible&&opacity>.6);
  }
  openingCopy.setAttribute('aria-hidden',String(y>height*.3));setAccessible(brand,brandVisible);
  const label=active<0?'INTRO':brandVisible?'RIḌĀ':String(active+1).padStart(2,'0')+' / 06';
  if(count.textContent!==label)count.textContent=label;
  meter.setAttribute('aria-valuenow',String(Math.round(clamp(y/maxScroll)*100)));
  const nextLabel=brandVisible?say('Continue to website','വെബ്‌സൈറ്റിലേക്ക്'):active<0?say('Scroll to explore','താഴേക്ക് നീങ്ങുക'):say('Continue exploring','തുടർന്ന് കാണാം');
  if(next.firstChild.textContent.trim()!==nextLabel)next.firstChild.textContent=nextLabel+' ';
  currentOrbit+=(targetOrbit-currentOrbit)*(paused?1:.075);if(Math.abs(targetOrbit-currentOrbit)<.001)currentOrbit=targetOrbit;
  scene?.updateEntrance(paused?frozenTime:time,paused?0:currentX,paused?0:currentY,paused?frozenStory:story,paused?0:exit,currentOrbit,paused?frozenOpening:opening);
  turn.hidden=active>=0||art.dataset.fallback==='true';
  if(scrolled&&y>=maxScroll-2){finish(true);return;}
  if(!paused&&(scene||Math.abs(cursor-renderedCursor)>.0005))requestFrame();
 }
 async function loadScene(){
  if(scene){requestFrame();return;}if(loading)return loading;
  loading=(async()=>{
   try{
    const module=await import('/thread-scene.bundle.mjs?v=2');
    if(!dialog.open)return;
    scene=module.createThreadScene(art,{intro:true});requestFrame();
   }catch{art.dataset.fallback='true';turn.hidden=true;requestFrame();}
   finally{loading=null;}
  })();return loading;
 }
 function setPaused(value){
  if(value){frozenStory=story;frozenTime=time;frozenOpening=opening;}
  paused=value;dialog.dataset.motion=value?'paused':'playing';motion.setAttribute('aria-pressed',String(value));
  motion.textContent=value?say('Play motion','ചലനം ആരംഭിക്കുക'):say('Pause motion','ചലനം നിർത്തുക');lastPaint=0;requestFrame();
 }
 function open(){
  if(dialog.open)return;
  returnFocus=document.activeElement;time=lastPaint=0;closing=false;scrolled=false;active=-1;story=opening=frozenStory=frozenTime=frozenOpening=0;
  leanX=leanY=currentX=currentY=0;turnIndex=targetOrbit=currentOrbit=0;maxScroll=1;cursor=renderedCursor=-.94/1.14;
  delete art.dataset.fallback;dialog.dataset.stage='opening';
  dialog.style.setProperty('--intro-fade','0');dialog.style.setProperty('--brand-reveal','0');dialog.style.setProperty('--opening-opacity','1');dialog.style.setProperty('--focus-blur','0px');dialog.style.setProperty('--art-opacity','1');
  cards.forEach(card=>{card.style.visibility='hidden';setAccessible(card,false);});setAccessible(brand,false);
  root.classList.add('intro-open');dialog.showModal();dialog.scrollTop=0;dialog.focus({preventScroll:true});
  setPaused(reduced.matches);measure();loadScene();
 }
 function finish(goHome=false,navigate=false){
  if(closing)return;closing=true;remember();cancelAnimationFrame(frame);frame=0;
  dialog.close();root.classList.remove('intro-open');scene?.dispose();scene=null;
  if(goHome)window.scrollTo({top:0,behavior:'instant'});
  if(!navigate){const target=!goHome&&returnFocus===replay?replay:document.querySelector('main');target?.focus({preventScroll:true});}
 }
 function continueJourney(){
  const y=dialog.scrollTop;
  if(y>=brandStop-height*.42){finish(true);return;}
  const stops=cards.map((_,i)=>offset+i*step).concat(brandStop);
  const target=stops.find(stop=>stop>y+height*.15)??brandStop;
  dialog.scrollTo({top:target,behavior:paused?'instant':'smooth'});
 }
 enter.addEventListener('click',()=>finish(true));next.addEventListener('click',continueJourney);skip.addEventListener('click',()=>finish(true));
 dialog.addEventListener('cancel',event=>{event.preventDefault();finish();});dialog.addEventListener('close',()=>{if(!closing)finish();});
 replay?.addEventListener('click',open);motion.addEventListener('click',()=>setPaused(!paused));
 turn.addEventListener('click',()=>{turnIndex=(turnIndex+1)%4;targetOrbit=[0,.65,Math.PI,-.65][turnIndex];lastPaint=0;requestFrame();});
 dialog.querySelectorAll('[data-intro-destination]').forEach(link=>link.addEventListener('click',()=>finish(false,true)));
 dialog.addEventListener('scroll',()=>{if(dialog.scrollTop>2)scrolled=true;requestFrame();},{passive:true});
 dialog.addEventListener('pointermove',event=>{if(paused||event.pointerType==='touch')return;leanX=clamp(event.clientX/innerWidth)*2-1;leanY=clamp(event.clientY/innerHeight)*2-1;requestFrame();});
 dialog.addEventListener('pointerleave',()=>{leanX=leanY=0;requestFrame();});
 art.addEventListener('thread-context-lost',()=>{scene?.dispose();scene=null;art.dataset.fallback='true';turn.hidden=true;requestFrame();});
 window.addEventListener('resize',measure,{passive:true});
 window.addEventListener('hashchange',()=>{if(dialog.open)finish(false,true);});
 document.addEventListener('visibilitychange',()=>{cancelAnimationFrame(frame);frame=0;lastPaint=0;if(!document.hidden)requestFrame();});
 reduced.addEventListener('change',()=>{if(dialog.open)setPaused(reduced.matches);});
 window.addEventListener('pagehide',()=>{cancelAnimationFrame(frame);frame=0;if(dialog.open)finish();});
 Promise.resolve(document.fonts?.ready).then(measure);
 if(!location.hash&&!hasSeen()&&!reduced.matches)open();
}
