/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Ol=0,bo=1,Bl=2;var Eo=1,Ur=2,rn=3,mn=0,ve=1,an=2,vn=0,Wn=1,Ms=2,To=3,wo=4,zl=5,In=100,Vl=101,kl=102,Hl=103,Gl=104,Wl=200,Xl=201,ql=202,Yl=203,er=204,nr=205,Zl=206,Jl=207,$l=208,Kl=209,Ql=210,jl=211,tc=212,ec=213,nc=214,Nr=0,Fr=1,Or=2,Xn=3,Br=4,zr=5,Vr=6,kr=7,Hr=0,ic=1,sc=2,yn=0,rc=1,ac=2,oc=3,Gr=4,lc=5,cc=6,hc=7;var Ao=300,ei=301,ni=302,Wr=303,Xr=304,Ss=306,ir=1e3,Rn=1001,sr=1002,Re=1003,uc=1004;var bs=1005;var Ze=1006,qr=1007;var Un=1008;var Ke=1009,Co=1010,Ro=1011,Ri=1012,Yr=1013,Nn=1014,Qe=1015,Ii=1016,Zr=1017,Jr=1018,Pi=1020,Io=35902,Po=35899,Lo=1021,Do=1022,Ge=1023,bi=1026,Li=1027,$r=1028,Kr=1029,Uo=1030,Qr=1031;var jr=1033,Es=33776,Ts=33777,ws=33778,As=33779,ta=35840,ea=35841,na=35842,ia=35843,sa=36196,ra=37492,aa=37496,oa=37808,la=37809,ca=37810,ha=37811,ua=37812,da=37813,fa=37814,pa=37815,ma=37816,ga=37817,_a=37818,xa=37819,va=37820,ya=37821,Ma=36492,Sa=36494,ba=36495,Ea=36283,Ta=36284,wa=36285,Aa=36286;var $i=2300,rr=2301,tr=2302,po=2400,mo=2401,go=2402;var dc=3200,fc=3201;var Ca=0,pc=1,Mn="",Ee="srgb",qn="srgb-linear",Ki="linear",te="srgb";var Gn=7680;var _o=519,mc=512,gc=513,_c=514,No=515,xc=516,vc=517,yc=518,Mc=519,xo=35044,Fo=35048;var Oo="300 es",Ye=2e3,Qi=2001;var gn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var za=Math.PI/180,ar=180/Math.PI;function Cs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Gt(i,t,e){return Math.max(t,Math.min(e,i))}function fh(i,t){return(i%t+t)%t}function Va(i,t,e){return(1-e)*i+e*t}function Vi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var At=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_n=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[a+0],p=r[a+1],_=r[a+2],y=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=y;return}if(d!==y||l!==f||c!==p||h!==_){let m=1-o,u=l*f+c*p+h*_+d*y,T=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){let C=Math.sqrt(E),A=Math.atan2(C,u*T);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}let S=o*T;if(l=l*m+f*S,c=c*m+p*S,h=h*m+_*S,d=d*m+y*S,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],f=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+h*d+l*p-c*f,t[e+1]=l*_+h*f+c*d-o*p,t[e+2]=c*_+h*p+o*f-l*d,t[e+3]=h*_-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),f=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d-f*p*_;break;case"YXZ":this._x=f*h*d+c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d+f*p*_;break;case"ZXY":this._x=f*h*d-c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d-f*p*_;break;case"ZYX":this._x=f*h*d-c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d+f*p*_;break;case"YZX":this._x=f*h*d+c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d-f*p*_;break;case"XZY":this._x=f*h*d-c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ka.copy(this).projectOnVector(t),this.sub(ka)}reflect(t){return this.sub(ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ka=new I,dl=new _n,zt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],_=n[8],y=s[0],m=s[3],u=s[6],T=s[1],E=s[4],S=s[7],C=s[2],A=s[5],P=s[8];return r[0]=a*y+o*T+l*C,r[3]=a*m+o*E+l*A,r[6]=a*u+o*S+l*P,r[1]=c*y+h*T+d*C,r[4]=c*m+h*E+d*A,r[7]=c*u+h*S+d*P,r[2]=f*y+p*T+_*C,r[5]=f*m+p*E+_*A,r[8]=f*u+p*S+_*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*r,p=c*r-a*l,_=e*d+n*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=f*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=p*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ha.makeScale(t,e)),this}rotate(t){return this.premultiply(Ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ha=new zt;function Bo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ji(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sc(){let i=ji("canvas");return i.style.display="block",i}var fl={};function Ei(i){i in fl||(fl[i]=!0,console.warn(i))}function bc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var pl=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ml=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ph(){let i={enabled:!0,workingColorSpace:qn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===te&&(s.r=pn(s.r),s.g=pn(s.g),s.b=pn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mn?Ki:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ei("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ei("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qn]:{primaries:t,whitePoint:n,transfer:Ki,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:t,whitePoint:n,transfer:te,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),i}var Yt=ph();function pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Si(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ci,or=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ci===void 0&&(ci=ji("canvas")),ci.width=t.width,ci.height=t.height;let s=ci.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ci}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ji("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pn(e[n]/255)*255):e[n]=pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},mh=0,Ti=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=Cs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ga(s[a].image)):r.push(Ga(s[a]))}else r=Ga(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?or.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gh=0,Wa=new I,Ie=class i extends gn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Rn,s=Rn,r=Ze,a=Un,o=Ge,l=Ke,c=i.DEFAULT_ANISOTROPY,h=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=Cs(),this.name="",this.source=new Ti(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wa).x}get height(){return this.source.getSize(Wa).y}get depth(){return this.source.getSize(Wa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ao)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ir:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case sr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ir:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case sr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=Ao;Ie.DEFAULT_ANISOTROPY=1;var jt=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],_=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,S=(p+1)/2,C=(u+1)/2,A=(h+f)/4,P=(d+y)/4,O=(_+m)/4;return E>S&&E>C?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=P/n):S>C?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=O/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=P/r,s=O/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-_)*(m-_)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(d-y)/T,this.z=(f-h)/T,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},lr=class extends gn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Ie(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ti(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends lr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ts=class extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var cr=class extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(We.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(We.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=We.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,We):We.fromBufferAttribute(r,a),We.applyMatrix4(t.matrixWorld),this.expandByPoint(We);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ls.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ls.copy(n.boundingBox)),Ls.applyMatrix4(t.matrixWorld),this.union(Ls)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,We),We.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ki),Ds.subVectors(this.max,ki),hi.subVectors(t.a,ki),ui.subVectors(t.b,ki),di.subVectors(t.c,ki),Sn.subVectors(ui,hi),bn.subVectors(di,ui),zn.subVectors(hi,di);let e=[0,-Sn.z,Sn.y,0,-bn.z,bn.y,0,-zn.z,zn.y,Sn.z,0,-Sn.x,bn.z,0,-bn.x,zn.z,0,-zn.x,-Sn.y,Sn.x,0,-bn.y,bn.x,0,-zn.y,zn.x,0];return!Xa(e,hi,ui,di,Ds)||(e=[1,0,0,0,1,0,0,0,1],!Xa(e,hi,ui,di,Ds))?!1:(Us.crossVectors(Sn,bn),e=[Us.x,Us.y,Us.z],Xa(e,hi,ui,di,Ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,We).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(We).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},cn=[new I,new I,new I,new I,new I,new I,new I,new I],We=new I,Ls=new nn,hi=new I,ui=new I,di=new I,Sn=new I,bn=new I,zn=new I,ki=new I,Ds=new I,Us=new I,Vn=new I;function Xa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vn.fromArray(i,r);let o=s.x*Math.abs(Vn.x)+s.y*Math.abs(Vn.y)+s.z*Math.abs(Vn.z),l=t.dot(Vn),c=e.dot(Vn),h=n.dot(Vn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var _h=new nn,Hi=new I,qa=new I,xn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_h.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hi.subVectors(t,this.center);let e=Hi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Hi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hi.copy(t.center).add(qa)),this.expandByPoint(Hi.copy(t.center).sub(qa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},hn=new I,Ya=new I,Ns=new I,En=new I,Za=new I,Fs=new I,Ja=new I,es=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hn.copy(this.origin).addScaledVector(this.direction,e),hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ya.copy(t).add(e).multiplyScalar(.5),Ns.copy(e).sub(t).normalize(),En.copy(this.origin).sub(Ya);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ns),o=En.dot(this.direction),l=-En.dot(Ns),c=En.lengthSq(),h=Math.abs(1-a*a),d,f,p,_;if(h>0)if(d=a*l-o,f=a*o-l,_=r*h,d>=0)if(f>=-_)if(f<=_){let y=1/h;d*=y,f*=y,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ya).addScaledVector(Ns,f),p}intersectSphere(t,e){hn.subVectors(t.center,this.origin);let n=hn.dot(this.direction),s=hn.dot(hn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,n,s,r){Za.subVectors(e,t),Fs.subVectors(n,t),Ja.crossVectors(Za,Fs);let a=this.direction.dot(Ja),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,t);let l=o*this.direction.dot(Fs.crossVectors(En,Fs));if(l<0)return null;let c=o*this.direction.dot(Za.cross(En));if(c<0||l+c>a)return null;let h=-o*En.dot(Ja);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class i{constructor(t,e,n,s,r,a,o,l,c,h,d,f,p,_,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,f,p,_,y,m)}set(t,e,n,s,r,a,o,l,c,h,d,f,p,_,y,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=_,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/fi.setFromMatrixColumn(t,0).length(),r=1/fi.setFromMatrixColumn(t,1).length(),a=1/fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*h,p=a*d,_=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+_*c,e[5]=f-y*c,e[9]=-o*l,e[2]=y-f*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,p=l*d,_=c*h,y=c*d;e[0]=f+y*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-_,e[6]=y+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,p=l*d,_=c*h,y=c*d;e[0]=f-y*o,e[4]=-a*d,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*h,e[9]=y-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,p=a*d,_=o*h,y=o*d;e[0]=l*h,e[4]=_*c-p,e[8]=f*c+y,e[1]=l*d,e[5]=y*c+f,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,p=a*c,_=o*l,y=o*c;e[0]=l*h,e[4]=y-f*d,e[8]=_*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+_,e[10]=f-y*d}else if(t.order==="XZY"){let f=a*l,p=a*c,_=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+y,e[5]=a*h,e[9]=p*d-_,e[2]=_*d-p,e[6]=o*h,e[10]=y*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xh,t,vh)}lookAt(t,e,n){let s=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),Tn.crossVectors(n,De),Tn.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),Tn.crossVectors(n,De)),Tn.normalize(),Os.crossVectors(De,Tn),s[0]=Tn.x,s[4]=Os.x,s[8]=De.x,s[1]=Tn.y,s[5]=Os.y,s[9]=De.y,s[2]=Tn.z,s[6]=Os.z,s[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],_=n[2],y=n[6],m=n[10],u=n[14],T=n[3],E=n[7],S=n[11],C=n[15],A=s[0],P=s[4],O=s[8],v=s[12],M=s[1],R=s[5],F=s[9],z=s[13],G=s[2],Y=s[6],X=s[10],K=s[14],k=s[3],tt=s[7],dt=s[11],_t=s[15];return r[0]=a*A+o*M+l*G+c*k,r[4]=a*P+o*R+l*Y+c*tt,r[8]=a*O+o*F+l*X+c*dt,r[12]=a*v+o*z+l*K+c*_t,r[1]=h*A+d*M+f*G+p*k,r[5]=h*P+d*R+f*Y+p*tt,r[9]=h*O+d*F+f*X+p*dt,r[13]=h*v+d*z+f*K+p*_t,r[2]=_*A+y*M+m*G+u*k,r[6]=_*P+y*R+m*Y+u*tt,r[10]=_*O+y*F+m*X+u*dt,r[14]=_*v+y*z+m*K+u*_t,r[3]=T*A+E*M+S*G+C*k,r[7]=T*P+E*R+S*Y+C*tt,r[11]=T*O+E*F+S*X+C*dt,r[15]=T*v+E*z+S*K+C*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],_=t[3],y=t[7],m=t[11],u=t[15];return _*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*p-n*l*p)+y*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+e*c*d-e*o*p-r*a*d+n*a*p+r*o*h-n*c*h)+u*(-s*o*h-e*l*d+e*o*f+s*a*d-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],_=t[12],y=t[13],m=t[14],u=t[15],T=d*m*c-y*f*c+y*l*p-o*m*p-d*l*u+o*f*u,E=_*f*c-h*m*c-_*l*p+a*m*p+h*l*u-a*f*u,S=h*y*c-_*d*c+_*o*p-a*y*p-h*o*u+a*d*u,C=_*d*l-h*y*l-_*o*f+a*y*f+h*o*m-a*d*m,A=e*T+n*E+s*S+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return t[0]=T*P,t[1]=(y*f*r-d*m*r-y*s*p+n*m*p+d*s*u-n*f*u)*P,t[2]=(o*m*r-y*l*r+y*s*c-n*m*c-o*s*u+n*l*u)*P,t[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*p-n*l*p)*P,t[4]=E*P,t[5]=(h*m*r-_*f*r+_*s*p-e*m*p-h*s*u+e*f*u)*P,t[6]=(_*l*r-a*m*r-_*s*c+e*m*c+a*s*u-e*l*u)*P,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*p+e*l*p)*P,t[8]=S*P,t[9]=(_*d*r-h*y*r-_*n*p+e*y*p+h*n*u-e*d*u)*P,t[10]=(a*y*r-_*o*r+_*n*c-e*y*c-a*n*u+e*o*u)*P,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*p-e*o*p)*P,t[12]=C*P,t[13]=(h*y*s-_*d*s+_*n*f-e*y*f-h*n*m+e*d*m)*P,t[14]=(_*o*s-a*y*s-_*n*l+e*y*l+a*n*m-e*o*m)*P,t[15]=(a*d*s-h*o*s+h*n*l-e*d*l-a*n*f+e*o*f)*P,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,f=r*c,p=r*h,_=r*d,y=a*h,m=a*d,u=o*d,T=l*c,E=l*h,S=l*d,C=n.x,A=n.y,P=n.z;return s[0]=(1-(y+u))*C,s[1]=(p+S)*C,s[2]=(_-E)*C,s[3]=0,s[4]=(p-S)*A,s[5]=(1-(f+u))*A,s[6]=(m+T)*A,s[7]=0,s[8]=(_+E)*P,s[9]=(m-T)*P,s[10]=(1-(f+y))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=fi.set(s[0],s[1],s[2]).length(),a=fi.set(s[4],s[5],s[6]).length(),o=fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Xe.copy(this);let c=1/r,h=1/a,d=1/o;return Xe.elements[0]*=c,Xe.elements[1]*=c,Xe.elements[2]*=c,Xe.elements[4]*=h,Xe.elements[5]*=h,Xe.elements[6]*=h,Xe.elements[8]*=d,Xe.elements[9]*=d,Xe.elements[10]*=d,e.setFromRotationMatrix(Xe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Ye,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),_,y;if(l)_=r/(a-r),y=a*r/(a-r);else if(o===Ye)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Qi)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ye,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s),_,y;if(l)_=1/(a-r),y=a/(a-r);else if(o===Ye)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===Qi)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},fi=new I,Xe=new ie,xh=new I(0,0,0),vh=new I(1,1,1),Tn=new I,Os=new I,De=new I,gl=new ie,_l=new _n,ke=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _l.setFromEuler(this),this.setFromQuaternion(_l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ke.DEFAULT_ORDER="XYZ";var ns=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},yh=0,xl=new I,pi=new _n,un=new ie,Bs=new I,Gi=new I,Mh=new I,Sh=new _n,vl=new I(1,0,0),yl=new I(0,1,0),Ml=new I(0,0,1),Sl={type:"added"},bh={type:"removed"},mi={type:"childadded",child:null},$a={type:"childremoved",child:null},fe=class i extends gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new ke,n=new _n,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new zt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ns,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.multiply(pi),this}rotateOnWorldAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.premultiply(pi),this}rotateX(t){return this.rotateOnAxis(vl,t)}rotateY(t){return this.rotateOnAxis(yl,t)}rotateZ(t){return this.rotateOnAxis(Ml,t)}translateOnAxis(t,e){return xl.copy(t).applyQuaternion(this.quaternion),this.position.add(xl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vl,t)}translateY(t){return this.translateOnAxis(yl,t)}translateZ(t){return this.translateOnAxis(Ml,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bs.copy(t):Bs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Gi,Bs,this.up):un.lookAt(Bs,Gi,this.up),this.quaternion.setFromRotationMatrix(un),s&&(un.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(un),this.quaternion.premultiply(pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sl),mi.child=t,this.dispatchEvent(mi),mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bh),$a.child=t,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sl),mi.child=t,this.dispatchEvent(mi),mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,t,Mh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,Sh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};fe.DEFAULT_UP=new I(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qe=new I,dn=new I,Ka=new I,fn=new I,gi=new I,_i=new I,bl=new I,Qa=new I,ja=new I,to=new I,eo=new jt,no=new jt,io=new jt,Cn=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),qe.subVectors(t,e),s.cross(qe);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){qe.subVectors(s,e),dn.subVectors(n,e),Ka.subVectors(t,e);let a=qe.dot(qe),o=qe.dot(dn),l=qe.dot(Ka),c=dn.dot(dn),h=dn.dot(Ka),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-o*h)*f,_=(a*h-o*l)*f;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fn.x),l.addScaledVector(a,fn.y),l.addScaledVector(o,fn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return eo.setScalar(0),no.setScalar(0),io.setScalar(0),eo.fromBufferAttribute(t,e),no.fromBufferAttribute(t,n),io.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(eo,r.x),a.addScaledVector(no,r.y),a.addScaledVector(io,r.z),a}static isFrontFacing(t,e,n,s){return qe.subVectors(n,e),dn.subVectors(t,e),qe.cross(dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qe.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),qe.cross(dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;gi.subVectors(s,n),_i.subVectors(r,n),Qa.subVectors(t,n);let l=gi.dot(Qa),c=_i.dot(Qa);if(l<=0&&c<=0)return e.copy(n);ja.subVectors(t,s);let h=gi.dot(ja),d=_i.dot(ja);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(gi,a);to.subVectors(t,r);let p=gi.dot(to),_=_i.dot(to);if(_>=0&&p<=_)return e.copy(r);let y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(_i,o);let m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return bl.subVectors(r,s),o=(d-h)/(d-h+(p-_)),e.copy(s).addScaledVector(bl,o);let u=1/(m+y+f);return a=y*u,o=f*u,e.copy(n).addScaledVector(gi,a).addScaledVector(_i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},zs={h:0,s:0,l:0};function so(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=fh(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=so(a,r,t+1/3),this.g=so(a,r,t),this.b=so(a,r,t-1/3)}return Yt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){let n=Ec[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pn(t.r),this.g=pn(t.g),this.b=pn(t.b),this}copyLinearToSRGB(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return Yt.workingToColorSpace(Me.copy(this),t),Math.round(Gt(Me.r*255,0,255))*65536+Math.round(Gt(Me.g*255,0,255))*256+Math.round(Gt(Me.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(Me.copy(this),e);let n=Me.r,s=Me.g,r=Me.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=Ee){Yt.workingToColorSpace(Me.copy(this),t);let e=Me.r,n=Me.g,s=Me.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(wn),this.setHSL(wn.h+t,wn.s+e,wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wn),t.getHSL(zs);let n=Va(wn.h,zs.h,e),s=Va(wn.s,zs.s,e),r=Va(wn.l,zs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Me=new Pt;Pt.NAMES=Ec;var Eh=0,Je=class extends gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=Wn,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=er,this.blendDst=nr,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Xn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_o,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gn,this.stencilZFail=Gn,this.stencilZPass=Gn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wn&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==er&&(n.blendSrc=this.blendSrc),this.blendDst!==nr&&(n.blendDst=this.blendDst),this.blendEquation!==In&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_o&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},is=class extends Je{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ke,this.combine=Hr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var de=new I,Vs=new At,Th=0,Ce=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Th++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xo,this.updateRanges=[],this.gpuType=Qe,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vs.fromBufferAttribute(this,e),Vs.applyMatrix3(t),this.setXY(e,Vs.x,Vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xo&&(t.usage=this.usage),t}};var ss=class extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var rs=class extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}},wh=0,Ve=new ie,ro=new fe,xi=new I,Ue=new nn,Wi=new nn,ge=new I,xe=class i extends gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bo(t)?rs:ss)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return ro.lookAt(t),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new se(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ue.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Wi.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(Ue.min,Wi.min),Ue.expandByPoint(ge),ge.addVectors(Ue.max,Wi.max),Ue.expandByPoint(ge)):(Ue.expandByPoint(Wi.min),Ue.expandByPoint(Wi.max))}Ue.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ge));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ge.fromBufferAttribute(o,c),l&&(xi.fromBufferAttribute(t,c),ge.add(xi)),s=Math.max(s,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<n.count;O++)o[O]=new I,l[O]=new I;let c=new I,h=new I,d=new I,f=new At,p=new At,_=new At,y=new I,m=new I;function u(O,v,M){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,v),d.fromBufferAttribute(n,M),f.fromBufferAttribute(r,O),p.fromBufferAttribute(r,v),_.fromBufferAttribute(r,M),h.sub(c),d.sub(c),p.sub(f),_.sub(f);let R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(R),o[O].add(y),o[v].add(y),o[M].add(y),l[O].add(m),l[v].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let O=0,v=T.length;O<v;++O){let M=T[O],R=M.start,F=M.count;for(let z=R,G=R+F;z<G;z+=3)u(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let E=new I,S=new I,C=new I,A=new I;function P(O){C.fromBufferAttribute(s,O),A.copy(C);let v=o[O];E.copy(v),E.sub(C.multiplyScalar(C.dot(v))).normalize(),S.crossVectors(A,v);let R=S.dot(l[O])<0?-1:1;a.setXYZW(O,E.x,E.y,E.z,R)}for(let O=0,v=T.length;O<v;++O){let M=T[O],R=M.start,F=M.count;for(let z=R,G=R+F;z<G;z+=3)P(t.getX(z+0)),P(t.getX(z+1)),P(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){let _=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),p=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let u=0;u<h;u++)f[_++]=c[p++]}return new Ce(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},El=new ie,kn=new es,ks=new xn,Tl=new I,Hs=new I,Gs=new I,Ws=new I,ao=new I,Xs=new I,wl=new I,qs=new I,Kt=class extends fe{constructor(t=new xe,e=new is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Xs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(ao.fromBufferAttribute(d,t),a?Xs.addScaledVector(ao,h):Xs.addScaledVector(ao.sub(e),h))}e.add(Xs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(r),kn.copy(t.ray).recast(t.near),!(ks.containsPoint(kn.origin)===!1&&(kn.intersectSphere(ks,Tl)===null||kn.origin.distanceToSquared(Tl)>(t.far-t.near)**2))&&(El.copy(r).invert(),kn.copy(t.ray).applyMatrix4(El),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,kn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){let m=f[_],u=a[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,C=E;S<C;S+=3){let A=o.getX(S),P=o.getX(S+1),O=o.getX(S+2);s=Ys(this,u,t,n,c,h,d,A,P,O),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=_,u=y;m<u;m+=3){let T=o.getX(m),E=o.getX(m+1),S=o.getX(m+2);s=Ys(this,a,t,n,c,h,d,T,E,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){let m=f[_],u=a[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,C=E;S<C;S+=3){let A=S,P=S+1,O=S+2;s=Ys(this,u,t,n,c,h,d,A,P,O),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,u=y;m<u;m+=3){let T=m,E=m+1,S=m+2;s=Ys(this,a,t,n,c,h,d,T,E,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Ah(i,t,e,n,s,r,a,o){let l;if(t.side===ve?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===mn,o),l===null)return null;qs.copy(o),qs.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(qs);return c<e.near||c>e.far?null:{distance:c,point:qs.clone(),object:i}}function Ys(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Hs),i.getVertexPosition(l,Gs),i.getVertexPosition(c,Ws);let h=Ah(i,t,e,n,Hs,Gs,Ws,wl);if(h){let d=new I;Cn.getBarycoord(wl,Hs,Gs,Ws,d),s&&(h.uv=Cn.getInterpolatedAttribute(s,o,l,c,d,new At)),r&&(h.uv1=Cn.getInterpolatedAttribute(r,o,l,c,d,new At)),a&&(h.normal=Cn.getInterpolatedAttribute(a,o,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new I,materialIndex:0};Cn.getNormal(Hs,Gs,Ws,f.normal),h.face=f,h.barycoord=d}return h}var Pn=class i extends xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(d,2));function _(y,m,u,T,E,S,C,A,P,O,v){let M=S/P,R=C/O,F=S/2,z=C/2,G=A/2,Y=P+1,X=O+1,K=0,k=0,tt=new I;for(let dt=0;dt<X;dt++){let _t=dt*R-z;for(let Lt=0;Lt<Y;Lt++){let Wt=Lt*M-F;tt[y]=Wt*T,tt[m]=_t*E,tt[u]=G,c.push(tt.x,tt.y,tt.z),tt[y]=0,tt[m]=0,tt[u]=A>0?1:-1,h.push(tt.x,tt.y,tt.z),d.push(Lt/P),d.push(1-dt/O),K+=1}}for(let dt=0;dt<O;dt++)for(let _t=0;_t<P;_t++){let Lt=f+_t+Y*dt,Wt=f+_t+Y*(dt+1),Zt=f+(_t+1)+Y*(dt+1),Dt=f+(_t+1)+Y*dt;l.push(Lt,Wt,Dt),l.push(Wt,Zt,Dt),k+=6}o.addGroup(p,k,v),p+=k,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ii(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Se(i){let t={};for(let e=0;e<i.length;e++){let n=ii(i[e]);for(let s in n)t[s]=n[s]}return t}function Ch(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zo(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var Tc={clone:ii,merge:Se},Rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ih=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ne=class extends Je{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rh,this.fragmentShader=Ih,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ii(t.uniforms),this.uniformsGroups=Ch(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},as=class extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Ye,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},An=new I,Al=new At,Cl=new At,_e=class extends as{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(An.x,An.y).multiplyScalar(-t/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(An.x,An.y).multiplyScalar(-t/An.z)}getViewSize(t,e){return this.getViewBounds(t,Al,Cl),e.subVectors(Cl,Al)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(za*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vi=-90,yi=1,hr=class extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _e(vi,yi,t,e);s.layers=this.layers,this.add(s);let r=new _e(vi,yi,t,e);r.layers=this.layers,this.add(r);let a=new _e(vi,yi,t,e);a.layers=this.layers,this.add(a);let o=new _e(vi,yi,t,e);o.layers=this.layers,this.add(o);let l=new _e(vi,yi,t,e);l.layers=this.layers,this.add(l);let c=new _e(vi,yi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ye)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},os=class extends Ie{constructor(t=[],e=ei,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ur=class extends en{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new os(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pn(5,5,5),r=new Ne({name:"CubemapFromEquirect",uniforms:ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ve,blending:vn});r.uniforms.tEquirect.value=e;let a=new Kt(s,r),o=e.minFilter;return e.minFilter===Un&&(e.minFilter=Ze),new hr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Te=class extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ph={type:"move"},wi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ph)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Yn=class extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ke,this.environmentIntensity=1,this.environmentRotation=new ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var dr=class extends Ie{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Re,h=Re,d,f){super(null,a,o,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ls=class extends Ce{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Mi=new ie,Rl=new ie,Zs=[],Il=new nn,Lh=new ie,Xi=new Kt,qi=new xn,cs=class extends Kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ls(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lh)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new nn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mi),Il.copy(t.boundingBox).applyMatrix4(Mi),this.boundingBox.union(Il)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mi),qi.copy(t.boundingSphere).applyMatrix4(Mi),this.boundingSphere.union(qi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Xi.geometry=this.geometry,Xi.material=this.material,Xi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qi.copy(this.boundingSphere),qi.applyMatrix4(n),t.ray.intersectsSphere(qi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mi),Rl.multiplyMatrices(n,Mi),Xi.matrixWorld=Rl,Xi.raycast(t,Zs);for(let a=0,o=Zs.length;a<o;a++){let l=Zs[a];l.instanceId=r,l.object=this,e.push(l)}Zs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ls(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new dr(new Float32Array(s*this.count),s,this.count,$r,Qe));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},oo=new I,Dh=new I,Uh=new zt,tn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=oo.subVectors(n,e).cross(Dh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(oo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Uh.getNormalMatrix(t),s=this.coplanarPoint(oo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hn=new xn,Nh=new At(.5,.5),Js=new I,Ai=class{constructor(t=new tn,e=new tn,n=new tn,s=new tn,r=new tn,a=new tn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ye,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],p=r[7],_=r[8],y=r[9],m=r[10],u=r[11],T=r[12],E=r[13],S=r[14],C=r[15];if(s[0].setComponents(c-a,p-h,u-_,C-T).normalize(),s[1].setComponents(c+a,p+h,u+_,C+T).normalize(),s[2].setComponents(c+o,p+d,u+y,C+E).normalize(),s[3].setComponents(c-o,p-d,u-y,C-E).normalize(),n)s[4].setComponents(l,f,m,S).normalize(),s[5].setComponents(c-l,p-f,u-m,C-S).normalize();else if(s[4].setComponents(c-l,p-f,u-m,C-S).normalize(),e===Ye)s[5].setComponents(c+l,p+f,u+m,C+S).normalize();else if(e===Qi)s[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){Hn.center.set(0,0,0);let e=Nh.distanceTo(t.center);return Hn.radius=.7071067811865476+e,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Js.x=s.normal.x>0?t.max.x:t.min.x,Js.y=s.normal.y>0?t.max.y:t.min.y,Js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var fr=class extends Je{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Pl=new ie,vo=new es,$s=new xn,Ks=new I,hs=class extends fe{constructor(t=new xe,e=new fr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(s),$s.radius+=r,t.ray.intersectsSphere($s)===!1)return;Pl.copy(s).invert(),vo.copy(t.ray).applyMatrix4(Pl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=f,y=p;_<y;_++){let m=c.getX(_);Ks.fromBufferAttribute(d,m),Ll(Ks,m,l,s,t,e,this)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,y=p;_<y;_++)Ks.fromBufferAttribute(d,_),Ll(Ks,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ll(i,t,e,n,s,r,a){let o=vo.distanceSqToPoint(i);if(o<e){let l=new I;vo.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var us=class extends Ie{constructor(t,e,n=Nn,s,r,a,o=Re,l=Re,c,h=bi,d=1){if(h!==bi&&h!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ti(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ds=class extends Ie{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var He=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new At:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new ie;for(let p=0;p<=t;p++){let _=p/t;s[p]=this.getTangentAt(_,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(Gt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Gt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},fs=class extends He{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new At){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*d+this.aX,c=f*d+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},pr=class extends fs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Vo(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,p*=h,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Qs=new I,lo=new Vo,co=new Vo,ho=new Vo,$e=class extends He{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Qs.subVectors(s[0],s[1]).add(s[0]),c=Qs);let d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Qs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Qs),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),lo.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,_,y,m),co.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,_,y,m),ho.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,_,y,m)}else this.curveType==="catmullrom"&&(lo.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),co.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),ho.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(lo.calc(l),co.calc(l),ho.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Dl(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Fh(i,t){let e=1-i;return e*e*t}function Oh(i,t){return 2*(1-i)*i*t}function Bh(i,t){return i*i*t}function Zi(i,t,e,n){return Fh(i,t)+Oh(i,e)+Bh(i,n)}function zh(i,t){let e=1-i;return e*e*e*t}function Vh(i,t){let e=1-i;return 3*e*e*i*t}function kh(i,t){return 3*(1-i)*i*i*t}function Hh(i,t){return i*i*i*t}function Ji(i,t,e,n,s){return zh(i,t)+Vh(i,e)+kh(i,n)+Hh(i,s)}var mr=class extends He{constructor(t=new At,e=new At,n=new At,s=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new At){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ji(t,s.x,r.x,a.x,o.x),Ji(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},gr=class extends He{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ji(t,s.x,r.x,a.x,o.x),Ji(t,s.y,r.y,a.y,o.y),Ji(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_r=class extends He{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xr=class extends He{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vr=class extends He{constructor(t=new At,e=new At,n=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new At){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Zi(t,s.x,r.x,a.x),Zi(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ps=class extends He{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Zi(t,s.x,r.x,a.x),Zi(t,s.y,r.y,a.y),Zi(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yr=class extends He{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Dl(o,l.x,c.x,h.x,d.x),Dl(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new At().fromArray(s))}return this}},Gh=Object.freeze({__proto__:null,ArcCurve:pr,CatmullRomCurve3:$e,CubicBezierCurve:mr,CubicBezierCurve3:gr,EllipseCurve:fs,LineCurve:_r,LineCurve3:xr,QuadraticBezierCurve:vr,QuadraticBezierCurve3:ps,SplineCurve:yr});var Zn=class i extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,f=e/l,p=[],_=[],y=[],m=[];for(let u=0;u<h;u++){let T=u*f-a;for(let E=0;E<c;E++){let S=E*d-r;_.push(S,-T,0),y.push(0,0,1),m.push(E/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let T=0;T<o;T++){let E=T+c*u,S=T+c*(u+1),C=T+1+c*(u+1),A=T+1+c*u;p.push(E,S,A),p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new se(_,3)),this.setAttribute("normal",new se(y,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ci=class i extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new I,f=new I,p=[],_=[],y=[],m=[];for(let u=0;u<=n;u++){let T=[],E=u/n,S=0;u===0&&a===0?S=.5/e:u===n&&l===Math.PI&&(S=-.5/e);for(let C=0;C<=e;C++){let A=C/e;d.x=-t*Math.cos(s+A*r)*Math.sin(a+E*o),d.y=t*Math.cos(a+E*o),d.z=t*Math.sin(s+A*r)*Math.sin(a+E*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),m.push(A+S,1-E),T.push(c++)}h.push(T)}for(let u=0;u<n;u++)for(let T=0;T<e;T++){let E=h[u][T+1],S=h[u][T],C=h[u+1][T],A=h[u+1][T+1];(u!==0||a>0)&&p.push(E,S,A),(u!==n-1||l<Math.PI)&&p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new se(_,3)),this.setAttribute("normal",new se(y,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ms=class i extends xe{constructor(t=new ps(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new At,h=new I,d=[],f=[],p=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(p,2));function y(){for(let E=0;E<e;E++)m(E);m(r===!1?e:0),T(),u()}function m(E){h=t.getPointAt(E/e,h);let S=a.normals[E],C=a.binormals[E];for(let A=0;A<=s;A++){let P=A/s*Math.PI*2,O=Math.sin(P),v=-Math.cos(P);l.x=v*S.x+O*C.x,l.y=v*S.y+O*C.y,l.z=v*S.z+O*C.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function u(){for(let E=1;E<=e;E++)for(let S=1;S<=s;S++){let C=(s+1)*(E-1)+(S-1),A=(s+1)*E+(S-1),P=(s+1)*E+S,O=(s+1)*(E-1)+S;_.push(C,A,O),_.push(A,P,O)}}function T(){for(let E=0;E<=e;E++)for(let S=0;S<=s;S++)c.x=E/e,c.y=S/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Gh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var gs=class extends Je{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Pt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var Jn=class extends Je{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ca,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ke,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},sn=class extends Jn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new At(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var _s=class extends Je{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ca,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ke,this.combine=Hr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Mr=class extends Je{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Sr=class extends Je{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function js(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Wh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var $n=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},br=class extends $n{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:po,endingEnd:po}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case mo:r=t,o=2*e-n;break;case go:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mo:a=t,l=2*n-e;break;case go:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),y=_*_,m=y*_,u=-f*m+2*f*y-f*_,T=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*_+1,E=(-1-p)*m+(1.5+p)*y+.5*_,S=p*m-p*y;for(let C=0;C!==o;++C)r[C]=u*a[h+C]+T*a[c+C]+E*a[l+C]+S*a[d+C];return r}},Er=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*h;return r}},Tr=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Fe=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=js(e,this.TimeBufferType),this.values=js(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:js(t.times,Array),values:js(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Tr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Er(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new br(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case $i:e=this.InterpolantFactoryMethodDiscrete;break;case rr:e=this.InterpolantFactoryMethodLinear;break;case tr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $i;case this.InterpolantFactoryMethodLinear:return rr;case this.InterpolantFactoryMethodSmooth:return tr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Wh(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===tr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,f=d-n,p=d+n;for(let _=0;_!==n;++_){let y=e[d+_];if(y!==e[f+_]||y!==e[p+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Fe.prototype.ValueTypeName="";Fe.prototype.TimeBufferType=Float32Array;Fe.prototype.ValueBufferType=Float32Array;Fe.prototype.DefaultInterpolation=rr;var Ln=class extends Fe{constructor(t,e,n){super(t,e,n)}};Ln.prototype.ValueTypeName="bool";Ln.prototype.ValueBufferType=Array;Ln.prototype.DefaultInterpolation=$i;Ln.prototype.InterpolantFactoryMethodLinear=void 0;Ln.prototype.InterpolantFactoryMethodSmooth=void 0;var wr=class extends Fe{constructor(t,e,n,s){super(t,e,n,s)}};wr.prototype.ValueTypeName="color";var Ar=class extends Fe{constructor(t,e,n,s){super(t,e,n,s)}};Ar.prototype.ValueTypeName="number";var Cr=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)_n.slerpFlat(r,0,a,c-o,a,c,l);return r}},xs=class extends Fe{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Cr(this.times,this.values,this.getValueSize(),t)}};xs.prototype.ValueTypeName="quaternion";xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Dn=class extends Fe{constructor(t,e,n){super(t,e,n)}};Dn.prototype.ValueTypeName="string";Dn.prototype.ValueBufferType=Array;Dn.prototype.DefaultInterpolation=$i;Dn.prototype.InterpolantFactoryMethodLinear=void 0;Dn.prototype.InterpolantFactoryMethodSmooth=void 0;var Rr=class extends Fe{constructor(t,e,n,s){super(t,e,n,s)}};Rr.prototype.ValueTypeName="vector";var Ir=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},wc=new Ir,Pr=class{constructor(t){this.manager=t!==void 0?t:wc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Pr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Kn=class extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},vs=class extends Kn{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},uo=new ie,Ul=new I,Nl=new I,Lr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=Ke,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ai,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ul.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ul),Nl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nl),e.updateMatrixWorld(),uo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Fl=new ie,Yi=new I,fo=new I,yo=class extends Lr{constructor(){super(new _e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Yi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Yi),fo.copy(n.position),fo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(fo),n.updateMatrixWorld(),s.makeTranslation(-Yi.x,-Yi.y,-Yi.z),Fl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl,n.coordinateSystem,n.reversedDepth)}},Qn=class extends Kn{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yo}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},jn=class extends as{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Mo=class extends Lr{constructor(){super(new jn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ti=class extends Kn{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new Mo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ys=class extends Kn{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Dr=class extends _e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ko="\\[\\]\\.:\\/",Xh=new RegExp("["+ko+"]","g"),Ho="[^"+ko+"]",qh="[^"+ko.replace("\\.","")+"]",Yh=/((?:WC+[\/:])*)/.source.replace("WC",Ho),Zh=/(WCOD+)?/.source.replace("WCOD",qh),Jh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ho),$h=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ho),Kh=new RegExp("^"+Yh+Zh+Jh+$h+"$"),Qh=["material","materials","bones","map"],So=class{constructor(t,e,n){let s=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xh,"")}static parseTrackName(t){let e=Kh.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Qh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=So;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Um=new Float32Array(1);function Go(i,t,e,n){let s=jh(n);switch(e){case Lo:return i*t;case $r:return i*t/s.components*s.byteLength;case Kr:return i*t/s.components*s.byteLength;case Uo:return i*t*2/s.components*s.byteLength;case Qr:return i*t*2/s.components*s.byteLength;case Do:return i*t*3/s.components*s.byteLength;case Ge:return i*t*4/s.components*s.byteLength;case jr:return i*t*4/s.components*s.byteLength;case Es:case Ts:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ws:case As:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ea:case ia:return Math.max(i,16)*Math.max(t,8)/4;case ta:case na:return Math.max(i,8)*Math.max(t,8)/2;case sa:case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case la:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ca:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ha:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ua:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case da:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case pa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ma:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ga:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _a:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case va:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ya:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ma:case Sa:case ba:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ea:case Ta:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wa:case Aa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jh(i){switch(i){case Ke:case Co:return{byteLength:1,components:1};case Ri:case Ro:case Ii:return{byteLength:2,components:1};case Zr:case Jr:return{byteLength:2,components:4};case Nn:case Yr:case Qe:return{byteLength:4,components:1};case Io:case Po:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $c(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function eu(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){let _=d[f],y=d[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){let y=d[p];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var nu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,su=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,au=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,du=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Au=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ru=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Iu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Du=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ou=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ku=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ju=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$u=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ku=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ju=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,td=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ed=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ad=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,od=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ld=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ud=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,md=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_d=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ed=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Td=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ad=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Id=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ld=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Od=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$d=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ef=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,of=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ff=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_f=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ef=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Af=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Df=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Uf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:nu,alphahash_pars_fragment:iu,alphamap_fragment:su,alphamap_pars_fragment:ru,alphatest_fragment:au,alphatest_pars_fragment:ou,aomap_fragment:lu,aomap_pars_fragment:cu,batching_pars_vertex:hu,batching_vertex:uu,begin_vertex:du,beginnormal_vertex:fu,bsdfs:pu,iridescence_fragment:mu,bumpmap_pars_fragment:gu,clipping_planes_fragment:_u,clipping_planes_pars_fragment:xu,clipping_planes_pars_vertex:vu,clipping_planes_vertex:yu,color_fragment:Mu,color_pars_fragment:Su,color_pars_vertex:bu,color_vertex:Eu,common:Tu,cube_uv_reflection_fragment:wu,defaultnormal_vertex:Au,displacementmap_pars_vertex:Cu,displacementmap_vertex:Ru,emissivemap_fragment:Iu,emissivemap_pars_fragment:Pu,colorspace_fragment:Lu,colorspace_pars_fragment:Du,envmap_fragment:Uu,envmap_common_pars_fragment:Nu,envmap_pars_fragment:Fu,envmap_pars_vertex:Ou,envmap_physical_pars_fragment:Zu,envmap_vertex:Bu,fog_vertex:zu,fog_pars_vertex:Vu,fog_fragment:ku,fog_pars_fragment:Hu,gradientmap_pars_fragment:Gu,lightmap_pars_fragment:Wu,lights_lambert_fragment:Xu,lights_lambert_pars_fragment:qu,lights_pars_begin:Yu,lights_toon_fragment:Ju,lights_toon_pars_fragment:$u,lights_phong_fragment:Ku,lights_phong_pars_fragment:Qu,lights_physical_fragment:ju,lights_physical_pars_fragment:td,lights_fragment_begin:ed,lights_fragment_maps:nd,lights_fragment_end:id,logdepthbuf_fragment:sd,logdepthbuf_pars_fragment:rd,logdepthbuf_pars_vertex:ad,logdepthbuf_vertex:od,map_fragment:ld,map_pars_fragment:cd,map_particle_fragment:hd,map_particle_pars_fragment:ud,metalnessmap_fragment:dd,metalnessmap_pars_fragment:fd,morphinstance_vertex:pd,morphcolor_vertex:md,morphnormal_vertex:gd,morphtarget_pars_vertex:_d,morphtarget_vertex:xd,normal_fragment_begin:vd,normal_fragment_maps:yd,normal_pars_fragment:Md,normal_pars_vertex:Sd,normal_vertex:bd,normalmap_pars_fragment:Ed,clearcoat_normal_fragment_begin:Td,clearcoat_normal_fragment_maps:wd,clearcoat_pars_fragment:Ad,iridescence_pars_fragment:Cd,opaque_fragment:Rd,packing:Id,premultiplied_alpha_fragment:Pd,project_vertex:Ld,dithering_fragment:Dd,dithering_pars_fragment:Ud,roughnessmap_fragment:Nd,roughnessmap_pars_fragment:Fd,shadowmap_pars_fragment:Od,shadowmap_pars_vertex:Bd,shadowmap_vertex:zd,shadowmask_pars_fragment:Vd,skinbase_vertex:kd,skinning_pars_vertex:Hd,skinning_vertex:Gd,skinnormal_vertex:Wd,specularmap_fragment:Xd,specularmap_pars_fragment:qd,tonemapping_fragment:Yd,tonemapping_pars_fragment:Zd,transmission_fragment:Jd,transmission_pars_fragment:$d,uv_pars_fragment:Kd,uv_pars_vertex:Qd,uv_vertex:jd,worldpos_vertex:tf,background_vert:ef,background_frag:nf,backgroundCube_vert:sf,backgroundCube_frag:rf,cube_vert:af,cube_frag:of,depth_vert:lf,depth_frag:cf,distanceRGBA_vert:hf,distanceRGBA_frag:uf,equirect_vert:df,equirect_frag:ff,linedashed_vert:pf,linedashed_frag:mf,meshbasic_vert:gf,meshbasic_frag:_f,meshlambert_vert:xf,meshlambert_frag:vf,meshmatcap_vert:yf,meshmatcap_frag:Mf,meshnormal_vert:Sf,meshnormal_frag:bf,meshphong_vert:Ef,meshphong_frag:Tf,meshphysical_vert:wf,meshphysical_frag:Af,meshtoon_vert:Cf,meshtoon_frag:Rf,points_vert:If,points_frag:Pf,shadow_vert:Lf,shadow_frag:Df,sprite_vert:Uf,sprite_frag:Nf},ut={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},on={basic:{uniforms:Se([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Se([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Se([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Se([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Se([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Se([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Se([ut.points,ut.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Se([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Se([ut.common,ut.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Se([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Se([ut.sprite,ut.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Se([ut.common,ut.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Se([ut.lights,ut.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};on.physical={uniforms:Se([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Ra={r:0,b:0,g:0},si=new ke,Ff=new ie;function Of(i,t,e,n,s,r,a){let o=new Pt(0),l=r===!0?0:1,c,h,d=null,f=0,p=null;function _(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function y(E){let S=!1,C=_(E);C===null?u(o,l):C&&C.isColor&&(u(C,1),S=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){let C=_(S);C&&(C.isCubeTexture||C.mapping===Ss)?(h===void 0&&(h=new Kt(new Pn(1,1,1),new Ne({name:"BackgroundCubeMaterial",uniforms:ii(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),si.copy(S.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ff.makeRotationFromEuler(si)),h.material.toneMapped=Yt.getTransfer(C.colorSpace)!==te,(d!==C||f!==C.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=C,f=C.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Kt(new Zn(2,2),new Ne({name:"BackgroundMaterial",uniforms:ii(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(C.colorSpace)!==te,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=C,f=C.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function u(E,S){E.getRGB(Ra,zo(i)),n.buffers.color.setClear(Ra.r,Ra.g,Ra.b,S,a)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,u(o,l)},render:y,addToRenderList:m,dispose:T}}function Bf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(M,R,F,z,G){let Y=!1,X=d(z,F,R);r!==X&&(r=X,c(r.object)),Y=p(M,z,F,G),Y&&_(M,z,F,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(M,R,F,z),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,R,F){let z=F.wireframe===!0,G=n[M.id];G===void 0&&(G={},n[M.id]=G);let Y=G[R.id];Y===void 0&&(Y={},G[R.id]=Y);let X=Y[z];return X===void 0&&(X=f(l()),Y[z]=X),X}function f(M){let R=[],F=[],z=[];for(let G=0;G<e;G++)R[G]=0,F[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,R,F,z){let G=r.attributes,Y=R.attributes,X=0,K=F.getAttributes();for(let k in K)if(K[k].location>=0){let dt=G[k],_t=Y[k];if(_t===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor)),dt===void 0||dt.attribute!==_t||_t&&dt.data!==_t.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function _(M,R,F,z){let G={},Y=R.attributes,X=0,K=F.getAttributes();for(let k in K)if(K[k].location>=0){let dt=Y[k];dt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor));let _t={};_t.attribute=dt,dt&&dt.data&&(_t.data=dt.data),G[k]=_t,X++}r.attributes=G,r.attributesNum=X,r.index=z}function y(){let M=r.newAttributes;for(let R=0,F=M.length;R<F;R++)M[R]=0}function m(M){u(M,0)}function u(M,R){let F=r.newAttributes,z=r.enabledAttributes,G=r.attributeDivisors;F[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),G[M]!==R&&(i.vertexAttribDivisor(M,R),G[M]=R)}function T(){let M=r.newAttributes,R=r.enabledAttributes;for(let F=0,z=R.length;F<z;F++)R[F]!==M[F]&&(i.disableVertexAttribArray(F),R[F]=0)}function E(M,R,F,z,G,Y,X){X===!0?i.vertexAttribIPointer(M,R,F,G,Y):i.vertexAttribPointer(M,R,F,z,G,Y)}function S(M,R,F,z){y();let G=z.attributes,Y=F.getAttributes(),X=R.defaultAttributeValues;for(let K in Y){let k=Y[K];if(k.location>=0){let tt=G[K];if(tt===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){let dt=tt.normalized,_t=tt.itemSize,Lt=t.get(tt);if(Lt===void 0)continue;let Wt=Lt.buffer,Zt=Lt.type,Dt=Lt.bytesPerElement,q=Zt===i.INT||Zt===i.UNSIGNED_INT||tt.gpuType===Yr;if(tt.isInterleavedBufferAttribute){let Z=tt.data,pt=Z.stride,ot=tt.offset;if(Z.isInstancedInterleavedBuffer){for(let st=0;st<k.locationSize;st++)u(k.location+st,Z.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let st=0;st<k.locationSize;st++)m(k.location+st);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let st=0;st<k.locationSize;st++)E(k.location+st,_t/k.locationSize,Zt,dt,pt*Dt,(ot+_t/k.locationSize*st)*Dt,q)}else{if(tt.isInstancedBufferAttribute){for(let Z=0;Z<k.locationSize;Z++)u(k.location+Z,tt.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Z=0;Z<k.locationSize;Z++)m(k.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let Z=0;Z<k.locationSize;Z++)E(k.location+Z,_t/k.locationSize,Zt,dt,_t*Dt,_t/k.locationSize*Z*Dt,q)}}else if(X!==void 0){let dt=X[K];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(k.location,dt);break;case 3:i.vertexAttrib3fv(k.location,dt);break;case 4:i.vertexAttrib4fv(k.location,dt);break;default:i.vertexAttrib1fv(k.location,dt)}}}}T()}function C(){O();for(let M in n){let R=n[M];for(let F in R){let z=R[F];for(let G in z)h(z[G].object),delete z[G];delete R[F]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;let R=n[M.id];for(let F in R){let z=R[F];for(let G in z)h(z[G].object),delete z[G];delete R[F]}delete n[M.id]}function P(M){for(let R in n){let F=n[R];if(F[M.id]===void 0)continue;let z=F[M.id];for(let G in z)h(z[G].object),delete z[G];delete F[M.id]}}function O(){v(),a=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:v,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:m,disableUnusedAttributes:T}}function zf(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let _=0;_<d;_++)p+=h[_];e.update(p,n,1)}function l(c,h,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let _=0;for(let y=0;y<d;y++)_+=h[y]*f[y];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Vf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Ge&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let O=P===Ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Ke&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Qe&&!O)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:C,maxSamples:A}}function kf(i){let t=this,e=null,n=0,s=!1,r=!1,a=new tn,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){let _=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let T=r?0:n,E=T*4,S=u.clippingState||null;l.value=S,S=h(_,f,E,p);for(let C=0;C!==E;++C)S[C]=e[C];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,p,_){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,_!==!0||m===null){let u=p+y*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<u)&&(m=new Float32Array(u));for(let E=0,S=p;E!==y;++E,S+=4)a.copy(d[E]).applyMatrix4(T,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Hf(i){let t=new WeakMap;function e(a,o){return o===Wr?a.mapping=ei:o===Xr&&(a.mapping=ni),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Wr||o===Xr)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ur(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ui=4,Ac=[.125,.215,.35,.446,.526,.582],oi=20,Wo=new jn,Cc=new Pt,Xo=null,qo=0,Yo=0,Zo=!1,ai=(1+Math.sqrt(5))/2,Di=1/ai,Rc=[new I(-ai,Di,0),new I(ai,Di,0),new I(-Di,0,ai),new I(Di,0,ai),new I(0,ai,-Di),new I(0,ai,Di),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Gf=new I,Fi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Gf}=r;Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xo,qo,Yo),this._renderer.xr.enabled=Zo,t.scissorTest=!1,Ia(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ei||t.mapping===ni?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Ii,format:Ge,colorSpace:qn,depthBuffer:!1},s=Ic(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ic(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wf(r)),this._blurMaterial=Xf(r,t,e)}return s}_compileMaterial(t){let e=new Kt(this._lodPlanes[0],t);this._renderer.compile(e,Wo)}_sceneToCubeUV(t,e,n,s,r){let l=new _e(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Cc),d.toneMapping=yn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let y=new is({name:"PMREM.Background",side:ve,depthWrite:!1,depthTest:!1}),m=new Kt(new Pn,y),u=!1,T=t.background;T?T.isColor&&(y.color.copy(T),t.background=null,u=!0):(y.color.copy(Cc),u=!0);for(let E=0;E<6;E++){let S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let C=this._cubeSize;Ia(s,S*C,E>2?C:0,C,C),d.setRenderTarget(s),u&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ei||t.mapping===ni;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Kt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ia(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Wo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Rc[(s-r-1)%Rc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Kt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*oi-1),y=r/_,m=isFinite(r)?1+Math.floor(h*y):oi;m>oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${oi}`);let u=[],T=0;for(let P=0;P<oi;++P){let O=P/y,v=Math.exp(-O*O/2);u.push(v),P===0?T+=v:P<m&&(T+=2*v)}for(let P=0;P<u.length;P++)u[P]=u[P]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-n;let S=this._sizeLods[s],C=3*S*(s>E-Ui?s-E+Ui:0),A=4*(this._cubeSize-S);Ia(e,C,A,3*S,2*S),l.setRenderTarget(e),l.render(d,Wo)}};function Wf(i){let t=[],e=[],n=[],s=i,r=i-Ui+1+Ac.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ui?l=Ac[a-i+Ui-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,y=3,m=2,u=1,T=new Float32Array(y*_*p),E=new Float32Array(m*_*p),S=new Float32Array(u*_*p);for(let A=0;A<p;A++){let P=A%3*2/3-1,O=A>2?0:-1,v=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];T.set(v,y*_*A),E.set(f,m*_*A);let M=[A,A,A,A,A,A];S.set(M,u*_*A)}let C=new xe;C.setAttribute("position",new Ce(T,y)),C.setAttribute("uv",new Ce(E,m)),C.setAttribute("faceIndex",new Ce(S,u)),t.push(C),s>Ui&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ic(i,t,e){let n=new en(i,t,e);return n.texture.mapping=Ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ia(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Xf(i,t,e){let n=new Float32Array(oi),s=new I(0,1,0);return new Ne({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Pc(){return new Ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Lc(){return new Ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function sl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Wr||l===Xr,h=l===ei||l===ni;if(c||h){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Fi(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Fi(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Yf(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ei("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zf(i,t,e,n){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(d){let f=[],p=d.index,_=d.attributes.position,y=0;if(p!==null){let T=p.array;y=p.version;for(let E=0,S=T.length;E<S;E+=3){let C=T[E+0],A=T[E+1],P=T[E+2];f.push(C,A,A,P,P,C)}}else if(_!==void 0){let T=_.array;y=_.version;for(let E=0,S=T.length/3-1;E<S;E+=3){let C=E+0,A=E+1,P=E+2;f.push(C,A,A,P,P,C)}}else return;let m=new(Bo(f)?rs:ss)(f,1);m.version=y;let u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Jf(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,f*a,_),e.update(p,n,_))}function h(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];e.update(m,n,1)}function d(f,p,_,y){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/a,p[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,y,0,_);let u=0;for(let T=0;T<_;T++)u+=p[T]*y[T];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function $f(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Kf(i,t,e){let n=new WeakMap,s=new jt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let v=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],E=0;p===!0&&(E=1),_===!0&&(E=2),y===!0&&(E=3);let S=o.attributes.position.count*E,C=1;S>t.maxTextureSize&&(C=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let A=new Float32Array(S*C*4*d),P=new ts(A,S,C,d);P.type=Qe,P.needsUpdate=!0;let O=E*4;for(let M=0;M<d;M++){let R=m[M],F=u[M],z=T[M],G=S*C*4*M;for(let Y=0;Y<R.count;Y++){let X=Y*O;p===!0&&(s.fromBufferAttribute(R,Y),A[G+X+0]=s.x,A[G+X+1]=s.y,A[G+X+2]=s.z,A[G+X+3]=0),_===!0&&(s.fromBufferAttribute(F,Y),A[G+X+4]=s.x,A[G+X+5]=s.y,A[G+X+6]=s.z,A[G+X+7]=0),y===!0&&(s.fromBufferAttribute(z,Y),A[G+X+8]=s.x,A[G+X+9]=s.y,A[G+X+10]=s.z,A[G+X+11]=z.itemSize===4?s.w:1)}}f={count:d,texture:P,size:new At(S,C)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Qf(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Kc=new Ie,Dc=new us(1,1),Qc=new ts,jc=new cr,th=new os,Uc=[],Nc=[],Fc=new Float32Array(16),Oc=new Float32Array(9),Bc=new Float32Array(4);function Oi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Uc[s];if(r===void 0&&(r=new Float32Array(s),Uc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Da(i,t){let e=Nc[t];e===void 0&&(e=new Int32Array(t),Nc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function tp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function ep(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function ip(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Bc.set(n),i.uniformMatrix2fv(this.addr,!1,Bc),me(e,n)}}function sp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Oc.set(n),i.uniformMatrix3fv(this.addr,!1,Oc),me(e,n)}}function rp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Fc.set(n),i.uniformMatrix4fv(this.addr,!1,Fc),me(e,n)}}function ap(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function hp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function dp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function pp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Dc.compareFunction=No,r=Dc):r=Kc,e.setTexture2D(t||r,s)}function mp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||jc,s)}function gp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||th,s)}function _p(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qc,s)}function xp(i){switch(i){case 5126:return jf;case 35664:return tp;case 35665:return ep;case 35666:return np;case 35674:return ip;case 35675:return sp;case 35676:return rp;case 5124:case 35670:return ap;case 35667:case 35671:return op;case 35668:case 35672:return lp;case 35669:case 35673:return cp;case 5125:return hp;case 36294:return up;case 36295:return dp;case 36296:return fp;case 35678:case 36198:case 36298:case 36306:case 35682:return pp;case 35679:case 36299:case 36307:return mp;case 35680:case 36300:case 36308:case 36293:return gp;case 36289:case 36303:case 36311:case 36292:return _p}}function vp(i,t){i.uniform1fv(this.addr,t)}function yp(i,t){let e=Oi(t,this.size,2);i.uniform2fv(this.addr,e)}function Mp(i,t){let e=Oi(t,this.size,3);i.uniform3fv(this.addr,e)}function Sp(i,t){let e=Oi(t,this.size,4);i.uniform4fv(this.addr,e)}function bp(i,t){let e=Oi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ep(i,t){let e=Oi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Tp(i,t){let e=Oi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function wp(i,t){i.uniform1iv(this.addr,t)}function Ap(i,t){i.uniform2iv(this.addr,t)}function Cp(i,t){i.uniform3iv(this.addr,t)}function Rp(i,t){i.uniform4iv(this.addr,t)}function Ip(i,t){i.uniform1uiv(this.addr,t)}function Pp(i,t){i.uniform2uiv(this.addr,t)}function Lp(i,t){i.uniform3uiv(this.addr,t)}function Dp(i,t){i.uniform4uiv(this.addr,t)}function Up(i,t,e){let n=this.cache,s=t.length,r=Da(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Kc,r[a])}function Np(i,t,e){let n=this.cache,s=t.length,r=Da(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||jc,r[a])}function Fp(i,t,e){let n=this.cache,s=t.length,r=Da(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||th,r[a])}function Op(i,t,e){let n=this.cache,s=t.length,r=Da(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Qc,r[a])}function Bp(i){switch(i){case 5126:return vp;case 35664:return yp;case 35665:return Mp;case 35666:return Sp;case 35674:return bp;case 35675:return Ep;case 35676:return Tp;case 5124:case 35670:return wp;case 35667:case 35671:return Ap;case 35668:case 35672:return Cp;case 35669:case 35673:return Rp;case 5125:return Ip;case 36294:return Pp;case 36295:return Lp;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Up;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return Fp;case 36289:case 36303:case 36311:case 36292:return Op}}var $o=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xp(e.type)}},Ko=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bp(e.type)}},Qo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Jo=/(\w+)(\])?(\[|\.)?/g;function zc(i,t){i.seq.push(t),i.map[t.id]=t}function zp(i,t,e){let n=i.name,s=n.length;for(Jo.lastIndex=0;;){let r=Jo.exec(n),a=Jo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){zc(e,c===void 0?new $o(o,i,t):new Ko(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Qo(o),zc(e,d)),e=d}}}var Ni=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);zp(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Vc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Vp=37297,kp=0;function Hp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var kc=new zt;function Gp(i){Yt._getMatrix(kc,Yt.workingColorSpace,i);let t=`mat3( ${kc.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case Ki:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Hc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Hp(i.getShaderSource(t),o)}else return r}function Wp(i,t){let e=Gp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Xp(i,t){let e;switch(t){case rc:e="Linear";break;case ac:e="Reinhard";break;case oc:e="Cineon";break;case Gr:e="ACESFilmic";break;case cc:e="AgX";break;case hc:e="Neutral";break;case lc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Pa=new I;function qp(){Yt.getLuminanceCoefficients(Pa);let i=Pa.x.toFixed(4),t=Pa.y.toFixed(4),e=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function Zp(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jp(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Rs(i){return i!==""}function Gc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $p=/^[ \t]*#include +<([\w\d./]+)>/gm;function jo(i){return i.replace($p,Qp)}var Kp=new Map;function Qp(i,t){let e=Ht[t];if(e===void 0){let n=Kp.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jo(e)}var jp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xc(i){return i.replace(jp,tm)}function tm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function em(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Eo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ur?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===rn&&(t="SHADOWMAP_TYPE_VSM"),t}function nm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ei:case ni:t="ENVMAP_TYPE_CUBE";break;case Ss:t="ENVMAP_TYPE_CUBE_UV";break}return t}function im(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ni:t="ENVMAP_MODE_REFRACTION";break}return t}function sm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hr:t="ENVMAP_BLENDING_MULTIPLY";break;case ic:t="ENVMAP_BLENDING_MIX";break;case sc:t="ENVMAP_BLENDING_ADD";break}return t}function rm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function am(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=em(e),c=nm(e),h=im(e),d=sm(e),f=rm(e),p=Yp(e),_=Zp(r),y=s.createProgram(),m,u,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Rs).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Rs).join(`
`),u.length>0&&(u+=`
`)):(m=[qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),u=[qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==yn?Xp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Wp("linearToOutputTexel",e.outputColorSpace),qp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),a=jo(a),a=Gc(a,e),a=Wc(a,e),o=jo(o),o=Gc(o,e),o=Wc(o,e),a=Xc(a),o=Xc(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Oo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let E=T+m+a,S=T+u+o,C=Vc(s,s.VERTEX_SHADER,E),A=Vc(s,s.FRAGMENT_SHADER,S);s.attachShader(y,C),s.attachShader(y,A),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(R){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(y)||"",z=s.getShaderInfoLog(C)||"",G=s.getShaderInfoLog(A)||"",Y=F.trim(),X=z.trim(),K=G.trim(),k=!0,tt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,C,A);else{let dt=Hc(s,C,"vertex"),_t=Hc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+Y+`
`+dt+`
`+_t)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(X===""||K==="")&&(tt=!1);tt&&(R.diagnostics={runnable:k,programLog:Y,vertexShader:{log:X,prefix:m},fragmentShader:{log:K,prefix:u}})}s.deleteShader(C),s.deleteShader(A),O=new Ni(s,y),v=Jp(s,y)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let v;this.getAttributes=function(){return v===void 0&&P(this),v};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,Vp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kp++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=A,this}var om=0,tl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new el(t),e.set(t,n)),n}},el=class{constructor(t){this.id=om++,this.code=t,this.usedTimes=0}};function lm(i,t,e,n,s,r,a){let o=new ns,l=new tl,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,M,R,F,z){let G=F.fog,Y=z.geometry,X=v.isMeshStandardMaterial?F.environment:null,K=(v.isMeshStandardMaterial?e:t).get(v.envMap||X),k=K&&K.mapping===Ss?K.image.height:null,tt=_[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let dt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_t=dt!==void 0?dt.length:0,Lt=0;Y.morphAttributes.position!==void 0&&(Lt=1),Y.morphAttributes.normal!==void 0&&(Lt=2),Y.morphAttributes.color!==void 0&&(Lt=3);let Wt,Zt,Dt,q;if(tt){let Qt=on[tt];Wt=Qt.vertexShader,Zt=Qt.fragmentShader}else Wt=v.vertexShader,Zt=v.fragmentShader,l.update(v),Dt=l.getVertexShaderID(v),q=l.getFragmentShaderID(v);let Z=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),ot=z.isInstancedMesh===!0,st=z.isBatchedMesh===!0,Nt=!!v.map,he=!!v.matcap,w=!!K,qt=!!v.aoMap,Ft=!!v.lightMap,ht=!!v.bumpMap,at=!!v.normalMap,Vt=!!v.displacementMap,ct=!!v.emissiveMap,Tt=!!v.metalnessMap,$t=!!v.roughnessMap,Rt=v.anisotropy>0,b=v.clearcoat>0,g=v.dispersion>0,U=v.iridescence>0,H=v.sheen>0,$=v.transmission>0,W=Rt&&!!v.anisotropyMap,xt=b&&!!v.clearcoatMap,nt=b&&!!v.clearcoatNormalMap,yt=b&&!!v.clearcoatRoughnessMap,bt=U&&!!v.iridescenceMap,Q=U&&!!v.iridescenceThicknessMap,ft=H&&!!v.sheenColorMap,Ct=H&&!!v.sheenRoughnessMap,Mt=!!v.specularMap,lt=!!v.specularColorMap,kt=!!v.specularIntensityMap,L=$&&!!v.transmissionMap,it=$&&!!v.thicknessMap,rt=!!v.gradientMap,vt=!!v.alphaMap,j=v.alphaTest>0,J=!!v.alphaHash,Et=!!v.extensions,Bt=yn;v.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Bt=i.toneMapping);let re={shaderID:tt,shaderType:v.type,shaderName:v.name,vertexShader:Wt,fragmentShader:Zt,defines:v.defines,customVertexShaderID:Dt,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:st,batchingColor:st&&z._colorsTexture!==null,instancing:ot,instancingColor:ot&&z.instanceColor!==null,instancingMorph:ot&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:qn,alphaToCoverage:!!v.alphaToCoverage,map:Nt,matcap:he,envMap:w,envMapMode:w&&K.mapping,envMapCubeUVHeight:k,aoMap:qt,lightMap:Ft,bumpMap:ht,normalMap:at,displacementMap:f&&Vt,emissiveMap:ct,normalMapObjectSpace:at&&v.normalMapType===pc,normalMapTangentSpace:at&&v.normalMapType===Ca,metalnessMap:Tt,roughnessMap:$t,anisotropy:Rt,anisotropyMap:W,clearcoat:b,clearcoatMap:xt,clearcoatNormalMap:nt,clearcoatRoughnessMap:yt,dispersion:g,iridescence:U,iridescenceMap:bt,iridescenceThicknessMap:Q,sheen:H,sheenColorMap:ft,sheenRoughnessMap:Ct,specularMap:Mt,specularColorMap:lt,specularIntensityMap:kt,transmission:$,transmissionMap:L,thicknessMap:it,gradientMap:rt,opaque:v.transparent===!1&&v.blending===Wn&&v.alphaToCoverage===!1,alphaMap:vt,alphaTest:j,alphaHash:J,combine:v.combine,mapUv:Nt&&y(v.map.channel),aoMapUv:qt&&y(v.aoMap.channel),lightMapUv:Ft&&y(v.lightMap.channel),bumpMapUv:ht&&y(v.bumpMap.channel),normalMapUv:at&&y(v.normalMap.channel),displacementMapUv:Vt&&y(v.displacementMap.channel),emissiveMapUv:ct&&y(v.emissiveMap.channel),metalnessMapUv:Tt&&y(v.metalnessMap.channel),roughnessMapUv:$t&&y(v.roughnessMap.channel),anisotropyMapUv:W&&y(v.anisotropyMap.channel),clearcoatMapUv:xt&&y(v.clearcoatMap.channel),clearcoatNormalMapUv:nt&&y(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&y(v.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&y(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&y(v.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&y(v.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&y(v.sheenRoughnessMap.channel),specularMapUv:Mt&&y(v.specularMap.channel),specularColorMapUv:lt&&y(v.specularColorMap.channel),specularIntensityMapUv:kt&&y(v.specularIntensityMap.channel),transmissionMapUv:L&&y(v.transmissionMap.channel),thicknessMapUv:it&&y(v.thicknessMap.channel),alphaMapUv:vt&&y(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(at||Rt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(Nt||vt),fog:!!G,useFog:v.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Lt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Nt&&v.map.isVideoTexture===!0&&Yt.getTransfer(v.map.colorSpace)===te,decodeVideoTextureEmissive:ct&&v.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(v.emissiveMap.colorSpace)===te,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===an,flipSided:v.side===ve,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Et&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&v.extensions.multiDraw===!0||st)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function u(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)M.push(R),M.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(T(M,v),E(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function T(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function E(v,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),v.push(o.mask)}function S(v){let M=_[v.type],R;if(M){let F=on[M];R=Tc.clone(F.uniforms)}else R=v.uniforms;return R}function C(v,M){let R;for(let F=0,z=h.length;F<z;F++){let G=h[F];if(G.cacheKey===M){R=G,++R.usedTimes;break}}return R===void 0&&(R=new am(i,M,v,r),h.push(R)),R}function A(v){if(--v.usedTimes===0){let M=h.indexOf(v);h[M]=h[h.length-1],h.pop(),v.destroy()}}function P(v){l.remove(v)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:C,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:O}}function cm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function hm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Zc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,p,_,y,m){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:y,group:m},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=y,u.group=m),t++,u}function o(d,f,p,_,y,m){let u=a(d,f,p,_,y,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):e.push(u)}function l(d,f,p,_,y,m){let u=a(d,f,p,_,y,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||hm),n.length>1&&n.sort(f||Yc),s.length>1&&s.sort(f||Yc)}function h(){for(let d=t,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function um(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Zc,i.set(n,[a])):s>=r.length?(a=new Zc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function dm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Pt};break;case"SpotLight":e={position:new I,direction:new I,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function fm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var pm=0;function mm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function gm(i){let t=new dm,e=fm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new ie,a=new ie;function o(c){let h=0,d=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,_=0,y=0,m=0,u=0,T=0,E=0,S=0,C=0,A=0,P=0;c.sort(mm);for(let v=0,M=c.length;v<M;v++){let R=c[v],F=R.color,z=R.intensity,G=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=F.r*z,d+=F.g*z,f+=F.b*z;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],z);P++}else if(R.isDirectionalLight){let X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let K=R.shadow,k=e.get(R);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=R.shadow.matrix,T++}n.directional[p]=X,p++}else if(R.isSpotLight){let X=t.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(F).multiplyScalar(z),X.distance=G,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[y]=X;let K=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,K.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[y]=K.matrix,R.castShadow){let k=e.get(R);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.spotShadow[y]=k,n.spotShadowMap[y]=Y,S++}y++}else if(R.isRectAreaLight){let X=t.get(R);X.color.copy(F).multiplyScalar(z),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=X,m++}else if(R.isPointLight){let X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){let K=R.shadow,k=e.get(R);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,k.shadowCameraNear=K.camera.near,k.shadowCameraFar=K.camera.far,n.pointShadow[_]=k,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=R.shadow.matrix,E++}n.point[_]=X,_++}else if(R.isHemisphereLight){let X=t.get(R);X.skyColor.copy(R.color).multiplyScalar(z),X.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[u]=X,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let O=n.hash;(O.directionalLength!==p||O.pointLength!==_||O.spotLength!==y||O.rectAreaLength!==m||O.hemiLength!==u||O.numDirectionalShadows!==T||O.numPointShadows!==E||O.numSpotShadows!==S||O.numSpotMaps!==C||O.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,O.directionalLength=p,O.pointLength=_,O.spotLength=y,O.rectAreaLength=m,O.hemiLength=u,O.numDirectionalShadows=T,O.numPointShadows=E,O.numSpotShadows=S,O.numSpotMaps=C,O.numLightProbes=P,n.version=pm++)}function l(c,h){let d=0,f=0,p=0,_=0,y=0,m=h.matrixWorldInverse;for(let u=0,T=c.length;u<T;u++){let E=c[u];if(E.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(E.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let S=n.hemi[y];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:n}}function Jc(i){let t=new gm(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function _m(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Jc(i),t.set(s,[o])):r>=a.length?(o=new Jc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ym(i,t,e){let n=new Ai,s=new At,r=new At,a=new jt,o=new Mr({depthPacking:fc}),l=new Sr,c={},h=e.maxTextureSize,d={[mn]:ve,[ve]:mn,[an]:an},f=new Ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:xm,fragmentShader:vm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new xe;_.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Kt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eo;let u=this.type;this.render=function(A,P,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let v=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),F=i.state;F.setBlending(vn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let z=u!==rn&&this.type===rn,G=u===rn&&this.type!==rn;for(let Y=0,X=A.length;Y<X;Y++){let K=A[Y],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let tt=k.getFrameExtents();if(s.multiply(tt),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,k.mapSize.y=r.y)),k.map===null||z===!0||G===!0){let _t=this.type!==rn?{minFilter:Re,magFilter:Re}:{};k.map!==null&&k.map.dispose(),k.map=new en(s.x,s.y,_t),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let dt=k.getViewportCount();for(let _t=0;_t<dt;_t++){let Lt=k.getViewport(_t);a.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),F.viewport(a),k.updateMatrices(K,_t),n=k.getFrustum(),S(P,O,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===rn&&T(k,O),k.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(v,M,R)};function T(A,P){let O=t.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new en(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,O,f,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,O,p,y,null)}function E(A,P,O,v){let M=null,R=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)M=R;else if(M=O.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let F=M.uuid,z=P.uuid,G=c[F];G===void 0&&(G={},c[F]=G);let Y=G[z];Y===void 0&&(Y=M.clone(),G[z]=Y,P.addEventListener("dispose",C)),M=Y}if(M.visible=P.visible,M.wireframe=P.wireframe,v===rn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:d[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let F=i.properties.get(M);F.light=O}return M}function S(A,P,O,v,M){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===rn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);let z=t.update(A),G=A.material;if(Array.isArray(G)){let Y=z.groups;for(let X=0,K=Y.length;X<K;X++){let k=Y[X],tt=G[k.materialIndex];if(tt&&tt.visible){let dt=E(A,tt,v,M);A.onBeforeShadow(i,A,P,O,z,dt,k),i.renderBufferDirect(O,null,z,dt,A,k),A.onAfterShadow(i,A,P,O,z,dt,k)}}}else if(G.visible){let Y=E(A,G,v,M);A.onBeforeShadow(i,A,P,O,z,Y,null),i.renderBufferDirect(O,null,z,Y,A,null),A.onAfterShadow(i,A,P,O,z,Y,null)}}let F=A.children;for(let z=0,G=F.length;z<G;z++)S(F[z],P,O,v,M)}function C(A){A.target.removeEventListener("dispose",C);for(let O in c){let v=c[O],M=A.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}var Mm={[Nr]:Fr,[Or]:Vr,[Br]:kr,[Xn]:zr,[Fr]:Nr,[Vr]:Or,[kr]:Br,[zr]:Xn};function Sm(i,t){function e(){let L=!1,it=new jt,rt=null,vt=new jt(0,0,0,0);return{setMask:function(j){rt!==j&&!L&&(i.colorMask(j,j,j,j),rt=j)},setLocked:function(j){L=j},setClear:function(j,J,Et,Bt,re){re===!0&&(j*=Bt,J*=Bt,Et*=Bt),it.set(j,J,Et,Bt),vt.equals(it)===!1&&(i.clearColor(j,J,Et,Bt),vt.copy(it))},reset:function(){L=!1,rt=null,vt.set(-1,0,0,0)}}}function n(){let L=!1,it=!1,rt=null,vt=null,j=null;return{setReversed:function(J){if(it!==J){let Et=t.get("EXT_clip_control");J?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),it=J;let Bt=j;j=null,this.setClear(Bt)}},getReversed:function(){return it},setTest:function(J){J?Z(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(J){rt!==J&&!L&&(i.depthMask(J),rt=J)},setFunc:function(J){if(it&&(J=Mm[J]),vt!==J){switch(J){case Nr:i.depthFunc(i.NEVER);break;case Fr:i.depthFunc(i.ALWAYS);break;case Or:i.depthFunc(i.LESS);break;case Xn:i.depthFunc(i.LEQUAL);break;case Br:i.depthFunc(i.EQUAL);break;case zr:i.depthFunc(i.GEQUAL);break;case Vr:i.depthFunc(i.GREATER);break;case kr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=J}},setLocked:function(J){L=J},setClear:function(J){j!==J&&(it&&(J=1-J),i.clearDepth(J),j=J)},reset:function(){L=!1,rt=null,vt=null,j=null,it=!1}}}function s(){let L=!1,it=null,rt=null,vt=null,j=null,J=null,Et=null,Bt=null,re=null;return{setTest:function(Qt){L||(Qt?Z(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(Qt){it!==Qt&&!L&&(i.stencilMask(Qt),it=Qt)},setFunc:function(Qt,ln,je){(rt!==Qt||vt!==ln||j!==je)&&(i.stencilFunc(Qt,ln,je),rt=Qt,vt=ln,j=je)},setOp:function(Qt,ln,je){(J!==Qt||Et!==ln||Bt!==je)&&(i.stencilOp(Qt,ln,je),J=Qt,Et=ln,Bt=je)},setLocked:function(Qt){L=Qt},setClear:function(Qt){re!==Qt&&(i.clearStencil(Qt),re=Qt)},reset:function(){L=!1,it=null,rt=null,vt=null,j=null,J=null,Et=null,Bt=null,re=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,p=[],_=null,y=!1,m=null,u=null,T=null,E=null,S=null,C=null,A=null,P=new Pt(0,0,0),O=0,v=!1,M=null,R=null,F=null,z=null,G=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,K=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),X=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),X=K>=2);let tt=null,dt={},_t=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),Wt=new jt().fromArray(_t),Zt=new jt().fromArray(Lt);function Dt(L,it,rt,vt){let j=new Uint8Array(4),J=i.createTexture();i.bindTexture(L,J),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<rt;Et++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,j):i.texImage2D(it+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,j);return J}let q={};q[i.TEXTURE_2D]=Dt(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(Xn),ht(!1),at(bo),Z(i.CULL_FACE),qt(vn);function Z(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function pt(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function ot(L,it){return d[L]!==it?(i.bindFramebuffer(L,it),d[L]=it,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=it),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=it),!0):!1}function st(L,it){let rt=p,vt=!1;if(L){rt=f.get(it),rt===void 0&&(rt=[],f.set(it,rt));let j=L.textures;if(rt.length!==j.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let J=0,Et=j.length;J<Et;J++)rt[J]=i.COLOR_ATTACHMENT0+J;rt.length=j.length,vt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,vt=!0);vt&&i.drawBuffers(rt)}function Nt(L){return _!==L?(i.useProgram(L),_=L,!0):!1}let he={[In]:i.FUNC_ADD,[Vl]:i.FUNC_SUBTRACT,[kl]:i.FUNC_REVERSE_SUBTRACT};he[Hl]=i.MIN,he[Gl]=i.MAX;let w={[Wl]:i.ZERO,[Xl]:i.ONE,[ql]:i.SRC_COLOR,[er]:i.SRC_ALPHA,[Ql]:i.SRC_ALPHA_SATURATE,[$l]:i.DST_COLOR,[Zl]:i.DST_ALPHA,[Yl]:i.ONE_MINUS_SRC_COLOR,[nr]:i.ONE_MINUS_SRC_ALPHA,[Kl]:i.ONE_MINUS_DST_COLOR,[Jl]:i.ONE_MINUS_DST_ALPHA,[jl]:i.CONSTANT_COLOR,[tc]:i.ONE_MINUS_CONSTANT_COLOR,[ec]:i.CONSTANT_ALPHA,[nc]:i.ONE_MINUS_CONSTANT_ALPHA};function qt(L,it,rt,vt,j,J,Et,Bt,re,Qt){if(L===vn){y===!0&&(pt(i.BLEND),y=!1);return}if(y===!1&&(Z(i.BLEND),y=!0),L!==zl){if(L!==m||Qt!==v){if((u!==In||S!==In)&&(i.blendEquation(i.FUNC_ADD),u=In,S=In),Qt)switch(L){case Wn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ms:i.blendFunc(i.ONE,i.ONE);break;case To:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Wn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case To:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,E=null,C=null,A=null,P.set(0,0,0),O=0,m=L,v=Qt}return}j=j||it,J=J||rt,Et=Et||vt,(it!==u||j!==S)&&(i.blendEquationSeparate(he[it],he[j]),u=it,S=j),(rt!==T||vt!==E||J!==C||Et!==A)&&(i.blendFuncSeparate(w[rt],w[vt],w[J],w[Et]),T=rt,E=vt,C=J,A=Et),(Bt.equals(P)===!1||re!==O)&&(i.blendColor(Bt.r,Bt.g,Bt.b,re),P.copy(Bt),O=re),m=L,v=!1}function Ft(L,it){L.side===an?pt(i.CULL_FACE):Z(i.CULL_FACE);let rt=L.side===ve;it&&(rt=!rt),ht(rt),L.blending===Wn&&L.transparent===!1?qt(vn):qt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let vt=L.stencilWrite;o.setTest(vt),vt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ct(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function at(L){L!==Ol?(Z(i.CULL_FACE),L!==R&&(L===bo?i.cullFace(i.BACK):L===Bl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),R=L}function Vt(L){L!==F&&(X&&i.lineWidth(L),F=L)}function ct(L,it,rt){L?(Z(i.POLYGON_OFFSET_FILL),(z!==it||G!==rt)&&(i.polygonOffset(it,rt),z=it,G=rt)):pt(i.POLYGON_OFFSET_FILL)}function Tt(L){L?Z(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function $t(L){L===void 0&&(L=i.TEXTURE0+Y-1),tt!==L&&(i.activeTexture(L),tt=L)}function Rt(L,it,rt){rt===void 0&&(tt===null?rt=i.TEXTURE0+Y-1:rt=tt);let vt=dt[rt];vt===void 0&&(vt={type:void 0,texture:void 0},dt[rt]=vt),(vt.type!==L||vt.texture!==it)&&(tt!==rt&&(i.activeTexture(rt),tt=rt),i.bindTexture(L,it||q[L]),vt.type=L,vt.texture=it)}function b(){let L=dt[tt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(L){Wt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Wt.copy(L))}function Ct(L){Zt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Zt.copy(L))}function Mt(L,it){let rt=c.get(it);rt===void 0&&(rt=new WeakMap,c.set(it,rt));let vt=rt.get(L);vt===void 0&&(vt=i.getUniformBlockIndex(it,L.name),rt.set(L,vt))}function lt(L,it){let vt=c.get(it).get(L);l.get(it)!==vt&&(i.uniformBlockBinding(it,vt,L.__bindingPointIndex),l.set(it,vt))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},tt=null,dt={},d={},f=new WeakMap,p=[],_=null,y=!1,m=null,u=null,T=null,E=null,S=null,C=null,A=null,P=new Pt(0,0,0),O=0,v=!1,M=null,R=null,F=null,z=null,G=null,Wt.set(0,0,i.canvas.width,i.canvas.height),Zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:pt,bindFramebuffer:ot,drawBuffers:st,useProgram:Nt,setBlending:qt,setMaterial:Ft,setFlipSided:ht,setCullFace:at,setLineWidth:Vt,setPolygonOffset:ct,setScissorTest:Tt,activeTexture:$t,bindTexture:Rt,unbindTexture:b,compressedTexImage2D:g,compressedTexImage3D:U,texImage2D:bt,texImage3D:Q,updateUBOMapping:Mt,uniformBlockBinding:lt,texStorage2D:nt,texStorage3D:yt,texSubImage2D:H,texSubImage3D:$,compressedTexSubImage2D:W,compressedTexSubImage3D:xt,scissor:ft,viewport:Ct,reset:kt}}function bm(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,g){return p?new OffscreenCanvas(b,g):ji("canvas")}function y(b,g,U){let H=1,$=Rt(b);if(($.width>U||$.height>U)&&(H=U/Math.max($.width,$.height)),H<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let W=Math.floor(H*$.width),xt=Math.floor(H*$.height);d===void 0&&(d=_(W,xt));let nt=g?_(W,xt):d;return nt.width=W,nt.height=xt,nt.getContext("2d").drawImage(b,0,0,W,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+W+"x"+xt+")."),nt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function m(b){return b.generateMipmaps}function u(b){i.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(b,g,U,H,$=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let W=g;if(g===i.RED&&(U===i.FLOAT&&(W=i.R32F),U===i.HALF_FLOAT&&(W=i.R16F),U===i.UNSIGNED_BYTE&&(W=i.R8)),g===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(W=i.R8UI),U===i.UNSIGNED_SHORT&&(W=i.R16UI),U===i.UNSIGNED_INT&&(W=i.R32UI),U===i.BYTE&&(W=i.R8I),U===i.SHORT&&(W=i.R16I),U===i.INT&&(W=i.R32I)),g===i.RG&&(U===i.FLOAT&&(W=i.RG32F),U===i.HALF_FLOAT&&(W=i.RG16F),U===i.UNSIGNED_BYTE&&(W=i.RG8)),g===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(W=i.RG8UI),U===i.UNSIGNED_SHORT&&(W=i.RG16UI),U===i.UNSIGNED_INT&&(W=i.RG32UI),U===i.BYTE&&(W=i.RG8I),U===i.SHORT&&(W=i.RG16I),U===i.INT&&(W=i.RG32I)),g===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(W=i.RGB8UI),U===i.UNSIGNED_SHORT&&(W=i.RGB16UI),U===i.UNSIGNED_INT&&(W=i.RGB32UI),U===i.BYTE&&(W=i.RGB8I),U===i.SHORT&&(W=i.RGB16I),U===i.INT&&(W=i.RGB32I)),g===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),U===i.UNSIGNED_INT&&(W=i.RGBA32UI),U===i.BYTE&&(W=i.RGBA8I),U===i.SHORT&&(W=i.RGBA16I),U===i.INT&&(W=i.RGBA32I)),g===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),g===i.RGBA){let xt=$?Ki:Yt.getTransfer(H);U===i.FLOAT&&(W=i.RGBA32F),U===i.HALF_FLOAT&&(W=i.RGBA16F),U===i.UNSIGNED_BYTE&&(W=xt===te?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function S(b,g){let U;return b?g===null||g===Nn||g===Pi?U=i.DEPTH24_STENCIL8:g===Qe?U=i.DEPTH32F_STENCIL8:g===Ri&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Nn||g===Pi?U=i.DEPTH_COMPONENT24:g===Qe?U=i.DEPTH_COMPONENT32F:g===Ri&&(U=i.DEPTH_COMPONENT16),U}function C(b,g){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Re&&b.minFilter!==Ze?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function A(b){let g=b.target;g.removeEventListener("dispose",A),O(g),g.isVideoTexture&&h.delete(g)}function P(b){let g=b.target;g.removeEventListener("dispose",P),M(g)}function O(b){let g=n.get(b);if(g.__webglInit===void 0)return;let U=b.source,H=f.get(U);if(H){let $=H[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&v(b),Object.keys(H).length===0&&f.delete(U)}n.remove(b)}function v(b){let g=n.get(b);i.deleteTexture(g.__webglTexture);let U=b.source,H=f.get(U);delete H[g.__cacheKey],a.memory.textures--}function M(b){let g=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let $=0;$<g.__webglFramebuffer[H].length;$++)i.deleteFramebuffer(g.__webglFramebuffer[H][$]);else i.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)i.deleteFramebuffer(g.__webglFramebuffer[H]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let U=b.textures;for(let H=0,$=U.length;H<$;H++){let W=n.get(U[H]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(U[H])}n.remove(b)}let R=0;function F(){R=0}function z(){let b=R;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),R+=1,b}function G(b){let g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function Y(b,g){let U=n.get(b);if(b.isVideoTexture&&Tt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&U.__version!==b.version){let H=b.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(U,b,g);return}}else b.isExternalTexture&&(U.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+g)}function X(b,g){let U=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){q(U,b,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+g)}function K(b,g){let U=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){q(U,b,g);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+g)}function k(b,g){let U=n.get(b);if(b.version>0&&U.__version!==b.version){Z(U,b,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+g)}let tt={[ir]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[sr]:i.MIRRORED_REPEAT},dt={[Re]:i.NEAREST,[uc]:i.NEAREST_MIPMAP_NEAREST,[bs]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[qr]:i.LINEAR_MIPMAP_NEAREST,[Un]:i.LINEAR_MIPMAP_LINEAR},_t={[mc]:i.NEVER,[Mc]:i.ALWAYS,[gc]:i.LESS,[No]:i.LEQUAL,[_c]:i.EQUAL,[yc]:i.GEQUAL,[xc]:i.GREATER,[vc]:i.NOTEQUAL};function Lt(b,g){if(g.type===Qe&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ze||g.magFilter===qr||g.magFilter===bs||g.magFilter===Un||g.minFilter===Ze||g.minFilter===qr||g.minFilter===bs||g.minFilter===Un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,tt[g.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,tt[g.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,tt[g.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,dt[g.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,dt[g.minFilter]),g.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,_t[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Re||g.minFilter!==bs&&g.minFilter!==Un||g.type===Qe&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Wt(b,g){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",A));let H=g.source,$=f.get(H);$===void 0&&($={},f.set(H,$));let W=G(g);if(W!==b.__cacheKey){$[W]===void 0&&($[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),$[W].usedTimes++;let xt=$[b.__cacheKey];xt!==void 0&&($[b.__cacheKey].usedTimes--,xt.usedTimes===0&&v(g)),b.__cacheKey=W,b.__webglTexture=$[W].texture}return U}function Zt(b,g,U){return Math.floor(Math.floor(b/U)/g)}function Dt(b,g,U,H){let W=b.updateRanges;if(W.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,U,H,g.data);else{W.sort((Q,ft)=>Q.start-ft.start);let xt=0;for(let Q=1;Q<W.length;Q++){let ft=W[xt],Ct=W[Q],Mt=ft.start+ft.count,lt=Zt(Ct.start,g.width,4),kt=Zt(ft.start,g.width,4);Ct.start<=Mt+1&&lt===kt&&Zt(Ct.start+Ct.count-1,g.width,4)===lt?ft.count=Math.max(ft.count,Ct.start+Ct.count-ft.start):(++xt,W[xt]=Ct)}W.length=xt+1;let nt=i.getParameter(i.UNPACK_ROW_LENGTH),yt=i.getParameter(i.UNPACK_SKIP_PIXELS),bt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Q=0,ft=W.length;Q<ft;Q++){let Ct=W[Q],Mt=Math.floor(Ct.start/4),lt=Math.ceil(Ct.count/4),kt=Mt%g.width,L=Math.floor(Mt/g.width),it=lt,rt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,kt),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),e.texSubImage2D(i.TEXTURE_2D,0,kt,L,it,rt,U,H,g.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,nt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,yt),i.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function q(b,g,U){let H=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=i.TEXTURE_3D);let $=Wt(b,g),W=g.source;e.bindTexture(H,b.__webglTexture,i.TEXTURE0+U);let xt=n.get(W);if(W.version!==xt.__version||$===!0){e.activeTexture(i.TEXTURE0+U);let nt=Yt.getPrimaries(Yt.workingColorSpace),yt=g.colorSpace===Mn?null:Yt.getPrimaries(g.colorSpace),bt=g.colorSpace===Mn||nt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Q=y(g.image,!1,s.maxTextureSize);Q=$t(g,Q);let ft=r.convert(g.format,g.colorSpace),Ct=r.convert(g.type),Mt=E(g.internalFormat,ft,Ct,g.colorSpace,g.isVideoTexture);Lt(H,g);let lt,kt=g.mipmaps,L=g.isVideoTexture!==!0,it=xt.__version===void 0||$===!0,rt=W.dataReady,vt=C(g,Q);if(g.isDepthTexture)Mt=S(g.format===Li,g.type),it&&(L?e.texStorage2D(i.TEXTURE_2D,1,Mt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Mt,Q.width,Q.height,0,ft,Ct,null));else if(g.isDataTexture)if(kt.length>0){L&&it&&e.texStorage2D(i.TEXTURE_2D,vt,Mt,kt[0].width,kt[0].height);for(let j=0,J=kt.length;j<J;j++)lt=kt[j],L?rt&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,lt.width,lt.height,ft,Ct,lt.data):e.texImage2D(i.TEXTURE_2D,j,Mt,lt.width,lt.height,0,ft,Ct,lt.data);g.generateMipmaps=!1}else L?(it&&e.texStorage2D(i.TEXTURE_2D,vt,Mt,Q.width,Q.height),rt&&Dt(g,Q,ft,Ct)):e.texImage2D(i.TEXTURE_2D,0,Mt,Q.width,Q.height,0,ft,Ct,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){L&&it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Mt,kt[0].width,kt[0].height,Q.depth);for(let j=0,J=kt.length;j<J;j++)if(lt=kt[j],g.format!==Ge)if(ft!==null)if(L){if(rt)if(g.layerUpdates.size>0){let Et=Go(lt.width,lt.height,g.format,g.type);for(let Bt of g.layerUpdates){let re=lt.data.subarray(Bt*Et/lt.data.BYTES_PER_ELEMENT,(Bt+1)*Et/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Bt,lt.width,lt.height,1,ft,re)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,lt.width,lt.height,Q.depth,ft,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Mt,lt.width,lt.height,Q.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?rt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,lt.width,lt.height,Q.depth,ft,Ct,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Mt,lt.width,lt.height,Q.depth,0,ft,Ct,lt.data)}else{L&&it&&e.texStorage2D(i.TEXTURE_2D,vt,Mt,kt[0].width,kt[0].height);for(let j=0,J=kt.length;j<J;j++)lt=kt[j],g.format!==Ge?ft!==null?L?rt&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,lt.width,lt.height,ft,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Mt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?rt&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,lt.width,lt.height,ft,Ct,lt.data):e.texImage2D(i.TEXTURE_2D,j,Mt,lt.width,lt.height,0,ft,Ct,lt.data)}else if(g.isDataArrayTexture)if(L){if(it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Mt,Q.width,Q.height,Q.depth),rt)if(g.layerUpdates.size>0){let j=Go(Q.width,Q.height,g.format,g.type);for(let J of g.layerUpdates){let Et=Q.data.subarray(J*j/Q.data.BYTES_PER_ELEMENT,(J+1)*j/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,Q.width,Q.height,1,ft,Ct,Et)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,Ct,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,Q.width,Q.height,Q.depth,0,ft,Ct,Q.data);else if(g.isData3DTexture)L?(it&&e.texStorage3D(i.TEXTURE_3D,vt,Mt,Q.width,Q.height,Q.depth),rt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,Ct,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,Q.width,Q.height,Q.depth,0,ft,Ct,Q.data);else if(g.isFramebufferTexture){if(it)if(L)e.texStorage2D(i.TEXTURE_2D,vt,Mt,Q.width,Q.height);else{let j=Q.width,J=Q.height;for(let Et=0;Et<vt;Et++)e.texImage2D(i.TEXTURE_2D,Et,Mt,j,J,0,ft,Ct,null),j>>=1,J>>=1}}else if(kt.length>0){if(L&&it){let j=Rt(kt[0]);e.texStorage2D(i.TEXTURE_2D,vt,Mt,j.width,j.height)}for(let j=0,J=kt.length;j<J;j++)lt=kt[j],L?rt&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,ft,Ct,lt):e.texImage2D(i.TEXTURE_2D,j,Mt,ft,Ct,lt);g.generateMipmaps=!1}else if(L){if(it){let j=Rt(Q);e.texStorage2D(i.TEXTURE_2D,vt,Mt,j.width,j.height)}rt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Ct,Q)}else e.texImage2D(i.TEXTURE_2D,0,Mt,ft,Ct,Q);m(g)&&u(H),xt.__version=W.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function Z(b,g,U){if(g.image.length!==6)return;let H=Wt(b,g),$=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+U);let W=n.get($);if($.version!==W.__version||H===!0){e.activeTexture(i.TEXTURE0+U);let xt=Yt.getPrimaries(Yt.workingColorSpace),nt=g.colorSpace===Mn?null:Yt.getPrimaries(g.colorSpace),yt=g.colorSpace===Mn||xt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let bt=g.isCompressedTexture||g.image[0].isCompressedTexture,Q=g.image[0]&&g.image[0].isDataTexture,ft=[];for(let J=0;J<6;J++)!bt&&!Q?ft[J]=y(g.image[J],!0,s.maxCubemapSize):ft[J]=Q?g.image[J].image:g.image[J],ft[J]=$t(g,ft[J]);let Ct=ft[0],Mt=r.convert(g.format,g.colorSpace),lt=r.convert(g.type),kt=E(g.internalFormat,Mt,lt,g.colorSpace),L=g.isVideoTexture!==!0,it=W.__version===void 0||H===!0,rt=$.dataReady,vt=C(g,Ct);Lt(i.TEXTURE_CUBE_MAP,g);let j;if(bt){L&&it&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,kt,Ct.width,Ct.height);for(let J=0;J<6;J++){j=ft[J].mipmaps;for(let Et=0;Et<j.length;Et++){let Bt=j[Et];g.format!==Ge?Mt!==null?L?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et,0,0,Bt.width,Bt.height,Mt,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et,kt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et,0,0,Bt.width,Bt.height,Mt,lt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et,kt,Bt.width,Bt.height,0,Mt,lt,Bt.data)}}}else{if(j=g.mipmaps,L&&it){j.length>0&&vt++;let J=Rt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,kt,J.width,J.height)}for(let J=0;J<6;J++)if(Q){L?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ft[J].width,ft[J].height,Mt,lt,ft[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,ft[J].width,ft[J].height,0,Mt,lt,ft[J].data);for(let Et=0;Et<j.length;Et++){let re=j[Et].image[J].image;L?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et+1,0,0,re.width,re.height,Mt,lt,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et+1,kt,re.width,re.height,0,Mt,lt,re.data)}}else{L?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Mt,lt,ft[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,Mt,lt,ft[J]);for(let Et=0;Et<j.length;Et++){let Bt=j[Et];L?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et+1,0,0,Mt,lt,Bt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et+1,kt,Mt,lt,Bt.image[J])}}}m(g)&&u(i.TEXTURE_CUBE_MAP),W.__version=$.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function pt(b,g,U,H,$,W){let xt=r.convert(U.format,U.colorSpace),nt=r.convert(U.type),yt=E(U.internalFormat,xt,nt,U.colorSpace),bt=n.get(g),Q=n.get(U);if(Q.__renderTarget=g,!bt.__hasExternalTextures){let ft=Math.max(1,g.width>>W),Ct=Math.max(1,g.height>>W);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,W,yt,ft,Ct,g.depth,0,xt,nt,null):e.texImage2D($,W,yt,ft,Ct,0,xt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),ct(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,$,Q.__webglTexture,0,Vt(g)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,$,Q.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(b,g,U){if(i.bindRenderbuffer(i.RENDERBUFFER,b),g.depthBuffer){let H=g.depthTexture,$=H&&H.isDepthTexture?H.type:null,W=S(g.stencilBuffer,$),xt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=Vt(g);ct(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,W,g.width,g.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,W,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,W,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,b)}else{let H=g.textures;for(let $=0;$<H.length;$++){let W=H[$],xt=r.convert(W.format,W.colorSpace),nt=r.convert(W.type),yt=E(W.internalFormat,xt,nt,W.colorSpace),bt=Vt(g);U&&ct(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,yt,g.width,g.height):ct(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,yt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,yt,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function st(b,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let H=n.get(g.depthTexture);H.__renderTarget=g,(!H.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y(g.depthTexture,0);let $=H.__webglTexture,W=Vt(g);if(g.depthTexture.format===bi)ct(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(g.depthTexture.format===Li)ct(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Nt(b){let g=n.get(b),U=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){let H=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){let $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",$)};H.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=H}if(b.depthTexture&&!g.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");let H=b.texture.mipmaps;H&&H.length>0?st(g.__webglFramebuffer[0],b):st(g.__webglFramebuffer,b)}else if(U){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=i.createRenderbuffer(),ot(g.__webglDepthbuffer[H],b,!1);else{let $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,W)}}else{let H=b.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),ot(g.__webglDepthbuffer,b,!1);else{let $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,W)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function he(b,g,U){let H=n.get(b);g!==void 0&&pt(H.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Nt(b)}function w(b){let g=b.texture,U=n.get(b),H=n.get(g);b.addEventListener("dispose",P);let $=b.textures,W=b.isWebGLCubeRenderTarget===!0,xt=$.length>1;if(xt||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=g.version,a.memory.textures++),W){U.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[nt]=[];for(let yt=0;yt<g.mipmaps.length;yt++)U.__webglFramebuffer[nt][yt]=i.createFramebuffer()}else U.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let nt=0;nt<g.mipmaps.length;nt++)U.__webglFramebuffer[nt]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(xt)for(let nt=0,yt=$.length;nt<yt;nt++){let bt=n.get($[nt]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&ct(b)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let nt=0;nt<$.length;nt++){let yt=$[nt];U.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[nt]);let bt=r.convert(yt.format,yt.colorSpace),Q=r.convert(yt.type),ft=E(yt.internalFormat,bt,Q,yt.colorSpace,b.isXRRenderTarget===!0),Ct=Vt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,ft,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,U.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(U.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,g);for(let nt=0;nt<6;nt++)if(g.mipmaps&&g.mipmaps.length>0)for(let yt=0;yt<g.mipmaps.length;yt++)pt(U.__webglFramebuffer[nt][yt],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt);else pt(U.__webglFramebuffer[nt],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);m(g)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let nt=0,yt=$.length;nt<yt;nt++){let bt=$[nt],Q=n.get(bt),ft=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ft=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Q.__webglTexture),Lt(ft,bt),pt(U.__webglFramebuffer,b,bt,i.COLOR_ATTACHMENT0+nt,ft,0),m(bt)&&u(ft)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(nt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,H.__webglTexture),Lt(nt,g),g.mipmaps&&g.mipmaps.length>0)for(let yt=0;yt<g.mipmaps.length;yt++)pt(U.__webglFramebuffer[yt],b,g,i.COLOR_ATTACHMENT0,nt,yt);else pt(U.__webglFramebuffer,b,g,i.COLOR_ATTACHMENT0,nt,0);m(g)&&u(nt),e.unbindTexture()}b.depthBuffer&&Nt(b)}function qt(b){let g=b.textures;for(let U=0,H=g.length;U<H;U++){let $=g[U];if(m($)){let W=T(b),xt=n.get($).__webglTexture;e.bindTexture(W,xt),u(W),e.unbindTexture()}}}let Ft=[],ht=[];function at(b){if(b.samples>0){if(ct(b)===!1){let g=b.textures,U=b.width,H=b.height,$=i.COLOR_BUFFER_BIT,W=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(b),nt=g.length>1;if(nt)for(let bt=0;bt<g.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);let yt=b.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let bt=0;bt<g.length;bt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[bt]);let Q=n.get(g[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,U,H,0,0,U,H,$,i.NEAREST),l===!0&&(Ft.length=0,ht.length=0,Ft.push(i.COLOR_ATTACHMENT0+bt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ft.push(W),ht.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ht)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let bt=0;bt<g.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[bt]);let Q=n.get(g[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Q,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let g=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Vt(b){return Math.min(s.maxSamples,b.samples)}function ct(b){let g=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Tt(b){let g=a.render.frame;h.get(b)!==g&&(h.set(b,g),b.update())}function $t(b,g){let U=b.colorSpace,H=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==qn&&U!==Mn&&(Yt.getTransfer(U)===te?(H!==Ge||$!==Ke)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),g}function Rt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=k,this.rebindTextures=he,this.setupRenderTarget=w,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=ct}function Em(i,t){function e(n,s=Mn){let r,a=Yt.getTransfer(s);if(n===Ke)return i.UNSIGNED_BYTE;if(n===Zr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Io)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Po)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Co)return i.BYTE;if(n===Ro)return i.SHORT;if(n===Ri)return i.UNSIGNED_SHORT;if(n===Yr)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===Qe)return i.FLOAT;if(n===Ii)return i.HALF_FLOAT;if(n===Lo)return i.ALPHA;if(n===Do)return i.RGB;if(n===Ge)return i.RGBA;if(n===bi)return i.DEPTH_COMPONENT;if(n===Li)return i.DEPTH_STENCIL;if(n===$r)return i.RED;if(n===Kr)return i.RED_INTEGER;if(n===Uo)return i.RG;if(n===Qr)return i.RG_INTEGER;if(n===jr)return i.RGBA_INTEGER;if(n===Es||n===Ts||n===ws||n===As)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Es)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Es)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===As)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ta||n===ea||n===na||n===ia)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sa||n===ra||n===aa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sa||n===ra)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===aa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===xa||n===va||n===ya)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===la)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ca)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ha)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ua)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===da)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ma)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ga)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_a)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===va)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ya)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ma||n===Sa||n===ba)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ma)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ea||n===Ta||n===wa||n===Aa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ea)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Aa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Tm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,nl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ds(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ne({vertexShader:Tm,fragmentShader:wm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new Zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},il=class extends gn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,_=null,y=typeof XRWebGLBinding<"u",m=new nl,u={},T=e.getContextAttributes(),E=null,S=null,C=[],A=[],P=new At,O=null,v=new _e;v.viewport=new jt;let M=new _e;M.viewport=new jt;let R=[v,M],F=new Dr,z=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=C[q];return Z===void 0&&(Z=new wi,C[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=C[q];return Z===void 0&&(Z=new wi,C[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=C[q];return Z===void 0&&(Z=new wi,C[q]=Z),Z.getHandSpace()};function Y(q){let Z=A.indexOf(q.inputSource);if(Z===-1)return;let pt=C[Z];pt!==void 0&&(pt.update(q.inputSource,q.frame,c||a),pt.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",K);for(let q=0;q<C.length;q++){let Z=A[q];Z!==null&&(A[q]=null,C[q].disconnect(Z))}z=null,G=null,m.reset();for(let q in u)delete u[q];t.setRenderTarget(E),p=null,f=null,d=null,s=null,S=null,Dt.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",X),s.addEventListener("inputsourceschange",K),T.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,ot=null,st=null;T.depth&&(st=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=T.stencil?Li:bi,ot=T.stencil?Pi:Nn);let Nt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Nt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new en(f.textureWidth,f.textureHeight,{format:Ge,type:Ke,depthTexture:new us(f.textureWidth,f.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let pt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new en(p.framebufferWidth,p.framebufferHeight,{format:Ge,type:Ke,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Dt.setContext(s),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(q){for(let Z=0;Z<q.removed.length;Z++){let pt=q.removed[Z],ot=A.indexOf(pt);ot>=0&&(A[ot]=null,C[ot].disconnect(pt))}for(let Z=0;Z<q.added.length;Z++){let pt=q.added[Z],ot=A.indexOf(pt);if(ot===-1){for(let Nt=0;Nt<C.length;Nt++)if(Nt>=A.length){A.push(pt),ot=Nt;break}else if(A[Nt]===null){A[Nt]=pt,ot=Nt;break}if(ot===-1)break}let st=C[ot];st&&st.connect(pt)}}let k=new I,tt=new I;function dt(q,Z,pt){k.setFromMatrixPosition(Z.matrixWorld),tt.setFromMatrixPosition(pt.matrixWorld);let ot=k.distanceTo(tt),st=Z.projectionMatrix.elements,Nt=pt.projectionMatrix.elements,he=st[14]/(st[10]-1),w=st[14]/(st[10]+1),qt=(st[9]+1)/st[5],Ft=(st[9]-1)/st[5],ht=(st[8]-1)/st[0],at=(Nt[8]+1)/Nt[0],Vt=he*ht,ct=he*at,Tt=ot/(-ht+at),$t=Tt*-ht;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX($t),q.translateZ(Tt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),st[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let Rt=he+Tt,b=w+Tt,g=Vt-$t,U=ct+(ot-$t),H=qt*w/b*Rt,$=Ft*w/b*Rt;q.projectionMatrix.makePerspective(g,U,H,$,Rt,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function _t(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Z=q.near,pt=q.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),F.near=M.near=v.near=Z,F.far=M.far=v.far=pt,(z!==F.near||G!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,G=F.far),F.layers.mask=q.layers.mask|6,v.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;let ot=q.parent,st=F.cameras;_t(F,ot);for(let Nt=0;Nt<st.length;Nt++)_t(st[Nt],ot);st.length===2?dt(F,v,M):F.projectionMatrix.copy(v.projectionMatrix),Lt(q,F,ot)};function Lt(q,Z,pt){pt===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(pt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ar*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(q){return u[q]};let Wt=null;function Zt(q,Z){if(h=Z.getViewerPose(c||a),_=Z,h!==null){let pt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let ot=!1;pt.length!==F.cameras.length&&(F.cameras.length=0,ot=!0);for(let w=0;w<pt.length;w++){let qt=pt[w],Ft=null;if(p!==null)Ft=p.getViewport(qt);else{let at=d.getViewSubImage(f,qt);Ft=at.viewport,w===0&&(t.setRenderTargetTextures(S,at.colorTexture,at.depthStencilTexture),t.setRenderTarget(S))}let ht=R[w];ht===void 0&&(ht=new _e,ht.layers.enable(w),ht.viewport=new jt,R[w]=ht),ht.matrix.fromArray(qt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(qt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),w===0&&(F.matrix.copy(ht.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ot===!0&&F.cameras.push(ht)}let st=s.enabledFeatures;if(st&&st.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let w=d.getDepthInformation(pt[0]);w&&w.isValid&&w.texture&&m.init(w,s.renderState)}if(st&&st.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let w=0;w<pt.length;w++){let qt=pt[w].camera;if(qt){let Ft=u[qt];Ft||(Ft=new ds,u[qt]=Ft);let ht=d.getCameraImage(qt);Ft.sourceTexture=ht}}}}for(let pt=0;pt<C.length;pt++){let ot=A[pt],st=C[pt];ot!==null&&st!==void 0&&st.update(ot,Z,c||a)}Wt&&Wt(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}let Dt=new $c;Dt.setAnimationLoop(Zt),this.setAnimationLoop=function(q){Wt=q},this.dispose=function(){}}},ri=new ke,Am=new ie;function Cm(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,zo(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,T,E,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,S)):u.isMeshMatcapMaterial?(r(m,u),_(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),y(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,T,E):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===ve&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===ve&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let T=t.get(u),E=T.envMap,S=T.envMapRotation;E&&(m.envMap.value=E,ri.copy(S),ri.x*=-1,ri.y*=-1,ri.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),m.envMapRotation.value.setFromMatrix4(Am.makeRotationFromEuler(ri)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,T,E){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*T,m.scale.value=E*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,T){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ve&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){let T=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rm(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){let S=E.program;n.uniformBlockBinding(T,S)}function c(T,E){let S=s[T.id];S===void 0&&(_(T),S=h(T),s[T.id]=S,T.addEventListener("dispose",m));let C=E.program;n.updateUBOMapping(T,C);let A=t.render.frame;r[T.id]!==A&&(f(T),r[T.id]=A)}function h(T){let E=d();T.__bindingPointIndex=E;let S=i.createBuffer(),C=T.__size,A=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let E=s[T.id],S=T.uniforms,C=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,P=S.length;A<P;A++){let O=Array.isArray(S[A])?S[A]:[S[A]];for(let v=0,M=O.length;v<M;v++){let R=O[v];if(p(R,A,v,C)===!0){let F=R.__offset,z=Array.isArray(R.value)?R.value:[R.value],G=0;for(let Y=0;Y<z.length;Y++){let X=z[Y],K=y(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,F+G,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,G),G+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,E,S,C){let A=T.value,P=E+"_"+S;if(C[P]===void 0)return typeof A=="number"||typeof A=="boolean"?C[P]=A:C[P]=A.clone(),!0;{let O=C[P];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return C[P]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function _(T){let E=T.uniforms,S=0,C=16;for(let P=0,O=E.length;P<O;P++){let v=Array.isArray(E[P])?E[P]:[E[P]];for(let M=0,R=v.length;M<R;M++){let F=v[M],z=Array.isArray(F.value)?F.value:[F.value];for(let G=0,Y=z.length;G<Y;G++){let X=z[G],K=y(X),k=S%C,tt=k%K.boundary,dt=k+tt;S+=tt,dt!==0&&C-dt<K.storage&&(S+=C-dt),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=K.storage}}}let A=S%C;return A>0&&(S+=C-A),T.__size=S,T.__cache={},this}function y(T){let E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){let E=T.target;E.removeEventListener("dispose",m);let S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function u(){for(let T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var La=class{constructor(t={}){let{canvas:e=Sc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let _=new Uint32Array(4),y=new Int32Array(4),m=null,u=null,T=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,C=!1;this._outputColorSpace=Ee;let A=0,P=0,O=null,v=-1,M=null,R=new jt,F=new jt,z=null,G=new Pt(0),Y=0,X=e.width,K=e.height,k=1,tt=null,dt=null,_t=new jt(0,0,X,K),Lt=new jt(0,0,X,K),Wt=!1,Zt=new Ai,Dt=!1,q=!1,Z=new ie,pt=new I,ot=new jt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Nt=!1;function he(){return O===null?k:1}let w=n;function qt(x,D){return e.getContext(x,D)}try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",j,!1),w===null){let D="webgl2";if(w=qt(D,x),w===null)throw qt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ft,ht,at,Vt,ct,Tt,$t,Rt,b,g,U,H,$,W,xt,nt,yt,bt,Q,ft,Ct,Mt,lt,kt;function L(){Ft=new Yf(w),Ft.init(),Mt=new Em(w,Ft),ht=new Vf(w,Ft,t,Mt),at=new Sm(w,Ft),ht.reversedDepthBuffer&&f&&at.buffers.depth.setReversed(!0),Vt=new $f(w),ct=new cm,Tt=new bm(w,Ft,at,ct,ht,Mt,Vt),$t=new Hf(S),Rt=new qf(S),b=new eu(w),lt=new Bf(w,b),g=new Zf(w,b,Vt,lt),U=new Qf(w,g,b,Vt),Q=new Kf(w,ht,Tt),nt=new kf(ct),H=new lm(S,$t,Rt,Ft,ht,lt,nt),$=new Cm(S,ct),W=new um,xt=new _m(Ft),bt=new Of(S,$t,Rt,at,U,p,l),yt=new ym(S,U,ht),kt=new Rm(w,Vt,ht,at),ft=new zf(w,Ft,Vt),Ct=new Jf(w,Ft,Vt),Vt.programs=H.programs,S.capabilities=ht,S.extensions=Ft,S.properties=ct,S.renderLists=W,S.shadowMap=yt,S.state=at,S.info=Vt}L();let it=new il(S,w);this.xr=it,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let x=Ft.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Ft.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(x){x!==void 0&&(k=x,this.setSize(X,K,!1))},this.getSize=function(x){return x.set(X,K)},this.setSize=function(x,D,B=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=x,K=D,e.width=Math.floor(x*k),e.height=Math.floor(D*k),B===!0&&(e.style.width=x+"px",e.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(X*k,K*k).floor()},this.setDrawingBufferSize=function(x,D,B){X=x,K=D,k=B,e.width=Math.floor(x*B),e.height=Math.floor(D*B),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(R)},this.getViewport=function(x){return x.copy(_t)},this.setViewport=function(x,D,B,V){x.isVector4?_t.set(x.x,x.y,x.z,x.w):_t.set(x,D,B,V),at.viewport(R.copy(_t).multiplyScalar(k).round())},this.getScissor=function(x){return x.copy(Lt)},this.setScissor=function(x,D,B,V){x.isVector4?Lt.set(x.x,x.y,x.z,x.w):Lt.set(x,D,B,V),at.scissor(F.copy(Lt).multiplyScalar(k).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(x){at.setScissorTest(Wt=x)},this.setOpaqueSort=function(x){tt=x},this.setTransparentSort=function(x){dt=x},this.getClearColor=function(x){return x.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,B=!0){let V=0;if(x){let N=!1;if(O!==null){let et=O.texture.format;N=et===jr||et===Qr||et===Kr}if(N){let et=O.texture.type,mt=et===Ke||et===Nn||et===Ri||et===Pi||et===Zr||et===Jr,St=bt.getClearColor(),gt=bt.getClearAlpha(),Ut=St.r,Ot=St.g,wt=St.b;mt?(_[0]=Ut,_[1]=Ot,_[2]=wt,_[3]=gt,w.clearBufferuiv(w.COLOR,0,_)):(y[0]=Ut,y[1]=Ot,y[2]=wt,y[3]=gt,w.clearBufferiv(w.COLOR,0,y))}else V|=w.COLOR_BUFFER_BIT}D&&(V|=w.DEPTH_BUFFER_BIT),B&&(V|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",j,!1),bt.dispose(),W.dispose(),xt.dispose(),ct.dispose(),$t.dispose(),Rt.dispose(),U.dispose(),lt.dispose(),kt.dispose(),H.dispose(),it.dispose(),it.removeEventListener("sessionstart",je),it.removeEventListener("sessionend",al),On.stop()};function rt(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let x=Vt.autoReset,D=yt.enabled,B=yt.autoUpdate,V=yt.needsUpdate,N=yt.type;L(),Vt.autoReset=x,yt.enabled=D,yt.autoUpdate=B,yt.needsUpdate=V,yt.type=N}function j(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function J(x){let D=x.target;D.removeEventListener("dispose",J),Et(D)}function Et(x){Bt(x),ct.remove(x)}function Bt(x){let D=ct.get(x).programs;D!==void 0&&(D.forEach(function(B){H.releaseProgram(B)}),x.isShaderMaterial&&H.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,B,V,N,et){D===null&&(D=st);let mt=N.isMesh&&N.matrixWorld.determinant()<0,St=oh(x,D,B,V,N);at.setMaterial(V,mt);let gt=B.index,Ut=1;if(V.wireframe===!0){if(gt=g.getWireframeAttribute(B),gt===void 0)return;Ut=2}let Ot=B.drawRange,wt=B.attributes.position,Xt=Ot.start*Ut,ee=(Ot.start+Ot.count)*Ut;et!==null&&(Xt=Math.max(Xt,et.start*Ut),ee=Math.min(ee,(et.start+et.count)*Ut)),gt!==null?(Xt=Math.max(Xt,0),ee=Math.min(ee,gt.count)):wt!=null&&(Xt=Math.max(Xt,0),ee=Math.min(ee,wt.count));let ue=ee-Xt;if(ue<0||ue===1/0)return;lt.setup(N,V,St,B,gt);let ae,ne=ft;if(gt!==null&&(ae=b.get(gt),ne=Ct,ne.setIndex(ae)),N.isMesh)V.wireframe===!0?(at.setLineWidth(V.wireframeLinewidth*he()),ne.setMode(w.LINES)):ne.setMode(w.TRIANGLES);else if(N.isLine){let It=V.linewidth;It===void 0&&(It=1),at.setLineWidth(It*he()),N.isLineSegments?ne.setMode(w.LINES):N.isLineLoop?ne.setMode(w.LINE_LOOP):ne.setMode(w.LINE_STRIP)}else N.isPoints?ne.setMode(w.POINTS):N.isSprite&&ne.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ei("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))ne.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let It=N._multiDrawStarts,le=N._multiDrawCounts,Jt=N._multiDrawCount,Pe=gt?b.get(gt).bytesPerElement:1,li=ct.get(V).currentProgram.getUniforms();for(let Le=0;Le<Jt;Le++)li.setValue(w,"_gl_DrawID",Le),ne.render(It[Le]/Pe,le[Le])}else if(N.isInstancedMesh)ne.renderInstances(Xt,ue,N.count);else if(B.isInstancedBufferGeometry){let It=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,le=Math.min(B.instanceCount,It);ne.renderInstances(Xt,ue,le)}else ne.render(Xt,ue)};function re(x,D,B){x.transparent===!0&&x.side===an&&x.forceSinglePass===!1?(x.side=ve,x.needsUpdate=!0,Ps(x,D,B),x.side=mn,x.needsUpdate=!0,Ps(x,D,B),x.side=an):Ps(x,D,B)}this.compile=function(x,D,B=null){B===null&&(B=x),u=xt.get(B),u.init(D),E.push(u),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),x!==B&&x.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();let V=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let et=N.material;if(et)if(Array.isArray(et))for(let mt=0;mt<et.length;mt++){let St=et[mt];re(St,B,N),V.add(St)}else re(et,B,N),V.add(et)}),u=E.pop(),V},this.compileAsync=function(x,D,B=null){let V=this.compile(x,D,B);return new Promise(N=>{function et(){if(V.forEach(function(mt){ct.get(mt).currentProgram.isReady()&&V.delete(mt)}),V.size===0){N(x);return}setTimeout(et,10)}Ft.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Qt=null;function ln(x){Qt&&Qt(x)}function je(){On.stop()}function al(){On.start()}let On=new $c;On.setAnimationLoop(ln),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(x){Qt=x,it.setAnimationLoop(x),x===null?On.stop():On.start()},it.addEventListener("sessionstart",je),it.addEventListener("sessionend",al),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(D),D=it.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,D,O),u=xt.get(x,E.length),u.init(D),E.push(u),Z.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Zt.setFromProjectionMatrix(Z,Ye,D.reversedDepth),q=this.localClippingEnabled,Dt=nt.init(this.clippingPlanes,q),m=W.get(x,T.length),m.init(),T.push(m),it.enabled===!0&&it.isPresenting===!0){let et=S.xr.getDepthSensingMesh();et!==null&&Oa(et,D,-1/0,S.sortObjects)}Oa(x,D,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(tt,dt),Nt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Nt&&bt.addToRenderList(m,x),this.info.render.frame++,Dt===!0&&nt.beginShadows();let B=u.state.shadowsArray;yt.render(B,x,D),Dt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,N=m.transmissive;if(u.setupLights(),D.isArrayCamera){let et=D.cameras;if(N.length>0)for(let mt=0,St=et.length;mt<St;mt++){let gt=et[mt];ll(V,N,x,gt)}Nt&&bt.render(x);for(let mt=0,St=et.length;mt<St;mt++){let gt=et[mt];ol(m,x,gt,gt.viewport)}}else N.length>0&&ll(V,N,x,D),Nt&&bt.render(x),ol(m,x,D);O!==null&&P===0&&(Tt.updateMultisampleRenderTarget(O),Tt.updateRenderTargetMipmap(O)),x.isScene===!0&&x.onAfterRender(S,x,D),lt.resetDefaultState(),v=-1,M=null,E.pop(),E.length>0?(u=E[E.length-1],Dt===!0&&nt.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Oa(x,D,B,V){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)u.pushLight(x),x.castShadow&&u.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Zt.intersectsSprite(x)){V&&ot.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Z);let mt=U.update(x),St=x.material;St.visible&&m.push(x,mt,St,B,ot.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Zt.intersectsObject(x))){let mt=U.update(x),St=x.material;if(V&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),ot.copy(x.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),ot.copy(mt.boundingSphere.center)),ot.applyMatrix4(x.matrixWorld).applyMatrix4(Z)),Array.isArray(St)){let gt=mt.groups;for(let Ut=0,Ot=gt.length;Ut<Ot;Ut++){let wt=gt[Ut],Xt=St[wt.materialIndex];Xt&&Xt.visible&&m.push(x,mt,Xt,B,ot.z,wt)}}else St.visible&&m.push(x,mt,St,B,ot.z,null)}}let et=x.children;for(let mt=0,St=et.length;mt<St;mt++)Oa(et[mt],D,B,V)}function ol(x,D,B,V){let N=x.opaque,et=x.transmissive,mt=x.transparent;u.setupLightsView(B),Dt===!0&&nt.setGlobalState(S.clippingPlanes,B),V&&at.viewport(R.copy(V)),N.length>0&&Is(N,D,B),et.length>0&&Is(et,D,B),mt.length>0&&Is(mt,D,B),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function ll(x,D,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[V.id]===void 0&&(u.state.transmissionRenderTarget[V.id]=new en(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?Ii:Ke,minFilter:Un,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));let et=u.state.transmissionRenderTarget[V.id],mt=V.viewport||R;et.setSize(mt.z*S.transmissionResolutionScale,mt.w*S.transmissionResolutionScale);let St=S.getRenderTarget(),gt=S.getActiveCubeFace(),Ut=S.getActiveMipmapLevel();S.setRenderTarget(et),S.getClearColor(G),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),Nt&&bt.render(B);let Ot=S.toneMapping;S.toneMapping=yn;let wt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),u.setupLightsView(V),Dt===!0&&nt.setGlobalState(S.clippingPlanes,V),Is(x,B,V),Tt.updateMultisampleRenderTarget(et),Tt.updateRenderTargetMipmap(et),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let ee=0,ue=D.length;ee<ue;ee++){let ae=D[ee],ne=ae.object,It=ae.geometry,le=ae.material,Jt=ae.group;if(le.side===an&&ne.layers.test(V.layers)){let Pe=le.side;le.side=ve,le.needsUpdate=!0,cl(ne,B,V,It,le,Jt),le.side=Pe,le.needsUpdate=!0,Xt=!0}}Xt===!0&&(Tt.updateMultisampleRenderTarget(et),Tt.updateRenderTargetMipmap(et))}S.setRenderTarget(St,gt,Ut),S.setClearColor(G,Y),wt!==void 0&&(V.viewport=wt),S.toneMapping=Ot}function Is(x,D,B){let V=D.isScene===!0?D.overrideMaterial:null;for(let N=0,et=x.length;N<et;N++){let mt=x[N],St=mt.object,gt=mt.geometry,Ut=mt.group,Ot=mt.material;Ot.allowOverride===!0&&V!==null&&(Ot=V),St.layers.test(B.layers)&&cl(St,D,B,gt,Ot,Ut)}}function cl(x,D,B,V,N,et){x.onBeforeRender(S,D,B,V,N,et),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(S,D,B,V,x,et),N.transparent===!0&&N.side===an&&N.forceSinglePass===!1?(N.side=ve,N.needsUpdate=!0,S.renderBufferDirect(B,D,V,N,x,et),N.side=mn,N.needsUpdate=!0,S.renderBufferDirect(B,D,V,N,x,et),N.side=an):S.renderBufferDirect(B,D,V,N,x,et),x.onAfterRender(S,D,B,V,N,et)}function Ps(x,D,B){D.isScene!==!0&&(D=st);let V=ct.get(x),N=u.state.lights,et=u.state.shadowsArray,mt=N.state.version,St=H.getParameters(x,N.state,et,D,B),gt=H.getProgramCacheKey(St),Ut=V.programs;V.environment=x.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(x.isMeshStandardMaterial?Rt:$t).get(x.envMap||V.environment),V.envMapRotation=V.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Ut===void 0&&(x.addEventListener("dispose",J),Ut=new Map,V.programs=Ut);let Ot=Ut.get(gt);if(Ot!==void 0){if(V.currentProgram===Ot&&V.lightsStateVersion===mt)return ul(x,St),Ot}else St.uniforms=H.getUniforms(x),x.onBeforeCompile(St,S),Ot=H.acquireProgram(St,gt),Ut.set(gt,Ot),V.uniforms=St.uniforms;let wt=V.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(wt.clippingPlanes=nt.uniform),ul(x,St),V.needsLights=ch(x),V.lightsStateVersion=mt,V.needsLights&&(wt.ambientLightColor.value=N.state.ambient,wt.lightProbe.value=N.state.probe,wt.directionalLights.value=N.state.directional,wt.directionalLightShadows.value=N.state.directionalShadow,wt.spotLights.value=N.state.spot,wt.spotLightShadows.value=N.state.spotShadow,wt.rectAreaLights.value=N.state.rectArea,wt.ltc_1.value=N.state.rectAreaLTC1,wt.ltc_2.value=N.state.rectAreaLTC2,wt.pointLights.value=N.state.point,wt.pointLightShadows.value=N.state.pointShadow,wt.hemisphereLights.value=N.state.hemi,wt.directionalShadowMap.value=N.state.directionalShadowMap,wt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,wt.spotShadowMap.value=N.state.spotShadowMap,wt.spotLightMatrix.value=N.state.spotLightMatrix,wt.spotLightMap.value=N.state.spotLightMap,wt.pointShadowMap.value=N.state.pointShadowMap,wt.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Ot,V.uniformsList=null,Ot}function hl(x){if(x.uniformsList===null){let D=x.currentProgram.getUniforms();x.uniformsList=Ni.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function ul(x,D){let B=ct.get(x);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function oh(x,D,B,V,N){D.isScene!==!0&&(D=st),Tt.resetTextureUnits();let et=D.fog,mt=V.isMeshStandardMaterial?D.environment:null,St=O===null?S.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:qn,gt=(V.isMeshStandardMaterial?Rt:$t).get(V.envMap||mt),Ut=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ot=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),wt=!!B.morphAttributes.position,Xt=!!B.morphAttributes.normal,ee=!!B.morphAttributes.color,ue=yn;V.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ue=S.toneMapping);let ae=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ne=ae!==void 0?ae.length:0,It=ct.get(V),le=u.state.lights;if(Dt===!0&&(q===!0||x!==M)){let be=x===M&&V.id===v;nt.setState(V,x,be)}let Jt=!1;V.version===It.__version?(It.needsLights&&It.lightsStateVersion!==le.state.version||It.outputColorSpace!==St||N.isBatchedMesh&&It.batching===!1||!N.isBatchedMesh&&It.batching===!0||N.isBatchedMesh&&It.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&It.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&It.instancing===!1||!N.isInstancedMesh&&It.instancing===!0||N.isSkinnedMesh&&It.skinning===!1||!N.isSkinnedMesh&&It.skinning===!0||N.isInstancedMesh&&It.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&It.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&It.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&It.instancingMorph===!1&&N.morphTexture!==null||It.envMap!==gt||V.fog===!0&&It.fog!==et||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==nt.numPlanes||It.numIntersection!==nt.numIntersection)||It.vertexAlphas!==Ut||It.vertexTangents!==Ot||It.morphTargets!==wt||It.morphNormals!==Xt||It.morphColors!==ee||It.toneMapping!==ue||It.morphTargetsCount!==ne)&&(Jt=!0):(Jt=!0,It.__version=V.version);let Pe=It.currentProgram;Jt===!0&&(Pe=Ps(V,D,N));let li=!1,Le=!1,zi=!1,ce=Pe.getUniforms(),Be=It.uniforms;if(at.useProgram(Pe.program)&&(li=!0,Le=!0,zi=!0),V.id!==v&&(v=V.id,Le=!0),li||M!==x){at.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ce.setValue(w,"projectionMatrix",x.projectionMatrix),ce.setValue(w,"viewMatrix",x.matrixWorldInverse);let we=ce.map.cameraPosition;we!==void 0&&we.setValue(w,pt.setFromMatrixPosition(x.matrixWorld)),ht.logarithmicDepthBuffer&&ce.setValue(w,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ce.setValue(w,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,Le=!0,zi=!0)}if(N.isSkinnedMesh){ce.setOptional(w,N,"bindMatrix"),ce.setOptional(w,N,"bindMatrixInverse");let be=N.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),ce.setValue(w,"boneTexture",be.boneTexture,Tt))}N.isBatchedMesh&&(ce.setOptional(w,N,"batchingTexture"),ce.setValue(w,"batchingTexture",N._matricesTexture,Tt),ce.setOptional(w,N,"batchingIdTexture"),ce.setValue(w,"batchingIdTexture",N._indirectTexture,Tt),ce.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&ce.setValue(w,"batchingColorTexture",N._colorsTexture,Tt));let ze=B.morphAttributes;if((ze.position!==void 0||ze.normal!==void 0||ze.color!==void 0)&&Q.update(N,B,Pe),(Le||It.receiveShadow!==N.receiveShadow)&&(It.receiveShadow=N.receiveShadow,ce.setValue(w,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Be.envMap.value=gt,Be.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&D.environment!==null&&(Be.envMapIntensity.value=D.environmentIntensity),Le&&(ce.setValue(w,"toneMappingExposure",S.toneMappingExposure),It.needsLights&&lh(Be,zi),et&&V.fog===!0&&$.refreshFogUniforms(Be,et),$.refreshMaterialUniforms(Be,V,k,K,u.state.transmissionRenderTarget[x.id]),Ni.upload(w,hl(It),Be,Tt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ni.upload(w,hl(It),Be,Tt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ce.setValue(w,"center",N.center),ce.setValue(w,"modelViewMatrix",N.modelViewMatrix),ce.setValue(w,"normalMatrix",N.normalMatrix),ce.setValue(w,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let be=V.uniformsGroups;for(let we=0,Ba=be.length;we<Ba;we++){let Bn=be[we];kt.update(Bn,Pe),kt.bind(Bn,Pe)}}return Pe}function lh(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function ch(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(x,D,B){let V=ct.get(x);V.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),ct.get(x.texture).__webglTexture=D,ct.get(x.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:B,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){let B=ct.get(x);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0};let hh=w.createFramebuffer();this.setRenderTarget=function(x,D=0,B=0){O=x,A=D,P=B;let V=!0,N=null,et=!1,mt=!1;if(x){let gt=ct.get(x);if(gt.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(w.FRAMEBUFFER,null),V=!1;else if(gt.__webglFramebuffer===void 0)Tt.setupRenderTarget(x);else if(gt.__hasExternalTextures)Tt.rebindTextures(x,ct.get(x.texture).__webglTexture,ct.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let wt=x.depthTexture;if(gt.__boundDepthTexture!==wt){if(wt!==null&&ct.has(wt)&&(x.width!==wt.image.width||x.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Tt.setupDepthRenderbuffer(x)}}let Ut=x.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(mt=!0);let Ot=ct.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ot[D])?N=Ot[D][B]:N=Ot[D],et=!0):x.samples>0&&Tt.useMultisampledRTT(x)===!1?N=ct.get(x).__webglMultisampledFramebuffer:Array.isArray(Ot)?N=Ot[B]:N=Ot,R.copy(x.viewport),F.copy(x.scissor),z=x.scissorTest}else R.copy(_t).multiplyScalar(k).floor(),F.copy(Lt).multiplyScalar(k).floor(),z=Wt;if(B!==0&&(N=hh),at.bindFramebuffer(w.FRAMEBUFFER,N)&&V&&at.drawBuffers(x,N),at.viewport(R),at.scissor(F),at.setScissorTest(z),et){let gt=ct.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+D,gt.__webglTexture,B)}else if(mt){let gt=D;for(let Ut=0;Ut<x.textures.length;Ut++){let Ot=ct.get(x.textures[Ut]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Ut,Ot.__webglTexture,B,gt)}}else if(x!==null&&B!==0){let gt=ct.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,gt.__webglTexture,B)}v=-1},this.readRenderTargetPixels=function(x,D,B,V,N,et,mt,St=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=ct.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&mt!==void 0&&(gt=gt[mt]),gt){at.bindFramebuffer(w.FRAMEBUFFER,gt);try{let Ut=x.textures[St],Ot=Ut.format,wt=Ut.type;if(!ht.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-V&&B>=0&&B<=x.height-N&&(x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+St),w.readPixels(D,B,V,N,Mt.convert(Ot),Mt.convert(wt),et))}finally{let Ut=O!==null?ct.get(O).__webglFramebuffer:null;at.bindFramebuffer(w.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(x,D,B,V,N,et,mt,St=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=ct.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&mt!==void 0&&(gt=gt[mt]),gt)if(D>=0&&D<=x.width-V&&B>=0&&B<=x.height-N){at.bindFramebuffer(w.FRAMEBUFFER,gt);let Ut=x.textures[St],Ot=Ut.format,wt=Ut.type;if(!ht.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Xt),w.bufferData(w.PIXEL_PACK_BUFFER,et.byteLength,w.STREAM_READ),x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+St),w.readPixels(D,B,V,N,Mt.convert(Ot),Mt.convert(wt),0);let ee=O!==null?ct.get(O).__webglFramebuffer:null;at.bindFramebuffer(w.FRAMEBUFFER,ee);let ue=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await bc(w,ue,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Xt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,et),w.deleteBuffer(Xt),w.deleteSync(ue),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,B=0){let V=Math.pow(2,-B),N=Math.floor(x.image.width*V),et=Math.floor(x.image.height*V),mt=D!==null?D.x:0,St=D!==null?D.y:0;Tt.setTexture2D(x,0),w.copyTexSubImage2D(w.TEXTURE_2D,B,0,0,mt,St,N,et),at.unbindTexture()};let uh=w.createFramebuffer(),dh=w.createFramebuffer();this.copyTextureToTexture=function(x,D,B=null,V=null,N=0,et=null){et===null&&(N!==0?(Ei("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=N,N=0):et=0);let mt,St,gt,Ut,Ot,wt,Xt,ee,ue,ae=x.isCompressedTexture?x.mipmaps[et]:x.image;if(B!==null)mt=B.max.x-B.min.x,St=B.max.y-B.min.y,gt=B.isBox3?B.max.z-B.min.z:1,Ut=B.min.x,Ot=B.min.y,wt=B.isBox3?B.min.z:0;else{let ze=Math.pow(2,-N);mt=Math.floor(ae.width*ze),St=Math.floor(ae.height*ze),x.isDataArrayTexture?gt=ae.depth:x.isData3DTexture?gt=Math.floor(ae.depth*ze):gt=1,Ut=0,Ot=0,wt=0}V!==null?(Xt=V.x,ee=V.y,ue=V.z):(Xt=0,ee=0,ue=0);let ne=Mt.convert(D.format),It=Mt.convert(D.type),le;D.isData3DTexture?(Tt.setTexture3D(D,0),le=w.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Tt.setTexture2DArray(D,0),le=w.TEXTURE_2D_ARRAY):(Tt.setTexture2D(D,0),le=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,D.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,D.unpackAlignment);let Jt=w.getParameter(w.UNPACK_ROW_LENGTH),Pe=w.getParameter(w.UNPACK_IMAGE_HEIGHT),li=w.getParameter(w.UNPACK_SKIP_PIXELS),Le=w.getParameter(w.UNPACK_SKIP_ROWS),zi=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ae.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ae.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ut),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ot),w.pixelStorei(w.UNPACK_SKIP_IMAGES,wt);let ce=x.isDataArrayTexture||x.isData3DTexture,Be=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){let ze=ct.get(x),be=ct.get(D),we=ct.get(ze.__renderTarget),Ba=ct.get(be.__renderTarget);at.bindFramebuffer(w.READ_FRAMEBUFFER,we.__webglFramebuffer),at.bindFramebuffer(w.DRAW_FRAMEBUFFER,Ba.__webglFramebuffer);for(let Bn=0;Bn<gt;Bn++)ce&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ct.get(x).__webglTexture,N,wt+Bn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ct.get(D).__webglTexture,et,ue+Bn)),w.blitFramebuffer(Ut,Ot,mt,St,Xt,ee,mt,St,w.DEPTH_BUFFER_BIT,w.NEAREST);at.bindFramebuffer(w.READ_FRAMEBUFFER,null),at.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||ct.has(x)){let ze=ct.get(x),be=ct.get(D);at.bindFramebuffer(w.READ_FRAMEBUFFER,uh),at.bindFramebuffer(w.DRAW_FRAMEBUFFER,dh);for(let we=0;we<gt;we++)ce?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ze.__webglTexture,N,wt+we):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,ze.__webglTexture,N),Be?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,be.__webglTexture,et,ue+we):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,be.__webglTexture,et),N!==0?w.blitFramebuffer(Ut,Ot,mt,St,Xt,ee,mt,St,w.COLOR_BUFFER_BIT,w.NEAREST):Be?w.copyTexSubImage3D(le,et,Xt,ee,ue+we,Ut,Ot,mt,St):w.copyTexSubImage2D(le,et,Xt,ee,Ut,Ot,mt,St);at.bindFramebuffer(w.READ_FRAMEBUFFER,null),at.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Be?x.isDataTexture||x.isData3DTexture?w.texSubImage3D(le,et,Xt,ee,ue,mt,St,gt,ne,It,ae.data):D.isCompressedArrayTexture?w.compressedTexSubImage3D(le,et,Xt,ee,ue,mt,St,gt,ne,ae.data):w.texSubImage3D(le,et,Xt,ee,ue,mt,St,gt,ne,It,ae):x.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,et,Xt,ee,mt,St,ne,It,ae.data):x.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,et,Xt,ee,ae.width,ae.height,ne,ae.data):w.texSubImage2D(w.TEXTURE_2D,et,Xt,ee,mt,St,ne,It,ae);w.pixelStorei(w.UNPACK_ROW_LENGTH,Jt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Pe),w.pixelStorei(w.UNPACK_SKIP_PIXELS,li),w.pixelStorei(w.UNPACK_SKIP_ROWS,Le),w.pixelStorei(w.UNPACK_SKIP_IMAGES,zi),et===0&&D.generateMipmaps&&w.generateMipmap(le),at.unbindTexture()},this.initRenderTarget=function(x){ct.get(x).__webglFramebuffer===void 0&&Tt.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Tt.setTextureCube(x,0):x.isData3DTexture?Tt.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Tt.setTexture2DArray(x,0):Tt.setTexture2D(x,0),at.unbindTexture()},this.resetState=function(){A=0,P=0,O=null,at.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ye}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};var Ua=class extends Yn{constructor(){super();let t=new Pn;t.deleteAttribute("uv");let e=new Jn({side:ve}),n=new Jn,s=new Qn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Kt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new cs(t,n,6),o=new fe;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Kt(t,Bi(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Kt(t,Bi(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Kt(t,Bi(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Kt(t,Bi(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new Kt(t,Bi(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new Kt(t,Bi(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Bi(i){return new _s({color:0,emissive:16777215,emissiveIntensity:i})}var Na=Math.PI*2,eh=new Pt("#316b70"),nh=new Pt("#bd7750"),Im=(i,t,e)=>i+(t-i)*e,Pm=i=>Math.max(0,Math.min(1,i)),rl=i=>(i=Pm(i),i*i*(3-2*i));function ih(){let i=new Te,t=new Te,e=new Te,n=[];i.add(t,e);function s(v,M=.32){let R=new sn({color:v,metalness:M,roughness:.36,clearcoat:.25,clearcoatRoughness:.32,envMapIntensity:.72});return R.onBeforeCompile=F=>{F.vertexShader=`varying vec3 vSculpturePosition;
`+F.vertexShader,F.vertexShader=F.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vSculpturePosition=position;`),F.fragmentShader=`varying vec3 vSculpturePosition;
`+F.fragmentShader,F.fragmentShader=F.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
    float castGrain=fract(sin(dot(floor(vSculpturePosition*340.0),vec3(12.9898,78.233,37.719)))*43758.5453);
    roughnessFactor=clamp(roughnessFactor+(castGrain-.5)*.085,.1,1.0);`)},n.push(R),R}let r=s(eh),a=s(nh,.56);function o(v,{width:M=.14,depth:R=.085,target:F=i,mat:z=r,twist:G=0,taper:Y=!1,closed:X=!1}={}){let K=new $e(v.map(ot=>new I(...ot)),X,"centripetal"),k=Math.min(440,Math.max(100,v.length*22)),tt=16,dt=[],_t=[],Lt=[],Wt=new I,Zt=new I,Dt=new I,q=new I;for(let ot=0;ot<=k;ot++){let st=ot/k;K.getPointAt(st,Wt),K.getTangentAt(st,Zt),Dt.crossVectors(Zt,new I(0,0,1)).normalize(),Dt.lengthSq()<.01&&Dt.set(1,0,0),q.crossVectors(Zt,Dt).normalize();let Nt=typeof G=="function"?G(st):G,he=Y?.08+.92*Math.pow(Math.sin(st*Math.PI),.4):1,w=(typeof M=="function"?M(st):M)*he;for(let qt=0;qt<tt;qt++){let Ft=qt/tt*Na,ht=Math.cos(Ft),at=Math.sin(Ft),Vt=Math.sign(ht)*Math.pow(Math.abs(ht),.48)*w,ct=(typeof R=="function"?R(st):R)*he,Tt=Math.sign(at)*Math.pow(Math.abs(at),.5)*ct,$t=Vt*Math.cos(Nt)-Tt*Math.sin(Nt),Rt=Vt*Math.sin(Nt)+Tt*Math.cos(Nt);if(dt.push(Wt.x+Dt.x*$t+q.x*Rt,Wt.y+Dt.y*$t+q.y*Rt,Wt.z+Dt.z*$t+q.z*Rt),_t.push(st,qt/tt),ot<k){let b=ot*tt+qt,g=ot*tt+(qt+1)%tt;Lt.push(b,g,b+tt,g,g+tt,b+tt)}}}if(!X)for(let ot=1;ot<tt-1;ot++){Lt.push(0,ot+1,ot);let st=k*tt;Lt.push(st,st+ot,st+ot+1)}let Z=new xe;if(Z.setAttribute("position",new se(dt,3)),Z.setAttribute("uv",new se(_t,2)),Z.setIndex(Lt),Z.computeVertexNormals(),Z.computeBoundingSphere(),X){let ot=Z.attributes.normal;for(let st=0;st<tt;st++){let Nt=k*tt+st;Dt.set(ot.getX(st)+ot.getX(Nt),ot.getY(st)+ot.getY(Nt),ot.getZ(st)+ot.getZ(Nt)).normalize(),ot.setXYZ(st,Dt.x,Dt.y,Dt.z),ot.setXYZ(Nt,Dt.x,Dt.y,Dt.z)}}let pt=new Kt(Z,z);return pt.castShadow=!0,pt.receiveShadow=!0,F.add(pt),n.push(Z),{mesh:pt,curve:K}}let l=new Ci(1,64,44),c=l.attributes.position;for(let v=0;v<c.count;v++){let M=c.getX(v),R=c.getY(v),F=c.getZ(v),z=1+.028*Math.sin(M*12+R*5)*Math.sin(F*11-R*7);c.setXYZ(v,M*1.01*z-.77,R*.77*z+1.37,F*.53*z-.08)}l.computeVertexNormals(),n.push(l);let h=new Kt(l,s("#23565e"));h.castShadow=!0,h.receiveShadow=!0,t.add(h),[[[-.92,.15],[-.85,.52],[-.63,.77],[-.31,.88],[.01,.85],[.12,.64],[.06,.39],[.18,.16],[.46,.05],[.68,-.17],[.65,-.41]],[[-.89,-.08],[-.64,.08],[-.28,.19],[-.18,.42],[-.33,.58],[-.54,.49],[-.66,.32]],[[-.87,-.24],[-.58,-.14],[-.22,-.19],[.13,-.37],[.16,-.6],[-.04,-.75],[-.34,-.69]],[[-.63,-.5],[-.36,-.37],[-.08,-.45],[-.1,-.59],[-.32,-.74],[-.53,-.68]],[[.12,.88],[.4,.76],[.43,.5],[.62,.39],[.75,.17],[.81,-.05],[.68,-.18],[.51,-.07],[.41,.15],[.26,.2],[.25,.02],[.38,-.2],[.44,-.49],[.27,-.67]],[[.45,.74],[.68,.62],[.86,.38],[.96,.11],[.89,-.18],[.79,-.38],[.62,-.55]],[[-.98,-.03],[-.96,-.33],[-.78,-.56],[-.59,-.7]]].forEach((v,M)=>{let R=v.map(([F,z],G)=>[F*1.03-.77,z*.83+1.37,Math.sqrt(Math.max(.03,1-F*F-z*z))*.51+.01-.1*Math.pow(1-Math.sin(G/(v.length-1)*Math.PI),4)]);o(R,{target:t,width:M===6?.115:.148,depth:.085,taper:!0,twist:F=>Math.sin(F*Na+M)*.16}),o(R.map(([F,z,G])=>[F,z,-G-.16]),{target:t,width:.14,depth:.085,taper:!0,twist:F=>-Math.sin(F*Na+M)*.16})});let f=[[-1,.72,.27],[-1.1,.37,.3],[-1.04,.07,.28],[-.8,-.12,.2],[-.44,-.19,.15],[-.06,-.15,.12],[.29,-.22,.16],[.51,-.45,.25],[.5,-.71,.28],[.4,-.96,.26],[.37,-1.13,.21]],p=s("#ffffff",.42);p.vertexColors=!0;let _=o(f,{width:v=>Im(.15,.19,rl(v)),depth:.078,mat:p,twist:v=>Math.sin(v*Math.PI)*.36}),y=[],m=new Pt;for(let v=0;v<_.mesh.geometry.attributes.position.count;v++){let M=_.mesh.geometry.attributes.uv.getX(v);m.copy(eh).lerp(nh,rl((M-.45)/.45)),y.push(m.r,m.g,m.b)}_.mesh.geometry.setAttribute("color",new se(y,3));let u=[[1.08,-2.09,.04],[.79,-1.78,.11],[.48,-1.46,.16],[.37,-1.13,.21],[.48,-.84,.27],[.69,-.75,.29],[.91,-.9,.2],[1.08,-1.17,.05],[1.26,-.91,.18],[1.49,-.74,.3],[1.72,-.85,.33],[1.83,-1.13,.27],[1.7,-1.48,.18],[1.38,-1.81,.1]];o(u,{target:e,mat:a,width:v=>.205-.14*Math.exp(-Math.pow(Math.min(v,1-v)/.055,2))-.075*Math.exp(-Math.pow((v-.49)/.055,2)),depth:v=>.045+.035*rl(Math.min(v,1-v)/.07),closed:!0,twist:v=>.15+Math.sin(v*Na)*.3});let T=new $e([...f,...u.slice(3),u[0]].map(([v,M,R])=>new I(v,M,R+.16)),!1,"centripetal"),E=new Ci(.019,12,8),S=new sn({color:"#fff2d8",emissive:"#ecc295",emissiveIntensity:2.4,metalness:.2,roughness:.25});n.push(E,S);let C=Array.from({length:9},(v,M)=>{let R=new Kt(E,S);return R.scale.setScalar(1-M*.065),i.add(R),R}),A=new Qn("#eac795",.35,1.4,2);i.add(A);function P(v,M,R=0){e.scale.setScalar(1+Math.sin(v*1.15)*.0035);let F=(v*.095+M*1.5)%1;C.forEach((z,G)=>{let Y=(F-G*.006+1)%1;T.getPointAt(Y,z.position),z.scale.setScalar((1-G*.065)*(1+R*.3))}),A.position.copy(C[0].position),A.intensity=.28+R*.32}function O(){n.forEach(v=>v.dispose())}return{group:i,update:P,dispose:O}}var sh=Math.PI*2;function rh(i=!1){let t=new Te,e=i?640:1200,n=[],s=[],r=[],a=[],o=8191,l=()=>(o=o*16807%2147483647,(o-1)/2147483646);for(let m=0;m<e;m++){let u=l()*sh,T=(l()-.5)*11,E=1.7+Math.pow(l(),1.5)*4.8;n.push(Math.cos(u)*E,T,Math.sin(u)*E-2.5),s.push(l(),l(),l());let S=l()>.47;r.push(S?.94:.3,S?.68:.73,S?.4:.77)}let c=new xe;c.setAttribute("position",new se(n,3)),c.setAttribute("aSeed",new se(s,3)),c.setAttribute("color",new se(r,3));let h={uTime:{value:0},uScroll:{value:0},uPixelRatio:{value:1},uOpacity:{value:.7}},d=new Ne({uniforms:h,transparent:!0,depthWrite:!1,blending:Ms,vertexColors:!0,vertexShader:`attribute vec3 aSeed;
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
   }`,fragmentShader:`uniform float uOpacity; varying vec3 vColor; varying float vAlpha;
   void main(){float d=length(gl_PointCoord-.5)*2.0;
    float halo=exp(-d*d*5.0)*.25+exp(-d*d*35.0)*.75;
    gl_FragColor=vec4(vColor,halo*vAlpha*uOpacity);
   }`}),f=new hs(c,d);f.frustumCulled=!1,t.add(f),a.push(c,d);let p=[];for(let m=0;m<3;m++){let u=new $e(Array.from({length:100},(C,A)=>{let P=A/99,O=P*sh*1.1+m*.22,v=2.1+Math.sin(P*Math.PI)*.75+m*.055;return new I(Math.sin(O)*v,(P-.5)*10,Math.cos(O)*v-1.4)})),T=new ms(u,280,m===0?.009:.0035,5,!1),E=new sn({color:m===0?"#c8a67a":"#719d9b",emissive:m===0?"#654b32":"#203e40",emissiveIntensity:.22,metalness:.6,roughness:.35,transparent:!0,opacity:m===0?.47:.27}),S=new Kt(T,E);t.add(S),p.push(S),a.push(T,E)}function _(m,u,T,E,S){h.uTime.value=m,h.uScroll.value=u,h.uPixelRatio.value=S,h.uOpacity.value=(.95-T*.48)*(1-E*.7),t.rotation.y=Math.sin(m*.07)*.09,p.forEach((C,A)=>{C.rotation.y=m*.025+u*.8,C.rotation.z=Math.sin(m*.08+A)*.03,C.material.opacity=(A===0?.47:.27)*(1-T*.55)*(1-E)})}function y(){a.forEach(m=>m.dispose())}return{group:t,update:_,dispose:y}}var Fa=Math.PI*2,ah=i=>Math.max(0,Math.min(1,i)),Fn=i=>(i=ah(i),i*i*(3-2*i)),Oe=(i,t,e)=>i+(t-i)*e;function Lm(){let i=[];function t(e,n,s){let a=new $e(e.map(([o,l,c=0])=>new I((o-561)/250,(701-l)/250,c)),!1,"centripetal").getPoints(e.length*28);a.forEach((o,l)=>i.push({x:o.x,y:o.y,z:o.z,width:n,kind:s,part:l/(a.length-1)}))}return t([[247,252,-.26],[290,207,-.18],[364,182,-.08],[424,201,.02],[469,245,-.06],[494,226,-.13],[533,263,-.1],[570,303,-.16],[594,359,-.12],[585,402,.02],[555,397,.26],[543,351,.4],[515,304,.45],[483,305,.48],[463,344,.54],[467,388,.52],[507,412,.43],[548,443,.29],[548,475,.15],[511,490,.23],[465,468,.44],[437,429,.53],[395,403,.69],[370,370,.74],[374,322,.65],[397,270,.45],[378,228,.33],[324,218,.32],[270,242,.31],[241,271,.37],[272,289,.62],[320,264,.66],[346,284,.74],[331,327,.8],[280,352,.82],[224,363,.74],[180,402,.59],[182,426,.61],[223,431,.74],[295,421,.82],[359,436,.73],[403,467,.56],[422,511,.39],[393,543,.25],[351,532,.43],[312,491,.62],[258,479,.69],[212,495,.41],[180,504,.15],[147,481,.02],[136,432,-.1],[153,375,-.15],[177,331,-.21],[199,297,-.28],[227,277,-.32],[203,329,-.36],[188,387,-.32],[210,459,-.27],[238,523,-.14],[268,554,.02],[312,537,.21],[331,554,.24]],.235,"brain"),t([[331,554,.24],[319,600,.27],[326,648,.2],[358,682,.12],[419,709,.05],[496,704,.02],[563,691,.06],[619,703,.16],[665,737,.23],[684,780,.16],[679,830,.08],[654,888,.02],[648,944,.06]],.2,"bridge"),t([[648,944,.06],[654,1008,.15],[710,1080,.17],[779,1149,.09],[822,1202,0],[870,1152,.06],[937,1084,.19],[988,1020,.31],[1001,963,.4],[976,911,.43],[935,889,.38],[894,903,.24],[862,944,.1],[844,977,.03],[821,951,.13],[796,916,.27],[759,889,.37],[717,890,.3],[680,916,.13],[656,957,-.03]],.215,"heart"),t([[656,957,-.03],[680,1070,-.15],[793,1225,-.1],[925,1300,0]],.04,"tail"),i}function Dm(i,t){let e=[0];for(let s=1;s<i.length;s++)e.push(e.at(-1)+Math.hypot(i[s].x-i[s-1].x,i[s].y-i[s-1].y,i[s].z-i[s-1].z));let n=0;return Array.from({length:t+1},(s,r)=>{let a=r/t*e.at(-1);for(;n<e.length-2&&e[n+1]<a;)n++;let o=(a-e[n])/(e[n+1]-e[n]||1),l=i[n],c=i[n+1];return{x:Oe(l.x,c.x,o),y:Oe(l.y,c.y,o),z:Oe(l.z,c.z,o),width:Oe(l.width,c.width,o),kind:l.kind,part:Oe(l.part,c.part,o)}})}function nx(i,{intro:t=!1}={}){let e=matchMedia("(max-width:760px)").matches,n=t?48:e?1500:2400,s=12,r=new La({alpha:!0,antialias:!0,powerPreference:"low-power"});r.setPixelRatio(Math.min(devicePixelRatio,1.65)),r.setClearColor(0,0),r.toneMapping=Gr,r.toneMappingExposure=.92,r.outputColorSpace=Ee,r.shadowMap.enabled=!0,r.shadowMap.type=Ur,r.domElement.setAttribute("aria-hidden","true"),i.prepend(r.domElement);let a=new Yn,o=t?new _e(33,1,.1,60):new jn(-3,3,3,-3,.1,50);o.position.set(0,0,12);let l=new Te;a.add(l);let c=new Ua,h=new Fi(r),d=h.fromScene(c,.018);a.environment=d.texture,c.dispose(),h.dispose(),a.add(new ys(16777215,.35),new vs(16775920,1653571,.6));let f=new ti(16774111,3);f.position.set(-3,5,8),f.castShadow=!0,f.shadow.mapSize.set(1024,1024),f.shadow.camera.left=-4,f.shadow.camera.right=4,f.shadow.camera.top=4,f.shadow.camera.bottom=-4,f.shadow.normalBias=.025,f.shadow.bias=-2e-4,f.shadow.radius=4,a.add(f);let p=new ti(13362921,.65);if(p.position.set(4,1,5),a.add(p),t){let ht=new ti("#9cc8c7",2.2);ht.position.set(2,3,-4),a.add(ht),f.intensity=3.6,p.intensity=1.1}let _=new Zn(20,20),y=new gs({opacity:.13}),m=new Kt(_,y);m.position.z=-.6,m.receiveShadow=!0,a.add(m);let u=Dm(Lm(),n),T=new Float32Array((n+1)*3),E=new Float32Array(n+1),S=new Float32Array(n+1),C=new Float32Array(n+1),A=new Float32Array((n+1)*s*3),P=new Float32Array(A.length),O=[],v=new Pt("#174b53"),M=new Pt("#ad6244"),R=new Pt;u.forEach((ht,at)=>{let Vt=ht.kind==="brain"?0:ht.kind==="bridge"?Fn((ht.part-.43)/.43):1;R.copy(v).lerp(M,Vt);for(let ct=0;ct<s;ct++){let Tt=(at*s+ct)*3;if(P[Tt]=R.r,P[Tt+1]=R.g,P[Tt+2]=R.b,at<n){let $t=at*s+ct,Rt=at*s+(ct+1)%s,b=$t+s,g=Rt+s;O.push($t,Rt,b,Rt,g,b)}}});let F=new xe;F.setAttribute("position",new se(A,3).setUsage(Fo)),F.setAttribute("color",new se(P,3)),F.setIndex(O);let z=new sn({vertexColors:!0,metalness:t?.48:.38,roughness:t?.29:.39,clearcoat:t?.4:.22,clearcoatRoughness:.35,envMapIntensity:t?.8:.48}),G=new Kt(F,z);G.frustumCulled=!1,G.castShadow=!0,G.receiveShadow=!0,l.add(G);let Y=t?ih():null;Y&&(G.visible=!1,l.add(Y.group));let X=new I,K=new I,k=new I,tt=new I(0,0,1),dt=t?rh(e):null;dt&&a.add(dt.group);let _t=0,Lt=0,Wt=!1,Zt=!1,Dt=-1,q=1.6,Z=-2.6,pt=3,ot=3,st=12;function Nt(){let ht=i.getBoundingClientRect();if(ht.width===_t&&ht.height===Lt)return;_t=ht.width,Lt=ht.height,r.setSize(_t,Lt,!1);let at=_t/Lt,Vt=Math.max(t?3.3:2.804,(t?2.6:2.244)/at);pt=Vt,ot=Vt*at,t?(o.aspect=at,st=Vt/Math.tan(33*Math.PI/360),o.position.z=st):(o.left=-ot,o.right=ot,o.top=Vt,o.bottom=-Vt),o.updateProjectionMatrix(),q=ot*.88,Z=-pt*.93,Dt=-1}function he(ht=0,at=0,Vt=0){if(Wt||Zt)return;Nt();let ct=Fn((ht-.04)/.16);i.style.setProperty("--sculpture-handover",ct.toFixed(4)),i.style.setProperty("--art-lean-x",(Vt*1.2*(1-ct)).toFixed(3)+"deg"),i.style.setProperty("--art-lean-y",(-at*1.8*(1-ct)).toFixed(3)+"deg");let Tt=ah((ht-.1)/.9);if(Math.abs(Dt-Tt)>5e-5){Dt=Tt;for(let Rt=0;Rt<=n;Rt++){let b=Rt/n,g=u[Rt],U=Fn((Tt*1.3-b*.82)/.48),H=Math.sin(U*Math.PI),$=Rt*3,W=q+.12*Math.sin(b*Fa)*Math.sin(b*Math.PI),xt=pt*.8-b*(pt*.8-Z);T[$]=Oe(g.x,W,U)+H*.14,T[$+1]=Oe(g.y,xt,U),T[$+2]=Oe(g.z,.02,U)+H*.34;let nt=g.kind==="tail"?Fn(Tt/.1):1;E[Rt]=Oe(g.width,.018,U)*nt*(t?.86:1),S[Rt]=Oe(.055,.014,U)*nt,C[Rt]=(g.kind==="heart"?.25*Math.sin(g.part*Fa):.22*Math.sin(b*19))*(1-U)+H*.22}for(let Rt=0;Rt<=n;Rt++){let b=Math.max(0,Rt-1)*3,g=Math.min(n,Rt+1)*3,U=Rt*3;X.set(T[g]-T[b],T[g+1]-T[b+1],T[g+2]-T[b+2]).normalize(),K.crossVectors(X,tt),K.lengthSq()<.001&&K.set(1,0,0),K.normalize(),k.crossVectors(X,K).normalize();let H=C[Rt],$=Math.cos(H),W=Math.sin(H);for(let xt=0;xt<s;xt++){let nt=xt/s*Fa,yt=Math.cos(nt),bt=Math.sin(nt),Q=Math.sign(yt)*Math.pow(Math.abs(yt),.42)*E[Rt],ft=Math.sign(bt)*Math.pow(Math.abs(bt),.42)*S[Rt],Ct=Q*$-ft*W,Mt=Q*W+ft*$,lt=(Rt*s+xt)*3;A[lt]=T[U]+K.x*Ct+k.x*Mt,A[lt+1]=T[U+1]+K.y*Ct+k.y*Mt,A[lt+2]=T[U+2]+K.z*Ct+k.z*Mt}}F.attributes.position.array.set(A),F.attributes.position.needsUpdate=!0,F.computeVertexNormals()}let $t=1-Fn(Tt);l.rotation.set(Vt*.025*$t,at*.035*$t,0),y.opacity=t?0:.13*(1-Tt),r.render(a,o),i.dataset.rendered="true"}function w(ht=0,at=0,Vt=0,ct=0,Tt=0,$t=0,Rt=1){if(!t||Wt||Zt)return;Nt();let b=Fn((ct-.88)/.12),g=Fn(ht/2.4),U=_t/Lt<.86,H=Fn(Rt),$=-.12+Math.sin(ht*.13)*.16+ct*Fa*.82;l.rotation.set(Math.sin(ht*.16)*.045+Vt*.06,$+at*.13+$t,Math.sin(ht*.12)*.025),l.position.set(0,Oe(U?1.2:.85,.1,H)+Math.sin(ht*.3)*.04,0),l.scale.setScalar(Oe(U?1.06:1.03,U?1.1:1.35,H)*(1-b*.12)),dt?.update(ht,ct+Rt*.22,H,b,r.getPixelRatio()),o.position.set(at*.16,-Vt*.12,st*Oe(U?1.03:1.28,1.04-.04*g,H)*(1+b*.12)*(1-Tt*.15)),o.lookAt(0,0,0),Y?.update(ht,ct,Math.min(1,Math.abs(at)*.4+Math.abs($t))),r.render(a,o)}function qt(){Wt||(Wt=!0,Y?.dispose(),dt?.dispose(),F.dispose(),z.dispose(),_.dispose(),y.dispose(),f.shadow.map?.dispose(),d.dispose(),r.dispose(),r.domElement.remove(),delete i.dataset.rendered)}r.domElement.addEventListener("webglcontextlost",ht=>{ht.preventDefault(),Zt=!0,delete i.dataset.rendered,i.dispatchEvent(new Event("thread-context-lost"))}),he(0);function Ft(){return{x:(q+ot)/(ot*2)*_t,y:(pt-Z)/(pt*2)*Lt}}return{update:he,updateEntrance:w,resize:Nt,dispose:qt,exit:Ft}}export{nx as createThreadScene};
