// Progressive enhancement: native page scrolling and all text work without this file.
const root=document.documentElement;
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const pointer=matchMedia('(hover:hover) and (pointer:fine)');
const button=document.querySelector('[data-page-motion]');
const originalMotion=document.querySelector('.thread-motion');
const cards=[...document.querySelectorAll('.rida-home .service-card,.rida-home .founder-card,.rida-home .principles article,.rida-home .context-grid article,.rida-home .steps li,.guide-preview,.rida-reading .resource-card')];
const scenes=[...document.querySelectorAll('[data-atmosphere]')];
let manualPause=false,paused=true,frame=0,disposed=false;
const visible=new Set();
const clamp=x=>Math.max(0,Math.min(1,x));
function requestFrame(){if(!frame&&!paused&&!document.hidden&&!disposed)frame=requestAnimationFrame(paint);}
function paint(){
 frame=0;if(paused||document.hidden||disposed)return;
 for(const section of visible){const r=section.getBoundingClientRect(),p=clamp((innerHeight-r.top)/(innerHeight+r.height));section.style.setProperty('--art-shift',`${((p-.5)*70).toFixed(2)}px`);}
}
function setMotion(){
 const next=reduced.matches||manualPause||root.classList.contains('thread-static');
 if(next!==paused){paused=next;root.classList.toggle('page-effects-playing',!paused);root.classList.toggle('page-effects-paused',paused);}
 if(button){button.hidden=reduced.matches;button.setAttribute('aria-pressed',String(paused));button.textContent=document.documentElement.lang==='ml'?(paused?'ചലനങ്ങൾ ആരംഭിക്കുക':'ചലനങ്ങൾ നിർത്തുക'):(paused?'Play page effects':'Pause page effects');}
 if(paused){cancelAnimationFrame(frame);frame=0;for(const card of cards){card.style.removeProperty('--tilt-x');card.style.removeProperty('--tilt-y');}}else requestFrame();
}
const arrival=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('is-arrived');arrival.unobserve(entry.target);}}},{threshold:.08});
for(const card of cards){card.setAttribute('data-page-reveal','');arrival.observe(card);}
const sceneObserver=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting)visible.add(entry.target);else visible.delete(entry.target);}requestFrame();},{rootMargin:'100px'});
scenes.forEach(section=>sceneObserver.observe(section));
for(const card of cards.filter(el=>el.matches('.service-card,.guide-preview,.resource-card'))){
 card.addEventListener('pointermove',event=>{if(paused||!pointer.matches)return;const r=card.getBoundingClientRect();const x=clamp((event.clientX-r.left)/r.width)*2-1,y=clamp((event.clientY-r.top)/r.height)*2-1;card.style.setProperty('--tilt-x',`${(-y*2.3).toFixed(2)}deg`);card.style.setProperty('--tilt-y',`${(x*2.3).toFixed(2)}deg`);},{passive:true});
 card.addEventListener('pointerleave',()=>{card.style.removeProperty('--tilt-x');card.style.removeProperty('--tilt-y');});
}
button?.addEventListener('click',()=>{if(originalMotion&&!originalMotion.hidden)originalMotion.click();else{manualPause=!manualPause;setMotion();}});
const motionObserver=new MutationObserver(setMotion);motionObserver.observe(root,{attributes:true,attributeFilter:['class']});
window.addEventListener('scroll',requestFrame,{passive:true});window.addEventListener('resize',requestFrame,{passive:true});
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;}else requestFrame();});reduced.addEventListener('change',setMotion);
setMotion();
window.addEventListener('pagehide',event=>{cancelAnimationFrame(frame);frame=0;if(event.persisted)return;disposed=true;arrival.disconnect();sceneObserver.disconnect();motionObserver.disconnect();});
window.addEventListener('pageshow',()=>{if(!disposed)requestFrame();});
