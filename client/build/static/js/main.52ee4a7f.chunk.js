(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{111:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),m=t.n(l),c=(t(88),t(148)),s=t(156),i=t(147),o=t(72),u=t(141),E=t(144),d=t(53),b=t(28),h=t(12),p=t(73),g=t(11),f=t(145),N=t(149),y=t(150),x=t(151),v=t(152),O=t(153),S=t(154),j=t(155),k=t(22),M=t.n(k),C=Object(u.a)((function(e){return{typography:{textAlign:"center"},table:{minWidth:650},topper:{color:"green"},pass:{color:"black"},fail:{color:"red"},heading:{fontWeight:"bold"},subHeading:{fontStyle:"italic"}}})),A=Object(o.a)({palette:{primary:d.a}}),w=function(){var e=C(),a=Object(n.useState)([]),t=Object(g.a)(a,2),l=t[0],m=t[1],s=Object(n.useState)(""),o=Object(g.a)(s,2),u=o[0],d=o[1];return Object(n.useEffect)((function(){M.a.get("https://student-notice-board.herokuapp.com//getResults").then((function(a){if(console.log("data.message ---\x3e ",a.data.message),a.data.message&&0!==a.data.message.length){var t=function(a){var t=a.map((function(e){return e.name}));t.sort();var n=[];t.forEach((function(e){a.forEach((function(a){a.name===e&&n.push(a)}))})),n=function(e){return e.forEach((function(e){for(var a=e.name.split(" ")[0],t=a.charAt(0).toUpperCase(),n=1;n<a.length;n++)t+=a.charAt(n);e.name=t})),e}(n),console.log("dataArray ---\x3e ",n);var r=n.map((function(a){var t={};t.name=a.name,t.rollNumber=a.rollNumber;var n=0;for(var r in a.marks)n+=Number(a.marks[r]);t.totalMarks=n;var l="",m="";for(var c in a.marks){if(Number(a.marks[c])<20){l="Fail",m=e.fail;break}l="Pass",m=e.pass}return t.status=l,t.color=m,t})),l=r.map((function(e){return e.totalMarks})),m=Math.max.apply(Math,Object(p.a)(l)),c=l.indexOf(m);return r[c].status="Topper",r[c].color=e.topper,r}(a.data.message);m(t),d("")}})).catch((function(e){d(e.response.data.message)}))}),[e.pass,e.fail,e.topper]),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{theme:A},r.a.createElement("br",null),r.a.createElement(f.a,{color:"primary",variant:"h4",className:e.typography},"STUDENT RESULT BOARD"),r.a.createElement("br",null),r.a.createElement(i.a,null),r.a.createElement("br",null),r.a.createElement(c.a,{container:!0,direction:"row"},r.a.createElement(c.a,{item:!0,xs:!1,md:1}),r.a.createElement(c.a,{item:!0,xs:12,md:10},0===u.length?r.a.createElement(N.a,{component:y.a,elevation:0},r.a.createElement(x.a,{className:e.table,size:"small"},r.a.createElement(v.a,null,r.a.createElement(O.a,null,r.a.createElement(S.a,{className:e.heading},"STUDENT RESULT BOARD"),r.a.createElement(S.a,null),r.a.createElement(S.a,null),r.a.createElement(S.a,null)),r.a.createElement(O.a,null,r.a.createElement(S.a,{className:e.subHeading},"Student Name"),r.a.createElement(S.a,{className:e.subHeading,align:"right"},"Roll Number"),r.a.createElement(S.a,{className:e.subHeading,align:"right"},"Total Marks"),r.a.createElement(S.a,{className:e.subHeading,align:"right"},"Status"))),r.a.createElement(j.a,null,l.map((function(e){return r.a.createElement(O.a,{key:e.name},r.a.createElement(S.a,{component:"th",scope:"row",className:e.color},e.name),r.a.createElement(S.a,{align:"right",className:e.color},e.rollNumber),r.a.createElement(S.a,{align:"right",className:e.color},e.totalMarks),r.a.createElement(S.a,{align:"right",className:e.color},e.status))}))))):r.a.createElement(f.a,{style:{color:"red"},variant:"h6",className:e.typography},u)),r.a.createElement(c.a,{item:!0,xs:!1,md:1}))))},L=t(30),T=t(34),R=t(157),F=t(160),W=t(158);function D(e){return r.a.createElement(W.a,Object.assign({elevation:6,variant:"filled"},e))}var Y=Object(u.a)({typography:{textAlign:"center"},errorTypography:{color:"red",marginLeft:"10px",textAlign:"center"},textfield:{margin:"10px"}}),I=Object(o.a)({palette:{primary:d.a}}),H=function(e){var a=e.history,t=Y(),l=Object(n.useState)(!1),m=Object(g.a)(l,2),o=m[0],u=m[1],d=function(e,a){"clickaway"!==a&&u(!1)},b=Object(n.useState)(""),h=Object(g.a)(b,2),p=h[0],N=h[1],y=Object(n.useState)(""),x=Object(g.a)(y,2),v=x[0],O=x[1],S=Object(n.useState)({Name:"",LastName:"",Class:"",Year:"",Marks:""}),j=Object(g.a)(S,2),k=j[0],C=j[1],A=Object(n.useState)({Name:"",LastName:"",Class:"",Year:"",Marks:""}),w=Object(g.a)(A,2),W=w[0],H=w[1],q=Object(n.useState)({Name:!1,LastName:!1,Class:!1,Year:!1,Marks:!1,buttonActive:!1}),U=Object(g.a)(q,2),z=U[0],P=U[1],B=Object(n.useState)({Name:!1,LastName:!1,Class:!1,Year:!1,Marks:!1}),G=Object(g.a)(B,2),Z=G[0],$=G[1],J=function(e){var a=e.target,t=a.name,n=a.value;C(Object(T.a)(Object(T.a)({},k),{},Object(L.a)({},t,n))),K(t,n)},K=function(e,a){var t=W,n=z,r=Z,l=new RegExp(/^[A-Za-z ]+$/),m=new RegExp(/^[0-9]{1,}[A-Za-z]{0,}$/);switch(e){case"Name":case"LastName":0===a.length?(t[e]="Field Required",n[e]=!1,r[e]=!0):a.length>20?(t[e]="Length can not be more that 20",n[e]=!1,r[e]=!0):l.test(a)?(t[e]="",n[e]=!0,r[e]=!1):(t[e]="Only alphabets are allowed",n[e]=!1,r[e]=!0);break;case"Class":0===a.length?(t[e]="Field Required",n[e]=!1,r[e]=!0):m.test(a)?(t[e]="",n[e]=!0,r[e]=!1):(t[e]="Only alphabets and numbers are allowed",n[e]=!1,r[e]=!0);break;case"Year":0===a.length&&(t[e]="Field Required",n[e]=!1,r[e]=!0),Number(a)>2017?(t[e]="Year of passing should not be after 2017",n[e]=!1,r[e]=!0):(t[e]="",n[e]=!0,r[e]=!1);break;case"Marks":0===a.length&&(t[e]="Field Required",n[e]=!1,r[e]=!0),Number(a)<0||Number(a)>100?(t[e]="Percentage of marks should be between 0 to 100",n[e]=!1,r[e]=!0):(t[e]="",n[e]=!0,r[e]=!1)}n.buttonActive=n.Name&&n.LastName&&n.Class&&n.Year&&n.Marks,H(t),P(n),$(r)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{theme:I},r.a.createElement("br",null),r.a.createElement(f.a,{color:"primary",variant:"h4",className:t.typography},"SCHOOL ADMISSION FORM"),r.a.createElement("br",null),r.a.createElement(i.a,null),r.a.createElement("br",null),r.a.createElement(c.a,{container:!0,direction:"row"},r.a.createElement(c.a,{item:!0,xs:!1,md:1}),r.a.createElement(c.a,{item:!0,xs:12,md:10},r.a.createElement("form",null,r.a.createElement(c.a,{container:!0,direction:"row"},r.a.createElement(c.a,{item:!0,xs:11,md:4},r.a.createElement(R.a,{value:k.Name,error:Z.Name,onChange:J,className:t.textfield,fullWidth:!0,variant:"outlined",name:"Name",type:"text",label:"First Name"}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:"button",className:t.errorTypography},W.Name)),r.a.createElement(c.a,{item:!0,xs:11,md:4},r.a.createElement(R.a,{value:k.LastName,error:Z.LastName,onChange:J,className:t.textfield,fullWidth:!0,variant:"outlined",name:"LastName",type:"text",label:"Last Name"}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:"button",className:t.errorTypography},W.LastName)),r.a.createElement(c.a,{item:!0,xs:11,md:4},r.a.createElement(R.a,{value:k.Class,error:Z.Class,onChange:J,className:t.textfield,fullWidth:!0,variant:"outlined",name:"Class",type:"text",label:"Class"}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:"button",className:t.errorTypography},W.Class))),r.a.createElement("br",null),r.a.createElement(i.a,null),r.a.createElement("br",null),r.a.createElement(c.a,{container:!0,direction:"row"},r.a.createElement(c.a,{item:!0,xs:!1,md:2}),r.a.createElement(c.a,{item:!0,xs:11,md:4},r.a.createElement(R.a,{value:k.Year,error:Z.Year,onChange:J,className:t.textfield,fullWidth:!0,variant:"outlined",name:"Year",type:"number",label:"Year of passing"}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:"button",className:t.errorTypography},W.Year)),r.a.createElement(c.a,{item:!0,xs:11,md:4},r.a.createElement(R.a,{value:k.Marks,error:Z.Marks,onChange:J,className:t.textfield,fullWidth:!0,variant:"outlined",name:"Marks",type:"number",label:"Percentage of marks"}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:"button",className:t.errorTypography},W.Marks)),r.a.createElement(c.a,{item:!0,xs:!1,md:2})),r.a.createElement("br",null),r.a.createElement(i.a,null),r.a.createElement("br",null),r.a.createElement(c.a,{container:!0,direction:"row"},r.a.createElement(c.a,{item:!0,xs:!1,md:4}),r.a.createElement(c.a,{item:!0,xs:11,md:4},r.a.createElement(s.a,{className:t.textfield,color:"primary",variant:"outlined",fullWidth:!0,disabled:!z.buttonActive,type:"button",onClick:function(e){e.preventDefault();var a=k;M.a.post("https://student-notice-board.herokuapp.com//createAdmission",a).then((function(e){e.data.message&&(N(e.data.message),O(""),u(!0))})).catch((function(e){N(""),O(e.response.data.message),u(!0)}))}},"Submit")),r.a.createElement(c.a,{item:!0,xs:!1,md:4}))),r.a.createElement("br",null),r.a.createElement(i.a,null),r.a.createElement("br",null),r.a.createElement(c.a,{container:!0,direction:"row"},r.a.createElement(c.a,{item:!0,xs:!1,md:4}),r.a.createElement(c.a,{item:!0,xs:11,md:4},r.a.createElement(s.a,{className:t.textfield,color:"primary",variant:"outlined",fullWidth:!0,onClick:function(){return a.push("/admin-school-admission-list")}},"Go to Admin - School Admission Form Page")),r.a.createElement(c.a,{item:!0,xs:!1,md:4}))),r.a.createElement(c.a,{item:!0,xs:!1,md:1}))),r.a.createElement(F.a,{open:o,autoHideDuration:6e3,onClose:d},r.a.createElement(D,{onClose:d,severity:0===v.length?"success":"error"},0===v.length?p:v)))},q=Object(u.a)((function(e){return{typography:{textAlign:"center"},table:{minWidth:650}}})),U=Object(o.a)({palette:{primary:d.a}}),z=function(){var e=Object(n.useState)([]),a=Object(g.a)(e,2),t=a[0],l=a[1],m=Object(n.useState)(""),s=Object(g.a)(m,2),o=s[0],u=s[1];Object(n.useEffect)((function(){M.a.get("https://student-notice-board.herokuapp.com//getAdmissions").then((function(e){e.data.message&&0!==e.data.message.length&&(l(e.data.message),u(""))})).catch((function(e){l([]),u(e.response.data.message)}))}));var d=q();return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{theme:U},r.a.createElement("br",null),r.a.createElement(f.a,{color:"primary",variant:"h4",className:d.typography},"ADMIN - STUDENT ADMISSION LIST"),r.a.createElement("br",null),r.a.createElement(i.a,null),r.a.createElement("br",null),r.a.createElement(c.a,{container:!0,direction:"row"},r.a.createElement(c.a,{item:!0,xs:!1,md:1}),r.a.createElement(c.a,{item:!0,xs:12,md:10},0===o.length?r.a.createElement(N.a,{component:y.a,elevation:0},r.a.createElement(x.a,{className:d.table,size:"small"},r.a.createElement(v.a,null,r.a.createElement(O.a,null,r.a.createElement(S.a,null,"STUDENT ADMISSION LIST"),r.a.createElement(S.a,null),r.a.createElement(S.a,null),r.a.createElement(S.a,null),r.a.createElement(S.a,null)),r.a.createElement(O.a,null,r.a.createElement(S.a,null,"First Name"),r.a.createElement(S.a,{align:"center"},"Last Name"),r.a.createElement(S.a,{align:"center"},"Class"),r.a.createElement(S.a,{align:"center"},"Year of passing"),r.a.createElement(S.a,{align:"center"},"Percentage of marks"))),r.a.createElement(j.a,null,t.map((function(e){return r.a.createElement(O.a,{key:e.Name},r.a.createElement(S.a,{component:"th",scope:"row",className:e.color},e.Name),r.a.createElement(S.a,{key:e.LastName,align:"center"},e.LastName),r.a.createElement(S.a,{key:e.Class,align:"center"},e.Class),r.a.createElement(S.a,{key:e.Year,align:"center"},e.Year),r.a.createElement(S.a,{key:e.Marks,align:"center"},e.Marks))}))))):r.a.createElement(f.a,{style:{color:"red"},variant:"h6",className:d.typography},o)),r.a.createElement(c.a,{item:!0,xs:!1,md:1}))))};function P(e){return r.a.createElement(W.a,Object.assign({elevation:6,variant:"filled"},e))}var B=Object(u.a)({typography:{textAlign:"center"},errorTypography:{color:"red",marginLeft:"10px",textAlign:"center"},textfield:{margin:"10px"}}),G=Object(o.a)({palette:{primary:d.a}}),Z=function(e){var a=B(),t=e.history,l=Object(n.useState)(!1),m=Object(g.a)(l,2),o=m[0],u=m[1],d=function(e,a){"clickaway"!==a&&u(!1)},b=Object(n.useState)(""),h=Object(g.a)(b,2),p=h[0],N=h[1],y=Object(n.useState)(""),x=Object(g.a)(y,2),v=x[0],O=x[1],S=Object(n.useState)({name:"",rollNumber:"",Maths:"",English:"",Science:""}),j=Object(g.a)(S,2),k=j[0],C=j[1],A=Object(n.useState)({name:"",rollNumber:"",Maths:"",English:"",Science:""}),w=Object(g.a)(A,2),W=w[0],D=w[1],Y=Object(n.useState)({name:!1,rollNumber:!1,Maths:!1,English:!1,Science:!1,buttonActive:!1}),I=Object(g.a)(Y,2),H=I[0],q=I[1],U=Object(n.useState)({name:!1,rollNumber:!1,Maths:!1,English:!1,Science:!1}),z=Object(g.a)(U,2),Z=z[0],$=z[1],J=function(e){var a=e.target,t=a.name,n=a.value;C(Object(T.a)(Object(T.a)({},k),{},Object(L.a)({},t,n))),K(t,n)},K=function(e,a){var t=W,n=H,r=Z,l=new RegExp(/^[A-Za-z ]+$/);switch(e){case"name":0===a.length?(t[e]="Field Required",n[e]=!1,r[e]=!0):a.length>20?(t[e]="Length can not be more that 20",n[e]=!1,r[e]=!0):l.test(a)?(t[e]="",n[e]=!0,r[e]=!1):(t[e]="Only alphabets are allowed",n[e]=!1,r[e]=!0);break;case"rollNumber":0===a.length?(t[e]="Field Required",n[e]=!1,r[e]=!0):(t[e]="",n[e]=!0,r[e]=!1);break;case"Maths":case"English":case"Science":0===a.length?(t[e]="Field Required",n[e]=!1,r[e]=!0):Number(a)<0||Number(a)>50?(t[e]="Marks should be between 0 and 50",n[e]=!1,r[e]=!0):(t[e]="",n[e]=!0,r[e]=!1)}n.buttonActive=n.name&&n.rollNumber&&n.Maths&&n.English&&n.Science,D(t),q(n),$(r)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{theme:G},r.a.createElement("br",null),r.a.createElement(f.a,{color:"primary",variant:"h4",className:a.typography},"SCHOOL ADMISSION FORM"),r.a.createElement("br",null),r.a.createElement(i.a,null),r.a.createElement("br",null),r.a.createElement(c.a,{container:!0,direction:"row"},r.a.createElement(c.a,{item:!0,xs:!1,md:1}),r.a.createElement(c.a,{item:!0,xs:12,md:10},r.a.createElement("form",null,r.a.createElement(c.a,{container:!0,direction:"row"},r.a.createElement(c.a,{item:!0,xs:11,md:4},r.a.createElement(R.a,{value:k.name,error:Z.name,onChange:J,className:a.textfield,fullWidth:!0,variant:"outlined",name:"name",type:"text",label:"Name"}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:"button",className:a.errorTypography},W.name)),r.a.createElement(c.a,{item:!0,xs:11,md:4},r.a.createElement(R.a,{value:k.rollNumber,error:Z.rollNumber,onChange:J,className:a.textfield,fullWidth:!0,variant:"outlined",name:"rollNumber",type:"text",label:"Roll Number"}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:"button",className:a.errorTypography},W.rollNumber)),r.a.createElement(c.a,{item:!0,xs:11,md:4},r.a.createElement(R.a,{value:k.Maths,error:Z.Maths,onChange:J,className:a.textfield,fullWidth:!0,variant:"outlined",name:"Maths",type:"number",label:"Marks in Maths"}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:"button",className:a.errorTypography},W.Maths))),r.a.createElement("br",null),r.a.createElement(i.a,null),r.a.createElement("br",null),r.a.createElement(c.a,{container:!0,direction:"row"},r.a.createElement(c.a,{item:!0,xs:!1,md:2}),r.a.createElement(c.a,{item:!0,xs:11,md:4},r.a.createElement(R.a,{value:k.English,error:Z.English,onChange:J,className:a.textfield,fullWidth:!0,variant:"outlined",name:"English",type:"number",label:"Marks in English"}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:"button",className:a.errorTypography},W.English)),r.a.createElement(c.a,{item:!0,xs:11,md:4},r.a.createElement(R.a,{value:k.Science,error:Z.Science,onChange:J,className:a.textfield,fullWidth:!0,variant:"outlined",name:"Science",type:"number",label:"Marks in Science"}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:"button",className:a.errorTypography},W.Science)),r.a.createElement(c.a,{item:!0,xs:!1,md:2})),r.a.createElement("br",null),r.a.createElement(i.a,null),r.a.createElement("br",null),r.a.createElement(c.a,{container:!0,direction:"row"},r.a.createElement(c.a,{item:!0,xs:!1,md:4}),r.a.createElement(c.a,{item:!0,xs:11,md:4},r.a.createElement(s.a,{className:a.textfield,color:"primary",variant:"outlined",fullWidth:!0,disabled:!H.buttonActive,type:"button",onClick:function(e){e.preventDefault();var a={name:k.name,marks:{Maths:k.Maths,English:k.English,Science:k.English},rollNumber:k.rollNumber};M.a.post("https://student-notice-board.herokuapp.com//createResult",a).then((function(e){e.data.message&&(N(e.data.message),O(""),u(!0))})).catch((function(e){N(""),O(e.response.data.message),u(!0)}))}},"Submit")),r.a.createElement(c.a,{item:!0,xs:!1,md:4}))),r.a.createElement("br",null),r.a.createElement(i.a,null),r.a.createElement("br",null),r.a.createElement(c.a,{container:!0,direction:"row"},r.a.createElement(c.a,{item:!0,xs:!1,md:4}),r.a.createElement(c.a,{item:!0,xs:11,md:4},r.a.createElement(s.a,{className:a.textfield,color:"primary",variant:"outlined",fullWidth:!0,onClick:function(){return t.push("/")}},"Go to Student Result Board")),r.a.createElement(c.a,{item:!0,xs:!1,md:4}))),r.a.createElement(c.a,{item:!0,xs:!1,md:1}))),r.a.createElement(F.a,{open:o,autoHideDuration:6e3,onClose:d},r.a.createElement(P,{onClose:d,severity:0===v.length?"success":"error"},0===v.length?p:v)))},$=Object(o.a)({palette:{primary:d.a}}),J=Object(u.a)((function(e){return{appbar:{backgroundColor:"white"},primaryGrid:{marginLeft:"20px",marginRight:"20px"},button:{fontSize:"13px",textAlign:"center",fontWeight:"bolder"}}})),K=function(){var e=J();return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{theme:$},r.a.createElement("br",null),r.a.createElement(c.a,{container:!0,direction:"row"},r.a.createElement(c.a,{item:!0,xs:!1,md:2}),r.a.createElement(c.a,{item:!0,xs:12,md:2},r.a.createElement(s.a,{color:"primary",component:b.b,to:"/",className:e.button},"Student result board")),r.a.createElement(c.a,{item:!0,xs:12,md:2},r.a.createElement(s.a,{color:"primary",component:b.b,to:"/admission-form",className:e.button},"School Admission Form")),r.a.createElement(c.a,{item:!0,xs:12,md:2},r.a.createElement(s.a,{color:"primary",component:b.b,to:"/admin-school-admission-list",className:e.button},"Admin - School Admission List")),r.a.createElement(c.a,{item:!0,xs:12,md:2},r.a.createElement(s.a,{color:"primary",component:b.b,to:"/admin-student-result-form",className:e.button},"Admin - Student Result Form")),r.a.createElement(c.a,{item:!0,xs:!1,md:2})),r.a.createElement("br",null),r.a.createElement(i.a,null)),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(w,e)}}),r.a.createElement(h.a,{exact:!0,path:"/admission-form",render:function(e){return r.a.createElement(H,e)}}),r.a.createElement(h.a,{exact:!0,path:"/admin-school-admission-list",render:function(e){return r.a.createElement(z,e)}}),r.a.createElement(h.a,{exact:!0,path:"/admin-student-result-form",render:function(e){return r.a.createElement(Z,e)}})))};m.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b.a,null,r.a.createElement(K,null))),document.getElementById("root"))},83:function(e,a,t){e.exports=t(111)},88:function(e,a,t){}},[[83,1,2]]]);
//# sourceMappingURL=main.52ee4a7f.chunk.js.map