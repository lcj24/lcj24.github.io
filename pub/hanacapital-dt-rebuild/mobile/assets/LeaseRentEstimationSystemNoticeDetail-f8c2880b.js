import{_ as y,B as p,Z as h,l as $,o as g,b as B,Q as i,q,s as l,g as v,e as s,n as t,V as a,W as c}from"./index-a5325df6.js";import{P as L}from"./PageContents-1d774df1.js";import{B as P,a as C}from"./ButtonListItem-dbafa401.js";import{P as w}from"./PinButton-c6b75138.js";import{_ as f}from"./box-detail-6bcb5c65.js";const k={"board-detail":"_board-detail_1yq7s_1","board-detail__head":"_board-detail__head_1yq7s_7","board-detail__head--noline":"_board-detail__head--noline_1yq7s_13","board-detail__category":"_board-detail__category_1yq7s_17","board-detail__title":"_board-detail__title_1yq7s_25","board-detail__text":"_board-detail__text_1yq7s_35","board-detail__sub":"_board-detail__sub_1yq7s_44","board-detail__sub-list":"_board-detail__sub-list_1yq7s_53","board-detail__sub-item":"_board-detail__sub-item_1yq7s_57","board-detail__contents":"_board-detail__contents_1yq7s_73","board-detail__foot":"_board-detail__foot_1yq7s_80","file-list":"_file-list_1yq7s_87","file-list__list":"_file-list__list_1yq7s_90","file-list__item":"_file-list__item_1yq7s_95","file-list__head":"_file-list__head_1yq7s_98","file-list__sub":"_file-list__sub_1yq7s_106","file-list__name":"_file-list__name_1yq7s_112","file-list__img":"_file-list__img_1yq7s_118"},N={components:{PageContents:L,BasicButton:p,ButtonList:P,ButtonListItem:C,PinButton:w},setup(){const e={ui:{header:h()}},_=$({pin:!1}),o=()=>{_.pin=!_.pin};return g(()=>{e.ui.header.setTitle(()=>"공지사항(즉시출고)"),e.ui.header.setLeftButtons(()=>["back"]),e.ui.header.setRightButtons(()=>[])}),B(()=>{e.ui.header.setTitle(),e.ui.header.setLeftButtons(),e.ui.header.setRightButtons()}),{state:_,togglePin:o}}},R={class:"flex-box row-margin-item"},V={class:"flex-box__cell flex-1"},I={class:"flex-box__cell"},M=s("img",{src:f,alt:""},null,-1),T=[M],j=s("img",{src:f,alt:""},null,-1),S=[j];function U(e,_,o,n,D,E){const u=i("PinButton"),d=i("BasicButton"),r=i("ButtonListItem"),m=i("ButtonList"),b=i("PageContents");return v(),q(b,null,{default:l(()=>[s("div",{class:t(e.$style["board-detail"])},[s("div",{class:t([e.$style["board-detail__head"],e.$style["board-detail__head--flex"]])},[s("div",R,[s("div",V,[s("h2",{class:t([e.$style["board-detail__title"],"row-margin-none"])}," 첨부파일 ",2)]),s("div",I,[a(u,{active:n.state.pin,onClick:n.togglePin},null,8,["active","onClick"])])]),s("div",{class:t(e.$style["board-detail__sub"])},[s("div",{class:t(e.$style["board-detail__sub-list"])},[s("div",{class:t(e.$style["board-detail__sub-item"])},"2021.03.16",2),s("div",{class:t(e.$style["board-detail__sub-item"])},"조회 18",2)],2)],2)],2),s("section",{class:t(e.$style["board-detail__contents"])}," //게시물 내용 노출 ",2),s("div",{class:t([e.$style["file-list"],"row-margin-contents-small"])},[s("ul",{class:t(e.$style["file-list__list"])},[s("li",{class:t(e.$style["file-list__item"])},[s("a",{href:"/foo/bar.pdf",class:t(e.$style["file-list__head"]),download:""},[s("span",{class:t(e.$style["file-list__sub"])},"[파일]",2),s("span",{class:t(e.$style["file-list__name"])},"2020년형_avante-price-20210331.jpg",2)],2),s("div",{class:t(e.$style["file-list__img"])},T,2)],2),s("li",{class:t(e.$style["file-list__item"])},[s("a",{href:"/foo/bar.pdf",class:t(e.$style["file-list__head"]),download:""},[s("span",{class:t(e.$style["file-list__sub"])},"[파일]",2),s("span",{class:t(e.$style["file-list__name"])},"2020년형_avante-price-20210331.pdf",2)],2)],2),s("li",{class:t(e.$style["file-list__item"])},[s("a",{href:"/foo/bar.pdf",class:t(e.$style["file-list__head"]),download:""},[s("span",{class:t(e.$style["file-list__sub"])},"[파일]",2),s("span",{class:t(e.$style["file-list__name"])},"2020년형_avante-price-20210331.jpg",2)],2),s("div",{class:t(e.$style["file-list__img"])},S,2)],2)],2)],2)],2),a(m,null,{default:l(()=>[a(r,null,{default:l(()=>[a(d,{line:!0,theme:"quaternary"},{default:l(()=>[c("수정")]),_:1})]),_:1}),a(r,null,{default:l(()=>[a(d,{line:!0,theme:"quaternary",tagName:"RouterLink",to:"/lease-rent-estimation-system/notice-list"},{default:l(()=>[c(" 목록 ")]),_:1})]),_:1})]),_:1})]),_:1})}const z={$style:k},F=y(N,[["render",U],["__cssModules",z]]);export{F as default};
