import{_,Y as p,c as t,p as y,j as N,g as n,d as m,e as c,n as r,k as u,i as C}from"./index-1eea696b.js";const S={"slide-scroll":"_slide-scroll_1045s_1","slide-scroll__frame":"_slide-scroll__frame_1045s_8","slide-scroll__scroller":"_slide-scroll__scroller_1045s_16","slide-scroll__inner":"_slide-scroll__inner_1045s_20","slide-scroll__list":"_slide-scroll__list_1045s_25","slide-scroll__item":"_slide-scroll__item_1045s_41","slide-scroll--hide-scrollbar":"_slide-scroll--hide-scrollbar_1045s_54","slide-scroll--pc":"_slide-scroll--pc_1045s_61"},i=()=>({wrap:"",frame:"",scroller:"",inner:"",list:""}),b={props:{classNames:{Type:Object,default(){return i()}},hideScrollbar:{Type:Boolean,default:!0}},setup(s){const o={ui:{common:p()}},e=t(()=>{const{classNames:a}=s;return Object.assign(i(),a)}),l=t(()=>o.ui.common.scrollbarsWidth);return y("slideScrollStyleModule",N()),{customClassNames:e,scrollbarsWidth:l}}};function $(s,o,e,l,a,f){return n(),m("div",{class:r([s.$style["slide-scroll"],{[s.$style["slide-scroll--hide-scrollbar"]]:e.hideScrollbar,[s.$style["slide-scroll--pc"]]:l.scrollbarsWidth>0},l.customClassNames.wrap])},[c("div",{class:r([s.$style["slide-scroll__frame"],l.customClassNames.frame])},[c("div",{class:r([s.$style["slide-scroll__scroller"],l.customClassNames.scroller])},[c("div",{class:r([s.$style["slide-scroll__inner"],l.customClassNames.inner])},[c("ul",{class:r([s.$style["slide-scroll__list"],l.customClassNames.list])},[u(s.$slots,"default")],2)],2)],2)],2)],2)}const h={$style:S},B=_(b,[["render",$],["__cssModules",h]]),d=()=>({item:""}),M={props:{classNames:{Type:Object,default(){return d()}}},setup(s){const o=C("slideScrollStyleModule"),e=t(()=>{const{classNames:l}=s;return Object.assign(d(),l)});return{styleModule:o,customClassNames:e}}};function j(s,o,e,l,a,f){return n(),m("li",{class:r([l.styleModule["slide-scroll__item"],l.customClassNames.item])},[u(s.$slots,"default")],2)}const O=_(M,[["render",j]]);export{B as S,O as a};
