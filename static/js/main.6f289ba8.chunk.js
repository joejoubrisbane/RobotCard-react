(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,t,a){e.exports=a.p+"static/media/robot.388b052a.png"},361:function(e,t,a){e.exports=a(668)},366:function(e,t,a){},367:function(e,t,a){},633:function(e,t,a){e.exports={disabledLink:"Card_disabledLink__1CX_t"}},644:function(e,t,a){},668:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(52),r=a.n(i),s=(a(366),a(27)),c=a(28),o=a(30),m=a(29),u=a(31),d=(a(367),a(26)),p=a(77),b={message:null,messageType:null},E=a(32),g=a(25),h=a(129),f=a.n(h),v=(a(581),a(583),a(585),a(236));f.a.initializeApp({apiKey:"AIzaSyC6rHHcP2S1RHoKZG8dZrcFIRX_T7Q4klY",authDomain:"robot-friend-b4cd3.firebaseapp.com",databaseURL:"https://robot-friend-b4cd3.firebaseio.com",projectId:"robot-friend-b4cd3",storageBucket:"robot-friend-b4cd3.appspot.com",messagingSenderId:"202082833271",appId:"1:202082833271:web:c1402d43dbc35061"}),f.a.firestore();var w=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||E.c)(Object(g.reactReduxFirebase)(f.a,{userProfile:"users"}),Object(v.reduxFirestore)(f.a))(E.d),N=Object(E.b)({firebase:g.firebaseReducer,firestore:v.firestoreReducer,notify:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NOTIFY_USER":return Object(p.a)({},e,{message:t.message,messageType:t.messageType});default:return e}},setting:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DISABLE_ROBOTS_ON_ADD":return Object(p.a)({},e,{disableRobotsOnAdd:t.payload});case"DISABLE_ROBOTS_ON_EDIT":return Object(p.a)({},e,{disableRobotsOnEdit:t.payload});case"ALLOW_REGISTRATION":return Object(p.a)({},e,{allowRegistration:t.payload});default:return e}}});if(null==localStorage.getItem("setting")){localStorage.setItem("setting",JSON.stringify({disableRobotsOnAdd:!0,disableRobotsOnEdit:!1,allowRegistration:!1}))}var y=w(N,{setting:JSON.parse(localStorage.getItem("setting"))}),O=a(692),j=a(686),I=a(683),S=a(684),x=a(20),R=a(105),_=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).onSubmit=function(e){var t=e,n=a.props,l=n.firestore,i=n.history;l.add({collection:"clients"},t).then(i.push("/viewRobots")).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.setting.disableRobotsOnAdd;return l.a.createElement(O.a,null,l.a.createElement(j.a,null,l.a.createElement(x.b,{onSubmit:this.onSubmit,initialValues:{},render:function(t){var a=t.handleSubmit,n=t.form,i=t.submitting,r=t.pristine,s=t.values;return l.a.createElement("form",{className:"ui form",onSubmit:a},l.a.createElement("div",{className:"fields"},l.a.createElement("div",{className:"six wide field"},l.a.createElement(I.a,{fluid:!0},l.a.createElement(I.a.Header,null,l.a.createElement("label",null,"Robot image")),l.a.createElement(I.a.Content,null,void 0==s.robotId?l.a.createElement(S.a,{fluid:!0}," ",l.a.createElement(S.a.Image,{rectangular:!0})," "):l.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(s.robotId,"?bgset=bg1&size=300x300")})))),l.a.createElement("div",{className:" ten wide field"},l.a.createElement("label",null,"Angriness"),l.a.createElement(x.a,{name:"robotId"},function(t){var a=t.input;t.meta;return l.a.createElement(R.Slider,Object.assign({disabled:e},a,{color:"red",settings:{start:2,min:0,max:100,step:1,onChange:function(e){a.onChange(e)}}}))}),l.a.createElement("label",null,"First Name"),l.a.createElement(x.a,{disabled:e,name:"firstName",component:"input",type:"text",placeholder:"First Name"}),l.a.createElement("label",null,"Last Name"),l.a.createElement(x.a,{disabled:e,name:"lastName",component:"input",type:"text",placeholder:"Last Name"}),l.a.createElement("label",null,"Email"),l.a.createElement(x.a,{disabled:e,name:"email",component:"input",type:"text",placeholder:"Last Name"}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Notes"),l.a.createElement(x.a,{name:"notes",component:"textarea",placeholder:"Notes"})),l.a.createElement("div",null,l.a.createElement("button",{className:"ui primary basic button ",type:"submit",disabled:i||r||e},"Submit"),l.a.createElement("button",{className:"ui secondary basic button",onClick:n.reset,disabled:i||r||e},"Reset")),l.a.createElement("pre",null,JSON.stringify(s,0,2)))}})))}}]),t}(n.Component),C=Object(E.c)(Object(g.firestoreConnect)(),Object(d.connect)(function(e,t){return{setting:e.setting}}))(_),k=a(682),L=a(351),A=a(687),D=a(669),q=a(238),T=a(4),P=a.n(T),F=(a(633),Object(E.c)(Object(g.firestoreConnect)(),Object(d.connect)(function(e,t){return{setting:e.setting}}))(function(e){var t=e.robotId,a=e.id,n=e.name,i=e.email,r=e.notes,s=e.firestore,c=e.history,o=e.setting;void 0==t&&(t=a);return l.a.createElement(k.a,{closeIcon:!0,trigger:l.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5"},l.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?bgset=bg1&size=200x200")}),l.a.createElement("div",null,l.a.createElement("h2",null,n),l.a.createElement("p",null,i),l.a.createElement("p",null,r)))},l.a.createElement(k.a.Header,null,"Robot Details"),l.a.createElement(k.a.Content,{image:!0},l.a.createElement(L.a,{wrapped:!0,size:"medium",src:"https://robohash.org/".concat(t,"?200*200")}),l.a.createElement(k.a.Description,null,l.a.createElement(A.a,null,n),l.a.createElement("p",null,"We've found the following gravatar image associated with your e-mail address."),l.a.createElement("p",null,"Is it okay to use this photo?"),l.a.createElement("p",null,r),l.a.createElement(q.a,{className:P()("ui button  primary",{disabled:o.disableRobotsOnEdit}),to:"/robot/edit/".concat(a)}," Edit Robot"),l.a.createElement(D.a,{onClick:function(){s.delete({collection:"clients",doc:a}).then(c.push("/viewRobots")).catch(function(e){return console.log(e)})},negative:!0,disabled:o.disableRobotsOnEdit}," Delete"))))})),J=a(64),B=a.n(J),V=function(e){var t=e.robots,a=e.firestore,n=e.history,i=B.a.map(t,function(e){return l.a.createElement(F,Object.assign({history:n,firestore:a,key:e.id},e))});return l.a.createElement("div",null,i)},z=function(e){e.searchfield;var t=e.searchChange;return l.a.createElement("div",{className:"pa2 "},l.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search for Robot friends",onChange:t}))},U=function(e){return l.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},H=a(677),W=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).onSearchChange=function(e){a.setState({searchfield:e.target.value})},a.state={searchfield:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.clients,n=t.firestore,i=t.history,r=B.a.map(a,function(e){return Object(p.a)({name:e.firstName+e.lastName},e)}),s=B.a.filter(r,function(t){return B.a.toLower(t.name).includes(B.a.toLower(e.state.searchfield))});return a?l.a.createElement("div",null,l.a.createElement("h1",{className:"f1"},"Robot Friends"),l.a.createElement(z,{searchChange:this.onSearchChange}),l.a.createElement(U,null,l.a.createElement(V,{history:i,firestore:n,robots:s}))):l.a.createElement(H.a,{active:!0,size:"large"}," ",l.a.createElement("h3",null,"Making robots"))}}]),t}(n.Component),G=Object(E.c)(Object(g.firestoreConnect)([{collection:"clients"}]),Object(d.connect)(function(e,t){return{clients:e.firestore.ordered.clients}}))(W),M=a(691),Y=a(693),X=a(349),Q=a(695),K=a(679),Z=a(177),$=a.n(Z),ee=a(688),te=a(685),ae=a(91),ne=(a(644),a(689)),le=a(681),ie=function(e){var t=e.message,a=e.messageType;return l.a.createElement("div",{className:P()("ui message",{positive:"success"===a,negative:"error"===a})},l.a.createElement("div",{className:"header"},t))},re=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.setting,t=e.disableRobotsOnAdd,a=e.disableRobotsOnEdit,n=e.allowRegistration,i=this.props,r=i.setDisableRobotsOnAdd,s=i.setDisableRobotsOnEdit,c=i.setAllowRegistration;return l.a.createElement(ne.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle"},l.a.createElement(ne.a.Column,{style:{maxWidth:450}},l.a.createElement(A.a,{as:"h2",color:"teal",textAlign:"center"},l.a.createElement(q.a,{to:"/viewRobots"},"Back to View Robots")),l.a.createElement(I.a,{fluid:!0},l.a.createElement(I.a.Header,null,"Edit Setting"),l.a.createElement(I.a.Content,null,l.a.createElement(le.a,null,l.a.createElement(le.a.Checkbox,{label:"Allow Registration",checked:!!n,onChange:c}),l.a.createElement(le.a.Checkbox,{label:"Disable add robots ",checked:!!t,onChange:r}),l.a.createElement(le.a.Checkbox,{label:"Disable edit robots",checked:!!a,onChange:s}))))))}}]),t}(n.Component),se=Object(d.connect)(function(e,t){return{auth:e.firebase.auth,setting:e.setting}},{setDisableRobotsOnAdd:function(){var e=JSON.parse(localStorage.getItem("setting"));return e.disableRobotsOnAdd=!e.disableRobotsOnAdd,localStorage.setItem("setting",JSON.stringify(e)),{type:"DISABLE_ROBOTS_ON_ADD",payload:e.disableRobotsOnAdd}},setDisableRobotsOnEdit:function(){var e=JSON.parse(localStorage.getItem("setting"));return e.disableRobotsOnEdit=!e.disableRobotsOnEdit,localStorage.setItem("setting",JSON.stringify(e)),{type:"DISABLE_ROBOTS_ON_EDIT",payload:e.disableRobotsOnEdit}},setAllowRegistration:function(){var e=JSON.parse(localStorage.getItem("setting"));return e.allowRegistration=!e.allowRegistration,localStorage.setItem("setting",JSON.stringify(e)),{type:"ALLOW_REGISTRATION",payload:e.allowRegistration}}})(re),ce=function(e){var t=e.children,a=e.isLogin,i=e.onPusherClick,r=e.onToggle,s=e.visible,c=e.onLogoutClick;return l.a.createElement(ee.a.Pushable,null,l.a.createElement(ee.a,{as:te.a,animation:"overlay",icon:"labeled",inverted:!0,direction:"right",vertical:!0,visible:s},l.a.createElement(te.a.Item,{onClick:r,as:K.a,to:"/home"},"Home"),l.a.createElement(te.a.Item,{onClick:r,to:"/createRobot",as:K.a},"Create Robot"),l.a.createElement(te.a.Item,{onClick:r,as:K.a,to:"/viewRobots"},"View Robots"),a?l.a.createElement(n.Fragment,null,l.a.createElement(te.a.Item,{onClick:function(){r()},to:"/setting",as:K.a},"Setting"),l.a.createElement(te.a.Item,{onClick:function(){c(),r()},to:"/home",as:K.a},"Log out")):l.a.createElement("div",null,l.a.createElement(te.a.Item,{onClick:r,to:"/login",as:K.a},"Login"),l.a.createElement(te.a.Item,{onClick:r,to:"/signUp",as:K.a},"Sign up"))),l.a.createElement(ee.a.Pusher,{dimmed:s,onClick:i,fixed:"top",style:{minHeight:"100vh"}},l.a.createElement(te.a,{fixed:"top",inverted:!0},l.a.createElement(te.a.Item,null,l.a.createElement(L.a,{size:"mini",src:$.a})),l.a.createElement(te.a.Item,null,l.a.createElement("h4",null,"Robot Friends")),l.a.createElement(te.a.Item,{position:"right",onClick:r},l.a.createElement(ae.a,{name:"sidebar"}))),t))},oe=a(680),me=function(e){var t=e.children;return l.a.createElement(oe.a,{style:{marginTop:"5em"}},t)},ue=function(e){var t=e.onLogoutClick,a=e.isLogin;return l.a.createElement(te.a,{fixed:"top",inverted:!0},l.a.createElement(te.a.Item,null,l.a.createElement(L.a,{size:"mini",src:$.a})),l.a.createElement(te.a.Header,null,l.a.createElement("h5",{className:"f1"},"Robot Friends")),l.a.createElement(te.a.Menu,{position:"right"},l.a.createElement(K.a,{className:"f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l ",to:"/home"},"Home"),l.a.createElement(K.a,{className:"f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l ",to:"/createRobot"},"Create Robot"),l.a.createElement(K.a,{className:"f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l ",to:"/viewRobots"},"View Robots"),a?l.a.createElement(n.Fragment,null,l.a.createElement(K.a,{className:"f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l",to:"/setting"},"Setting"),l.a.createElement(K.a,{className:"f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l",onClick:t,to:"/home"},"Log out")):l.a.createElement("div",null,l.a.createElement(K.a,{className:"f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l",to:"/login"},"Login"),l.a.createElement(K.a,{className:"f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l ",to:"/signUp"},"Sign up"))))},de=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={visible:!1,isAuthenticated:!1},a.handlePusher=function(){a.state.visible&&a.setState({visible:!1})},a.onLogoutClick=function(){a.props.firebase.logout()},a.handleToggle=function(){return a.setState({visible:!a.state.visible})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.children,t=this.state,a=t.visible,n=t.isAuthenticated;return l.a.createElement("div",null,l.a.createElement(O.a,O.a.onlyMobile,l.a.createElement(ce,{onPusherClick:this.handlePusher,onToggle:this.handleToggle,isLogin:n,onLogoutClick:this.onLogoutClick,visible:a},l.a.createElement(me,null,e))),l.a.createElement(O.a,{minWidth:O.a.onlyTablet.minWidth},l.a.createElement(ue,{isLogin:n,onLogoutClick:this.onLogoutClick}),l.a.createElement(me,null,e)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.auth.uid?{isAuthenticated:!0}:{isAuthenticated:!1}}}]),t}(n.Component),pe=Object(Q.a)(Object(E.c)(Object(g.firebaseConnect)(),Object(d.connect)(function(e,t){return{auth:e.firebase.auth,setting:e.setting}}))(de)),be=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"logo pull-left animated wow fadeInLeft"},l.a.createElement("img",{className:"logo-image",src:"../../../public/img/logo.png",alt:"",title:""})),l.a.createElement("nav",{className:"pull-left"},l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",{className:"animated wow fadeInLeft","data-wow-delay":"0s"},l.a.createElement("a",{href:"#about"},"About")),l.a.createElement("li",{className:"animated wow fadeInLeft","data-wow-delay":".1s"},l.a.createElement("a",{href:"#app_features"},"Features")),l.a.createElement("li",{className:"animated wow fadeInLeft","data-wow-delay":".2s"},l.a.createElement("a",{href:"#testimonials"},"Testimonials")))),l.a.createElement("div",{className:"social pull-right"},l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",{className:"animated wow fadeInRight","data-wow-delay":".2s"},l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"../../../public/img/facebook.png",alt:"",title:""}))),l.a.createElement("li",{className:"animated wow fadeInRight","data-wow-delay":".1s"},l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"../../../public/img/twitter.png",alt:"",title:""}))),l.a.createElement("li",{className:"animated wow fadeInRight","data-wow-delay":"0s"},l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"../../../public/img/google.png",alt:"",title:""}))))),l.a.createElement("span",{className:"burger_icon"},"menu"))),l.a.createElement("section",{className:"hero",id:"hero"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"caption"},l.a.createElement("h1",{className:"text-uppercase  animated wow fadeInLeft"},"Creators of Robofriends and SmartBrain"),l.a.createElement("p",{className:"enhance text-lowercase  animated wow fadeInLeft"},"Developers of the future, building for today"),l.a.createElement("a",{href:"https://github.com/aneagoie/robofriends",className:"app_store_btn text-uppercase animated wow fadeInLeft"},l.a.createElement("i",{className:"android_icon"}),l.a.createElement("span",null,"Robofriends")),l.a.createElement("a",{href:"https://github.com/aneagoie/smart-brain",className:"app_store_btn text-uppercase animated wow fadeInLeft"},l.a.createElement("i",{className:"iphone_icon"}),l.a.createElement("span",null,"SmartBrain"))))),l.a.createElement("section",{className:"featured_on"},l.a.createElement("div",{className:"container"},l.a.createElement("ul",{className:"list-unstyled text-center clearfix"},l.a.createElement("li",{className:"col-xs-6 col-sm-6 col-md-3 animated wow fadeInDown"},l.a.createElement("img",{src:"../../../public/img/google_logo.png",alt:"",title:""})),l.a.createElement("li",{className:"col-xs-6 col-sm-6 col-md-3 animated wow fadeInDown","data-wow-delay":".2s"},l.a.createElement("img",{src:"../../../public/img/facebook_logo.png",alt:"",title:""})),l.a.createElement("li",{className:"col-xs-6 col-sm-6 col-md-3 animated wow fadeInDown","data-wow-delay":".3s"},l.a.createElement("img",{src:"../../../public/img/yahoo_logo.png",alt:"",title:""})),l.a.createElement("li",{className:"col-xs-6 col-sm-6 col-md-3 animated wow fadeInDown","data-wow-delay":".4s"},l.a.createElement("img",{src:"../../../public/img/paypal_logo.png",alt:"",title:""}))))),l.a.createElement("section",{className:"about",id:"about"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 text-center animated wow fadeInLeft"},l.a.createElement("div",{className:"iphone"},l.a.createElement("img",{src:"../../../public/img/iphone.png",alt:"",titl:""}))),l.a.createElement("div",{className:"col-md-6 animated wow fadeInRight"},l.a.createElement("div",{className:"features_list"},l.a.createElement("h1",{className:"text-uppercase"},"The Greatest Products Ever Created"),l.a.createElement("p",null,"Seuismod ligula ipsum vulputate tellus quisque dictum tortor at purus faucibus tincidunt, pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."," "),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",{className:"camera_icon"},l.a.createElement("span",null,"Euismod ligula ipsum vulputate tellus.")),l.a.createElement("li",{className:"video_icon"},l.a.createElement("span",null,"Morbi non efficitur nibh sit amet est eros.")),l.a.createElement("li",{className:"eye_icon"},l.a.createElement("span",null,"Fusce faucibus ante liberonec luctus egestas.")),l.a.createElement("li",{className:"pic_icon"},l.a.createElement("span",null,"Quisque pretium malesuada ornare.")),l.a.createElement("li",{className:"loc_icon"},l.a.createElement("span",null,"Cras interdum vestibulum dolor."))),l.a.createElement("a",{href:"#",className:"app_store_btn text-uppercase",id:"play_video","data-video":"https://www.youtube.com/watch?v=sCX_YMPuJGA?autoplay=1&showinfo=0"},l.a.createElement("i",{className:"play_icon"}),l.a.createElement("span",null,"About Video")),l.a.createElement("a",{href:"#hero",className:"app_link"},"Get the app"))))),l.a.createElement("div",{className:"about_video show_video"},l.a.createElement("a",{href:"",className:"close_video"}))),l.a.createElement("section",{className:"app_features",id:"app_features"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-sm-4 col-md-4 details animated wow fadeInDown","data-wow-delay":"0s"},l.a.createElement("img",{src:"../../../public/img/f_icon1.png",alt:"",title:""}),l.a.createElement("h1",{className:"text-uppercase"},"malesuada fames turpis."),l.a.createElement("p",{className:"text-lowercase"},"vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit.")),l.a.createElement("div",{className:"col-sm-4 col-md-4 details animated wow fadeInDown","data-wow-delay":".1s"},l.a.createElement("img",{src:"../../../public/img/f_icon2.png",alt:"",title:""}),l.a.createElement("h1",{className:"text-uppercase"},"malesuada fames turpis."),l.a.createElement("p",{className:"text-lowercase"},"vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit.")),l.a.createElement("div",{className:"col-sm-4 col-md-4 details animated wow fadeInDown","data-wow-delay":".2s"},l.a.createElement("img",{src:"../../../public/img/f_icon3.png",alt:"",title:""}),l.a.createElement("h1",{className:"text-uppercase"},"malesuada fames turpis."),l.a.createElement("p",{className:"text-lowercase"},"vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit."))),l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-sm-4 col-md-4 details animated wow fadeInDown","data-wow-delay":"0s"},l.a.createElement("img",{src:"../../../public/img/f_icon4.png",alt:"",title:""}),l.a.createElement("h1",{className:"text-uppercase"},"malesuada fames turpis."),l.a.createElement("p",{className:"text-lowercase"},"vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit.")),l.a.createElement("div",{className:"col-sm-4 col-md-4 details animated wow fadeInDown","data-wow-delay":".1s"},l.a.createElement("img",{src:"../../../public/img/f_icon5.png",alt:"",title:""}),l.a.createElement("h1",{className:"text-uppercase"},"malesuada fames turpis."),l.a.createElement("p",{className:"text-lowercase"},"vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit.")),l.a.createElement("div",{className:"col-sm-4 col-md-4 details animated wow fadeInDown","data-wow-delay":".2s"},l.a.createElement("img",{src:"../../../public/img/f_icon6.png",alt:"",title:""}),l.a.createElement("h1",{className:"text-uppercase"},"malesuada fames turpis."),l.a.createElement("p",{className:"text-lowercase"},"vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit."))))),l.a.createElement("section",{className:"testimonials animated wow fadeIn",id:"testimonials","data-wow-duration":"2s"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"testimonials_list"},l.a.createElement("ul",{className:"list-unstyled text-center slides clearfix",id:"tslider"},l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"Integer pharetra tellus varius, dictum erat vel, maximus tellus. Sed vitae auctor ipsum. Aliquam luctus erat nec pulvinar vehicula donec congue tortor eget sem condimentum, ut tempor massa porttitor. Praesent tincidunt mi orci in sollicitudin mi dapibus dapibus pellentesque habitant morbi tristique senectus et malesuada fames turpis egestas."),l.a.createElement("span",{className:"author text-uppercase"},"John Doe"),l.a.createElement("span",{className:"job"},"Full Stack developer"))),l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"Integer pharetra tellus varius, dictum erat vel, maximus tellus. Sed vitae auctor ipsum. Aliquam luctus erat nec pulvinar vehicula donec congue tortor eget sem condimentum, ut tempor massa porttitor. Praesent tincidunt mi orci in sollicitudin mi dapibus dapibus pellentesque habitant morbi tristique senectus et malesuada fames turpis egestas."),l.a.createElement("span",{className:"author text-uppercase"},"Alex Fredy"),l.a.createElement("span",{className:"job"},"Javascript developer"))),l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"Integer pharetra tellus varius, dictum erat vel, maximus tellus. Sed vitae auctor ipsum. Aliquam luctus erat nec pulvinar vehicula donec congue tortor eget sem condimentum, ut tempor massa porttitor. Praesent tincidunt mi orci in sollicitudin mi dapibus dapibus pellentesque habitant morbi tristique senectus et malesuada fames turpis egestas."),l.a.createElement("span",{className:"author text-uppercase"},"Sara Aliba"),l.a.createElement("span",{className:"job"},"Web Designer")))),l.a.createElement("div",{id:"slider_nav"},l.a.createElement("div",{id:"prev_arrow"}),l.a.createElement("div",{id:"next_arrow"}))))),l.a.createElement("section",{className:"sub_box"},l.a.createElement("p",{className:"cta_text animated wow fadeInDown"},"We're hiring. Join Our company!"),l.a.createElement("form",{action:"#",metohd:"post",className:"animated wow fadeIn","data-wow-duration":"2s",id:"submit_form"},l.a.createElement("input",{type:"email",id:"mc-email",placeholder:"Enter your email"}),l.a.createElement("button",{type:"submit",id:"mc_submit"},l.a.createElement("i",{className:"icon"}))),l.a.createElement("div",{className:"message",id:"error_msg"},"Please Enter A Valid Email."),l.a.createElement("div",{className:"message",id:"success_msg"},"Thank You For Your Subscription.")),l.a.createElement("footer",null,l.a.createElement("ul",{className:"list-unstyled list-inline app_platform"},l.a.createElement("li",{className:"animated wow fadeInDown","data-wow-delay":"0s"},l.a.createElement("a",{href:""},l.a.createElement("img",{src:"../../../public/img/android_icon.png",alt:"",title:""}))),l.a.createElement("li",{className:"animated wow fadeInDown","data-wow-delay":".1s"},l.a.createElement("a",{href:""},l.a.createElement("img",{src:"../../../public/img/ios_icon.png",alt:"",title:""}))),l.a.createElement("li",{className:"animated wow fadeInDown","data-wow-delay":".2s"},l.a.createElement("a",{href:""},l.a.createElement("img",{src:"../../../public/img/windows_icon.png",alt:"",title:""})))),l.a.createElement("p",{className:"copyright animated wow fadeIn","data-wow-duration":"2s"},l.a.createElement("strong",null,"Pixelhint"))))}}]),t}(n.Component),Ee=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).onSubmit=function(e){var t=e,n=a.props,l=n.firestore,i=n.client,r=n.history;l.update({collection:"clients",doc:i.id},t).then(r.push("/viewRobots")).catch(function(e){return console.log(e)})},a.state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.client;return e?l.a.createElement(O.a,null,l.a.createElement(j.a,null,l.a.createElement(x.b,{onSubmit:this.onSubmit,initialValues:{robotId:e.robotId,firstName:e.firstName,lastName:e.lastName,email:e.email,notes:e.notes},render:function(e){var t=e.handleSubmit,a=e.form,n=e.submitting,i=e.pristine,r=e.values;return l.a.createElement("form",{className:"ui form",onSubmit:t},l.a.createElement("div",{className:"fields"},l.a.createElement("div",{className:"six wide field"},l.a.createElement(I.a,{fluid:!0},l.a.createElement(I.a.Header,null,l.a.createElement("label",null,"Robot image")),l.a.createElement(I.a.Content,null,void 0==r.robotId?l.a.createElement(S.a,{fluid:!0}," ",l.a.createElement(S.a.Image,{rectangular:!0})," "):l.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r.robotId,"?bgset=bg1&size=300x300")})))),l.a.createElement("div",{className:" ten wide field"},l.a.createElement("label",null,"Angriness"),l.a.createElement(x.a,{name:"robotId"},function(e){var t=e.input;e.meta;return l.a.createElement(R.Slider,Object.assign({},t,{color:"red",settings:{start:2,min:0,max:100,step:1,onChange:function(e){t.onChange(e)}}}))}),l.a.createElement("label",null,"First Name"),l.a.createElement(x.a,{name:"firstName",component:"input",type:"text",placeholder:"First Name"}),l.a.createElement("label",null,"Last Name"),l.a.createElement(x.a,{name:"lastName",component:"input",type:"text",placeholder:"Last Name"}),l.a.createElement("label",null,"Email"),l.a.createElement(x.a,{name:"email",component:"input",type:"text",placeholder:"Last Name"}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Notes"),l.a.createElement(x.a,{name:"notes",component:"textarea",placeholder:"Notes"})),l.a.createElement("div",null,l.a.createElement("button",{className:"ui primary basic button ",type:"submit",disabled:n||i},"Submit"),l.a.createElement("button",{className:"ui secondary basic button",onClick:a.reset,disabled:n||i},"Reset")),l.a.createElement("pre",null,JSON.stringify(r,0,2)))}}))):l.a.createElement("h1",null,"hi")}}]),t}(n.Component),ge=Object(E.c)(Object(g.firestoreConnect)(function(e){return[{collection:"clients",storeAs:"client",doc:e.match.params.id}]}),Object(d.connect)(function(e,t){var a=e.firestore.ordered;return{client:a.client&&a.client[0]}}))(Ee),he=a(678),fe=function(e,t){return{type:"NOTIFY_USER",messageType:t,message:e}},ve=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).onSubmit=function(e){var t=e.email,n=e.password,l=a.props,i=l.firebase,r=l.history,s=l.notifyUser;i.login({email:t,password:n}).then(r.push("/viewRobots")).catch(function(e){return s("Invalid Login Credentials","error")})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.notify,t=e.message,a=e.messageType;return l.a.createElement(O.a,null,l.a.createElement(ne.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle"},l.a.createElement(ne.a.Column,{style:{maxWidth:450}},l.a.createElement(j.a,{raised:!0,stacked:!0},l.a.createElement(I.a,{fluid:!0},l.a.createElement(L.a,{alt:"robots",src:"https://robohash.org/1?bgset=bg1&set=set3&size=392x392",wrapped:!0,ui:!1}),l.a.createElement(I.a.Content,{extra:!0},l.a.createElement(x.b,{onSubmit:this.onSubmit,initialValues:{},render:function(e){var n=e.handleSubmit,i=(e.form,e.submitting),r=e.pristine,s=e.values;return l.a.createElement("form",{className:P()("ui form"),onSubmit:n},l.a.createElement("div",{className:"  field"},l.a.createElement("label",null,"Email"),l.a.createElement(x.a,{name:"email",component:"input",type:"email",placeholder:"Email"},function(e){var t=e.input;e.meta;return l.a.createElement(he.a,Object.assign({type:"email"},t,{icon:"mail",iconPosition:"left",placeholder:"Email"}))})),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Passwords"),l.a.createElement(x.a,{type:"password",name:"password",placeholder:"Password"},function(e){var t=e.input;e.meta;return l.a.createElement(he.a,Object.assign({type:"password"},t,{icon:"lock",iconPosition:"left",placeholder:"Password"}))})),t&&l.a.createElement(ie,{message:t,messageType:a}),l.a.createElement("button",{className:"ui primary button fluid ",type:"submit",disabled:i||r},"Login"),l.a.createElement("pre",null,JSON.stringify(s,0,2)))}})))))))}}]),t}(n.Component),we=Object(E.c)(Object(g.firebaseConnect)(),Object(d.connect)(function(e,t){return{notify:e.notify}},{notifyUser:fe}))(ve),Ne=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).onSubmit=function(e){var t=e.email,n=e.password,l=a.props,i=l.firebase,r=(l.history,l.notifyUser);i.createUser({email:t,password:n}).catch(function(e){return r("That email already exits","error")})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.notify,t=e.message,a=e.messageType;return l.a.createElement(O.a,null,l.a.createElement(j.a,null,l.a.createElement(x.b,{onSubmit:this.onSubmit,initialValues:{},render:function(e){var n=e.handleSubmit,i=e.form,r=e.submitting,s=e.pristine,c=e.values;return l.a.createElement("form",{className:"ui form",onSubmit:n},l.a.createElement("div",{className:"fields"},l.a.createElement("div",{className:"six wide field"},l.a.createElement(I.a,{fluid:!0},l.a.createElement(I.a.Header,null,l.a.createElement("label",null,"Let's start! ")),l.a.createElement(L.a,{alt:"robots",src:"https://robohash.org/2?set=set5&bgset=bg1&size=300x300",wrapped:!0,ui:!1}))),l.a.createElement("div",{className:" ten wide field"},l.a.createElement("label",null,"First Name"),l.a.createElement(x.a,{name:"firstName",component:"input",type:"text",placeholder:"First Name"}),l.a.createElement("label",null,"Last Name"),l.a.createElement(x.a,{name:"lastName",component:"input",type:"text",placeholder:"Last Name"}),l.a.createElement("label",null,"Email"),l.a.createElement(x.a,{name:"email",component:"input",type:"email",placeholder:"Email"}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Password"),l.a.createElement(x.a,{name:"password",type:"password",component:"input",placeholder:"Password"})),t&&l.a.createElement(ie,{message:t,messageType:a}),l.a.createElement("div",null,l.a.createElement("button",{className:"ui primary basic button ",type:"submit",disabled:r||s},"Submit"),l.a.createElement("button",{className:"ui secondary basic button",onClick:i.reset,disabled:r||s},"Reset")),l.a.createElement("pre",null,JSON.stringify(c,0,2)))}})))}}]),t}(n.Component),ye=Object(E.c)(Object(g.firebaseConnect)(),Object(d.connect)(function(e,t){return{notify:e.notify}},{notifyUser:fe}))(Ne),Oe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={hasError:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?l.a.createElement("div",null,l.a.createElement("h1",null,"Ooooops. That is not good "),l.a.createElement("img",{src:"https://robohash.org/1?set=set5&bgset=bg1&size=300x300",alt:"I am sorry"}),l.a.createElement("p",null,"Let me get back to you soon")):this.props.children}}]),t}(n.Component),je=a(234),Ie=a.n(je),Se=a(240),xe=Ie()({}),Re=Object(Se.connectedRouterRedirect)({wrapperDisplayName:"UserIsAuthenticated",AuthenticatingComponent:H.a,allowRedirectBack:!0,redirectPath:function(e,t){return xe.getRedirectQueryParam(t)||"/login"},authenticatingSelector:function(e){var t=e.firebase,a=t.auth,n=(t.profile,t.isInitializing);return!a.isLoaded||!0===n},authenticatedSelector:function(e){var t=e.firebase.auth;return t.isLoaded&&!t.isEmpty}}),_e=Object(Se.connectedRouterRedirect)({wrapperDisplayName:"UserIsNotAuthenticated",AuthenticatingComponent:H.a,allowRedirectBack:!1,redirectPath:function(e,t){return xe.getRedirectQueryParam(t)||"/"},authenticatingSelector:function(e){var t=e.firebase,a=t.auth,n=t.isInitializing;return!a.isLoaded||!0===n},authenticatedSelector:function(e){var t=e.firebase.auth;return t.isLoaded&&t.isEmpty}}),Ce=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(d.Provider,{store:y},l.a.createElement(M.a,null,l.a.createElement("div",{className:"tc"},l.a.createElement(pe,null,l.a.createElement(Oe,null,l.a.createElement(Y.a,null,l.a.createElement(X.a,{exact:!0,path:"/home",component:be}),l.a.createElement(X.a,{exact:!0,path:"/createRobot",component:Re(C)}),l.a.createElement(X.a,{exact:!0,path:"/viewRobots",component:Re(G)}),l.a.createElement(X.a,{exact:!0,path:"/robot/edit/:id",component:Re(ge)}),l.a.createElement(X.a,{exact:!0,path:"/login",component:_e(we)}),l.a.createElement(X.a,{exact:!0,path:"/signUp",component:_e(ye)}),l.a.createElement(X.a,{exact:!0,path:"/setting",component:se})))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(667);r.a.render(l.a.createElement(Ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[361,1,2]]]);
//# sourceMappingURL=main.6f289ba8.chunk.js.map