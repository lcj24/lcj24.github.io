import{_ as h,l as m,c as _,a5 as j,a as T,p as N,j as C,g as a,d as u,n as t,k as r,h as l,e as v}from"./index-3e417f16.js";const k="_popup_b8j0o_1",g="_popup__head_b8j0o_19",B="_popup__body_b8j0o_22",M="_popup__foot_b8j0o_37",S="_popup__header_b8j0o_41",$="_popup__title_b8j0o_56",O="_popup__text_b8j0o_74",I={popup:k,"popup__outer-top":"_popup__outer-top_b8j0o_10",popup__head:g,popup__body:B,"popup__body-inner":"_popup__body-inner_b8j0o_29",popup__foot:M,popup__header:S,"popup__header-right":"_popup__header-right_b8j0o_46","popup__header-center":"_popup__header-center_b8j0o_52",popup__title:$,"popup__sub-title":"_popup__sub-title_b8j0o_63",popup__text:O,"popup--fix":"_popup--fix_b8j0o_84"},i=()=>({wrap:"",outerTop:"",head:"",body:"",bodyInner:"",foot:""}),n=o=>{if(!o||typeof o!="function")return!1;const s=o();let e=0;return s.forEach(p=>p.children==="v-if"&&e++),s.length!==e},w={props:{classNames:{Type:Object,default(){return i()}},fix:{Type:Boolean,default:!1}},setup(o,{slots:s}){const e=m({slots:{}}),p=_(()=>{const{classNames:y}=o;return Object.assign(i(),y)}),d=_(()=>n(e.slots.default)),c=_(()=>n(e.slots.outerTop)),f=_(()=>n(e.slots.head)),b=_(()=>n(e.slots.foot));return j(()=>{e.slots.default=s.default,e.slots.outerTop=s.outerTop,e.slots.head=s.head,e.slots.foot=s.foot}),T(()=>{e.slots.default=s.default,e.slots.outerTop=s.outerTop,e.slots.head=s.head,e.slots.foot=s.foot}),N("popupStyleModule",C()),{customClassNames:p,isSlotDefault:d,isOuterTop:c,isHead:f,isFoot:b}}};function D(o,s,e,p,d,c){return a(),u("div",{class:t([o.$style.popup,{[o.$style["popup--fix"]]:e.fix},p.customClassNames.wrap])},[p.isOuterTop?(a(),u("div",{key:0,class:t([o.$style["popup__outer-top"],p.customClassNames.outerTop])},[r(o.$slots,"outerTop")],2)):l("",!0),p.isHead?(a(),u("div",{key:1,class:t([o.$style.popup__head,p.customClassNames.head])},[r(o.$slots,"head")],2)):l("",!0),p.isSlotDefault?(a(),u("div",{key:2,class:t([o.$style.popup__body,p.customClassNames.body])},[v("div",{class:t([o.$style["popup__body-inner"],p.customClassNames.bodyInner])},[r(o.$slots,"default")],2)],2)):l("",!0),p.isFoot?(a(),u("div",{key:3,class:t([o.$style.popup__foot,p.customClassNames.foot])},[r(o.$slots,"foot")],2)):l("",!0)],2)}const E={$style:I},H=h(w,[["render",D],["__cssModules",E]]);export{H as T};
