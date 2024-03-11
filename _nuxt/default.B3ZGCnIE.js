import{_ as C}from"./nuxt-link.BhK5F43i.js";import{_ as h,u as U}from"./Button.DkpGBGm7.js";import{d as f,r as j,o as M,ay as H,c as u,m as I,J as g,b as i,I as m,w as l,g as s,G as p,e as _,as as N,au as b,D as S,am as A,an as D,W as O,av as P,aw as F,j as T,Q as L,F as V,H as z,t as B,ad as J,a6 as E}from"./entry.BV9fogSh.js";import{_ as d}from"./_plugin-vue_export-helper.DlAUqK2U.js";import"./Icon.BQ2f38ji.js";import"./Icon.kYNj4WtK.js";import"./index.DKzsDYrr.js";const G={base:"mx-auto",padding:"px-4 sm:px-6 lg:px-8",constrained:"max-w-7xl"},Q=Symbol.for("nuxt:client-only"),R=f({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(a,{slots:e,attrs:n}){const c=j(!1);return M(()=>{c.value=!0}),H(Q,!0),o=>{var v;if(c.value)return(v=e.default)==null?void 0:v.call(e);const t=e.fallback||e.placeholder;if(t)return t();const r=o.fallback||o.placeholder||"",y=o.fallbackTag||o.placeholderTag||"span";return u(y,n,r)}}}),W=()=>I("color-mode").value,Y=_("div",{class:"w-8 h-8"},null,-1),q=f({__name:"ColorModeToggle",setup(a){const e=W(),n=g({get(){return e.value==="dark"},set(){e.preference=e.value==="dark"?"light":"dark"}});return(c,o)=>{const t=h,r=R;return i(),m(r,null,{fallback:l(()=>[Y]),default:l(()=>[s(t,{icon:p(n)?"i-heroicons-moon-20-solid":"i-heroicons-sun-20-solid",color:"gray",variant:"ghost","aria-label":"Theme",onClick:o[0]||(o[0]=y=>n.value=!p(n))},null,8,["icon"])]),_:1})}}}),K=N(b.ui.strategy,b.ui.container,G),X=f({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(a){const{ui:e,attrs:n}=U("container",O(a,"ui"),K),c=g(()=>P(F(e.value.base,e.value.padding,e.value.constrained),a.class));return{ui:e,attrs:n,containerClass:c}}});function Z(a,e,n,c,o,t){return i(),m(D(a.as),A({class:a.containerClass},a.attrs),{default:l(()=>[S(a.$slots,"default")]),_:3},16,["class"])}const x=d(X,[["render",Z]]),tt={},et={class:"flex item-center gap-1"};function nt(a,e){const n=C,c=h,o=q,t=x;return i(),m(t,{class:"sticky top-0 py-2 flex items-center justify-between backdrop-blur"},{default:l(()=>[s(n,{to:"/",class:"text-xl font-extrabold cursor-pointer"},{default:l(()=>[T(" イブラヒム ")]),_:1}),_("div",et,[s(c,{icon:"i-simple-icons-github",color:"gray",variant:"ghost",to:"https://github.com/hajiskyy",target:"_blank"}),s(o)])]),_:1})}const ot=d(tt,[["render",nt]]),at={class:""},st={__name:"HomeContentNav",setup(a){const{toc:e}=L();return(n,c)=>{const o=C,t=x;return i(),m(t,{class:"hidden md:flex max-w-52 screen-height p-2 fixed top-0 flex-col justify-end"},{default:l(()=>[_("ul",at,[(i(!0),u(V,null,z(p(e).links,r=>(i(),u("li",{key:r.id},[s(o,{to:`/#${r.id}`,class:"font-medium"},{default:l(()=>[T(B(r.text),1)]),_:2},1032,["to"])]))),128))])]),_:1})}}},ct=st,rt=window.setInterval,lt={class:"w-full absolute h-screen transform-gpu blur-3xl -z-10 overflow-hidden pointer-events-none opacity-60"},k=10,$=100,w=100,it=f({__name:"HeroAnimation",setup(a){const e=j([]),n=g(()=>({clipPath:`polygon(${e.value.map(t=>`${t.x}% ${t.y}%`).join(",")})`})),c=()=>{for(let t=0;t<k;t++)e.value.push({index:t,x:Math.random()*$,y:Math.random()*w})},o=()=>{for(let t=0;t<k;t++)e.value[t].x=Math.random()*$,e.value[t].y=Math.random()*w};return M(()=>{c();const t=rt(o,3e3);J(()=>{clearInterval(t)})}),(t,r)=>(i(),u("div",lt,[_("div",{class:"clip-anim aspect-[1.7] w-full h-full bg-gradient-to-tr from-primary-500 to-white/10 opacity-90",style:E(p(n))},null,4)]))}}),_t=d(it,[["__scopeId","data-v-e2699a49"]]),ut={},mt={class:"w-full border-t py-5 flex items-center justify-between mt-10"},dt={class:"text-sm"},pt={class:"flex gap-1 items-center"};function ft(a,e){const n=h;return i(),u("div",mt,[_("span",dt,"© "+B(new Date().getFullYear())+" Haji Mohammed. All rights reserved",1),_("div",pt,[s(n,{icon:"i-simple-icons-instagram",to:"https://www.instagram.com/hajisky/",target:"_blank",color:"gray",variant:"ghost"}),s(n,{icon:"i-simple-icons-x",to:"https://twitter.com/hajiskyyy",target:"_blank",color:"gray",variant:"ghost"}),s(n,{icon:"i-simple-icons-github",color:"gray",variant:"ghost",to:"https://github.com/hajiskyy",target:"_blank"})])])}const ht=d(ut,[["render",ft]]),gt={};function xt(a,e){const n=ot,c=ct,o=_t,t=x,r=ht;return i(),m(t,{class:"relative"},{default:l(()=>[s(n),s(c),s(o),s(t,null,{default:l(()=>[s(t,{class:"md:max-w-xl lg:max-w-4xl mr-0 px-0 pb-5"},{default:l(()=>[S(a.$slots,"default")]),_:3})]),_:3}),s(r)]),_:3})}const jt=d(gt,[["render",xt]]);export{jt as default};
