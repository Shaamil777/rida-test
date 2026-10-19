const $ = (s) => document.querySelector(s);
const enquiries = $('#enquiry-dialog');
let returnFocus = null;
function openDialog(dialog) { returnFocus = document.activeElement; dialog.showModal(); document.body.classList.add('modal-open'); }
document.querySelectorAll('dialog:not(.rida-intro)').forEach(dialog => {
  dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { if (!document.querySelector('dialog[open]')) { document.body.classList.remove('modal-open'); if (returnFocus?.isConnected) returnFocus.focus(); } });
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r=dialog.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close(); }});
});
function updateMessage() {
  const service = $('#support-choice')?.value || 'Not sure yet';
  const mode = $('input[name="mode"]:checked')?.value || 'Online';
  const message = `Hello Riḍā by Rahma, I’d like to enquire about ${service === 'Not sure yet' ? 'support, but I’m not sure which service fits yet' : service.toLowerCase()}. My session preference is ${mode.toLowerCase()}. Could you share availability, session fees, duration and the cancellation policy? Thank you.`;
  const preview = $('#message-preview');
  if (preview) preview.textContent = message;
  const copyStatus = $('#enquiry-copy-status');
  if (copyStatus) copyStatus.textContent = '';
  return message;
}
function enquire(service = 'Not sure yet') {
  if (!Array.from($('#support-choice').options).some(option => option.value === service)) throw new Error('Unknown enquiry service.');
  $('#support-choice').value=service; updateMessage(); openDialog(enquiries);
}
const enquiryIntents = {fees:'Fees and availability',intro:'An introductory conversation',fit:'Clinician fit and credentials'};
document.querySelectorAll('[data-enquire]').forEach(button=>button.addEventListener('click',()=>enquire(button.dataset.serviceChoice || enquiryIntents[button.dataset.intent])));
$('#enquiry-form')?.addEventListener('change',updateMessage);
$('#enquiry-form')?.addEventListener('submit',event=>event.preventDefault());
$('#copy-enquiry')?.addEventListener('click',async()=>{
  try {
    await navigator.clipboard.writeText(updateMessage());
    const status = $('#enquiry-copy-status');
    if (status) status.textContent = 'Copied. Your enquiry has not been sent.';
  } catch {
    const status = $('#enquiry-copy-status');
    if (status) status.textContent = 'Select and copy the message above. Your enquiry has not been sent.';
  }
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
$('[data-policy]')?.addEventListener('click',()=>openDialog($('#policy-dialog')));
const menu=$('.menu'),mobile=$('#mobile-nav');
if (menu && mobile) {
  menu.addEventListener('click',()=>{
    const expanded=menu.getAttribute('aria-expanded')==='true';
    menu.setAttribute('aria-expanded',String(!expanded));
    menu.setAttribute('aria-label',expanded?'Open navigation':'Close navigation');
    menu.textContent=expanded?'☰':'×';
    mobile.hidden=expanded;
  });
  mobile.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    mobile.hidden=true;
    menu.setAttribute('aria-expanded','false');
    menu.setAttribute('aria-label','Open navigation');
    menu.textContent='☰';
  }));
}
updateMessage();
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&mobile&&!mobile.hidden&&!document.querySelector('dialog[open]')){
    mobile.hidden=true;
    menu.setAttribute('aria-expanded','false');
    menu.setAttribute('aria-label','Open navigation');
    menu.textContent='☰';
    menu.focus();
  }
});
if (document.modelContext?.registerTool) {
  const lifecycle = new AbortController();
  const serviceOptions = $('#support-choice')?.options;
  const services = serviceOptions ? Array.from(serviceOptions, option => option.value) : [];
  try { Promise.resolve(document.modelContext.registerTool({
    name:'prepare_practice_enquiry', title:'Prepare a practice enquiry',
    description:'Set service and session preferences and open the visible message preview. Does not send a message or book an appointment.',
    inputSchema:{type:'object',properties:{service:{type:'string',enum:services},mode:{type:'string',enum:['Online','In person','Either']}},required:['service','mode'],additionalProperties:false},
    annotations:{readOnlyHint:false,untrustedContentHint:false},
    execute(input){
      if(!input||typeof input!=='object'||!services.includes(input.service)||!['Online','In person','Either'].includes(input.mode)) throw new Error('Choose a listed service and session preference.');
      if($('#support-choice')) $('#support-choice').value=input.service;
      document.querySelectorAll('input[name="mode"]').forEach(radio=>radio.checked=radio.value===input.mode);
      if(enquiries&&!enquiries.open){document.querySelectorAll('dialog[open]').forEach(dialog=>dialog.close());openDialog(enquiries);}
      return {status:'prepared',message:updateMessage(),sent:false,bookingConfirmed:false};
    }
  },{signal:lifecycle.signal})).catch(()=>{}); } catch {}
  window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
}


// Intercept clicks on hash links to prevent # in URL for same-page navigation
document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    try {
      const url = new URL(this.href, window.location.origin);
      if (url.pathname === window.location.pathname && url.hash) {
        const target = document.querySelector(url.hash);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      }
    } catch(err) {}
  });
});

// Remove hash from URL on page load (e.g. when navigating from a subpage back to a homepage section)
window.addEventListener('load', () => {
  if (window.location.hash) {
    setTimeout(() => {
      history.replaceState(null, null, window.location.pathname + window.location.search);
    }, 50);
  }
});

// Reach Out Form - WhatsApp Integration
document.addEventListener('DOMContentLoaded', () => {
  const reachOutForm = document.getElementById('reach-out-form');
  if (reachOutForm) {
    reachOutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('reach-out-name')?.value || '';
      const email = document.getElementById('reach-out-email')?.value || '';
      const phone = document.getElementById('reach-out-phone')?.value || '';
      const msg = document.getElementById('reach-out-msg')?.value || '';
      
      let text = `Hello Riḍā by Rahma, I would like to reach out.\n`;
      if (name) text += `\n*Name:* ${name}`;
      if (email) text += `\n*Email:* ${email}`;
      if (phone) text += `\n*Phone:* ${phone}`;
      if (msg) text += `\n\n*Message:*\n${msg}`;
      
      const whatsappUrl = `https://wa.me/918137848571?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
    });
  }
});

// Initialize Lenis smooth scrolling
if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js';
  script.onload = () => {
    // Override smooth scroll behavior from CSS to prevent conflicts
    document.documentElement.style.setProperty('scroll-behavior', 'auto', 'important');
    
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      wheelMultiplier: 0.85
    });
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    // Wire up Lenis to hash links
    document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach(link => {
      link.addEventListener('click', function(e) {
        try {
          const url = new URL(this.href, window.location.origin);
          if (url.pathname === window.location.pathname && url.hash) {
            const target = document.querySelector(url.hash);
            if (target) {
              e.preventDefault();
              lenis.scrollTo(target, { duration: 1.5 });
              target.setAttribute('tabindex', '-1');
              target.focus({ preventScroll: true });
            }
          }
        } catch(err) {}
      });
    });
  };
  document.head.appendChild(script);
}

// Minimal Creator Tooltip Hover & Click
function initCreatorTooltip() {
  const badges = document.querySelectorAll('.creator-badge');
  if (!badges.length) return;

  badges.forEach(badge => {
    const trigger = badge.querySelector('.creator-name-link, .creator-trigger');
    const tooltip = badge.querySelector('.creator-tooltip, .creator-popover');
    let timer = null;

    function show() {
      clearTimeout(timer);
      badge.classList.add('is-active');
      trigger?.setAttribute('aria-expanded', 'true');
    }

    function hide() {
      clearTimeout(timer);
      badge.classList.remove('is-active');
      trigger?.setAttribute('aria-expanded', 'false');
    }

    function scheduleHide() {
      clearTimeout(timer);
      timer = setTimeout(hide, 200);
    }

    badge.addEventListener('mouseenter', show);
    badge.addEventListener('mouseleave', scheduleHide);

    trigger?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (badge.classList.contains('is-active')) {
        hide();
      } else {
        show();
      }
    });

    tooltip?.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  document.addEventListener('click', (e) => {
    badges.forEach(badge => {
      if (!badge.contains(e.target)) {
        badge.classList.remove('is-active');
        badge.querySelector('.creator-name-link, .creator-trigger')?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      badges.forEach(badge => {
        badge.classList.remove('is-active');
        badge.querySelector('.creator-name-link, .creator-trigger')?.setAttribute('aria-expanded', 'false');
      });
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCreatorTooltip);
} else {
  initCreatorTooltip();
}


