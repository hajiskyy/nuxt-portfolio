import{_ as p}from"./CTl7f-n1.js";import{_ as m}from"./Uxudei8-.js";import{u as d}from"./BZi-etkc.js";import{d as u,D as f,c as s,e as n,f as o,F as g,E as x,G as h,w as y,t as a,H as i,h as k,q as w}from"./DfrNGfo0.js";import{u as b}from"./CN8HIidc.js";import"./CdER-kyc.js";import"./oACsDr1I.js";import"./BQkc-AXV.js";import"./DlAUqK2U.js";const B={class:"flex flex-col gap-6 items-start not-prose"},v={class:"flex flex-wrap gap-6"},A={class:"text-lg font-bold"},C={class:"text-sm text-gray-500 dark:text-gray-400"},D={class:"mt-auto"},U=u({__name:"RecentBlogs",async setup(F){let e,r;const{data:c}=([e,r]=f(()=>d("recent-blogs",()=>w("blog").where({isHome:{$not:!0}}).sort({publishedAt:-1}).limit(3).find())),e=await e,r(),e);return(N,q)=>{const l=p,_=m;return s(),n("div",B,[o("div",v,[(s(!0),n(g,null,x(i(c),t=>(s(),h(l,{key:t._id,class:"w-full max-w-sm p-6 flex flex-col gap-2 group rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",to:t._path},{default:y(()=>[o("p",A,a(t.title),1),o("p",C,a(t.description),1),o("span",D,a(i(b)(t.publishedAt)),1)]),_:2},1032,["to"]))),128))]),k(_,{padded:!1,label:"More Blogs",to:"/blog",variant:"link",icon:"i-heroicons-arrow-right",trailing:""})])}}});export{U as default};
