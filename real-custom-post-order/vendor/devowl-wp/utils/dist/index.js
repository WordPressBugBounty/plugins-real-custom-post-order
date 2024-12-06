var devowlWp_utils;(()=>{"use strict";var t,e={768:(t,e,n)=>{n.r(e),n.d(e,{AbstractCategory:()=>at,AbstractCategoryCollection:()=>it,AbstractPost:()=>rt,AbstractPostCollection:()=>st,BATCH_MAX_CHUNK_SIZE:()=>P,BaseOptions:()=>o,ClientCollection:()=>nt,ClientModel:()=>ot,RouteHttpVerb:()=>J,SuspenseChunkTranslation:()=>ut,addCorruptRestApi:()=>q,addCorruptRestApiLog:()=>L,applyQueryString:()=>v,batchRequest:()=>E,commonRequest:()=>H,commonUrlBuilder:()=>b,createContextFactory:()=>h,createLocalizationFactory:()=>Y,createRequestFactory:()=>B,createRoot:()=>i,handleCorrupRestApi:()=>I,handleCorruptRestApi:()=>$,locationRestKeyValueMapPatch:()=>ct,locationRestPluginGet:()=>Z,nonceDeprecationPool:()=>x,obfuscatePath:()=>f,parseResult:()=>G,qs:()=>y,removeCorruptRestApi:()=>D,simpleHash:()=>d,simpleObfuscate:()=>p,sprintf:()=>K,trailingslashit:()=>a,untrailingslashit:()=>s,useChunkTranslation:()=>lt,waitForValidLogin:()=>R});class o{static slugCamelCase(t){return t.replace(/-([a-z])/g,(t=>t[1].toUpperCase()))}static getPureSlug(t,e){return void 0===e&&(e=!1),e?o.slugCamelCase(t):t}}var r=n(578);const s=t=>t.endsWith("/")||t.endsWith("\\")?s(t.slice(0,-1)):t,a=t=>`${s(t)}/`;function i(t){try{return(0,r.H)(t)}catch(e){return{render:e=>{var n,o;return null==(o=window.ReactDOM)||null==(n=o.render)?void 0:n.call(o,e,t)},unmount:()=>{var e,n;return null==(n=window.ReactDOM)||null==(e=n.unmountComponentAtNode)?void 0:e.call(n,t)}}}}const c=ReactJSXRuntime;var l,u=n(594);function h(t){const e=(0,u.createContext)(t);return{StoreContext:e,StoreProvider:n=>{let{children:o}=n;return(0,c.jsx)(e.Provider,{value:t,children:o})},useStores:()=>(0,u.useContext)(e)}}function d(t){let e=0;for(const n of t)e=(e<<5>>>0)-e+n.charCodeAt(0),e&=2147483647;return e}function p(t,e,n){const o=e.length;if(!/^[a-z0-9]+$/i.test(e))return"";let r="",s=0;const a=t.length;for(let i=0;i<a;i++)if(/[a-z]/i.test(t[i])){const a=t[i]===t[i].toUpperCase()?"A".charCodeAt(0):"a".charCodeAt(0),c=e[(i-s)%o];let l;l=isNaN(parseInt(c,10))?(c.toLowerCase().charCodeAt(0)-a)%26:parseInt(c,10),l=n?l:-l,r+=String.fromCharCode(((t.charCodeAt(i)+l-a)%26+26)%26+a)}else r+=t[i],s++;return r}function f(t,e,n){void 0===n&&(n="keep-last-part");const o=e.split("/").map(((e,o,r)=>"keep-last-part"===n&&o===r.length-1?e:p(e,t,!0)));return o.splice(o.length-1,0,`${"full"===n?1:0}${t.toString()}`),o.join("/")}!function(t){t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.DELETE="DELETE"}(l||(l={}));var m=n(976),w=n.n(m),y=n(423),g=n(177);function v(t,e,n){return t.search=y.stringify(n?w().all([y.parse(t.search),...e]):e,!0),t}function b(t){let{location:e,params:n={},nonce:o=!0,options:r,cookieValueAsParam:i}=t;const{obfuscatePath:c}=e,{href:u}=window.location,{restPathObfuscateOffset:h}=r,p=new URL(r.restRoot,u),m=y.parse(p.search),w=m.rest_route||p.pathname,b=[];let P=e.path.replace(/:([A-Za-z0-9-_]+)/g,((t,e)=>(b.push(e),n[e])));const C={};for(const t of Object.keys(n))-1===b.indexOf(t)&&(C[t]=n[t]);i&&(C._httpCookieInvalidate=d(JSON.stringify(i.map(g.A.get))));const{search:O,pathname:T}=new URL(e.path,u);if(O){const t=y.parse(O);for(const e in t)C[e]=t[e];P=T}p.protocol=window.location.protocol;const k=a(w);let E=s(e.namespace||r.restNamespace)+P;h&&c&&(E=f(h,E,c));const S=`${k}${E}`;return m.rest_route?m.rest_route=S:p.pathname=S,o&&r.restNonce&&(m._wpnonce=r.restNonce),v(p,m),["wp-json/","rest_route="].filter((t=>p.toString().indexOf(t)>-1)).length>0&&e.method&&e.method!==l.GET&&v(p,[{_method:e.method}],!0),v(p,[r.restQuery,C],!0),p.toString()}const P=25;let C,O=[];const T=Promise.resolve();async function k(){O=O.filter((t=>{let{options:{signal:e,onQueueItemFinished:n,waitForPromise:o=T},reject:r}=t;return!(null==e?void 0:e.aborted)||(null==n||n(!1),o.then((()=>r(e.reason))),!1)}));const t=O.splice(0,P);if(0!==t.length){try{const[{options:e}]=t,{signal:n,onQueueItemFinished:o,waitForPromise:r=T}=e,{responses:s}=await H({location:{path:"/",method:l.POST,namespace:"batch/v1"},options:e,request:{requests:t.map((t=>{let{request:e}=t;return e}))},settings:{signal:n}});for(let e=0;e<s.length;e++){const{resolve:n,reject:a}=t[e],{body:i,status:c}=s[e],l=c>=200&&c<400;null==o||o(l),r.then((()=>{l?n(i):a({responseJSON:i})}))}}catch(e){for(const{reject:n,options:{onQueueItemFinished:o,waitForPromise:r=T}}of t)null==o||o(!1),r.then((()=>n(e)))}O.length>0&&k()}}function E(t,e){return new Promise(((n,o)=>{O.push({resolve:n,reject:o,request:t,options:e}),clearTimeout(C),C=setTimeout(k,100)}))}let S=!1;function R(){var t;const e=window.jQuery;return(null==(t=window.wp)?void 0:t.heartbeat)&&e?(e(document).trigger("heartbeat-tick",[{"wp-auth-check":!1},"error",null]),S||(S=!0,e(document).ajaxSend(((t,n,o)=>{let{url:r,data:s}=o;(null==r?void 0:r.endsWith("/admin-ajax.php"))&&(null==s?void 0:s.indexOf("action=heartbeat"))>-1&&e("#wp-auth-check:visible").length>0&&n.abort()}))),new Promise((t=>{const n=setInterval((()=>{0===e("#wp-auth-check:visible").length&&(clearInterval(n),t())}),100)}))):new Promise((()=>{}))}const _={},A={};async function x(t,e){if(void 0!==e){const n=A[t]||new Promise((async(n,o)=>{try{const r=await window.fetch(e,{method:"POST"});if(r.ok){const e=await r.text();t===e?o():(_[t]=e,n(e))}else o()}catch(t){o()}}));return A[t]=n,n.finally((()=>{delete A[t]})),n}{if(void 0===t)return;await Promise.all(Object.values(A));let e=t;for(;_[e]&&(e=_[e],_[e]!==t););return Promise.resolve(e)}}const j="notice-corrupt-rest-api",F="data-namespace";async function N(t,e){void 0===e&&(e=async()=>{});const n=document.getElementById(j);if(n&&window.navigator.onLine){if(n.querySelector(`li[${F}="${t}"]`))return;try{await e()}catch(e){n.style.display="block";const o=document.createElement("li");o.setAttribute(F,t),o.innerHTML=`<code>${t}</code>`,n.childNodes[1].appendChild(o),n.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}}}async function D(t){const e=document.getElementById(j);if(e){const n=e.querySelector(`li[${F}="${t}"]`);if(null==n||n.remove(),!e.childNodes[1].childNodes.length){e.style.display="none";const t=e.querySelector("textarea");t&&(t.value="")}}}function q(t,e){let{method:n}=t;n===l.GET&&(e?N(e,(()=>{throw new Error})):(window.detectCorruptRestApiFailed=(window.detectCorruptRestApiFailed||0)+1,window.dispatchEvent(new CustomEvent(j))))}function L(t){let{route:e,method:n,ms:o,response:r}=t;const s=document.querySelector(`#${j} textarea`);if(s){const t=s.value.split("\n").slice(0,9);t.unshift(`[${(new Date).toLocaleTimeString()}] [${n||"GET"}] [${o}ms] ${e}; ${null==r?void 0:r.substr(0,999)}`),s.value=t.join("\n")}}function $(t){window.detectCorruptRestApiFailed=window.detectCorruptRestApiFailed||0,window.addEventListener("pageshow",(t=>{let{persisted:e}=t;const n=document.getElementById(j);n&&e&&0===window.detectCorruptRestApiFailed&&(n.style.display="none")}));const e=async()=>{if(window.detectCorruptRestApiFailed>0)for(const e of Object.keys(t))N(e,t[e])};let n;const o=()=>{clearTimeout(n),n=setTimeout(e,1e3)};o(),window.addEventListener(j,o)}const I=$;async function G(t,e,n){if(204===e.status)return{};const o=e.clone();try{return await e.json()}catch(e){const r=await o.text();if(""===r&&[l.DELETE,l.PUT].indexOf(n)>-1)return;let s;console.warn(`The response of ${t} contains unexpected JSON, try to resolve the JSON line by line...`,{body:r});for(const t of r.split("\n"))if(t.startsWith("[")||t.startsWith("{"))try{return JSON.parse(t)}catch(t){s=t}throw s}}var M=n(919),U=n.n(M);const z="application/json;charset=utf-8";async function H(t){let{location:e,options:n,request:o,params:r,settings:s={},cookieValueAsParam:a,multipart:i=!1,sendRestNonce:c=!0,sendReferer:u,replayReason:h,allowBatchRequest:d}=t;const{href:p}=window.location,f=e.namespace||n.restNamespace,m=b({location:e,params:r,nonce:!1,options:n,cookieValueAsParam:a});["wp-json/","rest_route="].filter((t=>m.indexOf(t)>-1)).length>0&&e.method&&e.method!==l.GET?s.method=l.POST:s.method=e.method||l.GET;const y=new URL(m,p),g=-1===["HEAD","GET"].indexOf(s.method);u&&(g?Object.assign(o,{_wp_http_referer:p}):y.searchParams.set("_wp_http_referer",p)),!g&&o&&v(y,[o],!0);const P=y.toString();let C;g&&(i?(C=U()(o,"boolean"==typeof i?{}:i),Array.from(C.values()).filter((t=>t instanceof File)).length>0||(C=JSON.stringify(o))):C=JSON.stringify(o));const O=await x(n.restNonce),T=void 0!==O,k=w().all([s,{headers:{..."string"==typeof C?{"Content-Type":z}:{},...T&&c?{"X-WP-Nonce":O}:{},Accept:"application/json, */*;q=0.1"}}],{isMergeableObject:t=>"[object Object]"===Object.prototype.toString.call(t)});if(k.body=C,d&&e.method!==l.GET&&!(C instanceof FormData))return E({method:e.method,path:b({location:e,params:r,nonce:!1,options:{...n,restRoot:"https://a.de/wp-json"},cookieValueAsParam:a}).substring(20),body:o},{...n,signal:s.signal,..."boolean"==typeof d?{}:d});let S,_=!1;const A=()=>{_=!0};window.addEventListener("pagehide",A),window.addEventListener("beforeunload",A);const j=(new Date).getTime();let F;try{S=await window.fetch(P,k),F=(new Date).getTime()-j,D(f)}catch(t){throw F=(new Date).getTime()-j,_||(L({method:e.method,route:y.pathname,ms:F,response:`${t}`}),q(s,f)),console.error(t),t}finally{window.removeEventListener("pagehide",A),window.removeEventListener("beforeunload",A)}if(!S.ok){let t,a,l=!1;try{if(t=await G(P,S,e.method),"private_site"===t.code&&403===S.status&&T&&!c&&(l=!0,a=1),"rest_cookie_invalid_nonce"===t.code&&T){const{restRecreateNonceEndpoint:t}=n;try{l=!0,2===h?(a=4,await R()):a=2,await x(O,t)}catch(t){}}const o=S.headers.get("retry-after");o.match(/^\d+$/)&&(l=1e3*+o,a=3)}catch(t){}if(l){const t={location:e,options:n,multipart:i,params:r,request:o,sendRestNonce:!0,settings:s,replayReason:a};return"number"==typeof l?new Promise((e=>setTimeout((()=>H(t).then(e)),l))):await H(t)}L({method:e.method,route:y.pathname,ms:F,response:JSON.stringify(t)}),q(s);const u=S;throw u.responseJSON=t,u}return G(P,S,e.method)}function B(t){return{urlBuilder:e=>b({...e,options:{restNamespace:t.restNamespace,restNonce:t.restNonce,restQuery:t.restQuery,restRoot:t.restRoot,restPathObfuscateOffset:t.restPathObfuscateOffset}}),request:e=>H({...e,options:{restNamespace:t.restNamespace,restNonce:t.restNonce,restQuery:t.restQuery,restRoot:t.restRoot,restRecreateNonceEndpoint:t.restRecreateNonceEndpoint,restPathObfuscateOffset:t.restPathObfuscateOffset}})}}const J=l;var Q=n(88);const W=wp.i18n,V=wp;var X=n.n(V);function K(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return W.sprintf(t,...n)}function Y(t){const{wpi18nLazy:e}=window;if(e&&e[t]&&X()&&X().i18n)for(const n of e[t])X().i18n.setLocaleData(n,t);return{_n:function(e,n,o){for(var r=arguments.length,s=new Array(r>3?r-3:0),a=3;a<r;a++)s[a-3]=arguments[a];return K(W._n(e,n,o,t),...s)},_nx:function(e,n,o,r){for(var s=arguments.length,a=new Array(s>4?s-4:0),i=4;i<s;i++)a[i-4]=arguments[i];return K(W._nx(e,n,r,o,t),...a)},_x:function(e,n){for(var o=arguments.length,r=new Array(o>2?o-2:0),s=2;s<o;s++)r[s-2]=arguments[s];return K(W._x(e,n,t),...r)},__:function(e){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return K(W.__(e,t),...o)},_i:function(t,e){return(0,Q.A)({mixedString:t,components:e})}}}const Z={path:"/plugin",method:l.GET};var tt=n(670);const et=mobx;class nt{constructor(){this.entries=new Map,this.busy=!1,this.get=(0,et.flow)((function*(t){const{request:e,params:n,clear:o=!1}=t||{};this.busy=!0;try{const{path:t,namespace:r}=this.annotated,s=yield this.annotated.request({location:{path:t,method:l.GET,namespace:r},request:e,params:n});o&&this.entries.clear();for(const t of s){const e=this.instance(t),n=this.entries.get(e.key);n?n.data=e.data:this.entries.set(e.key,e)}}catch(t){throw console.log(t),t}finally{this.busy=!1}})),this.getSingle=(0,et.flow)((function*(t){if(!this.annotated.singlePath)throw new Error("There is no getSingle method allowed");const{request:e,params:n}=t||{};this.busy=!0;try{const{singlePath:t,namespace:o}=this.annotated,r=yield this.annotated.request({location:{path:t,method:l.GET,namespace:o},request:e,params:n}),s=this.instance(r);this.entries.set(s.key,s)}catch(t){throw console.log(t),t}finally{this.busy=!1}})),setTimeout((()=>{this.annotated||console.error("You have not used the @ClientCollection.annotate annoation together with this class!")}),0)}static#t=this.annotate=t=>e=>class extends e{constructor(...e){super(...e),this.annotated=t}}}(0,tt.Cg)([et.observable],nt.prototype,"entries",void 0),(0,tt.Cg)([et.observable],nt.prototype,"busy",void 0);class ot{get key(){var t;return null==(t=this.data)?void 0:t[this.annotated.keyId]}constructor(t,e={}){this.data={},this.busy=!1,this.persist=(0,et.flow)((function*(t,e){if(!this.annotated.create)throw new Error("There is no persist method allowed");this.busy=!0;try{const{create:{path:n,method:o},namespace:r}=this.annotated,s=yield this.annotated.request({location:{path:n,method:o||l.POST,namespace:r},request:this.transformDataForPersist(),params:t||{},...e||{}});this.fromResponse(s),(null==e?void 0:e.allowBatchRequest)||(this.collection.entries.set(this.key,this),this.afterPersist())}catch(t){throw console.log(t),t}finally{this.busy=!1}})),this.patch=(0,et.flow)((function*(t){if(!this.annotated.patch)throw new Error("There is no patch method allowed");this.busy=!0;try{const{patch:{path:e,method:n},namespace:o}=this.annotated,r=yield this.annotated.request({location:{path:e,method:n||l.PATCH,namespace:o},request:this.transformDataForPatch(),params:{[this.annotated.keyId]:this.key,...t||{}}});this.fromResponse(r),this.afterPatch()}catch(t){throw console.log(t),t}finally{this.busy=!1}})),this.delete=(0,et.flow)((function*(t,e){if(!this.annotated.delete)throw new Error("There is no delete method allowed");this.busy=!0;try{const{delete:{path:n,method:o},namespace:r}=this.annotated,s=yield this.annotated.request({location:{path:n,method:o||l.DELETE,namespace:r},params:{[this.annotated.keyId]:this.key,...t||{}},...e||{}});return(null==e?void 0:e.allowBatchRequest)||(this.collection.entries.delete(this.key),this.afterDelete()),s}catch(t){throw console.log(t),t}finally{this.busy=!1}})),setTimeout((()=>{this.annotated||console.error("You have not used the @ClientModel.annotate annoation together with this class!")}),0),(0,et.runInAction)((()=>{this.collection=t,this.data=e}))}static#t=this.annotate=t=>e=>class extends e{constructor(...e){super(...e),this.annotated=t}};fromResponse(t){return(0,et.set)(this.data,t),this}transformDataForPersist(){return this.data}transformDataForPatch(){throw new Error("If you want to use patch method, you need to implement transformDataForPatch!")}afterPersist(){}afterPatch(){}afterDelete(){}}(0,tt.Cg)([et.observable,(0,tt.Sn)("design:type",Object)],ot.prototype,"data",void 0),(0,tt.Cg)([et.observable,(0,tt.Sn)("design:type",Object)],ot.prototype,"collection",void 0),(0,tt.Cg)([et.observable],ot.prototype,"busy",void 0),(0,tt.Cg)([et.computed,(0,tt.Sn)("design:type",Function),(0,tt.Sn)("design:paramtypes",[]),(0,tt.Sn)("design:returntype",Object)],ot.prototype,"key",null);class rt extends ot{transformDataForPersist(){var t,e,n,o;const r={...super.transformDataForPersist()};return r.title="string"==typeof(null==(t=r.title)?void 0:t.raw)?r.title.raw:null==(e=r.title)?void 0:e.rendered,r.content="string"==typeof(null==(n=r.content)?void 0:n.raw)?r.content.raw:null==(o=r.content)?void 0:o.rendered,delete r._links,delete r.link,r}transformDataForPatch(){return this.transformDataForPersist()}}class st extends nt{}class at extends ot{transformDataForPersist(){const t={...super.transformDataForPersist()};return delete t._links,delete t.link,t}transformDataForPatch(){return this.transformDataForPersist()}}class it extends nt{}const ct={path:"/key-value-map/:name/:key",method:l.PATCH};function lt(t,e){let{chunks:n,chunksLanguageFolder:o,textDomain:r,version:s}=e;const a=n[t.split("?")[0]],i=!!a,[c,l]=(0,u.useState)(!1),h=(0,u.useCallback)((async t=>{const e=window;e.wpi18nLazy=e.wpi18nLazy||{},e.wpi18nLazy.chunkUrls=e.wpi18nLazy.chunkUrls||[];const{chunkUrls:n}=e.wpi18nLazy,a=`${o}/${r}-${t}.json`;if(i&&-1===n.indexOf(a)){n.push(a);try{const t=await window.fetch(`${a}?ver=${s}`),{locale_data:{messages:e}}=await t.json();X().i18n.setLocaleData(e,r)}catch{}}}),[o,r]);return(0,u.useEffect)((()=>{i?Promise.all(a.map(h)).then((()=>{l(!0)})):l(!0)}),[i,h]),c}const ut=t=>{let{children:e,chunkFile:n,fallback:o,options:r}=t;const s=lt(n,r());return(0,c.jsx)(c.Fragment,{children:s?e:o})}},594:t=>{t.exports=React},206:t=>{t.exports=ReactDOM}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var s=n[t]={exports:{}};return e[t].call(s.exports,s,s.exports,o),s.exports}o.m=e,t=[],o.O=(e,n,r,s)=>{if(!n){var a=1/0;for(u=0;u<t.length;u++){for(var[n,r,s]=t[u],i=!0,c=0;c<n.length;c++)(!1&s||a>=s)&&Object.keys(o.O).every((t=>o.O[t](n[c])))?n.splice(c--,1):(i=!1,s<a&&(a=s));if(i){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[n,r,s]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={57:0};o.O.j=e=>0===t[e];var e=(e,n)=>{var r,s,[a,i,c]=n,l=0;if(a.some((e=>0!==t[e]))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(c)var u=c(o)}for(e&&e(n);l<a.length;l++)s=a[l],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(u)},n=self.webpackChunkdevowlWp_utils=self.webpackChunkdevowlWp_utils||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var r=o.O(void 0,[26],(()=>o(768)));r=o.O(r),devowlWp_utils=r})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-custom-post-order/1.3.98/dbf9917624a6bc7bcbaa98687f97eb67/index.js.map
