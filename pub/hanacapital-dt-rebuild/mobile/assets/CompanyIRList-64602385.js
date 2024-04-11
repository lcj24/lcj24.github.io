import{_ as f,C as y,D as k,S as I,T as x,R as g,Z as $,o as C,b as w,Q as o,q as R,s,g as n,V as e,e as _,n as a,d as T,f as S,F as v,W as L}from"./index-3e417f16.js";import{P as N}from"./PageContents-b733594c.js";import{B as V}from"./BasicSelect-210074ee.js";import{I as H,a as P}from"./InputBlockCell-8567feff.js";import{I as A}from"./dropdown-fe611f3a.js";import"./SelectButton-cc8a5979.js";import"./PopupTitle-c0b14b65.js";import"./ToastPopup-0e2b6b05.js";import"./ToastPopupHead-fa5f91b5.js";import"./check-l-25e78d5f.js";const M="_empty_rihc7_1",F="_empty__text_rihc7_6",U="_board_rihc7_14",q="_board__list_rihc7_17",z="_board__item_rihc7_22",D="_board__link_rihc7_33",E="_board__title_rihc7_25",Q="_board__text_rihc7_67",W="_board__sub_rihc7_83",Z="_board__info_rihc7_30",j={empty:M,empty__text:F,board:U,board__list:q,board__item:z,"board__item--mark":"_board__item--mark_rihc7_25","board__title-text":"_board__title-text_rihc7_25","board__item--hidden":"_board__item--hidden_rihc7_29","board__info-item":"_board__info-item_rihc7_30",board__link:D,board__title:E,board__text:Q,board__sub:W,board__info:Z,"board__info-item--hits":"_board__info-item--hits_rihc7_143"},G={components:{PageContents:N,BasicSelect:V,InputBlock:H,InputBlockCell:P,BasicInput:y,BasicHr:k,SearchButton:I,TextButton:x,RouterLink:g,IconArrow:A},setup(){const t={ui:{header:$()}};C(()=>{t.ui.header.setTitle(()=>"IR정보"),t.ui.header.setLeftButtons(()=>["back"]),t.ui.header.setRightButtons(()=>[])}),w(()=>{t.ui.header.setTitle(),t.ui.header.setLeftButtons(),t.ui.header.setRightButtons()})}},J={class:"inline-wrap align-center row-margin-item-group"};function K(t,X,Y,tt,et,ot){const i=o("BasicSelect"),r=o("InputBlockCell"),c=o("BasicInput"),l=o("SearchButton"),d=o("InputBlock"),u=o("BasicHr"),m=o("RouterLink"),p=o("IconArrow"),b=o("TextButton"),h=o("PageContents");return n(),R(h,null,{default:s(()=>[e(d,null,{default:s(()=>[e(r,null,{default:s(()=>[e(i,{option:[{value:"1",text:"전체"},{value:"2",text:"제목"},{value:"3",text:"내용"}],buttonTitle:"검색어 항목을 선택하기",layerTitle:"검색어 항목을 선택해 주세요",classNames:{wrap:"input-width-category"},defaultValue:"1"})]),_:1}),e(r,{flexible:!0},{default:s(()=>[e(c,{type:"search",title:"검색어",placeholder:"검색어 입력"})]),_:1}),e(r,{type:"search"},{default:s(()=>[e(l)]),_:1})]),_:1}),e(u,{className:"row-margin-container-medium"}),_("div",{class:a(t.$style.empty)},[_("p",{class:a(t.$style.empty__text)},"검색된 결과가 없습니다.",2)],2),_("div",{class:a(t.$style.board)},[_("ul",{class:a(t.$style.board__list)},[(n(),T(v,null,S(10,B=>_("li",{key:B,class:a(t.$style.board__item)},[e(m,{to:"/company/ir-detail",class:a(t.$style.board__link)},{default:s(()=>[_("span",{class:a(t.$style.board__title)},[_("span",{class:a(t.$style["board__title-text"])}," 2022년 2분기 IR 자료 ",2)],2),_("span",{class:a(t.$style.board__text)},"2022.08.09",2)]),_:1},8,["class"])],2)),64))],2)],2),_("div",J,[e(b,{classNames:{wrap:"text-body-4 color-gray"}},{rightIcon:s(()=>[e(p)]),default:s(()=>[L(" 더보기 ")]),_:1})])]),_:1})}const O={$style:j},mt=f(G,[["render",K],["__cssModules",O]]);export{mt as default};
