const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/connectElectrum.DdzM73jj.js","../chunks/doichain-store.By_VzKP0.js","../chunks/index.D_GRTHN4.js","../chunks/scheduler.Bmg8oFKD.js"])))=>i.map(i=>d[i]);
import{e as c,c as i,a as u,n as _}from"../chunks/doichain-store.By_VzKP0.js";import{_ as a}from"../chunks/preload-helper.C1FmrZbK.js";import{s as f,d as m,u as d,g as p,e as g}from"../chunks/scheduler.Bmg8oFKD.js";import{S as v,i as w,n as E,l as y}from"../chunks/index.C3vjaLA2.js";async function S(n){const{connectElectrum:o}=await a(async()=>{const{connectElectrum:s}=await import("../chunks/connectElectrum.DdzM73jj.js");return{connectElectrum:s}},__vite__mapDeps([0,1,2,3]),import.meta.url);await o(n),console.log("electrum connected"),window.addEventListener("offline",$),window.addEventListener("online",()=>b(n))}function $(){console.log("offline"),c.set("server disconnected"),i.set("offline"),u.set("server disconnected")}async function b(n){console.log("online"),console.log("connecting to electrum",n);const{connectElectrum:o}=await a(async()=>{const{connectElectrum:s}=await import("../chunks/connectElectrum.DdzM73jj.js");return{connectElectrum:s}},__vite__mapDeps([0,1,2,3]),import.meta.url);await o(n)}const O=!0,h=!0,L="always";let l;_.subscribe(n=>l=n);S(l);const D=Object.freeze(Object.defineProperty({__proto__:null,prerender:h,ssr:O,trailingSlash:L},Symbol.toStringTag,{value:"Module"}));function P(n){let o;const s=n[1].default,t=m(s,n,n[0],null);return{c(){t&&t.c()},l(e){t&&t.l(e)},m(e,r){t&&t.m(e,r),o=!0},p(e,[r]){t&&t.p&&(!o||r&1)&&d(t,s,e,e[0],o?g(s,e[0],r,null):p(e[0]),null)},i(e){o||(E(t,e),o=!0)},o(e){y(t,e),o=!1},d(e){t&&t.d(e)}}}function T(n,o,s){let{$$slots:t={},$$scope:e}=o;return n.$$set=r=>{"$$scope"in r&&s(0,e=r.$$scope)},[e,t]}class I extends v{constructor(o){super(),w(this,o,T,P,f,{})}}export{I as component,D as universal};
