import {Group,BufferGeometry,Float32BufferAttribute,ShaderMaterial,Points,AdditiveBlending,Vector3,CatmullRomCurve3,TubeGeometry,Mesh,MeshPhysicalMaterial} from 'three';

const TAU=Math.PI*2;

// Light and depth surrounding the existing sculpture. The reference film is
// inspiration only: no recording, third-party logo or portfolio is embedded.
export function createIntroAtmosphere(mobile=false){
 const group=new Group(),count=mobile?640:1200,positions=[],seeds=[],colors=[],resources=[];
 let seed=8191;
 const random=()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646;};
 for(let i=0;i<count;i++){
  const turn=random()*TAU,height=(random()-.5)*11,radius=1.7+Math.pow(random(),1.5)*4.8;
  positions.push(Math.cos(turn)*radius,height,Math.sin(turn)*radius-2.5);
  seeds.push(random(),random(),random());
  const warm=random()>.47;
  colors.push(warm?.94:.30,warm?.68:.73,warm?.40:.77);
 }
 const geometry=new BufferGeometry();geometry.setAttribute('position',new Float32BufferAttribute(positions,3));geometry.setAttribute('aSeed',new Float32BufferAttribute(seeds,3));geometry.setAttribute('color',new Float32BufferAttribute(colors,3));
 const uniforms={uTime:{value:0},uScroll:{value:0},uPixelRatio:{value:1},uOpacity:{value:.7}};
 const material=new ShaderMaterial({uniforms,transparent:true,depthWrite:false,blending:AdditiveBlending,vertexColors:true,
  vertexShader:`attribute vec3 aSeed;
   uniform float uTime; uniform float uScroll; uniform float uPixelRatio;
   varying vec3 vColor; varying float vAlpha;
   void main(){
    vec3 p=position;
    float orbit=uTime*.025+uScroll*.7;
    p.x=position.x*cos(orbit)-position.z*sin(orbit);
    p.z=position.x*sin(orbit)+position.z*cos(orbit);
    p.y+=sin(uTime*.17+aSeed.x*6.283)*.22+uScroll*.4;
    vec4 mv=modelViewMatrix*vec4(p,1.0);
    gl_Position=projectionMatrix*mv;
    gl_PointSize=clamp((2.0+aSeed.y*5.5)*uPixelRatio*12.0/max(3.0,-mv.z),1.5,16.0);
    vColor=color;
    vAlpha=(.25+aSeed.z*.7)*(.78+.22*sin(uTime*.35+aSeed.x*20.0));
   }`,
  fragmentShader:`uniform float uOpacity; varying vec3 vColor; varying float vAlpha;
   void main(){float d=length(gl_PointCoord-.5)*2.0;
    float halo=exp(-d*d*5.0)*.25+exp(-d*d*35.0)*.75;
    gl_FragColor=vec4(vColor,halo*vAlpha*uOpacity);
   }`
 });
 const points=new Points(geometry,material);points.frustumCulled=false;group.add(points);resources.push(geometry,material);

 const ribbons=[];
 for(let i=0;i<3;i++){
  const curve=new CatmullRomCurve3(Array.from({length:100},(_,j)=>{
   const t=j/99,theta=t*TAU*1.1+i*.22;
   const r=2.1+Math.sin(t*Math.PI)*.75+i*.055;
   return new Vector3(Math.sin(theta)*r,(t-.5)*10,Math.cos(theta)*r-1.4);
  }));
  const lineGeometry=new TubeGeometry(curve,280,i===0?.009:.0035,5,false);
  const lineMaterial=new MeshPhysicalMaterial({color:i===0?'#c8a67a':'#719d9b',emissive:i===0?'#654b32':'#203e40',emissiveIntensity:.22,metalness:.6,roughness:.35,transparent:true,opacity:i===0?.47:.27});
  const line=new Mesh(lineGeometry,lineMaterial);group.add(line);ribbons.push(line);resources.push(lineGeometry,lineMaterial);
 }
 function update(time,scroll,opening,reveal,pixelRatio){
  uniforms.uTime.value=time;uniforms.uScroll.value=scroll;uniforms.uPixelRatio.value=pixelRatio;
  uniforms.uOpacity.value=(.95-opening*.48)*(1-reveal*.7);
  group.rotation.y=Math.sin(time*.07)*.09;
  ribbons.forEach((line,i)=>{line.rotation.y=time*.025+scroll*.8;line.rotation.z=Math.sin(time*.08+i)*.03;line.material.opacity=(i===0?.47:.27)*(1-opening*.55)*(1-reveal);});
 }
 function dispose(){resources.forEach(resource=>resource.dispose());}
 return {group,update,dispose};
}
