import{g as l,d as s,e as _,_ as m,c as v,Q as p,q as u,n,F as y,f as d,x as g}from"./index-3e417f16.js";const Z={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},f=_("path",{fill:"#666",d:"M10.752 3.183v4.592h-.836V3.183h.835Zm-1.938 4.29A2.897 2.897 0 0 1 7.03 5.858a3.061 3.061 0 0 1-1.816 1.758l-.438-.682c1.16-.404 1.816-1.396 1.816-2.414v-.143H5.003V3.68h4.005v.698H7.444v.143c0 .976.664 1.901 1.791 2.28l-.421.673Zm-3 .681h4.938v2.633h-.836V8.852H5.814v-.698ZM19.224 3.191v4.147h-.844V5.681h-1.289v-.715h1.29V3.19h.843Zm-2.125 4.113a2.955 2.955 0 0 1-1.71-1.632c-.325.816-.933 1.481-1.808 1.792l-.43-.681c1.135-.404 1.8-1.413 1.8-2.431v-.05h-1.549v-.707h3.916V4.3h-1.524v.042c0 .951.616 1.876 1.719 2.28l-.414.681Zm1.29.37h.835v3.02h-4.76v-3.02h.827V8.5h3.097v-.825Zm0 1.506H15.29v.816h3.097V9.18ZM10.752 13.205v4.08h-.836v-4.08h.835Zm-3.949.345c1.119 0 1.938.723 1.938 1.766 0 1.043-.82 1.767-1.938 1.767-1.127 0-1.946-.724-1.946-1.767s.82-1.766 1.946-1.766Zm0 .715c-.681 0-1.127.412-1.127 1.051 0 .64.446 1.052 1.127 1.052.657 0 1.127-.412 1.127-1.052 0-.639-.47-1.051-1.127-1.051Zm-.008 3.373v.841h3.13v-.841h.826v3.07H5.968v-3.07h.827Zm0 2.372h3.13v-.858h-3.13v.858ZM19.224 13.205v4.677h-.836v-1.296h-1.313v-.698h1.313v-.891h-1.313v-.698h1.313v-1.094h.835Zm-2.173 4.214c-.868.16-1.646.185-3.065.185h-.535V15.25h2.335v-.908h-2.351v-.699h3.178v2.272H14.27v.984c1.232 0 1.897-.042 2.691-.177l.09.698Zm-2.781.841h4.954v2.558h-.836v-1.851H14.27v-.707Z"},null,-1),C=[f];function N(c,t){return l(),s("svg",Z,C)}const V={render:N},q={"color-chip":"_color-chip_1x7qn_1","color-chip__inner":"_color-chip__inner_1x7qn_11","color-chip__cell":"_color-chip__cell_1x7qn_34","color-chip--length-3":"_color-chip--length-3_1x7qn_39","color-chip--length-4":"_color-chip--length-4_1x7qn_45","color-chip--size-small":"_color-chip--size-small_1x7qn_48","color-chip__icon":"_color-chip__icon_1x7qn_53"},h=()=>({wrap:"",inner:"",cell:"",icon:""}),w={components:{IconInput:V},props:{classNames:{Type:Object,default(){return h()}},size:{Type:String,default:null},colors:{Type:Array,default:[]},type:{Type:String,default:null}},setup(c){return{customClassNames:v(()=>{const{classNames:e}=c;return Object.assign(h(),e)})}}};function z(c,t,e,o,x,H){const r=p("IconInput");return l(),s("span",{class:n([c.$style["color-chip"],{[c.$style[`color-chip--length-${e.colors.length}`]]:c.$style[`color-chip--length-${e.colors.length}`],[c.$style[`color-chip--size-${e.size}`]]:e.size,[c.$style[`color-chip--type-${e.type}`]]:e.type},o.customClassNames.wrap])},[e.type==="text"?(l(),u(r,{key:0,class:n([c.$style["color-chip__icon"],o.customClassNames.icon])},null,8,["class"])):(l(),s("span",{key:1,class:n([c.$style["color-chip__inner"],o.customClassNames.inner])},[(l(!0),s(y,null,d(e.colors,(a,i)=>(l(),s("span",{key:i,class:n([c.$style["color-chip__cell"],o.customClassNames.cell]),style:g(`background: rgb(${a});`)},null,6))),128))],2))],2)}const k={$style:q},M=m(w,[["render",z],["__cssModules",k]]);export{M as C};
