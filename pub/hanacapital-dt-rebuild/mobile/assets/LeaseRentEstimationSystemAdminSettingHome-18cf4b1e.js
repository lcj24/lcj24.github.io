import{_ as w,Z as k,l as C,o as S,b as p,Q as c,q as g,s as a,g as f,e,V as i,W as r,n as s}from"./index-1eea696b.js";import{P as B}from"./PageContents-1b537628.js";import{B as b,a as v}from"./BoxCheckLabel-d85a39b7.js";import{B as $,a as N}from"./BoxCheckListItem-51dbcbb0.js";import{S as R}from"./SwitchCheckBox-a9df0942.js";const H={"switch-list__title":"_switch-list__title_10ait_1","switch-list":"_switch-list_10ait_1","switch-list__item":"_switch-list__item_10ait_10","switch-list__right":"_switch-list__right_10ait_55","switch-list__check":"_switch-list__check_10ait_62","switch-list__tip":"_switch-list__tip_10ait_66"},A={components:{PageContents:B,BoxCheckList:$,BoxCheckListItem:N,BoxCheck:b,BoxCheckLabel:v,SwitchCheckBox:R},setup(){const t={ui:{header:k()}},n=C({typeCheck:[!0,!1,!1]});return S(()=>{t.ui.header.setTitle(()=>"홈 설정"),t.ui.header.setLeftButtons(()=>["back"]),t.ui.header.setRightButtons(()=>[])}),p(()=>{t.ui.header.setTitle(),t.ui.header.setLeftButtons(),t.ui.header.setRightButtons()}),{state:n}}},E={class:"row-margin-container-medium"},V=e("h3",{class:"text-title-2 row-margin-contents"},"홈 기본 화면",-1),L={class:"row-margin-container-medium"},x=e("div",{class:"flex-box row-margin-contents"},[e("div",{class:"flex-box__cell"},[e("h3",{class:"text-title-2"},"하단 메뉴 설정")]),e("div",{class:"flex-box__cell flex-box__cell--small"},[e("div",{class:"text-body-3"},"(1개 이상 필수)")])],-1);function U(t,n,I,l,M,T){const d=c("BoxCheckLabel"),_=c("BoxCheck"),h=c("BoxCheckListItem"),y=c("BoxCheckList"),o=c("SwitchCheckBox"),u=c("PageContents");return f(),g(u,null,{default:a(()=>[e("div",null,[e("section",E,[V,i(y,null,{default:a(()=>[i(h,null,{default:a(()=>[i(_,{minSide:!0,name:"leaseRentEstimationSystemAdminSettingHomeCheck",id:"leaseRentEstimationSystemAdminSettingHomeCheck001",modelValue:l.state.typeCheck[0],"onUpdate:modelValue":n[0]||(n[0]=m=>l.state.typeCheck[0]=m)},{default:a(()=>[i(d,null,{default:a(()=>[r("하나원큐오토")]),_:1})]),_:1},8,["modelValue"])]),_:1}),i(h,null,{default:a(()=>[i(_,{minSide:!0,name:"leaseRentEstimationSystemAdminSettingHomeCheck",id:"leaseRentEstimationSystemAdminSettingHomeCheck002",modelValue:l.state.typeCheck[1],"onUpdate:modelValue":n[1]||(n[1]=m=>l.state.typeCheck[1]=m)},{default:a(()=>[i(d,null,{default:a(()=>[r("국산차 할부")]),_:1})]),_:1},8,["modelValue"])]),_:1}),i(h,null,{default:a(()=>[i(_,{minSide:!0,name:"leaseRentEstimationSystemAdminSettingHomeCheck",id:"leaseRentEstimationSystemAdminSettingHomeCheck003",modelValue:l.state.typeCheck[2],"onUpdate:modelValue":n[2]||(n[2]=m=>l.state.typeCheck[2]=m)},{default:a(()=>[i(d,null,{default:a(()=>[r("중고 할부")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),e("section",L,[x,e("ul",{class:s(t.$style["switch-list"])},[e("li",{class:s(t.$style["switch-list__item"])},[e("div",{class:s(t.$style["switch-list__title"])},"렌트",2),e("div",{class:s(t.$style["switch-list__right"])},[i(o,{id:"leaseRentEstimationSystemAdminSettingHome001",classNames:{wrap:t.$style["switch-list__check"]},disabled:!l.state.typeCheck[0]},null,8,["classNames","disabled"])],2)],2),e("li",{class:s(t.$style["switch-list__item"])},[e("div",{class:s(t.$style["switch-list__title"])},"신차 리스",2),e("div",{class:s(t.$style["switch-list__right"])},[i(o,{id:"leaseRentEstimationSystemAdminSettingHome002",classNames:{wrap:t.$style["switch-list__check"]},disabled:!l.state.typeCheck[0]},null,8,["classNames","disabled"])],2)],2),e("li",{class:s(t.$style["switch-list__item"])},[e("div",{class:s(t.$style["switch-list__title"])},"중고 리스",2),e("div",{class:s(t.$style["switch-list__right"])},[i(o,{id:"leaseRentEstimationSystemAdminSettingHome003",classNames:{wrap:t.$style["switch-list__check"]},disabled:!l.state.typeCheck[0]},null,8,["classNames","disabled"])],2)],2),e("li",{class:s(t.$style["switch-list__item"])},[e("div",{class:s(t.$style["switch-list__title"])},"국산 할부",2),e("div",{class:s(t.$style["switch-list__right"])},[i(o,{id:"leaseRentEstimationSystemAdminSettingHome004",classNames:{wrap:t.$style["switch-list__check"]},disabled:!l.state.typeCheck[0]},null,8,["classNames","disabled"])],2)],2),e("li",{class:s(t.$style["switch-list__item"])},[e("div",{class:s(t.$style["switch-list__title"])},"수입 할부",2),e("div",{class:s(t.$style["switch-list__right"])},[i(o,{id:"leaseRentEstimationSystemAdminSettingHome005",classNames:{wrap:t.$style["switch-list__check"]},disabled:!l.state.typeCheck[0]},null,8,["classNames","disabled"])],2)],2),e("li",{class:s(t.$style["switch-list__item"])},[e("div",{class:s(t.$style["switch-list__title"])},"중고 할부",2),e("div",{class:s(t.$style["switch-list__right"])},[i(o,{id:"leaseRentEstimationSystemAdminSettingHome006",classNames:{wrap:t.$style["switch-list__check"]},disabled:!l.state.typeCheck[0]},null,8,["classNames","disabled"])],2)],2)],2)])])]),_:1})}const P={$style:H},j=w(A,[["render",U],["__cssModules",P]]);export{j as default};
