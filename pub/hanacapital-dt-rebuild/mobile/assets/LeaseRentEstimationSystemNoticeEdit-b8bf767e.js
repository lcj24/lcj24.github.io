import{g as y,d as w,y as N,_ as S,C as M,B as R,Z as T,l as H,o as P,b as Z,Q as a,q as D,s,V as o,e as t,W as i,n as l}from"./index-1eea696b.js";import{P as V}from"./PageContents-1b537628.js";import{F as A}from"./FormList-7e035edb.js";import{F as j}from"./FormListItem-a3eadc20.js";import{F as q,a as z}from"./FormInvalidMessage-5917c224.js";import{I as U,a as Q}from"./InputBlockCell-0eb6abde.js";import{B as W,a as G}from"./BoxCheckListItem-51dbcbb0.js";import{B as J,a as K}from"./BoxCheckLabel-d85a39b7.js";import{B as O}from"./BasicTextarea-77871b97.js";import{F as X}from"./FormHelpText-1c3bf4cc.js";import{B as Y,a as tt}from"./ButtonListItem-e178001e.js";import{B as et}from"./BottomSticky-406140af.js";import{I as ot}from"./img-color-b167cf31.js";const st={xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",fill:"none",viewBox:"0 0 36 36"},lt=N('<path fill="#F3A735" d="M5 20.25a4 4 0 0 1 4-4h20a2 2 0 0 1 2 2v10a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-8Z"></path><path fill="#DCEAFC" d="M8.5 7.75a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v19a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3v-19Z"></path><path fill="#FFC737" d="M5 22.25a4 4 0 0 1 4-4h17a2 2 0 0 1 2 2v8a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-6Z"></path><path fill="#FFC737" fill-rule="evenodd" d="M28 20.25H9a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h18c1.019 0 1.948-.38 2.655-1.008A1.5 1.5 0 0 1 28 29.75v-9.5Z" clip-rule="evenodd"></path><path fill="#FFC737" d="M5 16.25a2 2 0 0 1 2-2h6.297a2 2 0 0 1 1.666.893l7.973 12c.883 1.33-.07 3.107-1.666 3.107H7a2 2 0 0 1-2-2v-12Z"></path><path fill="#A1B3C9" d="M17 10.75a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1ZM17 14.75a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Z"></path>',6),at=[lt];function it(e,u){return y(),w("svg",st,at)}const nt={render:it},_t={"upload-button":"_upload-button_1i8ox_1","upload-button__input":"_upload-button__input_1i8ox_4","upload-button__label":"_upload-button__label_1i8ox_16","upload-button__img":"_upload-button__img_1i8ox_19","upload-button__text":"_upload-button__text_1i8ox_22","basic-list":"_basic-list_1i8ox_68","basic-list__item":"_basic-list__item_1i8ox_73","basic-list__symbol":"_basic-list__symbol_1i8ox_86","basic-list__content":"_basic-list__content_1i8ox_121","basic-list--regular":"_basic-list--regular_1i8ox_126","basic-list--large-margin":"_basic-list--large-margin_1i8ox_141","basic-list--medium-margin":"_basic-list--medium-margin_1i8ox_144","basic-list--regular-margin":"_basic-list--regular-margin_1i8ox_147","basic-list--normal-margin":"_basic-list--normal-margin_1i8ox_150","basic-list--small-margin":"_basic-list--small-margin_1i8ox_153","basic-list--mini-margin":"_basic-list--mini-margin_1i8ox_156","basic-list--none-margin":"_basic-list--none-margin_1i8ox_159","basic-list--fixed-width":"_basic-list--fixed-width_1i8ox_162","upload-file":"_upload-file_1i8ox_166","upload-file__list":"_upload-file__list_1i8ox_169","upload-file__item":"_upload-file__item_1i8ox_174","upload-file__icon":"_upload-file__icon_1i8ox_180","upload-file__content":"_upload-file__content_1i8ox_188","upload-file__button":"_upload-file__button_1i8ox_196","upload-file__name":"_upload-file__name_1i8ox_199","upload-file__date":"_upload-file__date_1i8ox_205"},rt={components:{PageContents:V,FormList:A,FormListItem:j,FormInvalid:q,FormInvalidMessage:z,InputBlock:U,InputBlockCell:Q,BasicInput:M,BoxCheckList:W,BoxCheckListItem:G,BoxCheck:J,BoxCheckLabel:K,BasicTextarea:O,FormHelpText:X,BasicButton:R,ButtonList:Y,ButtonListItem:tt,BottomSticky:et,IconFile:nt,IconImgColor:ot},setup(){const e={ui:{header:T()}},u=H({titleError:!1,exposureError:!1,reasonError:!1,explanationError001:!1,explanationError002:!1});return P(()=>{e.ui.header.setTitle(()=>"공지사항(즉시출고)"),e.ui.header.setLeftButtons(()=>["back"]),e.ui.header.setRightButtons(()=>[])}),Z(()=>{e.ui.header.setTitle(),e.ui.header.setLeftButtons(),e.ui.header.setRightButtons()}),{state:u}}},ut={class:"row-margin-contents-group"},ct=t("h3",{class:"text-body-2 row-margin-item-medium"},"파일첨부",-1),dt={class:"flex-box"},mt={class:"flex-box__cell flex-1"},pt={class:"flex-box__cell flex-1"},ft={class:"flex-box"},bt={class:"flex-box__cell flex-1"},ht={class:"flex-box__cell flex-1"},gt={class:"row-margin-contents"},xt={class:"reset-list"},yt={class:"row-margin-item-group"},Bt={class:"row-margin-item-group"},Et={class:"bottom-wrap"};function vt(e,u,Ft,n,$t,Ct){const B=a("BasicInput"),E=a("InputBlockCell"),v=a("InputBlock"),_=a("FormInvalidMessage"),c=a("FormInvalid"),d=a("FormListItem"),m=a("BoxCheckLabel"),p=a("BoxCheck"),f=a("BoxCheckListItem"),I=a("BoxCheckList"),b=a("BasicTextarea"),h=a("FormList"),F=a("IconFile"),r=a("BasicButton"),$=a("IconImgColor"),C=a("FormHelpText"),g=a("ButtonListItem"),x=a("ButtonList"),k=a("BottomSticky"),L=a("PageContents");return y(),D(L,null,{foot:s(()=>[o(k,null,{default:s(()=>[t("div",Et,[o(x,{classNames:{wrap:"row-margin-none"}},{default:s(()=>[o(g,null,{default:s(()=>[o(r,null,{default:s(()=>[i("입력하기")]),_:1})]),_:1})]),_:1}),o(x,{classNames:{wrap:"row-margin-none"}},{default:s(()=>[o(g,null,{default:s(()=>[o(r,null,{default:s(()=>[i("수정하기")]),_:1})]),_:1})]),_:1})])]),_:1})]),default:s(()=>[o(h,null,{default:s(()=>[o(d,{titleText:"제목",target:"#leaseRentEstimationSystemNoticeEditTitle"},{default:s(()=>[o(c,{error:n.state.titleError},{default:s(()=>[o(v,{error:n.state.titleError},{default:s(()=>[o(E,{flexible:!0},{default:s(()=>[o(B,{title:"제목",id:"leaseRentEstimationSystemNoticeEditTitle"})]),_:1})]),_:1},8,["error"]),o(_,null,{default:s(()=>[i("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),o(d,{titleText:"노출",forceFocus:!0},{default:s(()=>[o(c,{error:n.state.exposureError},{default:s(()=>[o(I,null,{default:s(()=>[o(f,null,{default:s(()=>[o(p,{minSide:!0,name:"leaseRentEstimationSystemNoticeEditExposure",id:"leaseRentEstimationSystemNoticeEditExposure001"},{default:s(()=>[o(m,null,{default:s(()=>[i("표시")]),_:1})]),_:1})]),_:1}),o(f,null,{default:s(()=>[o(p,{minSide:!0,name:"leaseRentEstimationSystemNoticeEditExposure",id:"leaseRentEstimationSystemNoticeEditExposure002",defaultChecked:!0},{default:s(()=>[o(m,null,{default:s(()=>[i("중지")]),_:1})]),_:1})]),_:1})]),_:1}),o(_,null,{default:s(()=>[i("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),o(b,{error:n.state.reasonError,titleText:"내용",title:"내용"},{bottom:s(()=>[o(_,null,{default:s(()=>[i("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),t("section",ut,[ct,t("div",dt,[t("div",mt,[t("div",{class:l(e.$style["upload-button"])},[t("input",{type:"file",id:"leaseRentEstimationSystemNoticeEditImage001",class:l(e.$style["upload-button__input"])},null,2),t("label",{for:"leaseRentEstimationSystemNoticeEditImage001",class:l(e.$style["upload-button__label"])},[t("span",{class:l(e.$style["upload-button__text"])},"이미지 첨부",2)],2)],2)]),t("div",pt,[t("div",{class:l(e.$style["upload-button"])},[t("input",{type:"file",id:"leaseRentEstimationSystemNoticeEditPD001",class:l(e.$style["upload-button__input"])},null,2),t("label",{for:"leaseRentEstimationSystemNoticeEditPDF001",class:l(e.$style["upload-button__label"])},[t("span",{class:l(e.$style["upload-button__text"])},"파일 첨부",2)],2)],2)])]),t("div",ft,[t("div",bt,[t("div",{class:l(e.$style["upload-button"])},[t("input",{type:"file",id:"leaseRentEstimationSystemNoticeEditImage002",class:l(e.$style["upload-button__input"]),disabled:!0},null,2),t("label",{for:"leaseRentEstimationSystemNoticeEditImage002",class:l(e.$style["upload-button__label"])},[t("span",{class:l(e.$style["upload-button__text"])},"이미지 첨부",2)],2)],2)]),t("div",ht,[t("div",{class:l(e.$style["upload-button"])},[t("input",{type:"file",id:"leaseRentEstimationSystemNoticeEditPDF002",class:l(e.$style["upload-button__input"]),disabled:!0},null,2),t("label",{for:"leaseRentEstimationSystemNoticeEditPDF002",class:l(e.$style["upload-button__label"])},[t("span",{class:l(e.$style["upload-button__text"])},"파일 첨부",2)],2)],2)])]),t("div",gt,[t("div",{class:l(e.$style["upload-file"])},[t("ul",xt,[t("li",yt,[t("div",{class:l(e.$style["upload-file__item"])},[t("div",{class:l(e.$style["upload-file__icon"])},[o(F)],2),t("div",{class:l(e.$style["upload-file__content"])},[t("div",{class:l(e.$style["upload-file__name"])},"첨부파일명.txt",2)],2),t("div",{class:l(e.$style["upload-file__button"])},[o(r,{line:!0,theme:"quaternary",size:"mini"},{default:s(()=>[i(" 삭제 ")]),_:1})],2)],2)]),t("li",Bt,[t("div",{class:l(e.$style["upload-file__item"])},[t("div",{class:l(e.$style["upload-file__icon"])},[o($)],2),t("div",{class:l(e.$style["upload-file__content"])},[t("div",{class:l(e.$style["upload-file__name"])},"첨부파일명.jpg",2)],2),t("div",{class:l(e.$style["upload-file__button"])},[o(r,{line:!0,theme:"quaternary",size:"mini"},{default:s(()=>[i(" 삭제 ")]),_:1})],2)],2),o(h,{classNames:{wrap:"row-margin-item-medium"}},{default:s(()=>[o(b,{error:n.state.explanationError001,titleText:"이미지 설명",maxlength:100,count:!0,title:"이미지 설명"},{bottom:s(()=>[o(_,null,{default:s(()=>[i("Error Message")]),_:1}),o(C,null,{default:s(()=>[i("100자 이내로 작성해 주세요")]),_:1})]),_:1},8,["error"])]),_:1})])])],2)]),t("ul",{class:l([e.$style["basic-list"],"row-margin-contents"])},[t("li",{class:l(e.$style["basic-list__item"])},[t("div",{class:l(e.$style["basic-list__symbol"])},null,2),t("div",{class:l(e.$style["basic-list__content"])}," 이미지 파일은 jpg, jpge, png, gif 형식만 가능합니다. ",2)],2)],2)])]),_:1})}const It={$style:_t},At=S(rt,[["render",vt],["__cssModules",It]]);export{At as default};
