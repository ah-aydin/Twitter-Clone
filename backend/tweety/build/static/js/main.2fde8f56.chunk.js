(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{37:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(22),a=n.n(c),r=n(3),o=n(19),i=n(38),l=n(39),u=n(2),j="LOGIN_SUCCESS",b="LOGIN_FAIL",d="SIGNUP_SUCCESS",m="SIGNUP_FAIL",p="ACTIVATION_SUCCESS",h="ACTIVATION_FAIL",O="LOGOUT",x="USER_LOAD_SUCCESS",f="USER_LOAD_FAIL",v="FOLLOW_ACCOUNT",w="TWEET_GET_FOLLOWING_SUCCESS",_="TWEET_GET_FOLLOWING_FAIL",g="LOAD_MORE_FOLLOWING_SUCCESS",N="LOAD_MORE_FOLLOWING_FAIL",y="TWEET_CLEAR",S="LOAD_USER_TWEET_SUCCESS",E="LOAD_USER_TWEET_FAIL",A="LOAD_USER_MORE_TWEET_SUCCESS",k="LOAD_USER_MORE_TWEET_FAIL",C="LOAD_EXPLORE_TWEET_SUCCESS",T="LOAD_EXPLORE_TWEET_FAIL",L="LOAD_EXPLORE_TWEET_MORE_SUCCESS",I="LOAD_EXPLORE_TWEET_MORE_FAIL",U={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:!1,login_success:!0,user:null,errors:[],successes:[]},F=function(e){var t=[];for(var n in e)t.push(e[n]);return t},W=function(){localStorage.removeItem("access"),localStorage.removeItem("refresh"),localStorage.removeItem("user")},R=n(16),D={following_tweets:{results:[],next:null,previous:null},tweets:{results:[],next:null,previous:null},explore_tweets:{results:[],next:null,previous:null},errors:[]},M=Object(o.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,n=t.type,s=t.payload;switch(n){case j:return localStorage.setItem("access",s.access),localStorage.setItem("refresh",s.refresh),Object(u.a)(Object(u.a)({},e),{},{isAuthenticated:!0,access:s.access,login_success:!0,refresh:s.refresh,errors:[],successes:[]});case b:return W(),Object(u.a)(Object(u.a)({},e),{},{isAuthenticated:!1,access:null,refresh:null,login_success:!1,user:null,errors:F(s),successes:[]});case x:return localStorage.setItem("user",s),Object(u.a)(Object(u.a)({},e),{},{isAuthenticated:!0,user:s,errors:[],successes:[]});case f:return Object(u.a)(Object(u.a)({},e),{},{isAuthenticated:!1,user:null,errors:F(s),successes:[]});case O:return W(),Object(u.a)(Object(u.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null,errors:[],successes:[]});case h:case m:return Object(u.a)(Object(u.a)({},e),{},{errors:F(s),successes:[]});case d:return Object(u.a)(Object(u.a)({},e),{},{errors:[],successes:["An activation email has been sent to ".concat(s)]});case v:case p:return Object(u.a)({},e);default:return e}},tweet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,n=t.type,s=t.payload;switch(n){case S:return Object(u.a)(Object(u.a)({},e),{},{tweets:Object(u.a)(Object(u.a)({},e.tweets),{},{results:Object(R.a)(s.results),next:s.next})});case A:return Object(u.a)(Object(u.a)({},e),{},{tweets:{results:[].concat(Object(R.a)(e.tweets.results),Object(R.a)(s.results)),next:s.next,previous:s.previous}});case T:return Object(u.a)(Object(u.a)({},e),{},{tweets:{results:[],next:null,previous:null}});case I:case k:return Object(u.a)({},e);case C:return Object(u.a)(Object(u.a)({},e),{},{explore_tweets:Object(u.a)(Object(u.a)({},e.explore_tweets),{},{results:Object(R.a)(s.results),next:s.next})});case L:return Object(u.a)(Object(u.a)({},e),{},{explore_tweets:{results:[].concat(Object(R.a)(e.tweets.results),Object(R.a)(s.results)),next:s.next,previous:s.previous}});case E:return Object(u.a)(Object(u.a)({},e),{},{explore_tweets:{results:[],next:null,previous:null}});case w:return Object(u.a)(Object(u.a)({},e),{},{following_tweets:s});case g:return Object(u.a)(Object(u.a)({},e),{},{following_tweets:Object(u.a)(Object(u.a)({},e.following_tweets),{},{results:[].concat(Object(R.a)(e.following_tweets.results),Object(R.a)(s.results)),next:s.next,previous:s.previous})});case N:return Object(u.a)({},e);case y:case _:return Object(u.a)(Object(u.a)({},e),{},{following_tweets:{results:[],next:null,previous:null}});default:return e}}}),P=[l.a],J=Object(o.createStore)(M,{},Object(i.composeWithDevTools)(o.applyMiddleware.apply(void 0,P))),q=n(5),G=n(7);var z=Object(G.g)((function(e){var t=e.history;return Object(s.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[]),null})),B=n(9),H=n(6),V=n.n(H),X=n(11),Y=n(8),K=n.n(Y),Q=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("access"))}};t=n?JSON.stringify({content:e,retweet_id:n}):JSON.stringify({content:e}),K.a.post("".concat("http://localhost:8000/","api/tweet/"),t,s).catch((function(e){console.log(e.response)}))},Z=function(e){return function(){var t=Object(X.a)(V.a.mark((function t(n){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:K.a.get("".concat("http://localhost:8000/","api/account/").concat(e,"/tweets/"),{}).then((function(e){var t=e.data;n({type:S,payload:t})})).catch((function(e){n({type:E})}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},$=function(e){return function(){var t=Object(X.a)(V.a.mark((function t(n){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:K.a.get(e,{}).then((function(e){var t=e.data;n({type:A,payload:t})})).catch((function(e){n({type:k})}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ee=function(){return function(){var e=Object(X.a)(V.a.mark((function e(t){var n,s;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return n={headers:{Authorization:"JWT ".concat(localStorage.getItem("access"))}},e.prev=2,e.next=5,K.a.get("".concat("http://localhost:8000/","auth/users/me/"),n);case 5:s=e.sent,t({type:x,payload:s.data}),t(function(){var e=Object(X.a)(V.a.mark((function e(t){var n,s;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:"JWT ".concat(localStorage.getItem("access"))}},e.prev=1,e.next=4,K.a.get("".concat("http://localhost:8000/","api/account/following/tweets/"),n);case 4:s=e.sent,t({type:w,payload:s.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:_});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t({type:f,payload:e.t0.response.data});case 13:e.next=16;break;case 15:t({type:f});case 16:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},te=n(0),ne=Object(r.b)(null,{verify:function(e,t){return function(){var n=Object(X.a)(V.a.mark((function n(s){var c,a;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c={headers:{"Content-Type":"application/json"}},a=JSON.stringify({uid:e,token:t});try{K.a.post("".concat("http://localhost:8000/","auth/users/activation/"),a,c),s({type:p})}catch(r){s({type:h,payload:r.response.data})}case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.verify,n=e.match,c=Object(s.useState)(!1),a=Object(B.a)(c,2),r=a[0],o=a[1];return r?Object(te.jsx)(G.a,{to:"/"}):Object(te.jsx)("div",{className:"container",children:Object(te.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{marginTop:"200px"},children:[Object(te.jsx)("h1",{children:"Verify your Account:"}),Object(te.jsx)("button",{onClick:function(e){var s=n.params.uid,c=n.params.token;console.log(s),console.log(c),t(s,c),o(!0)},style:{marginTop:"50px"},type:"button",className:"btn btn-primary",children:"Verify"})]})})})),se=(n(69),Object(r.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{})((function(e){var t=e.tweet,n=e.owner_id,c=e.owner_username,a=e.id,r=e.isAuthenticated,o=Object(s.useState)(!1),i=Object(B.a)(o,2),l=i[0],u=i[1],j=Object(s.useState)(!1),b=Object(B.a)(j,2),d=b[0],m=b[1],p=Object(s.useState)(t.like_count),h=Object(B.a)(p,2),O=h[0],x=h[1],f=Object(s.useState)(""),v=Object(B.a)(f,2),w=v[0],_=v[1];console.log(t.like_count);return Object(s.useEffect)((function(){r&&function(){if(r){var e={headers:{Authorization:"JWT ".concat(localStorage.getItem("access"))}};K.a.get("".concat("http://localhost:8000/","api/tweet/likes/").concat(t.id,"/"),e).then((function(e){1==e.data?u(!0):u(!1)})).catch((function(e){u(!1)}))}}()}),[]),Object(te.jsxs)("div",{className:"tweet",id:a,children:[Object(te.jsxs)("div",{className:"properties",children:[Object(te.jsx)("div",{className:"owner-info",children:Object(te.jsx)("div",{className:"username",children:Object(te.jsx)(q.b,{to:"/account/".concat(n),className:"text-white",children:c})})}),Object(te.jsx)("div",{className:"date-created",children:t.date_created.substring(0,10)})]}),Object(te.jsx)("hr",{}),Object(te.jsx)("div",{className:"content",children:t.content}),Object(te.jsx)("hr",{style:{marginBottom:3}}),Object(te.jsxs)("ul",{className:"actions",children:[Object(te.jsx)(q.b,{className:"button",to:"/tweet/".concat(t.id),children:"Replies"}),Object(te.jsx)("li",{className:"button",onClick:function(){r&&m(!d)},children:Object(te.jsx)("i",{className:"bx bx-reply"})}),Object(te.jsxs)("li",{className:"button",onClick:function(e){e.preventDefault(),r&&(u(!l),x(l?O-1:O+1),function(e){var t={headers:{Authorization:"JWT ".concat(localStorage.getItem("access"))}};K.a.post("".concat("http://localhost:8000/","api/tweet/").concat(e,"/likes/add/"),{},t)}(t.id))},children:[Object(te.jsx)("div",{className:"value",children:O}),l?Object(te.jsx)("i",{class:"bx bxs-like"}):Object(te.jsx)("i",{className:"bx bx-like"})]})]}),d?Object(te.jsxs)("div",{className:"row mx-1 mb-2",style:{marginBottom:5},children:[Object(te.jsx)("hr",{style:{marginBottom:3}}),Object(te.jsxs)("form",{className:"col-lg-12",onSubmit:function(e){return function(e){e.preventDefault(),Q(w,t.id),m(!1),_("")}(e)},style:{marginBottom:4},children:[Object(te.jsx)("div",{className:"form-group mb-3",children:Object(te.jsx)("textarea",{className:"form-control",id:"content",name:"content",placeholder:"Write your tweet here",rows:"4",cols:"150",value:w,onChange:function(e){return function(e){return _(e.target.value)}(e)},required:!0})}),Object(te.jsx)("button",{type:"submit",className:"btn btn-success",children:"Post"})]})]}):Object(te.jsx)("div",{})]})}))),ce=(n(37),Object(r.b)((function(e){return{tweets:e.tweet.following_tweets,isAuthenticated:e.auth.isAuthenticated}}),{loadMoreFollowingTweets:function(e){return function(){var t=Object(X.a)(V.a.mark((function t(n){var s;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s={headers:{Authorization:"JWT ".concat(localStorage.getItem("access"))}},K.a.get(e,s).then((function(e){var t=e.data;n({type:g,payload:t})})).catch((function(e){n({type:N})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.tweets,n=e.loadMoreFollowingTweets;return e.isAuthenticated?Object(te.jsxs)("div",{className:"tweet-container",children:[t.results.map((function(e){return Object(te.jsx)(se,{id:"tweet_id_".concat(e.id),tweet:e,owner_username:e.owner_username,owner_id:e.owner_id})})),t.next?Object(te.jsx)("div",{className:"form-group row justify-content-md-center mt-3 mb-1 px-1",children:Object(te.jsx)("button",{onClick:function(e){return n(t.next)},className:"btn btn-primary col-sm-10",children:"Load More"})}):Object(te.jsx)("div",{})]}):Object(te.jsx)(G.a,{to:"/explore"})}))),ae=n(18),re=Object(r.b)((function(e){return{errors:e.auth.errors}}),{})((function(e){var t=e.errors;return Object(te.jsx)("ul",{className:"p-0",children:t.map((function(e){return Object(te.jsx)("li",{className:"list-group-item list-group-item-danger mb-1 my-0",children:e})}))})})),oe=Object(r.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var n=Object(X.a)(V.a.mark((function n(s){var c,a,r;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={headers:{"Content-Type":"application/json"}},a=JSON.stringify({email:e,password:t}),n.prev=2,n.next=5,K.a.post("".concat("http://localhost:8000/","auth/jwt/create"),a,c);case 5:r=n.sent,s({type:j,payload:r.data}),s(ee()),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),s({type:b,payload:n.t0.response.data});case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.login,n=e.isAuthenticated,c=Object(s.useState)({email:"",password:""}),a=Object(B.a)(c,2),r=a[0],o=a[1],i=r.email,l=r.password,j=function(e){return o(Object(u.a)(Object(u.a)({},r),{},Object(ae.a)({},e.target.name,e.target.value)))};return n?Object(te.jsx)(G.a,{to:"/"}):Object(te.jsxs)("div",{className:"container align-middle mt-5",children:[Object(te.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(i,l)}(e)},children:[Object(te.jsx)("h1",{children:"Login"}),Object(te.jsx)("p",{children:"Login to your account"}),Object(te.jsxs)("div",{className:"form-group mt-4",children:[Object(te.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(te.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:i,onChange:function(e){return j(e)},required:!0})]}),Object(te.jsxs)("div",{className:"form-group mb-3",children:[Object(te.jsx)("label",{htmlFor:"password",children:"Password"}),Object(te.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",placeholder:"Password",value:l,onChange:function(e){return j(e)},required:!0})]}),Object(te.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})]}),Object(te.jsxs)("p",{className:"mt-3",children:["Don't have an account? ",Object(te.jsx)(q.b,{to:"/signup",children:"Sign Up"})]}),Object(te.jsxs)("p",{className:"mt-3",children:["Forgot your password? ",Object(te.jsx)(q.b,{to:"/reset-password",children:"Reset Password"})]}),Object(te.jsx)(re,{})]})})),ie=Object(r.b)((function(e){return{successes:e.auth.successes}}),{})((function(e){var t=e.successes;return Object(te.jsx)("ul",{className:"p-0",children:t.map((function(e){return Object(te.jsx)("li",{className:"list-group-item list-group-item-success mb-1 my-0",children:e})}))})})),le=Object(r.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{signup:function(e,t,n,s,c,a){return function(){var r=Object(X.a)(V.a.mark((function r(o){var i,l;return V.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i={headers:{"Content-Type":"application/json"}},l=JSON.stringify({email:e,username:t,name:n,last_name:s,password:c,re_password:a}),r.prev=2,r.next=5,K.a.post("".concat("http://localhost:8000/","auth/users/"),l,i);case 5:r.sent,o({type:d,payload:e}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),o({type:m,payload:r.t0.response.data});case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.signup,n=e.isAuthenticated,c=Object(s.useState)(!1),a=Object(B.a)(c,2),r=a[0],o=(a[1],Object(s.useState)({email:"",username:"",name:"",last_name:"",password:"",re_password:""})),i=Object(B.a)(o,2),l=i[0],j=i[1],b=l.email,d=l.username,m=l.name,p=l.last_name,h=l.password,O=l.re_password,x=function(e){j(Object(u.a)(Object(u.a)({},l),{},Object(ae.a)({},e.target.name,e.target.value)))};return r||n?Object(te.jsx)(G.a,{to:"/"}):Object(te.jsxs)("div",{className:"container align-middle mt-5",children:[Object(te.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),h===O&&(t(b,d,m,p,h,O),j({email:"",username:"",name:"",last_name:"",password:"",re_password:""}))}(e)},children:[Object(te.jsx)("h1",{children:"Signup"}),Object(te.jsx)("p",{children:"Create an account"}),Object(te.jsxs)("div",{className:"form-group mt-4",children:[Object(te.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(te.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",placeholder:"Enter email",value:b,onChange:function(e){return x(e)},required:!0})]}),Object(te.jsxs)("div",{className:"form-group",children:[Object(te.jsx)("label",{htmlFor:"username",children:"Username"}),Object(te.jsx)("input",{type:"text",className:"form-control",id:"username",name:"username",placeholder:"Enter username",value:d,onChange:function(e){return x(e)},required:!0})]}),Object(te.jsxs)("div",{className:"form-group",children:[Object(te.jsx)("label",{htmlFor:"name",children:"Name"}),Object(te.jsx)("input",{type:"text",className:"form-control",id:"name",name:"name",placeholder:"Enter name",value:m,onChange:function(e){return x(e)},required:!0})]}),Object(te.jsxs)("div",{className:"form-group",children:[Object(te.jsx)("label",{htmlFor:"last_name",children:"Last name"}),Object(te.jsx)("input",{type:"text",className:"form-control",id:"last_name",name:"last_name",placeholder:"Enter last name",value:p,onChange:function(e){return x(e)},required:!0})]}),Object(te.jsxs)("div",{className:"form-group",children:[Object(te.jsx)("label",{htmlFor:"password",children:"Password"}),Object(te.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",placeholder:"Password",value:h,onChange:function(e){return x(e)},required:!0})]}),Object(te.jsxs)("div",{className:"form-group mb-3",children:[Object(te.jsx)("label",{htmlFor:"re_password",children:"Retype password"}),Object(te.jsx)("input",{type:"password",className:"form-control",id:"re_password",name:"re_password",placeholder:"Password",value:O,onChange:function(e){return x(e)},required:!0})]}),Object(te.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Sign up"})]}),Object(te.jsxs)("p",{className:"mt-3",children:["Have an account? ",Object(te.jsx)(q.b,{to:"/login",children:"Login"})]}),Object(te.jsx)(ie,{}),Object(te.jsx)(re,{})]})})),ue=function(){return Object(te.jsx)("div",{children:"Reset password"})},je=function(){return Object(te.jsx)("div",{children:"Reset password Confirm"})},be=Object(r.b)((function(e){return{tweets:e.tweet.tweets,isAuthenticated:e.auth.isAuthenticated}}),{loadUserTweets:Z,follow:function(e){return function(){var t=Object(X.a)(V.a.mark((function t(n){var s,c;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s={headers:{Authorization:"Bearer ".concat(localStorage.getItem("access")),"Content-type":"application/json"}},c={id_account:e};try{K.a.post("".concat("http://localhost:8000/","api/account/follow/"),c,s),n({type:v})}catch(a){n({type:v})}case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},loadMoreUserTweets:$})((function(e){var t=e.loadUserTweets,n=e.follow,c=e.loadMoreUserTweets,a=e.match,r=e.tweets,o=e.isAuthenticated,i=Object(s.useState)({name:"",last_name:"",email:"",username:"",id:a.params.id}),l=Object(B.a)(i,2),j=l[0],b=l[1],d=Object(s.useState)(!1),m=Object(B.a)(d,2),p=m[0],h=m[1];Object(s.useEffect)((function(){if(K.a.get("".concat("http://localhost:8000/","api/account/").concat(j.id,"/"),null).then((function(e){var t=e.data;b(Object(u.a)(Object(u.a)({},j),{},{name:t.name,last_name:t.last_name,email:t.email,username:t.username}))})),t(a.params.id),o){var e={headers:{Authorization:"Bearer ".concat(localStorage.getItem("access"))}};K.a.get("".concat("http://localhost:8000/","api/account/follow/").concat(j.id,"/"),e).then((function(e){1==e.data?h(!0):h(!1)})).catch((function(e){h(!1)}))}}),[]);j.name,j.last_name,j.email;var O=j.username,x=j.id;return Object(te.jsxs)("div",{style:{marginTop:70},className:"px-3",children:[Object(te.jsx)("h1",{children:O}),Object(te.jsx)("div",{className:"form-group row justify-content-md-center mt-3 mb-1 px-1",children:Object(te.jsx)("button",{onClick:function(){o&&(n(x),h(!p))},className:"btn btn-primary col-sm-12",children:p?"Unfollow":"Follow"})}),r.results.map((function(e){return Object(te.jsx)(se,{id:"tweet_id_".concat(e.id),tweet:e,owner_username:e.owner_username,owner_id:e.owner_id})})),r.next?Object(te.jsx)("div",{className:"form-group row justify-content-md-center mt-3 mb-1 px-1",children:Object(te.jsx)("button",{onClick:function(e){return c(r.next)},className:"btn btn-primary col-sm-12",children:"Load More"})}):Object(te.jsx)("div",{})]})})),de=Object(r.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{})((function(e){var t=e.isAuthenticated,n=Object(s.useState)(""),c=Object(B.a)(n,2),a=c[0],r=c[1],o=Object(s.useState)(!1),i=Object(B.a)(o,2),l=i[0],u=i[1];return!t||l?Object(te.jsx)(G.a,{to:"/"}):Object(te.jsx)("div",{style:{marginTop:70},className:"px-4",children:Object(te.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),Q(a),u(!0)}(e)},children:[Object(te.jsx)("h1",{children:"Create Tweet"}),Object(te.jsx)("div",{className:"form-group mb-3",children:Object(te.jsx)("textarea",{className:"form-control",id:"content",name:"content",placeholder:"Write your tweet here",rows:"7",cols:"50",value:a,onChange:function(e){return function(e){return r(e.target.value)}(e)},required:!0})}),Object(te.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Post"})]})})})),me=Object(r.b)((function(e){return{tweets:e.tweet.tweets,user:e.auth.user,isAuthenticated:e.auth.isAuthenticated}}),{loadUserTweets:Z,loadMoreUserTweets:$})((function(e){var t=e.loadUserTweets,n=e.loadMoreUserTweets,c=e.user,a=e.tweets;e.isAuthenticated;return Object(s.useEffect)((function(){c&&t(c.id)}),[]),Object(te.jsxs)("div",{className:"tweet-container",children:[a.results.map((function(e){return Object(te.jsx)(se,{id:"tweet_id_".concat(e.id),tweet:e,owner_username:e.owner_username,owner_id:e.owner_id})})),a.next?Object(te.jsx)("div",{className:"form-group row justify-content-md-center mt-3 mb-1 px-1",children:Object(te.jsx)("button",{onClick:function(e){return n(a.next)},className:"btn btn-primary col-sm-10",children:"Load More"})}):Object(te.jsx)("div",{})]})})),pe=Object(r.b)((function(e){return{tweets:e.tweet.explore_tweets}}),{loadExploreTweets:function(){return function(){var e=Object(X.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:K.a.get("".concat("http://localhost:8000/","api/tweet/explore/"),{}).then((function(e){var n=e.data;t({type:C,payload:n})})).catch((function(e){t({type:T})}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},loadMoreExploreTweets:function(e){return function(){var t=Object(X.a)(V.a.mark((function t(n){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:K.a.get(e,{}).then((function(e){var t=e.data;n({type:L,payload:t})})).catch((function(e){n({type:I})}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.tweets,n=e.loadExploreTweets,c=e.loadMoreExploreTweets;return Object(s.useEffect)((function(){n()}),[]),Object(te.jsxs)("div",{className:"tweet-container",children:[t.results.map((function(e){return Object(te.jsx)(se,{id:"tweet_id_".concat(e.id),tweet:e,owner_username:e.owner_username,owner_id:e.owner_id})})),t.next?Object(te.jsx)("div",{className:"form-group row justify-content-md-center mt-3 mb-1 px-1",children:Object(te.jsx)("button",{onClick:function(e){return c(t.next)},className:"btn btn-primary col-sm-10",children:"Load More"})}):Object(te.jsx)("div",{})]})})),he=(n(70),Object(r.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(){var e=Object(X.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:O}),t({type:y});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.isAuthenticated,n=e.logout,c=null,a=function(e){var t=e.target;"A"!==t.nodeName&&(t=t.parentElement),c&&c.classList.remove("active"),t.classList.add("active"),c=t};return Object(s.useEffect)((function(){for(var e=document.querySelectorAll(".sidebar .nav_list_item"),t=1;t<e.length;++t)e[t].classList.remove("active");(c=e[0]).classList.add("active")}),[t]),Object(te.jsxs)("div",{className:"sidebar",children:[Object(te.jsx)("div",{className:"logo_content",children:Object(te.jsxs)("div",{className:"logo",children:[Object(te.jsx)("i",{className:"bx bxl-sketch"}),Object(te.jsx)("div",{className:"logo_name",children:"Tweety"})]})}),Object(te.jsx)("ul",{className:"nav_list",children:t?Object(te.jsxs)(s.Fragment,{children:[Object(te.jsxs)(q.b,{className:"nav_list_item",to:"/",onClick:function(e){return a(e)},children:[Object(te.jsx)("i",{className:"bx bx-grid-alt"}),Object(te.jsx)("span",{className:"links_name",children:"Feed"})]}),Object(te.jsxs)(q.b,{className:"nav_list_item",to:"/my_tweets",onClick:function(e){return a(e)},children:[Object(te.jsx)("i",{className:"bx bx-archive"}),Object(te.jsx)("span",{className:"links_name",children:"You're tweets"})]}),Object(te.jsxs)(q.b,{className:"nav_list_item",to:"/explore",onClick:function(e){return a(e)},children:[Object(te.jsx)("i",{class:"bx bx-compass"}),Object(te.jsx)("span",{className:"links_name",children:"Explore"})]}),Object(te.jsxs)(q.b,{className:"nav_list_item",to:"/users",onClick:function(e){return a(e)},children:[Object(te.jsx)("i",{className:"bx bx-user"}),Object(te.jsx)("span",{className:"links_name",children:"Users"})]}),Object(te.jsxs)(q.b,{className:"nav_list_item",to:"/hashtags",onClick:function(e){return a(e)},children:[Object(te.jsx)("i",{className:"bx bx-hash"}),Object(te.jsx)("span",{className:"links_name",children:"Hastags"})]}),Object(te.jsxs)(q.b,{className:"nav_list_item",to:"preferences",onClick:function(e){return a(e)},children:[Object(te.jsx)("i",{className:"bx bxs-cog",id:"btn-settings"}),Object(te.jsx)("span",{className:"links_name",children:"Preferences"})]}),Object(te.jsxs)(q.b,{className:"nav_list_item",to:"/",onClick:n,children:[Object(te.jsx)("i",{className:"bx bx-log-out",id:"btn-log-out"}),Object(te.jsx)("span",{className:"links_name",children:"Logout"})]})]}):Object(te.jsxs)(s.Fragment,{children:[Object(te.jsxs)(q.b,{className:"nav_list_item",to:"/explore",onClick:function(e){return a(e)},children:[Object(te.jsx)("i",{class:"bx bx-compass"}),Object(te.jsx)("span",{className:"links_name",children:"Explore"})]}),Object(te.jsxs)(q.b,{className:"nav_list_item",to:"/users",onClick:function(e){return a(e)},children:[Object(te.jsx)("i",{className:"bx bx-user"}),Object(te.jsx)("span",{className:"links_name",children:"Users"})]}),Object(te.jsxs)(q.b,{className:"nav_list_item",to:"/hashtags",onClick:function(e){return a(e)},children:[Object(te.jsx)("i",{className:"bx bx-hash"}),Object(te.jsx)("span",{className:"links_name",children:"Hastags"})]}),Object(te.jsxs)(q.b,{className:"nav_list_item",to:"/login",id:"btn-log-in",onClick:function(e){return a(e)},children:[Object(te.jsx)("i",{className:"bx bx-log-in"}),Object(te.jsx)("span",{className:"links_name",children:"Login"})]}),Object(te.jsxs)(q.b,{className:"nav_list_item",to:"/signup",id:"btn-sign-up",onClick:function(e){return a(e)},children:[Object(te.jsx)("i",{class:"bx bx-user-plus"}),Object(te.jsx)("span",{className:"links_name",children:"Signup"})]})]})}),Object(te.jsx)("div",{className:"profile_content",children:Object(te.jsx)("div",{className:"profile",children:Object(te.jsx)("div",{className:"profile_username",children:"Insert username here"})})})]})}))),Oe=(n(71),function(e){return Object(te.jsx)("div",{className:"main-view row justify-content-center",children:Object(te.jsxs)("div",{className:"col-md-10",children:[Object(te.jsx)(he,{}),e.children]})})});var xe=function(){return ee(),Object(te.jsx)(r.a,{store:J,children:Object(te.jsx)(q.a,{children:Object(te.jsxs)(Oe,{children:[Object(te.jsx)(z,{}),Object(te.jsxs)(G.d,{children:[Object(te.jsx)(G.b,{exact:!0,path:"/",component:ce}),Object(te.jsx)(G.b,{exact:!0,path:"/login",component:oe}),Object(te.jsx)(G.b,{exact:!0,path:"/signup",component:le}),Object(te.jsx)(G.b,{exact:!0,path:"/activate/:uid/:token",component:ne}),Object(te.jsx)(G.b,{exact:!0,path:"/reset-password",component:ue}),Object(te.jsx)(G.b,{exact:!0,path:"/password/reset/confirm/:uid/:token",component:je}),Object(te.jsx)(G.b,{exact:!0,path:"/account/:id",component:be}),Object(te.jsx)(G.b,{exact:!0,path:"/create_tweet",component:de}),Object(te.jsx)(G.b,{exact:!0,path:"/explore",component:pe}),Object(te.jsx)(G.b,{exact:!0,path:"/my_tweets",component:me}),Object(te.jsx)(G.b,{exact:!0,path:"/hastags"}),Object(te.jsx)(G.b,{exact:!0,path:"/preferences"}),Object(te.jsx)(G.b,{exact:!0,path:"/tweet/:id"})]})]})})})};a.a.render(Object(te.jsx)(r.a,{store:J,children:Object(te.jsx)(xe,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.2fde8f56.chunk.js.map