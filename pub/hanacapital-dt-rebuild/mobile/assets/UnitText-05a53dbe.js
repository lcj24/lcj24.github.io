import{_ as c,c as g,g as s,d as a,n as i,t as l,h as r,e as m,k as o}from"./index-a5325df6.js";const d={"unit-text":"_unit-text_w6t9k_1","unit-text__left":"_unit-text__left_w6t9k_5","unit-text__right":"_unit-text__right_w6t9k_5","unit-text__right--secondary":"_unit-text__right--secondary_w6t9k_5","unit-text__val":"_unit-text__val_w6t9k_22","unit-text--align-center":"_unit-text--align-center_w6t9k_31","unit-text--align-right":"_unit-text--align-right_w6t9k_34","unit-text--vertical-align-center":"_unit-text--vertical-align-center_w6t9k_37","unit-text--size-regular":"_unit-text--size-regular_w6t9k_40","unit-text--size-medium":"_unit-text--size-medium_w6t9k_52","unit-text--size-large":"_unit-text--size-large_w6t9k_63","unit-text--size-small-large":"_unit-text--size-small-large_w6t9k_77"},u=()=>({wrap:"",val:"",leftUnit:"",rightUnit:"",rightSecondaryUnit:""}),y={props:{classNames:{Type:Object,default(){return u()}},leftUnit:{Type:String,default:null},rightUnit:{Type:String,default:null},rightSecondaryUnit:{Type:String,default:null},align:{Type:String,default:null},verticalAlign:{Type:String,default:null},size:{Type:String,default:null}},setup(e){return{customClassNames:g(()=>{const{classNames:t}=e;return Object.assign(u(),t)})}}};function x(e,_,t,n,h,k){return s(),a("span",{class:i([e.$style["unit-text"],{[e.$style[`unit-text--align-${t.align}`]]:t.align,[e.$style[`unit-text--vertical-align-${t.verticalAlign}`]]:t.verticalAlign,[e.$style[`unit-text--size-${t.size}`]]:t.size},n.customClassNames.wrap])},[t.leftUnit?(s(),a("span",{key:0,class:i([e.$style["unit-text__left"],n.customClassNames.leftUnit])},l(t.leftUnit),3)):r("",!0),m("span",{class:i([e.$style["unit-text__val"],n.customClassNames.val])},[o(e.$slots,"default")],2),t.rightUnit?(s(),a("span",{key:1,class:i([e.$style["unit-text__right"],n.customClassNames.rightUnit])},l(t.rightUnit),3)):r("",!0),t.rightSecondaryUnit?(s(),a("span",{key:2,class:i([e.$style["unit-text__right--secondary"],n.customClassNames.rightUnit])},l(t.rightSecondaryUnit),3)):r("",!0)],2)}const f={$style:d},w=c(y,[["render",x],["__cssModules",f]]);export{w as U};
