import{_ as y,l as b,c as u,a5 as B,a as N,p as k,j as T,g as a,d as r,n as p,k as l,h as c,e as C}from"./index-3e417f16.js";const v="_popup_1uomj_1",j="_popup__block_1uomj_9",h="_popup__body_1uomj_13",O={popup:v,"popup__outer-top":"_popup__outer-top_1uomj_6","popup__outer-bottom":"_popup__outer-bottom_1uomj_6",popup__block:j,popup__body:h},d=()=>({wrap:"",outerTop:"",outerBottom:"",block:"",body:""}),n=o=>{if(!o||typeof o!="function")return!1;const e=o();let t=0;return e.forEach(s=>s.children==="v-if"&&t++),e.length!==t},M={props:{classNames:{Type:Object,default(){return d()}},fix:{Type:Boolean,default:!1}},setup(o,{slots:e}){const t=b({slots:{}}),s=u(()=>{const{classNames:f}=o;return Object.assign(d(),f)}),_=u(()=>n(t.slots.default)),m=u(()=>n(t.slots.outerTop)),i=u(()=>n(t.slots.outerBottom));return B(()=>{t.slots.default=e.default,t.slots.outerTop=e.outerTop,t.slots.outerBottom=e.outerBottom}),N(()=>{t.slots.default=e.default,t.slots.outerTop=e.outerTop,t.slots.outerBottom=e.outerBottom}),k("popupStyleModule",T()),{customClassNames:s,isSlotDefault:_,isOuterTop:m,isOuterBottom:i}}};function S(o,e,t,s,_,m){return a(),r("div",{class:p([o.$style.popup,s.customClassNames.wrap])},[s.isOuterTop?(a(),r("div",{key:0,class:p([o.$style["popup__outer-top"],s.customClassNames.outerTop])},[l(o.$slots,"outerTop")],2)):c("",!0),C("div",{class:p([o.$style.popup__block,s.customClassNames.block])},[s.isSlotDefault?(a(),r("div",{key:0,class:p([o.$style.popup__body,s.customClassNames.body])},[l(o.$slots,"default")],2)):c("",!0)],2),s.isOuterBottom?(a(),r("div",{key:1,class:p([o.$style["popup__outer-bottom"],s.customClassNames.outerBottom])},[l(o.$slots,"outerBottom")],2)):c("",!0)],2)}const $={$style:O},w=y(M,[["render",S],["__cssModules",$]]);export{w as N};
