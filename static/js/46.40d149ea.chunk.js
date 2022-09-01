(this.webpackJsonpisave=this.webpackJsonpisave||[]).push([[46],{747:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var r=n(0),a=n.n(r),i=n(3),c=n(31),s=n(5),o=n.n(s),l=n(12),u=n(22),f=n(7),x=n(84),j=n(1),h={confirmVerification:function(){var e=Object(i.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.getToken();case 3:return e.next=5,Object(f.a)({}).post("/verify-email",t);case 5:return n=e.sent,e.abrupt("return",j.a.handleHTTPResponse(n,!1,!1));case 9:e.prev=9,e.t0=e.catch(0),u.a.modalError(e.t0.toString());case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),resendVerification:function(){var e=Object(i.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.getToken();case 3:return e.next=5,Object(f.a)({}).post("/resend-verification",t);case 5:return n=e.sent,e.abrupt("return",j.a.handleHTTPResponse(n,!1,!1));case 9:e.prev=9,e.t0=e.catch(0),u.a.modalError(e.t0.toString());case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},d=h,m=n(236),p=n(241),b=n(240),v=n(648),O=n(740),g=n(669),y=n(270),k=n(284),w=n(6);function E(e){var t=Object(l.i)(),n=Object(l.j)(),r=n.key,s=n.hash,f=o.a.useState(!1),x=Object(c.a)(f,2),j=x[0],h=x[1],E=o.a.useState(!1),C=Object(c.a)(E,2),S=C[0],T=C[1],V=o.a.useState(""),I=Object(c.a)(V,2),z=I[0],D=I[1],B=o.a.useState(!1),P=Object(c.a)(B,2),A=P[0],F=P[1],R=o.a.useState(!1),q=Object(c.a)(R,2),H=q[0],J=q[1],W=function(){var e=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,F(!0),""!==z){e.next=5;break}return u.a.modalInfo("Please enter your registered email address"),e.abrupt("return",!1);case 5:return e.next=7,d.resendVerification({email:z});case 7:(t=e.sent).error?(J(!1),T(!0),u.a.modalError(t.message)):(J(!0),T(!1)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),u.a.alert(e.t0.toString());case 14:return e.prev=14,F(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}(),G=o.a.useCallback(Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,d.confirmVerification({key:r,hash:s});case 4:e.sent.error?T(!0):T(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),u.a.alert(e.t0.toString());case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])}))),[r,s]);return o.a.useEffect((function(){var e=!1;return e||G(),function(){return e=!0}}),[G]),Object(w.jsx)("div",{children:Object(w.jsx)(m.a,{sx:{height:"100vh"},children:Object(w.jsxs)(m.a,{sx:{height:"100%"},display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[j&&Object(w.jsxs)(m.a,{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",sx:{mt:-35},children:[Object(w.jsx)(p.a,{size:55}),Object(w.jsx)(b.a,{variant:"h5",sx:{mt:2},children:"Verifying Email..."})]}),!j&&!S&&!H&&Object(w.jsxs)(m.a,{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",sx:{mt:-35},children:[Object(w.jsx)(y.p,{color:"#00BFA5",size:100}),Object(w.jsx)(b.a,{variant:"h4",sx:{mt:4},children:"Email Verification Completed"}),Object(w.jsx)(b.a,{variant:"subtitle1",sx:{mt:2},children:"You have completed the email verification process."}),Object(w.jsx)(b.a,{variant:"h5",sx:{mt:2},children:"Thank you for becoming part of us here in Bangko sa Balay Foundation Inc."}),Object(w.jsx)(v.a,{variant:"contained",sx:{mt:2},onClick:function(){return t("/login")},children:"Go to Login"})]}),!j&&S&&!H&&Object(w.jsxs)(m.a,{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",sx:{mt:-35},children:[Object(w.jsx)(y.tb,{color:"#E45570",size:100}),Object(w.jsx)(b.a,{variant:"h4",sx:{mt:4},children:"Email Verification Expired"}),Object(w.jsx)(b.a,{variant:"subtitle1",sx:{mt:2,width:"70%",textAlign:"center"},children:"The verification code have expired but you may request to resend a verification code by entering your registered email here."}),Object(w.jsx)(O.a,{sx:{mt:2,width:400},onChange:function(e){return D(e.target.value)},value:z,variant:"outlined",size:"small",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",type:"email"}),Object(w.jsx)(g.a,{loading:A,variant:"contained",sx:{mt:2},onClick:function(){return W()},children:"Resend Email Verification"})]}),!j&&H&&Object(w.jsxs)(m.a,{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",sx:{mt:-35},children:[Object(w.jsx)(k.p,{color:"#00BFA5",size:100}),Object(w.jsx)(b.a,{variant:"h4",sx:{mt:4},children:"We've sent a new verification link"}),Object(w.jsx)(b.a,{variant:"subtitle1",sx:{mt:2},children:"Please open and check your email to use the link."})]})]})})})}}}]);
//# sourceMappingURL=46.40d149ea.chunk.js.map