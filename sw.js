if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const t=s=>n(s,l),u={module:{uri:l},exports:o,require:t};e[l]=Promise.all(i.map((s=>u[s]||t(s)))).then((s=>(r(...s),o)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/apple-touch-icon-77f1cce1.png",revision:null},{url:"assets/index-fdb377bf.css",revision:null},{url:"assets/many_universes-d74e86dc.svg",revision:null},{url:"assets/pulses-30df7a48.svg",revision:null},{url:"assets/safari-pinned-tab-61a1253d.svg",revision:null},{url:"assets/times-1426387b.svg",revision:null},{url:"assets/topos_arch-db355d32.svg",revision:null},{url:"assets/TransportProcessor-8b20802d.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"e0f6f8b26fd61ae8f3f240cbb44010d0"},{url:"manifest.webmanifest",revision:"09fa51c938cdb5ca9ca12d78d4c7ddcf"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
