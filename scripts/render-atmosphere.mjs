import {readFileSync,writeFileSync,readdirSync} from 'node:fs';
import {resources} from './resources.mjs';
const artNames=['clarity','connection','connection','beginning'];
const art=(name,kind)=>`<figure class="page-art page-art--${kind}" data-page-decoration aria-hidden="true"><img src="/${name==='kerala'?'kerala.jpg':`intro-${name}.webp`}" alt="" width="1536" height="1024" loading="lazy" decoding="async"></figure>`;
function walk(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(`${dir}/${e.name}`):e.name==='index.html'?[`${dir}/${e.name}`]:[]);}
for(const file of walk('public')){
 if(file.includes('/staff/'))continue;
 let html=readFileSync(file,'utf8');const ml=file.includes('/ml/'),home=file==='public/index.html'||file==='public/ml/index.html';
 const reading=/\/(services|resources|first-visit)\//.test(file);
 html=html.replace(/<figure class="page-art[\s\S]*?<\/figure>/g,'').replace(/<img class="service-art"[^>]*>/g,'').replace(/<div class="guide-preview-grid"[\s\S]*?<!-- end-guide-previews -->/g,'').replace(/<button class="page-motion"[\s\S]*?<\/button>/g,'');
 html=html.replace(/<body([^>]*)>/,(_,attrs)=>{
  const match=attrs.match(/class="([^"]*)"/),classes=(match?match[1].split(/\s+/):[]).filter(c=>!['rida-page','rida-home','rida-reading'].includes(c));
  classes.push('rida-page');if(home)classes.push('rida-home');if(reading)classes.push('rida-reading');
  return `<body${attrs.replace(/\s*class="[^"]*"/,'')} class="${classes.join(' ')}">`;
 });
 if(!html.includes('/page-atmosphere.css'))html=html.replace('</head>','<link rel="stylesheet" href="/page-atmosphere.css?v=1"><script type="module" src="/page-atmosphere.mjs?v=1"></script></head>');
 if(home){
  const scenes={'wellbeing-check':['clarity','checkin'],'practice':['connection','practice'],'kerala':['connection','kerala'],'care':['beginning','visit'],'contact':['beginning','closing']};
  for(const [id,[image,kind]] of Object.entries(scenes)){
   const pattern=new RegExp('(<section\\b(?=[^>]*\\bid="'+id+'")[^>]*>)');
   html=html.replace(pattern,(tag)=>tag.replace(/ data-atmosphere="[^"]*"/g,'').replace('>',' data-atmosphere="'+kind+'">')+art(image,kind));
  }
  let serviceIndex=0;html=html.replace(/(<a class="service-card"[^>]*>)/g,(tag)=>tag+`<img class="service-art" src="/intro-${['connection','connection','beginning','clarity','connection','clarity'][serviceIndex++%6]}.webp" alt="" width="1536" height="1024" loading="lazy" decoding="async">`);
  const previews=`<div class="guide-preview-grid">${resources.map((r,i)=>`<a class="guide-preview" href="${ml?'/ml/':'/'}resources/${r.slug}/"><img class="service-art" src="/intro-${artNames[i]}.webp" alt="" width="1536" height="1024" loading="lazy" decoding="async"><span class="guide-preview-category">${ml?r.categoryMl:r.category}</span><h3>${ml?r.titleMl:r.title}</h3><span class="guide-preview-action">${ml?'വായിക്കാം':'Read the guide'} <span aria-hidden="true">↗</span></span></a>`).join('')}</div><!-- end-guide-previews -->`;
  html=html.replace(/(<section[^>]*class="[^"]*resources-intro[^"]*"[^>]*>)([\s\S]*?)(<\/section>)/,(_,open,body,close)=>open+body+previews+close);
 }else if(reading){
  let image='beginning';if(file.includes('/services/individual/')||file.includes('/services/couples/')||file.includes('/services/group/')||file.includes('/resources/relationships/')||file.includes('/resources/supporting-a-teen/'))image='connection';
  if(file.includes('/assessment/')||file.includes('/burnout/')||file.includes('/resources/stress/'))image='clarity';
  // Editorial artwork sits beside the page introduction; clinical copy stays in normal flow.
  html=html.replace(/(<section class="section(?: (?:service-page|guide-page|article-page))?"[^>]*>)/,(open)=>open+art(image,'reading'));
  let index=0;html=html.replace(/(<article class="resource-card">)/g,tag=>tag+`<img class="service-art" src="/intro-${artNames[index++%4]}.webp" alt="" width="1536" height="1024" loading="lazy" decoding="async">`);
 }
 if(home||reading)html=html.replace(/(<footer[^>]*>)/,`$1<button class="page-motion" data-page-motion type="button" aria-pressed="false" hidden>${ml?'ചലനങ്ങൾ നിർത്തുക':'Pause page effects'}</button>`);
 writeFileSync(file,html);
}
console.log('Extended the intro artwork and depth through the public pages.');
