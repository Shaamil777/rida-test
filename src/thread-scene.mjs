import {WebGLRenderer,Scene,OrthographicCamera,PerspectiveCamera,Group,BufferGeometry,Float32BufferAttribute,Mesh,MeshPhysicalMaterial,Color,Vector3,AmbientLight,DirectionalLight,HemisphereLight,PMREMGenerator,ACESFilmicToneMapping,SRGBColorSpace,DynamicDrawUsage,CatmullRomCurve3,PlaneGeometry,ShadowMaterial,PCFSoftShadowMap,TubeGeometry,Points,PointsMaterial} from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {createIntroSculpture} from './intro-sculpture.mjs';
import {createIntroAtmosphere} from './intro-atmosphere.mjs';
const TAU=Math.PI*2,clamp=x=>Math.max(0,Math.min(1,x));
const smooth=x=>{x=clamp(x);return x*x*(3-2*x);};
const mix=(a,b,t)=>a+(b-a)*t;

// The original illustration is the opening pose. These broad, bevelled ribbons
// follow its side-profile brain and single hollow heart during the 3D release.
// Coordinates are registered to the original 1122 × 1402 artwork.
function sculpture(){
 const points=[];
 function ribbon(controls,width,kind){
  const curve=new CatmullRomCurve3(controls.map(([x,y,z=0])=>new Vector3((x-561)/250,(701-y)/250,z)),false,'centripetal');
  const samples=curve.getPoints(controls.length*28);
  samples.forEach((p,i)=>points.push({x:p.x,y:p.y,z:p.z,width,kind,part:i/(samples.length-1)}));
 }
 ribbon([
  [247,252,-.26],[290,207,-.18],[364,182,-.08],[424,201,.02],
  [469,245,-.06],[494,226,-.13],[533,263,-.1],[570,303,-.16],
  [594,359,-.12],[585,402,.02],[555,397,.26],[543,351,.4],
  [515,304,.45],[483,305,.48],[463,344,.54],[467,388,.52],
  [507,412,.43],[548,443,.29],[548,475,.15],[511,490,.23],
  [465,468,.44],[437,429,.53],[395,403,.69],[370,370,.74],
  [374,322,.65],[397,270,.45],[378,228,.33],[324,218,.32],
  [270,242,.31],[241,271,.37],[272,289,.62],[320,264,.66],
  [346,284,.74],[331,327,.8],[280,352,.82],[224,363,.74],
  [180,402,.59],[182,426,.61],[223,431,.74],[295,421,.82],
  [359,436,.73],[403,467,.56],[422,511,.39],[393,543,.25],
  [351,532,.43],[312,491,.62],[258,479,.69],[212,495,.41],
  [180,504,.15],[147,481,.02],[136,432,-.1],[153,375,-.15],
  [177,331,-.21],[199,297,-.28],[227,277,-.32],
  [203,329,-.36],[188,387,-.32],[210,459,-.27],[238,523,-.14],
  [268,554,.02],[312,537,.21],[331,554,.24]
 ],.235,'brain');
 ribbon([
  [331,554,.24],[319,600,.27],[326,648,.2],[358,682,.12],
  [419,709,.05],[496,704,.02],[563,691,.06],[619,703,.16],
  [665,737,.23],[684,780,.16],[679,830,.08],[654,888,.02],[648,944,.06]
 ],.2,'bridge');
 // One broad copper outline, with the original pointed base and open centre.
 ribbon([
  [648,944,.06],[654,1008,.15],[710,1080,.17],[779,1149,.09],
  [822,1202,0],[870,1152,.06],[937,1084,.19],[988,1020,.31],
  [1001,963,.4],[976,911,.43],[935,889,.38],[894,903,.24],
  [862,944,.1],[844,977,.03],[821,951,.13],[796,916,.27],
  [759,889,.37],[717,890,.3],[680,916,.13],[656,957,-.03]
 ],.215,'heart');
 ribbon([[656,957,-.03],[680,1070,-.15],[793,1225,-.1],[925,1300,0]],.04,'tail');
 return points;
}
function resample(input,count){
 const distances=[0];for(let i=1;i<input.length;i++)distances.push(distances.at(-1)+Math.hypot(input[i].x-input[i-1].x,input[i].y-input[i-1].y,input[i].z-input[i-1].z));
 let cursor=0;
 return Array.from({length:count+1},(_,i)=>{
  const distance=i/count*distances.at(-1);while(cursor<distances.length-2&&distances[cursor+1]<distance)cursor++;
  const t=(distance-distances[cursor])/(distances[cursor+1]-distances[cursor]||1),a=input[cursor],b=input[cursor+1];
  return {x:mix(a.x,b.x,t),y:mix(a.y,b.y,t),z:mix(a.z,b.z,t),width:mix(a.width,b.width,t),kind:a.kind,part:mix(a.part,b.part,t)};
 });
}
export function createThreadScene(container,{intro=false}={}){
 const mobile=matchMedia('(max-width:760px)').matches,count=intro?48:(mobile?1500:2400),sides=12;
 const renderer=new WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.65));renderer.setClearColor(0x000000,0);renderer.toneMapping=ACESFilmicToneMapping;renderer.toneMappingExposure=.92;renderer.outputColorSpace=SRGBColorSpace;
 renderer.shadowMap.enabled=true;renderer.shadowMap.type=PCFSoftShadowMap;
 renderer.domElement.setAttribute('aria-hidden','true');container.prepend(renderer.domElement);
 const scene=new Scene(),camera=intro?new PerspectiveCamera(33,1,.1,60):new OrthographicCamera(-3,3,3,-3,.1,50);camera.position.set(0,0,12);
 const group=new Group();scene.add(group);
 const room=new RoomEnvironment(),pmrem=new PMREMGenerator(renderer),environment=pmrem.fromScene(room,.018);scene.environment=environment.texture;room.dispose();pmrem.dispose();
 scene.add(new AmbientLight(0xffffff,.35),new HemisphereLight(0xfffaf0,0x193b43,.6));
 const key=new DirectionalLight(0xfff3df,3);key.position.set(-3,5,8);key.castShadow=true;key.shadow.mapSize.set(1024,1024);key.shadow.camera.left=-4;key.shadow.camera.right=4;key.shadow.camera.top=4;key.shadow.camera.bottom=-4;key.shadow.normalBias=.025;key.shadow.bias=-.0002;key.shadow.radius=4;scene.add(key);
 const fill=new DirectionalLight(0xcbe6e9,.65);fill.position.set(4,1,5);scene.add(fill);
 if(intro){const rim=new DirectionalLight('#9cc8c7',2.2);rim.position.set(2,3,-4);scene.add(rim);key.intensity=3.6;fill.intensity=1.1;}
 const floorGeometry=new PlaneGeometry(20,20),floorMaterial=new ShadowMaterial({opacity:.13});
 const floor=new Mesh(floorGeometry,floorMaterial);floor.position.z=-.6;floor.receiveShadow=true;scene.add(floor);
 const original=resample(sculpture(),count),centres=new Float32Array((count+1)*3),widths=new Float32Array(count+1),depths=new Float32Array(count+1),twists=new Float32Array(count+1);
 const positions=new Float32Array((count+1)*sides*3),colors=new Float32Array(positions.length),indices=[];
 const teal=new Color('#174b53'),copper=new Color('#ad6244'),color=new Color();
 original.forEach((p,i)=>{
  const heart=p.kind==='brain'?0:p.kind==='bridge'?smooth((p.part-.43)/.43):1;color.copy(teal).lerp(copper,heart);
  for(let j=0;j<sides;j++){
   const k=(i*sides+j)*3;colors[k]=color.r;colors[k+1]=color.g;colors[k+2]=color.b;
   if(i<count){const a=i*sides+j,b=i*sides+(j+1)%sides,c=a+sides,d=b+sides;indices.push(a,b,c,b,d,c);}
  }
 });
 const geometry=new BufferGeometry();geometry.setAttribute('position',new Float32BufferAttribute(positions,3).setUsage(DynamicDrawUsage));geometry.setAttribute('color',new Float32BufferAttribute(colors,3));geometry.setIndex(indices);
 const material=new MeshPhysicalMaterial({vertexColors:true,metalness:intro?.48:.38,roughness:intro?.29:.39,clearcoat:intro?.4:.22,clearcoatRoughness:.35,envMapIntensity:intro?.8:.48});
 const mesh=new Mesh(geometry,material);mesh.frustumCulled=false;mesh.castShadow=true;mesh.receiveShadow=true;group.add(mesh);
 const detailedSculpture=intro?createIntroSculpture():null;
 if(detailedSculpture){mesh.visible=false;group.add(detailedSculpture.group);}
 const tangent=new Vector3(),normal=new Vector3(),binormal=new Vector3(),axis=new Vector3(0,0,1);
 const atmosphere=intro?createIntroAtmosphere(mobile):null;
 if(atmosphere)scene.add(atmosphere.group);
 let currentWidth=0,currentHeight=0,disposed=false,contextLost=false,prev=-1,exitX=1.6,exitY=-2.6,viewTop=3,viewRight=3,baseDistance=12;
 function resize(){
  const rect=container.getBoundingClientRect();if(rect.width===currentWidth&&rect.height===currentHeight)return;
  currentWidth=rect.width;currentHeight=rect.height;renderer.setSize(currentWidth,currentHeight,false);
  const aspect=currentWidth/currentHeight,halfH=Math.max(intro?3.3:2.804,(intro?2.6:2.244)/aspect);
  viewTop=halfH;viewRight=halfH*aspect;
  if(intro){camera.aspect=aspect;baseDistance=halfH/Math.tan(33*Math.PI/360);camera.position.z=baseDistance;}
  else{camera.left=-viewRight;camera.right=viewRight;camera.top=halfH;camera.bottom=-halfH;}
  camera.updateProjectionMatrix();exitX=viewRight*.88;exitY=-viewTop*.93;prev=-1;
 }
 function update(progress=0,leanX=0,leanY=0){
  if(disposed||contextLost)return;resize();
  // Preserve the exact art at the opening and reveal the registered 3D ribbon
  // as it lifts. The original also remains the no-WebGL fallback.
  const handover=smooth((progress-.04)/.16);
  container.style.setProperty('--sculpture-handover',handover.toFixed(4));
  container.style.setProperty('--art-lean-x',(leanY*1.2*(1-handover)).toFixed(3)+'deg');
  container.style.setProperty('--art-lean-y',(-leanX*1.8*(1-handover)).toFixed(3)+'deg');
  const release=clamp((progress-.1)/.9);
  if(Math.abs(prev-release)>.00005){
   prev=release;
   for(let i=0;i<=count;i++){
    const u=i/count,o=original[i];
    // A travelling front peels successive folds instead of shrinking all coils.
    const unwind=smooth((release*1.3-u*.82)/.48),lift=Math.sin(unwind*Math.PI),k=i*3;
    const tx=exitX+.12*Math.sin(u*TAU)*Math.sin(u*Math.PI),ty=viewTop*.8-u*(viewTop*.8-exitY);
    centres[k]=mix(o.x,tx,unwind)+lift*.14;centres[k+1]=mix(o.y,ty,unwind);centres[k+2]=mix(o.z,.02,unwind)+lift*.34;
    const tail=o.kind==='tail'?smooth(release/.1):1;
    widths[i]=mix(o.width,.018,unwind)*tail*(intro?.86:1);depths[i]=mix(.055,.014,unwind)*tail;
    twists[i]=(o.kind==='heart'?.25*Math.sin(o.part*TAU):.22*Math.sin(u*19))*(1-unwind)+lift*.22;
   }
   for(let i=0;i<=count;i++){
    const p=Math.max(0,i-1)*3,n=Math.min(count,i+1)*3,k=i*3;
    tangent.set(centres[n]-centres[p],centres[n+1]-centres[p+1],centres[n+2]-centres[p+2]).normalize();
    normal.crossVectors(tangent,axis);if(normal.lengthSq()<.001)normal.set(1,0,0);normal.normalize();binormal.crossVectors(tangent,normal).normalize();
    const twist=twists[i],ct=Math.cos(twist),st=Math.sin(twist);
    for(let j=0;j<sides;j++){
     // Rounded rectangular cross-section: broad faces with softened edges.
     const theta=j/sides*TAU,c=Math.cos(theta),s=Math.sin(theta);
     const a=Math.sign(c)*Math.pow(Math.abs(c),.42)*widths[i],b=Math.sign(s)*Math.pow(Math.abs(s),.42)*depths[i];
     const x=a*ct-b*st,z=a*st+b*ct,v=(i*sides+j)*3;
     positions[v]=centres[k]+normal.x*x+binormal.x*z;positions[v+1]=centres[k+1]+normal.y*x+binormal.y*z;positions[v+2]=centres[k+2]+normal.z*x+binormal.z*z;
    }
   }
   geometry.attributes.position.array.set(positions);geometry.attributes.position.needsUpdate=true;geometry.computeVertexNormals();
  }
  const intact=1-smooth(release);group.rotation.set(leanY*.025*intact,leanX*.035*intact,0);floorMaterial.opacity=intro?0:.13*(1-release);
  renderer.render(scene,camera);container.dataset.rendered='true';
 }
 function updateEntrance(time=0,leanX=0,leanY=0,journey=0,exit=0,orbit=0,opening=1){
  if(!intro||disposed||contextLost)return;resize();
  const reveal=smooth((journey-.88)/.12),settle=smooth(time/2.4),portrait=currentWidth/currentHeight<.86;
  const arrival=smooth(opening);
  // The sculpture is the stationary axis of the gallery. It rotates in depth;
  // the entrance layer adds depth-of-field blur as image planes pass in front.
  const turn=-.12+Math.sin(time*.13)*.16+journey*TAU*.82;
  group.rotation.set(Math.sin(time*.16)*.045+leanY*.06,turn+leanX*.13+orbit,Math.sin(time*.12)*.025);
  group.position.set(0,mix(portrait?1.2:.85,.1,arrival)+Math.sin(time*.3)*.04,0);
  group.scale.setScalar(mix(portrait?1.06:1.03,portrait?1.1:1.35,arrival)*(1-reveal*.12));
  atmosphere?.update(time,journey+opening*.22,arrival,reveal,renderer.getPixelRatio());
  camera.position.set(leanX*.16,-leanY*.12,baseDistance*mix(portrait?1.03:1.28,1.04-.04*settle,arrival)*(1+reveal*.12)*(1-exit*.15));
  camera.lookAt(0,0,0);
  detailedSculpture?.update(time,journey,Math.min(1,Math.abs(leanX)*.4+Math.abs(orbit)));
  renderer.render(scene,camera);
 }
 function dispose(){if(disposed)return;disposed=true;detailedSculpture?.dispose();atmosphere?.dispose();geometry.dispose();material.dispose();floorGeometry.dispose();floorMaterial.dispose();key.shadow.map?.dispose();environment.dispose();renderer.dispose();renderer.domElement.remove();delete container.dataset.rendered;}
 renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();contextLost=true;delete container.dataset.rendered;container.dispatchEvent(new Event('thread-context-lost'));});
 update(0);
 function exit(){return {x:(exitX+viewRight)/(viewRight*2)*currentWidth,y:(viewTop-exitY)/(viewTop*2)*currentHeight};}
 return {update,updateEntrance,resize,dispose,exit};
}
