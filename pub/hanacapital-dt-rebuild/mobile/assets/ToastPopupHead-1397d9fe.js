import{_ as h,i as m,l as f,c,a5 as g,a as _,g as l,d as i,e as N,k as d,n as o,h as y}from"./index-1eea696b.js";const p=()=>({wrap:"",center:"",right:""}),C=s=>{if(!s||typeof s!="function")return!1;const t=s();let a=0;return t.forEach(e=>e.children==="v-if"&&a++),t.length!==a},v={props:{classNames:{Type:Object,default(){return p()}}},setup(s,{slots:t}){const a=m("popupStyleModule"),e=f({slots:{}}),r=c(()=>{const{classNames:u}=s;return Object.assign(p(),u)}),n=c(()=>C(e.slots.right));return g(()=>{e.slots.right=t.right}),_(()=>{e.slots.right=t.right}),{styleModule:a,customClassNames:r,isRight:n}}};function M(s,t,a,e,r,n){return l(),i("div",{class:o([e.styleModule.popup__header,e.customClassNames.wrap])},[N("div",{class:o([e.styleModule["popup__header-center"],e.customClassNames.center])},[d(s.$slots,"default")],2),e.isRight?(l(),i("div",{key:0,class:o([e.styleModule["popup__header-right"],e.customClassNames.right])},[d(s.$slots,"right")],2)):y("",!0)],2)}const B=h(v,[["render",M]]);export{B as T};
