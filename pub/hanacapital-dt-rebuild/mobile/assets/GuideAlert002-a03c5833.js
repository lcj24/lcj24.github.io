import{P as p}from"./PageContents-1d774df1.js";import{_,B as f,r as B,Q as e,q as d,s as o,g,V as n,W as C}from"./index-a5325df6.js";import{B as k,a as A}from"./ButtonListItem-dbafa401.js";import{A as x}from"./AlertSystem-1b25d822.js";import"./PopupTitle-35626e75.js";import"./PopupText-41ff3eff.js";import"./AlertPopup-b817ca5a.js";const L={components:{PageContents:p,BasicButton:f,ButtonList:k,ButtonListItem:A,AlertSystem:x},setup(){const s=B(null),a=t=>{s.value.open(t)};return{alert:s,alertOpen001:()=>{a({title:"타이틀",message:`여기에 내용이 표시될 예정입니다.
줄바꿈은 \\n 이용.
세 줄일 경우는 이렿게 표시됩니다.`,buttons:[{text:"취소",theme:"quaternary",line:!0,callback:t=>{console.log("취소"),t()},closeAfterCallback:()=>{console.log("[취소] 닫는 애니메이션 끝난 후 호출 될 함수")}},{callback:t=>{console.log("확인"),t()},closeAfterCallback:()=>{console.log("[확인] 닫는 애니메이션 끝난 후 호출 될 함수")}}]})}}}};function b(s,a,l,t,y,O){const r=e("BasicButton"),c=e("ButtonListItem"),m=e("ButtonList"),u=e("AlertSystem"),i=e("PageContents");return g(),d(i,null,{default:o(()=>[n(m,{classNames:{wrap:"row-margin-none"},align:"full"},{default:o(()=>[n(c,null,{default:o(()=>[n(r,{onClick:t.alertOpen001},{default:o(()=>[C("얼럿")]),_:1},8,["onClick"])]),_:1})]),_:1}),n(u,{ref:"alert"},null,512)]),_:1})}const $=_(L,[["render",b]]);export{$ as default};
