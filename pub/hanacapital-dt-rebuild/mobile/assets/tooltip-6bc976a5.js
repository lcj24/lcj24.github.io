import{_ as M,l as x,r as p,c as z,o as K,a0 as S,g as k,d as C,e as c,k as v,n as b,x as y,$ as u}from"./index-a5325df6.js";const W="_tooltip_12v5q_1",Z="_tooltip__button_12v5q_5",j="_tooltip__bubble_12v5q_9",I="_tooltip__tail_12v5q_21",O={tooltip:W,tooltip__button:Z,tooltip__bubble:j,tooltip__tail:I,"tooltip--bottom":"_tooltip--bottom_12v5q_30","tooltip--fit":"_tooltip--fit_12v5q_38"},w=()=>({wrap:"",button:"",bubble:"",tail:""}),H={props:{classNames:{Type:Object,default(){return w()}},placement:{Type:String,default:"top"},fit:{Type:Boolean,default:!1}},setup(e){const t=x({show:!1,top:0,tailLeft:0,isBubbleClick:!1,isButtonClick:!1}),i=p(null),o=p(null),f=z(()=>{const{classNames:n}=e;return Object.assign(w(),n)}),s=()=>{if(!t.show)return;const{placement:n}=e,a=i.value,N=o.value,L=a.offsetWidth,T=N.offsetWidth,q=(()=>{const r=a.offsetLeft-20+L/2,m=T-22;return r<22?22:r>m?m:r})();n==="bottom"?t.top=0:t.top=a.offsetHeight+12,t.tailLeft=q},l=()=>{t.show=!t.show,u(()=>{s()})},h=()=>{t.show=!0,u(()=>{s()})},d=()=>{t.show=!1,u(()=>{s()})},_=()=>{!t.isBubbleClick&&!t.isButtonClick&&d(),t.isBubbleClick=!1,t.isButtonClick=!1},B=()=>{t.isBubbleClick=!0},g=()=>{l(),t.isButtonClick=!0},E=n=>{const{keyCode:a}=n;switch(a){case 13:case 32:l();break}};return K(()=>{const n=document.getElementsByTagName("body")[0];s(),n.addEventListener("click",_),window.addEventListener("resize",s),window.addEventListener("orientationchange",s)}),S(()=>{document.getElementsByTagName("body")[0].removeEventListener("click",_),window.removeEventListener("resize",s),window.removeEventListener("orientationchange",s)}),{state:t,button:i,bubble:o,customClassNames:f,toggle:l,open:h,close:d,onClick:g,onKeyup:E,bubbleClick:B}}};function P(e,t,i,o,f,s){return k(),C("div",{class:b([e.$style.tooltip,{[e.$style["tooltip--bottom"]]:i.placement==="bottom",[e.$style["tooltip--fit"]]:i.fit,"is-show":o.state.show},o.customClassNames.wrap])},[c("div",{ref:"button",class:b([e.$style.tooltip__button,o.customClassNames.button]),tabindex:"0",role:"button",onClick:t[0]||(t[0]=(...l)=>o.onClick&&o.onClick(...l)),onKeyup:t[1]||(t[1]=(...l)=>o.onKeyup&&o.onKeyup(...l))},[v(e.$slots,"default")],34),c("div",{ref:"bubble",class:b([e.$style.tooltip__bubble,o.customClassNames.bubble]),style:y(`margin-top: -${o.state.top}px;`),onClick:t[2]||(t[2]=(...l)=>o.bubbleClick&&o.bubbleClick(...l))},[c("div",{class:b([e.$style.tooltip__tail,o.customClassNames.tail]),style:y(`left: ${o.state.tailLeft}px;`)},null,6),v(e.$slots,"contents")],6)],2)}const U={$style:O},J=M(H,[["render",P],["__cssModules",U]]),V={xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"none",viewBox:"0 0 22 22"},$=c("path",{fill:"#9E9E9E",d:"M20.165 11a9.167 9.167 0 1 1-18.333 0 9.167 9.167 0 0 1 18.333 0Z"},null,-1),A=c("path",{fill:"#fff",d:"M10.902 5.5c.513 0 .974.067 1.383.2.408.123.755.304 1.04.541.286.229.504.504.657.828.152.323.228.68.228 1.069v.157c0 .228-.029.447-.086.656-.048.2-.138.404-.27.613-.124.209-.3.432-.528.67-.22.238-.495.509-.828.813-.209.19-.375.356-.498.499a1.902 1.902 0 0 0-.286.385c-.066.114-.11.233-.128.356a2.459 2.459 0 0 0-.029.4c0 .218-.085.39-.256.513a.912.912 0 0 1-.57.185 1.08 1.08 0 0 1-.614-.17c-.17-.124-.256-.314-.256-.571 0-.247.014-.47.042-.67.029-.2.081-.39.157-.57.086-.19.205-.376.357-.557.161-.19.37-.399.627-.627.295-.257.528-.47.699-.642.18-.18.318-.342.413-.485.095-.142.157-.27.186-.385.028-.123.042-.256.042-.399v-.071c0-.152-.028-.295-.085-.428a.964.964 0 0 0-.271-.356 1.156 1.156 0 0 0-.47-.243c-.19-.066-.428-.1-.713-.1-.38 0-.713.057-.999.171a3.972 3.972 0 0 0-.812.442c-.19.134-.38.181-.57.143a.856.856 0 0 1-.471-.342.907.907 0 0 1-.2-.57c.01-.22.11-.4.3-.542a4.244 4.244 0 0 1 1.211-.656c.466-.171.999-.257 1.598-.257Zm-.186 8.84c.304 0 .561.105.77.314.21.21.314.466.314.77 0 .305-.105.561-.314.77-.209.21-.466.314-.77.314s-.56-.104-.77-.314a1.047 1.047 0 0 1-.314-.77c0-.304.105-.56.314-.77.21-.209.466-.313.77-.313Z"},null,-1),D=[$,A];function F(e,t){return k(),C("svg",V,D)}const Q={render:F};export{J as B,Q as I};
