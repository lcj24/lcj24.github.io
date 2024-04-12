import{P as ee}from"./PageContents-1b537628.js";import{_ as P,U as z,P as O,z as G,A as U,X as H,C as j,B as T,l as D,r as B,Q as i,g as L,q as V,s as r,V as e,W as l,e as n,n as u}from"./index-1eea696b.js";import{B as C,a as F}from"./ButtonListItem-e178001e.js";import{P as q}from"./PageTextGroup-34c9d709.js";import{I as Q,a as W}from"./InputBlockCell-0eb6abde.js";import{F as X}from"./FormList-7e035edb.js";import{F as J}from"./FormListItem-a3eadc20.js";import{F as K,a as R}from"./FormInvalidMessage-5917c224.js";import{C as re,b as te,a as ae}from"./CheckBoxObject-1defd902.js";import{B as le}from"./BasicSelect-7b7d7940.js";import"./check-70357a5a.js";import"./check-l-f55769c9.js";import"./SelectButton-6ec40963.js";import"./dropdown-3c50f619.js";import"./PopupTitle-8d75e052.js";import"./ToastPopup-1dea88cd.js";import"./ToastPopupHead-1397d9fe.js";const oe={"basic-list":"_basic-list_1kihp_1","basic-list__item":"_basic-list__item_1kihp_6","basic-list__symbol":"_basic-list__symbol_1kihp_19","basic-list__content":"_basic-list__content_1kihp_54","basic-list--regular":"_basic-list--regular_1kihp_59","basic-list--large-margin":"_basic-list--large-margin_1kihp_74","basic-list--medium-margin":"_basic-list--medium-margin_1kihp_77","basic-list--regular-margin":"_basic-list--regular-margin_1kihp_80","basic-list--normal-margin":"_basic-list--normal-margin_1kihp_83","basic-list--small-margin":"_basic-list--small-margin_1kihp_86","basic-list--mini-margin":"_basic-list--mini-margin_1kihp_89","basic-list--none-margin":"_basic-list--none-margin_1kihp_92","basic-list--fixed-width":"_basic-list--fixed-width_1kihp_95"},se={components:{UiLayer:z,PopupButton:O,FullPopup:G,FullPopupHead:U,PageTextGroup:q,PageMainText:H,InputBlock:Q,InputBlockCell:W,BasicInput:j,FormList:X,FormListItem:J,FormInvalid:K,FormInvalidMessage:R,BasicButton:T,ButtonList:C,ButtonListItem:F,CheckBox:re,CheckBoxObject:te,CheckBoxLabelText:ae,BasicSelect:le},setup(){const d=D({addressError001:!1,addressError002:!1,addressError003:!1,addressError004:!1,addressError005:!1,addressError006:!1,addressError007:!1,addressError008:!1,addressError009:!1,addressError010:!1,mailError001:!1,mailError002:!1}),y=B(null);return{state:d,layer:y}}},ie=n("br",null,null,-1),de=n("span",{class:"font-weight-medium"},"계약정보 > 결제/청구정보",-1);function ne(d,y,A,t,b,N){const p=i("PopupButton"),g=i("FullPopupHead"),E=i("PageMainText"),h=i("PageTextGroup"),o=i("BasicInput"),a=i("InputBlockCell"),m=i("BasicButton"),s=i("InputBlock"),_=i("FormInvalidMessage"),f=i("FormInvalid"),c=i("FormListItem"),I=i("CheckBoxObject"),M=i("CheckBoxLabelText"),x=i("CheckBox"),w=i("BasicSelect"),k=i("FormList"),v=i("ButtonListItem"),S=i("ButtonList"),Y=i("FullPopup"),Z=i("UiLayer");return L(),V(Z,{ref:"layer",type:"full"},{default:r($=>[e(Y,null,{head:r(()=>[e(g,null,{right:r(()=>[e(p,{onClick:xe=>$.close()},null,8,["onClick"])]),_:2},1024)]),foot:r(()=>[e(S,{classNames:{wrap:"row-margin-none"}},{default:r(()=>[e(v,null,{default:r(()=>[e(m,null,{default:r(()=>[l("확인")]),_:1})]),_:1})]),_:1})]),default:r(()=>[e(h,null,{default:r(()=>[e(E,null,{default:r(()=>[l(" 변경하실 주소지 정보를"),ie,l(" 입력하세요 ")]),_:1})]),_:1}),n("div",null,[n("ul",{class:u(d.$style["basic-list"])},[n("li",{class:u(d.$style["basic-list__item"])},[n("div",{class:u(d.$style["basic-list__symbol"])},null,2),n("div",{class:u(d.$style["basic-list__content"])}," 청구지의 주소를 확인하고 변경할 수 있어요. ",2)],2),n("li",{class:u(d.$style["basic-list__item"])},[n("div",{class:u(d.$style["basic-list__symbol"])},null,2),n("div",{class:u(d.$style["basic-list__content"])}," 주소 변경 시, 각 계약별로 설정되어 있는 청구지 주소도 함께 변경 돼요. ",2)],2),n("li",{class:u(d.$style["basic-list__item"])},[n("div",{class:u(d.$style["basic-list__symbol"])},null,2),n("div",{class:u(d.$style["basic-list__content"])},[l(" 각 계약별로 설정된 청구지 주소 확인은 "),de,l(" 메뉴를 이용하세요. ")],2)],2)],2)]),e(k,{classNames:{wrap:"row-margin-contents-group"}},{default:r(()=>[e(c,{titleText:"등본지",target:"#layerMyInfoEditAddress001Search"},{default:r(()=>[e(f,{error:t.state.addressError001},{default:r(()=>[e(s,{error:t.state.addressError001},{right:r(()=>[e(m,{size:"mini",theme:"tertiary",id:"layerMyInfoEditAddress001Search"},{default:r(()=>[l("검색")]),_:1})]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"등본지 - 우편번호",defaultValue:"12345",disabled:!0,id:"layerMyInfoEditAddress001"})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError001,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"등본지 - 주소",id:"layerMyInfoEditAddress001_001",defaultValue:"경기 성남시 분당구 중안공원로 20",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError001,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"등본지- 상세주소",id:"llayerMyInfoEditAddress001_002",defaultValue:"하나아파트 853동 4590호",disabled:!0})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(c,{titleText:"실거주지",target:"#layerMyInfoEditAddress002Search"},{default:r(()=>[e(f,{error:t.state.addressError002},{default:r(()=>[e(s,{error:t.state.addressError002},{right:r(()=>[e(m,{size:"mini",theme:"tertiary",id:"layerMyInfoEditAddress002Search"},{default:r(()=>[l("검색")]),_:1})]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"실거주지 - 우편번호",defaultValue:"12345",disabled:!0,id:"layerMyInfoEditAddress002"})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError002,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"실거주지 - 주소",id:"layerMyInfoEditAddress002_001",defaultValue:"경기 성남시 분당구 중안공원로 20",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError002,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"실거주지 - 상세주소",id:"llayerMyInfoEditAddress002_002",defaultValue:"하나아파트 853동 4590호",disabled:!0})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"]),e(x,{id:"layerMyInfoEditAddressCheckBox001",theme:"tertiary",classNames:{wrap:"row-margin-item"}},{default:r(()=>[e(I),e(M,null,{default:r(()=>[l("등본지 주소와 동일")]),_:1})]),_:1})]),_:1}),e(c,{titleText:"직장주소",target:"#layerMyInfoEditAddress003Search"},{default:r(()=>[e(f,{error:t.state.addressError003},{default:r(()=>[e(s,{error:t.state.addressError003},{right:r(()=>[e(m,{size:"mini",theme:"tertiary",id:"layerMyInfoEditAddress003Search"},{default:r(()=>[l("검색")]),_:1})]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"직장주소 - 우편번호",defaultValue:"12345",disabled:!0,id:"layerMyInfoEditAddressAddress003"})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError003,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"직장주소 - 주소",id:"layerMyInfoEditAddress003_001",defaultValue:"경기 성남시 분당구 중안공원로 20",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError003,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"직장주소 - 상세주소",id:"llayerMyInfoEditAddress003_002",defaultValue:"하나아파트 853동 4590호",disabled:!0})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(c,{titleText:"기타주소1",target:"#layerMyInfoEditAddress004Search"},{default:r(()=>[e(f,{error:t.state.addressError004},{default:r(()=>[e(s,{error:t.state.addressError004},{right:r(()=>[e(m,{size:"mini",theme:"tertiary",id:"layerMyInfoEditAddress004Search"},{default:r(()=>[l("검색")]),_:1})]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"기타주소1 - 우편번호",defaultValue:"12345",disabled:!0,id:"layerMyInfoEditAddress004"})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError004,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"기타주소1 - 주소",id:"layerMyInfoEditAddress004_001",defaultValue:"경기 성남시 분당구 중안공원로 20",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError004,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"기타주소1 - 상세주소",id:"llayerMyInfoEditAddress004_002",defaultValue:"하나아파트 853동 4590호",disabled:!0})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(c,{titleText:"기타주소2",target:"#layerMyInfoEditAddress005Search"},{default:r(()=>[e(f,{error:t.state.addressError005},{default:r(()=>[e(s,{error:t.state.addressError005},{right:r(()=>[e(m,{size:"mini",theme:"tertiary",id:"layerMyInfoEditAddress005Search"},{default:r(()=>[l("검색")]),_:1})]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"기타주소2 - 우편번호",defaultValue:"12345",disabled:!0,id:"layerMyInfoEditAddress005"})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError005,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"기타주소2 - 주소",id:"layerMyInfoEditAddress005_001",defaultValue:"경기 성남시 분당구 중안공원로 20",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError005,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"기타주소2 - 상세주소",id:"llayerMyInfoEditAddress005_002",defaultValue:"하나아파트 853동 4590호",disabled:!0})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(c,{titleText:"이메일",target:"#layerMyInfoEditAddressEmailId001"},{default:r(()=>[e(f,{error:t.state.mailError001},{default:r(()=>[e(s,{error:t.state.mailError001},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"이메일 아이디",id:"layerMyInfoEditAddressEmailId001"})]),_:1}),e(a,{margin:"regular"},{default:r(()=>[l("@")]),_:1}),e(a,{margin:"regular",flexible:!0},{default:r(()=>[e(w,{option:[{value:"1",text:"naver.com"},{value:"2",text:"hanmail.net"},{value:"3",text:"gmail.com"},{value:"4",text:"nate.com"},{value:"5",text:"paran.com"},{value:"6",text:"dreamwiz.com"},{value:"7",text:"yahoo.com"},{value:"8",text:"freechal.com"},{value:"9",text:"직접입력"}],buttonTitle:"이메일 도메인 선택하기",layerTitle:"도메인을 선택해 주세요"},null,8,["option"])]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.mailError001,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"이메일 도메인 직접입력",id:"layerMyInfoEditAddressEmailDomainSelf001"})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(c,{titleText:"사업장",target:"#layerMyInfoEditAddress006Search"},{default:r(()=>[e(f,{error:t.state.addressError006},{default:r(()=>[e(s,{error:t.state.addressError006},{right:r(()=>[e(m,{size:"mini",theme:"tertiary",id:"layerMyInfoEditAddress006Search"},{default:r(()=>[l("검색")]),_:1})]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"사업장 - 우편번호",defaultValue:"12345",disabled:!0,id:"layerMyInfoEditAddress006"})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError006,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"사업장 - 주소",id:"layerMyInfoEditAddress006_001",defaultValue:"서울 강남구 역삼동",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError006,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"사업장 - 상세주소",id:"llayerMyInfoEditAddress006_002",defaultValue:"하나금융그룹 강남사옥 1층",disabled:!0})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(c,{titleText:"본점",target:"#layerMyInfoEditAddress007Search"},{default:r(()=>[e(f,{error:t.state.addressError007},{default:r(()=>[e(s,{error:t.state.addressError007},{right:r(()=>[e(m,{size:"mini",theme:"tertiary",id:"layerMyInfoEditAddress007Search"},{default:r(()=>[l("검색")]),_:1})]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"본점 - 우편번호",defaultValue:"12345",disabled:!0,id:"layerMyInfoEditAddress007"})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError007,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"본점 - 주소",id:"layerMyInfoEditAddress007_001",defaultValue:"서울 강남구 역삼동",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError007,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"본점 - 상세주소",id:"llayerMyInfoEditAddress007_002",defaultValue:"하나금융그룹 강남사옥 1층",disabled:!0})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"]),e(x,{id:"layerMyInfoEditAddressCheckBox002",theme:"tertiary",classNames:{wrap:"row-margin-item"}},{default:r(()=>[e(I),e(M,null,{default:r(()=>[l("사업장 주소와 동일")]),_:1})]),_:1})]),_:1}),e(c,{titleText:"등본지",target:"#layerMyInfoEditAddress008Search"},{default:r(()=>[e(f,{error:t.state.addressError008},{default:r(()=>[e(s,{error:t.state.addressError008},{right:r(()=>[e(m,{size:"mini",theme:"tertiary",id:"layerMyInfoEditAddress008Search"},{default:r(()=>[l("검색")]),_:1})]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"등본지 - 우편번호",defaultValue:"12345",disabled:!0,id:"layerMyInfoEditAddress008"})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError008,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"등본지 - 주소",id:"layerMyInfoEditAddress008_001",defaultValue:"서울 강남구 역삼동",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError008,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"등본지 - 상세주소",id:"llayerMyInfoEditAddress008_002",defaultValue:"하나금융그룹 강남사옥 1층",disabled:!0})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(c,{titleText:"실거주지",target:"#layerMyInfoEditAddress009Search"},{default:r(()=>[e(f,{error:t.state.addressError009},{default:r(()=>[e(s,{error:t.state.addressError009},{right:r(()=>[e(m,{size:"mini",theme:"tertiary",id:"layerMyInfoEditAddress009Search"},{default:r(()=>[l("검색")]),_:1})]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"실거주지 - 우편번호",defaultValue:"12345",disabled:!0,id:"layerMyInfoEditAddress009"})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError009,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"실거주지- 주소",id:"layerMyInfoEditAddress009_001",defaultValue:"서울 강남구 역삼동",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError009,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"실거주지 - 상세주소",id:"llayerMyInfoEditAddress009_002",defaultValue:"하나금융그룹 강남사옥 1층",disabled:!0})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"]),e(x,{id:"layerMyInfoEditAddressCheckBox003",theme:"tertiary",classNames:{wrap:"row-margin-item"}},{default:r(()=>[e(I),e(M,null,{default:r(()=>[l("등본지 주소와 동일")]),_:1})]),_:1})]),_:1}),e(c,{titleText:"기타주소",target:"#layerMyInfoEditAddress010Search"},{default:r(()=>[e(f,{error:t.state.addressError010},{default:r(()=>[e(s,{error:t.state.addressError010},{right:r(()=>[e(m,{size:"mini",theme:"tertiary",id:"layerMyInfoEditAddress010Search"},{default:r(()=>[l("검색")]),_:1})]),default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"기타주소 - 우편번호",defaultValue:"12345",disabled:!0,id:"layerMyInfoEditAddress010"})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError005,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"기타주소 - 주소",id:"layerMyInfoEditAddress010_001",defaultValue:"경기 성남시 분당구 중안공원로 20",disabled:!0})]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.addressError010,disabled:!0,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"기타주소 - 상세주소",id:"llayerMyInfoEditAddress010_002",defaultValue:"하나아파트 853동 4590호",disabled:!0})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(c,{titleText:"이메일",target:"#layerMyInfoEditAddressEmailId002"},{default:r(()=>[e(f,{error:t.state.mailError002},{default:r(()=>[e(s,{error:t.state.mailError002},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"이메일 아이디",id:"layerMyInfoEditAddressEmailId002"})]),_:1}),e(a,{margin:"regular"},{default:r(()=>[l("@")]),_:1}),e(a,{margin:"regular",flexible:!0},{default:r(()=>[e(w,{option:[{value:"1",text:"naver.com"},{value:"2",text:"hanmail.net"},{value:"3",text:"gmail.com"},{value:"4",text:"nate.com"},{value:"5",text:"paran.com"},{value:"6",text:"dreamwiz.com"},{value:"7",text:"yahoo.com"},{value:"8",text:"freechal.com"},{value:"9",text:"직접입력"}],buttonTitle:"이메일 도메인 선택하기",layerTitle:"도메인을 선택해 주세요"},null,8,["option"])]),_:1})]),_:1},8,["error"]),e(s,{error:t.state.mailError,classNames:{wrap:"row-margin-item-group row-margin-bottom-none"}},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{title:"이메일 도메인 직접입력",id:"layerMyInfoEditAddressEmailDomainSelf002"})]),_:1})]),_:1},8,["error"]),e(_,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),_:2},1024)]),_:1},512)}const ue={$style:oe},_e=P(se,[["render",ne],["__cssModules",ue]]),fe={"basic-list":"_basic-list_1kihp_1","basic-list__item":"_basic-list__item_1kihp_6","basic-list__symbol":"_basic-list__symbol_1kihp_19","basic-list__content":"_basic-list__content_1kihp_54","basic-list--regular":"_basic-list--regular_1kihp_59","basic-list--large-margin":"_basic-list--large-margin_1kihp_74","basic-list--medium-margin":"_basic-list--medium-margin_1kihp_77","basic-list--regular-margin":"_basic-list--regular-margin_1kihp_80","basic-list--normal-margin":"_basic-list--normal-margin_1kihp_83","basic-list--small-margin":"_basic-list--small-margin_1kihp_86","basic-list--mini-margin":"_basic-list--mini-margin_1kihp_89","basic-list--none-margin":"_basic-list--none-margin_1kihp_92","basic-list--fixed-width":"_basic-list--fixed-width_1kihp_95"},me={components:{UiLayer:z,PopupButton:O,FullPopup:G,FullPopupHead:U,PageTextGroup:q,PageMainText:H,InputBlock:Q,InputBlockCell:W,BasicInput:j,FormList:X,FormListItem:J,FormInvalid:K,FormInvalidMessage:R,BasicButton:T,ButtonList:C,ButtonListItem:F},setup(){const d=D({phoneError001:!1,phoneError002:!1,phoneError003:!1,phoneError004:!1,phoneError005:!1,phoneError006:!1,phoneError007:!1,phoneError008:!1,phoneError009:!1}),y=B(null);return{state:d,layer:y}}},ce=n("br",null,null,-1),ye=n("span",{class:"font-weight-medium"},"대출상세 > 결제/청구 정보",-1);function be(d,y,A,t,b,N){const p=i("PopupButton"),g=i("FullPopupHead"),E=i("PageMainText"),h=i("PageTextGroup"),o=i("BasicInput"),a=i("InputBlockCell"),m=i("InputBlock"),s=i("FormInvalidMessage"),_=i("FormInvalid"),f=i("FormListItem"),c=i("FormList"),I=i("BasicButton"),M=i("ButtonListItem"),x=i("ButtonList"),w=i("FullPopup"),k=i("UiLayer");return L(),V(k,{ref:"layer",type:"full"},{default:r(v=>[e(w,null,{head:r(()=>[e(g,null,{right:r(()=>[e(p,{onClick:S=>v.close()},null,8,["onClick"])]),_:2},1024)]),foot:r(()=>[e(x,{classNames:{wrap:"row-margin-none"}},{default:r(()=>[e(M,null,{default:r(()=>[e(I,null,{default:r(()=>[l("확인")]),_:1})]),_:1})]),_:1})]),default:r(()=>[e(h,null,{default:r(()=>[e(E,null,{default:r(()=>[l(" 변경하실 연락처 정보를"),ce,l(" 입력하세요 ")]),_:1})]),_:1}),n("div",null,[n("ul",{class:u(d.$style["basic-list"])},[n("li",{class:u(d.$style["basic-list__item"])},[n("div",{class:u(d.$style["basic-list__symbol"])},null,2),n("div",{class:u(d.$style["basic-list__content"])}," SMS안내 수신 시 사용할 연락처를 확인하시고 변경할 수 있어요. ",2)],2),n("li",{class:u(d.$style["basic-list__item"])},[n("div",{class:u(d.$style["basic-list__symbol"])},null,2),n("div",{class:u(d.$style["basic-list__content"])}," 연락처 변경 시, 각 계약별로 설정되어 있는 SMS안내 연락처도 함께 변경 돼요. ",2)],2),n("li",{class:u(d.$style["basic-list__item"])},[n("div",{class:u(d.$style["basic-list__symbol"])},null,2),n("div",{class:u(d.$style["basic-list__content"])},[l(" 각 계약별로 설정된 SMS안내 확인은 "),ye,l(" 메뉴를 이용하세요. ")],2)],2),n("li",{class:u(d.$style["basic-list__item"])},[n("div",{class:u(d.$style["basic-list__symbol"])},null,2),n("div",{class:u(d.$style["basic-list__content"])}," 스탁론은 고객센터 1800-1110을 통해 변경하세요. ",2)],2)],2)]),e(c,{classNames:{wrap:"row-margin-contents-group"}},{default:r(()=>[e(f,{titleText:"휴대전화",target:"#layerMyInfoEditPhone001"},{default:r(()=>[e(_,{error:t.state.phoneError001},{default:r(()=>[e(m,{error:t.state.phoneError001},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{type:"number",pattern:"\\d*",title:"휴대전화",id:"layerMyInfoEditPhone001"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"자택전화",target:"#layerMyInfoEditPhone002"},{default:r(()=>[e(_,{error:t.state.phoneError002},{default:r(()=>[e(m,{error:t.state.phoneError002},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{type:"number",pattern:"\\d*",title:"자택전화",id:"layerMyInfoEditPhone002"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"직장전화",target:"#layerMyInfoEditPhone003"},{default:r(()=>[e(_,{error:t.state.phoneError003},{default:r(()=>[e(m,{error:t.state.phoneError003},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{type:"number",pattern:"\\d*",title:"직장전화",id:"layerMyInfoEditPhone003"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"대표자 사무실",target:"#layerMyInfoEditPhone004"},{default:r(()=>[e(_,{error:t.state.phoneError004},{default:r(()=>[e(m,{error:t.state.phoneError004},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{type:"number",pattern:"\\d*",title:"대표자 사무실",id:"layerMyInfoEditPhone004"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"대표자 휴대전화",target:"#layerMyInfoEditPhone005"},{default:r(()=>[e(_,{error:t.state.phoneError005},{default:r(()=>[e(m,{error:t.state.phoneError005},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{type:"number",pattern:"\\d*",title:"대표자 휴대전화",id:"layerMyInfoEditPhone005"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"담당자1 사무실",target:"#layerMyInfoEditPhone006"},{default:r(()=>[e(_,{error:t.state.phoneError006},{default:r(()=>[e(m,{error:t.state.phoneError006},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{type:"number",pattern:"\\d*",title:"담당자1 사무실",id:"layerMyInfoEditPhone006"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"담당자1 휴대전화",target:"#layerMyInfoEditPhone007"},{default:r(()=>[e(_,{error:t.state.phoneError007},{default:r(()=>[e(m,{error:t.state.phoneError007},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{type:"number",pattern:"\\d*",title:"담당자1 휴대전화",id:"layerMyInfoEditPhone007"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"담당자2 사무실",target:"#layerMyInfoEditPhone008"},{default:r(()=>[e(_,{error:t.state.phoneError008},{default:r(()=>[e(m,{error:t.state.phoneError008},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{type:"number",pattern:"\\d*",title:"담당자2 사무실",id:"layerMyInfoEditPhone008"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1}),e(f,{titleText:"담당자2 휴대전화",target:"#layerMyInfoEditPhone009"},{default:r(()=>[e(_,{error:t.state.phoneError009},{default:r(()=>[e(m,{error:t.state.phoneError009},{default:r(()=>[e(a,{flexible:!0},{default:r(()=>[e(o,{type:"number",pattern:"\\d*",title:"담당자2 휴대전화",id:"layerMyInfoEditPhone009"})]),_:1})]),_:1},8,["error"]),e(s,null,{default:r(()=>[l("Error Message")]),_:1})]),_:1},8,["error"])]),_:1})]),_:1})]),_:2},1024)]),_:1},512)}const pe={$style:fe},ge=P(me,[["render",be],["__cssModules",pe]]),Ee={components:{PageContents:ee,BasicButton:T,ButtonList:C,ButtonListItem:F,LayerMyInfoEditAddress:_e,LayerMyInfoEditPhone:ge},setup(){const d=B(null),y=B(null);return{layer001:d,layer002:y,layer001Open:(b={})=>{d.value.layer.open(b.target)},layer002Open:(b={})=>{y.value.layer.open(b.target)}}}},he=n("br",null,null,-1),Ie=n("br",null,null,-1);function Me(d,y,A,t,b,N){const p=i("BasicButton"),g=i("ButtonListItem"),E=i("ButtonList"),h=i("LayerMyInfoEditAddress"),o=i("LayerMyInfoEditPhone"),a=i("PageContents");return L(),V(a,null,{default:r(()=>[e(E,{classNames:{wrap:"row-margin-none"},align:"full"},{default:r(()=>[e(g,null,{default:r(()=>[e(p,{onClick:t.layer001Open},{default:r(()=>[l(" 주소지변경"),he,l("MI_M01_l001 ")]),_:1},8,["onClick"])]),_:1}),e(g,null,{default:r(()=>[e(p,{onClick:t.layer002Open},{default:r(()=>[l(" 연락처변경"),Ie,l("MI_M01_l003 ")]),_:1},8,["onClick"])]),_:1})]),_:1}),e(h,{ref:"layer001"},null,512),e(o,{ref:"layer002"},null,512)]),_:1})}const He=P(Ee,[["render",Me]]);export{He as default};
