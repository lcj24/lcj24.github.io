import{_ as k,l as M,r as O,c as y,w as g,a5 as $,p as C,j as q,g as r,d as x,e as i,m as E,k as T,n as b,i as d,Q as p,q as j}from"./index-1eea696b.js";import{I as V}from"./check-70357a5a.js";import{I as w}from"./check-l-f55769c9.js";const L="_checkbox_8vobe_1",A="_checkbox__input_8vobe_6",z="_checkbox__label_8vobe_17",P="_checkbox__object_8vobe_28",Q="_checkbox__text_8vobe_81",D={checkbox:L,checkbox__input:A,checkbox__label:z,checkbox__object:P,"checkbox__object-inner":"_checkbox__object-inner_8vobe_34",checkbox__text:Q,"checkbox--align-center":"_checkbox--align-center_8vobe_92","checkbox--only-object":"_checkbox--only-object_8vobe_95","checkbox--full":"_checkbox--full_8vobe_120","checkbox--theme-secondary":"_checkbox--theme-secondary_8vobe_123","checkbox--theme-tertiary":"_checkbox--theme-tertiary_8vobe_123","checkbox--theme-quinary":"_checkbox--theme-quinary_8vobe_123","checkbox--theme-quaternary":"_checkbox--theme-quaternary_8vobe_165"},v=()=>({wrap:"",input:"",label:""}),F={inheritAttrs:!1,props:{classNames:{Type:Object,default(){return v()}},type:{Type:String,default:"checkbox"},name:{Type:String,default:null},id:{Type:String,required:!0},align:{Type:String,default:null},theme:{Type:String,default:null},onlyObject:{Type:Boolean,default:!1},full:{Type:Boolean,default:!1},defaultChecked:{Type:Boolean,default:!1},modelValue:{Type:Boolean}},setup(c,{emit:o}){const t=new Event("siblingsChange"),e=M({theme:{value:null},checked:!1}),n=O(null),_=y(()=>{const{classNames:s}=c;return Object.assign(v(),s)}),a=()=>n.value,u=s=>{const l=s.target,{checked:h}=l,{type:I,name:f}=c;e.checked=h,o("update:modelValue",h),I==="radio"&&f&&Array.prototype.filter.call(document.querySelectorAll(`[name="${f}"]`),m=>m!==l).forEach(m=>{m.dispatchEvent(t)})},S=s=>{const l=s.target,{checked:h}=l;e.checked=h,o("update:modelValue",h)};return g(()=>c.theme,s=>{e.theme.value=s}),g(()=>c.modelValue,s=>{e.checked=s}),$(()=>{const{theme:s,modelValue:l,defaultChecked:h}=c;e.theme.value=s,e.checked=typeof l=="boolean"?l:h}),C("checkBoxStyleModule",q()),C("checkBoxTheme",e.theme),{state:e,input:n,customClassNames:_,getInputElement:a,onChange:u,onSiblingsChange:S}}},G=["type","name","id","checked"],H=["for"];function J(c,o,t,e,n,_){return r(),x("div",{class:b([c.$style.checkbox,{[c.$style[`checkbox--theme-${t.theme}`]]:t.theme,[c.$style[`checkbox--align-${t.align}`]]:t.align,[c.$style["checkbox--only-object"]]:t.onlyObject,[c.$style["checkbox--full"]]:t.full},e.customClassNames.wrap])},[i("input",E({ref:"input"},c.$attrs,{type:t.type,class:[c.$style.checkbox__input,e.customClassNames.input],name:t.name,id:t.id,checked:e.state.checked,onChange:o[0]||(o[0]=(...a)=>e.onChange&&e.onChange(...a)),"on:siblingsChange":o[1]||(o[1]=(...a)=>e.onSiblingsChange&&e.onSiblingsChange(...a))}),null,16,G),i("label",{for:t.id,class:b([c.$style.checkbox__label,e.customClassNames.label])},[T(c.$slots,"default")],10,H)],2)}const K={$style:D},te=k(F,[["render",J],["__cssModules",K]]),N=()=>({text:"",textInner:""}),R={props:{classNames:{Type:Object,default(){return N()}}},setup(c){const o=d("checkBoxStyleModule"),t=y(()=>{const{classNames:e}=c;return Object.assign(N(),e)});return{styleModule:o,customClassNames:t}}};function U(c,o,t,e,n,_){return r(),x("span",{class:b([e.styleModule.checkbox__text,e.customClassNames.text])},[T(c.$slots,"default")],2)}const oe=k(R,[["render",U]]),B=()=>({object:"",objectInner:""}),W={components:{IconCheck:V,IconCheckLarge:w},props:{classNames:{Type:Object,default(){return B()}}},setup(c){const o=d("checkBoxStyleModule"),t=d("checkBoxTheme"),e=y(()=>{const{classNames:n}=c;return Object.assign(B(),n)});return{theme:t,styleModule:o,customClassNames:e}}};function X(c,o,t,e,n,_){const a=p("IconCheckLarge"),u=p("IconCheck");return r(),x("span",{class:b([e.styleModule.checkbox__object,e.customClassNames.object])},[i("span",{class:b([e.styleModule["checkbox__object-inner"],e.customClassNames.objectInner])},[e.theme.value==="secondary"?(r(),j(a,{key:0})):(r(),j(u,{key:1}))],2)],2)}const se=k(W,[["render",X]]);export{te as C,oe as a,se as b};
