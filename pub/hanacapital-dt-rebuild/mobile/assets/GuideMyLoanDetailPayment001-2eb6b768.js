import{P as ct}from"./PageContents-1b537628.js";import{g as P,d as V,e as l,_ as C,c as at,Q as o,n as _,k as it,V as t,U as k,P as T,z as U,A as w,B as H,r as B,q as j,s as e,W as n,T as G,F as Q}from"./index-1eea696b.js";import{B as D,a as Z}from"./ButtonListItem-e178001e.js";import{P as M}from"./PopupTitle-8d75e052.js";import{B as S}from"./BasicBox-dd7db784.js";import{K as W,a as J,b as R,c as X}from"./KeyValueText-354ead28.js";import{U as Y,a as tt,b as et,c as lt}from"./UiAccordionOpener-de896367.js";import{B as st}from"./BankLogo-8ccd4960.js";import{i as ot}from"./important-206eae5c.js";import"./dropdown-3c50f619.js";const ut={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},dt=l("path",{fill:"#8F8F8F","fill-rule":"evenodd",d:"M10 4v12h9V4h-9Zm-.5-2A1.5 1.5 0 0 0 8 3.5v13A1.5 1.5 0 0 0 9.5 18h10a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 19.5 2h-10Z","clip-rule":"evenodd"},null,-1),rt=l("path",{fill:"#8F8F8F","fill-rule":"evenodd",d:"M3 8.5a2 2 0 0 1 2-2h1.966v2H5V20a.5.5 0 0 0 .5.5H14v-1.825h2V20.5a2 2 0 0 1-2 2H5.5A2.5 2.5 0 0 1 3 20V8.5Z","clip-rule":"evenodd"},null,-1),yt=[dt,rt];function mt(s,d){return P(),V("svg",ut,yt)}const pt={render:mt},ft="_copy_olq3j_1",bt="_copy__inner_olq3j_8",xt="_copy__contents_olq3j_15",ht="_copy__right_olq3j_20",$t="_copy__button_olq3j_27",vt={copy:ft,copy__inner:bt,copy__contents:xt,copy__right:ht,copy__button:$t,"copy__button-icon":"_copy__button-icon_olq3j_67","copy__button-text":"_copy__button-text_olq3j_76","copy--align-right":"_copy--align-right_olq3j_94"},E=()=>({wrap:"",inner:"",contents:"",right:"",button:"",text:"",icon:""}),gt={inheritAttrs:!1,components:{IconCopy:pt},props:{classNames:{Type:Object,default(){return E()}},text:{Type:String,default:""},align:{Type:String,default:null}},setup(s){return{customClassNames:at(()=>{const{classNames:u}=s;return Object.assign(E(),u)}),copy:()=>{navigator.clipboard.writeText(s.text).then(()=>{console.log("success")})}}}};function Bt(s,d,f,u,b,A){const y=o("IconCopy");return P(),V("div",{class:_([s.$style.copy,{[s.$style[`copy--align-${f.align}`]]:f.align},u.customClassNames.wrap])},[l("div",{class:_([s.$style.copy__inner,u.customClassNames.inner])},[l("div",{class:_([s.$style.copy__contents,u.customClassNames.contents])},[it(s.$slots,"default")],2),l("div",{class:_([s.$style.copy__right,u.customClassNames.right])},[l("button",{type:"button",class:_([s.$style.copy__button,u.customClassNames.button]),onClick:d[0]||(d[0]=(...m)=>u.copy&&u.copy(...m))},[l("span",{class:_([s.$style["copy__button-icon"],u.customClassNames.icon])},[t(y)],2),l("span",{class:_([s.$style["copy__button-text"],u.customClassNames.text])},"복사하기",2)],2)],2)],2)],2)}const Nt={$style:vt},nt=C(gt,[["render",Bt],["__cssModules",Nt]]),Lt={"contents-list":"_contents-list_oyu6b_1","contents-list__list":"_contents-list__list_oyu6b_4","contents-list__item":"_contents-list__item_oyu6b_9","contents-list__head":"_contents-list__head_oyu6b_12","contents-list__symbol":"_contents-list__symbol_oyu6b_20","contents-list__title":"_contents-list__title_oyu6b_32","contents-list__right":"_contents-list__right_oyu6b_40","contents-list__opener":"_contents-list__opener_oyu6b_51","contents-list__contents":"_contents-list__contents_oyu6b_65","contents-list__depth":"_contents-list__depth_oyu6b_68","contents-list__depth-2":"_contents-list__depth-2_oyu6b_72","contents-list__depth-3":"_contents-list__depth-3_oyu6b_75","contents-list__depth-4":"_contents-list__depth-4_oyu6b_78","contents-list__list--secondary":"_contents-list__list--secondary_oyu6b_81","contents-list__list--tertiary":"_contents-list__list--tertiary_oyu6b_108","contents-list__list--quaternary":"_contents-list__list--quaternary_oyu6b_133","contents-list__list--quinary":"_contents-list__list--quinary_oyu6b_159","contents-list__list--senary":"_contents-list__list--senary_oyu6b_187"},Pt={components:{UiLayer:k,PopupTitle:M,PopupButton:T,FullPopup:U,FullPopupHead:w,BasicButton:H,ButtonList:D,ButtonListItem:Z},setup(){return{layer:B(null)}}},Ct=l("p",{class:"text-body-4 font-weight-light color-gray-tertiary"}," (자기앞수표는 결제일자 2일전까지 입금하셔야 결제가 가능합니다.) ",-1),At=[Ct];function Vt(s,d,f,u,b,A){const y=o("PopupTitle"),m=o("PopupButton"),x=o("FullPopupHead"),h=o("BasicButton"),p=o("ButtonListItem"),c=o("ButtonList"),a=o("FullPopup"),i=o("UiLayer");return P(),j(i,{ref:"layer",type:"full"},{default:e(r=>[t(a,null,{head:e(()=>[t(x,null,{right:e(()=>[t(m,{onClick:g=>r.close()},null,8,["onClick"])]),default:e(()=>[t(y,null,{default:e(()=>[n("자동이체계좌 유의사항")]),_:1})]),_:2},1024)]),foot:e(()=>[t(c,{classNames:{wrap:"row-margin-none"}},{default:e(()=>[t(p,null,{default:e(()=>[t(h,{onClick:g=>r.close()},{default:e(()=>[n("네, 모두 확인했습니다")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),default:e(()=>[l("div",{class:_(s.$style["contents-list"])},[l("ol",{class:_([s.$style["contents-list__list"],s.$style["contents-list__list--senary"]])},[l("li",{class:_(s.$style["contents-list__item"])},[l("div",{class:_(s.$style["contents-list__head"])},[l("div",{class:_(s.$style["contents-list__symbol"])},"1",2),l("div",{class:_(s.$style["contents-list__title"])}," 매월 결제일자 전까지 고객님께서 신청하신 자동이체 결제계좌에 입금하시면 됩니다. ",2)],2),l("div",{class:_([s.$style["contents-list__depth-4"],"row-margin-mini"])},At,2)],2),l("li",{class:_(s.$style["contents-list__item"])},[l("div",{class:_(s.$style["contents-list__head"])},[l("div",{class:_(s.$style["contents-list__symbol"])},"2",2),l("div",{class:_(s.$style["contents-list__title"])}," 결제하셔야 할 금액보다 결제계좌의 잔고가 부족하더라도 일부 금액이 출금됩니다. ",2)],2)],2),l("li",{class:_(s.$style["contents-list__item"])},[l("div",{class:_(s.$style["contents-list__head"])},[l("div",{class:_(s.$style["contents-list__symbol"])},"3",2),l("div",{class:_(s.$style["contents-list__title"])}," 은행마감시간 이후 자동이체 결제계좌에 입금된 금액은 출금되지 않을 수 있습니다. ",2)],2)],2),l("li",{class:_(s.$style["contents-list__item"])},[l("div",{class:_(s.$style["contents-list__head"])},[l("div",{class:_(s.$style["contents-list__symbol"])},"4",2),l("div",{class:_(s.$style["contents-list__title"])}," 연체금액이나 결제대금을 결제일자 전 일자에 가상계좌 등으로 입금하신 경우에는 자동이체 결제계좌에서 추가로 출금될 수 있으므로 주의하여 주시기 바라며, 이 경우 추가 출금이 확인된 금액은 2영업일 이후에 환급하여 드립니다. ",2)],2)],2)],2)],2)]),_:2},1024)]),_:1},512)}const kt={$style:Lt},Tt=C(Pt,[["render",Vt],["__cssModules",kt]]),Ut={"account-head":"_account-head_1tn3o_1","account-opener":"_account-opener_1tn3o_5","account-contents":"_account-contents_1tn3o_14"},wt={components:{UiLayer:k,PopupButton:T,FullPopup:U,FullPopupHead:w,PopupTitle:M,BasicBox:S,KeyValue:W,KeyValueItem:J,KeyValueTitle:R,KeyValueText:X,TextButton:G,UiAccordion:Y,UiAccordionItem:tt,UiAccordionLayer:et,UiAccordionOpener:lt,CopyButton:nt,BankLogo:st,LayerMyLoanPaymentAutoNotice:Tt,iconImportant:ot},setup(){const s=B(null),d=B(null);return{layer:s,layer001:d,layer001Open:(u={})=>{d.value.layer.open(u.target)}}}},Mt={class:"row-margin-contents-small"},It={class:"flex-box row-margin-contents"},Ft=l("div",{class:"flex-box__cell flex-1"},[l("h3",{class:"text-title-2"},"결제정보")],-1),Kt={class:"flex-box__cell"},Ot={class:"flex-box"},qt=l("div",{class:"flex-box__cell flex-1"}," 하나 123-456-7890123 ",-1),zt={class:"flex-box__cell"},Ht={class:"row-margin-contents-small"},jt={class:"flex-box row-margin-contents"},Dt=l("div",{class:"flex-box__cell flex-1"},[l("h3",{class:"text-title-2"},"청구정보")],-1),Zt={class:"flex-box__cell"},Et={class:"flex-box"},Gt=l("div",{class:"flex-box__cell flex-1"},[l("h4",{class:"text-body-1 font-weight-medium"},"가상계좌 정보")],-1),Qt={class:"flex-box__cell"},St={class:"flex-box"},Wt={class:"flex-box__cell"},Jt=l("div",{class:"flex-box__cell flex-box__cell--mini"}," 국민 ",-1),Rt={class:"flex-box"},Xt={class:"flex-box__cell"},Yt=l("div",{class:"flex-box__cell flex-box__cell--mini"}," 농협 ",-1),te={class:"flex-box"},ee={class:"flex-box__cell"},le=l("div",{class:"flex-box__cell flex-box__cell--mini"}," 우리 ",-1),se={class:"flex-box"},oe={class:"flex-box__cell"},ne=l("div",{class:"flex-box__cell flex-box__cell--mini"}," 하나 ",-1),_e={class:"flex-box"},ce={class:"flex-box__cell"},ae=l("div",{class:"flex-box__cell flex-box__cell--mini"}," 신한 ",-1);function ie(s,d,f,u,b,A){const y=o("PopupTitle"),m=o("PopupButton"),x=o("FullPopupHead"),h=o("iconImportant"),p=o("TextButton"),c=o("KeyValueTitle"),a=o("KeyValueText"),i=o("KeyValueItem"),r=o("KeyValue"),g=o("UiAccordion"),$=o("BasicBox"),N=o("UiAccordionOpener"),v=o("BankLogo"),L=o("CopyButton"),I=o("UiAccordionLayer"),F=o("UiAccordionItem"),K=o("FullPopup"),O=o("UiLayer"),q=o("LayerMyLoanPaymentAutoNotice");return P(),V(Q,null,[t(O,{ref:"layer",type:"full"},{default:e(z=>[t(K,null,{head:e(()=>[t(x,null,{right:e(()=>[t(m,{onClick:_t=>z.close()},null,8,["onClick"])]),default:e(()=>[t(y,null,{default:e(()=>[n("결제/청구정보")]),_:1})]),_:2},1024)]),default:e(()=>[l("section",Mt,[l("div",It,[Ft,l("div",Kt,[t(p,{theme:"quaternary",onClick:u.layer001Open},{rightIcon:e(()=>[t(h)]),default:e(()=>[n(" 자동이체계좌 유의사항 ")]),_:1},8,["onClick"])])]),t($,null,{default:e(()=>[t(g,null,{default:e(()=>[t(r,{margin:"regular"},{default:e(()=>[t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[n("결제방법")]),_:1}),t(a,null,{default:e(()=>[n("자동이체")]),_:1})]),_:1}),t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[n("계좌정보")]),_:1}),t(a,null,{default:e(()=>[l("div",Ot,[qt,l("div",zt,[t(p,{classNames:{text:["color-gray","text-body-4"]},underline:"true"},{default:e(()=>[n(" 변경 ")]),_:1})])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),l("section",Ht,[l("div",jt,[Dt,l("div",Zt,[t(p,{classNames:{text:["color-gray","text-body-4"]},underline:"true"},{default:e(()=>[n("변경")]),_:1})])]),t($,null,{default:e(()=>[t(r,{margin:"regular"},{default:e(()=>[t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[n("청구방법")]),_:1}),t(a,null,{default:e(()=>[n("이메일")]),_:1})]),_:1}),t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[n("청구지")]),_:1}),t(a,null,{default:e(()=>[n("집")]),_:1})]),_:1}),t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[n("주소")]),_:1}),t(a,null,{default:e(()=>[n("서울 서대문구 연희맛로 26 (흡층흔)")]),_:1})]),_:1}),t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[n("연락처")]),_:1}),t(a,null,{default:e(()=>[n("-")]),_:1})]),_:1}),t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[n("휴대전화")]),_:1}),t(a,null,{default:e(()=>[n("010-1234-5678")]),_:1})]),_:1}),t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[n("이메일")]),_:1}),t(a,null,{default:e(()=>[n("hana@test.com")]),_:1})]),_:1})]),_:1})]),_:1}),t(g,{tagName:"div",classNames:{wrap:"row-margin-contents"}},{default:e(()=>[t(F,{tagName:"section",initialOpen:!0},{default:e(()=>[t($,{theme:"quinary",className:s.$style["account-head"]},{default:e(()=>[l("div",Et,[Gt,l("div",Qt,[t(N,{classNames:{button:s.$style["account-opener"]}},null,8,["classNames"])])])]),_:1},8,["className"]),t(I,null,{default:e(()=>[l("div",{class:_(s.$style["account-contents"])},[t(r,{align:"left",margin:"regular",size:"regular"},{default:e(()=>[t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[l("div",St,[l("div",Wt,[t(v,{size:"small",code:"004"})]),Jt])]),_:1}),t(a,null,{default:e(()=>[t(L,{text:"국민 123-456-78901234"},{default:e(()=>[n(" 123-456-78901234 ")]),_:1})]),_:1})]),_:1}),t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[l("div",Rt,[l("div",Xt,[t(v,{size:"small",code:"011"})]),Yt])]),_:1}),t(a,null,{default:e(()=>[t(L,{text:"농협 123-456-78901234"},{default:e(()=>[n(" 123-456-78901234 ")]),_:1})]),_:1})]),_:1}),t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[l("div",te,[l("div",ee,[t(v,{size:"small",code:"020"})]),le])]),_:1}),t(a,null,{default:e(()=>[t(L,{text:"우리 123-456-78901234"},{default:e(()=>[n(" 123-456-78901234 ")]),_:1})]),_:1})]),_:1}),t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[l("div",se,[l("div",oe,[t(v,{size:"small",code:"081"})]),ne])]),_:1}),t(a,null,{default:e(()=>[t(L,{text:"하나 123-456-78901234"},{default:e(()=>[n(" 123-456-78901234 ")]),_:1})]),_:1})]),_:1}),t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[l("div",_e,[l("div",ce,[t(v,{size:"small",code:"088"})]),ae])]),_:1}),t(a,null,{default:e(()=>[t(L,{text:"신한 123-456-78901234-1234567890-12345"},{default:e(()=>[n(" 123-456-78901234-1234567890-12345 ")]),_:1})]),_:1})]),_:1})]),_:1})],2)]),_:1})]),_:1})]),_:1})])]),_:2},1024)]),_:1},512),t(q,{ref:"layer001"},null,512)],64)}const ue={$style:Ut},de=C(wt,[["render",ie],["__cssModules",ue]]),re={"contents-list":"_contents-list_oyu6b_1","contents-list__list":"_contents-list__list_oyu6b_4","contents-list__item":"_contents-list__item_oyu6b_9","contents-list__head":"_contents-list__head_oyu6b_12","contents-list__symbol":"_contents-list__symbol_oyu6b_20","contents-list__title":"_contents-list__title_oyu6b_32","contents-list__right":"_contents-list__right_oyu6b_40","contents-list__opener":"_contents-list__opener_oyu6b_51","contents-list__contents":"_contents-list__contents_oyu6b_65","contents-list__depth":"_contents-list__depth_oyu6b_68","contents-list__depth-2":"_contents-list__depth-2_oyu6b_72","contents-list__depth-3":"_contents-list__depth-3_oyu6b_75","contents-list__depth-4":"_contents-list__depth-4_oyu6b_78","contents-list__list--secondary":"_contents-list__list--secondary_oyu6b_81","contents-list__list--tertiary":"_contents-list__list--tertiary_oyu6b_108","contents-list__list--quaternary":"_contents-list__list--quaternary_oyu6b_133","contents-list__list--quinary":"_contents-list__list--quinary_oyu6b_159","contents-list__list--senary":"_contents-list__list--senary_oyu6b_187"},ye={components:{UiLayer:k,PopupTitle:M,PopupButton:T,FullPopup:U,FullPopupHead:w,BasicButton:H,ButtonList:D,ButtonListItem:Z},setup(){return{layer:B(null)}}};function me(s,d,f,u,b,A){const y=o("PopupTitle"),m=o("PopupButton"),x=o("FullPopupHead"),h=o("BasicButton"),p=o("ButtonListItem"),c=o("ButtonList"),a=o("FullPopup"),i=o("UiLayer");return P(),j(i,{ref:"layer",type:"full"},{default:e(r=>[t(a,null,{head:e(()=>[t(x,null,{right:e(()=>[t(m,{onClick:g=>r.close()},null,8,["onClick"])]),default:e(()=>[t(y,null,{default:e(()=>[n("가상계좌 유의사항")]),_:1})]),_:2},1024)]),foot:e(()=>[t(c,{classNames:{wrap:"row-margin-none"}},{default:e(()=>[t(p,null,{default:e(()=>[t(h,{onClick:g=>r.close()},{default:e(()=>[n("네, 모두 확인했습니다")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),default:e(()=>[l("div",{class:_(s.$style["contents-list"])},[l("ol",{class:_([s.$style["contents-list__list"],s.$style["contents-list__list--senary"]])},[l("li",{class:_(s.$style["contents-list__item"])},[l("div",{class:_(s.$style["contents-list__head"])},[l("div",{class:_(s.$style["contents-list__symbol"])},"1",2),l("div",{class:_(s.$style["contents-list__title"])}," 가상계좌는 고객님의 결제 편의를 위해 당사에서 임의로 부여한 것으로 고객님 고유의 입금전용 계좌입니다. ",2)],2)],2),l("li",{class:_(s.$style["contents-list__item"])},[l("div",{class:_(s.$style["contents-list__head"])},[l("div",{class:_(s.$style["contents-list__symbol"])},"2",2),l("div",{class:_(s.$style["contents-list__title"])}," 모든 은행의 창구입금, 자동화기기(CD/ATM), PC뱅킹, 펌뱅킹 등 보통예금 통장 입금과 동일한 방법으로 입금이 가능합니다. ",2)],2)],2),l("li",{class:_(s.$style["contents-list__item"])},[l("div",{class:_(s.$style["contents-list__head"])},[l("div",{class:_(s.$style["contents-list__symbol"])},"3",2),l("div",{class:_(s.$style["contents-list__title"])}," 가상계좌 입금 시 계좌번호를 잘못 입력하시면 다른 고객님의 입금으로 인식할 수 있으므로 정확히 기재하시고 한 번 더 확인하시기 바랍니다. ",2)],2)],2),l("li",{class:_(s.$style["contents-list__item"])},[l("div",{class:_(s.$style["contents-list__head"])},[l("div",{class:_(s.$style["contents-list__symbol"])},"4",2),l("div",{class:_(s.$style["contents-list__title"])}," 전액중도상환 또는 일부중도상환을 하실 경우에는 가상계좌로 입금하셔야 합니다. ",2)],2)],2)],2)],2)]),_:2},1024)]),_:1},512)}const pe={$style:re},fe=C(ye,[["render",me],["__cssModules",pe]]),be={"key-value-opener":"_key-value-opener_clz5l_1","account-contents":"_account-contents_clz5l_7"},xe={components:{UiLayer:k,PopupButton:T,FullPopup:U,FullPopupHead:w,PopupTitle:M,BasicBox:S,KeyValue:W,KeyValueItem:J,KeyValueTitle:R,KeyValueText:X,TextButton:G,UiAccordion:Y,UiAccordionItem:tt,UiAccordionLayer:et,UiAccordionOpener:lt,CopyButton:nt,BankLogo:st,LayerMyLoanPaymentVirtualNotice:fe,iconImportant:ot},setup(){const s=B(null),d=B(null);return{layer:s,layer001:d,layer001Open:(u={})=>{d.value.layer.open(u.target)}}}},he={class:"row-margin-contents-small"},$e={class:"flex-box row-margin-contents"},ve=l("div",{class:"flex-box__cell flex-1"},[l("h3",{class:"text-title-2"},"결제정보")],-1),ge={class:"flex-box__cell"},Be={class:"flex-box"},Ne={class:"flex-box__cell"},Le=l("div",{class:"flex-box__cell flex-box__cell--mini"}," 국민 ",-1),Pe={class:"flex-box"},Ce={class:"flex-box__cell"},Ae=l("div",{class:"flex-box__cell flex-box__cell--mini"}," 농협 ",-1),Ve={class:"flex-box"},ke={class:"flex-box__cell"},Te=l("div",{class:"flex-box__cell flex-box__cell--mini"}," 우리 ",-1),Ue={class:"flex-box"},we={class:"flex-box__cell"},Me=l("div",{class:"flex-box__cell flex-box__cell--mini"}," 하나 ",-1),Ie={class:"flex-box"},Fe={class:"flex-box__cell"},Ke=l("div",{class:"flex-box__cell flex-box__cell--mini"}," 신한 ",-1),Oe={class:"row-margin-contents-small"},qe={class:"flex-box row-margin-contents"},ze=l("div",{class:"flex-box__cell flex-1"},[l("h3",{class:"text-title-2"},"청구정보")],-1),He={class:"flex-box__cell"};function je(s,d,f,u,b,A){const y=o("PopupTitle"),m=o("PopupButton"),x=o("FullPopupHead"),h=o("iconImportant"),p=o("TextButton"),c=o("KeyValueTitle"),a=o("KeyValueText"),i=o("KeyValueItem"),r=o("KeyValue"),g=o("UiAccordionOpener"),$=o("BankLogo"),N=o("CopyButton"),v=o("BasicBox"),L=o("UiAccordionLayer"),I=o("UiAccordionItem"),F=o("UiAccordion"),K=o("FullPopup"),O=o("UiLayer"),q=o("LayerMyLoanPaymentVirtualNotice");return P(),V(Q,null,[t(O,{ref:"layer",type:"full"},{default:e(z=>[t(K,null,{head:e(()=>[t(x,null,{right:e(()=>[t(m,{onClick:_t=>z.close()},null,8,["onClick"])]),default:e(()=>[t(y,null,{default:e(()=>[n("결제/청구정보")]),_:1})]),_:2},1024)]),default:e(()=>[l("section",he,[l("div",$e,[ve,l("div",ge,[t(p,{theme:"quaternary",onClick:u.layer001Open},{rightIcon:e(()=>[t(h)]),default:e(()=>[n(" 가상계좌 유의사항 ")]),_:1},8,["onClick"])])]),t(v,null,{default:e(()=>[t(F,{tagName:"div"},{default:e(()=>[t(r,null,{default:e(()=>[t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[n("결제방법")]),_:1}),t(a,null,{default:e(()=>[n("가상계좌")]),_:1})]),_:1})]),_:1}),t(I,{tagName:"div",classNames:{item:"row-margin-item-group"},initialOpen:!0},{default:e(()=>[t(r,{verticalAlign:"center"},{default:e(()=>[t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[n("계좌정보")]),_:1}),t(a,null,{default:e(()=>[t(g,{classNames:{button:s.$style["key-value-opener"]}},null,8,["classNames"])]),_:1})]),_:1})]),_:1}),t(L,null,{default:e(()=>[l("div",{class:_(s.$style["account-contents"])},[t(v,{theme:"senary"},{default:e(()=>[t(r,{align:"left",margin:"regular",size:"regular"},{default:e(()=>[t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[l("div",Be,[l("div",Ne,[t($,{size:"small",code:"004"})]),Le])]),_:1}),t(a,null,{default:e(()=>[t(N,{text:"국민 123-456-78901234"},{default:e(()=>[n(" 123-456-78901234 ")]),_:1})]),_:1})]),_:1}),t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[l("div",Pe,[l("div",Ce,[t($,{size:"small",code:"011"})]),Ae])]),_:1}),t(a,null,{default:e(()=>[t(N,{text:"농협 123-456-78901234"},{default:e(()=>[n(" 123-456-78901234 ")]),_:1})]),_:1})]),_:1}),t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[l("div",Ve,[l("div",ke,[t($,{size:"small",code:"020"})]),Te])]),_:1}),t(a,null,{default:e(()=>[t(N,{text:"우리 123-456-78901234"},{default:e(()=>[n(" 123-456-78901234 ")]),_:1})]),_:1})]),_:1}),t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[l("div",Ue,[l("div",we,[t($,{size:"small",code:"081"})]),Me])]),_:1}),t(a,null,{default:e(()=>[t(N,{text:"하나 123-456-78901234"},{default:e(()=>[n(" 123-456-78901234 ")]),_:1})]),_:1})]),_:1}),t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[l("div",Ie,[l("div",Fe,[t($,{size:"small",code:"088"})]),Ke])]),_:1}),t(a,null,{default:e(()=>[t(N,{text:"신한 123-456-78901234-1234567890-12345"},{default:e(()=>[n(" 123-456-78901234-1234567890-12345 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],2)]),_:1})]),_:1})]),_:1})]),_:1})]),l("section",Oe,[l("div",qe,[ze,l("div",He,[t(p,{classNames:{text:["color-gray","text-body-4"]},underline:"true"},{default:e(()=>[n("변경")]),_:1})])]),t(v,null,{default:e(()=>[t(r,{margin:"regular"},{default:e(()=>[t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[n("청구방법")]),_:1}),t(a,null,{default:e(()=>[n("이메일")]),_:1})]),_:1}),t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[n("청구지")]),_:1}),t(a,null,{default:e(()=>[n("집")]),_:1})]),_:1}),t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[n("주소")]),_:1}),t(a,null,{default:e(()=>[n("서울 서대문구 연희맛로 26 (흡층흔)")]),_:1})]),_:1}),t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[n("연락처")]),_:1}),t(a,null,{default:e(()=>[n("-")]),_:1})]),_:1}),t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[n("휴대전화")]),_:1}),t(a,null,{default:e(()=>[n("010-1234-5678")]),_:1})]),_:1}),t(i,{classNames:{item:"text-body-3"}},{default:e(()=>[t(c,null,{default:e(()=>[n("이메일")]),_:1}),t(a,null,{default:e(()=>[n("hana@test.com")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:2},1024)]),_:1},512),t(q,{ref:"layer001"},null,512)],64)}const De={$style:be},Ze=C(xe,[["render",je],["__cssModules",De]]),Ee={components:{PageContents:ct,BasicButton:H,ButtonList:D,ButtonListItem:Z,LayerMyLoanDetailPaymentAuto:de,LayerMyLoanDetailPaymentVirtual:Ze},setup(){const s=B(null),d=B(null);return{layer001:s,layer002:d,layer001Open:(b={})=>{s.value.layer.open(b.target)},layer002Open:(b={})=>{d.value.layer.open(b.target)}}}},Ge=l("br",null,null,-1),Qe=l("br",null,null,-1);function Se(s,d,f,u,b,A){const y=o("BasicButton"),m=o("ButtonListItem"),x=o("ButtonList"),h=o("LayerMyLoanDetailPaymentAuto"),p=o("LayerMyLoanDetailPaymentVirtual"),c=o("PageContents");return P(),j(c,null,{default:e(()=>[t(x,{classNames:{wrap:"row-margin-none"},align:"full"},{default:e(()=>[t(m,null,{default:e(()=>[t(y,{onClick:u.layer001Open},{default:e(()=>[n("자동이체계좌"),Ge,n("My_M01_p004")]),_:1},8,["onClick"])]),_:1}),t(m,null,{default:e(()=>[t(y,{onClick:u.layer002Open},{default:e(()=>[n("가상계좌"),Qe,n("My_M01_p004")]),_:1},8,["onClick"])]),_:1})]),_:1}),t(h,{ref:"layer001"},null,512),t(p,{ref:"layer002"},null,512)]),_:1})}const nl=C(Ee,[["render",Se]]);export{nl as default};
