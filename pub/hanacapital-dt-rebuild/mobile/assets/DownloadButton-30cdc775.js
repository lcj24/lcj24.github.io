import{_ as m,a9 as i,c as n,Q as d,g as y,q as b,s as p,e as u,V as g,n as l,t as f,m as N,v as C,R as h}from"./index-a5325df6.js";const w="_button_u1goz_1",x="_button__text_u1goz_39",D="_button__icon_u1goz_57",T={button:w,button__text:x,button__icon:D,"button--theme-secondary":"_button--theme-secondary_u1goz_66"},r=()=>({wrap:"",text:"",icon:""}),z={inheritAttrs:!1,components:{IconDownload:i},props:{classNames:{Type:Object,default(){return r()}},tagName:{Type:String,default:"button"},type:{Type:String,default:"button"},theme:{Type:String,default:null},text:{Type:String,default:"다운로드"}},setup(t){const a=n(()=>{const{classNames:s}=t;return Object.assign(r(),s)}),o=n(()=>{const{tagName:s}=t;return s==="RouterLink"?h:s}),e=n(()=>{const{tagName:s,type:c}=t;return s==="button"?c:null});return{customClassNames:a,setComponent:o,setType:e}}};function S(t,a,o,e,s,c){const _=d("IconDownload");return y(),b(C(e.setComponent),N(t.$attrs,{type:e.setType,class:[t.$style.button,{[t.$style[`button--theme-${o.theme}`]]:o.theme},e.customClassNames.wrap]}),{default:p(()=>[u("span",{class:l([t.$style.button__icon,e.customClassNames.icon])},[g(_)],2),u("span",{class:l([t.$style.button__text,e.customClassNames.text])},f(o.text),3)]),_:1},16,["type","class"])}const k={$style:T},v=m(z,[["render",S],["__cssModules",k]]);export{v as D};
