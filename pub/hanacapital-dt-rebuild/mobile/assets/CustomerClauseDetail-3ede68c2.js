import{_ as m,D as b,Z as p,o as h,b as f,Q as e,q as B,s as o,g as C,V as a,e as s,n as _}from"./index-1eea696b.js";import{P as w}from"./PageContents-1b537628.js";import{F as I}from"./FormList-7e035edb.js";import{F as g}from"./FormListItem-a3eadc20.js";import{I as y,a as k}from"./InputBlockCell-0eb6abde.js";import{B as $}from"./BasicSelect-7b7d7940.js";import"./SelectButton-6ec40963.js";import"./dropdown-3c50f619.js";import"./PopupTitle-8d75e052.js";import"./ToastPopup-1dea88cd.js";import"./ToastPopupHead-1397d9fe.js";import"./check-l-f55769c9.js";const D={"board-detail":"_board-detail_13whi_1","board-detail__head":"_board-detail__head_13whi_7","board-detail__head--noline":"_board-detail__head--noline_13whi_13","board-detail__category":"_board-detail__category_13whi_17","board-detail__title":"_board-detail__title_13whi_25","board-detail__text":"_board-detail__text_13whi_35","board-detail__sub":"_board-detail__sub_13whi_44","board-detail__sub-list":"_board-detail__sub-list_13whi_53","board-detail__sub-item":"_board-detail__sub-item_13whi_57","board-detail__contents":"_board-detail__contents_13whi_73","board-detail__foot":"_board-detail__foot_13whi_80"},F={components:{PageContents:w,BasicHr:b,FormList:I,FormListItem:g,InputBlock:y,InputBlockCell:k,BasicSelect:$},setup(){const t={ui:{header:p()}};h(()=>{t.ui.header.setTitle(()=>"정책 및 약관"),t.ui.header.setLeftButtons(()=>["back"]),t.ui.header.setRightButtons(()=>[])}),f(()=>{t.ui.header.setTitle(),t.ui.header.setLeftButtons(),t.ui.header.setRightButtons()})}};function L(t,v,T,H,P,S){const i=e("BasicSelect"),l=e("InputBlockCell"),r=e("InputBlock"),d=e("FormListItem"),n=e("FormList"),c=e("BasicHr"),u=e("PageContents");return C(),B(u,null,{default:o(()=>[a(n,null,{default:o(()=>[a(d,{titleText:"시행일 이력",target:"#customerClauseDetailDateButton",selectOnly:!0},{default:o(()=>[a(r,null,{default:o(()=>[a(l,{flexible:!0},{default:o(()=>[a(i,{option:[{value:"1",text:"2022.10.25"},{value:"2",text:"2022.04.17"},{value:"3",text:"2022.01.10"}],buttonTitle:"시행일을 선택해 주세요",layerTitle:"시행일을 선택해 주세요",id:"customerClauseDetailDate",buttonId:"customerClauseDetailDateButton",defaultValue:"1"})]),_:1})]),_:1})]),_:1})]),_:1}),a(c,{className:"row-margin-container-medium"}),s("div",{class:_(t.$style["board-detail"])},[s("div",{class:_(t.$style["board-detail__head"])},[s("h2",{class:_(t.$style["board-detail__title"])}," 정책 및 약관 제목 노출 (글자수 제한 없음) ",2)],2),s("section",{class:_(t.$style["board-detail__contents"])}," 정책 및 약관 내용 노출(글자수 제한 없음) ",2)],2)]),_:1})}const x={$style:D},E=m(F,[["render",L],["__cssModules",x]]);export{E as default};
