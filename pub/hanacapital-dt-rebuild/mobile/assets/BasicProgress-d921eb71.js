import{_ as i,c,g,d as u,e as n,n as t,x as b}from"./index-1eea696b.js";const p="_progress_1pl6h_1",m="_progress__bar_1pl6h_5",d={progress:p,progress__bar:m,"progress__bar-active":"_progress__bar-active_1pl6h_12","progress--color-blue":"_progress--color-blue_1pl6h_19","progress--color-navy":"_progress--color-navy_1pl6h_22","progress--bgcolor-white":"_progress--bgcolor-white_1pl6h_25"},_=()=>({wrap:"",current:"",total:"",bar:"",barActive:""}),y={inheritAttrs:!1,props:{classNames:{Type:Object,default(){return _()}},total:{Type:Number,default:1},current:{Type:Number,default:1},color:{Type:String,default:null},bgColor:{Type:String,default:null}},setup(r){const a=c(()=>{const{classNames:s}=r;return Object.assign(_(),s)}),e=c(()=>{const{total:s,current:o}=r,l=100/s*o;return o===s?100:Number(l.toFixed(8))});return{customClassNames:a,activeWidth:e}}},h=["aria-label"];function f(r,a,e,s,o,l){return g(),u("div",{class:t([r.$style.progress,{[r.$style[`progress--color-${e.color}`]]:e.color,[r.$style[`progress--bgcolor-${e.bgColor}`]]:e.bgColor},s.customClassNames.wrap]),role:"img","aria-label":`총 ${e.total}단계 중 ${e.current}단계`},[n("div",{class:t([r.$style.progress__bar,s.customClassNames.bar])},[n("div",{class:t([r.$style["progress__bar-active"],s.customClassNames.barActive]),style:b(`width: ${s.activeWidth}%;`)},null,6)],2)],10,h)}const v={$style:d},C=i(y,[["render",f],["__cssModules",v]]);export{C as B};
