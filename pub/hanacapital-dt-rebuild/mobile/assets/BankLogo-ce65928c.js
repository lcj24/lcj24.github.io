import{_ as i,c as m,g as o,d as t,n,h as _}from"./index-a5325df6.js";const g={"bank-logo":"_bank-logo_d1h2i_1","bank-logo__img":"_bank-logo__img_d1h2i_11","bank-logo--size-small":"_bank-logo--size-small_d1h2i_19"},r="/pub/hanacapital-dt-rebuild/mobile/",c=()=>({wrap:"",img:""}),d={props:{classNames:{Type:Object,default(){return c()}},type:{Type:String,default:"bank"},size:{Type:String,default:null},code:{Type:String,default:null},name:{Type:String,default:null}},setup(e){const l=m(()=>{const{classNames:s}=e;return Object.assign(c(),s)});return{BASE_URL:r,customClassNames:l}}},u=["src","alt"];function b(e,l,s,a,y,f){return o(),t("span",{class:n([e.$style["bank-logo"],{[e.$style[`bank-logo--size-${s.size}`]]:s.size},a.customClassNames.wrap])},[s.code?(o(),t("img",{key:0,src:`${a.BASE_URL}images/${s.type}-logo/${s.code}.svg`,alt:s.name,class:n([e.$style["bank-logo__img"],a.customClassNames.img])},null,10,u)):_("",!0)],2)}const k={$style:g},h=i(d,[["render",b],["__cssModules",k]]);export{h as B};
