import{_ as h,l as v,r as y,c as n,a5 as w,o as b,a as C,a0 as N,p as z,g as r,d as c,n as a,k as l,h as p,e as $}from"./index-3e417f16.js";const k={"page-contents":"_page-contents_nz19w_1","page-contents__head":"_page-contents__head_nz19w_7","page-contents__foot":"_page-contents__foot_nz19w_7","page-contents__body":"_page-contents__body_nz19w_10"},f=()=>({wrap:"",head:"",body:"",foot:""}),u=e=>{if(!e||typeof e!="function")return!1;const o=e();let t=0;return o.forEach(s=>s.children==="v-if"&&t++),o.length!==t},B=new Event("resize"),i=new ResizeObserver(e=>{e[0].target.dispatchEvent(B)}),E={props:{classNames:{Type:Object,default(){return f()}}},setup(e,{slots:o}){const t=v({wrap:{value:null},slots:{}}),s=y(null),d=n(()=>{const{classNames:g}=e;return Object.assign(f(),g)}),_=n(()=>u(t.slots.head)),m=n(()=>u(t.slots.foot));return w(()=>{t.slots.head=o.head,t.slots.foot=o.foot,t.wrap.value=s}),b(()=>{i.observe(s.value)}),C(()=>{t.slots.head=o.head,t.slots.foot=o.foot}),N(()=>{i.unobserve(s.value)}),z("pageContents",{wrap:t.wrap}),{wrap:s,customClassNames:d,isHead:_,isFoot:m}}};function M(e,o,t,s,d,_){return r(),c("div",{ref:"wrap",class:a([e.$style["page-contents"],s.customClassNames.wrap])},[s.isHead?(r(),c("div",{key:0,class:a([e.$style["page-contents__head"],s.customClassNames.head])},[l(e.$slots,"head")],2)):p("",!0),$("div",{class:a([e.$style["page-contents__body"],s.customClassNames.body])},[l(e.$slots,"default")],2),s.isFoot?(r(),c("div",{key:1,class:a([e.$style["page-contents__foot"],s.customClassNames.foot])},[l(e.$slots,"foot")],2)):p("",!0)],2)}const O={$style:k},F=h(E,[["render",M],["__cssModules",O]]);export{F as P};
