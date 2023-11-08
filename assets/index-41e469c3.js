(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function fd(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Be={},Mi=[],pn=()=>{},$b=()=>!1,Ub=/^on[^a-z]/,Ql=t=>Ub.test(t),gd=t=>t.startsWith("onUpdate:"),rt=Object.assign,pd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Hb=Object.prototype.hasOwnProperty,ye=(t,e)=>Hb.call(t,e),Z=Array.isArray,Li=t=>Jl(t)==="[object Map]",yy=t=>Jl(t)==="[object Set]",oe=t=>typeof t=="function",Xe=t=>typeof t=="string",Xl=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",_y=t=>(Me(t)||oe(t))&&oe(t.then)&&oe(t.catch),wy=Object.prototype.toString,Jl=t=>wy.call(t),jb=t=>Jl(t).slice(8,-1),Ey=t=>Jl(t)==="[object Object]",md=t=>Xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qa=fd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},zb=/-(\w)/g,an=Zl(t=>t.replace(zb,(e,n)=>n?n.toUpperCase():"")),Wb=/\B([A-Z])/g,dr=Zl(t=>t.replace(Wb,"-$1").toLowerCase()),rs=Zl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xc=Zl(t=>t?`on${rs(t)}`:""),ai=(t,e)=>!Object.is(t,e),Jc=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ol=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Kb=t=>{const e=parseFloat(t);return isNaN(e)?t:e},qb=t=>{const e=Xe(t)?Number(t):NaN;return isNaN(e)?t:e};let kg;const Ku=()=>kg||(kg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vd(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Xe(s)?Xb(s):vd(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Xe(t)||Me(t))return t}const Gb=/;(?![^(]*\))/g,Yb=/:([^]+)/,Qb=/\/\*[^]*?\*\//g;function Xb(t){const e={};return t.replace(Qb,"").split(Gb).forEach(n=>{if(n){const s=n.split(Yb);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function yd(t){let e="";if(Xe(t))e=t;else if(Z(t))for(let n=0;n<t.length;n++){const s=yd(t[n]);s&&(e+=s+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Jb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zb=fd(Jb);function Cy(t){return!!t||t===""}const js=t=>Xe(t)?t:t==null?"":Z(t)||Me(t)&&(t.toString===wy||!oe(t.toString))?JSON.stringify(t,by,2):String(t),by=(t,e)=>e&&e.__v_isRef?by(t,e.value):Li(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:yy(e)?{[`Set(${e.size})`]:[...e.values()]}:Me(e)&&!Z(e)&&!Ey(e)?String(e):e;let zt;class Ty{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=zt,!e&&zt&&(this.index=(zt.scopes||(zt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=zt;try{return zt=this,e()}finally{zt=n}}}on(){zt=this}off(){zt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function _d(t){return new Ty(t)}function eT(t,e=zt){e&&e.active&&e.effects.push(t)}function Sy(){return zt}function Iy(t){zt&&zt.cleanups.push(t)}const wd=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ay=t=>(t.w&ks)>0,ky=t=>(t.n&ks)>0,tT=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ks},nT=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Ay(i)&&!ky(i)?i.delete(t):e[n++]=i,i.w&=~ks,i.n&=~ks}e.length=n}},al=new WeakMap;let Wr=0,ks=1;const qu=30;let un;const ti=Symbol(""),Gu=Symbol("");class Ed{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,eT(this,s)}run(){if(!this.active)return this.fn();let e=un,n=bs;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=un,un=this,bs=!0,ks=1<<++Wr,Wr<=qu?tT(this):Rg(this),this.fn()}finally{Wr<=qu&&nT(this),ks=1<<--Wr,un=this.parent,bs=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){un===this?this.deferStop=!0:this.active&&(Rg(this),this.onStop&&this.onStop(),this.active=!1)}}function Rg(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let bs=!0;const Ry=[];function fr(){Ry.push(bs),bs=!1}function gr(){const t=Ry.pop();bs=t===void 0?!0:t}function Ut(t,e,n){if(bs&&un){let s=al.get(t);s||al.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=wd()),Ny(i)}}function Ny(t,e){let n=!1;Wr<=qu?ky(t)||(t.n|=ks,n=!Ay(t)):n=!t.has(un),n&&(t.add(un),un.deps.push(t))}function Jn(t,e,n,s,i,r){const o=al.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Z(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!Xl(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Z(t)?md(n)&&a.push(o.get("length")):(a.push(o.get(ti)),Li(t)&&a.push(o.get(Gu)));break;case"delete":Z(t)||(a.push(o.get(ti)),Li(t)&&a.push(o.get(Gu)));break;case"set":Li(t)&&a.push(o.get(ti));break}if(a.length===1)a[0]&&Yu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Yu(wd(l))}}function Yu(t,e){const n=Z(t)?t:[...t];for(const s of n)s.computed&&Ng(s);for(const s of n)s.computed||Ng(s)}function Ng(t,e){(t!==un||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function sT(t,e){var n;return(n=al.get(t))==null?void 0:n.get(e)}const iT=fd("__proto__,__v_isRef,__isVue"),xy=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Xl)),xg=rT();function rT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=de(this);for(let r=0,o=this.length;r<o;r++)Ut(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(de)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){fr();const s=de(this)[e].apply(this,n);return gr(),s}}),t}function oT(t){const e=de(this);return Ut(e,"has",t),e.hasOwnProperty(t)}class Dy{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const i=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw"&&s===(i?r?_T:Ly:r?My:Py).get(e))return e;const o=Z(e);if(!i){if(o&&ye(xg,n))return Reflect.get(xg,n,s);if(n==="hasOwnProperty")return oT}const a=Reflect.get(e,n,s);return(Xl(n)?xy.has(n):iT(n))||(i||Ut(e,"get",n),r)?a:je(a)?o&&md(n)?a:a.value:Me(a)?i?tc(a):Wt(a):a}}class Oy extends Dy{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(Qi(r)&&je(r)&&!je(s))return!1;if(!this._shallow&&(!ll(s)&&!Qi(s)&&(r=de(r),s=de(s)),!Z(e)&&je(r)&&!je(s)))return r.value=s,!0;const o=Z(e)&&md(n)?Number(n)<e.length:ye(e,n),a=Reflect.set(e,n,s,i);return e===de(i)&&(o?ai(s,r)&&Jn(e,"set",n,s):Jn(e,"add",n,s)),a}deleteProperty(e,n){const s=ye(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Jn(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Xl(n)||!xy.has(n))&&Ut(e,"has",n),s}ownKeys(e){return Ut(e,"iterate",Z(e)?"length":ti),Reflect.ownKeys(e)}}class aT extends Dy{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const lT=new Oy,cT=new aT,uT=new Oy(!0),Cd=t=>t,ec=t=>Reflect.getPrototypeOf(t);function ba(t,e,n=!1,s=!1){t=t.__v_raw;const i=de(t),r=de(e);n||(ai(e,r)&&Ut(i,"get",e),Ut(i,"get",r));const{has:o}=ec(i),a=s?Cd:n?Sd:vo;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Ta(t,e=!1){const n=this.__v_raw,s=de(n),i=de(t);return e||(ai(t,i)&&Ut(s,"has",t),Ut(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Sa(t,e=!1){return t=t.__v_raw,!e&&Ut(de(t),"iterate",ti),Reflect.get(t,"size",t)}function Dg(t){t=de(t);const e=de(this);return ec(e).has.call(e,t)||(e.add(t),Jn(e,"add",t,t)),this}function Og(t,e){e=de(e);const n=de(this),{has:s,get:i}=ec(n);let r=s.call(n,t);r||(t=de(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ai(e,o)&&Jn(n,"set",t,e):Jn(n,"add",t,e),this}function Pg(t){const e=de(this),{has:n,get:s}=ec(e);let i=n.call(e,t);i||(t=de(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Jn(e,"delete",t,void 0),r}function Mg(){const t=de(this),e=t.size!==0,n=t.clear();return e&&Jn(t,"clear",void 0,void 0),n}function Ia(t,e){return function(s,i){const r=this,o=r.__v_raw,a=de(o),l=e?Cd:t?Sd:vo;return!t&&Ut(a,"iterate",ti),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Aa(t,e,n){return function(...s){const i=this.__v_raw,r=de(i),o=Li(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Cd:e?Sd:vo;return!e&&Ut(r,"iterate",l?Gu:ti),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function us(t){return function(...e){return t==="delete"?!1:this}}function hT(){const t={get(r){return ba(this,r)},get size(){return Sa(this)},has:Ta,add:Dg,set:Og,delete:Pg,clear:Mg,forEach:Ia(!1,!1)},e={get(r){return ba(this,r,!1,!0)},get size(){return Sa(this)},has:Ta,add:Dg,set:Og,delete:Pg,clear:Mg,forEach:Ia(!1,!0)},n={get(r){return ba(this,r,!0)},get size(){return Sa(this,!0)},has(r){return Ta.call(this,r,!0)},add:us("add"),set:us("set"),delete:us("delete"),clear:us("clear"),forEach:Ia(!0,!1)},s={get(r){return ba(this,r,!0,!0)},get size(){return Sa(this,!0)},has(r){return Ta.call(this,r,!0)},add:us("add"),set:us("set"),delete:us("delete"),clear:us("clear"),forEach:Ia(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Aa(r,!1,!1),n[r]=Aa(r,!0,!1),e[r]=Aa(r,!1,!0),s[r]=Aa(r,!0,!0)}),[t,n,e,s]}const[dT,fT,gT,pT]=hT();function bd(t,e){const n=e?t?pT:gT:t?fT:dT;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ye(n,i)&&i in s?n:s,i,r)}const mT={get:bd(!1,!1)},vT={get:bd(!1,!0)},yT={get:bd(!0,!1)},Py=new WeakMap,My=new WeakMap,Ly=new WeakMap,_T=new WeakMap;function wT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ET(t){return t.__v_skip||!Object.isExtensible(t)?0:wT(jb(t))}function Wt(t){return Qi(t)?t:Td(t,!1,lT,mT,Py)}function Fy(t){return Td(t,!1,uT,vT,My)}function tc(t){return Td(t,!0,cT,yT,Ly)}function Td(t,e,n,s,i){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=ET(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Fi(t){return Qi(t)?Fi(t.__v_raw):!!(t&&t.__v_isReactive)}function Qi(t){return!!(t&&t.__v_isReadonly)}function ll(t){return!!(t&&t.__v_isShallow)}function By(t){return Fi(t)||Qi(t)}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function Vy(t){return ol(t,"__v_skip",!0),t}const vo=t=>Me(t)?Wt(t):t,Sd=t=>Me(t)?tc(t):t;function $y(t){bs&&un&&(t=de(t),Ny(t.dep||(t.dep=wd())))}function Uy(t,e){t=de(t);const n=t.dep;n&&Yu(n)}function je(t){return!!(t&&t.__v_isRef===!0)}function ze(t){return Hy(t,!1)}function Re(t){return Hy(t,!0)}function Hy(t,e){return je(t)?t:new CT(t,e)}class CT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:de(e),this._value=n?e:vo(e)}get value(){return $y(this),this._value}set value(e){const n=this.__v_isShallow||ll(e)||Qi(e);e=n?e:de(e),ai(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:vo(e),Uy(this))}}function Ke(t){return je(t)?t.value:t}const bT={get:(t,e,n)=>Ke(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return je(i)&&!je(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function jy(t){return Fi(t)?t:new Proxy(t,bT)}function Id(t){const e=Z(t)?new Array(t.length):{};for(const n in t)e[n]=zy(t,n);return e}class TT{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return sT(de(this._object),this._key)}}class ST{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Ot(t,e,n){return je(t)?t:oe(t)?new ST(t):Me(t)&&arguments.length>1?zy(t,e,n):ze(t)}function zy(t,e,n){const s=t[e];return je(s)?s:new TT(t,e,n)}class IT{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ed(e,()=>{this._dirty||(this._dirty=!0,Uy(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=de(this);return $y(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function AT(t,e,n=!1){let s,i;const r=oe(t);return r?(s=t,i=pn):(s=t.get,i=t.set),new IT(s,i,r||!i,n)}function Ts(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){nc(r,e,n)}return i}function rn(t,e,n,s){if(oe(t)){const r=Ts(t,e,n,s);return r&&_y(r)&&r.catch(o=>{nc(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(rn(t[r],e,n,s));return i}function nc(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Ts(l,null,10,[t,o,a]);return}}kT(t,n,i,s)}function kT(t,e,n,s=!0){console.error(t)}let yo=!1,Qu=!1;const St=[];let Nn=0;const Bi=[];let qn=null,Ks=0;const Wy=Promise.resolve();let Ad=null;function pr(t){const e=Ad||Wy;return t?e.then(this?t.bind(this):t):e}function RT(t){let e=Nn+1,n=St.length;for(;e<n;){const s=e+n>>>1,i=St[s],r=_o(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function kd(t){(!St.length||!St.includes(t,yo&&t.allowRecurse?Nn+1:Nn))&&(t.id==null?St.push(t):St.splice(RT(t.id),0,t),Ky())}function Ky(){!yo&&!Qu&&(Qu=!0,Ad=Wy.then(Gy))}function NT(t){const e=St.indexOf(t);e>Nn&&St.splice(e,1)}function xT(t){Z(t)?Bi.push(...t):(!qn||!qn.includes(t,t.allowRecurse?Ks+1:Ks))&&Bi.push(t),Ky()}function Lg(t,e=yo?Nn+1:0){for(;e<St.length;e++){const n=St[e];n&&n.pre&&(St.splice(e,1),e--,n())}}function qy(t){if(Bi.length){const e=[...new Set(Bi)];if(Bi.length=0,qn){qn.push(...e);return}for(qn=e,qn.sort((n,s)=>_o(n)-_o(s)),Ks=0;Ks<qn.length;Ks++)qn[Ks]();qn=null,Ks=0}}const _o=t=>t.id==null?1/0:t.id,DT=(t,e)=>{const n=_o(t)-_o(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Gy(t){Qu=!1,yo=!0,St.sort(DT);const e=pn;try{for(Nn=0;Nn<St.length;Nn++){const n=St[Nn];n&&n.active!==!1&&Ts(n,null,14)}}finally{Nn=0,St.length=0,qy(),yo=!1,Ad=null,(St.length||Bi.length)&&Gy()}}function OT(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Be;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Be;d&&(i=n.map(f=>Xe(f)?f.trim():f)),h&&(i=n.map(Kb))}let a,l=s[a=Xc(e)]||s[a=Xc(an(e))];!l&&r&&(l=s[a=Xc(dr(e))]),l&&rn(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,rn(c,t,6,i)}}function Yy(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!oe(t)){const l=c=>{const u=Yy(c,e,!0);u&&(a=!0,rt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Me(t)&&s.set(t,null),null):(Z(r)?r.forEach(l=>o[l]=null):rt(o,r),Me(t)&&s.set(t,o),o)}function sc(t,e){return!t||!Ql(e)?!1:(e=e.slice(2).replace(/Once$/,""),ye(t,e[0].toLowerCase()+e.slice(1))||ye(t,dr(e))||ye(t,e))}let qt=null,Qy=null;function cl(t){const e=qt;return qt=t,Qy=t&&t.type.__scopeId||null,e}function le(t,e=qt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Gg(-1);const r=cl(e);let o;try{o=t(...i)}finally{cl(r),s._d&&Gg(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Zc(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:m}=t;let y,w;const C=cl(t);try{if(n.shapeFlag&4){const b=i||s;y=Rn(u.call(b,b,h,r,f,d,g)),w=l}else{const b=e;y=Rn(b.length>1?b(r,{attrs:l,slots:a,emit:c}):b(r,null)),w=e.props?l:PT(l)}}catch(b){no.length=0,nc(b,t,1),y=_(mn)}let I=y;if(w&&m!==!1){const b=Object.keys(w),{shapeFlag:L}=I;b.length&&L&7&&(o&&b.some(gd)&&(w=MT(w,o)),I=Rs(I,w))}return n.dirs&&(I=Rs(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),y=I,cl(C),y}const PT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ql(n))&&((e||(e={}))[n]=t[n]);return e},MT=(t,e)=>{const n={};for(const s in t)(!gd(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function LT(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Fg(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!sc(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Fg(s,o,c):!0:!!o;return!1}function Fg(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!sc(n,r))return!0}return!1}function FT({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Rd="components",BT="directives";function VT(t,e){return Nd(Rd,t,!0,e)||t}const Xy=Symbol.for("v-ndc");function $T(t){return Xe(t)?Nd(Rd,t,!1)||t:t||Xy}function ic(t){return Nd(BT,t)}function Nd(t,e,n=!0,s=!1){const i=qt||dt;if(i){const r=i.type;if(t===Rd){const a=SS(r,!1);if(a&&(a===e||a===an(e)||a===rs(an(e))))return r}const o=Bg(i[t]||r[t],e)||Bg(i.appContext[t],e);return!o&&s?r:o}}function Bg(t,e){return t&&(t[e]||t[an(e)]||t[rs(an(e))])}const UT=t=>t.__isSuspense;function HT(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):xT(t)}function mr(t,e){return xd(t,null,e)}const ka={};function We(t,e,n){return xd(t,e,n)}function xd(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Be){var a;const l=Sy()===((a=dt)==null?void 0:a.scope)?dt:null;let c,u=!1,h=!1;if(je(t)?(c=()=>t.value,u=ll(t)):Fi(t)?(c=()=>t,s=!0):Z(t)?(h=!0,u=t.some(b=>Fi(b)||ll(b)),c=()=>t.map(b=>{if(je(b))return b.value;if(Fi(b))return Ys(b);if(oe(b))return Ts(b,l,2)})):oe(t)?e?c=()=>Ts(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),rn(t,l,3,[f])}:c=pn,e&&s){const b=c;c=()=>Ys(b())}let d,f=b=>{d=C.onStop=()=>{Ts(b,l,4)}},g;if(bo)if(f=pn,e?n&&rn(e,l,3,[c(),h?[]:void 0,f]):c(),i==="sync"){const b=kS();g=b.__watcherHandles||(b.__watcherHandles=[])}else return pn;let m=h?new Array(t.length).fill(ka):ka;const y=()=>{if(C.active)if(e){const b=C.run();(s||u||(h?b.some((L,M)=>ai(L,m[M])):ai(b,m)))&&(d&&d(),rn(e,l,3,[b,m===ka?void 0:h&&m[0]===ka?[]:m,f]),m=b)}else C.run()};y.allowRecurse=!!e;let w;i==="sync"?w=y:i==="post"?w=()=>Lt(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),w=()=>kd(y));const C=new Ed(c,w);e?n?y():m=C.run():i==="post"?Lt(C.run.bind(C),l&&l.suspense):C.run();const I=()=>{C.stop(),l&&l.scope&&pd(l.scope.effects,C)};return g&&g.push(I),I}function jT(t,e,n){const s=this.proxy,i=Xe(t)?t.includes(".")?Jy(s,t):()=>s[t]:t.bind(s,s);let r;oe(e)?r=e:(r=e.handler,n=e);const o=dt;Ji(this);const a=xd(i,r.bind(s),n);return o?Ji(o):ni(),a}function Jy(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ys(t,e){if(!Me(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),je(t))Ys(t.value,e);else if(Z(t))for(let n=0;n<t.length;n++)Ys(t[n],e);else if(yy(t)||Li(t))t.forEach(n=>{Ys(n,e)});else if(Ey(t))for(const n in t)Ys(t[n],e);return t}function Xi(t,e){const n=qt;if(n===null)return t;const s=lc(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Be]=e[r];o&&(oe(o)&&(o={mounted:o,updated:o}),o.deep&&Ys(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Vs(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(fr(),rn(l,n,8,[t.el,a,t,e]),gr())}}const ms=Symbol("_leaveCb"),Ra=Symbol("_enterCb");function Zy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vr(()=>{t.isMounted=!0}),Ms(()=>{t.isUnmounting=!0}),t}const en=[Function,Array],e_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:en,onEnter:en,onAfterEnter:en,onEnterCancelled:en,onBeforeLeave:en,onLeave:en,onAfterLeave:en,onLeaveCancelled:en,onBeforeAppear:en,onAppear:en,onAfterAppear:en,onAppearCancelled:en},zT={name:"BaseTransition",props:e_,setup(t,{slots:e}){const n=Go(),s=Zy();let i;return()=>{const r=e.default&&Dd(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const m of r)if(m.type!==mn){o=m;break}}const a=de(t),{mode:l}=a;if(s.isLeaving)return eu(o);const c=Vg(o);if(!c)return eu(o);const u=wo(c,a,s,n);Eo(c,u);const h=n.subTree,d=h&&Vg(h);let f=!1;const{getTransitionKey:g}=c.type;if(g){const m=g();i===void 0?i=m:m!==i&&(i=m,f=!0)}if(d&&d.type!==mn&&(!qs(c,d)||f)){const m=wo(d,a,s,n);if(Eo(d,m),l==="out-in")return s.isLeaving=!0,m.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},eu(o);l==="in-out"&&c.type!==mn&&(m.delayLeave=(y,w,C)=>{const I=t_(s,d);I[String(d.key)]=d,y[ms]=()=>{w(),y[ms]=void 0,delete u.delayedLeave},u.delayedLeave=C})}return o}}},WT=zT;function t_(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function wo(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:m,onAppear:y,onAfterAppear:w,onAppearCancelled:C}=e,I=String(t.key),b=t_(n,t),L=(k,P)=>{k&&rn(k,s,9,P)},M=(k,P)=>{const z=P[1];L(k,P),Z(k)?k.every(ce=>ce.length<=1)&&z():k.length<=1&&z()},X={mode:r,persisted:o,beforeEnter(k){let P=a;if(!n.isMounted)if(i)P=m||a;else return;k[ms]&&k[ms](!0);const z=b[I];z&&qs(t,z)&&z.el[ms]&&z.el[ms](),L(P,[k])},enter(k){let P=l,z=c,ce=u;if(!n.isMounted)if(i)P=y||l,z=w||c,ce=C||u;else return;let F=!1;const se=k[Ra]=He=>{F||(F=!0,He?L(ce,[k]):L(z,[k]),X.delayedLeave&&X.delayedLeave(),k[Ra]=void 0)};P?M(P,[k,se]):se()},leave(k,P){const z=String(t.key);if(k[Ra]&&k[Ra](!0),n.isUnmounting)return P();L(h,[k]);let ce=!1;const F=k[ms]=se=>{ce||(ce=!0,P(),se?L(g,[k]):L(f,[k]),k[ms]=void 0,b[z]===t&&delete b[z])};b[z]=t,d?M(d,[k,F]):F()},clone(k){return wo(k,e,n,s)}};return X}function eu(t){if(rc(t))return t=Rs(t),t.children=null,t}function Vg(t){return rc(t)?t.children?t.children[0]:void 0:t}function Eo(t,e){t.shapeFlag&6&&t.component?Eo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Dd(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ot?(o.patchFlag&128&&i++,s=s.concat(Dd(o.children,e,a))):(e||o.type!==mn)&&s.push(a!=null?Rs(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function Od(t,e){return oe(t)?(()=>rt({name:t.name},e,{setup:t}))():t}const Xa=t=>!!t.type.__asyncLoader,rc=t=>t.type.__isKeepAlive;function n_(t,e){i_(t,"a",e)}function s_(t,e){i_(t,"da",e)}function i_(t,e,n=dt){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(oc(e,s,n),n){let i=n.parent;for(;i&&i.parent;)rc(i.parent.vnode)&&KT(s,e,n,i),i=i.parent}}function KT(t,e,n,s){const i=oc(e,t,s,!0);a_(()=>{pd(s[e],i)},n)}function oc(t,e,n=dt,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;fr(),Ji(n);const a=rn(e,n,t,o);return ni(),gr(),a});return s?i.unshift(r):i.push(r),r}}const os=t=>(e,n=dt)=>(!bo||t==="sp")&&oc(t,(...s)=>e(...s),n),r_=os("bm"),vr=os("m"),qT=os("bu"),o_=os("u"),Ms=os("bum"),a_=os("um"),l_=os("sp"),GT=os("rtg"),YT=os("rtc");function QT(t,e=dt){oc("ec",t,e)}function Na(t,e,n,s){let i;const r=n&&n[s];if(Z(t)||Xe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Me(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Xu=t=>t?__(t)?lc(t)||t.proxy:Xu(t.parent):null,to=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xu(t.parent),$root:t=>Xu(t.root),$emit:t=>t.emit,$options:t=>Pd(t),$forceUpdate:t=>t.f||(t.f=()=>kd(t.update)),$nextTick:t=>t.n||(t.n=pr.bind(t.proxy)),$watch:t=>jT.bind(t)}),tu=(t,e)=>t!==Be&&!t.__isScriptSetup&&ye(t,e),XT={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(tu(s,e))return o[e]=1,s[e];if(i!==Be&&ye(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ye(c,e))return o[e]=3,r[e];if(n!==Be&&ye(n,e))return o[e]=4,n[e];Ju&&(o[e]=0)}}const u=to[e];let h,d;if(u)return e==="$attrs"&&Ut(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Be&&ye(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ye(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return tu(i,e)?(i[e]=n,!0):s!==Be&&ye(s,e)?(s[e]=n,!0):ye(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Be&&ye(t,o)||tu(e,o)||(a=r[0])&&ye(a,o)||ye(s,o)||ye(to,o)||ye(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ye(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function $g(t){return Z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ju=!0;function JT(t){const e=Pd(t),n=t.proxy,s=t.ctx;Ju=!1,e.beforeCreate&&Ug(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:m,deactivated:y,beforeDestroy:w,beforeUnmount:C,destroyed:I,unmounted:b,render:L,renderTracked:M,renderTriggered:X,errorCaptured:k,serverPrefetch:P,expose:z,inheritAttrs:ce,components:F,directives:se,filters:He}=e;if(c&&ZT(c,s,null),o)for(const me in o){const ve=o[me];oe(ve)&&(s[me]=ve.bind(n))}if(i){const me=i.call(n,n);Me(me)&&(t.data=Wt(me))}if(Ju=!0,r)for(const me in r){const ve=r[me],Ht=oe(ve)?ve.bind(n,n):oe(ve.get)?ve.get.bind(n,n):pn,Sn=!oe(ve)&&oe(ve.set)?ve.set.bind(n):pn,Zt=S({get:Ht,set:Sn});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>Zt.value,set:Ze=>Zt.value=Ze})}if(a)for(const me in a)c_(a[me],s,n,me);if(l){const me=oe(l)?l.call(n):l;Reflect.ownKeys(me).forEach(ve=>{on(ve,me[ve])})}u&&Ug(u,t,"c");function Le(me,ve){Z(ve)?ve.forEach(Ht=>me(Ht.bind(n))):ve&&me(ve.bind(n))}if(Le(r_,h),Le(vr,d),Le(qT,f),Le(o_,g),Le(n_,m),Le(s_,y),Le(QT,k),Le(YT,M),Le(GT,X),Le(Ms,C),Le(a_,b),Le(l_,P),Z(z))if(z.length){const me=t.exposed||(t.exposed={});z.forEach(ve=>{Object.defineProperty(me,ve,{get:()=>n[ve],set:Ht=>n[ve]=Ht})})}else t.exposed||(t.exposed={});L&&t.render===pn&&(t.render=L),ce!=null&&(t.inheritAttrs=ce),F&&(t.components=F),se&&(t.directives=se)}function ZT(t,e,n=pn){Z(t)&&(t=Zu(t));for(const s in t){const i=t[s];let r;Me(i)?"default"in i?r=it(i.from||s,i.default,!0):r=it(i.from||s):r=it(i),je(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Ug(t,e,n){rn(Z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function c_(t,e,n,s){const i=s.includes(".")?Jy(n,s):()=>n[s];if(Xe(t)){const r=e[t];oe(r)&&We(i,r)}else if(oe(t))We(i,t.bind(n));else if(Me(t))if(Z(t))t.forEach(r=>c_(r,e,n,s));else{const r=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(r)&&We(i,r,t)}}function Pd(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>ul(l,c,o,!0)),ul(l,e,o)),Me(e)&&r.set(e,l),l}function ul(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ul(t,r,n,!0),i&&i.forEach(o=>ul(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=eS[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const eS={data:Hg,props:jg,emits:jg,methods:Kr,computed:Kr,beforeCreate:xt,created:xt,beforeMount:xt,mounted:xt,beforeUpdate:xt,updated:xt,beforeDestroy:xt,beforeUnmount:xt,destroyed:xt,unmounted:xt,activated:xt,deactivated:xt,errorCaptured:xt,serverPrefetch:xt,components:Kr,directives:Kr,watch:nS,provide:Hg,inject:tS};function Hg(t,e){return e?t?function(){return rt(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function tS(t,e){return Kr(Zu(t),Zu(e))}function Zu(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function xt(t,e){return t?[...new Set([].concat(t,e))]:e}function Kr(t,e){return t?rt(Object.create(null),t,e):e}function jg(t,e){return t?Z(t)&&Z(e)?[...new Set([...t,...e])]:rt(Object.create(null),$g(t),$g(e??{})):e}function nS(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const s in e)n[s]=xt(t[s],e[s]);return n}function u_(){return{app:null,config:{isNativeTag:$b,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sS=0;function iS(t,e){return function(s,i=null){oe(s)||(s=rt({},s)),i!=null&&!Me(i)&&(i=null);const r=u_(),o=new WeakSet;let a=!1;const l=r.app={_uid:sS++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:RS,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&oe(c.install)?(o.add(c),c.install(l,...u)):oe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=_(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,lc(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){hl=l;try{return c()}finally{hl=null}}};return l}}let hl=null;function on(t,e){if(dt){let n=dt.provides;const s=dt.parent&&dt.parent.provides;s===n&&(n=dt.provides=Object.create(s)),n[t]=e}}function it(t,e,n=!1){const s=dt||qt;if(s||hl){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:hl._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&oe(e)?e.call(s&&s.proxy):e}}function rS(t,e,n,s=!1){const i={},r={};ol(r,ac,1),t.propsDefaults=Object.create(null),h_(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Fy(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function oS(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=de(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(sc(t.emitsOptions,d))continue;const f=e[d];if(l)if(ye(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const g=an(d);i[g]=eh(l,a,g,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{h_(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!ye(e,h)&&((u=dr(h))===h||!ye(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=eh(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ye(e,h))&&(delete r[h],c=!0)}c&&Jn(t,"set","$attrs")}function h_(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Qa(l))continue;const c=e[l];let u;i&&ye(i,u=an(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:sc(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=de(n),c=a||Be;for(let u=0;u<r.length;u++){const h=r[u];n[h]=eh(i,l,h,c[h],t,!ye(c,h))}}return o}function eh(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ye(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&oe(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Ji(i),s=c[n]=l.call(null,e),ni())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===dr(n))&&(s=!0))}return s}function d_(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!oe(t)){const u=h=>{l=!0;const[d,f]=d_(h,e,!0);rt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Me(t)&&s.set(t,Mi),Mi;if(Z(r))for(let u=0;u<r.length;u++){const h=an(r[u]);zg(h)&&(o[h]=Be)}else if(r)for(const u in r){const h=an(u);if(zg(h)){const d=r[u],f=o[h]=Z(d)||oe(d)?{type:d}:rt({},d);if(f){const g=qg(Boolean,f.type),m=qg(String,f.type);f[0]=g>-1,f[1]=m<0||g<m,(g>-1||ye(f,"default"))&&a.push(h)}}}const c=[o,a];return Me(t)&&s.set(t,c),c}function zg(t){return t[0]!=="$"}function Wg(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Kg(t,e){return Wg(t)===Wg(e)}function qg(t,e){return Z(e)?e.findIndex(n=>Kg(n,t)):oe(e)&&Kg(e,t)?0:-1}const f_=t=>t[0]==="_"||t==="$stable",Md=t=>Z(t)?t.map(Rn):[Rn(t)],aS=(t,e,n)=>{if(e._n)return e;const s=le((...i)=>Md(e(...i)),n);return s._c=!1,s},g_=(t,e,n)=>{const s=t._ctx;for(const i in t){if(f_(i))continue;const r=t[i];if(oe(r))e[i]=aS(i,r,s);else if(r!=null){const o=Md(r);e[i]=()=>o}}},p_=(t,e)=>{const n=Md(e);t.slots.default=()=>n},lS=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=de(e),ol(e,"_",n)):g_(e,t.slots={})}else t.slots={},e&&p_(t,e);ol(t.slots,ac,1)},cS=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Be;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(rt(i,e),!n&&a===1&&delete i._):(r=!e.$stable,g_(e,i)),o=e}else e&&(p_(t,e),o={default:1});if(r)for(const a in i)!f_(a)&&o[a]==null&&delete i[a]};function th(t,e,n,s,i=!1){if(Z(t)){t.forEach((d,f)=>th(d,e&&(Z(e)?e[f]:e),n,s,i));return}if(Xa(s)&&!i)return;const r=s.shapeFlag&4?lc(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Be?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Xe(c)?(u[c]=null,ye(h,c)&&(h[c]=null)):je(c)&&(c.value=null)),oe(l))Ts(l,a,12,[o,u]);else{const d=Xe(l),f=je(l);if(d||f){const g=()=>{if(t.f){const m=d?ye(h,l)?h[l]:u[l]:l.value;i?Z(m)&&pd(m,r):Z(m)?m.includes(r)||m.push(r):d?(u[l]=[r],ye(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ye(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Lt(g,n)):g()}}}const Lt=HT;function uS(t){return hS(t)}function hS(t,e){const n=Ku();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=pn,insertStaticContent:g}=t,m=(p,v,E,T=null,R=null,N=null,j=!1,O=null,B=!!v.dynamicChildren)=>{if(p===v)return;p&&!qs(p,v)&&(T=A(p),Ze(p,R,N,!0),p=null),v.patchFlag===-2&&(B=!1,v.dynamicChildren=null);const{type:x,ref:Y,shapeFlag:K}=v;switch(x){case qo:y(p,v,E,T);break;case mn:w(p,v,E,T);break;case nu:p==null&&C(v,E,T,j);break;case ot:F(p,v,E,T,R,N,j,O,B);break;default:K&1?L(p,v,E,T,R,N,j,O,B):K&6?se(p,v,E,T,R,N,j,O,B):(K&64||K&128)&&x.process(p,v,E,T,R,N,j,O,B,V)}Y!=null&&R&&th(Y,p&&p.ref,N,v||p,!v)},y=(p,v,E,T)=>{if(p==null)s(v.el=a(v.children),E,T);else{const R=v.el=p.el;v.children!==p.children&&c(R,v.children)}},w=(p,v,E,T)=>{p==null?s(v.el=l(v.children||""),E,T):v.el=p.el},C=(p,v,E,T)=>{[p.el,p.anchor]=g(p.children,v,E,T,p.el,p.anchor)},I=({el:p,anchor:v},E,T)=>{let R;for(;p&&p!==v;)R=d(p),s(p,E,T),p=R;s(v,E,T)},b=({el:p,anchor:v})=>{let E;for(;p&&p!==v;)E=d(p),i(p),p=E;i(v)},L=(p,v,E,T,R,N,j,O,B)=>{j=j||v.type==="svg",p==null?M(v,E,T,R,N,j,O,B):P(p,v,R,N,j,O,B)},M=(p,v,E,T,R,N,j,O)=>{let B,x;const{type:Y,props:K,shapeFlag:Q,transition:ie,dirs:ue}=p;if(B=p.el=o(p.type,N,K&&K.is,K),Q&8?u(B,p.children):Q&16&&k(p.children,B,null,T,R,N&&Y!=="foreignObject",j,O),ue&&Vs(p,null,T,"created"),X(B,p,p.scopeId,j,T),K){for(const xe in K)xe!=="value"&&!Qa(xe)&&r(B,xe,null,K[xe],N,p.children,T,R,Oe);"value"in K&&r(B,"value",null,K.value),(x=K.onVnodeBeforeMount)&&kn(x,T,p)}ue&&Vs(p,null,T,"beforeMount");const Pe=dS(R,ie);Pe&&ie.beforeEnter(B),s(B,v,E),((x=K&&K.onVnodeMounted)||Pe||ue)&&Lt(()=>{x&&kn(x,T,p),Pe&&ie.enter(B),ue&&Vs(p,null,T,"mounted")},R)},X=(p,v,E,T,R)=>{if(E&&f(p,E),T)for(let N=0;N<T.length;N++)f(p,T[N]);if(R){let N=R.subTree;if(v===N){const j=R.vnode;X(p,j,j.scopeId,j.slotScopeIds,R.parent)}}},k=(p,v,E,T,R,N,j,O,B=0)=>{for(let x=B;x<p.length;x++){const Y=p[x]=O?vs(p[x]):Rn(p[x]);m(null,Y,v,E,T,R,N,j,O)}},P=(p,v,E,T,R,N,j)=>{const O=v.el=p.el;let{patchFlag:B,dynamicChildren:x,dirs:Y}=v;B|=p.patchFlag&16;const K=p.props||Be,Q=v.props||Be;let ie;E&&$s(E,!1),(ie=Q.onVnodeBeforeUpdate)&&kn(ie,E,v,p),Y&&Vs(v,p,E,"beforeUpdate"),E&&$s(E,!0);const ue=R&&v.type!=="foreignObject";if(x?z(p.dynamicChildren,x,O,E,T,ue,N):j||ve(p,v,O,null,E,T,ue,N,!1),B>0){if(B&16)ce(O,v,K,Q,E,T,R);else if(B&2&&K.class!==Q.class&&r(O,"class",null,Q.class,R),B&4&&r(O,"style",K.style,Q.style,R),B&8){const Pe=v.dynamicProps;for(let xe=0;xe<Pe.length;xe++){const et=Pe[xe],cn=K[et],Ci=Q[et];(Ci!==cn||et==="value")&&r(O,et,cn,Ci,R,p.children,E,T,Oe)}}B&1&&p.children!==v.children&&u(O,v.children)}else!j&&x==null&&ce(O,v,K,Q,E,T,R);((ie=Q.onVnodeUpdated)||Y)&&Lt(()=>{ie&&kn(ie,E,v,p),Y&&Vs(v,p,E,"updated")},T)},z=(p,v,E,T,R,N,j)=>{for(let O=0;O<v.length;O++){const B=p[O],x=v[O],Y=B.el&&(B.type===ot||!qs(B,x)||B.shapeFlag&70)?h(B.el):E;m(B,x,Y,null,T,R,N,j,!0)}},ce=(p,v,E,T,R,N,j)=>{if(E!==T){if(E!==Be)for(const O in E)!Qa(O)&&!(O in T)&&r(p,O,E[O],null,j,v.children,R,N,Oe);for(const O in T){if(Qa(O))continue;const B=T[O],x=E[O];B!==x&&O!=="value"&&r(p,O,x,B,j,v.children,R,N,Oe)}"value"in T&&r(p,"value",E.value,T.value)}},F=(p,v,E,T,R,N,j,O,B)=>{const x=v.el=p?p.el:a(""),Y=v.anchor=p?p.anchor:a("");let{patchFlag:K,dynamicChildren:Q,slotScopeIds:ie}=v;ie&&(O=O?O.concat(ie):ie),p==null?(s(x,E,T),s(Y,E,T),k(v.children,E,Y,R,N,j,O,B)):K>0&&K&64&&Q&&p.dynamicChildren?(z(p.dynamicChildren,Q,E,R,N,j,O),(v.key!=null||R&&v===R.subTree)&&m_(p,v,!0)):ve(p,v,E,Y,R,N,j,O,B)},se=(p,v,E,T,R,N,j,O,B)=>{v.slotScopeIds=O,p==null?v.shapeFlag&512?R.ctx.activate(v,E,T,j,B):He(v,E,T,R,N,j,B):Mt(p,v,B)},He=(p,v,E,T,R,N,j)=>{const O=p.component=wS(p,T,R);if(rc(p)&&(O.ctx.renderer=V),ES(O),O.asyncDep){if(R&&R.registerDep(O,Le),!p.el){const B=O.subTree=_(mn);w(null,B,v,E)}return}Le(O,p,v,E,R,N,j)},Mt=(p,v,E)=>{const T=v.component=p.component;if(LT(p,v,E))if(T.asyncDep&&!T.asyncResolved){me(T,v,E);return}else T.next=v,NT(T.update),T.update();else v.el=p.el,T.vnode=v},Le=(p,v,E,T,R,N,j)=>{const O=()=>{if(p.isMounted){let{next:Y,bu:K,u:Q,parent:ie,vnode:ue}=p,Pe=Y,xe;$s(p,!1),Y?(Y.el=ue.el,me(p,Y,j)):Y=ue,K&&Jc(K),(xe=Y.props&&Y.props.onVnodeBeforeUpdate)&&kn(xe,ie,Y,ue),$s(p,!0);const et=Zc(p),cn=p.subTree;p.subTree=et,m(cn,et,h(cn.el),A(cn),p,R,N),Y.el=et.el,Pe===null&&FT(p,et.el),Q&&Lt(Q,R),(xe=Y.props&&Y.props.onVnodeUpdated)&&Lt(()=>kn(xe,ie,Y,ue),R)}else{let Y;const{el:K,props:Q}=v,{bm:ie,m:ue,parent:Pe}=p,xe=Xa(v);if($s(p,!1),ie&&Jc(ie),!xe&&(Y=Q&&Q.onVnodeBeforeMount)&&kn(Y,Pe,v),$s(p,!0),K&&be){const et=()=>{p.subTree=Zc(p),be(K,p.subTree,p,R,null)};xe?v.type.__asyncLoader().then(()=>!p.isUnmounted&&et()):et()}else{const et=p.subTree=Zc(p);m(null,et,E,T,p,R,N),v.el=et.el}if(ue&&Lt(ue,R),!xe&&(Y=Q&&Q.onVnodeMounted)){const et=v;Lt(()=>kn(Y,Pe,et),R)}(v.shapeFlag&256||Pe&&Xa(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&p.a&&Lt(p.a,R),p.isMounted=!0,v=E=T=null}},B=p.effect=new Ed(O,()=>kd(x),p.scope),x=p.update=()=>B.run();x.id=p.uid,$s(p,!0),x()},me=(p,v,E)=>{v.component=p;const T=p.vnode.props;p.vnode=v,p.next=null,oS(p,v.props,T,E),cS(p,v.children,E),fr(),Lg(),gr()},ve=(p,v,E,T,R,N,j,O,B=!1)=>{const x=p&&p.children,Y=p?p.shapeFlag:0,K=v.children,{patchFlag:Q,shapeFlag:ie}=v;if(Q>0){if(Q&128){Sn(x,K,E,T,R,N,j,O,B);return}else if(Q&256){Ht(x,K,E,T,R,N,j,O,B);return}}ie&8?(Y&16&&Oe(x,R,N),K!==x&&u(E,K)):Y&16?ie&16?Sn(x,K,E,T,R,N,j,O,B):Oe(x,R,N,!0):(Y&8&&u(E,""),ie&16&&k(K,E,T,R,N,j,O,B))},Ht=(p,v,E,T,R,N,j,O,B)=>{p=p||Mi,v=v||Mi;const x=p.length,Y=v.length,K=Math.min(x,Y);let Q;for(Q=0;Q<K;Q++){const ie=v[Q]=B?vs(v[Q]):Rn(v[Q]);m(p[Q],ie,E,null,R,N,j,O,B)}x>Y?Oe(p,R,N,!0,!1,K):k(v,E,T,R,N,j,O,B,K)},Sn=(p,v,E,T,R,N,j,O,B)=>{let x=0;const Y=v.length;let K=p.length-1,Q=Y-1;for(;x<=K&&x<=Q;){const ie=p[x],ue=v[x]=B?vs(v[x]):Rn(v[x]);if(qs(ie,ue))m(ie,ue,E,null,R,N,j,O,B);else break;x++}for(;x<=K&&x<=Q;){const ie=p[K],ue=v[Q]=B?vs(v[Q]):Rn(v[Q]);if(qs(ie,ue))m(ie,ue,E,null,R,N,j,O,B);else break;K--,Q--}if(x>K){if(x<=Q){const ie=Q+1,ue=ie<Y?v[ie].el:T;for(;x<=Q;)m(null,v[x]=B?vs(v[x]):Rn(v[x]),E,ue,R,N,j,O,B),x++}}else if(x>Q)for(;x<=K;)Ze(p[x],R,N,!0),x++;else{const ie=x,ue=x,Pe=new Map;for(x=ue;x<=Q;x++){const jt=v[x]=B?vs(v[x]):Rn(v[x]);jt.key!=null&&Pe.set(jt.key,x)}let xe,et=0;const cn=Q-ue+1;let Ci=!1,Sg=0;const Or=new Array(cn);for(x=0;x<cn;x++)Or[x]=0;for(x=ie;x<=K;x++){const jt=p[x];if(et>=cn){Ze(jt,R,N,!0);continue}let An;if(jt.key!=null)An=Pe.get(jt.key);else for(xe=ue;xe<=Q;xe++)if(Or[xe-ue]===0&&qs(jt,v[xe])){An=xe;break}An===void 0?Ze(jt,R,N,!0):(Or[An-ue]=x+1,An>=Sg?Sg=An:Ci=!0,m(jt,v[An],E,null,R,N,j,O,B),et++)}const Ig=Ci?fS(Or):Mi;for(xe=Ig.length-1,x=cn-1;x>=0;x--){const jt=ue+x,An=v[jt],Ag=jt+1<Y?v[jt+1].el:T;Or[x]===0?m(null,An,E,Ag,R,N,j,O,B):Ci&&(xe<0||x!==Ig[xe]?Zt(An,E,Ag,2):xe--)}}},Zt=(p,v,E,T,R=null)=>{const{el:N,type:j,transition:O,children:B,shapeFlag:x}=p;if(x&6){Zt(p.component.subTree,v,E,T);return}if(x&128){p.suspense.move(v,E,T);return}if(x&64){j.move(p,v,E,V);return}if(j===ot){s(N,v,E);for(let K=0;K<B.length;K++)Zt(B[K],v,E,T);s(p.anchor,v,E);return}if(j===nu){I(p,v,E);return}if(T!==2&&x&1&&O)if(T===0)O.beforeEnter(N),s(N,v,E),Lt(()=>O.enter(N),R);else{const{leave:K,delayLeave:Q,afterLeave:ie}=O,ue=()=>s(N,v,E),Pe=()=>{K(N,()=>{ue(),ie&&ie()})};Q?Q(N,ue,Pe):Pe()}else s(N,v,E)},Ze=(p,v,E,T=!1,R=!1)=>{const{type:N,props:j,ref:O,children:B,dynamicChildren:x,shapeFlag:Y,patchFlag:K,dirs:Q}=p;if(O!=null&&th(O,null,E,p,!0),Y&256){v.ctx.deactivate(p);return}const ie=Y&1&&Q,ue=!Xa(p);let Pe;if(ue&&(Pe=j&&j.onVnodeBeforeUnmount)&&kn(Pe,v,p),Y&6)Bs(p.component,E,T);else{if(Y&128){p.suspense.unmount(E,T);return}ie&&Vs(p,null,v,"beforeUnmount"),Y&64?p.type.remove(p,v,E,R,V,T):x&&(N!==ot||K>0&&K&64)?Oe(x,v,E,!1,!0):(N===ot&&K&384||!R&&Y&16)&&Oe(B,v,E),T&&In(p)}(ue&&(Pe=j&&j.onVnodeUnmounted)||ie)&&Lt(()=>{Pe&&kn(Pe,v,p),ie&&Vs(p,null,v,"unmounted")},E)},In=p=>{const{type:v,el:E,anchor:T,transition:R}=p;if(v===ot){cs(E,T);return}if(v===nu){b(p);return}const N=()=>{i(E),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(p.shapeFlag&1&&R&&!R.persisted){const{leave:j,delayLeave:O}=R,B=()=>j(E,N);O?O(p.el,N,B):B()}else N()},cs=(p,v)=>{let E;for(;p!==v;)E=d(p),i(p),p=E;i(v)},Bs=(p,v,E)=>{const{bum:T,scope:R,update:N,subTree:j,um:O}=p;T&&Jc(T),R.stop(),N&&(N.active=!1,Ze(j,p,v,E)),O&&Lt(O,v),Lt(()=>{p.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Oe=(p,v,E,T=!1,R=!1,N=0)=>{for(let j=N;j<p.length;j++)Ze(p[j],v,E,T,R)},A=p=>p.shapeFlag&6?A(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),W=(p,v,E)=>{p==null?v._vnode&&Ze(v._vnode,null,null,!0):m(v._vnode||null,p,v,null,null,null,E),Lg(),qy(),v._vnode=p},V={p:m,um:Ze,m:Zt,r:In,mt:He,mc:k,pc:ve,pbc:z,n:A,o:t};let G,be;return e&&([G,be]=e(V)),{render:W,hydrate:G,createApp:iS(W,G)}}function $s({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function dS(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function m_(t,e,n=!1){const s=t.children,i=e.children;if(Z(s)&&Z(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=vs(i[r]),a.el=o.el),n||m_(o,a)),a.type===qo&&(a.el=o.el)}}function fS(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const gS=t=>t.__isTeleport,ot=Symbol.for("v-fgt"),qo=Symbol.for("v-txt"),mn=Symbol.for("v-cmt"),nu=Symbol.for("v-stc"),no=[];let dn=null;function mt(t=!1){no.push(dn=t?null:[])}function pS(){no.pop(),dn=no[no.length-1]||null}let Co=1;function Gg(t){Co+=t}function v_(t){return t.dynamicChildren=Co>0?dn||Mi:null,pS(),Co>0&&dn&&dn.push(t),t}function hs(t,e,n,s,i,r){return v_(Qe(t,e,n,s,i,r,!0))}function Yn(t,e,n,s,i){return v_(_(t,e,n,s,i,!0))}function nh(t){return t?t.__v_isVNode===!0:!1}function qs(t,e){return t.type===e.type&&t.key===e.key}const ac="__vInternal",y_=({key:t})=>t??null,Ja=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Xe(t)||je(t)||oe(t)?{i:qt,r:t,k:e,f:!!n}:t:null);function Qe(t,e=null,n=null,s=0,i=null,r=t===ot?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&y_(e),ref:e&&Ja(e),scopeId:Qy,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:qt};return a?(Ld(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Xe(n)?8:16),Co>0&&!o&&dn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&dn.push(l),l}const _=mS;function mS(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Xy)&&(t=mn),nh(t)){const a=Rs(t,e,!0);return n&&Ld(a,n),Co>0&&!r&&dn&&(a.shapeFlag&6?dn[dn.indexOf(t)]=a:dn.push(a)),a.patchFlag|=-2,a}if(IS(t)&&(t=t.__vccOpts),e){e=vS(e);let{class:a,style:l}=e;a&&!Xe(a)&&(e.class=yd(a)),Me(l)&&(By(l)&&!Z(l)&&(l=rt({},l)),e.style=vd(l))}const o=Xe(t)?1:UT(t)?128:gS(t)?64:Me(t)?4:oe(t)?2:0;return Qe(t,e,n,s,i,o,r,!0)}function vS(t){return t?By(t)||ac in t?rt({},t):t:null}function Rs(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Fn(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&y_(a),ref:e&&e.ref?n&&i?Z(i)?i.concat(Ja(e)):[i,Ja(e)]:Ja(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ot?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rs(t.ssContent),ssFallback:t.ssFallback&&Rs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function qr(t=" ",e=0){return _(qo,null,t,e)}function su(t="",e=!1){return e?(mt(),Yn(mn,null,t)):_(mn,null,t)}function Rn(t){return t==null||typeof t=="boolean"?_(mn):Z(t)?_(ot,null,t.slice()):typeof t=="object"?vs(t):_(qo,null,String(t))}function vs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Rs(t)}function Ld(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Z(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ld(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(ac in e)?e._ctx=qt:i===3&&qt&&(qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:qt},n=32):(e=String(e),s&64?(n=16,e=[qr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Fn(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=yd([e.class,s.class]));else if(i==="style")e.style=vd([e.style,s.style]);else if(Ql(i)){const r=e[i],o=s[i];o&&r!==o&&!(Z(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function kn(t,e,n,s=null){rn(t,e,7,[n,s])}const yS=u_();let _S=0;function wS(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||yS,r={uid:_S++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ty(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:d_(s,i),emitsOptions:Yy(s,i),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:s.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=OT.bind(null,r),t.ce&&t.ce(r),r}let dt=null;const Go=()=>dt||qt;let Fd,bi,Yg="__VUE_INSTANCE_SETTERS__";(bi=Ku()[Yg])||(bi=Ku()[Yg]=[]),bi.push(t=>dt=t),Fd=t=>{bi.length>1?bi.forEach(e=>e(t)):bi[0](t)};const Ji=t=>{Fd(t),t.scope.on()},ni=()=>{dt&&dt.scope.off(),Fd(null)};function __(t){return t.vnode.shapeFlag&4}let bo=!1;function ES(t,e=!1){bo=e;const{props:n,children:s}=t.vnode,i=__(t);rS(t,n,i,e),lS(t,s);const r=i?CS(t,e):void 0;return bo=!1,r}function CS(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Vy(new Proxy(t.ctx,XT));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?TS(t):null;Ji(t),fr();const r=Ts(s,t,0,[t.props,i]);if(gr(),ni(),_y(r)){if(r.then(ni,ni),e)return r.then(o=>{Qg(t,o,e)}).catch(o=>{nc(o,t,0)});t.asyncDep=r}else Qg(t,r,e)}else w_(t,e)}function Qg(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=jy(e)),w_(t,n)}let Xg;function w_(t,e,n){const s=t.type;if(!t.render){if(!e&&Xg&&!s.render){const i=s.template||Pd(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=rt(rt({isCustomElement:r,delimiters:a},o),l);s.render=Xg(i,c)}}t.render=s.render||pn}{Ji(t),fr();try{JT(t)}finally{gr(),ni()}}}function bS(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ut(t,"get","$attrs"),e[n]}}))}function TS(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return bS(t)},slots:t.slots,emit:t.emit,expose:e}}function lc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(jy(Vy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in to)return to[n](t)},has(e,n){return n in e||n in to}}))}function SS(t,e=!0){return oe(t)?t.displayName||t.name:t.name||e&&t.__name}function IS(t){return oe(t)&&"__vccOpts"in t}const S=(t,e)=>AT(t,e,bo);function jn(t,e,n){const s=arguments.length;return s===2?Me(e)&&!Z(e)?nh(e)?_(t,null,[e]):_(t,e):_(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&nh(n)&&(n=[n]),_(t,e,n))}const AS=Symbol.for("v-scx"),kS=()=>it(AS),RS="3.3.8",NS="http://www.w3.org/2000/svg",Gs=typeof document<"u"?document:null,Jg=Gs&&Gs.createElement("template"),xS={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Gs.createElementNS(NS,t):Gs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Gs.createTextNode(t),createComment:t=>Gs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Jg.innerHTML=s?`<svg>${t}</svg>`:t;const a=Jg.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ds="transition",Pr="animation",Zi=Symbol("_vtc"),yr=(t,{slots:e})=>jn(WT,C_(t),e);yr.displayName="Transition";const E_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},DS=yr.props=rt({},e_,E_),Us=(t,e=[])=>{Z(t)?t.forEach(n=>n(...e)):t&&t(...e)},Zg=t=>t?Z(t)?t.some(e=>e.length>1):t.length>1:!1;function C_(t){const e={};for(const F in t)F in E_||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,g=OS(i),m=g&&g[0],y=g&&g[1],{onBeforeEnter:w,onEnter:C,onEnterCancelled:I,onLeave:b,onLeaveCancelled:L,onBeforeAppear:M=w,onAppear:X=C,onAppearCancelled:k=I}=e,P=(F,se,He)=>{ps(F,se?u:a),ps(F,se?c:o),He&&He()},z=(F,se)=>{F._isLeaving=!1,ps(F,h),ps(F,f),ps(F,d),se&&se()},ce=F=>(se,He)=>{const Mt=F?X:C,Le=()=>P(se,F,He);Us(Mt,[se,Le]),ep(()=>{ps(se,F?l:r),Kn(se,F?u:a),Zg(Mt)||tp(se,s,m,Le)})};return rt(e,{onBeforeEnter(F){Us(w,[F]),Kn(F,r),Kn(F,o)},onBeforeAppear(F){Us(M,[F]),Kn(F,l),Kn(F,c)},onEnter:ce(!1),onAppear:ce(!0),onLeave(F,se){F._isLeaving=!0;const He=()=>z(F,se);Kn(F,h),T_(),Kn(F,d),ep(()=>{F._isLeaving&&(ps(F,h),Kn(F,f),Zg(b)||tp(F,s,y,He))}),Us(b,[F,He])},onEnterCancelled(F){P(F,!1),Us(I,[F])},onAppearCancelled(F){P(F,!0),Us(k,[F])},onLeaveCancelled(F){z(F),Us(L,[F])}})}function OS(t){if(t==null)return null;if(Me(t))return[iu(t.enter),iu(t.leave)];{const e=iu(t);return[e,e]}}function iu(t){return qb(t)}function Kn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Zi]||(t[Zi]=new Set)).add(e)}function ps(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Zi];n&&(n.delete(e),n.size||(t[Zi]=void 0))}function ep(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let PS=0;function tp(t,e,n,s){const i=t._endId=++PS,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=b_(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function b_(t,e){const n=window.getComputedStyle(t),s=g=>(n[g]||"").split(", "),i=s(`${ds}Delay`),r=s(`${ds}Duration`),o=np(i,r),a=s(`${Pr}Delay`),l=s(`${Pr}Duration`),c=np(a,l);let u=null,h=0,d=0;e===ds?o>0&&(u=ds,h=o,d=r.length):e===Pr?c>0&&(u=Pr,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?ds:Pr:null,d=u?u===ds?r.length:l.length:0);const f=u===ds&&/\b(transform|all)(,|$)/.test(s(`${ds}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function np(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>sp(n)+sp(t[s])))}function sp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function T_(){return document.body.offsetHeight}function MS(t,e,n){const s=t[Zi];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Bd=Symbol("_vod"),S_={beforeMount(t,{value:e},{transition:n}){t[Bd]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Mr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Mr(t,!0),s.enter(t)):s.leave(t,()=>{Mr(t,!1)}):Mr(t,e))},beforeUnmount(t,{value:e}){Mr(t,e)}};function Mr(t,e){t.style.display=e?t[Bd]:"none"}function LS(t,e,n){const s=t.style,i=Xe(n);if(n&&!i){if(e&&!Xe(e))for(const r in e)n[r]==null&&sh(s,r,"");for(const r in n)sh(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),Bd in t&&(s.display=r)}}const ip=/\s*!important$/;function sh(t,e,n){if(Z(n))n.forEach(s=>sh(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=FS(t,e);ip.test(n)?t.setProperty(dr(s),n.replace(ip,""),"important"):t[s]=n}}const rp=["Webkit","Moz","ms"],ru={};function FS(t,e){const n=ru[e];if(n)return n;let s=an(e);if(s!=="filter"&&s in t)return ru[e]=s;s=rs(s);for(let i=0;i<rp.length;i++){const r=rp[i]+s;if(r in t)return ru[e]=r}return e}const op="http://www.w3.org/1999/xlink";function BS(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(op,e.slice(6,e.length)):t.setAttributeNS(op,e,n);else{const r=Zb(e);n==null||r&&!Cy(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function VS(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Cy(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function $S(t,e,n,s){t.addEventListener(e,n,s)}function US(t,e,n,s){t.removeEventListener(e,n,s)}const ap=Symbol("_vei");function HS(t,e,n,s,i=null){const r=t[ap]||(t[ap]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=jS(e);if(s){const c=r[e]=KS(s,i);$S(t,a,c,l)}else o&&(US(t,a,o,l),r[e]=void 0)}}const lp=/(?:Once|Passive|Capture)$/;function jS(t){let e;if(lp.test(t)){e={};let s;for(;s=t.match(lp);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):dr(t.slice(2)),e]}let ou=0;const zS=Promise.resolve(),WS=()=>ou||(zS.then(()=>ou=0),ou=Date.now());function KS(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;rn(qS(s,n.value),e,5,[s])};return n.value=t,n.attached=WS(),n}function qS(t,e){if(Z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const cp=/^on[a-z]/,GS=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?MS(t,s,i):e==="style"?LS(t,n,s):Ql(e)?gd(e)||HS(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):YS(t,e,s,i))?VS(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),BS(t,e,s,i))};function YS(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&cp.test(e)&&oe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||cp.test(e)&&Xe(n)?!1:e in t}const I_=new WeakMap,A_=new WeakMap,dl=Symbol("_moveCb"),up=Symbol("_enterCb"),k_={name:"TransitionGroup",props:rt({},DS,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Go(),s=Zy();let i,r;return o_(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!tI(i[0].el,n.vnode.el,o))return;i.forEach(JS),i.forEach(ZS);const a=i.filter(eI);T_(),a.forEach(l=>{const c=l.el,u=c.style;Kn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c[dl]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",h),c[dl]=null,ps(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=de(t),a=C_(o);let l=o.tag||ot;i=r,r=e.default?Dd(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Eo(u,wo(u,a,s,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];Eo(u,wo(u,a,s,n)),I_.set(u,u.el.getBoundingClientRect())}return _(l,null,r)}}},QS=t=>delete t.mode;k_.props;const XS=k_;function JS(t){const e=t.el;e[dl]&&e[dl](),e[up]&&e[up]()}function ZS(t){A_.set(t,t.el.getBoundingClientRect())}function eI(t){const e=I_.get(t),n=A_.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function tI(t,e,n){const s=t.cloneNode(),i=t[Zi];i&&i.forEach(a=>{a.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:o}=b_(s);return r.removeChild(s),o}const nI=rt({patchProp:GS},xS);let hp;function sI(){return hp||(hp=uS(nI))}const iI=(...t)=>{const e=sI().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=rI(s);if(!i)return;const r=e._component;!oe(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function rI(t){return Xe(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ki=typeof window<"u";function oI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ae=Object.assign;function au(t,e){const n={};for(const s in e){const i=e[s];n[s]=yn(i)?i.map(t):t(i)}return n}const so=()=>{},yn=Array.isArray,aI=/\/$/,lI=t=>t.replace(aI,"");function lu(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=dI(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function cI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function dp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function uI(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&er(e.matched[s],n.matched[i])&&R_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function er(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function R_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hI(t[n],e[n]))return!1;return!0}function hI(t,e){return yn(t)?fp(t,e):yn(e)?fp(e,t):t===e}function fp(t,e){return yn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function dI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var To;(function(t){t.pop="pop",t.push="push"})(To||(To={}));var io;(function(t){t.back="back",t.forward="forward",t.unknown=""})(io||(io={}));function fI(t){if(!t)if(ki){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),lI(t)}const gI=/^[^#]+#/;function pI(t,e){return t.replace(gI,"#")+e}function mI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const cc=()=>({left:window.pageXOffset,top:window.pageYOffset});function vI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=mI(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function gp(t,e){return(history.state?history.state.position-e:-1)+t}const ih=new Map;function yI(t,e){ih.set(t,e)}function _I(t){const e=ih.get(t);return ih.delete(t),e}let wI=()=>location.protocol+"//"+location.host;function N_(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),dp(l,"")}return dp(n,t)+s+i}function EI(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const f=N_(t,location),g=n.value,m=e.value;let y=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}y=m?d.position-m.position:0}else s(f);i.forEach(w=>{w(n.value,g,{delta:y,type:To.pop,direction:y?y>0?io.forward:io.back:io.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Ae({},d.state,{scroll:cc()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function pp(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?cc():null}}function CI(t){const{history:e,location:n}=window,s={value:N_(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:wI()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Ae({},e.state,pp(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=Ae({},i.value,e.state,{forward:l,scroll:cc()});r(u.current,u,!0);const h=Ae({},pp(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function bI(t){t=fI(t);const e=CI(t),n=EI(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Ae({location:"",base:t,go:s,createHref:pI.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function TI(t){return typeof t=="string"||t&&typeof t=="object"}function x_(t){return typeof t=="string"||typeof t=="symbol"}const fs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},D_=Symbol("");var mp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(mp||(mp={}));function tr(t,e){return Ae(new Error,{type:t,[D_]:!0},e)}function Wn(t,e){return t instanceof Error&&D_ in t&&(e==null||!!(t.type&e))}const vp="[^/]+?",SI={sensitive:!1,strict:!1,start:!0,end:!0},II=/[.+*?^${}()[\]/\\]/g;function AI(t,e){const n=Ae({},SI,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(II,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:m,optional:y,regexp:w}=d;r.push({name:g,repeatable:m,optional:y});const C=w||vp;if(C!==vp){f+=10;try{new RegExp(`(${C})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${g}" (${C}): `+b.message)}}let I=m?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;h||(I=y&&c.length<2?`(?:/${I})`:"/"+I),y&&(I+="?"),i+=I,f+=20,y&&(f+=-8),m&&(f+=-20),C===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=r[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:m,optional:y}=f,w=g in c?c[g]:"";if(yn(w)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const C=yn(w)?w.join("/"):w;if(!C)if(y)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=C}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function kI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function RI(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=kI(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(yp(s))return 1;if(yp(i))return-1}return i.length-s.length}function yp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const NI={type:0,value:""},xI=/[a-zA-Z0-9_]/;function DI(t){if(!t)return[[]];if(t==="/")return[[NI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:xI.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function OI(t,e,n){const s=AI(DI(t.path),n),i=Ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function PI(t,e){const n=[],s=new Map;e=Ep({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const f=!d,g=MI(u);g.aliasOf=d&&d.record;const m=Ep(e,u),y=[g];if("alias"in u){const I=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of I)y.push(Ae({},g,{components:d?d.record.components:g.components,path:b,aliasOf:d?d.record:g}))}let w,C;for(const I of y){const{path:b}=I;if(h&&b[0]!=="/"){const L=h.record.path,M=L[L.length-1]==="/"?"":"/";I.path=h.record.path+(b&&M+b)}if(w=OI(I,h,m),d?d.alias.push(w):(C=C||w,C!==w&&C.alias.push(w),f&&u.name&&!wp(w)&&o(u.name)),g.children){const L=g.children;for(let M=0;M<L.length;M++)r(L[M],w,d&&d.children[M])}d=d||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&l(w)}return C?()=>{o(C)}:so}function o(u){if(x_(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&RI(u,n[h])>=0&&(u.record.path!==n[h].record.path||!O_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!wp(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},g,m;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw tr(1,{location:u});m=d.record.name,f=Ae(_p(h.params,d.keys.filter(C=>!C.optional).map(C=>C.name)),u.params&&_p(u.params,d.keys.map(C=>C.name))),g=d.stringify(f)}else if("path"in u)g=u.path,d=n.find(C=>C.re.test(g)),d&&(f=d.parse(g),m=d.record.name);else{if(d=h.name?s.get(h.name):n.find(C=>C.re.test(h.path)),!d)throw tr(1,{location:u,currentLocation:h});m=d.record.name,f=Ae({},h.params,u.params),g=d.stringify(f)}const y=[];let w=d;for(;w;)y.unshift(w.record),w=w.parent;return{name:m,path:g,params:f,matched:y,meta:FI(y)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function _p(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function MI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:LI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function LI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function wp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function FI(t){return t.reduce((e,n)=>Ae(e,n.meta),{})}function Ep(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function O_(t,e){return e.children.some(n=>n===t||O_(t,n))}const P_=/#/g,BI=/&/g,VI=/\//g,$I=/=/g,UI=/\?/g,M_=/\+/g,HI=/%5B/g,jI=/%5D/g,L_=/%5E/g,zI=/%60/g,F_=/%7B/g,WI=/%7C/g,B_=/%7D/g,KI=/%20/g;function Vd(t){return encodeURI(""+t).replace(WI,"|").replace(HI,"[").replace(jI,"]")}function qI(t){return Vd(t).replace(F_,"{").replace(B_,"}").replace(L_,"^")}function rh(t){return Vd(t).replace(M_,"%2B").replace(KI,"+").replace(P_,"%23").replace(BI,"%26").replace(zI,"`").replace(F_,"{").replace(B_,"}").replace(L_,"^")}function GI(t){return rh(t).replace($I,"%3D")}function YI(t){return Vd(t).replace(P_,"%23").replace(UI,"%3F")}function QI(t){return t==null?"":YI(t).replace(VI,"%2F")}function fl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function XI(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(M_," "),o=r.indexOf("="),a=fl(o<0?r:r.slice(0,o)),l=o<0?null:fl(r.slice(o+1));if(a in e){let c=e[a];yn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Cp(t){let e="";for(let n in t){const s=t[n];if(n=GI(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(yn(s)?s.map(r=>r&&rh(r)):[s&&rh(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function JI(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=yn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const ZI=Symbol(""),bp=Symbol(""),$d=Symbol(""),V_=Symbol(""),oh=Symbol("");function Lr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ys(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(tr(4,{from:n,to:e})):h instanceof Error?a(h):TI(h)?a(tr(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function cu(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(e1(a)){const c=(a.__vccOpts||a)[e];c&&i.push(ys(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=oI(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&ys(d,n,s,r,o)()}))}}return i}function e1(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Tp(t){const e=it($d),n=it(V_),s=S(()=>e.resolve(Ke(t.to))),i=S(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(er.bind(null,u));if(d>-1)return d;const f=Sp(l[c-2]);return c>1&&Sp(u)===f&&h[h.length-1].path!==f?h.findIndex(er.bind(null,l[c-2])):d}),r=S(()=>i.value>-1&&i1(n.params,s.value.params)),o=S(()=>i.value>-1&&i.value===n.matched.length-1&&R_(n.params,s.value.params));function a(l={}){return s1(l)?e[Ke(t.replace)?"replace":"push"](Ke(t.to)).catch(so):Promise.resolve()}return{route:s,href:S(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const t1=Od({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Tp,setup(t,{slots:e}){const n=Wt(Tp(t)),{options:s}=it($d),i=S(()=>({[Ip(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ip(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:jn("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),n1=t1;function s1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function i1(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!yn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Sp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ip=(t,e,n)=>t??e??n,r1=Od({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=it(oh),i=S(()=>t.route||s.value),r=it(bp,0),o=S(()=>{let c=Ke(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=S(()=>i.value.matched[o.value]);on(bp,S(()=>o.value+1)),on(ZI,a),on(oh,i);const l=ze();return We(()=>[l.value,a.value,t.name],([c,u,h],[d,f,g])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!er(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Ap(n.default,{Component:d,route:c});const f=h.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,y=jn(d,Ae({},g,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Ap(n.default,{Component:y,route:c})||y}}});function Ap(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const $_=r1;function o1(t){const e=PI(t.routes,t),n=t.parseQuery||XI,s=t.stringifyQuery||Cp,i=t.history,r=Lr(),o=Lr(),a=Lr(),l=Re(fs);let c=fs;ki&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=au.bind(null,A=>""+A),h=au.bind(null,QI),d=au.bind(null,fl);function f(A,W){let V,G;return x_(A)?(V=e.getRecordMatcher(A),G=W):G=A,e.addRoute(G,V)}function g(A){const W=e.getRecordMatcher(A);W&&e.removeRoute(W)}function m(){return e.getRoutes().map(A=>A.record)}function y(A){return!!e.getRecordMatcher(A)}function w(A,W){if(W=Ae({},W||l.value),typeof A=="string"){const E=lu(n,A,W.path),T=e.resolve({path:E.path},W),R=i.createHref(E.fullPath);return Ae(E,T,{params:d(T.params),hash:fl(E.hash),redirectedFrom:void 0,href:R})}let V;if("path"in A)V=Ae({},A,{path:lu(n,A.path,W.path).path});else{const E=Ae({},A.params);for(const T in E)E[T]==null&&delete E[T];V=Ae({},A,{params:h(E)}),W.params=h(W.params)}const G=e.resolve(V,W),be=A.hash||"";G.params=u(d(G.params));const p=cI(s,Ae({},A,{hash:qI(be),path:G.path})),v=i.createHref(p);return Ae({fullPath:p,hash:be,query:s===Cp?JI(A.query):A.query||{}},G,{redirectedFrom:void 0,href:v})}function C(A){return typeof A=="string"?lu(n,A,l.value.path):Ae({},A)}function I(A,W){if(c!==A)return tr(8,{from:W,to:A})}function b(A){return X(A)}function L(A){return b(Ae(C(A),{replace:!0}))}function M(A){const W=A.matched[A.matched.length-1];if(W&&W.redirect){const{redirect:V}=W;let G=typeof V=="function"?V(A):V;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=C(G):{path:G},G.params={}),Ae({query:A.query,hash:A.hash,params:"path"in G?{}:A.params},G)}}function X(A,W){const V=c=w(A),G=l.value,be=A.state,p=A.force,v=A.replace===!0,E=M(V);if(E)return X(Ae(C(E),{state:typeof E=="object"?Ae({},be,E.state):be,force:p,replace:v}),W||V);const T=V;T.redirectedFrom=W;let R;return!p&&uI(s,G,V)&&(R=tr(16,{to:T,from:G}),Zt(G,G,!0,!1)),(R?Promise.resolve(R):z(T,G)).catch(N=>Wn(N)?Wn(N,2)?N:Sn(N):ve(N,T,G)).then(N=>{if(N){if(Wn(N,2))return X(Ae({replace:v},C(N.to),{state:typeof N.to=="object"?Ae({},be,N.to.state):be,force:p}),W||T)}else N=F(T,G,!0,v,be);return ce(T,G,N),N})}function k(A,W){const V=I(A,W);return V?Promise.reject(V):Promise.resolve()}function P(A){const W=cs.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(A):A()}function z(A,W){let V;const[G,be,p]=a1(A,W);V=cu(G.reverse(),"beforeRouteLeave",A,W);for(const E of G)E.leaveGuards.forEach(T=>{V.push(ys(T,A,W))});const v=k.bind(null,A,W);return V.push(v),Oe(V).then(()=>{V=[];for(const E of r.list())V.push(ys(E,A,W));return V.push(v),Oe(V)}).then(()=>{V=cu(be,"beforeRouteUpdate",A,W);for(const E of be)E.updateGuards.forEach(T=>{V.push(ys(T,A,W))});return V.push(v),Oe(V)}).then(()=>{V=[];for(const E of p)if(E.beforeEnter)if(yn(E.beforeEnter))for(const T of E.beforeEnter)V.push(ys(T,A,W));else V.push(ys(E.beforeEnter,A,W));return V.push(v),Oe(V)}).then(()=>(A.matched.forEach(E=>E.enterCallbacks={}),V=cu(p,"beforeRouteEnter",A,W),V.push(v),Oe(V))).then(()=>{V=[];for(const E of o.list())V.push(ys(E,A,W));return V.push(v),Oe(V)}).catch(E=>Wn(E,8)?E:Promise.reject(E))}function ce(A,W,V){a.list().forEach(G=>P(()=>G(A,W,V)))}function F(A,W,V,G,be){const p=I(A,W);if(p)return p;const v=W===fs,E=ki?history.state:{};V&&(G||v?i.replace(A.fullPath,Ae({scroll:v&&E&&E.scroll},be)):i.push(A.fullPath,be)),l.value=A,Zt(A,W,V,v),Sn()}let se;function He(){se||(se=i.listen((A,W,V)=>{if(!Bs.listening)return;const G=w(A),be=M(G);if(be){X(Ae(be,{replace:!0}),G).catch(so);return}c=G;const p=l.value;ki&&yI(gp(p.fullPath,V.delta),cc()),z(G,p).catch(v=>Wn(v,12)?v:Wn(v,2)?(X(v.to,G).then(E=>{Wn(E,20)&&!V.delta&&V.type===To.pop&&i.go(-1,!1)}).catch(so),Promise.reject()):(V.delta&&i.go(-V.delta,!1),ve(v,G,p))).then(v=>{v=v||F(G,p,!1),v&&(V.delta&&!Wn(v,8)?i.go(-V.delta,!1):V.type===To.pop&&Wn(v,20)&&i.go(-1,!1)),ce(G,p,v)}).catch(so)}))}let Mt=Lr(),Le=Lr(),me;function ve(A,W,V){Sn(A);const G=Le.list();return G.length?G.forEach(be=>be(A,W,V)):console.error(A),Promise.reject(A)}function Ht(){return me&&l.value!==fs?Promise.resolve():new Promise((A,W)=>{Mt.add([A,W])})}function Sn(A){return me||(me=!A,He(),Mt.list().forEach(([W,V])=>A?V(A):W()),Mt.reset()),A}function Zt(A,W,V,G){const{scrollBehavior:be}=t;if(!ki||!be)return Promise.resolve();const p=!V&&_I(gp(A.fullPath,0))||(G||!V)&&history.state&&history.state.scroll||null;return pr().then(()=>be(A,W,p)).then(v=>v&&vI(v)).catch(v=>ve(v,A,W))}const Ze=A=>i.go(A);let In;const cs=new Set,Bs={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,hasRoute:y,getRoutes:m,resolve:w,options:t,push:b,replace:L,go:Ze,back:()=>Ze(-1),forward:()=>Ze(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Le.add,isReady:Ht,install(A){const W=this;A.component("RouterLink",n1),A.component("RouterView",$_),A.config.globalProperties.$router=W,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>Ke(l)}),ki&&!In&&l.value===fs&&(In=!0,b(i.location).catch(be=>{}));const V={};for(const be in fs)Object.defineProperty(V,be,{get:()=>l.value[be],enumerable:!0});A.provide($d,W),A.provide(V_,Fy(V)),A.provide(oh,l);const G=A.unmount;cs.add(A),A.unmount=function(){cs.delete(A),cs.size<1&&(c=fs,se&&se(),se=null,l.value=fs,In=!1,me=!1),G()}}};function Oe(A){return A.reduce((W,V)=>W.then(()=>P(V)),Promise.resolve())}return Bs}function a1(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>er(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>er(c,l))||i.push(l))}return[n,s,i]}const Yo=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n};function J(t,e){return n=>Object.keys(t).reduce((s,i)=>{const o=typeof t[i]=="object"&&t[i]!=null&&!Array.isArray(t[i])?t[i]:{type:t[i]};return n&&i in n?s[i]={...o,default:n[i]}:s[i]=o,e&&!s[i].source&&(s[i].source=e),s},{})}const Ge=J({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component"),Gt=typeof window<"u",Ud=Gt&&"IntersectionObserver"in window,l1=Gt&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function c1(t,e,n){const s=e.length-1;if(s<0)return t===void 0?n:t;for(let i=0;i<s;i++){if(t==null)return n;t=t[e[i]]}return t==null||t[e[s]]===void 0?n:t[e[s]]}function U_(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(s=>U_(t[s],e[s]))}function kp(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),c1(t,e.split("."),n))}function H_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,s)=>e+s)}function we(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function ah(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function Rp(t){return t&&"$el"in t?t.$el:t}const Np=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function j_(t){return Object.keys(t)}function uu(t,e){return e.every(n=>t.hasOwnProperty(n))}function u1(t,e,n){const s=Object.create(null),i=Object.create(null);for(const r in t)e.some(o=>o instanceof RegExp?o.test(r):o===r)&&!(n!=null&&n.some(o=>o===r))?s[r]=t[r]:i[r]=t[r];return[s,i]}function h1(t){return t==null?[]:Array.isArray(t)?t:[t]}function z_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function xp(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function Dp(t,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-t.length))+t}function d1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let s=0;for(;s<t.length;)n.push(t.substr(s,e)),s+=e;return n}function nn(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const s={};for(const i in t)s[i]=t[i];for(const i in e){const r=t[i],o=e[i];if(ah(r)&&ah(o)){s[i]=nn(r,o,n);continue}if(Array.isArray(r)&&Array.isArray(o)&&n){s[i]=n(r,o);continue}s[i]=o}return s}function W_(t){return t.map(e=>e.type===ot?W_(e.children):e).flat()}function si(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(si.cache.has(t))return si.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return si.cache.set(t,e),e}si.cache=new Map;function ro(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>ro(t,n)).flat(1);if(Array.isArray(e.children))return e.children.map(n=>ro(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return ro(t,e.component.subTree).flat(1)}return[]}function K_(t){const e=Wt({}),n=S(t);return mr(()=>{for(const s in n.value)e[s]=n.value[s]},{flush:"sync"}),Id(e)}function lh(t,e){return t.includes(e)}function Op(t,e){return e="on"+rs(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}const f1=["top","bottom"],g1=["start","end","left","right"];function p1(t,e){let[n,s]=t.split(" ");return s||(s=lh(f1,n)?"start":lh(g1,n)?"top":"center"),{side:Pp(n,e),align:Pp(s,e)}}function Pp(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}const Ti=2.4,Mp=.2126729,Lp=.7151522,Fp=.072175,m1=.55,v1=.58,y1=.57,_1=.62,xa=.03,Bp=1.45,w1=5e-4,E1=1.25,C1=1.25,Vp=.078,$p=12.82051282051282,Da=.06,Up=.001;function Hp(t,e){const n=(t.r/255)**Ti,s=(t.g/255)**Ti,i=(t.b/255)**Ti,r=(e.r/255)**Ti,o=(e.g/255)**Ti,a=(e.b/255)**Ti;let l=n*Mp+s*Lp+i*Fp,c=r*Mp+o*Lp+a*Fp;if(l<=xa&&(l+=(xa-l)**Bp),c<=xa&&(c+=(xa-c)**Bp),Math.abs(c-l)<w1)return 0;let u;if(c>l){const h=(c**m1-l**v1)*E1;u=h<Up?0:h<Vp?h-h*$p*Da:h-Da}else{const h=(c**_1-l**y1)*C1;u=h>-Up?0:h>-Vp?h-h*$p*Da:h+Da}return u*100}const gl=.20689655172413793,b1=t=>t>gl**3?Math.cbrt(t):t/(3*gl**2)+4/29,T1=t=>t>gl?t**3:3*gl**2*(t-4/29);function q_(t){const e=b1,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function G_(t){const e=T1,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const S1=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],I1=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,A1=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],k1=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function Y_(t){const e=Array(3),n=I1,s=S1;for(let i=0;i<3;++i)e[i]=Math.round(z_(n(s[i][0]*t[0]+s[i][1]*t[1]+s[i][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function Hd(t){let{r:e,g:n,b:s}=t;const i=[0,0,0],r=k1,o=A1;e=r(e/255),n=r(n/255),s=r(s/255);for(let a=0;a<3;++a)i[a]=o[a][0]*e+o[a][1]*n+o[a][2]*s;return i}function ch(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function R1(t){return ch(t)&&!/^((rgb|hsl)a?\()?var\(--/.test(t)}const jp=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,N1={rgb:(t,e,n,s)=>({r:t,g:e,b:n,a:s}),rgba:(t,e,n,s)=>({r:t,g:e,b:n,a:s}),hsl:(t,e,n,s)=>zp({h:t,s:e,l:n,a:s}),hsla:(t,e,n,s)=>zp({h:t,s:e,l:n,a:s}),hsv:(t,e,n,s)=>So({h:t,s:e,v:n,a:s}),hsva:(t,e,n,s)=>So({h:t,s:e,v:n,a:s})};function On(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&jp.test(t)){const{groups:e}=t.match(jp),{fn:n,values:s}=e,i=s.split(/,\s*/).map(r=>r.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(r)/100:parseFloat(r));return N1[n](...i)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),D1(e)}else if(typeof t=="object"){if(uu(t,["r","g","b"]))return t;if(uu(t,["h","s","l"]))return So(Q_(t));if(uu(t,["h","s","v"]))return So(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function So(t){const{h:e,s:n,v:s,a:i}=t,r=a=>{const l=(a+e/60)%6;return s-s*n*Math.max(Math.min(l,4-l,1),0)},o=[r(5),r(3),r(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:i}}function zp(t){return So(Q_(t))}function Q_(t){const{h:e,s:n,l:s,a:i}=t,r=s+n*Math.min(s,1-s),o=r===0?0:2-2*s/r;return{h:e,s:o,v:r,a:i}}function Oa(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function x1(t){let{r:e,g:n,b:s,a:i}=t;return`#${[Oa(e),Oa(n),Oa(s),i!==void 0?Oa(Math.round(i*255)):""].join("")}`}function D1(t){t=O1(t);let[e,n,s,i]=d1(t,2).map(r=>parseInt(r,16));return i=i===void 0?i:i/255,{r:e,g:n,b:s,a:i}}function O1(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=xp(xp(t,6),8,"F")),t}function P1(t,e){const n=q_(Hd(t));return n[0]=n[0]+e*10,Y_(G_(n))}function M1(t,e){const n=q_(Hd(t));return n[0]=n[0]-e*10,Y_(G_(n))}function L1(t){const e=On(t);return Hd(e)[1]}function X_(t){const e=Math.abs(Hp(On(0),On(t)));return Math.abs(Hp(On(16777215),On(t)))>Math.min(e,50)?"#fff":"#000"}const nr=Symbol.for("vuetify:defaults");function F1(t){return ze(t)}function jd(){const t=it(nr);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function uc(t,e){const n=jd(),s=ze(t),i=S(()=>{if(Ke(e==null?void 0:e.disabled))return n.value;const o=Ke(e==null?void 0:e.scoped),a=Ke(e==null?void 0:e.reset),l=Ke(e==null?void 0:e.root);if(s.value==null&&!(o||a||l))return n.value;let c=nn(s.value,{prev:n.value});if(o)return c;if(a||l){const u=Number(a||1/0);for(let h=0;h<=u&&!(!c||!("prev"in c));h++)c=c.prev;return c&&typeof l=="string"&&l in c&&(c=nn(nn(c,{prev:c}),c[l])),c}return c.prev?nn(c.prev,c):c});return on(nr,i),i}function B1(t,e){var n,s;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((s=t.props)==null?void 0:s[si(e)])<"u"}function V1(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:jd();const s=Cn("useDefaults");if(e=e??s.type.name??s.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const i=S(()=>{var l;return(l=n.value)==null?void 0:l[t._as??e]}),r=new Proxy(t,{get(l,c){var h,d,f,g;const u=Reflect.get(l,c);return c==="class"||c==="style"?[(h=i.value)==null?void 0:h[c],u].filter(m=>m!=null):typeof c=="string"&&!B1(s.vnode,c)?((d=i.value)==null?void 0:d[c])??((g=(f=n.value)==null?void 0:f.global)==null?void 0:g[c])??u:u}}),o=Re();mr(()=>{if(i.value){const l=Object.entries(i.value).filter(c=>{let[u]=c;return u.startsWith(u[0].toUpperCase())});o.value=l.length?Object.fromEntries(l):void 0}else o.value=void 0});function a(){const l=$1(nr,s);on(nr,S(()=>o.value?nn((l==null?void 0:l.value)??{},o.value):l==null?void 0:l.value))}return{props:r,provideSubDefaults:a}}function Qo(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=J(t.props??{},t.name)();const e=Object.keys(t.props);t.filterProps=function(s){return u1(s,e,["class","style"])},t.props._as=String,t.setup=function(s,i){const r=jd();if(!r.value)return t._setup(s,i);const{props:o,provideSubDefaults:a}=V1(s,s._as??t.name,r),l=t._setup(o,i);return a(),l}}return t}function Ie(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?Qo:Od)(e)}function hc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return Ie()({name:n??rs(an(t.replace(/__/g,"-"))),props:{tag:{type:String,default:e},...Ge()},setup(s,i){let{slots:r}=i;return()=>{var o;return jn(s.tag,{class:[t,s.class],style:s.style},(o=r.default)==null?void 0:o.call(r))}}})}function Cn(t,e){const n=Go();if(!n)throw new Error(`[Vuetify] ${t} ${e||"must be called from inside a setup function"}`);return n}function mi(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=Cn(t).type;return si((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let J_=0,Za=new WeakMap;function dc(){const t=Cn("getUid");if(Za.has(t))return Za.get(t);{const e=J_++;return Za.set(t,e),e}}dc.reset=()=>{J_=0,Za=new WeakMap};function $1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Cn("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}function Ye(t){const e=Cn("useRender");e.render=t}function zd(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=ze(),s=ze();if(Gt){const i=new ResizeObserver(r=>{t==null||t(r,i),r.length&&(e==="content"?s.value=r[0].contentRect:s.value=r[0].target.getBoundingClientRect())});Ms(()=>{i.disconnect()}),We(n,(r,o)=>{o&&(i.unobserve(Rp(o)),s.value=void 0),r&&i.observe(Rp(r))},{flush:"post"})}return{resizeRef:n,contentRect:tc(s)}}const pl=Symbol.for("vuetify:layout"),Z_=Symbol.for("vuetify:layout-item"),Wp=1e3,U1=J({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),e0=J({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function H1(){const t=it(pl);if(!t)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:t.getLayoutItem,mainRect:t.mainRect,mainStyles:t.mainStyles}}function t0(t){const e=it(pl);if(!e)throw new Error("[Vuetify] Could not find injected layout");const n=t.id??`layout-item-${dc()}`,s=Cn("useLayoutItem");on(Z_,{id:n});const i=Re(!1);s_(()=>i.value=!0),n_(()=>i.value=!1);const{layoutItemStyles:r,layoutItemScrimStyles:o}=e.register(s,{...t,active:S(()=>i.value?!1:t.active.value),id:n});return Ms(()=>e.unregister(n)),{layoutItemStyles:r,layoutRect:e.layoutRect,layoutItemScrimStyles:o}}const j1=(t,e,n,s)=>{let i={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:{...i}}];for(const o of t){const a=e.get(o),l=n.get(o),c=s.get(o);if(!a||!l||!c)continue;const u={...i,[a.value]:parseInt(i[a.value],10)+(c.value?parseInt(l.value,10):0)};r.push({id:o,layer:u}),i=u}return r};function z1(t){const e=it(pl,null),n=S(()=>e?e.rootZIndex.value-100:Wp),s=ze([]),i=Wt(new Map),r=Wt(new Map),o=Wt(new Map),a=Wt(new Map),l=Wt(new Map),{resizeRef:c,contentRect:u}=zd(),h=S(()=>{const M=new Map,X=t.overlaps??[];for(const k of X.filter(P=>P.includes(":"))){const[P,z]=k.split(":");if(!s.value.includes(P)||!s.value.includes(z))continue;const ce=i.get(P),F=i.get(z),se=r.get(P),He=r.get(z);!ce||!F||!se||!He||(M.set(z,{position:ce.value,amount:parseInt(se.value,10)}),M.set(P,{position:F.value,amount:-parseInt(He.value,10)}))}return M}),d=S(()=>{const M=[...new Set([...o.values()].map(k=>k.value))].sort((k,P)=>k-P),X=[];for(const k of M){const P=s.value.filter(z=>{var ce;return((ce=o.get(z))==null?void 0:ce.value)===k});X.push(...P)}return j1(X,i,r,a)}),f=S(()=>!Array.from(l.values()).some(M=>M.value)),g=S(()=>d.value[d.value.length-1].layer),m=S(()=>({"--v-layout-left":we(g.value.left),"--v-layout-right":we(g.value.right),"--v-layout-top":we(g.value.top),"--v-layout-bottom":we(g.value.bottom),...f.value?void 0:{transition:"none"}})),y=S(()=>d.value.slice(1).map((M,X)=>{let{id:k}=M;const{layer:P}=d.value[X],z=r.get(k),ce=i.get(k);return{id:k,...P,size:Number(z.value),position:ce.value}})),w=M=>y.value.find(X=>X.id===M),C=Cn("createLayout"),I=Re(!1);vr(()=>{I.value=!0}),on(pl,{register:(M,X)=>{let{id:k,order:P,position:z,layoutSize:ce,elementSize:F,active:se,disableTransitions:He,absolute:Mt}=X;o.set(k,P),i.set(k,z),r.set(k,ce),a.set(k,se),He&&l.set(k,He);const me=ro(Z_,C==null?void 0:C.vnode).indexOf(M);me>-1?s.value.splice(me,0,k):s.value.push(k);const ve=S(()=>y.value.findIndex(Ze=>Ze.id===k)),Ht=S(()=>n.value+d.value.length*2-ve.value*2),Sn=S(()=>{const Ze=z.value==="left"||z.value==="right",In=z.value==="right",cs=z.value==="bottom",Bs={[z.value]:0,zIndex:Ht.value,transform:`translate${Ze?"X":"Y"}(${(se.value?0:-110)*(In||cs?-1:1)}%)`,position:Mt.value||n.value!==Wp?"absolute":"fixed",...f.value?void 0:{transition:"none"}};if(!I.value)return Bs;const Oe=y.value[ve.value];if(!Oe)throw new Error(`[Vuetify] Could not find layout item "${k}"`);const A=h.value.get(k);return A&&(Oe[A.position]+=A.amount),{...Bs,height:Ze?`calc(100% - ${Oe.top}px - ${Oe.bottom}px)`:F.value?`${F.value}px`:void 0,left:In?void 0:`${Oe.left}px`,right:In?`${Oe.right}px`:void 0,top:z.value!=="bottom"?`${Oe.top}px`:void 0,bottom:z.value!=="top"?`${Oe.bottom}px`:void 0,width:Ze?F.value?`${F.value}px`:void 0:`calc(100% - ${Oe.left}px - ${Oe.right}px)`}}),Zt=S(()=>({zIndex:Ht.value-1}));return{layoutItemStyles:Sn,layoutItemScrimStyles:Zt,zIndex:Ht}},unregister:M=>{o.delete(M),i.delete(M),r.delete(M),a.delete(M),l.delete(M),s.value=s.value.filter(X=>X!==M)},mainRect:g,mainStyles:m,getLayoutItem:w,items:y,layoutRect:u,rootZIndex:n});const b=S(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),L=S(()=>({zIndex:e?n.value:void 0,position:e?"relative":void 0,overflow:e?"hidden":void 0}));return{layoutClasses:b,layoutStyles:L,getLayoutItem:w,items:y,layoutRect:u,layoutRef:c}}const W1={badge:"Badge",open:"Open",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{ok:"OK",cancel:"Cancel",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},K1={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1};function n0(t,e){let n;function s(){n=_d(),n.run(()=>e.length?e(()=>{n==null||n.stop(),s()}):e())}We(t,i=>{i&&!n?s():i||(n==null||n.stop(),n=void 0)},{immediate:!0}),Iy(()=>{n==null||n.stop()})}function Xo(t,e,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:h=>h,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:h=>h;const r=Cn("useProxiedModel"),o=ze(t[e]!==void 0?t[e]:n),a=si(e),c=S(a!==e?()=>{var h,d,f,g;return t[e],!!(((h=r.vnode.props)!=null&&h.hasOwnProperty(e)||(d=r.vnode.props)!=null&&d.hasOwnProperty(a))&&((f=r.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${e}`)||(g=r.vnode.props)!=null&&g.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var h,d;return t[e],!!((h=r.vnode.props)!=null&&h.hasOwnProperty(e)&&((d=r.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${e}`)))});n0(()=>!c.value,()=>{We(()=>t[e],h=>{o.value=h})});const u=S({get(){const h=t[e];return s(c.value?h:o.value)},set(h){const d=i(h),f=de(c.value?t[e]:o.value);f===d||s(f)===h||(o.value=d,r==null||r.emit(`update:${e}`,d))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?t[e]:o.value}),u}const Kp="$vuetify.",qp=(t,e)=>t.replace(/\{(\d+)\}/g,(n,s)=>String(e[+s])),s0=(t,e,n)=>function(s){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];if(!s.startsWith(Kp))return qp(s,r);const a=s.replace(Kp,""),l=t.value&&n.value[t.value],c=e.value&&n.value[e.value];let u=kp(l,a,null);return u||(`${s}${t.value}`,u=kp(c,a,null)),u||(u=s),typeof u!="string"&&(u=s),qp(u,r)};function i0(t,e){return(n,s)=>new Intl.NumberFormat([t.value,e.value],s).format(n)}function hu(t,e,n){const s=Xo(t,e,t[e]??n.value);return s.value=t[e]??n.value,We(n,i=>{t[e]==null&&(s.value=n.value)}),s}function r0(t){return e=>{const n=hu(e,"locale",t.current),s=hu(e,"fallback",t.fallback),i=hu(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:s,messages:i,t:s0(n,s,i),n:i0(n,s),provide:r0({current:n,fallback:s,messages:i})}}}function q1(t){const e=Re((t==null?void 0:t.locale)??"en"),n=Re((t==null?void 0:t.fallback)??"en"),s=ze({en:W1,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:s,t:s0(e,n,s),n:i0(e,n),provide:r0({current:e,fallback:n,messages:s})}}const ml=Symbol.for("vuetify:locale");function G1(t){return t.name!=null}function Y1(t){const e=t!=null&&t.adapter&&G1(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:q1(t),n=X1(e,t);return{...e,...n}}function Q1(){const t=it(ml);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");return t}function X1(t,e){const n=ze((e==null?void 0:e.rtl)??K1),s=S(()=>n.value[t.current.value]??!1);return{isRtl:s,rtl:n,rtlClasses:S(()=>`v-locale--is-${s.value?"rtl":"ltr"}`)}}function _r(){const t=it(ml);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}const vl=Symbol.for("vuetify:theme"),bn=J({theme:String},"theme"),Fr={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function J1(){var n,s;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Fr;if(!t)return{...Fr,isDisabled:!0};const e={};for(const[i,r]of Object.entries(t.themes??{})){const o=r.dark||i==="dark"?(n=Fr.themes)==null?void 0:n.dark:(s=Fr.themes)==null?void 0:s.light;e[i]=nn(o,r)}return nn(Fr,{...t,themes:e})}function Z1(t){const e=J1(t),n=ze(e.defaultTheme),s=ze(e.themes),i=S(()=>{const u={};for(const[h,d]of Object.entries(s.value)){const f=u[h]={...d,colors:{...d.colors}};if(e.variations)for(const g of e.variations.colors){const m=f.colors[g];if(m)for(const y of["lighten","darken"]){const w=y==="lighten"?P1:M1;for(const C of H_(e.variations[y],1))f.colors[`${g}-${y}-${C}`]=x1(w(On(m),C))}}for(const g of Object.keys(f.colors)){if(/^on-[a-z]/.test(g)||f.colors[`on-${g}`])continue;const m=`on-${g}`,y=On(f.colors[g]);f.colors[m]=X_(y)}}return u}),r=S(()=>i.value[n.value]),o=S(()=>{const u=[];r.value.dark&&Hs(u,":root",["color-scheme: dark"]),Hs(u,":root",Gp(r.value));for(const[g,m]of Object.entries(i.value))Hs(u,`.v-theme--${g}`,[`color-scheme: ${m.dark?"dark":"normal"}`,...Gp(m)]);const h=[],d=[],f=new Set(Object.values(i.value).flatMap(g=>Object.keys(g.colors)));for(const g of f)/^on-[a-z]/.test(g)?Hs(d,`.${g}`,[`color: rgb(var(--v-theme-${g})) !important`]):(Hs(h,`.bg-${g}`,[`--v-theme-overlay-multiplier: var(--v-theme-${g}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${g})) !important`,`color: rgb(var(--v-theme-on-${g})) !important`]),Hs(d,`.text-${g}`,[`color: rgb(var(--v-theme-${g})) !important`]),Hs(d,`.border-${g}`,[`--v-border-color: var(--v-theme-${g})`]));return u.push(...h,...d),u.map((g,m)=>m===0?g:`    ${g}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function l(u){if(e.isDisabled)return;const h=u._context.provides.usehead;if(h)if(h.push){const f=h.push(a);Gt&&We(o,()=>{f.patch(a)})}else Gt?(h.addHeadObjs(S(a)),mr(()=>h.updateDOM())):h.addHeadObjs(a());else{let g=function(){if(typeof document<"u"&&!f){const m=document.createElement("style");m.type="text/css",m.id="vuetify-theme-stylesheet",e.cspNonce&&m.setAttribute("nonce",e.cspNonce),f=m,document.head.appendChild(f)}f&&(f.innerHTML=o.value)};var d=g;let f=Gt?document.getElementById("vuetify-theme-stylesheet"):null;Gt?We(o,g,{immediate:!0}):g()}}const c=S(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:e.isDisabled,name:n,themes:s,current:r,computedThemes:i,themeClasses:c,styles:o,global:{name:n,current:r}}}function Tn(t){Cn("provideTheme");const e=it(vl,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=S(()=>t.theme??e.name.value),s=S(()=>e.themes.value[n.value]),i=S(()=>e.isDisabled?void 0:`v-theme--${n.value}`),r={...e,name:n,current:s,themeClasses:i};return on(vl,r),r}function Hs(t,e,n){t.push(`${e} {
`,...n.map(s=>`  ${s};
`),`}
`)}function Gp(t){const e=t.dark?2:1,n=t.dark?1:2,s=[];for(const[i,r]of Object.entries(t.colors)){const o=On(r);s.push(`--v-theme-${i}: ${o.r},${o.g},${o.b}`),i.startsWith("on-")||s.push(`--v-theme-${i}-overlay-multiplier: ${L1(r)>.18?e:n}`)}for(const[i,r]of Object.entries(t.variables)){const o=typeof r=="string"&&r.startsWith("#")?On(r):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;s.push(`--v-${i}: ${a??r}`)}return s}const eA=J({...Ge(),...U1({fullHeight:!0}),...bn()},"VApp"),tA=Ie()({name:"VApp",props:eA(),setup(t,e){let{slots:n}=e;const s=Tn(t),{layoutClasses:i,getLayoutItem:r,items:o,layoutRef:a}=z1(t),{rtlClasses:l}=_r();return Ye(()=>{var c;return _("div",{ref:a,class:["v-application",s.themeClasses.value,i.value,l.value,t.class],style:[t.style]},[_("div",{class:"v-application__wrap"},[(c=n.default)==null?void 0:c.call(n)])])}),{getLayoutItem:r,items:o,theme:s}}});const Pt=J({tag:{type:String,default:"div"}},"tag"),nA=J({text:String,...Ge(),...Pt()},"VToolbarTitle"),sA=Ie()({name:"VToolbarTitle",props:nA(),setup(t,e){let{slots:n}=e;return Ye(()=>{const s=!!(n.default||n.text||t.text);return _(t.tag,{class:["v-toolbar-title",t.class],style:t.style},{default:()=>{var i;return[s&&_("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():t.text,(i=n.default)==null?void 0:i.call(n)])]}})}),{}}}),iA=J({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function Jt(t,e,n){return Ie()({name:t,props:iA({mode:n,origin:e}),setup(s,i){let{slots:r}=i;const o={onBeforeEnter(a){s.origin&&(a.style.transformOrigin=s.origin)},onLeave(a){if(s.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:u,offsetHeight:h}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${l}px`,a.style.left=`${c}px`,a.style.width=`${u}px`,a.style.height=`${h}px`}s.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(s.leaveAbsolute&&(a!=null&&a._transitionInitialStyles)){const{position:l,top:c,left:u,width:h,height:d}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=l||"",a.style.top=c||"",a.style.left=u||"",a.style.width=h||"",a.style.height=d||""}}};return()=>{const a=s.group?XS:yr;return jn(a,{name:s.disabled?"":t,css:!s.disabled,...s.group?void 0:{mode:s.mode},...s.disabled?{}:o},r.default)}}})}function o0(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return Ie()({name:t,props:{mode:{type:String,default:n},disabled:Boolean},setup(s,i){let{slots:r}=i;return()=>jn(yr,{name:s.disabled?"":t,css:!s.disabled,...s.disabled?{}:e},r.default)}})}function a0(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",s=an(`offset-${n}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[n]:o.style[n]}},onEnter(o){const a=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const l=`${o[s]}px`;o.style[n]="0",o.offsetHeight,o.style.transition=a.transition,t&&o._parent&&o._parent.classList.add(t),requestAnimationFrame(()=>{o.style[n]=l})},onAfterEnter:r,onEnterCancelled:r,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[n]:o.style[n]},o.style.overflow="hidden",o.style[n]=`${o[s]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[n]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(o){t&&o._parent&&o._parent.classList.remove(t),r(o)}function r(o){const a=o._initialStyle[n];o.style.overflow=o._initialStyle.overflow,a!=null&&(o.style[n]=a),delete o._initialStyle}}Jt("fab-transition","center center","out-in");Jt("dialog-bottom-transition");Jt("dialog-top-transition");Jt("fade-transition");Jt("scale-transition");Jt("scroll-x-transition");Jt("scroll-x-reverse-transition");Jt("scroll-y-transition");Jt("scroll-y-reverse-transition");const rA=Jt("slide-x-transition");Jt("slide-x-reverse-transition");Jt("slide-y-transition");Jt("slide-y-reverse-transition");const el=o0("expand-transition",a0());o0("expand-x-transition",a0("",!0));const oA=J({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Zn=Ie(!1)({name:"VDefaultsProvider",props:oA(),setup(t,e){let{slots:n}=e;const{defaults:s,disabled:i,reset:r,root:o,scoped:a}=Id(t);return uc(s,{reset:r,root:o,scoped:a,disabled:i}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}});const Wd=J({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Kd(t){return{dimensionStyles:S(()=>({height:we(t.height),maxHeight:we(t.maxHeight),maxWidth:we(t.maxWidth),minHeight:we(t.minHeight),minWidth:we(t.minWidth),width:we(t.width)}))}}function aA(t){return{aspectStyles:S(()=>{const e=Number(t.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const l0=J({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...Ge(),...Wd()},"VResponsive"),Yp=Ie()({name:"VResponsive",props:l0(),setup(t,e){let{slots:n}=e;const{aspectStyles:s}=aA(t),{dimensionStyles:i}=Kd(t);return Ye(()=>{var r;return _("div",{class:["v-responsive",{"v-responsive--inline":t.inline},t.class],style:[i.value,t.style]},[_("div",{class:"v-responsive__sizer",style:s.value},null),(r=n.additional)==null?void 0:r.call(n),n.default&&_("div",{class:["v-responsive__content",t.contentClass]},[n.default()])])}),{}}}),lA=J({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:t=>t!==!0}},"transition"),Gr=(t,e)=>{let{slots:n}=e;const{transition:s,disabled:i,...r}=t,{component:o=yr,...a}=typeof s=="object"?s:{};return jn(o,Fn(typeof s=="string"?{name:i?"":s}:a,r,{disabled:i}),n)};function cA(t,e){if(!Ud)return;const n=e.modifiers||{},s=e.value,{handler:i,options:r}=typeof s=="object"?s:{handler:s,options:{}},o=new IntersectionObserver(function(){var h;let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const c=(h=t._observe)==null?void 0:h[e.instance.$.uid];if(!c)return;const u=a.some(d=>d.isIntersecting);i&&(!n.quiet||c.init)&&(!n.once||u||c.init)&&i(u,a,l),u&&n.once?c0(t,e):c.init=!0},r);t._observe=Object(t._observe),t._observe[e.instance.$.uid]={init:!1,observer:o},o.observe(t)}function c0(t,e){var s;const n=(s=t._observe)==null?void 0:s[e.instance.$.uid];n&&(n.observer.unobserve(t),delete t._observe[e.instance.$.uid])}const uA={mounted:cA,unmounted:c0},hA=uA,dA=J({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...l0(),...Ge(),...lA()},"VImg"),ws=Ie()({name:"VImg",directives:{intersect:hA},props:dA(),emits:{loadstart:t=>!0,load:t=>!0,error:t=>!0},setup(t,e){let{emit:n,slots:s}=e;const i=Re(""),r=ze(),o=Re(t.eager?"loading":"idle"),a=Re(),l=Re(),c=S(()=>t.src&&typeof t.src=="object"?{src:t.src.src,srcset:t.srcset||t.src.srcset,lazySrc:t.lazySrc||t.src.lazySrc,aspect:Number(t.aspectRatio||t.src.aspect||0)}:{src:t.src,srcset:t.srcset,lazySrc:t.lazySrc,aspect:Number(t.aspectRatio||0)}),u=S(()=>c.value.aspect||a.value/l.value||0);We(()=>t.src,()=>{h(o.value!=="idle")}),We(u,(k,P)=>{!k&&P&&r.value&&y(r.value)}),r_(()=>h());function h(k){if(!(t.eager&&k)&&!(Ud&&!k&&!t.eager)){if(o.value="loading",c.value.lazySrc){const P=new Image;P.src=c.value.lazySrc,y(P,null)}c.value.src&&pr(()=>{var P,z;if(n("loadstart",((P=r.value)==null?void 0:P.currentSrc)||c.value.src),(z=r.value)!=null&&z.complete){if(r.value.naturalWidth||f(),o.value==="error")return;u.value||y(r.value,null),d()}else u.value||y(r.value),g()})}}function d(){var k;g(),o.value="loaded",n("load",((k=r.value)==null?void 0:k.currentSrc)||c.value.src)}function f(){var k;o.value="error",n("error",((k=r.value)==null?void 0:k.currentSrc)||c.value.src)}function g(){const k=r.value;k&&(i.value=k.currentSrc||k.src)}let m=-1;function y(k){let P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const z=()=>{clearTimeout(m);const{naturalHeight:ce,naturalWidth:F}=k;ce||F?(a.value=F,l.value=ce):!k.complete&&o.value==="loading"&&P!=null?m=window.setTimeout(z,P):(k.currentSrc.endsWith(".svg")||k.currentSrc.startsWith("data:image/svg+xml"))&&(a.value=1,l.value=1)};z()}const w=S(()=>({"v-img__img--cover":t.cover,"v-img__img--contain":!t.cover})),C=()=>{var z;if(!c.value.src||o.value==="idle")return null;const k=_("img",{class:["v-img__img",w.value],src:c.value.src,srcset:c.value.srcset,alt:t.alt,sizes:t.sizes,ref:r,onLoad:d,onError:f},null),P=(z=s.sources)==null?void 0:z.call(s);return _(Gr,{transition:t.transition,appear:!0},{default:()=>[Xi(P?_("picture",{class:"v-img__picture"},[P,k]):k,[[S_,o.value==="loaded"]])]})},I=()=>_(Gr,{transition:t.transition},{default:()=>[c.value.lazySrc&&o.value!=="loaded"&&_("img",{class:["v-img__img","v-img__img--preload",w.value],src:c.value.lazySrc,alt:t.alt},null)]}),b=()=>s.placeholder?_(Gr,{transition:t.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!s.error)&&_("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,L=()=>s.error?_(Gr,{transition:t.transition,appear:!0},{default:()=>[o.value==="error"&&_("div",{class:"v-img__error"},[s.error()])]}):null,M=()=>t.gradient?_("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${t.gradient})`}},null):null,X=Re(!1);{const k=We(u,P=>{P&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{X.value=!0})}),k())})}return Ye(()=>{const[k]=Yp.filterProps(t);return Xi(_(Yp,Fn({class:["v-img",{"v-img--booting":!X.value},t.class],style:[{width:we(t.width==="auto"?a.value:t.width)},t.style]},k,{aspectRatio:u.value,"aria-label":t.alt,role:t.alt?"img":void 0}),{additional:()=>_(ot,null,[_(C,null,null),_(I,null,null),_(M,null,null),_(b,null,null),_(L,null,null)]),default:s.default}),[[ic("intersect"),{handler:h,options:t.options},null,{once:!0}]])}),{currentSrc:i,image:r,state:o,naturalWidth:a,naturalHeight:l}}}),Jo=J({border:[Boolean,Number,String]},"border");function Zo(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:mi();return{borderClasses:S(()=>{const s=je(t)?t.value:t.border,i=[];if(s===!0||s==="")i.push(`${e}--border`);else if(typeof s=="string"||s===0)for(const r of String(s).split(" "))i.push(`border-${r}`);return i})}}function qd(t){return K_(()=>{const e=[],n={};if(t.value.background)if(ch(t.value.background)){if(n.backgroundColor=t.value.background,!t.value.text&&R1(t.value.background)){const s=On(t.value.background);if(s.a==null||s.a===1){const i=X_(s);n.color=i,n.caretColor=i}}}else e.push(`bg-${t.value.background}`);return t.value.text&&(ch(t.value.text)?(n.color=t.value.text,n.caretColor=t.value.text):e.push(`text-${t.value.text}`)),{colorClasses:e,colorStyles:n}})}function yl(t,e){const n=S(()=>({text:je(t)?t.value:e?t[e]:null})),{colorClasses:s,colorStyles:i}=qd(n);return{textColorClasses:s,textColorStyles:i}}function _l(t,e){const n=S(()=>({background:je(t)?t.value:e?t[e]:null})),{colorClasses:s,colorStyles:i}=qd(n);return{backgroundColorClasses:s,backgroundColorStyles:i}}const ea=J({elevation:{type:[Number,String],validator(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function ta(t){return{elevationClasses:S(()=>{const n=je(t)?t.value:t.elevation,s=[];return n==null||s.push(`elevation-${n}`),s})}}const vi=J({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function yi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:mi();return{roundedClasses:S(()=>{const s=je(t)?t.value:t.rounded,i=[];if(s===!0||s==="")i.push(`${e}--rounded`);else if(typeof s=="string"||s===0)for(const r of String(s).split(" "))i.push(`rounded-${r}`);return i})}}const fA=[null,"prominent","default","comfortable","compact"],u0=J({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:t=>fA.includes(t)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Jo(),...Ge(),...ea(),...vi(),...Pt({tag:"header"}),...bn()},"VToolbar"),Qp=Ie()({name:"VToolbar",props:u0(),setup(t,e){var f;let{slots:n}=e;const{backgroundColorClasses:s,backgroundColorStyles:i}=_l(Ot(t,"color")),{borderClasses:r}=Zo(t),{elevationClasses:o}=ta(t),{roundedClasses:a}=yi(t),{themeClasses:l}=Tn(t),{rtlClasses:c}=_r(),u=Re(!!(t.extended||(f=n.extension)!=null&&f.call(n))),h=S(()=>parseInt(Number(t.height)+(t.density==="prominent"?Number(t.height):0)-(t.density==="comfortable"?8:0)-(t.density==="compact"?16:0),10)),d=S(()=>u.value?parseInt(Number(t.extensionHeight)+(t.density==="prominent"?Number(t.extensionHeight):0)-(t.density==="comfortable"?4:0)-(t.density==="compact"?8:0),10):0);return uc({VBtn:{variant:"text"}}),Ye(()=>{var w;const g=!!(t.title||n.title),m=!!(n.image||t.image),y=(w=n.extension)==null?void 0:w.call(n);return u.value=!!(t.extended||y),_(t.tag,{class:["v-toolbar",{"v-toolbar--absolute":t.absolute,"v-toolbar--collapse":t.collapse,"v-toolbar--flat":t.flat,"v-toolbar--floating":t.floating,[`v-toolbar--density-${t.density}`]:!0},s.value,r.value,o.value,a.value,l.value,c.value,t.class],style:[i.value,t.style]},{default:()=>[m&&_("div",{key:"image",class:"v-toolbar__image"},[n.image?_(Zn,{key:"image-defaults",disabled:!t.image,defaults:{VImg:{cover:!0,src:t.image}}},n.image):_(ws,{key:"image-img",cover:!0,src:t.image},null)]),_(Zn,{defaults:{VTabs:{height:we(h.value)}}},{default:()=>{var C,I,b;return[_("div",{class:"v-toolbar__content",style:{height:we(h.value)}},[n.prepend&&_("div",{class:"v-toolbar__prepend"},[(C=n.prepend)==null?void 0:C.call(n)]),g&&_(sA,{key:"title",text:t.title},{text:n.title}),(I=n.default)==null?void 0:I.call(n),n.append&&_("div",{class:"v-toolbar__append"},[(b=n.append)==null?void 0:b.call(n)])])]}}),_(Zn,{defaults:{VTabs:{height:we(d.value)}}},{default:()=>[_(el,null,{default:()=>[u.value&&_("div",{class:"v-toolbar__extension",style:{height:we(d.value)}},[y])]})]})]})}),{contentHeight:h,extensionHeight:d}}}),gA=J({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function pA(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:n}=e;let s=0;const i=ze(null),r=Re(0),o=Re(0),a=Re(0),l=Re(!1),c=Re(!1),u=S(()=>Number(t.scrollThreshold)),h=S(()=>z_((u.value-r.value)/u.value||0)),d=()=>{const f=i.value;!f||n&&!n.value||(s=r.value,r.value="window"in f?f.pageYOffset:f.scrollTop,c.value=r.value<s,a.value=Math.abs(r.value-u.value))};return We(c,()=>{o.value=o.value||r.value}),We(l,()=>{o.value=0}),vr(()=>{We(()=>t.scrollTarget,f=>{var m;const g=f?document.querySelector(f):window;g&&g!==i.value&&((m=i.value)==null||m.removeEventListener("scroll",d),i.value=g,i.value.addEventListener("scroll",d,{passive:!0}))},{immediate:!0})}),Ms(()=>{var f;(f=i.value)==null||f.removeEventListener("scroll",d)}),n&&We(n,d,{immediate:!0}),{scrollThreshold:u,currentScroll:r,currentThreshold:a,isScrollActive:l,scrollRatio:h,isScrollingUp:c,savedScroll:o}}function Gd(){const t=Re(!1);return vr(()=>{window.requestAnimationFrame(()=>{t.value=!0})}),{ssrBootStyles:S(()=>t.value?void 0:{transition:"none !important"}),isBooted:tc(t)}}const mA=J({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:t=>["top","bottom"].includes(t)},...u0(),...e0(),...gA(),height:{type:[Number,String],default:64}},"VAppBar"),vA=Ie()({name:"VAppBar",props:mA(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const s=ze(),i=Xo(t,"modelValue"),r=S(()=>{var C;const w=new Set(((C=t.scrollBehavior)==null?void 0:C.split(" "))??[]);return{hide:w.has("hide"),inverted:w.has("inverted"),collapse:w.has("collapse"),elevate:w.has("elevate"),fadeImage:w.has("fade-image")}}),o=S(()=>{const w=r.value;return w.hide||w.inverted||w.collapse||w.elevate||w.fadeImage||!i.value}),{currentScroll:a,scrollThreshold:l,isScrollingUp:c,scrollRatio:u}=pA(t,{canScroll:o}),h=S(()=>t.collapse||r.value.collapse&&(r.value.inverted?u.value>0:u.value===0)),d=S(()=>t.flat||r.value.elevate&&(r.value.inverted?a.value>0:a.value===0)),f=S(()=>r.value.fadeImage?r.value.inverted?1-u.value:u.value:void 0),g=S(()=>{var I,b;if(r.value.hide&&r.value.inverted)return 0;const w=((I=s.value)==null?void 0:I.contentHeight)??0,C=((b=s.value)==null?void 0:b.extensionHeight)??0;return w+C});n0(S(()=>!!t.scrollBehavior),()=>{mr(()=>{r.value.hide?r.value.inverted?i.value=a.value>l.value:i.value=c.value||a.value<l.value:i.value=!0})});const{ssrBootStyles:m}=Gd(),{layoutItemStyles:y}=t0({id:t.name,order:S(()=>parseInt(t.order,10)),position:Ot(t,"location"),layoutSize:g,elementSize:Re(void 0),active:i,absolute:Ot(t,"absolute")});return Ye(()=>{const[w]=Qp.filterProps(t);return _(Qp,Fn({ref:s,class:["v-app-bar",{"v-app-bar--bottom":t.location==="bottom"},t.class],style:[{...y.value,"--v-toolbar-image-opacity":f.value,height:void 0,...m.value},t.style]},w,{collapse:h.value,flat:d.value}),n)}),{}}});const yA=[null,"default","comfortable","compact"],na=J({density:{type:String,default:"default",validator:t=>yA.includes(t)}},"density");function fc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:mi();return{densityClasses:S(()=>`${e}--density-${t.density}`)}}const _A=["elevated","flat","tonal","outlined","text","plain"];function Yd(t,e){return _(ot,null,[t&&_("span",{key:"overlay",class:`${e}__overlay`},null),_("span",{key:"underlay",class:`${e}__underlay`},null)])}const gc=J({color:String,variant:{type:String,default:"elevated",validator:t=>_A.includes(t)}},"variant");function Qd(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:mi();const n=S(()=>{const{variant:r}=Ke(t);return`${e}--variant-${r}`}),{colorClasses:s,colorStyles:i}=qd(S(()=>{const{variant:r,color:o}=Ke(t);return{[["elevated","flat"].includes(r)?"background":"text"]:o}}));return{colorClasses:s,colorStyles:i,variantClasses:n}}const h0=J({divided:Boolean,...Jo(),...Ge(),...na(),...ea(),...vi(),...Pt(),...bn(),...gc()},"VBtnGroup"),Xp=Ie()({name:"VBtnGroup",props:h0(),setup(t,e){let{slots:n}=e;const{themeClasses:s}=Tn(t),{densityClasses:i}=fc(t),{borderClasses:r}=Zo(t),{elevationClasses:o}=ta(t),{roundedClasses:a}=yi(t);uc({VBtn:{height:"auto",color:Ot(t,"color"),density:Ot(t,"density"),flat:!0,variant:Ot(t,"variant")}}),Ye(()=>_(t.tag,{class:["v-btn-group",{"v-btn-group--divided":t.divided},s.value,r.value,i.value,o.value,a.value,t.class],style:t.style},n))}}),wA=J({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),d0=J({value:null,disabled:Boolean,selectedClass:String},"group-item");function f0(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const s=Cn("useGroupItem");if(!s)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=dc();on(Symbol.for(`${e.description}:id`),i);const r=it(e,null);if(!r){if(!n)return r;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const o=Ot(t,"value"),a=S(()=>!!(r.disabled.value||t.disabled));r.register({id:i,value:o,disabled:a},s),Ms(()=>{r.unregister(i)});const l=S(()=>r.isSelected(i)),c=S(()=>l.value&&[r.selectedClass.value,t.selectedClass]);return We(l,u=>{s.emit("group:selected",{value:u})}),{id:i,isSelected:l,toggle:()=>r.select(i,!l.value),select:u=>r.select(i,u),selectedClass:c,value:o,disabled:a,group:r}}function g0(t,e){let n=!1;const s=Wt([]),i=Xo(t,"modelValue",[],d=>d==null?[]:p0(s,h1(d)),d=>{const f=CA(s,d);return t.multiple?f:f[0]}),r=Cn("useGroup");function o(d,f){const g=d,m=Symbol.for(`${e.description}:id`),w=ro(m,r==null?void 0:r.vnode).indexOf(f);w>-1?s.splice(w,0,g):s.push(g)}function a(d){if(n)return;l();const f=s.findIndex(g=>g.id===d);s.splice(f,1)}function l(){const d=s.find(f=>!f.disabled);d&&t.mandatory==="force"&&!i.value.length&&(i.value=[d.id])}vr(()=>{l()}),Ms(()=>{n=!0});function c(d,f){const g=s.find(m=>m.id===d);if(!(f&&(g!=null&&g.disabled)))if(t.multiple){const m=i.value.slice(),y=m.findIndex(C=>C===d),w=~y;if(f=f??!w,w&&t.mandatory&&m.length<=1||!w&&t.max!=null&&m.length+1>t.max)return;y<0&&f?m.push(d):y>=0&&!f&&m.splice(y,1),i.value=m}else{const m=i.value.includes(d);if(t.mandatory&&m)return;i.value=f??!m?[d]:[]}}function u(d){if(t.multiple,i.value.length){const f=i.value[0],g=s.findIndex(w=>w.id===f);let m=(g+d)%s.length,y=s[m];for(;y.disabled&&m!==g;)m=(m+d)%s.length,y=s[m];if(y.disabled)return;i.value=[s[m].id]}else{const f=s.find(g=>!g.disabled);f&&(i.value=[f.id])}}const h={register:o,unregister:a,selected:i,select:c,disabled:Ot(t,"disabled"),prev:()=>u(s.length-1),next:()=>u(1),isSelected:d=>i.value.includes(d),selectedClass:S(()=>t.selectedClass),items:S(()=>s),getItemIndex:d=>EA(s,d)};return on(e,h),h}function EA(t,e){const n=p0(t,[e]);return n.length?t.findIndex(s=>s.id===n[0]):-1}function p0(t,e){const n=[];return e.forEach(s=>{const i=t.find(o=>U_(s,o.value)),r=t[s];(i==null?void 0:i.value)!=null?n.push(i.id):r!=null&&n.push(r.id)}),n}function CA(t,e){const n=[];return e.forEach(s=>{const i=t.findIndex(r=>r.id===s);if(~i){const r=t[i];n.push(r.value!=null?r.value:i)}}),n}const m0=Symbol.for("vuetify:v-btn-toggle"),bA=J({...h0(),...wA()},"VBtnToggle");Ie()({name:"VBtnToggle",props:bA(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{isSelected:s,next:i,prev:r,select:o,selected:a}=g0(t,m0);return Ye(()=>{const[l]=Xp.filterProps(t);return _(Xp,Fn({class:["v-btn-toggle",t.class]},l,{style:t.style}),{default:()=>{var c;return[(c=n.default)==null?void 0:c.call(n,{isSelected:s,next:i,prev:r,select:o,selected:a})]}})}),{next:i,prev:r,select:o}}});const TA={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar"},SA={component:t=>jn(y0,{...t,class:"mdi"})},ts=[String,Function,Object,Array],uh=Symbol.for("vuetify:icons"),pc=J({icon:{type:ts},tag:{type:String,required:!0}},"icon"),Jp=Ie()({name:"VComponentIcon",props:pc(),setup(t,e){let{slots:n}=e;return()=>{const s=t.icon;return _(t.tag,null,{default:()=>{var i;return[t.icon?_(s,null,null):(i=n.default)==null?void 0:i.call(n)]}})}}}),v0=Qo({name:"VSvgIcon",inheritAttrs:!1,props:pc(),setup(t,e){let{attrs:n}=e;return()=>_(t.tag,Fn(n,{style:null}),{default:()=>[_("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(s=>Array.isArray(s)?_("path",{d:s[0],"fill-opacity":s[1]},null):_("path",{d:s},null)):_("path",{d:t.icon},null)])]})}});Qo({name:"VLigatureIcon",props:pc(),setup(t){return()=>_(t.tag,null,{default:()=>[t.icon]})}});const y0=Qo({name:"VClassIcon",props:pc(),setup(t){return()=>_(t.tag,{class:t.icon},null)}}),IA={svg:{component:v0},class:{component:y0}};function AA(t){return nn({defaultSet:"mdi",sets:{...IA,mdi:SA},aliases:{...TA,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"}},t)}const kA=t=>{const e=it(uh);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:S(()=>{var l;const s=Ke(t);if(!s)return{component:Jp};let i=s;if(typeof i=="string"&&(i=i.trim(),i.startsWith("$")&&(i=(l=e.aliases)==null?void 0:l[i.slice(1)])),!i)throw new Error(`Could not find aliased icon "${s}"`);if(Array.isArray(i))return{component:v0,icon:i};if(typeof i!="string")return{component:Jp,icon:i};const r=Object.keys(e.sets).find(c=>typeof i=="string"&&i.startsWith(`${c}:`)),o=r?i.slice(r.length+1):i;return{component:e.sets[r??e.defaultSet].component,icon:o}})}},RA=["x-small","small","default","large","x-large"],mc=J({size:{type:[String,Number],default:"default"}},"size");function vc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:mi();return K_(()=>{let n,s;return lh(RA,t.size)?n=`${e}--size-${t.size}`:t.size&&(s={width:we(t.size),height:we(t.size)}),{sizeClasses:n,sizeStyles:s}})}const NA=J({color:String,start:Boolean,end:Boolean,icon:ts,...Ge(),...mc(),...Pt({tag:"i"}),...bn()},"VIcon"),Vi=Ie()({name:"VIcon",props:NA(),setup(t,e){let{attrs:n,slots:s}=e;const i=ze(),{themeClasses:r}=Tn(t),{iconData:o}=kA(S(()=>i.value||t.icon)),{sizeClasses:a}=vc(t),{textColorClasses:l,textColorStyles:c}=yl(Ot(t,"color"));return Ye(()=>{var h,d;const u=(h=s.default)==null?void 0:h.call(s);return u&&(i.value=(d=W_(u).filter(f=>f.type===qo&&f.children&&typeof f.children=="string")[0])==null?void 0:d.children),_(o.value.component,{tag:t.tag,icon:o.value.icon,class:["v-icon","notranslate",r.value,a.value,l.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":t.start,"v-icon--end":t.end},t.class],style:[a.value?void 0:{fontSize:we(t.size),height:we(t.size),width:we(t.size)},c.value,t.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[u]})}),{}}});function _0(t,e){const n=ze(),s=Re(!1);if(Ud){const i=new IntersectionObserver(r=>{t==null||t(r,i),s.value=!!r.find(o=>o.isIntersecting)},e);Ms(()=>{i.disconnect()}),We(n,(r,o)=>{o&&(i.unobserve(o),s.value=!1),r&&i.observe(r)},{flush:"post"})}return{intersectionRef:n,isIntersecting:s}}const xA=J({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...Ge(),...mc(),...Pt({tag:"div"}),...bn()},"VProgressCircular"),DA=Ie()({name:"VProgressCircular",props:xA(),setup(t,e){let{slots:n}=e;const s=20,i=2*Math.PI*s,r=ze(),{themeClasses:o}=Tn(t),{sizeClasses:a,sizeStyles:l}=vc(t),{textColorClasses:c,textColorStyles:u}=yl(Ot(t,"color")),{textColorClasses:h,textColorStyles:d}=yl(Ot(t,"bgColor")),{intersectionRef:f,isIntersecting:g}=_0(),{resizeRef:m,contentRect:y}=zd(),w=S(()=>Math.max(0,Math.min(100,parseFloat(t.modelValue)))),C=S(()=>Number(t.width)),I=S(()=>l.value?Number(t.size):y.value?y.value.width:Math.max(C.value,32)),b=S(()=>s/(1-C.value/I.value)*2),L=S(()=>C.value/I.value*b.value),M=S(()=>we((100-w.value)/100*i));return mr(()=>{f.value=r.value,m.value=r.value}),Ye(()=>_(t.tag,{ref:r,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!t.indeterminate,"v-progress-circular--visible":g.value,"v-progress-circular--disable-shrink":t.indeterminate==="disable-shrink"},o.value,a.value,c.value,t.class],style:[l.value,u.value,t.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t.indeterminate?void 0:w.value},{default:()=>[_("svg",{style:{transform:`rotate(calc(-90deg + ${Number(t.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${b.value} ${b.value}`},[_("circle",{class:["v-progress-circular__underlay",h.value],style:d.value,fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":L.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),_("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":L.value,"stroke-dasharray":i,"stroke-dashoffset":M.value},null)]),n.default&&_("div",{class:"v-progress-circular__content"},[n.default({value:w.value})])]})),{}}});const Zp={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Xd=J({location:String},"location");function Jd(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:s}=_r();return{locationStyles:S(()=>{if(!t.location)return{};const{side:r,align:o}=p1(t.location.split(" ").length>1?t.location:`${t.location} center`,s.value);function a(c){return n?n(c):0}const l={};return r!=="center"&&(e?l[Zp[r]]=`calc(100% - ${a(r)}px)`:l[r]=0),o!=="center"?e?l[Zp[o]]=`calc(100% - ${a(o)}px)`:l[o]=0:(r==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),l})}}const OA=J({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...Ge(),...Xd({location:"top"}),...vi(),...Pt(),...bn()},"VProgressLinear"),PA=Ie()({name:"VProgressLinear",props:OA(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const s=Xo(t,"modelValue"),{isRtl:i,rtlClasses:r}=_r(),{themeClasses:o}=Tn(t),{locationStyles:a}=Jd(t),{textColorClasses:l,textColorStyles:c}=yl(t,"color"),{backgroundColorClasses:u,backgroundColorStyles:h}=_l(S(()=>t.bgColor||t.color)),{backgroundColorClasses:d,backgroundColorStyles:f}=_l(t,"color"),{roundedClasses:g}=yi(t),{intersectionRef:m,isIntersecting:y}=_0(),w=S(()=>parseInt(t.max,10)),C=S(()=>parseInt(t.height,10)),I=S(()=>parseFloat(t.bufferValue)/w.value*100),b=S(()=>parseFloat(s.value)/w.value*100),L=S(()=>i.value!==t.reverse),M=S(()=>t.indeterminate?"fade-transition":"slide-x-transition"),X=S(()=>t.bgOpacity==null?t.bgOpacity:parseFloat(t.bgOpacity));function k(P){if(!m.value)return;const{left:z,right:ce,width:F}=m.value.getBoundingClientRect(),se=L.value?F-P.clientX+(ce-F):P.clientX-z;s.value=Math.round(se/F*w.value)}return Ye(()=>_(t.tag,{ref:m,class:["v-progress-linear",{"v-progress-linear--absolute":t.absolute,"v-progress-linear--active":t.active&&y.value,"v-progress-linear--reverse":L.value,"v-progress-linear--rounded":t.rounded,"v-progress-linear--rounded-bar":t.roundedBar,"v-progress-linear--striped":t.striped},g.value,o.value,r.value,t.class],style:[{bottom:t.location==="bottom"?0:void 0,top:t.location==="top"?0:void 0,height:t.active?we(C.value):0,"--v-progress-linear-height":we(C.value),...a.value},t.style],role:"progressbar","aria-hidden":t.active?"false":"true","aria-valuemin":"0","aria-valuemax":t.max,"aria-valuenow":t.indeterminate?void 0:b.value,onClick:t.clickable&&k},{default:()=>[t.stream&&_("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...c.value,[L.value?"left":"right"]:we(-C.value),borderTop:`${we(C.value/2)} dotted`,opacity:X.value,top:`calc(50% - ${we(C.value/4)})`,width:we(100-I.value,"%"),"--v-progress-linear-stream-to":we(C.value*(L.value?1:-1))}},null),_("div",{class:["v-progress-linear__background",u.value],style:[h.value,{opacity:X.value,width:we(t.stream?I.value:100,"%")}]},null),_(yr,{name:M.value},{default:()=>[t.indeterminate?_("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(P=>_("div",{key:P,class:["v-progress-linear__indeterminate",P,d.value],style:f.value},null))]):_("div",{class:["v-progress-linear__determinate",d.value],style:[f.value,{width:we(b.value,"%")}]},null)]}),n.default&&_("div",{class:"v-progress-linear__content"},[n.default({value:b.value,buffer:I.value})])]})),{}}}),w0=J({loading:[Boolean,String]},"loader");function E0(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:mi();return{loaderClasses:S(()=>({[`${e}--loading`]:t.loading}))}}function MA(t,e){var s;let{slots:n}=e;return _("div",{class:`${t.name}__loader`},[((s=n.default)==null?void 0:s.call(n,{color:t.color,isActive:t.active}))||_(PA,{active:t.active,color:t.color,height:"2",indeterminate:!0},null)])}const LA=["static","relative","fixed","absolute","sticky"],C0=J({position:{type:String,validator:t=>LA.includes(t)}},"position");function b0(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:mi();return{positionClasses:S(()=>t.position?`${e}--${t.position}`:void 0)}}function T0(t,e){const n=$T("RouterLink"),s=S(()=>!!(t.href||t.to)),i=S(()=>(s==null?void 0:s.value)||Op(e,"click")||Op(t,"click"));if(typeof n=="string")return{isLink:s,isClickable:i,href:Ot(t,"href")};const r=t.to?n.useLink(t):void 0;return{isLink:s,isClickable:i,route:r==null?void 0:r.route,navigate:r==null?void 0:r.navigate,isActive:r&&S(()=>{var o,a;return t.exact?(o=r.isExactActive)==null?void 0:o.value:(a=r.isActive)==null?void 0:a.value}),href:S(()=>t.to?r==null?void 0:r.route.value.href:t.href)}}const S0=J({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function FA(t,e){We(()=>{var n;return(n=t.isActive)==null?void 0:n.value},n=>{t.isLink.value&&n&&e&&pr(()=>{e(!0)})},{immediate:!0})}const hh=Symbol("rippleStop"),BA=80;function em(t,e){t.style.transform=e,t.style.webkitTransform=e}function dh(t){return t.constructor.name==="TouchEvent"}function I0(t){return t.constructor.name==="KeyboardEvent"}const VA=function(t,e){var h;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,i=0;if(!I0(t)){const d=e.getBoundingClientRect(),f=dh(t)?t.touches[t.touches.length-1]:t;s=f.clientX-d.left,i=f.clientY-d.top}let r=0,o=.3;(h=e._ripple)!=null&&h.circle?(o=.15,r=e.clientWidth/2,r=n.center?r:r+Math.sqrt((s-r)**2+(i-r)**2)/4):r=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const a=`${(e.clientWidth-r*2)/2}px`,l=`${(e.clientHeight-r*2)/2}px`,c=n.center?a:`${s-r}px`,u=n.center?l:`${i-r}px`;return{radius:r,scale:o,x:c,y:u,centerX:a,centerY:l}},wl={show(t,e){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((f=e==null?void 0:e._ripple)!=null&&f.enabled))return;const s=document.createElement("span"),i=document.createElement("span");s.appendChild(i),s.className="v-ripple__container",n.class&&(s.className+=` ${n.class}`);const{radius:r,scale:o,x:a,y:l,centerX:c,centerY:u}=VA(t,e,n),h=`${r*2}px`;i.className="v-ripple__animation",i.style.width=h,i.style.height=h,e.appendChild(s);const d=window.getComputedStyle(e);d&&d.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),em(i,`translate(${a}, ${l}) scale3d(${o},${o},${o})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),em(i,`translate(${c}, ${u}) scale3d(1,1,1)`)},0)},hide(t){var r;if(!((r=t==null?void 0:t._ripple)!=null&&r.enabled))return;const e=t.getElementsByClassName("v-ripple__animation");if(e.length===0)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const s=performance.now()-Number(n.dataset.activated),i=Math.max(250-s,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var a;t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),((a=n.parentNode)==null?void 0:a.parentNode)===t&&t.removeChild(n.parentNode)},300)},i)}};function A0(t){return typeof t>"u"||!!t}function Io(t){const e={},n=t.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||t[hh])){if(t[hh]=!0,dh(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||I0(t),n._ripple.class&&(e.class=n._ripple.class),dh(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{wl.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{var s;(s=n==null?void 0:n._ripple)!=null&&s.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},BA)}else wl.show(t,n,e)}}function tm(t){t[hh]=!0}function Kt(t){const e=t.currentTarget;if(e!=null&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{Kt(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),wl.hide(e)}}function k0(t){const e=t.currentTarget;e!=null&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let Ao=!1;function R0(t){!Ao&&(t.keyCode===Np.enter||t.keyCode===Np.space)&&(Ao=!0,Io(t))}function N0(t){Ao=!1,Kt(t)}function x0(t){Ao&&(Ao=!1,Kt(t))}function D0(t,e,n){const{value:s,modifiers:i}=e,r=A0(s);if(r||wl.hide(t),t._ripple=t._ripple??{},t._ripple.enabled=r,t._ripple.centered=i.center,t._ripple.circle=i.circle,ah(s)&&s.class&&(t._ripple.class=s.class),r&&!n){if(i.stop){t.addEventListener("touchstart",tm,{passive:!0}),t.addEventListener("mousedown",tm);return}t.addEventListener("touchstart",Io,{passive:!0}),t.addEventListener("touchend",Kt,{passive:!0}),t.addEventListener("touchmove",k0,{passive:!0}),t.addEventListener("touchcancel",Kt),t.addEventListener("mousedown",Io),t.addEventListener("mouseup",Kt),t.addEventListener("mouseleave",Kt),t.addEventListener("keydown",R0),t.addEventListener("keyup",N0),t.addEventListener("blur",x0),t.addEventListener("dragstart",Kt,{passive:!0})}else!r&&n&&O0(t)}function O0(t){t.removeEventListener("mousedown",Io),t.removeEventListener("touchstart",Io),t.removeEventListener("touchend",Kt),t.removeEventListener("touchmove",k0),t.removeEventListener("touchcancel",Kt),t.removeEventListener("mouseup",Kt),t.removeEventListener("mouseleave",Kt),t.removeEventListener("keydown",R0),t.removeEventListener("keyup",N0),t.removeEventListener("dragstart",Kt),t.removeEventListener("blur",x0)}function $A(t,e){D0(t,e,!1)}function UA(t){delete t._ripple,O0(t)}function HA(t,e){if(e.value===e.oldValue)return;const n=A0(e.oldValue);D0(t,e,n)}const P0={mounted:$A,unmounted:UA,updated:HA},M0=J({active:{type:Boolean,default:void 0},symbol:{type:null,default:m0},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ts,appendIcon:ts,block:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Jo(),...Ge(),...na(),...Wd(),...ea(),...d0(),...w0(),...Xd(),...C0(),...vi(),...S0(),...mc(),...Pt({tag:"button"}),...bn(),...gc({variant:"elevated"})},"VBtn"),Gn=Ie()({name:"VBtn",directives:{Ripple:P0},props:M0(),emits:{"group:selected":t=>!0},setup(t,e){let{attrs:n,slots:s}=e;const{themeClasses:i}=Tn(t),{borderClasses:r}=Zo(t),{colorClasses:o,colorStyles:a,variantClasses:l}=Qd(t),{densityClasses:c}=fc(t),{dimensionStyles:u}=Kd(t),{elevationClasses:h}=ta(t),{loaderClasses:d}=E0(t),{locationStyles:f}=Jd(t),{positionClasses:g}=b0(t),{roundedClasses:m}=yi(t),{sizeClasses:y,sizeStyles:w}=vc(t),C=f0(t,t.symbol,!1),I=T0(t,n),b=S(()=>{var P;return t.active!==void 0?t.active:I.isLink.value?(P=I.isActive)==null?void 0:P.value:C==null?void 0:C.isSelected.value}),L=S(()=>(C==null?void 0:C.disabled.value)||t.disabled),M=S(()=>t.variant==="elevated"&&!(t.disabled||t.flat||t.border)),X=S(()=>{if(t.value!==void 0)return Object(t.value)===t.value?JSON.stringify(t.value,null,0):t.value});function k(P){var z;L.value||I.isLink.value&&(P.metaKey||P.ctrlKey||P.shiftKey||P.button!==0||n.target==="_blank")||((z=I.navigate)==null||z.call(I,P),C==null||C.toggle())}return FA(I,C==null?void 0:C.select),Ye(()=>{var He,Mt;const P=I.isLink.value?"a":t.tag,z=!!(t.prependIcon||s.prepend),ce=!!(t.appendIcon||s.append),F=!!(t.icon&&t.icon!==!0),se=(C==null?void 0:C.isSelected.value)&&(!I.isLink.value||((He=I.isActive)==null?void 0:He.value))||!C||((Mt=I.isActive)==null?void 0:Mt.value);return Xi(_(P,{type:P==="a"?void 0:"button",class:["v-btn",C==null?void 0:C.selectedClass.value,{"v-btn--active":b.value,"v-btn--block":t.block,"v-btn--disabled":L.value,"v-btn--elevated":M.value,"v-btn--flat":t.flat,"v-btn--icon":!!t.icon,"v-btn--loading":t.loading,"v-btn--stacked":t.stacked},i.value,r.value,se?o.value:void 0,c.value,h.value,d.value,g.value,m.value,y.value,l.value,t.class],style:[se?a.value:void 0,u.value,f.value,w.value,t.style],disabled:L.value||void 0,href:I.href.value,onClick:k,value:X.value},{default:()=>{var Le;return[Yd(!0,"v-btn"),!t.icon&&z&&_("span",{key:"prepend",class:"v-btn__prepend"},[s.prepend?_(Zn,{key:"prepend-defaults",disabled:!t.prependIcon,defaults:{VIcon:{icon:t.prependIcon}}},s.prepend):_(Vi,{key:"prepend-icon",icon:t.prependIcon},null)]),_("span",{class:"v-btn__content","data-no-activator":""},[!s.default&&F?_(Vi,{key:"content-icon",icon:t.icon},null):_(Zn,{key:"content-defaults",disabled:!F,defaults:{VIcon:{icon:t.icon}}},{default:()=>{var me;return[((me=s.default)==null?void 0:me.call(s))??t.text]}})]),!t.icon&&ce&&_("span",{key:"append",class:"v-btn__append"},[s.append?_(Zn,{key:"append-defaults",disabled:!t.appendIcon,defaults:{VIcon:{icon:t.appendIcon}}},s.append):_(Vi,{key:"append-icon",icon:t.appendIcon},null)]),!!t.loading&&_("span",{key:"loader",class:"v-btn__loader"},[((Le=s.loader)==null?void 0:Le.call(s))??_(DA,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[ic("ripple"),!L.value&&t.ripple,null]])}),{}}}),jA=J({...M0({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),zA=Ie()({name:"VAppBarNavIcon",props:jA(),setup(t,e){let{slots:n}=e;return Ye(()=>_(Gn,Fn(t,{class:["v-app-bar-nav-icon"]}),n)),{}}});const WA=J({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Jo(),...Ge(),...ea(),...e0(),...vi(),...Pt({tag:"footer"}),...bn()},"VFooter"),KA=Ie()({name:"VFooter",props:WA(),setup(t,e){let{slots:n}=e;const{themeClasses:s}=Tn(t),{backgroundColorClasses:i,backgroundColorStyles:r}=_l(Ot(t,"color")),{borderClasses:o}=Zo(t),{elevationClasses:a}=ta(t),{roundedClasses:l}=yi(t),c=Re(32),{resizeRef:u}=zd(f=>{f.length&&(c.value=f[0].target.clientHeight)}),h=S(()=>t.height==="auto"?c.value:parseInt(t.height,10)),{layoutItemStyles:d}=t0({id:t.name,order:S(()=>parseInt(t.order,10)),position:S(()=>"bottom"),layoutSize:h,elementSize:S(()=>t.height==="auto"?void 0:h.value),active:S(()=>t.app),absolute:Ot(t,"absolute")});return Ye(()=>_(t.tag,{ref:u,class:["v-footer",s.value,i.value,o.value,a.value,l.value,t.class],style:[r.value,t.app?d.value:{height:we(t.height)},t.style]},n)),{}}});const qA=J({fluid:{type:Boolean,default:!1},...Ge(),...Pt()},"VContainer"),_s=Ie()({name:"VContainer",props:qA(),setup(t,e){let{slots:n}=e;const{rtlClasses:s}=_r();return Ye(()=>_(t.tag,{class:["v-container",{"v-container--fluid":t.fluid},s.value,t.class],style:t.style},n)),{}}}),yc=["sm","md","lg","xl","xxl"],nm=Symbol.for("vuetify:display"),sm={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},GA=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:sm;return nn(sm,t)};function im(t){return Gt&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function rm(t){return Gt&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function om(t){const e=Gt&&!t?window.navigator.userAgent:"ssr";function n(g){return!!e.match(g)}const s=n(/android/i),i=n(/iphone|ipad|ipod/i),r=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),l=n(/edge/i),c=n(/firefox/i),u=n(/opera/i),h=n(/win/i),d=n(/mac/i),f=n(/linux/i);return{android:s,ios:i,cordova:r,electron:o,chrome:a,edge:l,firefox:c,opera:u,win:h,mac:d,linux:f,touch:l1,ssr:e==="ssr"}}function YA(t,e){const{thresholds:n,mobileBreakpoint:s}=GA(t),i=Re(rm(e)),r=Re(om(e)),o=Wt({}),a=Re(im(e));function l(){i.value=rm(),a.value=im()}function c(){l(),r.value=om()}return mr(()=>{const u=a.value<n.sm,h=a.value<n.md&&!u,d=a.value<n.lg&&!(h||u),f=a.value<n.xl&&!(d||h||u),g=a.value<n.xxl&&!(f||d||h||u),m=a.value>=n.xxl,y=u?"xs":h?"sm":d?"md":f?"lg":g?"xl":"xxl",w=typeof s=="number"?s:n[s],C=a.value<w;o.xs=u,o.sm=h,o.md=d,o.lg=f,o.xl=g,o.xxl=m,o.smAndUp=!u,o.mdAndUp=!(u||h),o.lgAndUp=!(u||h||d),o.xlAndUp=!(u||h||d||f),o.smAndDown=!(d||f||g||m),o.mdAndDown=!(f||g||m),o.lgAndDown=!(g||m),o.xlAndDown=!m,o.name=y,o.height=i.value,o.width=a.value,o.mobile=C,o.mobileBreakpoint=s,o.platform=r.value,o.thresholds=n}),Gt&&window.addEventListener("resize",l,{passive:!0}),{...Id(o),update:c,ssr:!!e}}const L0=(()=>yc.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),F0=(()=>yc.reduce((t,e)=>{const n="offset"+rs(e);return t[n]={type:[String,Number],default:null},t},{}))(),B0=(()=>yc.reduce((t,e)=>{const n="order"+rs(e);return t[n]={type:[String,Number],default:null},t},{}))(),am={col:Object.keys(L0),offset:Object.keys(F0),order:Object.keys(B0)};function QA(t,e,n){let s=t;if(!(n==null||n===!1)){if(e){const i=e.replace(t,"");s+=`-${i}`}return t==="col"&&(s="v-"+s),t==="col"&&(n===""||n===!0)||(s+=`-${n}`),s.toLowerCase()}}const XA=["auto","start","end","center","baseline","stretch"],JA=J({cols:{type:[Boolean,String,Number],default:!1},...L0,offset:{type:[String,Number],default:null},...F0,order:{type:[String,Number],default:null},...B0,alignSelf:{type:String,default:null,validator:t=>XA.includes(t)},...Ge(),...Pt()},"VCol"),du=Ie()({name:"VCol",props:JA(),setup(t,e){let{slots:n}=e;const s=S(()=>{const i=[];let r;for(r in am)am[r].forEach(a=>{const l=t[a],c=QA(r,a,l);c&&i.push(c)});const o=i.some(a=>a.startsWith("v-col-"));return i.push({"v-col":!o||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),i});return()=>{var i;return jn(t.tag,{class:[s.value,t.class],style:t.style},(i=n.default)==null?void 0:i.call(n))}}}),Zd=["start","end","center"],V0=["space-between","space-around","space-evenly"];function ef(t,e){return yc.reduce((n,s)=>{const i=t+rs(s);return n[i]=e(),n},{})}const ZA=[...Zd,"baseline","stretch"],$0=t=>ZA.includes(t),U0=ef("align",()=>({type:String,default:null,validator:$0})),ek=[...Zd,...V0],H0=t=>ek.includes(t),j0=ef("justify",()=>({type:String,default:null,validator:H0})),tk=[...Zd,...V0,"stretch"],z0=t=>tk.includes(t),W0=ef("alignContent",()=>({type:String,default:null,validator:z0})),lm={align:Object.keys(U0),justify:Object.keys(j0),alignContent:Object.keys(W0)},nk={align:"align",justify:"justify",alignContent:"align-content"};function sk(t,e,n){let s=nk[t];if(n!=null){if(e){const i=e.replace(t,"");s+=`-${i}`}return s+=`-${n}`,s.toLowerCase()}}const ik=J({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:$0},...U0,justify:{type:String,default:null,validator:H0},...j0,alignContent:{type:String,default:null,validator:z0},...W0,...Ge(),...Pt()},"VRow"),fu=Ie()({name:"VRow",props:ik(),setup(t,e){let{slots:n}=e;const s=S(()=>{const i=[];let r;for(r in lm)lm[r].forEach(o=>{const a=t[o],l=sk(r,o,a);l&&i.push(l)});return i.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),i});return()=>{var i;return jn(t.tag,{class:["v-row",s.value,t.class],style:t.style},(i=n.default)==null?void 0:i.call(n))}}}),rk=hc("v-spacer","div","VSpacer");const ok=J({scrollable:Boolean,...Ge(),...Pt({tag:"main"})},"VMain"),ak=Ie()({name:"VMain",props:ok(),setup(t,e){let{slots:n}=e;const{mainStyles:s}=H1(),{ssrBootStyles:i}=Gd();return Ye(()=>_(t.tag,{class:["v-main",{"v-main--scrollable":t.scrollable},t.class],style:[s.value,i.value,t.style]},{default:()=>{var r,o;return[t.scrollable?_("div",{class:"v-main__scroller"},[(r=n.default)==null?void 0:r.call(n)]):(o=n.default)==null?void 0:o.call(n)]}})),{}}}),lk={name:"App",components:{RouterView:$_},data:()=>({})},ck={class:"mx-auto"};function uk(t,e,n,s,i,r){const o=VT("RouterView");return mt(),Yn(tA,null,{default:le(()=>[_(vA,{elevation:1,color:"wihte",fixed:""},{default:le(()=>[_(Gn,{onClick:e[0]||(e[0]=a=>t.$router.push("/"))},{default:le(()=>[_(ws,{class:"logo",src:"https://kiaf.org/wp-content/uploads/2021/08/logo.png"})]),_:1}),_(rk),_(zA)]),_:1}),_(ak,null,{default:le(()=>[_(rA,{mode:"out-in"},{default:le(()=>[_(o)]),_:1})]),_:1}),_(KA,{color:"black",dark:""},{default:le(()=>[Qe("div",ck,"Copyright © "+js(new Date().getFullYear())+" Yeonjeuk.web.app",1)]),_:1})]),_:1})}const hk=Yo(lk,[["render",uk]]),dk="modulepreload",fk=function(t){return"/vite/"+t},cm={},gk=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=fk(r),r in cm)return;cm[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":dk,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};async function pk(){(await gk(()=>import("./webfontloader-523643f5.js").then(e=>e.w),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}const fh={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function mk(t,e){const n=[];let s=[];const i=K0(t),r=q0(t),o=(i.getDay()-fh[e.slice(-2).toUpperCase()]+7)%7,a=(r.getDay()-fh[e.slice(-2).toUpperCase()]+7)%7;for(let l=0;l<o;l++){const c=new Date(i);c.setDate(c.getDate()-(o-l)),s.push(c)}for(let l=1;l<=r.getDate();l++){const c=new Date(t.getFullYear(),t.getMonth(),l);s.push(c),s.length===7&&(n.push(s),s=[])}for(let l=1;l<7-a;l++){const c=new Date(r);c.setDate(c.getDate()+l),s.push(c)}return n.push(s),n}function K0(t){return new Date(t.getFullYear(),t.getMonth(),1)}function q0(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function vk(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const yk=/([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))/;function G0(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(yk.test(t))return vk(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const um=new Date(2e3,0,2);function _k(t){const e=fh[t.slice(-2).toUpperCase()];return H_(7).map(n=>{const s=new Date(um);return s.setDate(um.getDate()+e+n),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(s)})}function wk(t,e,n){let s={};switch(e){case"fullDateWithWeekday":s={weekday:"long",day:"numeric",month:"long",year:"numeric"};break;case"normalDateWithWeekday":s={weekday:"short",day:"numeric",month:"short"};break;case"keyboardDate":s={day:"2-digit",month:"2-digit",year:"numeric"};break;case"monthAndDate":s={month:"long",day:"numeric"};break;case"monthAndYear":s={month:"long",year:"numeric"};break;case"dayOfMonth":s={day:"numeric"};break;case"shortDate":s={year:"numeric"};break;default:s={timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,s).format(G0(t)??void 0)}function Ek(t,e){const n=t.toJsDate(e),s=n.getFullYear(),i=Dp(String(n.getMonth()+1),2,"0"),r=Dp(String(n.getDate()),2,"0");return`${s}-${i}-${r}`}function Ck(t){const[e,n,s]=t.split("-").map(Number);return new Date(e,n-1,s)}function bk(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function Tk(t,e){const n=new Date(t);return n.setMonth(n.getMonth()+e),n}function Sk(t){return t.getFullYear()}function Ik(t){return t.getMonth()}function Ak(t){return new Date(t.getFullYear(),0,1)}function kk(t){return new Date(t.getFullYear(),11,31)}function Rk(t,e){return gh(t,e[0])&&xk(t,e[1])}function Nk(t){if(!t||t==null)return!1;const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function gh(t,e){return t.getTime()>e.getTime()}function xk(t,e){return t.getTime()<e.getTime()}function hm(t,e){return t.getTime()===e.getTime()}function Dk(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function Ok(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function Pk(t,e,n){const s=new Date(t),i=new Date(e);return n==="month"?s.getMonth()-i.getMonth()+(s.getFullYear()-i.getFullYear())*12:Math.floor((s.getTime()-i.getTime())/(1e3*60*60*24))}function Mk(t,e){const n=new Date(t);return n.setFullYear(e),n}function Lk(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate())}function Fk(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class Bk{constructor(e){this.locale=e.locale}date(e){return G0(e)}toJsDate(e){return e}toISO(e){return Ek(this,e)}parseISO(e){return Ck(e)}addDays(e,n){return bk(e,n)}addMonths(e,n){return Tk(e,n)}getWeekArray(e){return mk(e,this.locale)}startOfMonth(e){return K0(e)}endOfMonth(e){return q0(e)}format(e,n){return wk(e,n,this.locale)}isEqual(e,n){return hm(e,n)}isValid(e){return Nk(e)}isWithinRange(e,n){return Rk(e,n)}isAfter(e,n){return gh(e,n)}isBefore(e,n){return!gh(e,n)&&!hm(e,n)}isSameDay(e,n){return Dk(e,n)}isSameMonth(e,n){return Ok(e,n)}setYear(e,n){return Mk(e,n)}getDiff(e,n,s){return Pk(e,n,s)}getWeekdays(){return _k(this.locale)}getYear(e){return Sk(e)}getMonth(e){return Ik(e)}startOfDay(e){return Lk(e)}endOfDay(e){return Fk(e)}startOfYear(e){return Ak(e)}endOfYear(e){return kk(e)}}const dm=Symbol.for("vuetify:date-adapter");function Vk(t){return nn({adapter:Bk,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t)}function Y0(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,s=nn(e,n),{aliases:i={},components:r={},directives:o={}}=s,a=F1(s.defaults),l=YA(s.display,s.ssr),c=Z1(s.theme),u=AA(s.icons),h=Y1(s.locale),d=Vk(s.date);return{install:g=>{for(const m in o)g.directive(m,o[m]);for(const m in r)g.component(m,r[m]);for(const m in i)g.component(m,Qo({...i[m],name:m,aliasName:i[m].name}));if(c.install(g),g.provide(nr,a),g.provide(nm,l),g.provide(vl,c),g.provide(uh,u),g.provide(ml,h),g.provide(dm,d),Gt&&s.ssr)if(g.$nuxt)g.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:m}=g;g.mount=function(){const y=m(...arguments);return pr(()=>l.update()),g.mount=m,y}}dc.reset(),g.mixin({computed:{$vuetify(){return Wt({defaults:Si.call(this,nr),display:Si.call(this,nm),theme:Si.call(this,vl),icons:Si.call(this,uh),locale:Si.call(this,ml),date:Si.call(this,dm)})}}})},defaults:a,display:l,theme:c,icons:u,locale:h,date:d}}const $k="3.3.23";Y0.version=$k;function Si(t){var s,i;const e=this.$,n=((s=e.parent)==null?void 0:s.provides)??((i=e.vnode.appContext)==null?void 0:i.provides);if(n&&t in n)return n[t]}const Uk=Y0({defaults:{VImg:{cover:!0}}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=function(t,e){if(!t)throw wr(e)},wr=function(t){return new Error("Firebase Database ("+Q0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Hk=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},_c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(X0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Hk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new jk;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const J0=function(t){const e=X0(t);return _c.encodeByteArray(e,!0)},Z0=function(t){return J0(t).replace(/\./g,"")},El=function(t){try{return _c.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(t){return ew(void 0,t)}function ew(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Wk(n)||(t[n]=ew(t[n],e[n]));return t}function Wk(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=()=>Kk().__FIREBASE_DEFAULTS__,Gk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&El(t[1]);return e&&JSON.parse(e)},tw=()=>{try{return qk()||Gk()||Yk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nw=()=>{var t;return(t=tw())===null||t===void 0?void 0:t.config},Qk=t=>{var e;return(e=tw())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bn())}function Xk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iw(){return Q0.NODE_ADMIN===!0}function rw(){try{return typeof indexedDB=="object"}catch{return!1}}function Jk(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk="FirebaseError";class as extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Zk,Object.setPrototypeOf(this,as.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Er.prototype.create)}}class Er{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?eR(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new as(i,a,s)}}function eR(t,e){return t.replace(tR,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const tR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t){return JSON.parse(t)}function _t(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Ro(El(r[0])||""),n=Ro(El(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},nR=function(t){const e=ow(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},sR=function(t){const e=ow(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function sr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function fm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cl(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ph(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(gm(r)&&gm(o)){if(!ph(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function gm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function rR(t,e){const n=new oR(t,e);return n.subscribe.bind(n)}class oR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");aR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=gu),i.error===void 0&&(i.error=gu),i.complete===void 0&&(i.complete=gu);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gu(){}function lR(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,$(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wc=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t){return t&&t._delegate?t._delegate:t}class _n{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ko;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dR(e))try{this.getOrInitializeService({instanceIdentifier:zs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=zs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zs){return this.instances.has(e)}getOptions(e=zs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:hR(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=zs){return this.component?this.component.multipleInstances?e:zs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hR(t){return t===zs?void 0:t}function dR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const gR={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},pR=_e.INFO,mR={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},vR=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=mR[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sa{constructor(e){this.name=e,this._logLevel=pR,this._logHandler=vR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const yR=(t,e)=>e.some(n=>t instanceof n);let pm,mm;function _R(){return pm||(pm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wR(){return mm||(mm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const aw=new WeakMap,mh=new WeakMap,lw=new WeakMap,pu=new WeakMap,sf=new WeakMap;function ER(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ss(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&aw.set(n,t)}).catch(()=>{}),sf.set(e,t),e}function CR(t){if(mh.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});mh.set(t,e)}let vh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ss(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bR(t){vh=t(vh)}function TR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(mu(this),e,...n);return lw.set(s,e.sort?e.sort():[e]),Ss(s)}:wR().includes(t)?function(...e){return t.apply(mu(this),e),Ss(aw.get(this))}:function(...e){return Ss(t.apply(mu(this),e))}}function SR(t){return typeof t=="function"?TR(t):(t instanceof IDBTransaction&&CR(t),yR(t,_R())?new Proxy(t,vh):t)}function Ss(t){if(t instanceof IDBRequest)return ER(t);if(pu.has(t))return pu.get(t);const e=SR(t);return e!==t&&(pu.set(t,e),sf.set(e,t)),e}const mu=t=>sf.get(t);function IR(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Ss(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Ss(o.result),l.oldVersion,l.newVersion,Ss(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const AR=["get","getKey","getAll","getAllKeys","count"],kR=["put","add","delete","clear"],vu=new Map;function vm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vu.get(e))return vu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=kR.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||AR.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return vu.set(e,r),r}bR(t=>({...t,get:(e,n,s)=>vm(e,n)||t.get(e,n,s),has:(e,n)=>!!vm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NR(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function NR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yh="@firebase/app",ym="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new sa("@firebase/app"),xR="@firebase/app-compat",DR="@firebase/analytics-compat",OR="@firebase/analytics",PR="@firebase/app-check-compat",MR="@firebase/app-check",LR="@firebase/auth",FR="@firebase/auth-compat",BR="@firebase/database",VR="@firebase/database-compat",$R="@firebase/functions",UR="@firebase/functions-compat",HR="@firebase/installations",jR="@firebase/installations-compat",zR="@firebase/messaging",WR="@firebase/messaging-compat",KR="@firebase/performance",qR="@firebase/performance-compat",GR="@firebase/remote-config",YR="@firebase/remote-config-compat",QR="@firebase/storage",XR="@firebase/storage-compat",JR="@firebase/firestore",ZR="@firebase/firestore-compat",eN="firebase",tN="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="[DEFAULT]",nN={[yh]:"fire-core",[xR]:"fire-core-compat",[OR]:"fire-analytics",[DR]:"fire-analytics-compat",[MR]:"fire-app-check",[PR]:"fire-app-check-compat",[LR]:"fire-auth",[FR]:"fire-auth-compat",[BR]:"fire-rtdb",[VR]:"fire-rtdb-compat",[$R]:"fire-fn",[UR]:"fire-fn-compat",[HR]:"fire-iid",[jR]:"fire-iid-compat",[zR]:"fire-fcm",[WR]:"fire-fcm-compat",[KR]:"fire-perf",[qR]:"fire-perf-compat",[GR]:"fire-rc",[YR]:"fire-rc-compat",[QR]:"fire-gcs",[XR]:"fire-gcs-compat",[JR]:"fire-fst",[ZR]:"fire-fst-compat","fire-js":"fire-js",[eN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=new Map,wh=new Map;function sN(t,e){try{t.container.addComponent(e)}catch(n){li.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vn(t){const e=t.name;if(wh.has(e))return li.debug(`There were multiple attempts to register component ${e}.`),!1;wh.set(e,t);for(const n of bl.values())sN(n,t);return!0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Is=new Er("app","Firebase",iN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Is.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=tN;function oN(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:_h,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Is.create("bad-app-name",{appName:String(i)});if(n||(n=nw()),!n)throw Is.create("no-options");const r=bl.get(i);if(r){if(ph(n,r.options)&&ph(s,r.config))return r;throw Is.create("duplicate-app",{appName:i})}const o=new fR(i);for(const l of wh.values())o.addComponent(l);const a=new rN(n,s,o);return bl.set(i,a),a}function aN(t=_h){const e=bl.get(t);if(!e&&t===_h&&nw())return oN();if(!e)throw Is.create("no-app",{appName:t});return e}function Yt(t,e,n){var s;let i=(s=nN[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),li.warn(a.join(" "));return}Vn(new _n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN="firebase-heartbeat-database",cN=1,No="firebase-heartbeat-store";let yu=null;function cw(){return yu||(yu=IR(lN,cN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(No)}}}).catch(t=>{throw Is.create("idb-open",{originalErrorMessage:t.message})})),yu}async function uN(t){try{return await(await cw()).transaction(No).objectStore(No).get(uw(t))}catch(e){if(e instanceof as)li.warn(e.message);else{const n=Is.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});li.warn(n.message)}}}async function _m(t,e){try{const s=(await cw()).transaction(No,"readwrite");await s.objectStore(No).put(e,uw(t)),await s.done}catch(n){if(n instanceof as)li.warn(n.message);else{const s=Is.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});li.warn(s.message)}}}function uw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN=1024,dN=30*24*60*60*1e3;class fN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pN(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=dN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=wm(),{heartbeatsToSend:n,unsentEntries:s}=gN(this._heartbeatsCache.heartbeats),i=Z0(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function wm(){return new Date().toISOString().substring(0,10)}function gN(t,e=hN){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Em(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Em(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class pN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rw()?Jk().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await uN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _m(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _m(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Em(t){return Z0(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(t){Vn(new _n("platform-logger",e=>new RR(e),"PRIVATE")),Vn(new _n("heartbeat",e=>new fN(e),"PRIVATE")),Yt(yh,ym,t),Yt(yh,ym,"esm2017"),Yt("fire-js","")}mN("");var vN="firebase",yN="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt(vN,yN,"app");const Cm="@firebase/database",bm="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hw="";function _N(t){hw=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),_t(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ro(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ls(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wN(e)}}catch{}return new EN},Qs=dw("localStorage"),Eh=dw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new sa("@firebase/database"),CN=function(){let t=1;return function(){return t++}}(),fw=function(t){const e=cR(t),n=new iR;n.update(e);const s=n.digest();return _c.encodeByteArray(s)},ia=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ia.apply(null,s):typeof s=="object"?e+=_t(s):e+=s,e+=" "}return e};let ii=null,Tm=!0;const bN=function(t,e){$(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?($i.logLevel=_e.VERBOSE,ii=$i.log.bind($i),e&&Eh.set("logging_enabled",!0)):typeof t=="function"?ii=t:(ii=null,Eh.remove("logging_enabled"))},Ct=function(...t){if(Tm===!0&&(Tm=!1,ii===null&&Eh.get("logging_enabled")===!0&&bN(!0)),ii){const e=ia.apply(null,t);ii(e)}},ra=function(t){return function(...e){Ct(t,...e)}},Ch=function(...t){const e="FIREBASE INTERNAL ERROR: "+ia(...t);$i.error(e)},ci=function(...t){const e=`FIREBASE FATAL ERROR: ${ia(...t)}`;throw $i.error(e),new Error(e)},Qt=function(...t){const e="FIREBASE WARNING: "+ia(...t);$i.warn(e)},TN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Qt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},gw=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},SN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ir="[MIN_NAME]",ui="[MAX_NAME]",Tr=function(t,e){if(t===e)return 0;if(t===ir||e===ui)return-1;if(e===ir||t===ui)return 1;{const n=Sm(t),s=Sm(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},IN=function(t,e){return t===e?0:t<e?-1:1},Br=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+_t(e))},rf=function(t){if(typeof t!="object"||t===null)return _t(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=_t(e[s]),n+=":",n+=rf(t[e[s]]);return n+="}",n},pw=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function ln(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const mw=function(t){$(!gw(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},AN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},kN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},RN=new RegExp("^-?(0*)\\d{1,10}$"),NN=-2147483648,xN=2147483647,Sm=function(t){if(RN.test(t)){const e=Number(t);if(e>=NN&&e<=xN)return e}return null},oa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Qt("Exception was thrown by user callback.",n),e},Math.floor(0))}},DN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},oo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Qt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ct("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Qt(e)}}class bh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}bh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="5",vw="v",yw="s",_w="r",ww="f",Ew=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Cw="ls",bw="p",Th="ac",Tw="websocket",Sw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function LN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Iw(t,e,n){$(typeof e=="string","typeof type must == string"),$(typeof n=="object","typeof params must == object");let s;if(e===Tw)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Sw)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);LN(t)&&(n.ns=t.namespace);const i=[];return ln(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(){this.counters_={}}incrementCounter(e,n=1){ls(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return zk(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u={},wu={};function af(t){const e=t.toString();return _u[e]||(_u[e]=new FN),_u[e]}function BN(t,e){const n=t.toString();return wu[n]||(wu[n]=e()),wu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&oa(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im="start",$N="close",UN="pLPCommand",HN="pRTLPCB",Aw="id",kw="pw",Rw="ser",jN="cb",zN="seg",WN="ts",KN="d",qN="dframe",Nw=1870,xw=30,GN=Nw-xw,YN=25e3,QN=3e4;class xi{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ra(e),this.stats_=af(n),this.urlFn=l=>(this.appCheckToken&&(l[Th]=this.appCheckToken),Iw(n,Sw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new VN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(QN)),SN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new lf((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Im)this.id=a,this.password=l;else if(o===$N)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Im]="t",s[Rw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[jN]=this.scriptTagHolder.uniqueCallbackIdentifier),s[vw]=of,this.transportSessionId&&(s[yw]=this.transportSessionId),this.lastSessionId&&(s[Cw]=this.lastSessionId),this.applicationId&&(s[bw]=this.applicationId),this.appCheckToken&&(s[Th]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ew.test(location.hostname)&&(s[_w]=ww);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xi.forceAllow_=!0}static forceDisallow(){xi.forceDisallow_=!0}static isAvailable(){return xi.forceAllow_?!0:!xi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!AN()&&!kN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=_t(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=J0(n),i=pw(s,GN);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[qN]="t",s[Aw]=e,s[kw]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=_t(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class lf{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=CN(),window[UN+this.uniqueCallbackIdentifier]=e,window[HN+this.uniqueCallbackIdentifier]=n,this.myIFrame=lf.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ct("frame writing exception"),a.stack&&Ct(a.stack),Ct(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ct("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Aw]=this.myID,e[kw]=this.myPW,e[Rw]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xw+s.length<=Nw;){const o=this.pendingSegs.shift();s=s+"&"+zN+i+"="+o.seg+"&"+WN+i+"="+o.ts+"&"+KN+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(YN)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ct("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=16384,JN=45e3;let Tl=null;typeof MozWebSocket<"u"?Tl=MozWebSocket:typeof WebSocket<"u"&&(Tl=WebSocket);class hn{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ra(this.connId),this.stats_=af(n),this.connURL=hn.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[vw]=of,typeof location<"u"&&location.hostname&&Ew.test(location.hostname)&&(o[_w]=ww),n&&(o[yw]=n),s&&(o[Cw]=s),i&&(o[Th]=i),r&&(o[bw]=r),Iw(e,Tw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qs.set("previous_websocket_failure",!0);try{let s;iw(),this.mySock=new Tl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Tl!==null&&!hn.forceDisallow_}static previouslyFailed(){return Qs.isInMemoryStorage||Qs.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ro(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=_t(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=pw(n,XN);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(JN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hn.responsesRequiredToBeHealthy=2;hn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[xi,hn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=hn&&hn.isAvailable();let s=n&&!hn.previouslyFailed();if(e.webSocketOnly&&(n||Qt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[hn];else{const i=this.transports_=[];for(const r of xo.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);xo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=6e4,ex=5e3,tx=10*1024,nx=100*1024,Eu="t",Am="d",sx="s",km="r",ix="e",Rm="o",Nm="a",xm="n",Dm="p",rx="h";class ox{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ra("c:"+this.id+":"),this.transportManager_=new xo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=oo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>nx?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Eu in e){const n=e[Eu];n===Nm?this.upgradeIfSecondaryHealthy_():n===km?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Rm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Br("t",e),s=Br("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Dm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Nm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:xm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Br("t",e),s=Br("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Br(Eu,e);if(Am in e){const s=e[Am];if(n===rx){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===xm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===sx?this.onConnectionShutdown_(s):n===km?this.onReset_(s):n===ix?Ch("Server Error: "+s):n===Rm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ch("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),of!==s&&Qt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),oo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ZN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):oo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ex))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Dm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){$(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends Ow{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!tf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Sl}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=32,Pm=768;class Ue{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function De(){return new Ue("")}function ge(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ns(t){return t.pieces_.length-t.pieceNum_}function Ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ue(t.pieces_,e)}function Pw(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ax(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Mw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Lw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ue(e,0)}function ft(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ue)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ue(n,0)}function he(t){return t.pieceNum_>=t.pieces_.length}function sn(t,e){const n=ge(t),s=ge(e);if(n===null)return e;if(n===s)return sn(Ve(t),Ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Fw(t,e){if(Ns(t)!==Ns(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function fn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ns(t)>Ns(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class lx{constructor(e,n){this.errorPrefix_=n,this.parts_=Mw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=wc(this.parts_[s]);Bw(this)}}function cx(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=wc(e),Bw(t)}function ux(t){const e=t.parts_.pop();t.byteLength_-=wc(e),t.parts_.length>0&&(t.byteLength_-=1)}function Bw(t){if(t.byteLength_>Pm)throw new Error(t.errorPrefix_+"has a key path longer than "+Pm+" bytes ("+t.byteLength_+").");if(t.parts_.length>Om)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Om+") or object contains a cycle "+Ws(t))}function Ws(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf extends Ow{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new cf}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=1e3,hx=60*5*1e3,Mm=30*1e3,dx=1.3,fx=3e4,gx="server_kill",Lm=3;class es extends Dw{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=es.nextPersistentConnectionId_++,this.log_=ra("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Vr,this.maxReconnectDelay_=hx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!iw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");cf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(_t(r)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ko,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;es.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ls(e,"w")){const s=sr(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Qt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||sR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Mm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=nR(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+_t(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ch("Unrecognized action received from server: "+_t(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Vr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Vr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>fx&&(this.reconnectDelay_=Vr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+es.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){$(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ct("getToken() completed but was canceled"):(Ct("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new ox(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{Qt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(gx)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Qt(h),l())}}}interrupt(e){Ct("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ct("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fm(this.interruptReasons_)&&(this.reconnectDelay_=Vr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>rf(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ue(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ct("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Lm&&(this.reconnectDelay_=Mm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ct("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Lm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+hw.replace(/\./g,"-")]=1,tf()?e["framework.cordova"]=1:sw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sl.getInstance().currentlyOnline();return fm(this.interruptReasons_)&&e}}es.nextPersistentConnectionId_=0;es.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new pe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new pe(ir,e),i=new pe(ir,n);return this.compare(s,i)!==0}minPost(){return pe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa;class Vw extends Ec{static get __EMPTY_NODE(){return Pa}static set __EMPTY_NODE(e){Pa=e}compare(e,n){return Tr(e.name,n.name)}isDefinedOn(e){throw wr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return pe.MIN}maxPost(){return new pe(ui,Pa)}makePost(e,n){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new pe(e,Pa)}toString(){return".key"}}const Ui=new Vw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ht{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ht.RED,this.left=i??Vt.EMPTY_NODE,this.right=r??Vt.EMPTY_NODE}copy(e,n,s,i,r){return new ht(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Vt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Vt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ht.RED=!0;ht.BLACK=!1;class px{copy(e,n,s,i,r){return this}insert(e,n,s){return new ht(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Vt{constructor(e,n=Vt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Vt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ht.BLACK,null,null))}remove(e){return new Vt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ht.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ma(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ma(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ma(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ma(this.root_,null,this.comparator_,!0,e)}}Vt.EMPTY_NODE=new px;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mx(t,e){return Tr(t.name,e.name)}function uf(t,e){return Tr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sh;function vx(t){Sh=t}const $w=function(t){return typeof t=="number"?"number:"+mw(t):"string:"+t},Uw=function(t){if(t.isLeafNode()){const e=t.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ls(e,".sv"),"Priority must be a string or number.")}else $(t===Sh||t.isEmpty(),"priority of unexpected type.");$(t===Sh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fm;class ct{constructor(e,n=ct.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Uw(this.priorityNode_)}static set __childrenNodeConstructor(e){Fm=e}static get __childrenNodeConstructor(){return Fm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ct(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return he(e)?this:ge(e)===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ct.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ge(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:($(s!==".priority"||Ns(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ct.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$w(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=mw(this.value_):e+=this.value_,this.lazyHash_=fw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ct.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ct.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ct.VALUE_TYPE_ORDER.indexOf(n),r=ct.VALUE_TYPE_ORDER.indexOf(s);return $(i>=0,"Unknown leaf type: "+n),$(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ct.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hw,jw;function yx(t){Hw=t}function _x(t){jw=t}class wx extends Ec{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Tr(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return pe.MIN}maxPost(){return new pe(ui,new ct("[PRIORITY-POST]",jw))}makePost(e,n){const s=Hw(e);return new pe(n,new ct("[PRIORITY-POST]",s))}toString(){return".priority"}}const It=new wx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex=Math.log(2);class Cx{constructor(e){const n=r=>parseInt(Math.log(r)/Ex,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Il=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new ht(d,h.node,ht.BLACK,null,null);{const f=parseInt(u/2,10)+l,g=i(l,f),m=i(f+1,c);return h=t[f],d=n?n(h):h,new ht(d,h.node,ht.BLACK,g,m)}},r=function(l){let c=null,u=null,h=t.length;const d=function(g,m){const y=h-g,w=h;h-=g;const C=i(y+1,w),I=t[y],b=n?n(I):I;f(new ht(b,I.node,m,null,C))},f=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const m=l.nextBitIsOne(),y=Math.pow(2,l.count-(g+1));m?d(y,ht.BLACK):(d(y,ht.BLACK),d(y,ht.RED))}return u},o=new Cx(t.length),a=r(o);return new Vt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cu;const Ii={};class Qn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return $(Ii&&It,"ChildrenNode.ts has not been loaded"),Cu=Cu||new Qn({".priority":Ii},{".priority":It}),Cu}get(e){const n=sr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Vt?n:null}hasIndex(e){return ls(this.indexSet_,e.toString())}addIndex(e,n){$(e!==Ui,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(pe.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Il(s,e.getCompare()):a=Ii;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Qn(u,c)}addToIndexes(e,n){const s=Cl(this.indexes_,(i,r)=>{const o=sr(this.indexSet_,r);if($(o,"Missing index implementation for "+r),i===Ii)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(pe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Il(a,o.getCompare())}else return Ii;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new pe(e.name,a))),l.insert(e,e.node)}});return new Qn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Cl(this.indexes_,i=>{if(i===Ii)return i;{const r=n.get(e.name);return r?i.remove(new pe(e.name,r)):i}});return new Qn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $r;class Se{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Uw(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $r||($r=new Se(new Vt(uf),null,Qn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$r}updatePriority(e){return this.children_.isEmpty()?this:new Se(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$r:n}}getChild(e){const n=ge(e);return n===null?this:this.getImmediateChild(n).getChild(Ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if($(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new pe(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?$r:this.priorityNode_;return new Se(i,o,r)}}updateChild(e,n){const s=ge(e);if(s===null)return n;{$(ge(e)!==".priority"||Ns(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ve(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(It,(o,a)=>{n[o]=a.val(e),s++,r&&Se.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$w(this.getPriority().val())+":"),this.forEachChild(It,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":fw(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new pe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new pe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,pe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,pe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===aa?-1:0}withIndex(e){if(e===Ui||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Se(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ui||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(It),i=n.getIterator(It);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ui?null:this.indexMap_.get(e.toString())}}Se.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class bx extends Se{constructor(){super(new Vt(uf),Se.EMPTY_NODE,Qn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Se.EMPTY_NODE}isEmpty(){return!1}}const aa=new bx;Object.defineProperties(pe,{MIN:{value:new pe(ir,Se.EMPTY_NODE)},MAX:{value:new pe(ui,aa)}});Vw.__EMPTY_NODE=Se.EMPTY_NODE;ct.__childrenNodeConstructor=Se;vx(aa);_x(aa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=!0;function bt(t,e=null){if(t===null)return Se.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ct(n,bt(e))}if(!(t instanceof Array)&&Tx){const n=[];let s=!1;if(ln(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=bt(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new pe(o,l)))}}),n.length===0)return Se.EMPTY_NODE;const r=Il(n,mx,o=>o.name,uf);if(s){const o=Il(n,It.getCompare());return new Se(r,bt(e),new Qn({".priority":o},{".priority":It}))}else return new Se(r,bt(e),Qn.Default)}else{let n=Se.EMPTY_NODE;return ln(t,(s,i)=>{if(ls(t,s)&&s.substring(0,1)!=="."){const r=bt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(bt(e))}}yx(bt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx extends Ec{constructor(e){super(),this.indexPath_=e,$(!he(e)&&ge(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Tr(e.name,n.name):r}makePost(e,n){const s=bt(e),i=Se.EMPTY_NODE.updateChild(this.indexPath_,s);return new pe(n,i)}maxPost(){const e=Se.EMPTY_NODE.updateChild(this.indexPath_,aa);return new pe(ui,e)}toString(){return Mw(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix extends Ec{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Tr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return pe.MIN}maxPost(){return pe.MAX}makePost(e,n){const s=bt(e);return new pe(n,s)}toString(){return".value"}}const Ax=new Ix;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(t){return{type:"value",snapshotNode:t}}function Rx(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Nx(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Bm(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function xx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=It}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ir}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ui}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===It}copy(){const e=new hf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Vm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===It?n="$priority":t.index_===Ax?n="$value":t.index_===Ui?n="$key":($(t.index_ instanceof Sx,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=_t(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=_t(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+_t(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=_t(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+_t(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function $m(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==It&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al extends Dw{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ra("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Al.getListenId_(e,s),a={};this.listens_[o]=a;const l=Vm(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),sr(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Al.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Vm(e._queryParams),s=e._path.toString(),i=new ko;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+nf(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ro(a.responseText)}catch{Qt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Qt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(){this.rootNode_=Se.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(){return{value:null,children:new Map}}function zw(t,e,n){if(he(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ge(e);t.children.has(s)||t.children.set(s,kl());const i=t.children.get(s);e=Ve(e),zw(i,e,n)}}function Ih(t,e,n){t.value!==null?n(e,t.value):Ox(t,(s,i)=>{const r=new Ue(e.toString()+"/"+s);Ih(i,r,n)})}function Ox(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ln(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=10*1e3,Mx=30*1e3,Lx=5*60*1e3;class Fx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Px(e);const s=Um+(Mx-Um)*Math.random();oo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ln(e,(i,r)=>{r>0&&ls(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),oo(this.reportStats_.bind(this),Math.floor(Math.random()*2*Lx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pn||(Pn={}));function Ww(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Kw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function qw(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Pn.ACK_USER_WRITE,this.source=Ww()}operationForChild(e){if(he(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ue(e));return new Rl(De(),n,this.revert)}}else return $(ge(this.path)===e,"operationForChild called for unrelated child."),new Rl(Ve(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Pn.OVERWRITE}operationForChild(e){return he(this.path)?new hi(this.source,De(),this.snap.getImmediateChild(e)):new hi(this.source,Ve(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Pn.MERGE}operationForChild(e){if(he(this.path)){const n=this.children.subtree(new Ue(e));return n.isEmpty()?null:n.value?new hi(this.source,De(),n.value):new Do(this.source,De(),n)}else return $(ge(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Do(this.source,Ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(he(e))return this.isFullyInitialized()&&!this.filtered_;const n=ge(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Bx(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(xx(o.childName,o.snapshotNode))}),Ur(t,i,"child_removed",e,s,n),Ur(t,i,"child_added",e,s,n),Ur(t,i,"child_moved",r,s,n),Ur(t,i,"child_changed",e,s,n),Ur(t,i,"value",e,s,n),i}function Ur(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>$x(t,a,l)),o.forEach(a=>{const l=Vx(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Vx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function $x(t,e,n){if(e.childName==null||n.childName==null)throw wr("Should only compare child_ events.");const s=new pe(e.childName,e.snapshotNode),i=new pe(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(t,e){return{eventCache:t,serverCache:e}}function ao(t,e,n,s){return Gw(new df(e,n,s),t.serverCache)}function Yw(t,e,n,s){return Gw(t.eventCache,new df(e,n,s))}function Ah(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function di(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bu;const Ux=()=>(bu||(bu=new Vt(IN)),bu);class Fe{constructor(e,n=Ux()){this.value=e,this.children=n}static fromObject(e){let n=new Fe(null);return ln(e,(s,i)=>{n=n.set(new Ue(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:De(),value:this.value};if(he(e))return null;{const s=ge(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ve(e),n);return r!=null?{path:ft(new Ue(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(he(e))return this;{const n=ge(e),s=this.children.get(n);return s!==null?s.subtree(Ve(e)):new Fe(null)}}set(e,n){if(he(e))return new Fe(n,this.children);{const s=ge(e),r=(this.children.get(s)||new Fe(null)).set(Ve(e),n),o=this.children.insert(s,r);return new Fe(this.value,o)}}remove(e){if(he(e))return this.children.isEmpty()?new Fe(null):new Fe(null,this.children);{const n=ge(e),s=this.children.get(n);if(s){const i=s.remove(Ve(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Fe(null):new Fe(this.value,r)}else return this}}get(e){if(he(e))return this.value;{const n=ge(e),s=this.children.get(n);return s?s.get(Ve(e)):null}}setTree(e,n){if(he(e))return n;{const s=ge(e),r=(this.children.get(s)||new Fe(null)).setTree(Ve(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Fe(this.value,o)}}fold(e){return this.fold_(De(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ft(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,De(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(he(e))return null;{const r=ge(e),o=this.children.get(r);return o?o.findOnPath_(Ve(e),ft(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,De(),n)}foreachOnPath_(e,n,s){if(he(e))return this;{this.value&&s(n,this.value);const i=ge(e),r=this.children.get(i);return r?r.foreachOnPath_(Ve(e),ft(n,i),s):new Fe(null)}}foreach(e){this.foreach_(De(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ft(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.writeTree_=e}static empty(){return new vn(new Fe(null))}}function lo(t,e,n){if(he(e))return new vn(new Fe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=sn(i,e);return r=r.updateChild(o,n),new vn(t.writeTree_.set(i,r))}else{const i=new Fe(n),r=t.writeTree_.setTree(e,i);return new vn(r)}}}function Hm(t,e,n){let s=t;return ln(n,(i,r)=>{s=lo(s,ft(e,i),r)}),s}function jm(t,e){if(he(e))return vn.empty();{const n=t.writeTree_.setTree(e,new Fe(null));return new vn(n)}}function kh(t,e){return _i(t,e)!=null}function _i(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(sn(n.path,e)):null}function zm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(It,(s,i)=>{e.push(new pe(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new pe(s,i.value))}),e}function As(t,e){if(he(e))return t;{const n=_i(t,e);return n!=null?new vn(new Fe(n)):new vn(t.writeTree_.subtree(e))}}function Rh(t){return t.writeTree_.isEmpty()}function rr(t,e){return Qw(De(),t.writeTree_,e)}function Qw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?($(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Qw(ft(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ft(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t,e){return nE(e,t)}function Hx(t,e,n,s,i){$(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=lo(t.visibleWrites,e,n)),t.lastWriteId=s}function jx(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function zx(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);$(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Wx(a,s.path)?i=!1:fn(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Kx(t),!0;if(s.snap)t.visibleWrites=jm(t.visibleWrites,s.path);else{const a=s.children;ln(a,l=>{t.visibleWrites=jm(t.visibleWrites,ft(s.path,l))})}return!0}else return!1}function Wx(t,e){if(t.snap)return fn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&fn(ft(t.path,n),e))return!0;return!1}function Kx(t){t.visibleWrites=Jw(t.allWrites,qx,De()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function qx(t){return t.visible}function Jw(t,e,n){let s=vn.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)fn(n,o)?(a=sn(n,o),s=lo(s,a,r.snap)):fn(o,n)&&(a=sn(o,n),s=lo(s,De(),r.snap.getChild(a)));else if(r.children){if(fn(n,o))a=sn(n,o),s=Hm(s,a,r.children);else if(fn(o,n))if(a=sn(o,n),he(a))s=Hm(s,De(),r.children);else{const l=sr(r.children,ge(a));if(l){const c=l.getChild(Ve(a));s=lo(s,De(),c)}}}else throw wr("WriteRecord should have .snap or .children")}}return s}function Zw(t,e,n,s,i){if(!s&&!i){const r=_i(t.visibleWrites,e);if(r!=null)return r;{const o=As(t.visibleWrites,e);if(Rh(o))return n;if(n==null&&!kh(o,De()))return null;{const a=n||Se.EMPTY_NODE;return rr(o,a)}}}else{const r=As(t.visibleWrites,e);if(!i&&Rh(r))return n;if(!i&&n==null&&!kh(r,De()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(fn(c.path,e)||fn(e,c.path))},a=Jw(t.allWrites,o,e),l=n||Se.EMPTY_NODE;return rr(a,l)}}}function Gx(t,e,n){let s=Se.EMPTY_NODE;const i=_i(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(It,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=As(t.visibleWrites,e);return n.forEachChild(It,(o,a)=>{const l=rr(As(r,new Ue(o)),a);s=s.updateImmediateChild(o,l)}),zm(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=As(t.visibleWrites,e);return zm(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Yx(t,e,n,s,i){$(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ft(e,n);if(kh(t.visibleWrites,r))return null;{const o=As(t.visibleWrites,r);return Rh(o)?i.getChild(n):rr(o,i.getChild(n))}}function Qx(t,e,n,s){const i=ft(e,n),r=_i(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=As(t.visibleWrites,i);return rr(o,s.getNode().getImmediateChild(n))}else return null}function Xx(t,e){return _i(t.visibleWrites,e)}function Jx(t,e,n,s,i,r,o){let a;const l=As(t.visibleWrites,e),c=_i(l,De());if(c!=null)a=c;else if(n!=null)a=rr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function Zx(){return{visibleWrites:vn.empty(),allWrites:[],lastWriteId:-1}}function Nh(t,e,n,s){return Zw(t.writeTree,t.treePath,e,n,s)}function eE(t,e){return Gx(t.writeTree,t.treePath,e)}function Wm(t,e,n,s){return Yx(t.writeTree,t.treePath,e,n,s)}function Nl(t,e){return Xx(t.writeTree,ft(t.treePath,e))}function eD(t,e,n,s,i,r){return Jx(t.writeTree,t.treePath,e,n,s,i,r)}function ff(t,e,n){return Qx(t.writeTree,t.treePath,e,n)}function tE(t,e){return nE(ft(t.treePath,e),t.writeTree)}function nE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;$(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),$(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Bm(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Nx(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Rx(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Bm(s,e.snapshotNode,i.oldSnap));else throw wr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const sE=new nD;class gf{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new df(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ff(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:di(this.viewCache_),r=eD(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function sD(t,e){$(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function iD(t,e,n,s,i){const r=new tD;let o,a;if(n.type===Pn.OVERWRITE){const c=n;c.source.fromUser?o=xh(t,e,c.path,c.snap,s,i,r):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!he(c.path),o=xl(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Pn.MERGE){const c=n;c.source.fromUser?o=oD(t,e,c.path,c.children,s,i,r):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Dh(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Pn.ACK_USER_WRITE){const c=n;c.revert?o=cD(t,e,c.path,s,i,r):o=aD(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Pn.LISTEN_COMPLETE)o=lD(t,e,n.path,s,r);else throw wr("Unknown operation type: "+n.type);const l=r.getChanges();return rD(e,o,l),{viewCache:o,changes:l}}function rD(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ah(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(kx(Ah(e)))}}function iE(t,e,n,s,i,r){const o=e.eventCache;if(Nl(s,n)!=null)return e;{let a,l;if(he(n))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=di(e),u=c instanceof Se?c:Se.EMPTY_NODE,h=eE(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Nh(s,di(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ge(n);if(c===".priority"){$(Ns(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Wm(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ve(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Wm(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=ff(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return ao(e,a,o.isFullyInitialized()||he(n),t.filter.filtersNodes())}}function xl(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(he(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=ge(n);if(!l.isCompleteForPath(n)&&Ns(n)>1)return e;const g=Ve(n),y=l.getNode().getImmediateChild(f).updateChild(g,s);f===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),f,y,g,sE,null)}const h=Yw(e,c,l.isFullyInitialized()||he(n),u.filtersNodes()),d=new gf(i,h,r);return iE(t,h,n,i,d,a)}function xh(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new gf(i,e,r);if(he(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ao(e,c,!0,t.filter.filtersNodes());else{const h=ge(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=ao(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Ve(n),f=a.getNode().getImmediateChild(h);let g;if(he(d))g=s;else{const m=u.getCompleteChild(h);m!=null?Pw(d)===".priority"&&m.getChild(Lw(d)).isEmpty()?g=m:g=m.updateChild(d,s):g=Se.EMPTY_NODE}if(f.equals(g))l=e;else{const m=t.filter.updateChild(a.getNode(),h,g,d,u,o);l=ao(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Km(t,e){return t.eventCache.isCompleteForChild(e)}function oD(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=ft(n,l);Km(e,ge(u))&&(a=xh(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=ft(n,l);Km(e,ge(u))||(a=xh(t,a,u,c,i,r,o))}),a}function qm(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Dh(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;he(n)?c=s:c=new Fe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=qm(t,f,d);l=xl(t,l,new Ue(h),g,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),m=qm(t,g,d);l=xl(t,l,new Ue(h),m,i,r,o,a)}}),l}function aD(t,e,n,s,i,r,o){if(Nl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(he(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return xl(t,e,n,l.getNode().getChild(n),i,r,a,o);if(he(n)){let c=new Fe(null);return l.getNode().forEachChild(Ui,(u,h)=>{c=c.set(new Ue(u),h)}),Dh(t,e,n,c,i,r,a,o)}else return e}else{let c=new Fe(null);return s.foreach((u,h)=>{const d=ft(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Dh(t,e,n,c,i,r,a,o)}}function lD(t,e,n,s,i){const r=e.serverCache,o=Yw(e,r.getNode(),r.isFullyInitialized()||he(n),r.isFiltered());return iE(t,o,n,s,sE,i)}function cD(t,e,n,s,i,r){let o;if(Nl(s,n)!=null)return e;{const a=new gf(s,e,i),l=e.eventCache.getNode();let c;if(he(n)||ge(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Nh(s,di(e));else{const h=e.serverCache.getNode();$(h instanceof Se,"serverChildren would be complete if leaf node"),u=eE(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ge(n);let h=ff(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ve(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Se.EMPTY_NODE,Ve(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Nh(s,di(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Nl(s,De())!=null,ao(e,c,o,t.filter.filtersNodes())}}function uD(t,e){const n=di(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!he(e)&&!n.getImmediateChild(ge(e)).isEmpty())?n.getChild(e):null}function Gm(t,e,n,s){e.type===Pn.MERGE&&e.source.queryId!==null&&($(di(t.viewCache_),"We should always have a full cache before handling merges"),$(Ah(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=iD(t.processor_,i,e,n,s);return sD(t.processor_,r.viewCache),$(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,hD(t,r.changes,r.viewCache.eventCache.getNode(),null)}function hD(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Bx(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ym;function dD(t){$(!Ym,"__referenceConstructor has already been defined"),Ym=t}function pf(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return $(r!=null,"SyncTree gave us an op for an invalid query."),Gm(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Gm(o,e,n,s));return r}}function mf(t,e){let n=null;for(const s of t.views.values())n=n||uD(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qm;function fD(t){$(!Qm,"__referenceConstructor has already been defined"),Qm=t}class Xm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Fe(null),this.pendingWriteTree_=Zx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gD(t,e,n,s,i){return Hx(t.pendingWriteTree_,e,n,s,i),i?bc(t,new hi(Ww(),e,n)):[]}function Di(t,e,n=!1){const s=jx(t.pendingWriteTree_,e);if(zx(t.pendingWriteTree_,e)){let r=new Fe(null);return s.snap!=null?r=r.set(De(),!0):ln(s.children,o=>{r=r.set(new Ue(o),!0)}),bc(t,new Rl(s.path,r,n))}else return[]}function Cc(t,e,n){return bc(t,new hi(Kw(),e,n))}function pD(t,e,n){const s=Fe.fromObject(n);return bc(t,new Do(Kw(),e,s))}function mD(t,e,n,s){const i=lE(t,s);if(i!=null){const r=cE(i),o=r.path,a=r.queryId,l=sn(o,e),c=new hi(qw(a),l,n);return uE(t,o,c)}else return[]}function vD(t,e,n,s){const i=lE(t,s);if(i){const r=cE(i),o=r.path,a=r.queryId,l=sn(o,e),c=Fe.fromObject(n),u=new Do(qw(a),l,c);return uE(t,o,u)}else return[]}function rE(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=sn(o,e),c=mf(a,l);if(c)return c});return Zw(i,e,r,n,!0)}function bc(t,e){return oE(e,t.syncPointTree_,null,Xw(t.pendingWriteTree_,De()))}function oE(t,e,n,s){if(he(t.path))return aE(t,e,n,s);{const i=e.get(De());n==null&&i!=null&&(n=mf(i,De()));let r=[];const o=ge(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=tE(s,o);r=r.concat(oE(a,l,c,u))}return i&&(r=r.concat(pf(i,t,s,n))),r}}function aE(t,e,n,s){const i=e.get(De());n==null&&i!=null&&(n=mf(i,De()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=tE(s,o),u=t.operationForChild(o);u&&(r=r.concat(aE(u,a,l,c)))}),i&&(r=r.concat(pf(i,t,s,n))),r}function lE(t,e){return t.tagToQueryMap.get(e)}function cE(t){const e=t.indexOf("$");return $(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ue(t.substr(0,e))}}function uE(t,e,n){const s=t.syncPointTree_.get(e);$(s,"Missing sync point for query tag that we're tracking");const i=Xw(t.pendingWriteTree_,e);return pf(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new vf(n)}node(){return this.node_}}class yf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ft(this.path_,e);return new yf(this.syncTree_,n)}node(){return rE(this.syncTree_,this.path_)}}const yD=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Jm=function(t,e,n){if(!t||typeof t!="object")return t;if($(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return _D(t[".sv"],e,n);if(typeof t[".sv"]=="object")return wD(t[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},_D=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:$(!1,"Unexpected server value: "+t)}},wD=function(t,e,n){t.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&$(!1,"Unexpected increment value: "+s);const i=e.node();if($(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},ED=function(t,e,n,s){return _f(e,new yf(n,t),s)},CD=function(t,e,n){return _f(t,new vf(e),n)};function _f(t,e,n){const s=t.getPriority().val(),i=Jm(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Jm(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ct(a,bt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ct(i))),o.forEachChild(It,(a,l)=>{const c=_f(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ef(t,e){let n=e instanceof Ue?e:new Ue(e),s=t,i=ge(n);for(;i!==null;){const r=sr(s.node.children,i)||{children:{},childCount:0};s=new wf(i,s,r),n=Ve(n),i=ge(n)}return s}function Sr(t){return t.node.value}function hE(t,e){t.node.value=e,Oh(t)}function dE(t){return t.node.childCount>0}function bD(t){return Sr(t)===void 0&&!dE(t)}function Tc(t,e){ln(t.node.children,(n,s)=>{e(new wf(n,t,s))})}function fE(t,e,n,s){n&&!s&&e(t),Tc(t,i=>{fE(i,e,!0,s)}),n&&s&&e(t)}function TD(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function la(t){return new Ue(t.parent===null?t.name:la(t.parent)+"/"+t.name)}function Oh(t){t.parent!==null&&SD(t.parent,t.name,t)}function SD(t,e,n){const s=bD(n),i=ls(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Oh(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Oh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID=/[\[\].#$\/\u0000-\u001F\u007F]/,AD=/[\[\].#$\u0000-\u001F\u007F]/,Tu=10*1024*1024,gE=function(t){return typeof t=="string"&&t.length!==0&&!ID.test(t)},kD=function(t){return typeof t=="string"&&t.length!==0&&!AD.test(t)},RD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),kD(t)},pE=function(t,e,n){const s=n instanceof Ue?new lx(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ws(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ws(s)+" with contents = "+e.toString());if(gw(e))throw new Error(t+"contains "+e.toString()+" "+Ws(s));if(typeof e=="string"&&e.length>Tu/3&&wc(e)>Tu)throw new Error(t+"contains a string greater than "+Tu+" utf8 bytes "+Ws(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ln(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!gE(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ws(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);cx(s,o),pE(t,a,s),ux(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ws(s)+" in addition to actual children.")}},ND=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!gE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!RD(n))throw new Error(lR(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function DD(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Fw(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function wi(t,e,n){DD(t,n),OD(t,s=>fn(s,e)||fn(e,s))}function OD(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(PD(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function PD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ii&&Ct("event: "+n.toString()),oa(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD="repo_interrupt",LD=25;class FD{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new xD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=kl(),this.transactionQueueTree_=new wf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function BD(t,e,n){if(t.stats_=af(t.repoInfo_),t.forceRestClient_||DN())t.server_=new Al(t.repoInfo_,(s,i,r,o)=>{Zm(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ev(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{_t(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new es(t.repoInfo_,e,(s,i,r,o)=>{Zm(t,s,i,r,o)},s=>{ev(t,s)},s=>{$D(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=BN(t.repoInfo_,()=>new Fx(t.stats_,t.server_)),t.infoData_=new Dx,t.infoSyncTree_=new Xm({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Cc(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Cf(t,"connected",!1),t.serverSyncTree_=new Xm({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);wi(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function VD(t){const n=t.infoData_.getNode(new Ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function mE(t){return yD({timestamp:VD(t)})}function Zm(t,e,n,s,i){t.dataUpdateCount++;const r=new Ue(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Cl(n,c=>bt(c));o=vD(t.serverSyncTree_,r,l,i)}else{const l=bt(n);o=mD(t.serverSyncTree_,r,l,i)}else if(s){const l=Cl(n,c=>bt(c));o=pD(t.serverSyncTree_,r,l)}else{const l=bt(n);o=Cc(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Tf(t,r)),wi(t.eventQueue_,a,o)}function ev(t,e){Cf(t,"connected",e),e===!1&&HD(t)}function $D(t,e){ln(e,(n,s)=>{Cf(t,n,s)})}function Cf(t,e,n){const s=new Ue("/.info/"+e),i=bt(n);t.infoData_.updateSnapshot(s,i);const r=Cc(t.infoSyncTree_,s,i);wi(t.eventQueue_,s,r)}function UD(t){return t.nextWriteId_++}function HD(t){vE(t,"onDisconnectEvents");const e=mE(t),n=kl();Ih(t.onDisconnect_,De(),(i,r)=>{const o=ED(i,r,t.serverSyncTree_,e);zw(n,i,o)});let s=[];Ih(n,De(),(i,r)=>{s=s.concat(Cc(t.serverSyncTree_,i,r));const o=KD(t,i);Tf(t,o)}),t.onDisconnect_=kl(),wi(t.eventQueue_,De(),s)}function jD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(MD)}function vE(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ct(n,...e)}function yE(t,e,n){return rE(t.serverSyncTree_,e,n)||Se.EMPTY_NODE}function bf(t,e=t.transactionQueueTree_){if(e||Sc(t,e),Sr(e)){const n=wE(t,e);$(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&zD(t,la(e),n)}else dE(e)&&Tc(e,n=>{bf(t,n)})}function zD(t,e,n){const s=n.map(c=>c.currentWriteId),i=yE(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];$(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=sn(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{vE(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Di(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Sc(t,Ef(t.transactionQueueTree_,e)),bf(t,t.transactionQueueTree_),wi(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)oa(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Qt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Tf(t,e)}},o)}function Tf(t,e){const n=_E(t,e),s=la(n),i=wE(t,n);return WD(t,i,s),s}function WD(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=sn(n,l.path);let u=!1,h;if($(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Di(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=LD)u=!0,h="maxretry",i=i.concat(Di(t.serverSyncTree_,l.currentWriteId,!0));else{const d=yE(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){pE("transaction failed: Data returned ",f,l.path);let g=bt(f);typeof f=="object"&&f!=null&&ls(f,".priority")||(g=g.updatePriority(d.getPriority()));const y=l.currentWriteId,w=mE(t),C=CD(g,d,w);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=C,l.currentWriteId=UD(t),o.splice(o.indexOf(y),1),i=i.concat(gD(t.serverSyncTree_,l.path,C,l.currentWriteId,l.applyLocally)),i=i.concat(Di(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",i=i.concat(Di(t.serverSyncTree_,l.currentWriteId,!0))}wi(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Sc(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)oa(s[a]);bf(t,t.transactionQueueTree_)}function _E(t,e){let n,s=t.transactionQueueTree_;for(n=ge(e);n!==null&&Sr(s)===void 0;)s=Ef(s,n),e=Ve(e),n=ge(e);return s}function wE(t,e){const n=[];return EE(t,e,n),n.sort((s,i)=>s.order-i.order),n}function EE(t,e,n){const s=Sr(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Tc(e,i=>{EE(t,i,n)})}function Sc(t,e){const n=Sr(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,hE(e,n.length>0?n:void 0)}Tc(e,s=>{Sc(t,s)})}function KD(t,e){const n=la(_E(t,e)),s=Ef(t.transactionQueueTree_,e);return TD(s,i=>{Su(t,i)}),Su(t,s),fE(s,i=>{Su(t,i)}),n}function Su(t,e){const n=Sr(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?($(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):($(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Di(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?hE(e,void 0):n.length=r+1,wi(t.eventQueue_,la(e),i);for(let o=0;o<s.length;o++)oa(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function GD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Qt(`Invalid query segment '${n}' in query '${t}'`)}return e}const tv=function(t,e){const n=YD(t),s=n.namespace;n.domain==="firebase.com"&&ci(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ci("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||TN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new MN(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ue(n.pathString)}},YD=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=qD(t.substring(u,h)));const d=GD(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return he(this._path)?null:Pw(this._path)}get ref(){return new Ir(this._repo,this._path)}get _queryIdentifier(){const e=$m(this._queryParams),n=rf(e);return n==="{}"?"default":n}get _queryObject(){return $m(this._queryParams)}isEqual(e){if(e=Cr(e),!(e instanceof Sf))return!1;const n=this._repo===e._repo,s=Fw(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ax(this._path)}}class Ir extends Sf{constructor(e,n){super(e,n,new hf,!1)}get parent(){const e=Lw(this._path);return e===null?null:new Ir(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}dD(Ir);fD(Ir);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD="FIREBASE_DATABASE_EMULATOR_HOST",Ph={};let XD=!1;function JD(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ci("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ct("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=tv(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[QD]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=tv(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new bh(bh.OWNER):new PN(t.name,t.options,e);ND("Invalid Firebase Database URL",o),he(o.path)||ci("Database URL must point to the root of a Firebase Database (not including a child path).");const h=eO(a,t,u,new ON(t.name,n));return new tO(h,t)}function ZD(t,e){const n=Ph[e];(!n||n[t.key]!==t)&&ci(`Database ${e}(${t.repoInfo_}) has already been deleted.`),jD(t),delete n[t.key]}function eO(t,e,n,s){let i=Ph[e.name];i||(i={},Ph[e.name]=i);let r=i[t.toURLString()];return r&&ci("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new FD(t,XD,n,s),i[t.toURLString()]=r,r}class tO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(BD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ir(this._repo,De())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ZD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ci("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nO(t){_N(br),Vn(new _n("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return JD(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Yt(Cm,bm,t),Yt(Cm,bm,"esm2017")}es.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};es.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};nO();var sO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,If=If||{},te=sO||self;function Ic(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ca(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function iO(t){return Object.prototype.hasOwnProperty.call(t,Iu)&&t[Iu]||(t[Iu]=++rO)}var Iu="closure_uid_"+(1e9*Math.random()>>>0),rO=0;function oO(t,e,n){return t.call.apply(t.bind,arguments)}function aO(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function At(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?At=oO:At=aO,At.apply(null,arguments)}function La(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function pt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Ls(){this.s=this.s,this.o=this.o}var lO=0;Ls.prototype.s=!1;Ls.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),lO!=0)&&iO(this)};Ls.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const CE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Af(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function nv(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ic(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function kt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}kt.prototype.h=function(){this.defaultPrevented=!0};var cO=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",()=>{},e),te.removeEventListener("test",()=>{},e)}catch{}return t}();function Oo(t){return/^[\s\xa0]*$/.test(t)}function Ac(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function xn(t){return Ac().indexOf(t)!=-1}function kf(t){return kf[" "](t),t}kf[" "]=function(){};function uO(t,e){var n=nP;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var hO=xn("Opera"),or=xn("Trident")||xn("MSIE"),bE=xn("Edge"),Mh=bE||or,TE=xn("Gecko")&&!(Ac().toLowerCase().indexOf("webkit")!=-1&&!xn("Edge"))&&!(xn("Trident")||xn("MSIE"))&&!xn("Edge"),dO=Ac().toLowerCase().indexOf("webkit")!=-1&&!xn("Edge");function SE(){var t=te.document;return t?t.documentMode:void 0}var Lh;e:{var Au="",ku=function(){var t=Ac();if(TE)return/rv:([^\);]+)(\)|;)/.exec(t);if(bE)return/Edge\/([\d\.]+)/.exec(t);if(or)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(dO)return/WebKit\/(\S+)/.exec(t);if(hO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ku&&(Au=ku?ku[1]:""),or){var Ru=SE();if(Ru!=null&&Ru>parseFloat(Au)){Lh=String(Ru);break e}}Lh=Au}var Fh;if(te.document&&or){var sv=SE();Fh=sv||parseInt(Lh,10)||void 0}else Fh=void 0;var fO=Fh;function Po(t,e){if(kt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(TE){e:{try{kf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Po.$.h.call(this)}}pt(Po,kt);var gO={2:"touch",3:"pen",4:"mouse"};Po.prototype.h=function(){Po.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ua="closure_listenable_"+(1e6*Math.random()|0),pO=0;function mO(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++pO,this.fa=this.ia=!1}function kc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Rf(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function vO(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function IE(t){const e={};for(const n in t)e[n]=t[n];return e}const iv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function AE(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<iv.length;r++)n=iv[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Rc(t){this.src=t,this.g={},this.h=0}Rc.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Vh(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new mO(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function Bh(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=CE(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(kc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Vh(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var Nf="closure_lm_"+(1e6*Math.random()|0),Nu={};function kE(t,e,n,s,i){if(s&&s.once)return NE(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)kE(t,e[r],n,s,i);return null}return n=Of(n),t&&t[ua]?t.O(e,n,ca(s)?!!s.capture:!!s,i):RE(t,e,n,!1,s,i)}function RE(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=ca(i)?!!i.capture:!!i,a=Df(t);if(a||(t[Nf]=a=new Rc(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=yO(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)cO||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(DE(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function yO(){function t(n){return e.call(t.src,t.listener,n)}const e=_O;return t}function NE(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)NE(t,e[r],n,s,i);return null}return n=Of(n),t&&t[ua]?t.P(e,n,ca(s)?!!s.capture:!!s,i):RE(t,e,n,!0,s,i)}function xE(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)xE(t,e[r],n,s,i);else s=ca(s)?!!s.capture:!!s,n=Of(n),t&&t[ua]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Vh(r,n,s,i),-1<n&&(kc(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Df(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Vh(e,n,s,i)),(n=-1<t?e[t]:null)&&xf(n))}function xf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ua])Bh(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(DE(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Df(e))?(Bh(n,t),n.h==0&&(n.src=null,e[Nf]=null)):kc(t)}}}function DE(t){return t in Nu?Nu[t]:Nu[t]="on"+t}function _O(t,e){if(t.fa)t=!0;else{e=new Po(e,this);var n=t.listener,s=t.la||t.src;t.ia&&xf(t),t=n.call(s,e)}return t}function Df(t){return t=t[Nf],t instanceof Rc?t:null}var xu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Of(t){return typeof t=="function"?t:(t[xu]||(t[xu]=function(e){return t.handleEvent(e)}),t[xu])}function gt(){Ls.call(this),this.i=new Rc(this),this.S=this,this.J=null}pt(gt,Ls);gt.prototype[ua]=!0;gt.prototype.removeEventListener=function(t,e,n,s){xE(this,t,e,n,s)};function wt(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new kt(e,t);else if(e instanceof kt)e.target=e.target||t;else{var i=e;e=new kt(s,t),AE(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Fa(o,s,!0,e)&&i}if(o=e.g=t,i=Fa(o,s,!0,e)&&i,i=Fa(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Fa(o,s,!1,e)&&i}gt.prototype.N=function(){if(gt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)kc(n[s]);delete t.g[e],t.h--}}this.J=null};gt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};gt.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Fa(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Bh(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Pf=te.JSON.stringify;class wO{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function EO(){var t=Mf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class CO{constructor(){this.h=this.g=null}add(e,n){const s=OE.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var OE=new wO(()=>new bO,t=>t.reset());class bO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function TO(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function SO(t){te.setTimeout(()=>{throw t},0)}let Mo,Lo=!1,Mf=new CO,PE=()=>{const t=te.Promise.resolve(void 0);Mo=()=>{t.then(IO)}};var IO=()=>{for(var t;t=EO();){try{t.h.call(t.g)}catch(n){SO(n)}var e=OE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Lo=!1};function Nc(t,e){gt.call(this),this.h=t||1,this.g=e||te,this.j=At(this.qb,this),this.l=Date.now()}pt(Nc,gt);U=Nc.prototype;U.ga=!1;U.T=null;U.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),wt(this,"tick"),this.ga&&(Lf(this),this.start()))}};U.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Lf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}U.N=function(){Nc.$.N.call(this),Lf(this),delete this.g};function Ff(t,e,n){if(typeof t=="function")n&&(t=At(t,n));else if(t&&typeof t.handleEvent=="function")t=At(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function ME(t){t.g=Ff(()=>{t.g=null,t.i&&(t.i=!1,ME(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class AO extends Ls{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ME(this)}N(){super.N(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fo(t){Ls.call(this),this.h=t,this.g={}}pt(Fo,Ls);var rv=[];function LE(t,e,n,s){Array.isArray(n)||(n&&(rv[0]=n.toString()),n=rv);for(var i=0;i<n.length;i++){var r=kE(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function FE(t){Rf(t.g,function(e,n){this.g.hasOwnProperty(n)&&xf(e)},t),t.g={}}Fo.prototype.N=function(){Fo.$.N.call(this),FE(this)};Fo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xc(){this.g=!0}xc.prototype.Ea=function(){this.g=!1};function kO(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function RO(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Oi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+xO(t,n)+(s?" "+s:"")})}function NO(t,e){t.info(function(){return"TIMEOUT: "+e})}xc.prototype.info=function(){};function xO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Pf(n)}catch{return e}}var Ei={},ov=null;function Dc(){return ov=ov||new gt}Ei.Ta="serverreachability";function BE(t){kt.call(this,Ei.Ta,t)}pt(BE,kt);function Bo(t){const e=Dc();wt(e,new BE(e))}Ei.STAT_EVENT="statevent";function VE(t,e){kt.call(this,Ei.STAT_EVENT,t),this.stat=e}pt(VE,kt);function Dt(t){const e=Dc();wt(e,new VE(e,t))}Ei.Ua="timingevent";function $E(t,e){kt.call(this,Ei.Ua,t),this.size=e}pt($E,kt);function ha(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var Oc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},UE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Bf(){}Bf.prototype.h=null;function av(t){return t.h||(t.h=t.i())}function HE(){}var da={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Vf(){kt.call(this,"d")}pt(Vf,kt);function $f(){kt.call(this,"c")}pt($f,kt);var $h;function Pc(){}pt(Pc,Bf);Pc.prototype.g=function(){return new XMLHttpRequest};Pc.prototype.i=function(){return{}};$h=new Pc;function fa(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Fo(this),this.P=DO,t=Mh?125:void 0,this.V=new Nc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new jE}function jE(){this.i=null,this.g="",this.h=!1}var DO=45e3,Uh={},Dl={};U=fa.prototype;U.setTimeout=function(t){this.P=t};function Hh(t,e,n){t.L=1,t.v=Lc(ns(e)),t.s=n,t.S=!0,zE(t,null)}function zE(t,e){t.G=Date.now(),ga(t),t.A=ns(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),JE(n.i,"t",s),t.C=0,n=t.l.J,t.h=new jE,t.g=_C(t.l,n?e:null,!t.s),0<t.O&&(t.M=new AO(At(t.Pa,t,t.g),t.O)),LE(t.U,t.g,"readystatechange",t.nb),e=t.I?IE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Bo(),kO(t.j,t.u,t.A,t.m,t.W,t.s)}U.nb=function(t){t=t.target;const e=this.M;e&&Mn(t)==3?e.l():this.Pa(t)};U.Pa=function(t){try{if(t==this.g)e:{const u=Mn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Mh||this.g&&(this.h.h||this.g.ja()||hv(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Bo(3):Bo(2)),Mc(this);var n=this.g.da();this.ca=n;t:if(WE(this)){var s=hv(this.g);t="";var i=s.length,r=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xs(this),co(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,RO(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Oo(a)){var c=a;break t}}c=null}if(n=c)Oi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jh(this,n);else{this.i=!1,this.o=3,Dt(12),Xs(this),co(this);break e}}this.S?(KE(this,u,o),Mh&&this.i&&u==3&&(LE(this.U,this.V,"tick",this.mb),this.V.start())):(Oi(this.j,this.m,o,null),jh(this,o)),u==4&&Xs(this),this.i&&!this.J&&(u==4?pC(this.l,this):(this.i=!1,ga(this)))}else ZO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Dt(12)):(this.o=0,Dt(13)),Xs(this),co(this)}}}catch{}finally{}};function WE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function KE(t,e,n){let s=!0,i;for(;!t.J&&t.C<n.length;)if(i=OO(t,n),i==Dl){e==4&&(t.o=4,Dt(14),s=!1),Oi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Uh){t.o=4,Dt(15),Oi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Oi(t.j,t.m,i,null),jh(t,i);WE(t)&&i!=Dl&&i!=Uh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Dt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Kf(e),e.M=!0,Dt(11))):(Oi(t.j,t.m,n,"[Invalid Chunked Response]"),Xs(t),co(t))}U.mb=function(){if(this.g){var t=Mn(this.g),e=this.g.ja();this.C<e.length&&(Mc(this),KE(this,t,e),this.i&&t!=4&&ga(this))}};function OO(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Dl:(n=Number(e.substring(n,s)),isNaN(n)?Uh:(s+=1,s+n>e.length?Dl:(e=e.slice(s,s+n),t.C=s+n,e)))}U.cancel=function(){this.J=!0,Xs(this)};function ga(t){t.Y=Date.now()+t.P,qE(t,t.P)}function qE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ha(At(t.lb,t),e)}function Mc(t){t.B&&(te.clearTimeout(t.B),t.B=null)}U.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(NO(this.j,this.A),this.L!=2&&(Bo(),Dt(17)),Xs(this),this.o=2,co(this)):qE(this,this.Y-t)};function co(t){t.l.H==0||t.J||pC(t.l,t)}function Xs(t){Mc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Lf(t.V),FE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function jh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||zh(n.i,t))){if(!t.K&&zh(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ml(n),Vc(n);else break e;Wf(n),Dt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ha(At(n.ib,n),6e3));if(1>=tC(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Js(n,11)}else if((t.K||n.g==t)&&Ml(n),!Oo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.i;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Uf(r,r.h),r.h=null))}if(s.F){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.Da=m,$e(s.I,s.F,m))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=yC(s,s.J?s.pa:null,s.Y),o.K){nC(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(Mc(a),ga(a)),s.g=o}else fC(s);0<n.j.length&&$c(n)}else c[0]!="stop"&&c[0]!="close"||Js(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Js(n,7):zf(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Bo(4)}catch{}}function PO(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ic(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function MO(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ic(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function GE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ic(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=MO(t),s=PO(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var YE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function LO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ri(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ri){this.h=t.h,Ol(this,t.j),this.s=t.s,this.g=t.g,Pl(this,t.m),this.l=t.l;var e=t.i,n=new Vo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),lv(this,n),this.o=t.o}else t&&(e=String(t).match(YE))?(this.h=!1,Ol(this,e[1]||"",!0),this.s=Yr(e[2]||""),this.g=Yr(e[3]||"",!0),Pl(this,e[4]),this.l=Yr(e[5]||"",!0),lv(this,e[6]||"",!0),this.o=Yr(e[7]||"")):(this.h=!1,this.i=new Vo(null,this.h))}ri.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Qr(e,cv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Qr(e,cv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Qr(n,n.charAt(0)=="/"?VO:BO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Qr(n,UO)),t.join("")};function ns(t){return new ri(t)}function Ol(t,e,n){t.j=n?Yr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Pl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function lv(t,e,n){e instanceof Vo?(t.i=e,HO(t.i,t.h)):(n||(e=Qr(e,$O)),t.i=new Vo(e,t.h))}function $e(t,e,n){t.i.set(e,n)}function Lc(t){return $e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Yr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Qr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,FO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function FO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var cv=/[#\/\?@]/g,BO=/[#\?:]/g,VO=/[#\?]/g,$O=/[#\?@]/g,UO=/#/g;function Vo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fs(t){t.g||(t.g=new Map,t.h=0,t.i&&LO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Vo.prototype;U.add=function(t,e){Fs(this),this.i=null,t=Ar(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function QE(t,e){Fs(t),e=Ar(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function XE(t,e){return Fs(t),e=Ar(t,e),t.g.has(e)}U.forEach=function(t,e){Fs(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};U.ta=function(){Fs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};U.Z=function(t){Fs(this);let e=[];if(typeof t=="string")XE(this,t)&&(e=e.concat(this.g.get(Ar(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Fs(this),this.i=null,t=Ar(this,t),XE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function JE(t,e,n){QE(t,e),0<n.length&&(t.i=null,t.g.set(Ar(t,e),Af(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Ar(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function HO(t,e){e&&!t.j&&(Fs(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(QE(this,s),JE(this,i,n))},t)),t.j=e}var jO=class{constructor(t,e){this.g=t,this.map=e}};function ZE(t){this.l=t||zO,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ka&&te.g.Ka()&&te.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zO=10;function eC(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function tC(t){return t.h?1:t.g?t.g.size:0}function zh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Uf(t,e){t.g?t.g.add(e):t.h=e}function nC(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ZE.prototype.cancel=function(){if(this.i=sC(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function sC(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Af(t.i)}var WO=class{stringify(t){return te.JSON.stringify(t,void 0)}parse(t){return te.JSON.parse(t,void 0)}};function KO(){this.g=new WO}function qO(t,e,n){const s=n||"";try{GE(t,function(i,r){let o=i;ca(i)&&(o=Pf(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function GO(t,e){const n=new xc;if(te.Image){const s=new Image;s.onload=La(Ba,n,s,"TestLoadImage: loaded",!0,e),s.onerror=La(Ba,n,s,"TestLoadImage: error",!1,e),s.onabort=La(Ba,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=La(Ba,n,s,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ba(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function pa(t){this.l=t.fc||null,this.j=t.ob||!1}pt(pa,Bf);pa.prototype.g=function(){return new Fc(this.l,this.j)};pa.prototype.i=function(t){return function(){return t}}({});function Fc(t,e){gt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Hf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}pt(Fc,gt);var Hf=0;U=Fc.prototype;U.open=function(t,e){if(this.readyState!=Hf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,$o(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||te).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ma(this)),this.readyState=Hf};U.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$o(this)),this.g&&(this.readyState=3,$o(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;iC(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function iC(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}U.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ma(this):$o(this),this.readyState==3&&iC(this)}};U.Za=function(t){this.g&&(this.response=this.responseText=t,ma(this))};U.Ya=function(t){this.g&&(this.response=t,ma(this))};U.ka=function(){this.g&&ma(this)};function ma(t){t.readyState=4,t.l=null,t.j=null,t.A=null,$o(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function $o(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Fc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var YO=te.JSON.parse;function qe(t){gt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=rC,this.L=this.M=!1}pt(qe,gt);var rC="",QO=/^https?$/i,XO=["POST","PUT"];U=qe.prototype;U.Oa=function(t){this.M=t};U.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():$h.g(),this.C=this.u?av(this.u):av($h),this.g.onreadystatechange=At(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){uv(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=te.FormData&&t instanceof te.FormData,!(0<=CE(XO,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{lC(this),0<this.B&&((this.L=JO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=At(this.ua,this)):this.A=Ff(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){uv(this,r)}};function JO(t){return or&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.ua=function(){typeof If<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,wt(this,"timeout"),this.abort(8))};function uv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,oC(t),Bc(t)}function oC(t){t.F||(t.F=!0,wt(t,"complete"),wt(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,wt(this,"complete"),wt(this,"abort"),Bc(this))};U.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bc(this,!0)),qe.$.N.call(this)};U.La=function(){this.s||(this.G||this.v||this.l?aC(this):this.kb())};U.kb=function(){aC(this)};function aC(t){if(t.h&&typeof If<"u"&&(!t.C[1]||Mn(t)!=4||t.da()!=2)){if(t.v&&Mn(t)==4)Ff(t.La,0,t);else if(wt(t,"readystatechange"),Mn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(YE)[1]||null;!i&&te.self&&te.self.location&&(i=te.self.location.protocol.slice(0,-1)),s=!QO.test(i?i.toLowerCase():"")}n=s}if(n)wt(t,"complete"),wt(t,"success");else{t.m=6;try{var r=2<Mn(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",oC(t)}}finally{Bc(t)}}}}function Bc(t,e){if(t.g){lC(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||wt(t,"ready");try{n.onreadystatechange=s}catch{}}}function lC(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}U.isActive=function(){return!!this.g};function Mn(t){return t.g?t.g.readyState:0}U.da=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}};U.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),YO(e)}};function hv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case rC:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ZO(t){const e={};t=(t.g&&2<=Mn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Oo(t[s]))continue;var n=TO(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}vO(e,function(s){return s.join(", ")})}U.Ia=function(){return this.m};U.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function cC(t){let e="";return Rf(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function jf(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=cC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):$e(t,e,n))}function Hr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function uC(t){this.Ga=0,this.j=[],this.l=new xc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Hr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Hr("baseRetryDelayMs",5e3,t),this.hb=Hr("retryDelaySeedMs",1e4,t),this.eb=Hr("forwardChannelMaxRetries",2,t),this.xa=Hr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new ZE(t&&t.concurrentRequestLimit),this.Ja=new KO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}U=uC.prototype;U.ra=8;U.H=1;function zf(t){if(hC(t),t.H==3){var e=t.W++,n=ns(t.I);if($e(n,"SID",t.K),$e(n,"RID",e),$e(n,"TYPE","terminate"),va(t,n),e=new fa(t,t.l,e),e.L=2,e.v=Lc(ns(n)),n=!1,te.navigator&&te.navigator.sendBeacon)try{n=te.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=_C(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ga(e)}vC(t)}function Vc(t){t.g&&(Kf(t),t.g.cancel(),t.g=null)}function hC(t){Vc(t),t.u&&(te.clearTimeout(t.u),t.u=null),Ml(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function $c(t){if(!eC(t.i)&&!t.m){t.m=!0;var e=t.Na;Mo||PE(),Lo||(Mo(),Lo=!0),Mf.add(e,t),t.C=0}}function eP(t,e){return tC(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ha(At(t.Na,t,e),mC(t,t.C)),t.C++,!0)}U.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new fa(this,this.l,t);let r=this.s;if(this.U&&(r?(r=IE(r),AE(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=dC(this,i,e),n=ns(this.I),$e(n,"RID",t),$e(n,"CVER",22),this.F&&$e(n,"X-HTTP-Session-Id",this.F),va(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(cC(r)))+"&"+e:this.o&&jf(n,this.o,r)),Uf(this.i,i),this.bb&&$e(n,"TYPE","init"),this.P?($e(n,"$req",e),$e(n,"SID","null"),i.aa=!0,Hh(i,n,null)):Hh(i,n,e),this.H=2}}else this.H==3&&(t?dv(this,t):this.j.length==0||eC(this.i)||dv(this))};function dv(t,e){var n;e?n=e.m:n=t.W++;const s=ns(t.I);$e(s,"SID",t.K),$e(s,"RID",n),$e(s,"AID",t.V),va(t,s),t.o&&t.s&&jf(s,t.o,t.s),n=new fa(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=dC(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Uf(t.i,n),Hh(n,s,e)}function va(t,e){t.na&&Rf(t.na,function(n,s){$e(e,s,n)}),t.h&&GE({},function(n,s){$e(e,s,n)})}function dC(t,e,n){n=Math.min(t.j.length,n);var s=t.h?At(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=r,0>c)r=Math.max(0,i[l].g-100),a=!1;else try{qO(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function fC(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Mo||PE(),Lo||(Mo(),Lo=!0),Mf.add(e,t),t.A=0}}function Wf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ha(At(t.Ma,t),mC(t,t.A)),t.A++,!0)}U.Ma=function(){if(this.u=null,gC(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ha(At(this.jb,this),t)}};U.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Dt(10),Vc(this),gC(this))};function Kf(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function gC(t){t.g=new fa(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=ns(t.wa);$e(e,"RID","rpc"),$e(e,"SID",t.K),$e(e,"AID",t.V),$e(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&$e(e,"TO",t.qa),$e(e,"TYPE","xmlhttp"),va(t,e),t.o&&t.s&&jf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Lc(ns(e)),n.s=null,n.S=!0,zE(n,t)}U.ib=function(){this.v!=null&&(this.v=null,Vc(this),Wf(this),Dt(19))};function Ml(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function pC(t,e){var n=null;if(t.g==e){Ml(t),Kf(t),t.g=null;var s=2}else if(zh(t.i,e))n=e.F,nC(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=Dc(),wt(s,new $E(s,n)),$c(t)}else fC(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(s==1&&eP(t,e)||s==2&&Wf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Js(t,5);break;case 4:Js(t,10);break;case 3:Js(t,6);break;default:Js(t,2)}}}function mC(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Js(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=At(t.pb,t);n||(n=new ri("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||Ol(n,"https"),Lc(n)),GO(n.toString(),s)}else Dt(2);t.H=0,t.h&&t.h.za(e),vC(t),hC(t)}U.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Dt(2)):(this.l.info("Failed to ping google.com"),Dt(1))};function vC(t){if(t.H=0,t.ma=[],t.h){const e=sC(t.i);(e.length!=0||t.j.length!=0)&&(nv(t.ma,e),nv(t.ma,t.j),t.i.i.length=0,Af(t.j),t.j.length=0),t.h.ya()}}function yC(t,e,n){var s=n instanceof ri?ns(n):new ri(n);if(s.g!="")e&&(s.g=e+"."+s.g),Pl(s,s.m);else{var i=te.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new ri(null);s&&Ol(r,s),e&&(r.g=e),i&&Pl(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&$e(s,n,e),$e(s,"VER",t.ra),va(t,s),s}function _C(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new qe(new pa({ob:!0})):new qe(t.va),e.Oa(t.J),e}U.isActive=function(){return!!this.h&&this.h.isActive(this)};function wC(){}U=wC.prototype;U.Ba=function(){};U.Aa=function(){};U.za=function(){};U.ya=function(){};U.isActive=function(){return!0};U.Va=function(){};function Ll(){if(or&&!(10<=Number(fO)))throw Error("Environmental error: no available transport.")}Ll.prototype.g=function(t,e){return new Xt(t,e)};function Xt(t,e){gt.call(this),this.g=new uC(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Oo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Oo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new kr(this)}pt(Xt,gt);Xt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Dt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=yC(t,null,t.Y),$c(t)};Xt.prototype.close=function(){zf(this.g)};Xt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Pf(t),t=n);e.j.push(new jO(e.fb++,t)),e.H==3&&$c(e)};Xt.prototype.N=function(){this.g.h=null,delete this.j,zf(this.g),delete this.g,Xt.$.N.call(this)};function EC(t){Vf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}pt(EC,Vf);function CC(){$f.call(this),this.status=1}pt(CC,$f);function kr(t){this.g=t}pt(kr,wC);kr.prototype.Ba=function(){wt(this.g,"a")};kr.prototype.Aa=function(t){wt(this.g,new EC(t))};kr.prototype.za=function(t){wt(this.g,new CC)};kr.prototype.ya=function(){wt(this.g,"b")};function tP(){this.blockSize=-1}function wn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}pt(wn,tP);wn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Du(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}wn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)Du(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){Du(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){Du(this,s),i=0;break}}this.h=i,this.i+=e};wn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Ne(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var nP={};function qf(t){return-128<=t&&128>t?uO(t,function(e){return new Ne([e|0],0>e?-1:0)}):new Ne([t|0],0>t?-1:0)}function Ln(t){if(isNaN(t)||!isFinite(t))return Hi;if(0>t)return yt(Ln(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Wh;return new Ne(e,0)}function bC(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return yt(bC(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ln(Math.pow(e,8)),s=Hi,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=Ln(Math.pow(e,r)),s=s.R(r).add(Ln(o))):(s=s.R(n),s=s.add(Ln(o)))}return s}var Wh=4294967296,Hi=qf(0),Kh=qf(1),fv=qf(16777216);U=Ne.prototype;U.ea=function(){if(tn(this))return-yt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Wh+s)*e,e*=Wh}return t};U.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Xn(this))return"0";if(tn(this))return"-"+yt(this).toString(t);for(var e=Ln(Math.pow(t,6)),n=this,s="";;){var i=Bl(n,e).g;n=Fl(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Xn(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};U.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Xn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function tn(t){return t.h==-1}U.X=function(t){return t=Fl(this,t),tn(t)?-1:Xn(t)?0:1};function yt(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Ne(n,~t.h).add(Kh)}U.abs=function(){return tn(this)?yt(this):this};U.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new Ne(n,n[n.length-1]&-2147483648?-1:0)};function Fl(t,e){return t.add(yt(e))}U.R=function(t){if(Xn(this)||Xn(t))return Hi;if(tn(this))return tn(t)?yt(this).R(yt(t)):yt(yt(this).R(t));if(tn(t))return yt(this.R(yt(t)));if(0>this.X(fv)&&0>t.X(fv))return Ln(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,Va(n,2*s+2*i),n[2*s+2*i+1]+=r*l,Va(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,Va(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,Va(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Ne(n,0)};function Va(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function jr(t,e){this.g=t,this.h=e}function Bl(t,e){if(Xn(e))throw Error("division by zero");if(Xn(t))return new jr(Hi,Hi);if(tn(t))return e=Bl(yt(t),e),new jr(yt(e.g),yt(e.h));if(tn(e))return e=Bl(t,yt(e)),new jr(yt(e.g),e.h);if(30<t.g.length){if(tn(t)||tn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Kh,s=e;0>=s.X(t);)n=gv(n),s=gv(s);var i=Ai(n,1),r=Ai(s,1);for(s=Ai(s,2),n=Ai(n,2);!Xn(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=Ai(s,1),n=Ai(n,1)}return e=Fl(t,i.R(e)),new jr(i,e)}for(i=Hi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=Ln(n),o=r.R(e);tn(o)||0<o.X(t);)n-=s,r=Ln(n),o=r.R(e);Xn(r)&&(r=Kh),i=i.add(r),t=Fl(t,o)}return new jr(i,t)}U.gb=function(t){return Bl(this,t).h};U.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Ne(n,this.h&t.h)};U.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Ne(n,this.h|t.h)};U.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Ne(n,this.h^t.h)};function gv(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Ne(n,t.h)}function Ai(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new Ne(i,t.h)}Ll.prototype.createWebChannel=Ll.prototype.g;Xt.prototype.send=Xt.prototype.u;Xt.prototype.open=Xt.prototype.m;Xt.prototype.close=Xt.prototype.close;Oc.NO_ERROR=0;Oc.TIMEOUT=8;Oc.HTTP_ERROR=6;UE.COMPLETE="complete";HE.EventType=da;da.OPEN="a";da.CLOSE="b";da.ERROR="c";da.MESSAGE="d";gt.prototype.listen=gt.prototype.O;qe.prototype.listenOnce=qe.prototype.P;qe.prototype.getLastError=qe.prototype.Sa;qe.prototype.getLastErrorCode=qe.prototype.Ia;qe.prototype.getStatus=qe.prototype.da;qe.prototype.getResponseJson=qe.prototype.Wa;qe.prototype.getResponseText=qe.prototype.ja;qe.prototype.send=qe.prototype.ha;qe.prototype.setWithCredentials=qe.prototype.Oa;wn.prototype.digest=wn.prototype.l;wn.prototype.reset=wn.prototype.reset;wn.prototype.update=wn.prototype.j;Ne.prototype.add=Ne.prototype.add;Ne.prototype.multiply=Ne.prototype.R;Ne.prototype.modulo=Ne.prototype.gb;Ne.prototype.compare=Ne.prototype.X;Ne.prototype.toNumber=Ne.prototype.ea;Ne.prototype.toString=Ne.prototype.toString;Ne.prototype.getBits=Ne.prototype.D;Ne.fromNumber=Ln;Ne.fromString=bC;var sP=function(){return new Ll},iP=function(){return Dc()},Ou=Oc,rP=UE,oP=Ei,pv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},aP=pa,$a=HE,lP=qe,cP=wn,ji=Ne;const mv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rr="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new sa("@firebase/firestore");function vv(){return fi.logLevel}function q(t,...e){if(fi.logLevel<=_e.DEBUG){const n=e.map(Gf);fi.debug(`Firestore (${Rr}): ${t}`,...n)}}function ss(t,...e){if(fi.logLevel<=_e.ERROR){const n=e.map(Gf);fi.error(`Firestore (${Rr}): ${t}`,...n)}}function Uo(t,...e){if(fi.logLevel<=_e.WARN){const n=e.map(Gf);fi.warn(`Firestore (${Rr}): ${t}`,...n)}}function Gf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${Rr}) INTERNAL ASSERTION FAILED: `+t;throw ss(e),new Error(e)}function lt(t,e){t||ae()}function Ce(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends as{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ft.UNAUTHENTICATED))}shutdown(){}}class dP{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new zi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new zi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new zi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(lt(typeof s.accessToken=="string"),new uP(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return lt(e===null||typeof e=="string"),new Ft(e)}}class fP{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class gP{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new fP(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mP{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(lt(typeof n.token=="string"),this.T=n.token,new pP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=vP(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Te(t,e){return t<e?-1:t>e?1:0}function ar(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $t.fromMillis(Date.now())}static fromDate(e){return $t.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new $t(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new $t(0,0))}static max(){return new re(new $t(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n,s){n===void 0?n=0:n>e.length&&ae(),s===void 0?s=e.length-n:s>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ho.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ho?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class st extends Ho{construct(e,n,s){return new st(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ne(H.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new st(n)}static emptyPath(){return new st([])}}const _P=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Bt extends Ho{construct(e,n,s){return new Bt(e,n,s)}static isValidIdentifier(e){return _P.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Bt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new ne(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ne(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ne(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new ne(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Bt(n)}static emptyPath(){return new Bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(st.fromString(e))}static fromName(e){return new ee(st.fromString(e).popFirst(5))}static empty(){return new ee(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return st.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new st(e.slice()))}}function wP(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(s===1e9?new $t(n+1,0):new $t(n,s));return new xs(i,ee.empty(),e)}function EP(t){return new xs(t.readTime,t.key,-1)}class xs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new xs(re.min(),ee.empty(),-1)}static max(){return new xs(re.max(),ee.empty(),-1)}}function CP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class TP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yf(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==bP)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):D.reject(n)}static resolve(e){return new D((n,s)=>{n(e)})}static reject(e){return new D((n,s)=>{s(e)})}static waitFor(e){return new D((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=D.resolve(!1);for(const s of e)n=n.next(i=>i?D.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new D((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new D((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function ya(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Qf.ct=-1;function Uc(t){return t==null}function qh(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hc(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function SP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){this.comparator=e,this.root=n||vt.EMPTY}insert(e,n){return new Je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ua(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ua(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ua(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ua(this.root,e,this.comparator,!0)}}class Ua{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class vt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??vt.RED,this.left=i??vt.EMPTY,this.right=r??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new vt(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return vt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(t,e,n,s,i){return this}insert(t,e,n){return new vt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _v(this.data.getIterator())}getIteratorFrom(e){return new _v(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Rt(this.comparator);return n.data=e,n}}class _v{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.fields=e,e.sort(Bt.comparator)}static empty(){return new Es([])}unionWith(e){let n=new Rt(Bt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Es(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ar(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new TC("Invalid base64 string: "+i):i}}(e);return new Nt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const IP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ds(t){if(lt(!!t),typeof t=="string"){let e=0;const n=IP.exec(t);if(lt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gi(t){return typeof t=="string"?Nt.fromBase64String(t):Nt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Jf(t){const e=t.mapValue.fields.__previous_value__;return Xf(e)?Jf(e):e}function jo(t){const e=Ds(t.mapValue.fields.__local_write_time__.timestampValue);return new $t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e,n,s,i,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class zo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new zo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof zo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xf(t)?4:kP(t)?9007199254740991:10:ae()}function $n(t,e){if(t===e)return!0;const n=pi(t);if(n!==pi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return jo(t).isEqual(jo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Ds(s.timestampValue),o=Ds(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return gi(s.bytesValue).isEqual(gi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return nt(s.geoPointValue.latitude)===nt(i.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return nt(s.integerValue)===nt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=nt(s.doubleValue),o=nt(i.doubleValue);return r===o?qh(r)===qh(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return ar(t.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(yv(r)!==yv(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!$n(r[a],o[a])))return!1;return!0}(t,e);default:return ae()}}function Wo(t,e){return(t.values||[]).find(n=>$n(n,e))!==void 0}function lr(t,e){if(t===e)return 0;const n=pi(t),s=pi(e);if(n!==s)return Te(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=nt(i.integerValue||i.doubleValue),a=nt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return wv(t.timestampValue,e.timestampValue);case 4:return wv(jo(t),jo(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(i,r){const o=gi(i),a=gi(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Te(o[l],a[l]);if(c!==0)return c}return Te(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=Te(nt(i.latitude),nt(r.latitude));return o!==0?o:Te(nt(i.longitude),nt(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=lr(o[l],a[l]);if(c)return c}return Te(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Ha.mapValue&&r===Ha.mapValue)return 0;if(i===Ha.mapValue)return 1;if(r===Ha.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=Te(a[u],c[u]);if(h!==0)return h;const d=lr(o[a[u]],l[c[u]]);if(d!==0)return d}return Te(a.length,c.length)}(t.mapValue,e.mapValue);default:throw ae()}}function wv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Ds(t),s=Ds(e),i=Te(n.seconds,s.seconds);return i!==0?i:Te(n.nanos,s.nanos)}function cr(t){return Gh(t)}function Gh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Ds(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?gi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ee.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Gh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Gh(s.fields[a])}`;return r+"}"}(t.mapValue):ae();var e,n}function Yh(t){return!!t&&"integerValue"in t}function Zf(t){return!!t&&"arrayValue"in t}function Ev(t){return!!t&&"nullValue"in t}function Cv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pu(t){return!!t&&"mapValue"in t}function uo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hc(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=uo(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=uo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function kP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.value=e}static empty(){return new Dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Pu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=uo(n)}setAll(e){let n=Bt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=uo(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Pu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Pu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Hc(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Dn(uo(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Tt(e,0,re.min(),re.min(),re.min(),Dn.empty(),0)}static newFoundDocument(e,n,s,i){return new Tt(e,1,n,re.min(),s,i,0)}static newNoDocument(e,n){return new Tt(e,2,n,re.min(),re.min(),Dn.empty(),0)}static newUnknownDocument(e,n){return new Tt(e,3,n,re.min(),re.min(),Dn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n){this.position=e,this.inclusive=n}}function bv(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=ee.comparator(ee.fromName(o.referenceValue),n.key):s=lr(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Tv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$n(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n="asc"){this.field=e,this.dir=n}}function RP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{}class at extends SC{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new xP(e,n,s):n==="array-contains"?new PP(e,s):n==="in"?new MP(e,s):n==="not-in"?new LP(e,s):n==="array-contains-any"?new FP(e,s):new at(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new DP(e,s):new OP(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(lr(n,this.value)):n!==null&&pi(this.value)===pi(n)&&this.matchesComparison(lr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Un extends SC{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Un(e,n)}matches(e){return IC(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function IC(t){return t.op==="and"}function AC(t){return NP(t)&&IC(t)}function NP(t){for(const e of t.filters)if(e instanceof Un)return!1;return!0}function Qh(t){if(t instanceof at)return t.field.canonicalString()+t.op.toString()+cr(t.value);if(AC(t))return t.filters.map(e=>Qh(e)).join(",");{const e=t.filters.map(n=>Qh(n)).join(",");return`${t.op}(${e})`}}function kC(t,e){return t instanceof at?function(n,s){return s instanceof at&&n.op===s.op&&n.field.isEqual(s.field)&&$n(n.value,s.value)}(t,e):t instanceof Un?function(n,s){return s instanceof Un&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&kC(r,s.filters[o]),!0):!1}(t,e):void ae()}function RC(t){return t instanceof at?function(e){return`${e.field.canonicalString()} ${e.op} ${cr(e.value)}`}(t):t instanceof Un?function(e){return e.op.toString()+" {"+e.getFilters().map(RC).join(" ,")+"}"}(t):"Filter"}class xP extends at{constructor(e,n,s){super(e,n,s),this.key=ee.fromName(s.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class DP extends at{constructor(e,n){super(e,"in",n),this.keys=NC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class OP extends at{constructor(e,n){super(e,"not-in",n),this.keys=NC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function NC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ee.fromName(s.referenceValue))}class PP extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zf(n)&&Wo(n.arrayValue,this.value)}}class MP extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Wo(this.value.arrayValue,n)}}class LP extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(Wo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Wo(this.value.arrayValue,n)}}class FP extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Wo(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function Sv(t,e=null,n=[],s=[],i=null,r=null,o=null){return new BP(t,e,n,s,i,r,o)}function eg(t){const e=Ce(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Qh(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Uc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>cr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>cr(s)).join(",")),e.dt=n}return e.dt}function tg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!RP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!kC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tv(t.startAt,e.startAt)&&Tv(t.endAt,e.endAt)}function Xh(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function VP(t,e,n,s,i,r,o,a){return new jc(t,e,n,s,i,r,o,a)}function ng(t){return new jc(t)}function Iv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $P(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function UP(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function HP(t){return t.collectionGroup!==null}function Wi(t){const e=Ce(t);if(e.wt===null){e.wt=[];const n=UP(e),s=$P(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new ho(n)),e.wt.push(new ho(Bt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new ho(Bt.keyField(),r))}}}return e.wt}function is(t){const e=Ce(t);if(!e._t)if(e.limitType==="F")e._t=Sv(e.path,e.collectionGroup,Wi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Wi(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new ho(r.field,o))}const s=e.endAt?new Vl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Vl(e.startAt.position,e.startAt.inclusive):null;e._t=Sv(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function Jh(t,e,n){return new jc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zc(t,e){return tg(is(t),is(e))&&t.limitType===e.limitType}function xC(t){return`${eg(is(t))}|lt:${t.limitType}`}function Zh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>RC(s)).join(", ")}]`),Uc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>cr(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>cr(s)).join(",")),`Target(${n})`}(is(t))}; limitType=${t.limitType})`}function Wc(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):ee.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Wi(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=bv(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Wi(n),s)||n.endAt&&!function(i,r,o){const a=bv(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Wi(n),s))}(t,e)}function jP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function DC(t){return(e,n)=>{let s=!1;for(const i of Wi(t)){const r=zP(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function zP(t,e,n){const s=t.field.isKeyField()?ee.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?lr(a,l):ae()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Hc(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return SP(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=new Je(ee.comparator);function Os(){return WP}const OC=new Je(ee.comparator);function Xr(...t){let e=OC;for(const n of t)e=e.insert(n.key,n);return e}function KP(t){let e=OC;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Zs(){return fo()}function PC(){return fo()}function fo(){return new Nr(t=>t.toString(),(t,e)=>t.isEqual(e))}const qP=new Rt(ee.comparator);function Ee(...t){let e=qP;for(const n of t)e=e.add(n);return e}const GP=new Rt(Te);function YP(){return GP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qh(e)?"-0":e}}function XP(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this._=void 0}}function JP(t,e,n){return t instanceof ed?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Xf(i)&&(i=Jf(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof $l?MC(t,e):t instanceof Ul?LC(t,e):function(s,i){const r=eM(s,i),o=Av(r)+Av(s.gt);return Yh(r)&&Yh(s.gt)?XP(o):QP(s.serializer,o)}(t,e)}function ZP(t,e,n){return t instanceof $l?MC(t,e):t instanceof Ul?LC(t,e):n}function eM(t,e){return t instanceof td?Yh(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ed extends Kc{}class $l extends Kc{constructor(e){super(),this.elements=e}}function MC(t,e){const n=FC(e);for(const s of t.elements)n.some(i=>$n(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ul extends Kc{constructor(e){super(),this.elements=e}}function LC(t,e){let n=FC(e);for(const s of t.elements)n=n.filter(i=>!$n(i,s));return{arrayValue:{values:n}}}class td extends Kc{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Av(t){return nt(t.integerValue||t.doubleValue)}function FC(t){return Zf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function tM(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof $l&&s instanceof $l||n instanceof Ul&&s instanceof Ul?ar(n.elements,s.elements,$n):n instanceof td&&s instanceof td?$n(n.gt,s.gt):n instanceof ed&&s instanceof ed}(t.transform,e.transform)}class oi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new oi}static exists(e){return new oi(void 0,e)}static updateTime(e){return new oi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sg{}function BC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new sM(t.key,oi.none()):new ig(t.key,t.data,oi.none());{const n=t.data,s=Dn.empty();let i=new Rt(Bt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new qc(t.key,s,new Es(i.toArray()),oi.none())}}function nM(t,e,n){t instanceof ig?function(s,i,r){const o=s.value.clone(),a=Rv(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof qc?function(s,i,r){if(!tl(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Rv(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(VC(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function go(t,e,n,s){return t instanceof ig?function(i,r,o,a){if(!tl(i.precondition,r))return o;const l=i.value.clone(),c=Nv(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof qc?function(i,r,o,a){if(!tl(i.precondition,r))return o;const l=Nv(i.fieldTransforms,a,r),c=r.data;return c.setAll(VC(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return tl(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function kv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ar(n,s,(i,r)=>tM(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ig extends sg{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class qc extends sg{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function VC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Rv(t,e,n){const s=new Map;lt(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,ZP(o,a,n[i]))}return s}function Nv(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,JP(r,o,e))}return s}class sM extends sg{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&nM(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=go(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=go(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=PC();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=BC(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(re.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&ar(this.mutations,e.mutations,(n,s)=>kv(n,s))&&ar(this.baseMutations,e.baseMutations,(n,s)=>kv(n,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,fe;function $C(t){if(t===void 0)return ss("GRPC error has no .code"),H.UNKNOWN;switch(t){case tt.OK:return H.OK;case tt.CANCELLED:return H.CANCELLED;case tt.UNKNOWN:return H.UNKNOWN;case tt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case tt.INTERNAL:return H.INTERNAL;case tt.UNAVAILABLE:return H.UNAVAILABLE;case tt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case tt.NOT_FOUND:return H.NOT_FOUND;case tt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case tt.ABORTED:return H.ABORTED;case tt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case tt.DATA_LOSS:return H.DATA_LOSS;default:return ae()}}(fe=tt||(tt={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ja}static getOrCreateInstance(){return ja===null&&(ja=new rg),ja}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ja=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aM(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lM=new ji([4294967295,4294967295],0);function xv(t){const e=aM().encode(t),n=new cP;return n.update(e),new Uint8Array(n.digest())}function Dv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new ji([n,s],0),new ji([i,r],0)]}class og{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Jr(`Invalid padding: ${n}`);if(s<0)throw new Jr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Jr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Jr(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=ji.fromNumber(this.It)}Et(e,n,s){let i=e.add(n.multiply(ji.fromNumber(s)));return i.compare(lM)===1&&(i=new ji([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=xv(e),[s,i]=Dv(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);if(!this.At(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new og(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=xv(e),[s,i]=Dv(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Jr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,_a.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Gc(re.min(),i,new Je(Te),Os(),Ee())}}class _a{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new _a(s,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n,s,i){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=i}}class UC{constructor(e,n){this.targetId=e,this.Vt=n}}class HC{constructor(e,n,s=Nt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Ov{constructor(){this.St=0,this.Dt=Mv(),this.Ct=Nt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Ee(),n=Ee(),s=Ee();return this.Dt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:ae()}}),new _a(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=Mv()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class cM{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Os(),this.zt=Pv(),this.Wt=new Je(Te)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,i)=>{this.te(i)&&n(i)})}ne(e){var n;const s=e.targetId,i=e.Vt.count,r=this.se(s);if(r){const o=r.target;if(Xh(o))if(i===0){const a=new ee(o.path);this.Yt(s,a,Tt.newNoDocument(a,re.min()))}else lt(i===1);else{const a=this.ie(s);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(s);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,c)}(n=rg.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,u,h){var d,f,g,m,y,w;const C={localCacheCount:u,existenceFilterCount:h.count},I=h.unchangedNames;return I&&(C.bloomFilter={applied:c===0,hashCount:(d=I==null?void 0:I.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(m=(g=(f=I==null?void 0:I.bits)===null||f===void 0?void 0:f.bitmap)===null||g===void 0?void 0:g.length)!==null&&m!==void 0?m:0,padding:(w=(y=I==null?void 0:I.bits)===null||y===void 0?void 0:y.padding)!==null&&w!==void 0?w:0}),C}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:i}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let l,c;try{l=gi(r).toUint8Array()}catch(u){if(u instanceof TC)return Uo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{c=new og(l,o,a)}catch(u){return Uo(u instanceof Jr?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return c.It===0?1:i!==n-this.oe(e.targetId,c)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;n.vt(a)||(this.Yt(e,r,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((r,o)=>{const a=this.se(o);if(a){if(r.current&&Xh(a.target)){const l=new ee(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Tt.newNoDocument(l,e))}r.Mt&&(n.set(o,r.Ot()),r.Ft())}});let s=Ee();this.zt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.se(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(e));const i=new Gc(e,n,this.Wt,this.jt,s);return this.jt=Os(),this.zt=Pv(),this.Wt=new Je(Te),i}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Ov,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Rt(Te),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Ov),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Pv(){return new Je(ee.comparator)}function Mv(){return new Je(ee.comparator)}const uM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),hM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),dM=(()=>({and:"AND",or:"OR"}))();class fM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function nd(t,e){return t.useProto3Json||Uc(e)?e:{value:e}}function gM(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pM(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ki(t){return lt(!!t),re.fromTimestamp(function(e){const n=Ds(e);return new $t(n.seconds,n.nanos)}(t))}function mM(t,e){return function(n){return new st(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function jC(t){const e=st.fromString(t);return lt(qC(e)),e}function Mu(t,e){const n=jC(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(zC(n))}function sd(t,e){return mM(t.databaseId,e)}function vM(t){const e=jC(t);return e.length===4?st.emptyPath():zC(e)}function Lv(t){return new st(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zC(t){return lt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yM(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.useProto3Json?(lt(c===void 0||typeof c=="string"),Nt.fromBase64String(c||"")):(lt(c===void 0||c instanceof Uint8Array),Nt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?H.UNKNOWN:$C(l.code);return new ne(c,l.message||"")}(o);n=new HC(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Mu(t,s.document.name),r=Ki(s.document.updateTime),o=s.document.createTime?Ki(s.document.createTime):re.min(),a=new Dn({mapValue:{fields:s.document.fields}}),l=Tt.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new nl(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Mu(t,s.document),r=s.readTime?Ki(s.readTime):re.min(),o=Tt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new nl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Mu(t,s.document),r=s.removedTargetIds||[];n=new nl([],r,i,null)}else{if(!("filter"in e))return ae();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new oM(i,r),a=s.targetId;n=new UC(a,o)}}return n}function _M(t,e){return{documents:[sd(t,e.path)]}}function wM(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=sd(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=sd(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return KC(Un.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Ri(u.field),direction:bM(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=nd(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function EM(t){let e=vM(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){lt(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=WC(u);return h instanceof Un&&AC(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new ho(Ni(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Uc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new Vl(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new Vl(d,h)}(n.endAt)),VP(e,i,o,r,a,"F",l,c)}function CM(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function WC(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ni(e.unaryFilter.field);return at.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ni(e.unaryFilter.field);return at.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ni(e.unaryFilter.field);return at.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ni(e.unaryFilter.field);return at.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(e){return at.create(Ni(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Un.create(e.compositeFilter.filters.map(n=>WC(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return ae()}}(e.compositeFilter.op))}(t):ae()}function bM(t){return uM[t]}function TM(t){return hM[t]}function SM(t){return dM[t]}function Ri(t){return{fieldPath:t.canonicalString()}}function Ni(t){return Bt.fromServerFormat(t.fieldPath)}function KC(t){return t instanceof at?function(e){if(e.op==="=="){if(Cv(e.value))return{unaryFilter:{field:Ri(e.field),op:"IS_NAN"}};if(Ev(e.value))return{unaryFilter:{field:Ri(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Cv(e.value))return{unaryFilter:{field:Ri(e.field),op:"IS_NOT_NAN"}};if(Ev(e.value))return{unaryFilter:{field:Ri(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ri(e.field),op:TM(e.op),value:e.value}}}(t):t instanceof Un?function(e){const n=e.getFilters().map(s=>KC(s));return n.length===1?n[0]:{compositeFilter:{op:SM(e.op),filters:n}}}(t):ae()}function qC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n,s,i,r=re.min(),o=re.min(),a=Nt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Cs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Cs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(e){this.fe=e}}function AM(t){const e=EM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(){this.rn=new RM}addToCollectionParentIndex(e,n){return this.rn.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(xs.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(xs.min())}updateCollectionGroup(e,n,s){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class RM{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Rt(st.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Rt(st.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new ur(0)}static Mn(){return new ur(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(){this.changes=new Nr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?D.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&go(s.mutation,i,Es.empty(),$t.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Ee()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Ee()){const i=Zs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Xr();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Zs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Ee()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Os();const o=fo(),a=fo();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof qc)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),go(u.mutation,c,u.mutation.getFieldMask(),$t.now())):o.set(c.key,Es.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new xM(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=fo();let i=new Je((o,a)=>o-a),r=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Es.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||Ee()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=PC();u.forEach(d=>{if(!r.has(d)){const f=BC(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return D.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return ee.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):HP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):D.resolve(Zs());let a=-1,l=r;return o.next(c=>D.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?D.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,Ee())).next(u=>({batchId:a,changes:KP(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(s=>{let i=Xr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Xr();return this.indexManager.getCollectionParents(e,i).next(o=>D.forEach(o,a=>{const l=function(c,u){return new jc(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Tt.newInvalidDocument(c)))});let o=Xr();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&go(c.mutation,l,Es.empty(),$t.now()),Wc(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return D.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:Ki(s.createTime)}),D.resolve()}getNamedQuery(e,n){return D.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:AM(s.bundledQuery),readTime:Ki(s.readTime)}}(n)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(){this.overlays=new Je(ee.comparator),this.ls=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Zs();return D.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.we(e,n,r)}),D.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ls.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(s)),D.resolve()}getOverlaysForCollection(e,n,s){const i=Zs(),r=n.length+1,o=new ee(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return D.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Je((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=Zs(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Zs(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return D.resolve(a)}we(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(s.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new rM(n,s));let r=this.ls.get(n);r===void 0&&(r=Ee(),this.ls.set(n,r)),this.ls.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.fs=new Rt(ut.ds),this.ws=new Rt(ut._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new ut(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new ut(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new ee(new st([])),s=new ut(n,e),i=new ut(n,e+1),r=[];return this.ws.forEachInRange([s,i],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new ee(new st([])),s=new ut(n,e),i=new ut(n,e+1);let r=Ee();return this.ws.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ut(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ut{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return ee.comparator(e.key,n.key)||Te(e.As,n.As)}static _s(e,n){return Te(e.As,n.As)||ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Rt(ut.ds)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new iM(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new ut(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.bs(s),r=i<0?0:i;return D.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ut(n,0),i=new ut(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([s,i],o=>{const a=this.Ps(o.As);r.push(a)}),D.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Rt(Te);return n.forEach(i=>{const r=new ut(i,0),o=new ut(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{s=s.add(a.As)})}),D.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;ee.isDocumentKey(r)||(r=r.child(""));const o=new ut(new ee(r),0);let a=new Rt(Te);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.As)),!0)},o),D.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const i=this.Ps(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){lt(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return D.forEach(n.mutations,i=>{const r=new ut(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new ut(n,0),i=this.Rs.firstAfterOrEqual(s);return D.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(e){this.Ds=e,this.docs=new Je(ee.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return D.resolve(s?s.document.mutableCopy():Tt.newInvalidDocument(n))}getEntries(e,n){let s=Os();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Tt.newInvalidDocument(i))}),D.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Os();const o=n.path,a=new ee(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||CP(EP(u),s)<=0||(i.has(u.key)||Wc(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return D.resolve(r)}getAllFromCollectionGroup(e,n,s,i){ae()}Cs(e,n){return D.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new FM(this)}getSize(e){return D.resolve(this.size)}}class FM extends NM{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(s)}),D.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(e){this.persistence=e,this.xs=new Nr(n=>eg(n),tg),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Ns=0,this.ks=new ag,this.targetCount=0,this.Ms=ur.kn()}forEachTarget(e,n){return this.xs.forEach((s,i)=>n(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),D.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new ur(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.Fn(n),D.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),D.waitFor(r).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return D.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),D.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),D.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return D.resolve(s)}containsKey(e,n){return D.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{constructor(e,n){this.$s={},this.overlays={},this.Os=new Qf(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new BM(this),this.indexManager=new kM,this.remoteDocumentCache=function(s){return new LM(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new IM(n),this.qs=new OM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new MM(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){q("MemoryPersistence","Starting transaction:",e);const i=new $M(this.Os.next());return this.referenceDelegate.Us(),s(i).next(r=>this.referenceDelegate.Ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gs(e,n){return D.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class $M extends TP{constructor(e){super(),this.currentSequenceNumber=e}}class lg{constructor(e){this.persistence=e,this.Qs=new ag,this.js=null}static zs(e){return new lg(e)}get Ws(){if(this.js)return this.js;throw ae()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),D.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),D.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ws.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Ws,s=>{const i=ee.fromPath(s);return this.Hs(e,i).next(r=>{r||n.removeEntry(i,re.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return D.or([()=>D.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=i}static Li(e,n){let s=Ee(),i=Ee();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new cg(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UM{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ki(e,n).next(r=>r||this.Gi(e,n,i,s)).next(r=>r||this.Qi(e,n))}Ki(e,n){if(Iv(n))return D.resolve(null);let s=is(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Jh(n,null,"F"),s=is(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Ee(...r);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.ji(n,a);return this.zi(n,c,o,l.readTime)?this.Ki(e,Jh(n,null,"F")):this.Wi(e,c,n,l)}))})))}Gi(e,n,s,i){return Iv(n)||i.isEqual(re.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(r=>{const o=this.ji(n,r);return this.zi(n,o,s,i)?this.Qi(e,n):(vv()<=_e.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zh(n)),this.Wi(e,o,n,wP(i,-1)))})}ji(e,n){let s=new Rt(DC(e));return n.forEach((i,r)=>{Wc(e,r)&&(s=s.add(r))}),s}zi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Qi(e,n){return vv()<=_e.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Zh(n)),this.Ui.getDocumentsMatchingQuery(e,n,xs.min())}Wi(e,n,s,i){return this.Ui.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(e,n,s,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Je(Te),this.Yi=new Nr(r=>eg(r),tg),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DM(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function jM(t,e,n,s){return new HM(t,e,n,s)}async function GC(t,e){const n=Ce(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=Ee();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function YC(t){const e=Ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function zM(t,e){const n=Ce(t),s=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Nt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(g,m,y){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,f,u)&&a.push(n.Bs.updateTargetData(r,f))});let l=Os(),c=Ee();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(WM(r,o,e.documentUpdates).next(u=>{l=u.nr,c=u.sr})),!s.isEqual(re.min())){const u=n.Bs.getLastRemoteSnapshotVersion(r).next(h=>n.Bs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return D.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ji=i,r))}function WM(t,e,n){let s=Ee(),i=Ee();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Os();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(re.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{nr:o,sr:i}})}function KM(t,e){const n=Ce(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Bs.getTargetData(s,e).next(r=>r?(i=r,D.resolve(i)):n.Bs.allocateTargetId(s).next(o=>(i=new Cs(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function id(t,e,n){const s=Ce(t),i=s.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ya(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(i.target)}function Fv(t,e,n){const s=Ce(t);let i=re.min(),r=Ee();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=Ce(a),h=u.Yi.get(c);return h!==void 0?D.resolve(u.Ji.get(h)):u.Bs.getTargetData(l,c)}(s,o,is(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?i:re.min(),n?r:Ee())).next(a=>(qM(s,jP(e),a),{documents:a,ir:r})))}function qM(t,e,n){let s=t.Xi.get(e)||re.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Xi.set(e,s)}class Bv{constructor(){this.activeTargetIds=YP()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GM{constructor(){this.Hr=new Bv,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Bv,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let za=null;function Lu(){return za===null?za=268435456+Math.round(2147483648*Math.random()):za++,"0x"+za.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="WebChannelConnection";class JM extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,i,r){const o=Lu(),a=this.To(e,n);q("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const l={};return this.Eo(l,i,r),this.Ao(e,a,l,s).then(c=>(q("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw Uo("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}vo(e,n,s,i,r,o){return this.Io(e,n,s,i,r)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Rr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}To(e,n){const s=QM[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,i){const r=Lu();return new Promise((o,a)=>{const l=new lP;l.setWithCredentials(!0),l.listenOnce(rP.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ou.NO_ERROR:const u=l.getResponseJson();q(Et,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Ou.TIMEOUT:q(Et,`RPC '${e}' ${r} timed out`),a(new ne(H.DEADLINE_EXCEEDED,"Request time out"));break;case Ou.HTTP_ERROR:const h=l.getStatus();if(q(Et,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(y)>=0?y:H.UNKNOWN}(f.status);a(new ne(g,f.message))}else a(new ne(H.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ne(H.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{q(Et,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);q(Et,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}Ro(e,n,s){const i=Lu(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=sP(),a=iP(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new aP({})),this.Eo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=r.join("");q(Et,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const g=new XM({ro:y=>{f?q(Et,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(d||(q(Et,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),q(Et,`RPC '${e}' stream ${i} sending:`,y),h.send(y))},oo:()=>h.close()}),m=(y,w,C)=>{y.listen(w,I=>{try{C(I)}catch(b){setTimeout(()=>{throw b},0)}})};return m(h,$a.EventType.OPEN,()=>{f||q(Et,`RPC '${e}' stream ${i} transport opened.`)}),m(h,$a.EventType.CLOSE,()=>{f||(f=!0,q(Et,`RPC '${e}' stream ${i} transport closed`),g.wo())}),m(h,$a.EventType.ERROR,y=>{f||(f=!0,Uo(Et,`RPC '${e}' stream ${i} transport errored:`,y),g.wo(new ne(H.UNAVAILABLE,"The operation could not be completed")))}),m(h,$a.EventType.MESSAGE,y=>{var w;if(!f){const C=y.data[0];lt(!!C);const I=C,b=I.error||((w=I[0])===null||w===void 0?void 0:w.error);if(b){q(Et,`RPC '${e}' stream ${i} received error:`,b);const L=b.status;let M=function(k){const P=tt[k];if(P!==void 0)return $C(P)}(L),X=b.message;M===void 0&&(M=H.INTERNAL,X="Unknown error status: "+L+" with message "+b.message),f=!0,g.wo(new ne(M,X)),h.close()}else q(Et,`RPC '${e}' stream ${i} received:`,C),g._o(C)}}),m(a,oP.STAT_EVENT,y=>{y.stat===pv.PROXY?q(Et,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===pv.NOPROXY&&q(Et,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.fo()},0),g}}function Fu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(t){return new fM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,n,s=1e3,i=1.5,r=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=i,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-s);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(e,n,s,i,r,o,a,l){this.ii=e,this.$o=s,this.Oo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new XC(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(ss(n.toString()),ss("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Fo===n&&this.Zo(s,i)},s=>{e(()=>{const i=new ne(H.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(i)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{s(()=>this.tu(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class e2 extends ZM{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=yM(this.serializer,e),s=function(i){if(!("targetChange"in i))return re.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?re.min():r.readTime?Ki(r.readTime):re.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=Lv(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;if(o=Xh(a)?{documents:_M(i,a)}:{query:wM(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=pM(i,r.resumeToken);const l=nd(i,r.expectedCount);l!==null&&(o.expectedCount=l)}else if(r.snapshotVersion.compareTo(re.min())>0){o.readTime=gM(i,r.snapshotVersion.toTimestamp());const l=nd(i,r.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const s=CM(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=Lv(this.serializer),n.removeTarget=e,this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2 extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new ne(H.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Io(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(H.UNKNOWN,i.toString())})}vo(e,n,s,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ne(H.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class n2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ss(n),this.mu=!1):q("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{Ea(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Ce(a);l.vu.add(4),await wa(l),l.bu.set("Unknown"),l.vu.delete(4),await Yc(l)}(this))})}),this.bu=new n2(s,i)}}async function Yc(t){if(Ea(t))for(const e of t.Ru)await e(!0)}async function wa(t){for(const e of t.Ru)await e(!1)}function JC(t,e){const n=Ce(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),dg(n)?hg(n):xr(n).Ko()&&ug(n,e))}function ZC(t,e){const n=Ce(t),s=xr(n);n.Au.delete(e),s.Ko()&&eb(n,e),n.Au.size===0&&(s.Ko()?s.jo():Ea(n)&&n.bu.set("Unknown"))}function ug(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xr(t).su(e)}function eb(t,e){t.Vu.qt(e),xr(t).iu(e)}function hg(t){t.Vu=new cM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),xr(t).start(),t.bu.gu()}function dg(t){return Ea(t)&&!xr(t).Uo()&&t.Au.size>0}function Ea(t){return Ce(t).vu.size===0}function tb(t){t.Vu=void 0}async function i2(t){t.Au.forEach((e,n)=>{ug(t,e)})}async function r2(t,e){tb(t),dg(t)?(t.bu.Iu(e),hg(t)):t.bu.set("Unknown")}async function o2(t,e,n){if(t.bu.set("Online"),e instanceof HC&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await $v(t,s)}else if(e instanceof nl?t.Vu.Ht(e):e instanceof UC?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(re.min()))try{const s=await YC(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Vu.ce(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.Au.get(l);c&&i.Au.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,l)=>{const c=i.Au.get(a);if(!c)return;i.Au.set(a,c.withResumeToken(Nt.EMPTY_BYTE_STRING,c.snapshotVersion)),eb(i,a);const u=new Cs(c.target,a,l,c.sequenceNumber);ug(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){q("RemoteStore","Failed to raise snapshot:",s),await $v(t,s)}}async function $v(t,e,n){if(!ya(e))throw e;t.vu.add(1),await wa(t),t.bu.set("Offline"),n||(n=()=>YC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Yc(t)})}async function Uv(t,e){const n=Ce(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const s=Ea(n);n.vu.add(3),await wa(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Yc(n)}async function a2(t,e){const n=Ce(t);e?(n.vu.delete(2),await Yc(n)):e||(n.vu.add(2),await wa(n),n.bu.set("Unknown"))}function xr(t){return t.Su||(t.Su=function(e,n,s){const i=Ce(e);return i.fu(),new e2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{uo:i2.bind(null,t),ao:r2.bind(null,t),nu:o2.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),dg(t)?hg(t):t.bu.set("Unknown")):(await t.Su.stop(),tb(t))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new zi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new fg(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nb(t,e){if(ss("AsyncQueue",`${e}: ${t}`),ya(t))return new ne(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||ee.comparator(n.key,s.key):(n,s)=>ee.comparator(n.key,s.key),this.keyedMap=Xr(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new qi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new qi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(){this.Cu=new Je(ee.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):ae():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class hr{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new hr(e,n,qi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(){this.Nu=void 0,this.listeners=[]}}class c2{constructor(){this.queries=new Nr(e=>xC(e),zc),this.onlineState="Unknown",this.ku=new Set}}async function u2(t,e){const n=Ce(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new l2),i)try{r.Nu=await n.onListen(s)}catch(o){const a=nb(o,`Initialization of query '${Zh(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Mu(n.onlineState),r.Nu&&e.$u(r.Nu)&&gg(n)}async function h2(t,e){const n=Ce(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function d2(t,e){const n=Ce(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.$u(i)&&(s=!0);o.Nu=i}}s&&gg(n)}function f2(t,e,n){const s=Ce(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function gg(t){t.ku.forEach(e=>{e.next()})}class g2{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new hr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=hr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e){this.key=e}}class ib{constructor(e){this.key=e}}class p2{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Ee(),this.mutatedKeys=Ee(),this.tc=DC(e),this.ec=new qi(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new Hv,i=n?n.ec:this.ec;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=Wc(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?g!==m&&(s.track({type:3,doc:f}),y=!0):this.rc(d,f)||(s.track({type:2,doc:f}),y=!0,(l&&this.tc(f,l)>0||c&&this.tc(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),y=!0):d&&!f&&(s.track({type:1,doc:d}),y=!0,(l||c)&&(a=!0)),y&&(f?(o=o.add(f),r=m?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{ec:o,ic:s,zi:a,mutatedKeys:r}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const r=e.ic.xu();r.sort((c,u)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return f(h)-f(d)}(c.type,u.type)||this.tc(c.doc,u.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,r.length!==0||l?{snapshot:new hr(this.query,e.ec,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Hv,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Ee(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new ib(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new sb(s))}),n}hc(e){this.Yu=e.ir,this.Zu=Ee();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return hr.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class m2{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class v2{constructor(e){this.key=e,this.fc=!1}}class y2{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Nr(a=>xC(a),zc),this._c=new Map,this.mc=new Set,this.gc=new Je(ee.comparator),this.yc=new Map,this.Ic=new ag,this.Tc={},this.Ec=new Map,this.Ac=ur.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function _2(t,e){const n=I2(t);let s,i;const r=n.wc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.lc();else{const o=await KM(n.localStore,is(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await w2(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&JC(n.remoteStore,o)}return i}async function w2(t,e,n,s,i){t.Rc=(h,d,f)=>async function(g,m,y,w){let C=m.view.sc(y);C.zi&&(C=await Fv(g.localStore,m.query,!1).then(({documents:L})=>m.view.sc(L,C)));const I=w&&w.targetChanges.get(m.targetId),b=m.view.applyChanges(C,g.isPrimaryClient,I);return zv(g,m.targetId,b.cc),b.snapshot}(t,h,d,f);const r=await Fv(t.localStore,e,!0),o=new p2(e,r.ir),a=o.sc(r.documents),l=_a.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);zv(t,n,c.cc);const u=new m2(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),c.snapshot}async function E2(t,e){const n=Ce(t),s=n.wc.get(e),i=n._c.get(s.targetId);if(i.length>1)return n._c.set(s.targetId,i.filter(r=>!zc(r,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await id(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),ZC(n.remoteStore,s.targetId),rd(n,s.targetId)}).catch(Yf)):(rd(n,s.targetId),await id(n.localStore,s.targetId,!0))}async function rb(t,e){const n=Ce(t);try{const s=await zM(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.yc.get(r);o&&(lt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?lt(o.fc):i.removedDocuments.size>0&&(lt(o.fc),o.fc=!1))}),await ab(n,s,e)}catch(s){await Yf(s)}}function jv(t,e,n){const s=Ce(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.wc.forEach((r,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=Ce(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Mu(o)&&(l=!0)}),l&&gg(a)}(s.eventManager,e),i.length&&s.dc.nu(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function C2(t,e,n){const s=Ce(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.yc.get(e),r=i&&i.key;if(r){let o=new Je(ee.comparator);o=o.insert(r,Tt.newNoDocument(r,re.min()));const a=Ee().add(r),l=new Gc(re.min(),new Map,new Je(Te),o,a);await rb(s,l),s.gc=s.gc.remove(r),s.yc.delete(e),pg(s)}else await id(s.localStore,e,!1).then(()=>rd(s,e,n)).catch(Yf)}function rd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||ob(t,s)})}function ob(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(ZC(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),pg(t))}function zv(t,e,n){for(const s of n)s instanceof sb?(t.Ic.addReference(s.key,e),b2(t,s)):s instanceof ib?(q("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||ob(t,s.key)):ae()}function b2(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(q("SyncEngine","New document in limbo: "+n),t.mc.add(s),pg(t))}function pg(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new ee(st.fromString(e)),s=t.Ac.next();t.yc.set(s,new v2(n)),t.gc=t.gc.insert(n,s),JC(t.remoteStore,new Cs(is(ng(n.path)),s,"TargetPurposeLimboResolution",Qf.ct))}}async function ab(t,e,n){const s=Ce(t),i=[],r=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,l)=>{o.push(s.Rc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=cg.Li(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.dc.nu(i),await async function(a,l){const c=Ce(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>D.forEach(l,h=>D.forEach(h.Fi,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>D.forEach(h.Bi,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!ya(u))throw u;q("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Ji.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);c.Ji=c.Ji.insert(h,g)}}}(s.localStore,r))}async function T2(t,e){const n=Ce(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const s=await GC(n.localStore,e);n.currentUser=e,function(i,r){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new ne(H.CANCELLED,r))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ab(n,s.er)}}function S2(t,e){const n=Ce(t),s=n.yc.get(e);if(s&&s.fc)return Ee().add(s.key);{let i=Ee();const r=n._c.get(e);if(!r)return i;for(const o of r){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function I2(t){const e=Ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=S2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=C2.bind(null,e),e.dc.nu=d2.bind(null,e.eventManager),e.dc.Pc=f2.bind(null,e.eventManager),e}class Wv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=QC(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return jM(this.persistence,new UM,e.initialUser,this.serializer)}createPersistence(e){return new VM(lg.zs,this.serializer)}createSharedClientState(e){return new GM}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class A2{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>jv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=T2.bind(null,this.syncEngine),await a2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new c2}createDatastore(e){const n=QC(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new JM(i));var i;return function(r,o,a,l){return new t2(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>jv(this.syncEngine,a,0),o=Vv.D()?new Vv:new YM,new s2(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new y2(s,i,r,o,a,l);return c&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Ce(e);q("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await wa(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):ss("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Ft.UNAUTHENTICATED,this.clientId=yP.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{q("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(q("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ne(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=nb(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Bu(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await GC(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Kv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await x2(t);q("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Uv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Uv(e.remoteStore,r)),t._onlineComponents=e}function N2(t){return t.name==="FirebaseError"?t.code===H.FAILED_PRECONDITION||t.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function x2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!N2(n))throw n;Uo("Error using user provided cache. Falling back to memory cache: "+n),await Bu(t,new Wv)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Bu(t,new Wv);return t._offlineComponents}async function D2(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Kv(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Kv(t,new A2))),t._onlineComponents}async function qv(t){const e=await D2(t),n=e.eventManager;return n.onListen=_2.bind(null,e.syncEngine),n.onUnlisten=E2.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=new Map;function O2(t,e,n,s){if(e===!0&&s===!0)throw new ne(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function P2(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function Vu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=P2(t);throw new ne(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}O2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lb((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class M2{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ne(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ne(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new hP;switch(n.type){case"firstParty":return new gP(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ne(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Gv.get(e);n&&(q("ComponentProvider","Removing Datastore"),Gv.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mg(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dr(this.firestore,e,this._key)}}class Qc{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Qc(this.firestore,e,this._query)}}class mg extends Qc{constructor(e,n,s){super(e,n,ng(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dr(this.firestore,null,new ee(e))}withConverter(e){return new mg(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new XC(this,"async_queue_retry"),this.Xc=()=>{const n=Fu();n&&q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Fu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Fu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new zi;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!ya(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw ss("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=fg.createAndSchedule(this,e,n,s,r=>this.na(r));return this.zc.push(i),i}Zc(){this.Wc&&ae()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function Qv(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class od extends M2{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new L2,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cb(this),this._firestoreClient.terminate()}}function F2(t){return t._firestoreClient||cb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function cb(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,l,c){return new AP(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,lb(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new R2(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hl(Nt.fromBase64String(e))}catch(n){throw new ne(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hl(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}const V2=new RegExp("[~\\*/\\[\\]]");function $2(t,e,n){if(e.search(V2)>=0)throw Xv(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ub(...e.split("."))._internalPath}catch{throw Xv(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xv(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new ne(H.INVALID_ARGUMENT,a+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Dr(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new U2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(db("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class U2 extends hb{data(){return super.data()}}function db(t,e){return typeof e=="string"?$2(t,e):e instanceof ub?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class j2{convertValue(e,n="none"){switch(pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Hc(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new B2(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Jf(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(jo(e));default:return null}}convertTimestamp(e){const n=Ds(e);return new $t(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=st.fromString(e);lt(qC(s));const i=new zo(s.get(1),s.get(3)),r=new ee(s.popFirst(5));return i.isEqual(n)||ss(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fb extends hb{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new sl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(db("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class sl extends fb{data(e={}){return super.data(e)}}class z2{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Zr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new sl(this._firestore,this._userDataWriter,s.key,s,new Zr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new sl(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Zr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new sl(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Zr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:W2(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function W2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}class gb extends j2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hl(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Dr(this.firestore,null,n)}}function vg(t,...e){var n,s,i;t=Cr(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Qv(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Qv(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof Dr)c=Vu(t.firestore,od),u=ng(t._key.path),l={next:h=>{e[o]&&e[o](K2(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Vu(t,Qc);c=Vu(h.firestore,od),u=h._query;const d=new gb(c);l={next:f=>{e[o]&&e[o](new z2(c,d,h,f))},error:e[o+1],complete:e[o+2]},H2(t._query)}return function(h,d,f,g){const m=new k2(g),y=new g2(d,m,f);return h.asyncQueue.enqueueAndForget(async()=>u2(await qv(h),y)),()=>{m.Dc(),h.asyncQueue.enqueueAndForget(async()=>h2(await qv(h),y))}}(F2(c),u,a,l)}function K2(t,e,n){const s=n.docs.get(e._key),i=new gb(t);return new fb(t,i,e._key,s,new Zr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Rr=n})(br),Vn(new _n("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new od(new dP(n.getProvider("auth-internal")),new mP(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ne(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zo(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Yt(mv,"3.13.0",t),Yt(mv,"3.13.0","esm2017")})();function pb(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function mb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const q2=mb,vb=new Er("auth","Firebase",mb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new sa("@firebase/auth");function G2(t,...e){jl.logLevel<=_e.WARN&&jl.warn(`Auth (${br}): ${t}`,...e)}function il(t,...e){jl.logLevel<=_e.ERROR&&jl.error(`Auth (${br}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t,...e){throw _g(t,...e)}function yg(t,...e){return _g(t,...e)}function Y2(t,e,n){const s=Object.assign(Object.assign({},q2()),{[e]:n});return new Er("auth","Firebase",s).create(e,{appName:t.name})}function _g(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return vb.create(t,...e)}function ke(t,e,...n){if(!t)throw _g(e,...n)}function po(t){const e="INTERNAL ASSERTION FAILED: "+t;throw il(e),new Error(e)}function zl(t,e){t||po(e)}function Q2(){return Zv()==="http:"||Zv()==="https:"}function Zv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Q2()||Xk()||"connection"in navigator)?navigator.onLine:!0}function J2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n){this.shortDelay=e,this.longDelay=n,zl(n>e,"Short delay should be less than long delay!"),this.isMobile=tf()||sw()}get(){return X2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(t,e){zl(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;po("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;po("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;po("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tL=new Ca(3e4,6e4);function nL(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wg(t,e,n,s,i={}){return _b(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=nf(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),yb.fetch()(wb(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function _b(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},eL),e);try{const i=new sL(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Wa(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wa(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Y2(t,u,c);Jv(t,u)}}catch(i){if(i instanceof as)throw i;Jv(t,"network-request-failed",{message:String(i)})}}function wb(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Z2(t.config,i):`${t.config.apiScheme}://${i}`}class sL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(yg(this.auth,"network-request-failed")),tL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wa(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=yg(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iL(t,e){return wg(t,"POST","/v1/accounts:delete",e)}async function rL(t,e){return wg(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oL(t,e=!1){const n=Cr(t),s=await n.getIdToken(e),i=Eb(s);ke(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:mo($u(i.auth_time)),issuedAtTime:mo($u(i.iat)),expirationTime:mo($u(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function $u(t){return Number(t)*1e3}function Eb(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return il("JWT malformed, contained fewer than 3 sections"),null;try{const i=El(n);return i?JSON.parse(i):(il("Failed to decode base64 JWT payload"),null)}catch(i){return il("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function aL(t){const e=Eb(t);return ke(e,"internal-error"),ke(typeof e.exp<"u","internal-error"),ke(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ad(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof as&&lL(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function lL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mo(this.lastLoginAt),this.creationTime=mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wl(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ad(t,rL(n,{idToken:s}));ke(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?dL(r.providerUserInfo):[],a=hL(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Cb(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function uL(t){const e=Cr(t);await Wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hL(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function dL(t){return t.map(e=>{var{providerId:n}=e,s=pb(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fL(t,e){const n=await _b(t,{},async()=>{const s=nf({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=wb(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",yb.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ke(e.idToken,"internal-error"),ke(typeof e.idToken<"u","internal-error"),ke(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):aL(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ke(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await fL(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Ko;return s&&(ke(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ke(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ke(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ko,this.toJSON())}_performRefresh(){return po("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(t,e){ke(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gi{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=pb(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Cb(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ad(this,this.stsTokenManager.getToken(this.auth,e));return ke(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return oL(this,e)}reload(){return uL(this)}_assign(e){this!==e&&(ke(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ke(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Wl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ad(this,iL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:b,isAnonymous:L,providerData:M,stsTokenManager:X}=n;ke(I&&X,e,"internal-error");const k=Ko.fromJSON(this.name,X);ke(typeof I=="string",e,"internal-error"),gs(h,e.name),gs(d,e.name),ke(typeof b=="boolean",e,"internal-error"),ke(typeof L=="boolean",e,"internal-error"),gs(f,e.name),gs(g,e.name),gs(m,e.name),gs(y,e.name),gs(w,e.name),gs(C,e.name);const P=new Gi({uid:I,auth:e,email:d,emailVerified:b,displayName:h,isAnonymous:L,photoURL:g,phoneNumber:f,tenantId:m,stsTokenManager:k,createdAt:w,lastLoginAt:C});return M&&Array.isArray(M)&&(P.providerData=M.map(z=>Object.assign({},z))),y&&(P._redirectEventId=y),P}static async _fromIdTokenResponse(e,n,s=!1){const i=new Ko;i.updateFromServerResponse(n);const r=new Gi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Wl(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=new Map;function ei(t){zl(t instanceof Function,"Expected a class definition");let e=ey.get(t);return e?(zl(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ey.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bb.type="NONE";const ty=bb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(t,e,n){return`firebase:${t}:${e}:${n}`}class Yi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Uu(this.userKey,i.apiKey,r),this.fullPersistenceKey=Uu("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Yi(ei(ty),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||ei(ty);const o=Uu(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Gi._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Yi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Yi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vL(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gL(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_L(e))return"Blackberry";if(wL(e))return"Webos";if(pL(e))return"Safari";if((e.includes("chrome/")||mL(e))&&!e.includes("edge/"))return"Chrome";if(yL(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function gL(t=Bn()){return/firefox\//i.test(t)}function pL(t=Bn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mL(t=Bn()){return/crios\//i.test(t)}function vL(t=Bn()){return/iemobile/i.test(t)}function yL(t=Bn()){return/android/i.test(t)}function _L(t=Bn()){return/blackberry/i.test(t)}function wL(t=Bn()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(t,e=[]){let n;switch(t){case"Browser":n=ny(Bn());break;case"Worker":n=`${ny(Bn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${br}/${s}`}async function Sb(t,e){return wg(t,"GET","/v2/recaptchaConfig",nL(t,e))}function sy(t){return t!==void 0&&t.enterprise!==void 0}class Ib{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function CL(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=yg("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",EL().appendChild(s)})}const bL="https://www.google.com/recaptcha/enterprise.js?render=",TL="recaptcha-enterprise",SL="NO_RECAPTCHA";class IL{constructor(e){this.type=TL,this.auth=Ab(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Sb(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Ib(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;sy(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(SL)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&sy(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}CL(bL+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iy(this),this.idTokenSubscription=new iy(this),this.beforeStateQueue=new AL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ei(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Yi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ke(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=J2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Cr(e):null;return n&&ke(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ke(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ei(e))})}async initializeRecaptchaConfig(){const e=await Sb(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Ib(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new IL(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Er("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ei(e)||this._popupRedirectResolver;ke(n,this,"argument-error"),this.redirectPersistenceManager=await Yi.create(this,[ei(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ke(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ke(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&G2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ab(t){return Cr(t)}class iy{constructor(e){this.auth=e,this.observer=null,this.addObserver=rR(n=>this.observer=n)}get next(){return ke(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function RL(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ei);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new Ca(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ca(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ca(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ca(5e3,15e3);var ry="@firebase/auth",oy="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ke(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function DL(t){Vn(new _n("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ke(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tb(t)},c=new kL(s,i,r,l);return RL(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Vn(new _n("auth-internal",e=>{const n=Ab(e.getProvider("auth").getImmediate());return(s=>new NL(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(ry,oy,xL(t)),Yt(ry,oy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OL=5*60;Qk("authIdTokenMaxAge");DL("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PL=new Map,ML={activated:!1,tokenObservers:[]};function En(t){return PL.get(t)||Object.assign({},ML)}const ay={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LL{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ko,await FL(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ko,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function FL(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BL={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Kl=new Er("appCheck","AppCheck",BL);function kb(t){if(!En(t).activated)throw Kl.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VL="firebase-app-check-database",$L=1,ld="firebase-app-check-store";let Ka=null;function UL(){return Ka||(Ka=new Promise((t,e)=>{try{const n=indexedDB.open(VL,$L);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Kl.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(ld,{keyPath:"compositeKey"})}}}catch(n){e(Kl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Ka)}function HL(t,e){return jL(zL(t),e)}async function jL(t,e){const s=(await UL()).transaction(ld,"readwrite"),r=s.objectStore(ld).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(Kl.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function zL(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=new sa("@firebase/app-check");function ly(t,e){return rw()?HL(t,e).catch(n=>{cd.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WL={error:"UNKNOWN_ERROR"};function KL(t){return _c.encodeString(JSON.stringify(t),!1)}async function ud(t,e=!1){const n=t.app;kb(n);const s=En(n);let i=s.token,r;if(i&&!eo(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(eo(l)?i=l:await ly(n,void 0))}if(!e&&i&&eo(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await En(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?cd.warn(l.message):cd.error(l),r=l}let a;return i?r?eo(i)?a={token:i.token,internalError:r}:a=uy(r):(a={token:i.token},s.token=i,await ly(n,i)):a=uy(r),o&&QL(n,a),a}async function qL(t){const e=t.app;kb(e);const{provider:n}=En(e);{const{token:s}=await n.getToken();return{token:s}}}function GL(t,e,n,s){const{app:i}=t,r=En(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&eo(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),cy(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>cy(t))}function Rb(t,e){const n=En(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function cy(t){const{app:e}=t,n=En(e);let s=n.tokenRefresher;s||(s=YL(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function YL(t){const{app:e}=t;return new LL(async()=>{const n=En(e);let s;if(n.token?s=await ud(t,!0):s=await ud(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=En(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},ay.RETRIAL_MIN_WAIT,ay.RETRIAL_MAX_WAIT)}function QL(t,e){const n=En(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function eo(t){return t.expireTimeMillis-Date.now()>0}function uy(t){return{token:KL(WL),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=En(this.app);for(const n of e)Rb(this.app,n.next);return Promise.resolve()}}function JL(t,e){return new XL(t,e)}function ZL(t){return{getToken:e=>ud(t,e),getLimitedUseToken:()=>qL(t),addTokenListener:e=>GL(t,"INTERNAL",e),removeTokenListener:e=>Rb(t.app,e)}}const eF="@firebase/app-check",tF="0.8.0",nF="app-check",hy="app-check-internal";function sF(){Vn(new _n(nF,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return JL(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(hy).initialize()})),Vn(new _n(hy,t=>{const e=t.getProvider("app-check").getImmediate();return ZL(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Yt(eF,tF)}sF();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb="firebasestorage.googleapis.com",iF="storageBucket",rF=2*60*1e3,oF=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends as{constructor(e,n,s=0){super(Hu(e),`Firebase Storage: ${n} (${Hu(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,zn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Hu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Hn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Hn||(Hn={}));function Hu(t){return"storage/"+t}function aF(){const t="An unknown error occurred, please check the error payload for server response.";return new zn(Hn.UNKNOWN,t)}function lF(){return new zn(Hn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function cF(){return new zn(Hn.CANCELED,"User canceled the upload/download.")}function uF(t){return new zn(Hn.INVALID_URL,"Invalid URL '"+t+"'.")}function hF(t){return new zn(Hn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function dy(t){return new zn(Hn.INVALID_ARGUMENT,t)}function xb(){return new zn(Hn.APP_DELETED,"The Firebase app was deleted.")}function dF(t){return new zn(Hn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=gn.makeFromUrl(e,n)}catch{return new gn(e,"")}if(s.path==="")return s;throw hF(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},m=n===Nb?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",w=new RegExp(`^https?://${m}/${i}/${y}`,"i"),I=[{regex:a,indices:l,postModify:r},{regex:f,indices:g,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<I.length;b++){const L=I[b],M=L.regex.exec(e);if(M){const X=M[L.indices.bucket];let k=M[L.indices.path];k||(k=""),s=new gn(X,k),L.postModify(s);break}}if(s==null)throw uF(e);return s}}class fF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gF(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,t(f,l())},y)}function d(){r&&clearTimeout(r)}function f(y,...w){if(c){d();return}if(y){d(),u.call(null,y,...w);return}if(l()||o){d(),u.call(null,y,...w);return}s<64&&(s*=2);let I;a===1?(a=2,I=0):I=(s+Math.random())*1e3,h(I)}let g=!1;function m(y){g||(g=!0,d(),!c&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,m(!0)},n),m}function pF(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mF(t){return t!==void 0}function fy(t,e,n,s){if(s<e)throw dy(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw dy(`Invalid value for '${t}'. Expected ${n} or less.`)}function vF(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ql;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ql||(ql={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yF(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _F{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new qa(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ql.NO_ERROR,l=r.getStatus();if(!a||yF(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===ql.ABORT;s(!1,new qa(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new qa(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());mF(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=aF();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?xb():cF();o(l)}else{const l=lF();o(l)}};this.canceled_?n(!1,new qa(!1,null,!0)):this.backoffId_=gF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&pF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qa{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function wF(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function EF(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function CF(t,e){e&&(t["X-Firebase-GMPID"]=e)}function bF(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function TF(t,e,n,s,i,r,o=!0){const a=vF(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return CF(c,e),wF(c,n),EF(c,r),bF(c,s),new _F(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function IF(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n){this._service=e,n instanceof gn?this._location=n:this._location=gn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Gl(e,n)}get root(){const e=new gn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return IF(this._location.path)}get storage(){return this._service}get parent(){const e=SF(this._location.path);if(e===null)return null;const n=new gn(this._location.bucket,e);return new Gl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw dF(e)}}function gy(t,e){const n=e==null?void 0:e[iF];return n==null?null:gn.makeFromBucketSpec(n,t)}class AF{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Nb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=rF,this._maxUploadRetryTime=oF,this._requests=new Set,i!=null?this._bucket=gn.makeFromBucketSpec(i,this._host):this._bucket=gy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gn.makeFromBucketSpec(this._url,e):this._bucket=gy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){fy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){fy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Gl(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new fF(xb());{const o=TF(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const py="@firebase/storage",my="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kF="storage";function RF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new AF(n,s,i,e,br)}function NF(){Vn(new _n(kF,RF,"PUBLIC").setMultipleInstances(!0)),Yt(py,my,""),Yt(py,my,"esm2017")}NF();const Db=Symbol("firebaseApp");function Eg(t){return Go()&&it(Db,null)||aN(t)}const Pi=()=>{};function Cg(t,e){return e.split(".").reduce((n,s)=>n[s],t)}function xF(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o[a],t);return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function Ps(t){return t&&typeof t=="object"}function DF(t){return t.toDate}function bg(t){return Ps(t)&&t.type==="document"}function OF(t){return Ps(t)&&t.type==="collection"}function PF(t){return bg(t)||OF(t)}function MF(t){return Ps(t)&&t.type==="query"}function LF(t){return Ps(t)&&"ref"in t}function FF(t){return Ps(t)&&typeof t.bucket=="string"}function BF(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const Ga=new WeakMap;function VF(t,e){if(!Ga.has(t)){const n=_d(!0);Ga.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),Ga.delete(t)}}return Ga.get(t)}const ju=new WeakMap;function Ob(t,e=Eg()){return ju.has(e)||ju.set(e,t||{f:{},r:{},s:{},u:{}}),ju.get(e)}function $F(t,e,n){if(!t)return n;const[s,i]=Pb(t);if(!s)return n;const r=Ob()[s]||{},o=e||i;return o&&o in r?r[o]:n}function UF(t,e,n){if(!t)return;const[s,i]=Pb(t);if(!s)return;const r=Ob()[s],o=e||i;if(o)return n.then(a=>{r[o]=a}),o}function Pb(t){return PF(t)||MF(t)?["f",t.path]:LF(t)?["r",t.toString()]:FF(t)?["s",t.toString()]:[]}const zu=new WeakMap;function HF(t,e,n){const s=Eg();zu.has(s)||zu.set(s,new Map);const i=zu.get(s),r=UF(e,n,t);return r&&i.set(r,t),r?()=>i.delete(r):Pi}const zr=new WeakMap,jF={bindName:"$firestoreBind",unbindName:"$firestoreUnbind"},zF=function(e,n,s){const i=Object.assign({},jF,n),{bindName:r,unbindName:o}=i,a=e.config.globalProperties;a[o]=function(c,u){ZF(c,zr.get(this),u),delete this.$firestoreRefs[c]},a[r]=function(c,u,h){const d=Object.assign({},i,h),f=Ot(this.$data,c);zr.has(this)||zr.set(this,{});const g=zr.get(this);g[c]&&g[c](d.reset);const m=VF(s||Eg(),e).run(()=>_d()),{promise:y,stop:w}=m.run(()=>JF(u,{target:f,...d})),C=I=>{w(I),m.stop()};return g[c]=C,this.$firestoreRefs[c]=u,y.value},e.mixin({beforeCreate(){this.$firestoreRefs=Object.create(null)},created(){const{firestore:l}=this.$options,c=typeof l=="function"?l.call(this):l;if(c)for(const u in c)this[r](u,c[u],i)},beforeUnmount(){const l=zr.get(this);if(l)for(const c in l)l[c]();this.$firestoreRefs=null}})};function WF(t){return(e,n)=>zF(n,t,e)}const KF={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function hd(t,e,n){if(!Ps(t))return[t,{}];const s=[{},{}],i=Object.keys(n).reduce((o,a)=>{const l=n[a];return o[l.path]=l.data(),o},{});function r(o,a,l,c){a=a||{};const[u,h]=c;Object.getOwnPropertyNames(o).forEach(d=>{const f=Object.getOwnPropertyDescriptor(o,d);f&&!f.enumerable&&Object.defineProperty(u,d,f)});for(const d in o){const f=o[d];if(f==null||f instanceof Date||DF(f)||qF(f))u[d]=f;else if(bg(f))u[d]=typeof a=="object"&&d in a&&typeof a[d]!="string"?a[d]:f.path,h[l+d]=f;else if(Array.isArray(f)){u[d]=Array(f.length);for(let g=0;g<f.length;g++){const m=f[g];m&&m.path in i&&(u[d][g]=i[m.path])}r(f,a[d]||u[d],l+d+".",[u[d],h])}else Ps(f)?(u[d]={},r(f,a[d],l+d+".",[u[d],h])):u[d]=f}}return r(t,e,"",s),s}function qF(t){return Ps(t)&&"latitude"in t&&"longitude"in t}const Tg={reset:!1,wait:!0,maxRefDepth:2,converter:KF};function Yl(t){for(const e in t)t[e].unsub()}function Mb(t,e,n,s,i,r,o,a){const[l,c]=hd(s.data(),Cg(e,n),i);r.set(e,n,l),dd(t,e,n,i,c,r,o,a)}function GF({ref:t,target:e,path:n,depth:s,resolve:i,ops:r},o){const a=Object.create(null),l=vg(t,c=>{c.exists()?Mb(o,e,n,c,a,r,s,i):(r.set(e,n,null),i())});return()=>{l(),Yl(a)}}function dd(t,e,n,s,i,r,o,a){const l=Object.keys(i);if(Object.keys(s).filter(g=>l.indexOf(g)<0).forEach(g=>{s[g].unsub(),delete s[g]}),!l.length||++o>t.maxRefDepth)return a(n);let u=0;const h=l.length,d=Object.create(null);function f(g){g in d&&++u>=h&&a(n)}l.forEach(g=>{const m=s[g],y=i[g],w=`${n}.${g}`;if(d[w]=!0,m)if(m.path!==y.path)m.unsub();else return;s[g]={data:()=>Cg(e,w),unsub:GF({ref:y,target:e,path:w,depth:o,ops:r,resolve:f.bind(null,w)},t),path:y.path}})}function YF(t,e,n,s,i,r){const o=Object.assign({},Tg,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c}=o,u="value";c||n.set(t,u,[]);let h=ze(c?[]:t[u]);const d=s;let f;const g=[],m={added:({newIndex:w,doc:C})=>{g.splice(w,0,Object.create(null));const I=g[w],[b,L]=hd(C.data(l),void 0,I);n.add(Ke(h),w,b),dd(o,h,`${u}.${w}`,I,L,n,0,s.bind(null,C))},modified:({oldIndex:w,newIndex:C,doc:I})=>{const b=Ke(h),L=g[w],M=b[w],[X,k]=hd(I.data(l),M,L);g.splice(C,0,L),n.remove(b,w),n.add(b,C,X),dd(o,h,`${u}.${C}`,L,k,n,0,s)},removed:({oldIndex:w})=>{const C=Ke(h);n.remove(C,w),Yl(g.splice(w,1)[0])}},y=vg(e,w=>{const C=w.docChanges(a);if(!f&&C.length){f=!0;let I=0;const b=C.length,L=Object.create(null);for(let M=0;M<b;M++)L[C[M].doc.id]=!0;s=M=>{M&&M.id in L&&++I>=b&&(o.wait&&n.set(t,u,Ke(h)),d(Ke(h)),s=Pi)}}C.forEach(I=>{m[I.type](I)}),C.length||(o.wait&&n.set(t,u,Ke(h)),s(Ke(h)))},i);return w=>{if(y(),w!==!1){const C=typeof w=="function"?w():[];n.set(t,u,C)}g.forEach(Yl)}}function QF(t,e,n,s,i,r){const o=Object.assign({},Tg,r),a="value",l=Object.create(null);s=BF(s,()=>Cg(t,a));const c=vg(e,u=>{u.exists()?Mb(o,t,a,u,l,n,0,s):(n.set(t,a,null),s(null))},i);return u=>{if(c(),u!==!1){const h=typeof u=="function"?u():null;n.set(t,a,h)}Yl(l)}}const XF={set:(t,e,n)=>xF(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function JF(t,e){let n=Pi;const s=Object.assign({},Tg,e),i=Ke(t),r=s.target||ze();r.value=$F(i,s.ssrKey,r.value);const o=ze(!0),a=ze(),l=Re(),c=Sy();let u=Pi;function h(){let g=Ke(t);const m=new Promise((y,w)=>{if(n(s.reset),!g)return n=Pi,y(null);g.converter||(g=g.withConverter(s.converter)),n=(bg(g)?QF:YF)(r,g,XF,y,w,s)});l.value=m,m.catch(y=>{a.value=y}).finally(()=>{o.value=!1})}let d=Pi;je(t)?d=We(t,h,{immediate:!0}):h(),i&&(u=HF(l.value,i)),c&&(Iy(f),Go()&&l_(()=>l.value));function f(g=s.reset){d(),u(),n(g)}return Object.defineProperties(r,{error:{get:()=>a},data:{get:()=>r},pending:{get:()=>o},promise:{get:()=>l},stop:{get:()=>f}})}function ZF(t,e,n){e&&e[t]&&(e[t](n),delete e[t])}function eB(t,{firebaseApp:e,modules:n=[]}){t.provide(Db,e);for(const s of n)t.use(s.bind(null,e))}const tB={aPictures:[{id:1,url:"https://static-edge.kiaf.org/web/2023/11/06185123/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C-scaled.jpg",title:"언젠가, 그리고는, 떠나버린",day:"2023. 10. 27 - 11. 30",info:"[GALLERIES] Newchild"},{id:2,url:"https://static-edge.kiaf.org/web/2023/11/06181858/%EC%A0%84%EC%8B%9C%EC%A0%84%EA%B2%BD-4-scaled.jpg",title:"제주의 숲",day:"2023. 11. 1 - 11. 18",info:"[GALLERIES] Galerie GAIA"},{id:3,url:"https://static-edge.kiaf.org/web/2023/11/03195713/%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg",title:"IMAGES ON THE WALL",day:"2023. 10. 26 - 11. 15",info:"[GALLERIES] Gallery FM"},{id:4,url:"https://static-edge.kiaf.org/web/2023/11/03193710/01.About-wish-2360_Diameter-130cm_-%ED%95%9C%EC%A7%80%EC%97%90-%EC%B1%84%EC%83%89%EA%B3%BC-%EB%B0%94%EB%8A%90%EC%A7%88_-2023-scaled.jpg",title:"About wish",day:"2023. 11. 1 - 12. 1",info:"[GALLERIES] Gallery We"},{id:5,url:"https://static-edge.kiaf.org/web/2023/11/03192116/%EC%9D%B4%EB%8F%99%ED%9B%88-Hard-2023-acrylic-on-paper-steel-wood-panel-67x65x55cm-scaled.jpg",title:"가벼운 안무",day:"2023. 11. 17 - 12. 22",info:"[GALLERIES] Gallery SP"},{id:6,url:"https://static-edge.kiaf.org/web/2023/11/02201134/Secret-Garden-2023-scratched-and-painted-on-aluminium-Indian-120-%C3%97-160-cm.jpeg",title:"비밀의 정원, 미지의 섬",day:"2023. 11. 2 - 11. 30",info:"[GALLERIES] KEUMSAN GALLERY"},{id:7,url:"https://static-edge.kiaf.org/web/2023/11/02012307/%EC%8D%B8%EB%84%A4%EC%9D%BC%EC%9D%B4%EB%AF%B8%EC%A7%80_Miyuki-Yokomizo_torso_2023_aluminumtube_19x4x4cmeach_2023.jpg",title:"SHADOW",day:"2023. 10. 27 - 2024. 01. 13",info:"[GALLERIES] LEE & BAE"},{id:8,url:"https://static-edge.kiaf.org/web/2023/11/01202103/%EA%B0%A4%EB%9F%AC%EB%A6%AC%EB%82%98%EC%9A%B0-kiaf%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8%EC%8D%B8%EB%84%A4%EC%9D%BC400x600_1.jpg",title:"THE DOTS",day:"2023. 11. 7 - 11. 30",info:"[GALLERIES] galleryNoW"}]},nB={Articles:[{id:1,url:"https://static-edge.kiaf.org/web/2023/11/06193311/2-scaled.jpg",title:"곰곰이와 찬찬이",info:"[VISIT] 현대어린이책미술관"},{id:2,url:"https://static-edge.kiaf.org/web/2023/11/02004556/Searching-for-Karma-3-What-are-you-looking-for_oil-oilstick-watercolor-on-linen_112.1%C3%97162.2%E3%8E%9D_2023-e1698821223576.jpg",title:"2023 OCI YOUNG CREATIVES 박서연 《Searching for Karma》",info:"[VISIT] OCI미술관"},{id:3,url:"https://static-edge.kiaf.org/web/2023/11/02001932/Self-portrait%EC%9E%90%ED%99%94%EC%83%81_archival-pigment-print_61%C3%9776.2%E3%8E%9D_2023-scaled-e1698820116402.jpg",title:"2023 OCI YOUNG CREATIVES 이윤재 《Viewers’ Conditions》",info:"[VISIT] OCI미술관"},{id:4,url:"https://static-edge.kiaf.org/web/2023/08/18235557/%EC%96%91%ED%95%98_Well-Its-a-Scene-Made-to-Cry-So-I-Will-41_oil-and-acrylic-on-canvas_150%C3%97180%E3%8E%9D_2023-scaled.jpg",title:"2023 OCI YOUNG CREATIVES 양하 개인전 《오픈더윈도우》",info:"[VISIT] OCI미술관"}]},sB={Videos:[{id:1,url:"https://static-edge.kiaf.org/web/2021/10/19000546/%EC%8D%B8%EB%84%A4%EC%9D%BC1-1.jpg",title:"[Kiaf SEOUL 2022 | RECAP]"},{id:2,url:"https://static-edge.kiaf.org/web/2021/10/19000546/%EC%8D%B8%EB%84%A4%EC%9D%BC2-1.jpg",title:"[Kiaf SEOUL 2022 Talk Program | SNAP]"},{id:3,url:"https://static-edge.kiaf.org/web/2021/10/19000546/%EC%8D%B8%EB%84%A4%EC%9D%BC3-1-e1669177853383.jpg",title:"[Kiaf SEOUL 2022 | We connect, Art & Future 2nd edition, Kiaf and INCHEON AIRPORT]"}]};const iB=Ie()({name:"VCardActions",props:Ge(),setup(t,e){let{slots:n}=e;return uc({VBtn:{variant:"text"}}),Ye(()=>{var s;return _("div",{class:["v-card-actions",t.class],style:t.style},[(s=n.default)==null?void 0:s.call(n)])}),{}}}),rB=hc("v-card-subtitle"),rl=hc("v-card-title");const oB=J({start:Boolean,end:Boolean,icon:ts,image:String,...Ge(),...na(),...vi(),...mc(),...Pt(),...bn(),...gc({variant:"flat"})},"VAvatar"),vy=Ie()({name:"VAvatar",props:oB(),setup(t,e){let{slots:n}=e;const{themeClasses:s}=Tn(t),{colorClasses:i,colorStyles:r,variantClasses:o}=Qd(t),{densityClasses:a}=fc(t),{roundedClasses:l}=yi(t),{sizeClasses:c,sizeStyles:u}=vc(t);return Ye(()=>_(t.tag,{class:["v-avatar",{"v-avatar--start":t.start,"v-avatar--end":t.end},s.value,i.value,a.value,l.value,c.value,o.value,t.class],style:[r.value,u.value,t.style]},{default:()=>{var h;return[t.image?_(ws,{key:"image",src:t.image,alt:"",cover:!0},null):t.icon?_(Vi,{key:"icon",icon:t.icon},null):(h=n.default)==null?void 0:h.call(n),Yd(!1,"v-avatar")]}})),{}}}),aB=J({appendAvatar:String,appendIcon:ts,prependAvatar:String,prependIcon:ts,subtitle:String,title:String,...Ge(),...na()},"VCardItem"),lB=Ie()({name:"VCardItem",props:aB(),setup(t,e){let{slots:n}=e;return Ye(()=>{var c;const s=!!(t.prependAvatar||t.prependIcon),i=!!(s||n.prepend),r=!!(t.appendAvatar||t.appendIcon),o=!!(r||n.append),a=!!(t.title||n.title),l=!!(t.subtitle||n.subtitle);return _("div",{class:["v-card-item",t.class],style:t.style},[i&&_("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?_(Zn,{key:"prepend-defaults",disabled:!s,defaults:{VAvatar:{density:t.density,icon:t.prependIcon,image:t.prependAvatar}}},n.prepend):s&&_(vy,{key:"prepend-avatar",density:t.density,icon:t.prependIcon,image:t.prependAvatar},null)]),_("div",{class:"v-card-item__content"},[a&&_(rl,{key:"title"},{default:()=>{var u;return[((u=n.title)==null?void 0:u.call(n))??t.title]}}),l&&_(rB,{key:"subtitle"},{default:()=>{var u;return[((u=n.subtitle)==null?void 0:u.call(n))??t.subtitle]}}),(c=n.default)==null?void 0:c.call(n)]),o&&_("div",{key:"append",class:"v-card-item__append"},[n.append?_(Zn,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:t.density,icon:t.appendIcon,image:t.appendAvatar}}},n.append):r&&_(vy,{key:"append-avatar",density:t.density,icon:t.appendIcon,image:t.appendAvatar},null)])])}),{}}}),cB=hc("v-card-text"),uB=J({appendAvatar:String,appendIcon:ts,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:ts,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...Jo(),...Ge(),...na(),...Wd(),...ea(),...w0(),...Xd(),...C0(),...vi(),...S0(),...Pt(),...bn(),...gc({variant:"elevated"})},"VCard"),Ya=Ie()({name:"VCard",directives:{Ripple:P0},props:uB(),setup(t,e){let{attrs:n,slots:s}=e;const{themeClasses:i}=Tn(t),{borderClasses:r}=Zo(t),{colorClasses:o,colorStyles:a,variantClasses:l}=Qd(t),{densityClasses:c}=fc(t),{dimensionStyles:u}=Kd(t),{elevationClasses:h}=ta(t),{loaderClasses:d}=E0(t),{locationStyles:f}=Jd(t),{positionClasses:g}=b0(t),{roundedClasses:m}=yi(t),y=T0(t,n),w=S(()=>t.link!==!1&&y.isLink.value),C=S(()=>!t.disabled&&t.link!==!1&&(t.link||y.isClickable.value));return Ye(()=>{const I=w.value?"a":t.tag,b=!!(s.title||t.title),L=!!(s.subtitle||t.subtitle),M=b||L,X=!!(s.append||t.appendAvatar||t.appendIcon),k=!!(s.prepend||t.prependAvatar||t.prependIcon),P=!!(s.image||t.image),z=M||k||X,ce=!!(s.text||t.text);return Xi(_(I,{class:["v-card",{"v-card--disabled":t.disabled,"v-card--flat":t.flat,"v-card--hover":t.hover&&!(t.disabled||t.flat),"v-card--link":C.value},i.value,r.value,o.value,c.value,h.value,d.value,g.value,m.value,l.value,t.class],style:[a.value,u.value,f.value,t.style],href:y.href.value,onClick:C.value&&y.navigate,tabindex:t.disabled?-1:void 0},{default:()=>{var F;return[P&&_("div",{key:"image",class:"v-card__image"},[s.image?_(Zn,{key:"image-defaults",disabled:!t.image,defaults:{VImg:{cover:!0,src:t.image}}},s.image):_(ws,{key:"image-img",cover:!0,src:t.image},null)]),_(MA,{name:"v-card",active:!!t.loading,color:typeof t.loading=="boolean"?void 0:t.loading},{default:s.loader}),z&&_(lB,{key:"item",prependAvatar:t.prependAvatar,prependIcon:t.prependIcon,title:t.title,subtitle:t.subtitle,appendAvatar:t.appendAvatar,appendIcon:t.appendIcon},{default:s.item,prepend:s.prepend,title:s.title,subtitle:s.subtitle,append:s.append}),ce&&_(cB,{key:"text"},{default:()=>{var se;return[((se=s.text)==null?void 0:se.call(s))??t.text]}}),(F=s.default)==null?void 0:F.call(s),s.actions&&_(iB,null,{default:s.actions}),Yd(C.value,"v-card")]}}),[[ic("ripple"),C.value&&t.ripple]])}),{}}}),hB=J({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function dB(t,e){const n={},s=i=>()=>{if(!Gt)return Promise.resolve(!0);const r=i==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(o=>{const a=parseInt(t[i]??0,10);n[i]=window.setTimeout(()=>{e==null||e(r),o(r)},a)})};return{runCloseDelay:s("closeDelay"),runOpenDelay:s("openDelay")}}const fB=J({disabled:Boolean,modelValue:{type:Boolean,default:void 0},...hB()},"VHover"),Wu=Ie()({name:"VHover",props:fB(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const s=Xo(t,"modelValue"),{runOpenDelay:i,runCloseDelay:r}=dB(t,o=>!t.disabled&&(s.value=o));return()=>{var o;return(o=n.default)==null?void 0:o.call(n,{isHovering:s.value,props:{onMouseenter:i,onMouseleave:r}})}}});const gB=t=>{const{touchstartX:e,touchendX:n,touchstartY:s,touchendY:i}=t,r=.5,o=16;t.offsetX=n-e,t.offsetY=i-s,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&n<e-o&&t.left(t),t.right&&n>e+o&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&i<s-o&&t.up(t),t.down&&i>s+o&&t.down(t))};function pB(t,e){var s;const n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,(s=e.start)==null||s.call(e,{originalEvent:t,...e})}function mB(t,e){var s;const n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,(s=e.end)==null||s.call(e,{originalEvent:t,...e}),gB(e)}function vB(t,e){var s;const n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,(s=e.move)==null||s.call(e,{originalEvent:t,...e})}function yB(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:n=>pB(n,e),touchend:n=>mB(n,e),touchmove:n=>vB(n,e)}}function _B(t,e){var a;const n=e.value,s=n!=null&&n.parent?t.parentElement:t,i=(n==null?void 0:n.options)??{passive:!0},r=(a=e.instance)==null?void 0:a.$.uid;if(!s||!r)return;const o=yB(e.value);s._touchHandlers=s._touchHandlers??Object.create(null),s._touchHandlers[r]=o,j_(o).forEach(l=>{s.addEventListener(l,o[l],i)})}function wB(t,e){var r,o;const n=(r=e.value)!=null&&r.parent?t.parentElement:t,s=(o=e.instance)==null?void 0:o.$.uid;if(!(n!=null&&n._touchHandlers)||!s)return;const i=n._touchHandlers[s];j_(i).forEach(a=>{n.removeEventListener(a,i[a])}),delete n._touchHandlers[s]}const Lb={mounted:_B,unmounted:wB},Fb=Symbol.for("vuetify:v-window"),Bb=Symbol.for("vuetify:v-window-group"),EB=J({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:t=>typeof t=="boolean"||t==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...Ge(),...Pt(),...bn()},"VWindow"),CB=Ie()({name:"VWindow",directives:{Touch:Lb},props:EB(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{themeClasses:s}=Tn(t),{isRtl:i}=_r(),{t:r}=Q1(),o=g0(t,Bb),a=ze(),l=S(()=>i.value?!t.reverse:t.reverse),c=Re(!1),u=S(()=>{const b=t.direction==="vertical"?"y":"x",M=(l.value?!c.value:c.value)?"-reverse":"";return`v-window-${b}${M}-transition`}),h=Re(0),d=ze(void 0),f=S(()=>o.items.value.findIndex(b=>o.selected.value.includes(b.id)));We(f,(b,L)=>{const M=o.items.value.length,X=M-1;M<=2?c.value=b<L:b===X&&L===0?c.value=!0:b===0&&L===X?c.value=!1:c.value=b<L}),on(Fb,{transition:u,isReversed:c,transitionCount:h,transitionHeight:d,rootRef:a});const g=S(()=>t.continuous||f.value!==0),m=S(()=>t.continuous||f.value!==o.items.value.length-1);function y(){g.value&&o.prev()}function w(){m.value&&o.next()}const C=S(()=>{const b=[],L={icon:i.value?t.nextIcon:t.prevIcon,class:`v-window__${l.value?"right":"left"}`,onClick:o.prev,ariaLabel:r("$vuetify.carousel.prev")};b.push(g.value?n.prev?n.prev({props:L}):_(Gn,L,null):_("div",null,null));const M={icon:i.value?t.prevIcon:t.nextIcon,class:`v-window__${l.value?"left":"right"}`,onClick:o.next,ariaLabel:r("$vuetify.carousel.next")};return b.push(m.value?n.next?n.next({props:M}):_(Gn,M,null):_("div",null,null)),b}),I=S(()=>t.touch===!1?t.touch:{...{left:()=>{l.value?y():w()},right:()=>{l.value?w():y()},start:L=>{let{originalEvent:M}=L;M.stopPropagation()}},...t.touch===!0?{}:t.touch});return Ye(()=>Xi(_(t.tag,{ref:a,class:["v-window",{"v-window--show-arrows-on-hover":t.showArrows==="hover"},s.value,t.class],style:t.style},{default:()=>{var b,L;return[_("div",{class:"v-window__container",style:{height:d.value}},[(b=n.default)==null?void 0:b.call(n,{group:o}),t.showArrows!==!1&&_("div",{class:"v-window__controls"},[C.value])]),(L=n.additional)==null?void 0:L.call(n,{group:o})]}}),[[ic("touch"),I.value]])),{group:o}}}),bB=J({eager:Boolean},"lazy");function TB(t,e){const n=Re(!1),s=S(()=>n.value||t.eager||e.value);We(e,()=>n.value=!0);function i(){t.eager||(n.value=!1)}return{isBooted:n,hasContent:s,onAfterLeave:i}}const SB=J({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...Ge(),...d0(),...bB()},"VWindowItem"),IB=Ie()({name:"VWindowItem",directives:{Touch:Lb},props:SB(),emits:{"group:selected":t=>!0},setup(t,e){let{slots:n}=e;const s=it(Fb),i=f0(t,Bb),{isBooted:r}=Gd();if(!s||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const o=Re(!1),a=S(()=>r.value&&(s.isReversed.value?t.reverseTransition!==!1:t.transition!==!1));function l(){!o.value||!s||(o.value=!1,s.transitionCount.value>0&&(s.transitionCount.value-=1,s.transitionCount.value===0&&(s.transitionHeight.value=void 0)))}function c(){var g;o.value||!s||(o.value=!0,s.transitionCount.value===0&&(s.transitionHeight.value=we((g=s.rootRef.value)==null?void 0:g.clientHeight)),s.transitionCount.value+=1)}function u(){l()}function h(g){o.value&&pr(()=>{!a.value||!o.value||!s||(s.transitionHeight.value=we(g.clientHeight))})}const d=S(()=>{const g=s.isReversed.value?t.reverseTransition:t.transition;return a.value?{name:typeof g!="string"?s.transition.value:g,onBeforeEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:c,onAfterLeave:l,onLeaveCancelled:u,onEnter:h}:!1}),{hasContent:f}=TB(t,i.isSelected);return Ye(()=>_(Gr,{transition:d.value,disabled:!r.value},{default:()=>{var g;return[Xi(_("div",{class:["v-window-item",i.selectedClass.value,t.class],style:t.style},[f.value&&((g=n.default)==null?void 0:g.call(n))]),[[S_,i.isSelected.value]])]}})),{groupItem:i}}}),AB={name:"home_page",data:()=>({length:1,window:0,aPictures:tB.aPictures,Articles:nB.Articles,Videos:sB.Videos})},kB=Qe("h2",null,"Latest Stories",-1),RB={class:"text-caption mb-3"},NB={class:"text-h5 mb-3"},xB={class:"text-body-2"},DB={key:0,class:"transition-fast-in-fast-out v-card--reveal"},OB=Qe("h2",null,"Articles",-1),PB={class:"text-h5 mb-3"},MB={class:"text-body-2"},LB={key:0,class:"transition-fast-in-fast-out v-card--reveal"},FB=Qe("h2",null,"Archive",-1),BB=Qe("p",{class:"mt-2"},"Kiaf SEOUL은 2002년 이후 매년 수많은 갤러리들이 꾸준히 참가하고 있습니다. 또한 새로운 주제와 당시의 시대상을 반영한 중요한 이슈를 담은 특별전과 토크 프로그램 등을 운영하고 있습니다. ",-1),VB=Qe("div",{class:"textblack"},[Qe("li",null,[Qe("a",{href:"#"},"Past Exhibitors")]),Qe("li",null,[Qe("a",{href:"#"},"Special Exhibition")]),Qe("li",null,[Qe("a",{href:"#"},"Talk Program")])],-1),$B=Qe("h2",null,"Videos",-1),UB={class:"text-h5"},HB={key:0,class:"transition-fast-in-fast-out v-card--video"};function jB(t,e,n,s,i,r){return mt(),hs(ot,null,[_(_s,null,{default:le(()=>[_(CB,{modelValue:t.window,"onUpdate:modelValue":e[0]||(e[0]=o=>t.window=o),"show-arrows":""},{default:le(()=>[(mt(!0),hs(ot,null,Na(t.length,o=>(mt(),Yn(IB,{key:o},{default:le(()=>[_(Ya,{class:"d-flex justify-center align-center"},{default:le(()=>[_(ws,{src:"https://static-edge.kiaf.org/web/2023/07/25205126/%ED%99%88%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C_1222_%EB%AA%A8%EB%B0%94%EC%9D%BC1-%EC%82%AC%EB%B3%B8.jpg",height:"100%"})]),_:1})]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_:1}),_(_s,{class:"mb"},{default:le(()=>[_(Gn,{onClick:e[1]||(e[1]=o=>t.$router.push("/sub1")),elevation:0},{default:le(()=>[kB,_(Vi,null,{default:le(()=>[qr("mdi-chevron-right")]),_:1})]),_:1}),_(fu,{class:"mt-2"},{default:le(()=>[(mt(!0),hs(ot,null,Na(this.aPictures,o=>(mt(),Yn(du,{cols:"12",sm:"6",md:"6",lg:"3",xl:"3",key:o.key},{default:le(()=>[_(Wu,null,{default:le(({isHovering:a,props:l})=>[_(Ya,Fn({height:"380px"},l),{default:le(()=>[_(ws,{src:o.url,height:"250px"},null,8,["src"]),_(rl,{class:"d-flex flex-column align-start"},{default:le(()=>[Qe("span",RB,js(o.day),1),Qe("h1",NB,js(o.title),1),Qe("p",xB,js(o.info),1)]),_:2},1024),_(el,null,{default:le(()=>[a?(mt(),hs("div",DB,[_(Gn,{class:"bg-grey-lighten-5",onClick:c=>t.fnDisplayInfo(o[".key"])},{default:le(()=>[qr("상세보기")]),_:2},1032,["onClick"])])):su("",!0)]),_:2},1024)]),_:2},1040)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),_(_s,{class:"mb"},{default:le(()=>[_(Gn,{onClick:e[2]||(e[2]=o=>t.$router.push("/sub2")),elevation:0},{default:le(()=>[OB,_(Vi,null,{default:le(()=>[qr("mdi-chevron-right")]),_:1})]),_:1}),_(fu,{class:"mt-2"},{default:le(()=>[(mt(!0),hs(ot,null,Na(this.Articles,o=>(mt(),Yn(du,{cols:"12",sm:"12",md:"6",lg:"3",xl:"2",key:o.key},{default:le(()=>[_(Wu,null,{default:le(({isHovering:a,props:l})=>[_(Ya,Fn({height:"350px"},l),{default:le(()=>[_(ws,{src:o.url,height:"250px"},null,8,["src"]),_(rl,{class:"d-flex flex-column align-start"},{default:le(()=>[Qe("h1",PB,js(o.title),1),Qe("p",MB,js(o.info),1)]),_:2},1024),_(el,null,{default:le(()=>[a?(mt(),hs("div",LB,[_(Gn,{class:"bg-grey-lighten-5",onClick:c=>t.fnDisplayInfo(o[".key"])},{default:le(()=>[qr("상세보기")]),_:2},1032,["onClick"])])):su("",!0)]),_:2},1024)]),_:2},1040)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),_(_s,{class:"mb"},{default:le(()=>[FB,BB,VB]),_:1}),_(_s,{class:"mb"},{default:le(()=>[$B,_(fu,{class:"mt-2"},{default:le(()=>[(mt(!0),hs(ot,null,Na(this.Videos,o=>(mt(),Yn(du,{cols:"12",sm:"12",md:"4",lg:"3",xl:"2",key:o.key},{default:le(()=>[_(Wu,null,{default:le(({isHovering:a,props:l})=>[_(Ya,Fn({height:"250px"},l),{default:le(()=>[_(ws,{src:o.url,height:"200px"},null,8,["src"]),_(rl,null,{default:le(()=>[Qe("h1",UB,js(o.title),1)]),_:2},1024),_(el,null,{default:le(()=>[a?(mt(),hs("div",HB,[_(Gn,{icon:"mdi-play-circle",class:"bg-grey-lighten-5",onClick:c=>t.fnDisplayInfo(o[".key"])},null,8,["onClick"])])):su("",!0)]),_:2},1024)]),_:2},1040)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})],64)}const zB=Yo(AB,[["render",jB]]),WB={name:"sub1_page",data:()=>({})};function KB(t,e,n,s,i,r){return mt(),Yn(_s)}const qB=Yo(WB,[["render",KB]]),GB={name:"sub2_page",data:()=>({})};function YB(t,e,n,s,i,r){return mt(),Yn(_s)}const QB=Yo(GB,[["render",YB]]),XB={name:"sub3_page",data:()=>({})};function JB(t,e,n,s,i,r){return mt(),Yn(_s)}const ZB=Yo(XB,[["render",JB]]),eV=o1({history:bI("/vite/"),routes:[{path:"/",name:"home_page",component:zB},{path:"/sub1",name:"sub1_page",component:qB},{path:"/sub2",name:"sub2_page",component:QB},{path:"/sub3",name:"sub3_page",component:ZB}]});function tV(t){pk(),t.use(Uk).use(eV).use(eB,{modules:[WF()]})}const Vb=iI(hk);tV(Vb);Vb.mount("#app");
