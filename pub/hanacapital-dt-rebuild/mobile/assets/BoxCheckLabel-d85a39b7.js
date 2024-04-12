import{_ as z,l as E,r as V,c as k,w as b,a5 as $,p as u,j as w,g as m,d as y,e as x,m as O,n as i,k as g,h as C,i as v}from"./index-1eea696b.js";const A={"box-check":"_box-check_mysan_1","box-check__input":"_box-check__input_mysan_11","box-check__block":"_box-check__block_mysan_22","box-check__left":"_box-check__left_mysan_37","box-check__right":"_box-check__right_mysan_41","box-check__center":"_box-check__center_mysan_45","box-check__label":"_box-check__label_mysan_49","box-check__object":"_box-check__object_mysan_64","box-check__object-inner":"_box-check__object-inner_mysan_72","box-check--checkbox":"_box-check--checkbox_mysan_151","box-check--contents":"_box-check--contents_mysan_183","box-check--align-top":"_box-check--align-top_mysan_192","box-check--min-side":"_box-check--min-side_mysan_195","box-check--size-small":"_box-check--size-small_mysan_203","box-check--size-regular":"_box-check--size-regular_mysan_228"},p=()=>({wrap:"",input:"",block:"",left:"",center:"",right:""}),I={inheritAttrs:!1,props:{classNames:{Type:Object,default(){return p()}},type:{Type:String,default:"radio"},name:{Type:String,default:null},id:{Type:String,required:!0},align:{Type:String,default:null},contents:{Type:Boolean,default:!1},minSide:{Type:Boolean,default:!1},defaultChecked:{Type:Boolean,default:!1},modelValue:{Type:Boolean},size:{Type:String,default:null}},setup(e,{emit:a,slots:t}){const s=new Event("siblingsChange"),c=E({type:{value:null},id:{value:null},size:{value:null},checked:!1}),_=V(null),h=k(()=>{const{classNames:n}=e;return Object.assign(p(),n)}),S=k(()=>!!t.left),B=k(()=>!!t.right),T=()=>_.value,j=n=>{const o=n.target,{checked:l}=o,{type:d,name:r}=e;c.checked=l,a("update:modelValue",l),d==="radio"&&r&&Array.prototype.filter.call(document.querySelectorAll(`[name="${r}"]`),f=>f!==o).forEach(f=>{f.dispatchEvent(s)})},M=n=>{const o=n.target,{checked:l}=o;c.checked=l,a("update:modelValue",l)};return b(()=>e.type,n=>{c.type.value=n}),b(()=>e.id,n=>{c.id.value=n}),b(()=>e.modelValue,n=>{c.checked=n}),b(()=>e.size,n=>{c.size=n}),$(()=>{const{type:n,id:o,size:l,modelValue:d,defaultChecked:r}=e;c.type.value=n,c.id.value=o,c.size.value=l,c.checked=typeof d=="boolean"?d:r}),u("boxCheckstyleModule",w()),u("boxCheckType",c.type),u("boxCheckId",c.id),u("boxCheckSize",c.size),{state:c,input:_,customClassNames:h,getInputElement:T,isLeft:S,isRight:B,onChange:j,onSiblingsChange:M}}},L=["type","name","id","checked"];function q(e,a,t,s,c,_){return m(),y("div",{class:i([e.$style["box-check"],{[e.$style["box-check--checkbox"]]:t.type==="checkbox",[e.$style[`box-check--align-${t.align}`]]:t.align,[e.$style["box-check--contents"]]:t.contents,[e.$style["box-check--min-side"]]:t.minSide,[e.$style[`box-check--size-${t.size}`]]:t.size},s.customClassNames.wrap])},[x("input",O({ref:"input"},e.$attrs,{type:t.type,class:[e.$style["box-check__input"],s.customClassNames.input],name:t.name,id:t.id,checked:s.state.checked,onChange:a[0]||(a[0]=(...h)=>s.onChange&&s.onChange(...h)),"on:siblingsChange":a[1]||(a[1]=(...h)=>s.onSiblingsChange&&s.onSiblingsChange(...h))}),null,16,L),x("div",{class:i([e.$style["box-check__block"],s.customClassNames.block])},[s.isLeft?(m(),y("div",{key:0,class:i([e.$style["box-check__left"],s.customClassNames.left])},[g(e.$slots,"left")],2)):C("",!0),x("div",{class:i([e.$style["box-check__center"],s.customClassNames.center])},[g(e.$slots,"default")],2),s.isRight?(m(),y("div",{key:1,class:i([e.$style["box-check__right"],s.customClassNames.right])},[g(e.$slots,"right")],2)):C("",!0)],2)],2)}const R={$style:A},J=z(I,[["render",q],["__cssModules",R]]),N=()=>({label:""}),P={props:{classNames:{Type:Object,default(){return N()}}},setup(e){const a=v("boxCheckstyleModule"),t=v("boxCheckId"),s=k(()=>{const{classNames:c}=e;return Object.assign(N(),c)});return{styleModule:a,id:t,customClassNames:s}}},D=["for"];function F(e,a,t,s,c,_){return m(),y("label",{for:s.id.value,class:i([s.styleModule["box-check__label"],s.customClassNames.label])},[g(e.$slots,"default")],10,D)}const K=z(P,[["render",F]]);export{J as B,K as a};
