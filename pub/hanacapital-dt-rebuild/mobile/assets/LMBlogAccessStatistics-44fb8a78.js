import{_ as p,D as B,Z as f,o as b,b as h,Q as s,q as g,s as l,g as a,V as o,e as t,d as x,f as k,t as F,F as I,n as L}from"./index-a5325df6.js";import{P as C}from"./PageContents-1d774df1.js";import{F as S}from"./FormList-8cb1720b.js";import{F as v}from"./FormListItem-932d9e3d.js";import{B as y}from"./BasicSelect-2f795a7f.js";import{I as w,a as $}from"./InputBlockCell-41030cd4.js";import"./SelectButton-b9641595.js";import"./dropdown-c1f0bf3b.js";import"./PopupTitle-35626e75.js";import"./ToastPopup-ca8b87e3.js";import"./ToastPopupHead-38452148.js";import"./check-l-fdcdc0aa.js";const T={"basic-table":"_basic-table_1uwx8_1","basic-table__left-line":"_basic-table__left-line_1uwx8_74","basic-table__padding-none":"_basic-table__padding-none_1uwx8_77"},A={components:{PageContents:C,FormList:S,FormListItem:v,BasicSelect:y,InputBlock:w,InputBlockCell:$,BasicHr:B},setup(){const e={ui:{header:f()}};b(()=>{e.ui.header.setTitle(()=>"접속통계"),e.ui.header.setLeftButtons(()=>["back"]),e.ui.header.setRightButtons(()=>[])}),h(()=>{e.ui.header.setTitle(),e.ui.header.setLeftButtons(),e.ui.header.setRightButtons()})}},H=t("colgroup",null,[t("col",{style:{width:"120px"}}),t("col")],-1),M=t("thead",null,[t("tr",null,[t("th",null,"월"),t("th",null,"방문자")])],-1),P=t("td",null,"11",-1),V=t("tfoot",null,[t("tr",null,[t("td",null,"합계"),t("td",null,"1")])],-1);function N(e,D,R,U,q,z){const c=s("BasicSelect"),i=s("InputBlockCell"),r=s("InputBlock"),u=s("FormListItem"),_=s("FormList"),m=s("BasicHr"),d=s("PageContents");return a(),g(d,null,{default:l(()=>[o(_,null,{default:l(()=>[o(u,{titleText:"통계년도",target:"#lmBlogAccessStatisticsYearButton",forceFocus:"true"},{default:l(()=>[o(r,null,{default:l(()=>[o(i,{flexible:!0},{default:l(()=>[o(c,{option:[{value:"1",text:"2022"},{value:"2",text:"2021"},{value:"3",text:"2020"},{value:"4",text:"2019"},{value:"5",text:"2018"},{value:"6",text:"2017"}],buttonTitle:"통계년도 선택하기",layerTitle:"통계년도를 선택해 주세요",id:"lmBlogAccessStatisticsYear",buttonId:"lmBlogAccessStatisticsYearButton",defaultValue:"1"})]),_:1})]),_:1})]),_:1})]),_:1}),o(m,{className:"row-margin-container-medium"}),t("div",{class:L(e.$style["basic-table"])},[t("table",null,[H,M,t("tbody",null,[(a(),x(I,null,k(12,n=>t("tr",{key:n},[t("td",null,F(n),1),P])),64))]),V])],2)]),_:1})}const Y={$style:T},st=p(A,[["render",N],["__cssModules",Y]]);export{st as default};
