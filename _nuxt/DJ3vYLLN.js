import{_ as p}from"./B7zT2EB6.js";import{u as _}from"./6nmHT3sJ.js";import{d as m,D as u,c as a,e as i,F as f,E as x,G as y,w as h,f as s,t as o,H as c,q as g}from"./BFnV2los.js";import{u as k}from"./CN8HIidc.js";const w={class:"flex flex-col gap-6 not-prose divide-y divide-primary-700 dark:divide-primary-600"},v={class:"text-sm italic text-gray-500 dark:text-gray-400"},D={class:"flex flex-col gap-2"},B={class:"text-lg font-bold group-hover:underline"},F={class:"text-sm text-gray-500 dark:text-gray-400"},L=m({__name:"Blogs",async setup(A){let e,r;const{data:l}=([e,r]=u(()=>_("recent-blogs",()=>g("blog").where({isHome:{$not:!0}}).sort({publishedAt:-1}).find())),e=await e,r(),e);return(n,C)=>{const d=p;return a(),i("div",w,[(a(!0),i(f,null,x(c(l),t=>(a(),y(d,{key:t._id,class:"w-full max-w-sm flex flex-col gap-1 group py-6",to:t._path},{default:h(()=>[s("span",v,o(("useDateFormatter"in n?n.useDateFormatter:c(k))(t.publishedAt)),1),s("div",D,[s("p",B,o(t.title),1),s("p",F,o(t.description),1)])]),_:2},1032,["to"]))),128))])}}});export{L as default};
