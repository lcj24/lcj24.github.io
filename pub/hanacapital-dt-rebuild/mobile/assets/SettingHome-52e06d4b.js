import{_ as h,R as y,D as k,Z as b,o as $,b as w,Q as n,q as f,s as l,g as B,e as t,n as i,V as e,W as o}from"./index-a5325df6.js";import{P as U}from"./PageContents-1d774df1.js";import{S as N}from"./SwitchCheckBox-dd3369ee.js";import{B as A,I}from"./tooltip-6bc976a5.js";import{U as C,a as T,b as L,c as S}from"./UiAccordionOpener-e8b2f0e9.js";import"./dropdown-c1f0bf3b.js";const H="_version_g6mko_272",R="_version__inner_g6mko_277",P="_version__title_g6mko_282",V="_version__info_g6mko_290",D={"switch-list__title":"_switch-list__title_g6mko_1","switch-list":"_switch-list_g6mko_1","switch-list__item":"_switch-list__item_g6mko_10","switch-list__right":"_switch-list__right_g6mko_55","switch-list__check":"_switch-list__check_g6mko_62","switch-list__tip":"_switch-list__tip_g6mko_66","tooltip-section":"_tooltip-section_g6mko_71","tooltip-section__title":"_tooltip-section__title_g6mko_74","tooltip-section__text":"_tooltip-section__text_g6mko_83","basic-list":"_basic-list_g6mko_93","basic-list__item":"_basic-list__item_g6mko_98","basic-list__symbol":"_basic-list__symbol_g6mko_111","basic-list__content":"_basic-list__content_g6mko_146","basic-list--regular":"_basic-list--regular_g6mko_151","basic-list--large-margin":"_basic-list--large-margin_g6mko_166","basic-list--medium-margin":"_basic-list--medium-margin_g6mko_169","basic-list--regular-margin":"_basic-list--regular-margin_g6mko_172","basic-list--normal-margin":"_basic-list--normal-margin_g6mko_175","basic-list--small-margin":"_basic-list--small-margin_g6mko_178","basic-list--mini-margin":"_basic-list--mini-margin_g6mko_181","basic-list--none-margin":"_basic-list--none-margin_g6mko_184","basic-list--fixed-width":"_basic-list--fixed-width_g6mko_187","nav-menu__link":"_nav-menu__link_g6mko_191","nav-menu__list":"_nav-menu__list_g6mko_195","nav-menu__item":"_nav-menu__item_g6mko_200","nav-menu__head":"_nav-menu__head_g6mko_239","nav-menu__right":"_nav-menu__right_g6mko_247","nav-menu__opener":"_nav-menu__opener_g6mko_252","nav-menu__list--depth":"_nav-menu__list--depth_g6mko_260",version:H,version__inner:R,version__title:P,version__info:V},M={components:{PageContents:U,SwitchCheckBox:N,BasicTooltip:A,RouterLink:y,BasicHr:k,UiAccordion:C,UiAccordionItem:T,UiAccordionLayer:L,UiAccordionOpener:S,IconTooltip:I},setup(){const s={ui:{header:b()}};$(()=>{s.ui.header.setTitle(()=>"설정"),s.ui.header.setLeftButtons(()=>["back"]),s.ui.header.setRightButtons(()=>[])}),w(()=>{s.ui.header.setTitle(),s.ui.header.setLeftButtons(),s.ui.header.setRightButtons()})}},O=t("span",{class:"for-a11y"},"(도움말)",-1),F=t("h3",{class:"text-title-2 row-margin-contents"},"인증센터",-1);function q(s,Q,W,Z,j,E){const a=n("IconTooltip"),c=n("BasicTooltip"),m=n("SwitchCheckBox"),_=n("RouterLink"),r=n("BasicHr"),u=n("UiAccordionOpener"),g=n("UiAccordionLayer"),d=n("UiAccordionItem"),v=n("UiAccordion"),p=n("PageContents");return B(),f(p,null,{default:l(()=>[t("ul",{class:i(s.$style["switch-list"])},[t("li",{class:i(s.$style["switch-list__item"])},[t("div",{class:i(s.$style["switch-list__title"])},"자동로그인 설정",2),e(c,{placement:"bottom",classNames:{wrap:s.$style["switch-list__tip"]}},{contents:l(()=>[t("section",{class:i(s.$style["tooltip-section"])},[t("h3",{class:i(s.$style["tooltip-section__title"])},"자동로그인 설정",2),t("ul",{class:i([s.$style["basic-list"],s.$style["basic-list--mini-margin"]])},[t("li",{class:i([s.$style["basic-list__item"],"color-white"])},[t("div",{class:i(s.$style["basic-list__symbol"])},null,2),t("div",{class:i(s.$style["basic-list__content"])}," 자동로그인 설정을 위해서는 간편비밀번호, 얼굴인증, 지문인증(Face ID)가 필요합니다. ",2)],2),t("li",{class:i([s.$style["basic-list__item"],"color-white"])},[t("div",{class:i(s.$style["basic-list__symbol"])},null,2),t("div",{class:i(s.$style["basic-list__content"])}," 보안을 위해 기기의 화면잠금 설정이 되어 있는 경우에만 설정이 가능합니다. ",2)],2)],2)],2)]),default:l(()=>[e(a,{class:"display-block"}),O]),_:1},8,["classNames"]),t("div",{class:i(s.$style["switch-list__right"])},[e(m,{id:"autoSignIn",classNames:{wrap:s.$style["switch-list__check"]}},null,8,["classNames"])],2)],2),t("li",{class:i(s.$style["switch-list__item"])},[e(_,{to:"/setting/push",class:i(s.$style["switch-list__title"])},{default:l(()=>[o("PUSH 알림 설정")]),_:1},8,["class"])],2)],2),e(r,{className:"row-margin-container"}),t("section",null,[F,t("div",{class:i(s.$style["nav-menu"])},[e(v,{classNames:{wrap:s.$style["nav-menu__list"]}},{default:l(()=>[e(d,{classNames:{item:[s.$style["nav-menu__item"]]}},{default:l(()=>[t("div",{class:i(s.$style["nav-menu__head"])},[t("div",{class:i(s.$style["nav-menu__link"])},"공동인증서 관리",2),t("div",{class:i(s.$style["nav-menu__right"])},[e(u,{classNames:{button:s.$style["nav-menu__opener"]}},null,8,["classNames"])],2)],2),e(g,null,{default:l(()=>[t("ul",{class:i([s.$style["nav-menu__list"],s.$style["nav-menu__list--depth"]])},[t("li",{class:i(s.$style["nav-menu__item"])},[e(_,{to:"/setting/certificate-import",class:i(s.$style["nav-menu__link"])},{default:l(()=>[o("인증서 가져오기")]),_:1},8,["class"])],2),t("li",{class:i(s.$style["nav-menu__item"])},[e(_,{to:"/setting/certificate-export",class:i(s.$style["nav-menu__link"])},{default:l(()=>[o("인증서 내보내기")]),_:1},8,["class"])],2)],2)]),_:1})]),_:1},8,["classNames"]),t("li",{class:i(s.$style["nav-menu__item"])},[t("button",{type:"button",class:i(s.$style["nav-menu__link"])}," 간편비밀번호 (재)등록 ",2)],2),t("li",{class:i(s.$style["nav-menu__item"])},[t("button",{type:"button",class:i(s.$style["nav-menu__link"])}," 얼굴인증 (재)등록 ",2)],2),t("li",{class:i(s.$style["nav-menu__item"])},[t("button",{type:"button",class:i(s.$style["nav-menu__link"])}," 지문인증 (재)등록 ",2)],2),t("li",{class:i(s.$style["nav-menu__item"])},[t("button",{type:"button",class:i(s.$style["nav-menu__link"])}," Face ID (재)등록 ",2)],2),t("li",{class:i(s.$style["nav-menu__item"])},[e(_,{to:"",class:i(s.$style["nav-menu__link"])},{default:l(()=>[o(" 하나원사인 이용안내 ")]),_:1},8,["class"])],2)]),_:1},8,["classNames"])],2)]),t("div",{class:i(s.$style.version)},[t("div",{class:i(s.$style.version__inner)},[t("div",{class:i(s.$style.version__title)},"앱버전",2),t("div",{class:i(s.$style.version__info)},"1.0",2)],2)],2)]),_:1})}const z={$style:D},ss=h(M,[["render",q],["__cssModules",z]]);export{ss as default};
