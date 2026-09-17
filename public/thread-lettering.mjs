import {phrases} from './signature-type.mjs';
const NS='http://www.w3.org/2000/svg',clamp=x=>Math.max(0,Math.min(1,x));

// Readable, filled brand typography stays visible. The copper thread traces the
// exact letter outlines after looping around the identity. All movement is
// driven by the existing scroll/pause controller; the message never disappears.
export function createThreadLettering(signature){
 const panel=signature.querySelector('.signature-panel');
 const svg=document.createElementNS(NS,'svg');svg.classList.add('signature-writing','signature-typeset');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');
 panel.append(svg);signature.dataset.writing='true';
 let segments=[],total=0,arrivalLength=0,tip;
 const num=n=>n.toFixed(2),point=p=>p.map(num).join(' ');
 const widthOf=(phrase,size,spacing)=>phrase.glyphs.reduce((sum,g,i)=>sum+g.advance*size+(i?spacing:0),0);
 function pathIn(commands,x,y,size){return commands.map(([command,...coords])=>command+(coords.length?' '+coords.map((v,i)=>num((i%2?y:x)+v*size)).join(' '):'')).join(' ');}
 function element(tag,attributes,parent){const e=document.createElementNS(NS,tag);for(const [name,value] of Object.entries(attributes))e.setAttribute(name,value);parent.append(e);return e;}
 function measure(){
  const width=panel.clientWidth,height=panel.clientHeight,narrow=width<761,gutter=narrow?8:Math.max(20,width*.035);
  svg.setAttribute('viewBox',`0 0 ${width} ${height}`);svg.replaceChildren();segments=[];total=0;arrivalLength=0;
  const defs=element('defs',{},svg);
  const copper=element('linearGradient',{id:'signature-copper',x1:'0%',y1:'15%',x2:'100%',y2:'85%'},defs);
  [['0%','#a76140'],['25%','#f4cc9d'],['48%','#c88f65'],['72%','#f0c799'],['100%','#98603f']].forEach(([offset,color])=>element('stop',{offset,'stop-color':color},copper));
  const ivory=element('linearGradient',{id:'signature-ivory',x1:'0%',y1:'0%',x2:'0%',y2:'100%'},defs);
  [['0%','#fffaf0'],['75%','#f6e8d4'],['100%','#dcc5a9']].forEach(([offset,color])=>element('stop',{offset,'stop-color':color},ivory));
  const atmosphere=element('g',{class:'type-atmosphere'},svg),routes=element('g',{},svg),fills=element('g',{class:'type-letterforms'},svg),traces=element('g',{},svg);
  tip=element('circle',{class:'type-tip',r:narrow?2.8:3.2},svg);
  const nameSize=Math.min(narrow?166:254,width*.64/(widthOf(phrases.name,1,-.065)));
  const bySize=narrow?18:22,bySpacing=bySize*.25,tagSize=narrow?25:32;
  const rows=[
   {phrase:phrases.name,size:nameSize,spacing:-.065*nameSize,baseline:height*.47,type:'name'},
   {phrase:phrases.by,size:bySize,spacing:bySpacing,baseline:height*.58,type:'by'},
   ...(narrow?[
    {phrase:phrases.taglineStart,size:tagSize,spacing:0,baseline:height*.755,type:'tagline'},
    {phrase:phrases.taglineEnd,size:tagSize,spacing:0,baseline:height*.81,type:'tagline'}
   ]:[{phrase:phrases.tagline,size:Math.min(tagSize,width*.80/widthOf(phrases.tagline,1,0)),spacing:0,baseline:height*.775,type:'tagline'}])
  ];
  const cx=width/2,cy=height*.395,rx=Math.min(width*.425,470),ry=Math.min(height*.238,194),angle=-.13;
  const loopPoint=t=>[cx+rx*Math.cos(t)*Math.cos(angle)-ry*Math.sin(t)*Math.sin(angle),cy+rx*Math.cos(t)*Math.sin(angle)+ry*Math.sin(t)*Math.cos(angle)];
  const loop=Array.from({length:97},(_,i)=>loopPoint(-Math.PI*.72+i/96*Math.PI*2));
  const loopPath=loop.map((p,i)=>(i?'L ':'M ')+point(p)).join(' ');
  element('path',{d:loopPath,class:'type-loop-guide'},atmosphere);
  element('ellipse',{cx,cy,rx:rx*.98,ry:ry*.95,transform:`rotate(11 ${cx} ${cy})`,class:'type-echo'},atmosphere);
  const loopStart=loop[0],loopEnd=loop.at(-1);
  let last=[gutter,0],first=true,lastBaseline=0;
  function add(d,kind,parent){
   const path=element('path',{d,class:'type-trace '+kind},parent),length=path.getTotalLength();
   path.style.strokeDasharray=length+' '+length;path.style.strokeDashoffset=length;
   segments.push({path,length,start:total,kind});total+=length;
   return path;
  }
  for(const row of rows){
   const rowWidth=widthOf(row.phrase,row.size,row.spacing),x=(width-rowWidth)/2;let cursor=x,rowStart=true;
   for(const glyph of row.phrase.glyphs){
    if(glyph.commands.length){
     const d=pathIn(glyph.commands,cursor,row.baseline,row.size);
     const startCommand=glyph.commands.find(c=>c[0]==='M');
     const start=[cursor+startCommand[1]*row.size,row.baseline+startCommand[2]*row.size];
     if(first){
      add(`M ${gutter} 0 C ${gutter} ${height*.16}, ${loopStart[0]-40} ${loopStart[1]-35}, ${point(loopStart)}`,'type-arrival',routes);
      arrivalLength=total;
      add(loopPath,'type-loop',routes);
      add(`M ${point(loopEnd)} C ${loopEnd[0]+20} ${loopEnd[1]+32}, ${start[0]-28} ${start[1]}, ${point(start)}`,'type-bridge',routes);
      first=false;
     }else if(rowStart){
      // Row transitions stay behind the solid type and fade once traced.
      const y=Math.max(lastBaseline+row.size*.45,start[1]-row.size*.8);
      add(`M ${point(last)} C ${last[0]+32} ${y}, ${x-35} ${y}, ${point(start)}`,'type-bridge',routes);
     }
     element('path',{d,class:'type-fill type-'+row.type},fills);
     const trace=add(d,'type-letter',traces);
     const end=trace.getPointAtLength(trace.getTotalLength());last=[end.x,end.y];rowStart=false;
    }
    cursor+=glyph.advance*row.size+row.spacing;
   }
   lastBaseline=row.baseline;
  }
  const endY=rows.at(-1).baseline+30;
  add(`M ${point(last)} C ${last[0]+18} ${endY-8}, ${cx+58} ${endY}, ${cx+42} ${endY} L ${cx-42} ${endY}`,'type-finish',routes);
 }
 function draw(progress,arrival=1){
  const p=clamp(progress),length=p>0?arrivalLength+(total-arrivalLength)*p:arrivalLength*clamp(arrival);
  let current=null;
  for(const segment of segments){
   const local=clamp((length-segment.start)/(segment.length||1));
   segment.path.style.strokeDashoffset=segment.length*(1-local);
   const fades=segment.kind==='type-letter'||segment.kind==='type-bridge';
   segment.path.style.opacity=local<=0?'0':fades?String(1-clamp((local-.9)/.1)):segment.kind==='type-arrival'?'.8':'1';
   if(length>=segment.start)current={...segment,local};
  }
  if(current){const pos=current.path.getPointAtLength(current.local*current.length);tip.setAttribute('cx',pos.x);tip.setAttribute('cy',pos.y);}
  tip.style.opacity=length>1&&length<total-1?'1':'0';
  signature.dataset.writingProgress=p.toFixed(3);
  panel.style.setProperty('--signature-progress',p.toFixed(3));
 }
 return {measure,draw,panel};
}
