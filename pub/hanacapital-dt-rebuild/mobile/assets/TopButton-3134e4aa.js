import{g as l,d as c,y as d,_ as f,c as u,o as _,b as m,Q as h,e as y,V as b,n as g,m as B}from"./index-1eea696b.js";const w={xmlns:"http://www.w3.org/2000/svg",width:"52",height:"52",fill:"none",viewBox:"0 0 52 52"},x=d('<g filter="url(#filter0_d_7764_284698)"><circle cx="26" cy="24" r="18" fill="#fff" fill-opacity=".6" shape-rendering="crispEdges"></circle></g><path fill="#15181F" d="M19.578 22.922a.833.833 0 0 0 1.179 0L26 17.678l5.244 5.244a.833.833 0 1 0 1.178-1.178L26.59 15.91a.833.833 0 0 0-1.179 0l-5.833 5.833a.833.833 0 0 0 0 1.178Z"></path><path fill="#15181F" d="M25.166 17.333a.833.833 0 0 1 1.667 0V31.5a.833.833 0 0 1-1.667 0V17.333Z"></path><defs><filter id="filter0_d_7764_284698" width="52" height="52" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="4"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0.560784 0 0 0 0 0.560784 0 0 0 0 0.560784 0 0 0 0.36 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_7764_284698"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_7764_284698" result="shape"></feBlend></filter></defs>',4),T=[x];function C(o,s){return l(),c("svg",w,T)}const v={render:C},M="_button_1pwsg_1",N="_button__icon_1pwsg_43",S="_button__text_1pwsg_49",F={button:M,button__icon:N,button__text:S},a=()=>({wrap:"",text:"",icon:""}),V={inheritAttrs:!1,components:{BtnTop:v},props:{type:{Type:String,default:"button"},classNames:{Type:Object,default(){return a()}}},setup(o){const s=u(()=>{const{classNames:e}=o;return Object.assign(a(),e)}),n=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},t=()=>{const e=document.querySelector(".button_top"),r=document.documentElement.scrollTop;e&&(r>20?(e.style.opacity="1",e.style.transition="0.3s"):(e.style.opacity="0",e.style.transition="0.3s"))};return _(()=>{document.addEventListener("scroll",t,!0)}),m(()=>{document.removeEventListener("scroll",t,!1)}),{customClassNames:s,onScroll:t,toTop:n}}},k=["type"];function E(o,s,n,t,e,r){const i=h("BtnTop");return l(),c("button",B(o.$attrs,{type:n.type,class:[[o.$style.button,t.customClassNames.wrap],"button_top"],onClick:s[0]||(s[0]=(...p)=>t.toTop&&t.toTop(...p))}),[y("span",{class:g([o.$style.button__icon,t.customClassNames.icon])},[b(i)],2)],16,k)}const O={$style:F},G=f(V,[["render",E],["__cssModules",O]]);export{G as T};
