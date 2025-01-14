var realCustomPostOrder_admin;(()=>{"use strict";var t,e={781:(t,e,r)=>{r.r(e),r.d(e,{FirstTimePointer:()=>u.jJ,MakeSortable:()=>u.tX,OptionStore:()=>h.t6,PostsStore:()=>h.xy,RootStore:()=>h.yd,TABLE_BODY_SELECTOR:()=>u.Ml,applyPostsTableSortable:()=>u.On,createHandlers:()=>u.sb,locationRestMovePost:()=>p.Z,locationRestPostFirstTimePointerDelete:()=>p.z,useStores:()=>h.gy}),r(719);var o=r(555),s=r(46),i=r(669),n=r.n(i),a=r(498),l=r(789),c=r(57),d={};for(const t in l)"default"!==t&&(d[t]=()=>l[t]);r.d(e,d);var p=r(521),h=r(782),u=r(958);(0,l.handleCorruptRestApi)({[a.y.get.optionStore.restNamespace]:async()=>{await(0,c.E)({location:{path:"/plugin"}})}}),(0,o.O)(),n()(document).ajaxComplete((()=>{setTimeout(o.O,200)})),a.y.get.optionStore.others.types.post.showPostFirstTimePointer&&setTimeout((()=>{let t=!0;n()(document).one("mouseenter",`${o.M} > tr`,(function(){t&&new s.j(n()(this)),t=!1}))}),1e3)},958:(t,e,r)=>{r.d(e,{jJ:()=>i.j,tX:()=>o.t,Ml:()=>s.M,On:()=>s.O,sb:()=>n.s});var o=r(734),s=r(555),i=r(46),n=r(843)},843:(t,e,r)=>{r.d(e,{s:()=>i});var o=r(669),s=r.n(o);function i(t){t.find("> tr:not(.no-items) > :first-child").each((function(){s()(this).children(".rcpo-handler").length||s()(this).append('<div class="rcpo-handler"><span class="spinner"></spin></div>')}))}},46:(t,e,r)=>{r.d(e,{j:()=>a});var o=r(789);let s;const i=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return(s||(s=(0,o.createLocalizationFactory)(o.BaseOptions.getPureSlug("real-custom-post-order")))).__(...e)};var n=r(498);class a{constructor(t){this.$tr=t,this.init()}async close(){this.$tr.removeClass("rcpo-force-handler").addClass("updating-sequence rcpo-force-handler");try{await n.y.get.postsStore.dismissFirstTimePointer()}finally{this.$tr.removeClass("updating-sequence rcpo-force-handler")}}init(){this.$tr.addClass("rcpo-force-handler");const t=this.$tr.find(".rcpo-handler"),e=i("Did you know that?"),r=i('You are now able to sort your post entries with drag & drop. Just drag this bar and you are ready to sort! Tip: You can enable/disable sortable functionality in "Screen settings".');t.pointer({pointerClass:"wp-pointer rcpo-handler-pointer",content:`<h3>${e}</h3><p>${r}</p>`,close:this.close.bind(this)}).pointer("open")}}},734:(t,e,r)=>{r.d(e,{t:()=>a});var o=r(669),s=r.n(o),i=r(498),n=r(293);class a{constructor(t){this.$tbody=t,this.init()}helper(t,e){const r=e;return r.children().children().each((function(){s()(this).width(s()(this).width())})),r.data("sortableHeight",r.height()),e}start(t,e){e.placeholder.height(e.item.data("sortableHeight")),e.placeholder.css("display","table"),e.helper.css("display","table");try{this.$tbody.children(".rcpo-force-handler").find(".rcpo-handler").pointer("close").pointer("destroy")}catch(t){}}stop(t,e){e.placeholder.height("auto"),e.item.css("display","table-row")}async update(t,e){const r=s()(this).sortable("toArray").map((t=>+t.substr(5)));e.item.addClass("updating-sequence rcpo-force-handler"),e.item.css("display","table-row");try{await i.y.get.postsStore.updateBySequence(r);const{optionStore:{isRatable:t,slug:o}}=i.y.get;t&&new n.RatingPointer(o,e.item)}finally{e.item.removeClass("updating-sequence rcpo-force-handler")}}init(){!this.$tbody.data("uiSortable")&&this.$tbody.sortable({forceHelperSize:!0,forcePlaceholderSize:!0,items:"tr:not(.no-items)",axis:"y",handle:".rcpo-handler",helper:this.helper,start:this.start.bind(this),stop:this.stop,update:this.update})}}},555:(t,e,r)=>{r.d(e,{M:()=>a,O:()=>l});var o=r(669),s=r.n(o),i=r(843),n=r(734);const a="#wpbody-content tbody#the-list";function l(){const t=s()(a);t.parents("table").addClass("rcpo-sortable"),(0,i.s)(t),new n.t(t)}},782:(t,e,r)=>{r.d(e,{gy:()=>o.g,t6:()=>s.t,xy:()=>i.x,yd:()=>o.y});var o=r(498),s=r(999),i=r(543)},999:(t,e,r)=>{r.d(e,{t:()=>a});var o=r(670),s=r(497),i=r(789),n=r(293);class a extends i.BaseOptions{get isRatable(){return(0,n.isRatable)(this.slug)}constructor(t){super(),this.rootStore=t,this.pureSlug=i.BaseOptions.getPureSlug("real-custom-post-order"),this.pureSlugCamelCased=i.BaseOptions.getPureSlug("real-custom-post-order",!0),(0,s.runInAction)((()=>Object.assign(this,window[this.pureSlugCamelCased])))}}(0,o.Cg)([s.observable,(0,o.Sn)("design:type",Object)],a.prototype,"others",void 0)},543:(t,e,r)=>{r.d(e,{x:()=>a});var o=r(497),s=r(57),i=r(840),n=r(671);class a{constructor(t){this.updateBySequence=(0,o.flow)((function*(t){yield(0,s.E)({location:i.Z,request:{type:"post",sequence:t}})})),this.dismissFirstTimePointer=(0,o.flow)((function*(){yield(0,s.E)({location:n.z}),this.rootStore.optionStore.others.types.post.showPostFirstTimePointer=!1})),this.rootStore=t}}},498:(t,e,r)=>{r.d(e,{g:()=>a,y:()=>n});var o=r(789),s=r(999),i=r(543);class n{get context(){return this.contextMemo?this.contextMemo:this.contextMemo=(0,o.createContextFactory)(this)}constructor(){this.optionStore=new s.t(this),this.postsStore=new i.x(this)}static get StoreProvider(){return n.get.context.StoreProvider}static get get(){return n.me?n.me:n.me=new n}}const a=()=>n.get.context.useStores()},57:(t,e,r)=>{r.d(e,{E:()=>i});var o=r(789);let s;const i=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return(s||(s=(0,o.createRequestFactory)(window[o.BaseOptions.getPureSlug("real-custom-post-order",!0)]))).request(...e)}},521:(t,e,r)=>{r.d(e,{Z:()=>o.Z,z:()=>s.z});var o=r(840),s=r(671)},840:(t,e,r)=>{r.d(e,{Z:()=>o});const o={path:"/move",method:r(789).RouteHttpVerb.POST}},671:(t,e,r)=>{r.d(e,{z:()=>o});const o={path:"/post/firstTimePointer",method:r(789).RouteHttpVerb.DELETE}},719:()=>{},293:t=>{t.exports=devowlWp_realUtils},789:t=>{t.exports=devowlWp_utils},669:t=>{t.exports=jQuery},497:t=>{t.exports=mobx}},r={};function o(t){var s=r[t];if(void 0!==s)return s.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.m=e,t=[],o.O=(e,r,s,i)=>{if(!r){var n=1/0;for(d=0;d<t.length;d++){for(var[r,s,i]=t[d],a=!0,l=0;l<r.length;l++)(!1&i||n>=i)&&Object.keys(o.O).every((t=>o.O[t](r[l])))?r.splice(l--,1):(a=!1,i<n&&(n=i));if(a){t.splice(d--,1);var c=s();void 0!==c&&(e=c)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[r,s,i]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={884:0};o.O.j=e=>0===t[e];var e=(e,r)=>{var s,i,[n,a,l]=r,c=0;if(n.some((e=>0!==t[e]))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(l)var d=l(o)}for(e&&e(r);c<n.length;c++)i=n[c],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(d)},r=self.webpackChunkrealCustomPostOrder_=self.webpackChunkrealCustomPostOrder_||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var s=o.O(void 0,[187],(()=>o(781)));s=o.O(s),realCustomPostOrder_admin=s})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-custom-post-order/1.3.99/93a4799a3748e9504cd90bcc7dfa8721/admin.js.map
