import {Group,Mesh,BufferGeometry,Float32BufferAttribute,MeshPhysicalMaterial,SphereGeometry,Vector3,CatmullRomCurve3,Color,PointLight} from 'three';

const TAU=Math.PI*2;
const teal=new Color('#316b70'),copper=new Color('#bd7750');
const mix=(a,b,t)=>a+(b-a)*t;
const clamp=x=>Math.max(0,Math.min(1,x));
const smooth=x=>{x=clamp(x);return x*x*(3-2*x);};

// A separate, fully volumetric edition of the existing ribbon artwork. The
// homepage's registered unwind mesh and original image remain untouched.
export function createIntroSculpture(){
 const group=new Group(),brain=new Group(),heart=new Group(),resources=[];
 group.add(brain,heart);
 function material(color,metalness=.32){
  const mat=new MeshPhysicalMaterial({color,metalness,roughness:.36,clearcoat:.25,clearcoatRoughness:.32,envMapIntensity:.72});
  // Subtle grain breaks up perfectly smooth highlights, like cast ceramic
  // and brushed copper. It is evaluated in object space, so it never swims.
  mat.onBeforeCompile=shader=>{
   shader.vertexShader='varying vec3 vSculpturePosition;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvSculpturePosition=position;');
   shader.fragmentShader='varying vec3 vSculpturePosition;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <roughnessmap_fragment>',`#include <roughnessmap_fragment>
    float castGrain=fract(sin(dot(floor(vSculpturePosition*340.0),vec3(12.9898,78.233,37.719)))*43758.5453);
    roughnessFactor=clamp(roughnessFactor+(castGrain-.5)*.085,.1,1.0);`);
  };
  resources.push(mat);return mat;
 }
 const brainMaterial=material(teal),heartMaterial=material(copper,.56);

 // A rounded band with a stable frame, soft edges and gently crowned faces.
 // Unlike a flat strip, the thickness remains visible from every viewing angle.
 function band(controls,{width=.14,depth=.085,target=group,mat=brainMaterial,twist=0,taper=false,closed=false}={}){
  const curve=new CatmullRomCurve3(controls.map(p=>new Vector3(...p)),closed,'centripetal');
  const count=Math.min(440,Math.max(100,controls.length*22)),sides=16;
  const positions=[],uvs=[],indices=[],centre=new Vector3(),tangent=new Vector3(),normal=new Vector3(),binormal=new Vector3();
  for(let i=0;i<=count;i++){
   const u=i/count;curve.getPointAt(u,centre);curve.getTangentAt(u,tangent);
   normal.crossVectors(tangent,new Vector3(0,0,1)).normalize();
   if(normal.lengthSq()<.01)normal.set(1,0,0);
   binormal.crossVectors(tangent,normal).normalize();
   const angle=typeof twist==='function'?twist(u):twist;
   const endTaper=taper?(.08+.92*Math.pow(Math.sin(u*Math.PI),.4)):1;
   const w=(typeof width==='function'?width(u):width)*endTaper;
   for(let j=0;j<sides;j++){
    const theta=j/sides*TAU,c=Math.cos(theta),s=Math.sin(theta);
    const x=Math.sign(c)*Math.pow(Math.abs(c),.48)*w;
    const d=(typeof depth==='function'?depth(u):depth)*endTaper;
    const z=Math.sign(s)*Math.pow(Math.abs(s),.50)*d;
    const a=x*Math.cos(angle)-z*Math.sin(angle),b=x*Math.sin(angle)+z*Math.cos(angle);
    positions.push(centre.x+normal.x*a+binormal.x*b,centre.y+normal.y*a+binormal.y*b,centre.z+normal.z*a+binormal.z*b);
    uvs.push(u,j/sides);
    if(i<count){const p=i*sides+j,q=i*sides+(j+1)%sides;indices.push(p,q,p+sides,q,q+sides,p+sides);}
   }
  }
  // Seal each end. Tapered bands join cleanly into the underlying sculpture.
  if(!closed){for(let j=1;j<sides-1;j++){indices.push(0,j+1,j);const end=count*sides;indices.push(end,end+j,end+j+1);}}
  const geometry=new BufferGeometry();geometry.setAttribute('position',new Float32BufferAttribute(positions,3));geometry.setAttribute('uv',new Float32BufferAttribute(uvs,2));geometry.setIndex(indices);geometry.computeVertexNormals();geometry.computeBoundingSphere();
  if(closed){
   const normals=geometry.attributes.normal;
   for(let j=0;j<sides;j++){
    const end=count*sides+j;
    normal.set(normals.getX(j)+normals.getX(end),normals.getY(j)+normals.getY(end),normals.getZ(j)+normals.getZ(end)).normalize();
    normals.setXYZ(j,normal.x,normal.y,normal.z);normals.setXYZ(end,normal.x,normal.y,normal.z);
   }
  }
  const mesh=new Mesh(geometry,mat);mesh.castShadow=true;mesh.receiveShadow=true;target.add(mesh);resources.push(geometry);
  return {mesh,curve};
 }

 // A lobed core supports the folds, keeping a recognisable brain silhouette
 // from three-quarter views instead of exposing the gaps in a single coil.
 const coreGeometry=new SphereGeometry(1,64,44);
 const vertex=coreGeometry.attributes.position;
 for(let i=0;i<vertex.count;i++){
  const x=vertex.getX(i),y=vertex.getY(i),z=vertex.getZ(i);
  const lobe=1+.028*Math.sin(x*12+y*5)*Math.sin(z*11-y*7);
  vertex.setXYZ(i,x*1.01*lobe-.77,y*.77*lobe+1.37,z*.53*lobe-.08);
 }
 coreGeometry.computeVertexNormals();resources.push(coreGeometry);
 const core=new Mesh(coreGeometry,material('#23565e'));core.castShadow=true;core.receiveShadow=true;brain.add(core);

 // Broad, nested gyri arranged along the profile of the accepted artwork.
 // Each curve follows the rounded surface, with deeper grooves between folds.
 const folds=[
  [[-.92,.15],[-.85,.52],[-.63,.77],[-.31,.88],[.01,.85],[.12,.64],[.06,.39],[.18,.16],[.46,.05],[.68,-.17],[.65,-.41]],
  [[-.89,-.08],[-.64,.08],[-.28,.19],[-.18,.42],[-.33,.58],[-.54,.49],[-.66,.32]],
  [[-.87,-.24],[-.58,-.14],[-.22,-.19],[.13,-.37],[.16,-.60],[-.04,-.75],[-.34,-.69]],
  [[-.63,-.50],[-.36,-.37],[-.08,-.45],[-.10,-.59],[-.32,-.74],[-.53,-.68]],
  [[.12,.88],[.40,.76],[.43,.50],[.62,.39],[.75,.17],[.81,-.05],[.68,-.18],[.51,-.07],[.41,.15],[.26,.20],[.25,.02],[.38,-.20],[.44,-.49],[.27,-.67]],
  [[.45,.74],[.68,.62],[.86,.38],[.96,.11],[.89,-.18],[.79,-.38],[.62,-.55]],
  [[-.98,-.03],[-.96,-.33],[-.78,-.56],[-.59,-.70]]
 ];
 folds.forEach((points,i)=>{
  const front=points.map(([x,y],j)=>[x*1.03-.77,y*.83+1.37,Math.sqrt(Math.max(.03,1-x*x-y*y))*.51+.01-.10*Math.pow(1-Math.sin(j/(points.length-1)*Math.PI),4)]);
  band(front,{target:brain,width:i===6?.115:.148,depth:.085,taper:true,twist:u=>Math.sin(u*TAU+i)*.16});
  // The reverse has its own folded surface; it is not a mirrored flat face.
  band(front.map(([x,y,z])=>[x,y,-z-.16]),{target:brain,width:.14,depth:.085,taper:true,twist:u=>-Math.sin(u*TAU+i)*.16});
 });

 const bridgeControls=[[-1.00,.72,.27],[-1.10,.37,.30],[-1.04,.07,.28],[-.80,-.12,.20],[-.44,-.19,.15],[-.06,-.15,.12],[.29,-.22,.16],[.51,-.45,.25],[.50,-.71,.28],[.40,-.96,.26],[.37,-1.13,.21]];
 const bridgeMaterial=material('#ffffff',.42);bridgeMaterial.vertexColors=true;
 const bridge=band(bridgeControls,{width:u=>mix(.15,.19,smooth(u)),depth:.078,mat:bridgeMaterial,twist:u=>Math.sin(u*Math.PI)*.36});
 const bridgeColors=[];const c=new Color();
 for(let i=0;i<bridge.mesh.geometry.attributes.position.count;i++){
  const u=bridge.mesh.geometry.attributes.uv.getX(i);c.copy(teal).lerp(copper,smooth((u-.45)/.45));bridgeColors.push(c.r,c.g,c.b);
 }
 bridge.mesh.geometry.setAttribute('color',new Float32BufferAttribute(bridgeColors,3));

 const heartControls=[[1.08,-2.09,.04],[.79,-1.78,.11],[.48,-1.46,.16],[.37,-1.13,.21],[.48,-.84,.27],[.69,-.75,.29],[.91,-.90,.20],[1.08,-1.17,.05],[1.26,-.91,.18],[1.49,-.74,.30],[1.72,-.85,.33],[1.83,-1.13,.27],[1.70,-1.48,.18],[1.38,-1.81,.10]];
 band(heartControls,{target:heart,mat:heartMaterial,width:u=>.205-.14*Math.exp(-Math.pow(Math.min(u,1-u)/.055,2))-.075*Math.exp(-Math.pow((u-.49)/.055,2)),depth:u=>.045+.035*smooth(Math.min(u,1-u)/.07),closed:true,twist:u=>.15+Math.sin(u*TAU)*.30});

 // Light travels along the physical link rather than around an unrelated ring.
 const lightRoute=new CatmullRomCurve3([...bridgeControls, ...heartControls.slice(3),heartControls[0]].map(([x,y,z])=>new Vector3(x,y,z+.16)),false,'centripetal');
 const beadGeometry=new SphereGeometry(.019,12,8),beadMaterial=new MeshPhysicalMaterial({color:'#fff2d8',emissive:'#ecc295',emissiveIntensity:2.4,metalness:.2,roughness:.25});
 resources.push(beadGeometry,beadMaterial);
 const lights=Array.from({length:9},(_,i)=>{const mesh=new Mesh(beadGeometry,beadMaterial);mesh.scale.setScalar(1-i*.065);group.add(mesh);return mesh;});
 const glow=new PointLight('#eac795',.35,1.4,2);group.add(glow);

 function update(time,journey,activity=0){
  // An almost imperceptible breathing rhythm preserves the joined silhouette.
  heart.scale.setScalar(1+Math.sin(time*1.15)*.0035);
  const lead=(time*.095+journey*1.5)%1;
  lights.forEach((mesh,i)=>{const u=(lead-i*.006+1)%1;lightRoute.getPointAt(u,mesh.position);mesh.scale.setScalar((1-i*.065)*(1+activity*.3));});
  glow.position.copy(lights[0].position);glow.intensity=.28+activity*.32;
 }
 function dispose(){resources.forEach(resource=>resource.dispose());}
 return {group,update,dispose};
}
