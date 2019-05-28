(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(e,t,a){e.exports=a.p+"static/media/robot.388b052a.png"},347:function(e,t,a){e.exports=a(656)},352:function(e,t,a){},353:function(e,t,a){},632:function(e,t,a){},656:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(45),i=a.n(l),o=(a(352),a(32)),c=a(33),s=a(35),m=a(34),u=a(36),b=(a(353),a(46)),d=a(171),h={message:null,messageType:null},p=a(38),f=a(27),E=a(115),g=a.n(E),v=(a(568),a(570),a(572),a(223));g.a.initializeApp({apiKey:"AIzaSyC6rHHcP2S1RHoKZG8dZrcFIRX_T7Q4klY",authDomain:"robot-friend-b4cd3.firebaseapp.com",databaseURL:"https://robot-friend-b4cd3.firebaseio.com",projectId:"robot-friend-b4cd3",storageBucket:"robot-friend-b4cd3.appspot.com",messagingSenderId:"202082833271",appId:"1:202082833271:web:c1402d43dbc35061"}),g.a.firestore();var y=Object(p.c)(Object(f.reactReduxFirebase)(g.a,{userProfile:"users"}),Object(v.reduxFirestore)(g.a))(p.d)(Object(p.b)({firebase:f.firebaseReducer,firestore:v.firestoreReducer,notify:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NOTIFY_USER":return Object(d.a)({},e,{message:t.message,messageType:t.messageType});default:return e}}}),{}),N=a(677),O=a(669),j=a(665),C=a(666),w=a(20),k=a(114),R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){var t=e,n=a.props,r=n.firestore,l=n.history;r.add({collection:"clients"},t).then(l.push("/viewRobots"))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(N.a,null,r.a.createElement(O.a,null,r.a.createElement(w.b,{onSubmit:this.onSubmit,initialValues:{},render:function(e){var t=e.handleSubmit,a=e.form,n=e.submitting,l=e.pristine,i=e.values;return r.a.createElement("form",{className:"ui form",onSubmit:t},r.a.createElement("div",{className:"fields"},r.a.createElement("div",{className:"six wide field"},r.a.createElement(j.a,{fluid:!0},r.a.createElement(j.a.Header,null,r.a.createElement("label",null,"Robot image")),r.a.createElement(j.a.Content,null,void 0==i.robotId?r.a.createElement(C.a,{fluid:!0}," ",r.a.createElement(C.a.Image,{rectangular:!0})," "):r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(i.robotId,"?200*200")})))),r.a.createElement("div",{className:" ten wide field"},r.a.createElement("label",null,"Angriness"),r.a.createElement(w.a,{name:"robotId"},function(e){var t=e.input;e.meta;return r.a.createElement(k.Slider,Object.assign({},t,{color:"red",settings:{start:2,min:0,max:100,step:1,onChange:function(e){t.onChange(e)}}}))}),r.a.createElement("label",null,"First Name"),r.a.createElement(w.a,{name:"firstName",component:"input",type:"text",placeholder:"First Name"}),r.a.createElement("label",null,"Last Name"),r.a.createElement(w.a,{name:"lastName",component:"input",type:"text",placeholder:"Last Name"}),r.a.createElement("label",null,"Email"),r.a.createElement(w.a,{name:"email",component:"input",type:"text",placeholder:"Last Name"}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Notes"),r.a.createElement(w.a,{name:"notes",component:"textarea",placeholder:"Notes"})),r.a.createElement("div",null,r.a.createElement("button",{className:"ui primary basic button ",type:"submit",disabled:n||l},"Submit"),r.a.createElement("button",{className:"ui secondary basic button",onClick:a.reset,disabled:n||l},"Reset")),r.a.createElement("pre",null,JSON.stringify(i,0,2)))}})))}}]),t}(n.Component),S=Object(f.firestoreConnect)()(R),I=a(664),L=a(337),x=a(673),A=a(667),P=a(226),T=function(e){var t=e.robotId,a=e.id,n=e.name,l=e.email,i=e.notes,o=e.firestore,c=e.history;void 0==t&&(t=a);return r.a.createElement(I.a,{closeIcon:!0,trigger:r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?100*100")}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,l),r.a.createElement("p",null,i)))},r.a.createElement(I.a.Header,null,"Robot Details"),r.a.createElement(I.a.Content,{image:!0},r.a.createElement(L.a,{wrapped:!0,size:"medium",src:"https://robohash.org/".concat(t,"?100*100")}),r.a.createElement(I.a.Description,null,r.a.createElement(x.a,null,n),r.a.createElement("p",null,"We've found the following gravatar image associated with your e-mail address."),r.a.createElement("p",null,"Is it okay to use this photo?"),r.a.createElement("p",null,i),r.a.createElement(P.a,{className:"ui button basic primary",to:"/robot/edit/".concat(a)}," Edit Robot"),r.a.createElement(A.a,{onClick:function(){o.delete({collection:"clients",doc:a}).then(c.push("/viewRobots")),console.log(o)},negative:!0}," Delete"))))},F=a(59),H=a.n(F),U=function(e){var t=e.robots,a=e.firestore,n=e.history,l=H.a.map(t,function(e){return r.a.createElement(T,Object.assign({history:n,firestore:a,key:e.id},e))});return r.a.createElement("div",null,l)},z=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2 "},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search for Robot friends",onChange:t}))},D=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},B=a(661),J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onDeleteRobot=function(){},a.onSearchChange=function(e){a.setState({searchfield:e.target.value})},a.state={searchfield:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.clients,n=t.firestore,l=t.history,i=H.a.map(a,function(e){return Object(d.a)({name:e.firstName+e.lastName},e)}),o=H.a.filter(i,function(t){return H.a.toLower(t.name).includes(H.a.toLower(e.state.searchfield))});return a?r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"Robot Friends"),r.a.createElement(z,{searchChange:this.onSearchChange}),r.a.createElement(D,null,r.a.createElement(U,{history:l,firestore:n,robots:o}))):r.a.createElement(B.a,{active:!0,size:"large"}," ",r.a.createElement("h3",null,"Making robots"))}}]),t}(n.Component),V=Object(p.c)(Object(f.firestoreConnect)([{collection:"clients"}]),Object(b.connect)(function(e,t){return{clients:e.firestore.ordered.clients}}))(J),W=a(671),M=a(676),Q=a(335),Y=a(675),_=a(662),K=a(166),Z=a.n(K),G=a(670),X=a(668),$=a(91),q=(a(632),function(e){var t=e.children,a=e.isLogin,n=e.onPusherClick,l=e.onToggle,i=e.visible,o=e.onLogoutClick;return r.a.createElement(G.a.Pushable,null,r.a.createElement(G.a,{as:X.a,animation:"overlay",icon:"labeled",inverted:!0,direction:"right",vertical:!0,visible:i},r.a.createElement(X.a.Item,{onClick:l,as:_.a,to:"/home"},"Home"),r.a.createElement(X.a.Item,{onClick:l,to:"/createRobot",as:_.a},"Create Robot"),r.a.createElement(X.a.Item,{onClick:l,as:_.a,to:"/viewRobots"},"View Robots"),a?r.a.createElement(X.a.Item,{onClick:function(){o(),l()},to:"/home",as:_.a},"Log out"):r.a.createElement(X.a.Item,{onClick:l,to:"/login",as:_.a},"Login"),r.a.createElement(X.a.Item,{onClick:l,to:"/signUp",as:_.a},"Sign up")),r.a.createElement(G.a.Pusher,{dimmed:i,onClick:n,fixed:"top",style:{minHeight:"100vh"}},r.a.createElement(X.a,{fixed:"top",inverted:!0},r.a.createElement(X.a.Item,null,r.a.createElement(L.a,{size:"mini",src:Z.a})),r.a.createElement(X.a.Item,null,r.a.createElement("h4",null,"Robot Friends")),r.a.createElement(X.a.Item,{position:"right",onClick:l},r.a.createElement($.a,{name:"sidebar"}))),t))}),ee=a(663),te=function(e){var t=e.children;return r.a.createElement(ee.a,{style:{marginTop:"5em"}},t)},ae=function(e){var t=e.onLogoutClick,a=e.isLogin;return r.a.createElement(X.a,{fixed:"top",inverted:!0},r.a.createElement(X.a.Item,null,r.a.createElement(L.a,{size:"mini",src:Z.a})),r.a.createElement(X.a.Header,null,r.a.createElement("h5",{className:"f1"},"Robot Friends")),r.a.createElement(X.a.Menu,{position:"right"},r.a.createElement(_.a,{className:"f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l ",to:"/home"},"Home"),r.a.createElement(_.a,{className:"f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l ",to:"/createRobot"},"Create Robot"),r.a.createElement(_.a,{className:"f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l ",to:"/viewRobots"},"View Robots"),a?r.a.createElement(_.a,{className:"f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l",onClick:t,to:"/home"},"Log out"):r.a.createElement(_.a,{className:"f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l",to:"/login"},"Login"),r.a.createElement(_.a,{className:"f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l ",to:"/signUp "},"Sign up")))},ne=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1,isAuthenticated:!1},a.handlePusher=function(){a.state.visible&&a.setState({visible:!1})},a.onLogoutClick=function(){a.props.firebase.logout()},a.handleToggle=function(){return a.setState({visible:!a.state.visible})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.children,t=this.state,a=t.visible,n=t.isAuthenticated;return r.a.createElement("div",null,r.a.createElement(N.a,N.a.onlyMobile,r.a.createElement(q,{onPusherClick:this.handlePusher,onToggle:this.handleToggle,isLogin:n,onLogoutClick:this.onLogoutClick,visible:a},r.a.createElement(te,null,e))),r.a.createElement(N.a,{minWidth:N.a.onlyTablet.minWidth},r.a.createElement(ae,{isLogin:n,onLogoutClick:this.onLogoutClick}),r.a.createElement(te,null,e)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.auth.uid?{isAuthenticated:!0}:{isAuthenticated:!1}}}]),t}(n.Component),re=Object(Y.a)(Object(p.c)(Object(f.firebaseConnect)(),Object(b.connect)(function(e,t){return{auth:e.firebase.auth}}))(ne)),le=(n.Component,function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onSubmit=function(e){var t=e,n=a.props,r=n.firestore,l=n.client,i=n.history;r.update({collection:"clients",doc:l.id},t).then(i.push("/viewRobots"))},a.state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.client;return e?r.a.createElement(N.a,null,r.a.createElement(O.a,null,r.a.createElement(w.b,{onSubmit:this.onSubmit,initialValues:{robotId:e.robotId,firstName:e.firstName,lastName:e.lastName,email:e.email,notes:e.notes},render:function(e){var t=e.handleSubmit,a=e.form,n=e.submitting,l=e.pristine,i=e.values;return r.a.createElement("form",{className:"ui form",onSubmit:t},r.a.createElement("div",{className:"fields"},r.a.createElement("div",{className:"six wide field"},r.a.createElement(j.a,{fluid:!0},r.a.createElement(j.a.Header,null,r.a.createElement("label",null,"Robot image")),r.a.createElement(j.a.Content,null,void 0==i.robotId?r.a.createElement(C.a,{fluid:!0}," ",r.a.createElement(C.a.Image,{rectangular:!0})," "):r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(i.robotId,"?200*200")})))),r.a.createElement("div",{className:" ten wide field"},r.a.createElement("label",null,"Angriness"),r.a.createElement(w.a,{name:"robotId"},function(e){var t=e.input;e.meta;return r.a.createElement(k.Slider,Object.assign({},t,{color:"red",settings:{start:2,min:0,max:100,step:1,onChange:function(e){t.onChange(e)}}}))}),r.a.createElement("label",null,"First Name"),r.a.createElement(w.a,{name:"firstName",component:"input",type:"text",placeholder:"First Name"}),r.a.createElement("label",null,"Last Name"),r.a.createElement(w.a,{name:"lastName",component:"input",type:"text",placeholder:"Last Name"}),r.a.createElement("label",null,"Email"),r.a.createElement(w.a,{name:"email",component:"input",type:"text",placeholder:"Last Name"}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Notes"),r.a.createElement(w.a,{name:"notes",component:"textarea",placeholder:"Notes"})),r.a.createElement("div",null,r.a.createElement("button",{className:"ui primary basic button ",type:"submit",disabled:n||l},"Submit"),r.a.createElement("button",{className:"ui secondary basic button",onClick:a.reset,disabled:n||l},"Reset")),r.a.createElement("pre",null,JSON.stringify(i,0,2)))}}))):r.a.createElement("h1",null,"hi")}}]),t}(n.Component)),ie=Object(p.c)(Object(f.firestoreConnect)(function(e){return[{collection:"clients",storeAs:"client",doc:e.match.params.id}]}),Object(b.connect)(function(e,t){var a=e.firestore.ordered;return{client:a.client&&a.client[0]}}))(le),oe=a(3),ce=a.n(oe),se=function(e){var t=e.message,a=e.messageType;return r.a.createElement("div",{className:ce()("ui message",{positive:"success"===a,negative:"error"===a})},r.a.createElement("div",{className:"header"},t))},me=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){var t=e.email,n=e.password,r=a.props,l=r.firebase,i=r.history,o=r.notifyUser;l.login({email:t,password:n}).then(i.push("/viewRobots")).catch(function(e){return o("Invalid Login Credentials","error")})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.notify,t=e.message,a=e.messageType;return r.a.createElement(N.a,null,r.a.createElement(O.a,null,r.a.createElement(w.b,{onSubmit:this.onSubmit,initialValues:{},render:function(e){var n=e.handleSubmit,l=(e.form,e.submitting),i=e.pristine,o=e.values;return r.a.createElement("form",{className:ce()("ui form",{red:"error"===a,ribbon:"error"===a,label:"error"===a}),onSubmit:n},r.a.createElement("div",{className:"  field"},r.a.createElement("label",null,"Email"),r.a.createElement(w.a,{name:"email",component:"input",type:"email",placeholder:"Email"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Passwords"),r.a.createElement(w.a,{type:"password",name:"password",placeholder:"Password"},function(e){var t=e.input;e.meta;return r.a.createElement("input",Object.assign({type:"password"},t))})),t&&r.a.createElement(se,{message:t,messageType:a}),r.a.createElement("button",{className:"ui primary basic button ",type:"submit",disabled:l||i},"Login"),r.a.createElement("pre",null,JSON.stringify(o,0,2)))}})))}}]),t}(n.Component),ue=Object(p.c)(Object(f.firebaseConnect)(),Object(b.connect)(function(e,t){return{notify:e.notify}},{notifyUser:function(e,t){return{type:"NOTIFY_USER",messageType:t,message:e}}}))(me),be=a(221),de=a.n(be),he=a(227),pe=de()({}),fe=Object(he.connectedRouterRedirect)({wrapperDisplayName:"UserIsAuthenticated",AuthenticatingComponent:B.a,allowRedirectBack:!0,redirectPath:function(e,t){return pe.getRedirectQueryParam(t)||"/login"},authenticatingSelector:function(e){var t=e.firebase,a=t.auth,n=(t.profile,t.isInitializing);return!a.isLoaded||!0===n},authenticatedSelector:function(e){var t=e.firebase.auth;return t.isLoaded&&!t.isEmpty}}),Ee=Object(he.connectedRouterRedirect)({wrapperDisplayName:"UserIsNotAuthenticated",AuthenticatingComponent:B.a,allowRedirectBack:!1,redirectPath:function(e,t){return pe.getRedirectQueryParam(t)||"/"},authenticatingSelector:function(e){var t=e.firebase,a=t.auth,n=t.isInitializing;return!a.isLoaded||!0===n},authenticatedSelector:function(e){var t=e.firebase.auth;return t.isLoaded&&t.isEmpty}}),ge=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(b.Provider,{store:y},r.a.createElement(W.a,null,r.a.createElement("div",{className:"tc"},r.a.createElement(re,null,r.a.createElement(M.a,null,r.a.createElement(Q.a,{exact:!0,path:"/home",component:Ee(ue)}),r.a.createElement(Q.a,{exact:!0,path:"/createRobot",component:fe(S)}),r.a.createElement(Q.a,{exact:!0,path:"/viewRobots",component:fe(V)}),r.a.createElement(Q.a,{exact:!0,path:"/robot/edit/:id",component:fe(ie)}),r.a.createElement(Q.a,{exact:!0,path:"/login",component:Ee(ue)}),r.a.createElement(Q.a,{exact:!0,path:"/signUp",component:V}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(655);i.a.render(r.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[347,1,2]]]);
//# sourceMappingURL=main.d52c4ea9.chunk.js.map