import{_ as i,c as n,p as m,j as h,g as _,d as r,e as d,k as u,n as c,i as x}from"./index-3e417f16.js";const f={"box-check-list":"_box-check-list_93twn_1","box-check-list__list":"_box-check-list__list_93twn_4","box-check-list__item":"_box-check-list__item_93twn_11","box-check-list--align-full":"_box-check-list--align-full_93twn_21","box-check-list--wrap":"_box-check-list--wrap_93twn_31","box-check-list--spacing-small":"_box-check-list--spacing-small_93twn_47","box-check-list--col-3":"_box-check-list--col-3_93twn_63","box-check-list--col-4":"_box-check-list--col-4_93twn_66","box-check-list--col-6":"_box-check-list--col-6_93twn_69"},a=()=>({wrap:"",list:"",align:""}),p={props:{classNames:{Type:Object,default(){return a()}},align:{Type:String,default:null},wrap:{Type:Boolean,default:!1},spacing:{Type:String,default:null},col:{Type:Number,default:2}},setup(s){const t=n(()=>{const{classNames:e}=s;return Object.assign(a(),e)});return m("boxCheckListStyleModule",h()),{customClassNames:t}}};function g(s,t,e,l,b,k){return _(),r("div",{class:c([s.$style["box-check-list"],{[s.$style[`box-check-list--align-${e.align}`]]:e.align,[s.$style["box-check-list--wrap"]]:e.wrap,[s.$style[`box-check-list--col-${e.col}`]]:e.wrap&&e.col>2,[s.$style[`box-check-list--spacing-${e.spacing}`]]:e.spacing},l.customClassNames.wrap])},[d("ul",{class:c([s.$style["box-check-list__list"],l.customClassNames.list])},[u(s.$slots,"default")],2)],2)}const y={$style:f},$=i(p,[["render",g],["__cssModules",y]]),o=()=>({item:""}),w={props:{classNames:{Type:Object,default(){return o()}}},setup(s){const t=x("boxCheckListStyleModule"),e=n(()=>{const{classNames:l}=s;return Object.assign(o(),l)});return{styleModule:t,customClassNames:e}}};function C(s,t,e,l,b,k){return _(),r("li",{class:c([l.styleModule["box-check-list__item"],l.customClassNames.item])},[u(s.$slots,"default")],2)}const B=i(w,[["render",C]]);export{$ as B,B as a};
