(this.webpackJsonpimpact_frontend=this.webpackJsonpimpact_frontend||[]).push([[0],{116:function(e,t,n){},144:function(e,t,n){},191:function(e,t,n){},259:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(12),i=n.n(c),o=(n(191),n(21)),s=n.n(o),l=n(34),u=n(4),j=n(316),d=n(310),b=n(303),m=n(317),p=n(308),h=n(315),f=n(304),x=n(301),O=n(99),g=n.n(O),v=n(172),y=n(298),w=n(311),k="http://35.222.122.87",C=function(e){var t={method:"POST",body:JSON.stringify(e)};return fetch(k+"/user/",t).then((function(e){return e.json()})).then((function(e){return e}))},S=function(e){var t={method:"POST",body:JSON.stringify(e)};return fetch(k+"/user/",t).then((function(e){return e.json()})).then((function(e){return e}))},N=function(e){var t={method:"POST",body:JSON.stringify(e)};return fetch(k+"/project/",t).then((function(e){return e.json()})).then((function(e){return e}))},P=function(e){var t={method:"POST",body:JSON.stringify(e)};return fetch(k+"/project/",t).then((function(e){return e.json()})).then((function(e){return e}))},D=function(e){var t={method:"POST",body:JSON.stringify(e)};return fetch(k+"/project/",t).then((function(e){return e.json()})).then((function(e){return e}))},I=n(37),E=n.n(I),A=(n(65),n(56),n(149)),F=n(28),T=n(27),z=(n(85),n(2)),_=Object(y.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://wallup.net/wp-content/uploads/2019/09/135850-3d-architecture-pc-cad.jpg)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function W(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),i=Object(u.a)(c,2),o=i[0],O=i[1],y=Object(F.f)(),k=_(),C=function(){var e=Object(l.a)(s.a.mark((function e(t){var r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r="",e.prev=2,n.trim().length||(r+="Please enter an email "),o.trim().length||(r+="Please enter a password !"),""===r){e.next=10;break}console.log(r),T.b.error("Please fill in all fields"),e.next=14;break;case 10:return e.next=12,S({email:n,password:o});case 12:"Wrong Password"===(a=e.sent).result?T.b.error("wrong password entered"):"No such email exists"===a.result?T.b.error("No such email exists"):(localStorage.setItem("email",n),y.push("/home"));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(2),console.log(e.t0),T.b.error("An error Occurred");case 20:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(z.jsxs)(x.a,{container:!0,component:"main",className:k.root,children:[Object(z.jsx)(b.a,{}),Object(z.jsx)(T.a,{}),Object(z.jsx)(x.a,{item:!0,xs:!1,sm:4,md:7,className:k.image}),Object(z.jsx)(x.a,{item:!0,xs:12,sm:8,md:5,component:f.a,elevation:6,square:!0,children:Object(z.jsxs)("div",{className:k.paper,children:[Object(z.jsx)(j.a,{className:k.avatar,children:Object(z.jsx)(g.a,{})}),Object(z.jsx)(v.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(z.jsxs)("form",{className:k.form,noValidate:!0,onSubmit:C,children:[Object(z.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return a(e.target.value)}}),Object(z.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return O(e.target.value)}}),Object(z.jsx)(p.a,{control:Object(z.jsx)(h.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(z.jsx)(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:C,className:k.submit,children:"Sign In"}),Object(z.jsx)("div",{style:{marginLeft:220},children:Object(z.jsx)(A.GoogleLogin,{clientId:"997321405617-nv43b35u845suv0epb4fkqrfu2jm86rd.apps.googleusercontent.com",buttonText:"Login With Google",onSuccess:function(e){console.log(e.profileObj.email),localStorage.setItem("email",e.profileObj.email),y.push("/home")},onFailure:function(e){console.log(e)},cookiePolicy:"single_host_origin"})}),Object(z.jsx)(x.a,{item:!0,children:Object(z.jsx)(w.a,{href:"/signup",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})}),Object(z.jsx)(E.a,{})]})}function L(e){return!!new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e)}n(151);var M=Object(y.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://cdn.allwallpaper.in/wallpapers/1920x1200/4630/architecture-schematic-1920x1200-wallpaper.jpg)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function U(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),i=Object(u.a)(c,2),o=i[0],p=i[1],h=Object(r.useState)(""),O=Object(u.a)(h,2),y=O[0],w=O[1],k=Object(r.useState)(""),S=Object(u.a)(k,2),N=S[0],P=S[1],D=Object(F.f)(),I=function(){var e=Object(l.a)(s.a.mark((function e(t){var r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r="",t.preventDefault(),e.prev=2,n.trim().length||(r+="Please enter a username ! \n"),o.trim().length||(r+="Please enter an Email ID ! \n"),y.trim().length||(r+="Please enter a password ! \n"),L(o)||(r+="Please enter a valid email ID ! \n"),y!==N&&(r+="Please enter matching passwords ! \n"),""===r){e.next=12;break}T.b.error("Please Fill In All Fields"),e.next=17;break;case 12:return e.next=14,C({name:n,email:o,password:y});case 14:a=e.sent,console.log(a),"failure"==a.result?T.b.error("Email Already Exists"):D.push("/login");case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(2),console.log(e.t0),T.b.error("An Error Occurred");case 23:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(t){return e.apply(this,arguments)}}(),E=M();return Object(z.jsxs)(x.a,{container:!0,component:"main",className:E.root,children:[Object(z.jsx)(b.a,{}),Object(z.jsx)(T.a,{}),Object(z.jsx)(x.a,{item:!0,xs:!1,sm:4,md:7,className:E.image}),Object(z.jsx)(x.a,{item:!0,xs:12,sm:8,md:5,component:f.a,elevation:6,square:!0,children:Object(z.jsxs)("div",{className:E.paper,children:[Object(z.jsx)(j.a,{className:E.avatar,children:Object(z.jsx)(g.a,{})}),Object(z.jsx)(v.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(z.jsxs)("form",{className:E.form,noValidate:!0,onSubmit:I,children:[Object(z.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Username",name:"name",autoComplete:"name",autoFocus:!0,onChange:function(e){return a(e.target.value)}}),Object(z.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return p(e.target.value)}}),Object(z.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return w(e.target.value)}}),Object(z.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"confirm",label:"Confirm Password",type:"password",id:"confirm",autoComplete:"confirm-current-password",onChange:function(e){return P(e.target.value)}}),Object(z.jsx)(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:I,className:E.submit,children:"Sign Up"})]}),Object(z.jsx)(x.a,{item:!0,children:Object(z.jsx)("a",{href:"/login",variant:"body2",children:"Have an account? Login"})})]})})]})}var q,G,B,Y,J,R,V=n(33),X=n(63),H=n(169),K=n(64),$=K.a.nav(q||(q=Object(X.a)(["\n  background: #000;\n  height: 160px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem calc((100vw - 1000px) / 2);\n  z-index: 10;\n  /* Third Nav */\n  /* justify-content: flex-start; */\n"]))),Q=Object(K.a)(V.b)(G||(G=Object(X.a)(["\n  color: #fff;\n  display: flex;\n  font-size: 20px;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  &.active {\n    color: #15cdfc;\n  }\n"]))),Z=Object(K.a)(H.a)(B||(B=Object(X.a)(["\n  display: none;\n  color: #fff;\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]))),ee=K.a.div(Y||(Y=Object(X.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n  /* Second Nav */\n  /* margin-right: 24px; */\n  /* Third Nav */\n  /* width: 100vw;\n  white-space: nowrap; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),te=K.a.nav(J||(J=Object(X.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n  /* Third Nav */\n  /* justify-content: flex-end;\n  width: 100vw; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),ne=(Object(K.a)(V.b)(R||(R=Object(X.a)(["\n  border-radius: 4px;\n  background: #256ce1;\n  padding: 10px 22px;\n  color: #fff;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  /* Second Nav */\n  margin-left: 24px;\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #fff;\n    color: #010606;\n  }\n"]))),n(312)),re=n.p+"static/media/logo.58667de1.jpg",ae=function(){var e=Object(F.f)();return Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)($,{children:[Object(z.jsx)(Q,{to:"/#",children:Object(z.jsx)("img",{src:re,width:350,height:160,style:{marginLeft:-200},alt:"logo"})}),Object(z.jsx)(Z,{}),Object(z.jsxs)(ee,{children:[Object(z.jsx)(Q,{to:"/home",activeStyle:!0,children:"Notification & Feeds"}),Object(z.jsx)(Q,{to:"/addProjects",activeStyle:!0,children:"Add Project"}),Object(z.jsx)(Q,{to:"/project",activeStyle:!0,children:"View Projects"})]}),Object(z.jsx)(te,{children:Object(z.jsx)(ne.a,{color:"primary",size:"large",variant:"extended",onClick:function(){localStorage.getItem("email")&&(localStorage.removeItem("email"),e.push("/login"))},children:"Logout"})})]})})},ce=(n(246),n(116),n(10)),ie=n(110),oe=n(109),se=n.n(oe);function le(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),i=Object(u.a)(c,2),o=i[0],j=i[1],d=Object(r.useState)(""),b=Object(u.a)(d,2),m=b[0],p=b[1],h=Object(r.useState)(""),f=Object(u.a)(h,2),x=f[0],O=f[1],g=Object(r.useState)(""),v=Object(u.a)(g,2),y=v[0],w=v[1],k=Object(r.useState)([]),C=Object(u.a)(k,2),S=C[0],P=C[1],D=Object(r.useState)([]),I=Object(u.a)(D,2),E=I[0],A=I[1],_=Object(r.useState)([]),W=Object(u.a)(_,2),L=W[0],M=W[1],U=Object(F.f)(),q=localStorage.getItem("email"),G=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,n.trim().length&&o.trim().length&&0!==S.length&&0!==E.length&&0!==L.length){e.next=6;break}T.b.error("Please fill in all fields"),e.next=10;break;case 6:return e.next=8,N({email:q,name:n,description:o,worktypes:S,contractors:E,users:L,action:"Add"});case 8:"failure"===e.sent.result?T.b.error("An error occurred !"):U.push("/project");case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),B=function(e,t){if("work"==t){var n=S.indexOf(e);S.splice(n,1),P(Object(ce.a)(S))}else if("contractor"==t){var r=E.indexOf(e);E.splice(r,1),A(Object(ce.a)(E))}else{var a=L.indexOf(e);L.splice(a,1),M(Object(ce.a)(L))}},Y=function(e,t){"work"===t?(S.push(e),P(Object(ce.a)(S))):"contract"===t?(E.push(e),A(Object(ce.a)(E))):"user"===t&&(L.push(e),M(Object(ce.a)(L)))};return Object(z.jsxs)("div",{className:"form-content-right",style:{overflowY:"scroll",overflowX:"scroll"},children:[Object(z.jsx)(T.a,{}),Object(z.jsxs)("form",{onSubmit:G,className:"form",noValidate:!0,children:[Object(z.jsxs)("div",{className:"form-inputs",children:[Object(z.jsx)("label",{className:"form-label",children:"Name"}),Object(z.jsx)("input",{className:"form-input",type:"text",name:"name",placeholder:"Enter Project Name",value:n,onChange:function(e){return a(e.target.value)}})]}),Object(z.jsxs)("div",{className:"form-inputs",children:[Object(z.jsx)("label",{className:"form-label",children:"Description"}),Object(z.jsx)("textarea",{className:"form-input",rows:6,cols:10,placeholder:"Enter Project Description",value:o,onChange:function(e){return j(e.target.value)}})]}),Object(z.jsxs)("div",{className:"form-inputs",children:[Object(z.jsx)("label",{className:"form-label",children:"Worktypes"}),Object(z.jsx)("input",{className:"form-input",type:"text",name:"Worktypes",placeholder:"Add Project Worktypes",value:m,onChange:function(e){return p(e.target.value)}}),S.length>0?S.map((function(e){return Object(z.jsxs)(ne.a,{color:"primary",size:"small",variant:"extended",children:[e," ",Object(z.jsx)(se.a,{onClick:function(){return B(e,"work")}})]})})):"",Object(z.jsx)("div",{style:{left:520,position:"absolute",bottom:300},children:Object(z.jsx)(ie.a,{style:{backgroundColor:"thistle",width:70,height:30},variant:"primary",onClick:function(){return Y(m,"work")},children:" Add "})})]}),Object(z.jsxs)("div",{className:"form-inputs",children:[Object(z.jsx)("label",{className:"form-label",children:"Contracters"}),Object(z.jsx)("input",{className:"form-input",type:"text",name:"contractors",placeholder:"Add Project Contractos",onChange:function(e){return O(e.target.value)}}),E.length>0?E.map((function(e){return Object(z.jsxs)(ne.a,{color:"primary",size:"small",variant:"extended",children:[e," ",Object(z.jsx)(se.a,{onClick:function(){return B(e,"contractor")}})]})})):"",Object(z.jsx)(ie.a,{style:{backgroundColor:"thistle",width:70,height:30,left:520,position:"absolute",bottom:220},variant:"primary",onClick:function(){return Y(x,"contract")},children:" Add "})]}),Object(z.jsxs)("div",{className:"form-inputs",children:[Object(z.jsx)("label",{className:"form-label",children:"Users"}),Object(z.jsx)("input",{className:"form-input",type:"text",name:"users",placeholder:"Add Project Users",onChange:function(e){return w(e.target.value)}}),L.length>0?L.map((function(e){return Object(z.jsxs)(ne.a,{color:"primary",size:"small",variant:"extended",children:[e," ",Object(z.jsx)(se.a,{onClick:function(){return B(e,"user")}})]})})):"",Object(z.jsx)(ie.a,{style:{backgroundColor:"thistle",width:70,height:30,left:520,position:"absolute",bottom:140},variant:"primary",onClick:function(){return Y(y,"user")},children:" Add "})]}),Object(z.jsx)("button",{className:"form-input-btn",type:"submit",children:"Add Project"})]})]})}var ue=function(){return Object(z.jsxs)("div",{className:"form-content-right",children:[Object(z.jsx)("h1",{className:"form-success",children:"We have received your request!"}),Object(z.jsx)("img",{className:"form-img-2",src:"img/img-3.svg",alt:"success-image"})]})},je=n.p+"static/media/image4.e506e61f.jpg",de=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)("div",{className:"form-container",children:[Object(z.jsx)("div",{className:"form-content-left",children:Object(z.jsx)("img",{className:"form-img",src:je,alt:"CAD"})}),n?Object(z.jsx)(ue,{}):Object(z.jsx)(le,{submitForm:function(){a(!0)}})]})})};var be=function(e){return Object(z.jsxs)("div",{children:[Object(z.jsx)(ae,{}),Object(z.jsx)(de,{})]})},me=(n(144),n(58)),pe=n.n(me),he=(n(145),n(313));var fe=function(e){var t=Object(r.useState)([]),n=Object(u.a)(t,2),a=n[0],c=n[1],i=localStorage.getItem("email"),o=Object(F.f)();return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P({email:i,action:"GET"});case 3:t=e.sent,c(t.result),console.log(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[a.length]),Object(z.jsxs)("div",{children:[Object(z.jsx)(ae,{}),Object(z.jsx)("h1",{children:"Projects"}),a.map((function(e,t){return Object(z.jsxs)(he.a,{style:{margin:25,width:"80%"},type:"inner",title:e.name,extra:Object(z.jsxs)("div",{children:[Object(z.jsx)("a",{href:"/edit/".concat(e._id),children:"Edit"}),Object(z.jsx)("a",{style:{color:"red",marginLeft:"10px"},href:"/edit/".concat(e._id),children:"Delete"})]}),children:["Description : ",e.description,e.worktypes.map((function(e){return Object(z.jsxs)("li",{children:[" Worktype : ",e," "]})})),e.contractors.map((function(e){return Object(z.jsxs)("li",{children:[" Contractor : ",e," "]})})),e.users.map((function(e){return Object(z.jsxs)("li",{children:[" User : ",e]})}))]},t)})),Object(z.jsx)(ne.a,{style:{position:"fixed",right:"2%"},onClick:function(){o.push("/addProjects")},color:"primary","aria-label":"add",children:Object(z.jsx)(pe.a,{})})]})},xe=n(165),Oe=n.n(xe),ge=(n(253),n(84));function ve(e){var t=Object(F.f)(),n=Object(r.useState)([]),a=Object(u.a)(n,2),c=a[0],i=a[1],o=Object(r.useState)(),j=Object(u.a)(o,2),d=(j[0],j[1],Object(r.useState)(!1)),b=Object(u.a)(d,2),m=b[0],p=b[1],h=Object(r.useState)(),f=Object(u.a)(h,2),x=f[0],O=f[1],g=Object(r.useState)([]),v=Object(u.a)(g,2),y=v[0],w=v[1],C=Object(r.useState)(!1),S=Object(u.a)(C,2),N=S[0],I=S[1],E=(localStorage.getItem("email"),Object(F.g)("id").id);Object(r.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P({id:E,action:"GET_BY_ID"});case 2:return t=e.sent,console.log(t.result),i([t.result]),e.next=7,D({id:E,action:"GET_IMAGE_BY_ID"});case 7:if("Failure"!==(n=e.sent).result){for(r=0;r<n.result.length;r++)"worktype"in n.result[r]&&"contractor"in n.result[r]&&"description"in n.result[r]&&(console.log(!0),I(!0));w(n.result)}case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[y.length]);var A=function(e,n){t.push({pathname:"/filterCAD/".concat(e,"/").concat(E),state:{detail:n}})},_=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(x),(n=new FormData).append("file",x,x.name),n.append("id",E),n.append("type",x.type),e.next=8,fetch(k+"/project/",{method:"PUT",body:n}).then((function(e){return e.json()})).then((function(e){return e}));case 8:"success"===e.sent.result&&T.b.success("CAD Uploaded. Please Refresh Page !");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(z.jsxs)("div",{children:[Object(z.jsx)(ae,{}),Object(z.jsx)(T.a,{}),c.map((function(e){return Object(z.jsxs)(he.a,{style:{margin:20,width:"95%"},type:"inner",title:"Project Name : "+e.name,extra:Object(z.jsxs)("div",{children:[Object(z.jsx)(Oe.a,{withPreview:!0,withLabel:!0,withIcon:!0,buttonText:"Select Image",singleImage:!0,onChange:function(e){return function(e){O(e[0]),p(!0)}(e)},imgExtension:[".jpg",".gif",".png",".jiff"],maxFileSize:5242880}),m?Object(z.jsx)(ne.a,{style:{marginLeft:"60px"},variant:"extended",color:"primary",size:"large",onClick:_,children:"Upload"}):Object(z.jsx)(z.Fragment,{})]}),children:[Object(z.jsx)("b",{children:"Description"})," : ",e.description,e.worktypes.map((function(e){return Object(z.jsxs)("li",{children:[" ",Object(z.jsx)("b",{children:"Worktype"})," : ",e," "]})})),e.contractors.map((function(e){return Object(z.jsxs)("li",{children:[" ",Object(z.jsx)("b",{children:"Contractor"})," : ",e," "]})})),e.users.map((function(e){return Object(z.jsxs)("li",{children:[" ",Object(z.jsx)("b",{children:"User"})," : ",e]})}))]},e._id)})),Object(z.jsx)("div",{style:{content:"",clear:"both",display:"table"},children:y.map((function(e,t){return Object(z.jsx)("div",{style:{marginLeft:"40px",float:"left",width:"30%",paddign:"50px",marginTop:"20px"},children:N?Object(z.jsxs)(ge.a,{className:"anime",style:{width:"400",height:"300"},children:[Object(z.jsx)(ge.a.Img,{variant:"top",src:e.image}),Object(z.jsxs)(ge.a.Title,{children:["Description : ",e.description]}),Object(z.jsxs)(ge.a.Body,{children:[Object(z.jsxs)(ge.a.Text,{children:[void 0!==e.worktype?e.worktype.map((function(e){return Object(z.jsxs)("li",{children:[" ",Object(z.jsx)("b",{children:"Worktype"})," : ",e," "]})})):null,void 0!==e.contractor?e.contractor.map((function(e){return Object(z.jsxs)("li",{children:[" ",Object(z.jsx)("b",{children:"Contractor"})," : ",e," "]})})):null]}),Object(z.jsx)(ne.a,{size:"medium",variant:"extended",color:"primary",onClick:function(){return A(e._id,e.image)},children:" Filter Image "})]})]}):Object(z.jsx)("img",{src:e.image,style:{cursor:"grabbing"},width:"400px",height:"300px",onClick:function(){return A(e._id,e.image)}})},t)}))}),Object(z.jsx)(ne.a,{style:{position:"fixed",right:"2%"},onClick:function(){t.push("/addProjects")},color:"primary","aria-label":"add",children:Object(z.jsx)(pe.a,{})})]})}var ye=function(e){var t=Object(F.f)();return Object(z.jsxs)("div",{children:[Object(z.jsx)(ae,{}),Object(z.jsx)("h1",{children:"Notifications & Feeds"}),Object(z.jsx)(ne.a,{style:{position:"fixed",right:"2%"},onClick:function(){t.push("/addProjects")},color:"primary","aria-label":"add",children:Object(z.jsx)(pe.a,{})})]})},we=n(6),ke=n(5),Ce=n(125),Se=n(166),Ne=n(167),Pe=n.n(Ne),De=n(309),Ie=(n(146),n(168)),Ee=n(104),Ae=n(108),Fe=n(106),Te=n(105),ze=n(307),_e=n(314),We=n(319),Le=n(320),Me=n(97);function Ue(e){var t=Object(y.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}))(),n=Object(r.useState)([]),a=Object(u.a)(n,2),c=a[0],i=a[1],o=Object(r.useState)(""),j=Object(u.a)(o,2),d=j[0],b=j[1],m=Object(r.useState)(""),p=Object(u.a)(m,2),h=p[0],f=p[1],x=Object(r.useState)(""),O=Object(u.a)(x,2),g=O[0],v=O[1],w=Object(r.useState)(new Date),k=Object(u.a)(w,2),C=k[0],S=k[1],N=Object(F.g)("id").id,I=Object(F.g)("project_id").project_id,E=e.image,A=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P({id:I,action:"GET_BY_ID"});case 2:t=e.sent,console.log(t.result),i([t.result]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,D({id:N,worktype:d,contractor:h,description:g,image:E,action:"UPDATE_IMAGE_BY_ID"});case 3:"failure"==e.sent.result?T.b.error("An error occurred"):T.b.success("Successfull Filtered CAD");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){console.log(C),A()}),[]),Object(z.jsxs)(Ie.a,{size:"xl",show:e.open,onHide:e.handleClose,className:"modal-container custom-map-modal",animation:!0,children:[Object(z.jsx)(T.a,{}),Object(z.jsxs)(Ae.a,{closeButton:!0,children:[Object(z.jsx)(ne.a,{size:"large",variant:"extended",color:"primary",onClick:function(){var e=new Me.default;e.setFontSize(40),e.text(30,20,"Filtered CAD Drawing !"),e.addImage(E,"JPEG",15,40,180,160),e.output("CADImage"),e.text(30,220,"Worktype :  ".concat(d)),e.text(30,240,"Contractor :  ".concat(h)),e.text(30,260,"Description :  ".concat(g)),e.text(30,280,"Date :  ".concat(C)),e.save("CAD.pdf")},children:"Generate PDF"}),Object(z.jsx)(Te.a,{style:{marginLeft:350},children:"Filter CAD"})]}),Object(z.jsx)(Ee.a,{style:{height:300},className:"w-100 p-3",children:Object(z.jsxs)("form",{onSubmit:_,className:"form",noValidate:!0,children:[Object(z.jsxs)(ze.a,{className:t.formControl,children:[Object(z.jsx)(We.a,{id:"demo-simple-select-label",children:"Worktype"}),Object(z.jsx)(_e.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:d,onChange:function(e){return b(e.target.value)},children:c.map((function(e){return e.worktypes.map((function(e){return Object(z.jsx)(Le.a,{value:e,children:e})}))}))})]}),Object(z.jsxs)(ze.a,{className:t.formControl,children:[Object(z.jsx)(We.a,{id:"demo-simple-select-label",children:"Contractor"}),Object(z.jsx)(_e.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:h,onChange:function(e){return f(e.target.value)},children:c.map((function(e){return e.contractors.map((function(e){return Object(z.jsx)(Le.a,{value:e,children:e})}))}))})]}),Object(z.jsxs)("div",{style:{marginLeft:-10},children:[Object(z.jsx)("label",{className:"form-label",children:"Description"}),Object(z.jsx)("textarea",{className:"form-input",rows:6,cols:20,placeholder:"Enter Project Description",value:g,onChange:function(e){return v(e.target.value)}})]}),Object(z.jsx)("label",{className:"form-label",children:"Date"}),Object(z.jsx)("input",{type:"date",value:C,onChange:function(e){return S(e.target.value)}})]})}),Object(z.jsx)(Fe.a,{children:Object(z.jsx)(ne.a,{color:"primary",size:"large",variant:"extended",onClick:_,children:"Save Markings"})})]})}n(258);var qe=function(e){var t=Object(r.useState)(""),n=Object(u.a)(t,2),a=n[0],c=n[1],i=function(e){var t=Object(r.useState)(0),n=Object(u.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)([e]),o=Object(u.a)(i,2),s=o[0],l=o[1];return[s[a],function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="function"===typeof e?e(s[a]):e;if(t){var r=Object(ce.a)(s);r[a]=n,l(r)}else{var i=Object(ce.a)(s).slice(0,a+1);l([].concat(Object(ce.a)(i),[n])),c((function(e){return e+1}))}},function(){return a>0&&c((function(e){return e-1}))},function(){return a<s.length-1&&c((function(e){return e+1}))}]}([]),o=Object(u.a)(i,4),s=o[0],l=o[1],j=o[2],d=o[3],b=Object(r.useState)(null),m=Object(u.a)(b,2),p=m[0],h=m[1],f=Object(r.useState)(!1),x=Object(u.a)(f,2),O=x[0],g=x[1],v=Object(r.useState)(e.location.state.detail),y=Object(u.a)(v,2),w=y[0],k=y[1],C=Object(r.useState)(""),S=Object(u.a)(C,2),N=S[0],P=S[1],D=Object(r.createRef)(null),I=Object(Se.a)(),E=Object(u.a)(I,2),A=(E[0],E[1]),T=(Object(F.g)("id").id,Object(F.g)("project_id").project_id,e.location.state.detail),_=Ce.a.generator();Object(r.useEffect)((function(){var e=function(e){(e.metaKey||e.ctrlKey)&&"z"===e.key&&(e.shiftKey?d():j())};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[j,d]),Object(r.useLayoutEffect)((function(){var e=document.getElementById("canvas");e.getContext("2d").clearRect(0,0,e.width,e.height);var t=Ce.a.canvas(e);s.forEach((function(e){var n=e.roughElement;return t.draw(n)}))}),[s]);var W=function(e,t,n,r,a){return{id:e,x1:t,y1:n,x2:r,y2:a,roughElement:_.rectangle(t,n,r-t,a-n)}},L=function(e,t,n,r,a){var c=W(e,t,n,r,a),i=Object(ce.a)(s);i[e]=c,l(i)},M=function(e,t,n,r,a){return Math.abs(e-n)<5&&Math.abs(t-r)<5?a:null},U=function(e,t,n){var r=n.x1,a=n.x2,c=n.y1,i=n.y2,o=M(e,t,r,c,"tl"),s=M(e,t,a,c,"tr"),l=M(e,t,r,i,"bl"),u=M(e,t,a,i,"br");return o||s||l||u||(e>=r&&e<=a&&t>=c&&t<=i?"inside":null)},q=function(e,t,n){return n.map((function(n){return Object(ke.a)(Object(ke.a)({},n),{},{position:U(e,t,n)})})).find((function(e){return null!==e.position}))},G=function(){if(p){var e=p.id,t=s[e].id;if("drawing"===a||"resizing"===a){var n=function(e){var t=e.x1,n=e.y1,r=e.x2,a=e.y2,c=Math.min(t,r),i=Math.max(t,r);return{x1:c,y1:Math.min(n,a),x2:i,y2:Math.max(n,a)}}(s[e]),r=n.x1,i=n.y1,o=n.x2,l=n.y2;L(t,r,i,o,l)}}c("none"),h(null)};return Object(z.jsxs)("div",{children:[Object(z.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginLeft:"700px",marginTop:"30px"},children:[Object(z.jsx)("h1",{children:"Edit Image"}),Object(z.jsxs)("div",{style:{marginTop:50,marginLeft:-250},children:[Object(z.jsx)("input",{style:{margin:10},type:"radio",id:"draw",checked:"draw"===N,onChange:function(){return P("draw")}}),Object(z.jsx)("label",{htmlFor:"draw",children:"Draw "}),Object(z.jsx)("input",{style:{margin:10},type:"radio",id:"selection",checked:"selection"===N,onChange:function(){return P("selection")}}),Object(z.jsx)("label",{htmlFor:"selection",children:"Selection "}),Object(z.jsx)("button",{color:"primary",style:{margin:10},onClick:j,children:"Undo"}),Object(z.jsx)("button",{color:"primary",style:{margin:10},onClick:d,children:"Redo"})]}),Object(z.jsx)(De.a,{onClick:function(){g(!0),A(D.current).then((function(e){k(e)}))},color:"primary",style:{position:"absolute",right:"1%"},component:"span",children:Object(z.jsx)(Pe.a,{style:{width:70,height:70}})})]}),O?Object(z.jsx)(Ue,{image:w,open:function(){return g(!0)},handleClose:function(){return g(!1)},backdrop:"static"}):null,Object(z.jsx)("div",{style:{marginTop:"20px"},ref:D,children:Object(z.jsx)("div",{style:{backgroundImage:"url(".concat(T,")"),height:window.innerHeight,width:window.innerWidth},children:Object(z.jsx)("canvas",{id:"canvas",width:window.innerWidth,height:window.innerHeight,onMouseDown:function(e){return function(e){var t=e.clientX,n=e.clientY;if("selection"===N){var r=q(t,n,s);if(r){var a=t-r.x1,i=n-r.y1;h(Object(ke.a)(Object(ke.a)({},r),{},{offsetX:a,offsetY:i})),l((function(e){return e})),"inside"===r.position?c("moving"):c("resizing")}}else{var o=s.length,u=W(o,t,n,t,n);l((function(e){return[].concat(Object(ce.a)(e),[u])})),h(u),c("drawing")}}(e)},onMouseMove:function(e){return function(e){var t=e.clientX,n=e.clientY;if("selection"===N){var r=q(t,n,s);e.target.style.cursor=r?function(e){switch(e){case"tl":case"br":case"start":case"end":return"nwse-resize";case"tr":case"bl":return"nesw-resize";default:return"move"}}(r.position):"default"}if("drawing"==a){var c=s.length-1,i=s[c],o=i.x1,l=i.y1;L(c,o,l,t,n)}else if("moving"==a){var u=p.id,j=p.x1,d=p.x2,b=p.y1,m=p.y2,h=t-p.offsetX,f=n-p.offsetY;L(u,h,f,h+(d-j),f+(m-b))}else if("resizing"===a){var x=p.id,O=function(e,t,n,r){var a=r.x1,c=r.y1,i=r.x2,o=r.y2;switch(n){case"tl":case"start":return{x1:e,y1:t,x2:i,y2:o};case"tr":return{x1:a,y1:t,x2:e,y2:o};case"bl":return{x1:e,y1:c,x2:i,y2:t};case"br":case"end":return{x1:a,y1:c,x2:e,y2:t};default:return null}}(t,n,p.position,Object(we.a)(p,["id","position"])),g=O.x1,v=O.y1,y=O.x2,w=O.y2;L(x,g,v,y,w)}}(e)},onMouseUp:G,onMouseLeave:G,children:"Canvas"})})})]})};var Ge=function(){return Object(z.jsx)("div",{className:"App",children:Object(z.jsx)(V.a,{children:Object(z.jsxs)(F.c,{children:[Object(z.jsx)(F.a,{exact:!0,path:"/",component:W}),Object(z.jsx)(F.a,{exact:!0,path:"/login",component:W}),Object(z.jsx)(F.a,{exact:!0,path:"/signup",component:U}),Object(z.jsx)(F.a,{exact:!0,path:"/home",component:ye}),Object(z.jsx)(F.a,{exact:!0,path:"/project",component:fe}),Object(z.jsx)(F.a,{exact:!0,path:"/addProjects",component:be}),Object(z.jsx)(F.a,{exact:!0,path:"/edit/:id",component:ve}),Object(z.jsx)(F.a,{exact:!0,path:"/filterCAD/:id/:project_id",component:qe})]})})})},Be=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,692)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(z.jsx)(a.a.StrictMode,{children:Object(z.jsx)(Ge,{})}),document.getElementById("root")),Be()}},[[259,1,3]]]);
//# sourceMappingURL=main.4df1a82f.chunk.js.map