import{_ as f,C as y,D as k,T as x,S as I,R as $,Z as g,o as C,b as w,Q as o,q as T,s as a,g as n,V as e,e as _,n as s,d as S,f as v,F as L,W as N}from"./index-1eea696b.js";import{P as R}from"./PageContents-1b537628.js";import{I as V,a as H}from"./InputBlockCell-0eb6abde.js";import{B as P}from"./BasicSelect-7b7d7940.js";import{I as A}from"./dropdown-3c50f619.js";import"./SelectButton-6ec40963.js";import"./PopupTitle-8d75e052.js";import"./ToastPopup-1dea88cd.js";import"./ToastPopupHead-1397d9fe.js";import"./check-l-f55769c9.js";const M="_empty_rihc7_1",F="_empty__text_rihc7_6",U="_board_rihc7_14",q="_board__list_rihc7_17",z="_board__item_rihc7_22",D="_board__link_rihc7_33",E="_board__title_rihc7_25",Q="_board__text_rihc7_67",W="_board__sub_rihc7_83",Z="_board__info_rihc7_30",j={empty:M,empty__text:F,board:U,board__list:q,board__item:z,"board__item--mark":"_board__item--mark_rihc7_25","board__title-text":"_board__title-text_rihc7_25","board__item--hidden":"_board__item--hidden_rihc7_29","board__info-item":"_board__info-item_rihc7_30",board__link:D,board__title:E,board__text:Q,board__sub:W,board__info:Z,"board__info-item--hits":"_board__info-item--hits_rihc7_143"},G={components:{PageContents:R,InputBlock:V,InputBlockCell:H,BasicSelect:P,BasicInput:y,BasicHr:k,TextButton:x,SearchButton:I,RouterLink:$,IconArrow:A},setup(){const t={ui:{header:g()}};C(()=>{t.ui.header.setTitle(()=>"공지사항"),t.ui.header.setLeftButtons(()=>["back"]),t.ui.header.setRightButtons(()=>[])}),w(()=>{t.ui.header.setTitle(),t.ui.header.setLeftButtons(),t.ui.header.setRightButtons()})}},J={class:"inline-wrap align-center row-margin-contents"};function K(t,X,Y,tt,et,ot){const i=o("BasicSelect"),r=o("InputBlockCell"),c=o("BasicInput"),l=o("SearchButton"),d=o("InputBlock"),u=o("BasicHr"),m=o("RouterLink"),p=o("IconArrow"),b=o("TextButton"),h=o("PageContents");return n(),T(h,null,{default:a(()=>[e(d,null,{default:a(()=>[e(r,null,{default:a(()=>[e(i,{option:[{value:"1",text:"전체"},{value:"2",text:"제목"},{value:"3",text:"내용"}],buttonTitle:"검색 조건 선택하기",layerTitle:"검색 조건을 선택해 주세요",classNames:{wrap:"input-width-category"},defaultValue:"1"})]),_:1}),e(r,{flexible:!0},{default:a(()=>[e(c,{type:"search",title:"검색어 입력",placeholder:"검색어 입력"})]),_:1}),e(r,{type:"search"},{default:a(()=>[e(l)]),_:1})]),_:1}),e(u,{className:"row-margin-container-medium"}),_("div",{class:s(t.$style.empty)},[_("p",{class:s(t.$style.empty__text)},"검색된 결과가 없습니다.",2)],2),_("div",{class:s(t.$style.board)},[_("ul",{class:s(t.$style.board__list)},[(n(),S(L,null,v(10,B=>_("li",{key:B,class:s(t.$style.board__item)},[e(m,{to:"/customer/notice-detail",class:s(t.$style.board__link)},{default:a(()=>[_("span",{class:s(t.$style.board__title)},[_("span",{class:s(t.$style["board__title-text"])}," 전화권유 상담원 현황 ",2)],2),_("span",{class:s(t.$style.board__text)},"2022.10.25",2)]),_:1},8,["class"])],2)),64))],2)],2),_("div",J,[e(b,{classNames:{wrap:"text-body-4 color-gray"}},{rightIcon:a(()=>[e(p)]),default:a(()=>[N(" 더보기 ")]),_:1})])]),_:1})}const O={$style:j},mt=f(G,[["render",K],["__cssModules",O]]);export{mt as default};
