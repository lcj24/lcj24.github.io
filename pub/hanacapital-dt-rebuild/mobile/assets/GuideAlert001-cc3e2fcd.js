import{P as u}from"./PageContents-1b537628.js";import{_,B as f,r as B,Q as e,q as d,s as o,g,V as n,W as C}from"./index-1eea696b.js";import{B as k,a as A}from"./ButtonListItem-e178001e.js";import{A as L}from"./AlertSystem-a8db0971.js";import"./PopupTitle-8d75e052.js";import"./PopupText-e6618c65.js";import"./AlertPopup-08852f1c.js";const x={components:{PageContents:u,BasicButton:f,ButtonList:k,ButtonListItem:A,AlertSystem:L},setup(){const s=B(null),a=t=>{s.value.open(t)};return{alert:s,alertOpen001:()=>{a({title:"타이틀",message:`여기에 내용이 표시될 예정입니다.
줄바꿈은 \\n 이용.
세 줄일 경우는 이렿게 표시됩니다.`,buttons:[{callback:t=>{console.log("확인"),t()},closeAfterCallback:()=>{console.log("[확인] 닫는 애니메이션 끝난 후 호출 될 함수")}}]})}}}};function O(s,a,l,t,P,b){const r=e("BasicButton"),c=e("ButtonListItem"),m=e("ButtonList"),p=e("AlertSystem"),i=e("PageContents");return g(),d(i,null,{default:o(()=>[n(m,{classNames:{wrap:"row-margin-none"},align:"full"},{default:o(()=>[n(c,null,{default:o(()=>[n(r,{onClick:t.alertOpen001},{default:o(()=>[C("얼럿")]),_:1},8,["onClick"])]),_:1})]),_:1}),n(p,{ref:"alert"},null,512)]),_:1})}const h=_(x,[["render",O]]);export{h as default};
