(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{378:function(t,e,r){var content=r(383);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("4c2d6f30",content,!0,{sourceMap:!1})},379:function(t,e,r){"use strict";r(49),r(58),r(59),r(68),r(101);var n=r(25),o=r(24),c=r(38),l=r(99),d=r(47),v=function(){function t(e){var time=e.time,body=e.body,r=e.date;Object(o.a)(this,t),this.time=time,this.body=body,this.date=r}var e,r,v;return Object(c.a)(t,null,[{key:"save",value:(v=Object(n.a)(regeneratorRuntime.mark((function t(e){var time,body,r,n,o,c,data,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(time=e.time,body=e.body,time){t.next=3;break}throw new Error("入力欄が空欄です。");case 3:if(body&&body.trim()){t.next=5;break}throw new Error("入力欄が空欄です。");case 5:return r=l.a.auth().currentUser.uid,n={time:time,body:body,date:l.a.firestore.FieldValue.serverTimestamp(),uid:r},t.next=9,d.b.add(n);case 9:return o=t.sent,t.next=12,o.get();case 12:return c=t.sent,data=c.data(),v=this.create(data),t.abrupt("return",v);case 16:case"end":return t.stop()}}),t,this)}))),function(t){return v.apply(this,arguments)})},{key:"fetchMessages",value:(r=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=l.a.auth().currentUser.uid,t.next=3,d.b.where("uid","==",e).orderBy("date").get();case 3:if(!(r=t.sent).empty){t.next=6;break}return t.abrupt("return",[]);case 6:return t.abrupt("return",r.docs.map((function(t){return n.create(t.data())})));case 7:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)})},{key:"create",value:function(data){return new t({time:data.time,body:data.body,date:data.date.toDate().toLocaleString()})}},{key:"dbtime",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=l.a.auth().currentUser.uid,t.prev=1,t.next=4,d.b.where("uid","==",e).get();case 4:return r=t.sent,n=0,r.forEach((function(t){n+=t.data().time})),t.abrupt("return",n);case 10:t.prev=10,t.t0=t.catch(1),console.error(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[1,10]])}))),function(){return e.apply(this,arguments)})}]),t}();e.a=v},380:function(t,e,r){"use strict";r.r(e);var n=r(47),o={methods:{googleLogin:function(t){var e=this;this.$store.dispatch("signInWithGoogle").then((function(){e.$router.push({name:"index"})})).catch((function(t){e.$parent.socialLoginErrorMsg="現在Googleでのログインは使用できません。後ほどお試しください。"}))},userLogin:function(){var t=this;Object(n.a)().signInAnonymously().then((function(e){t.$router.push({name:"index"}),console.log(e)})).catch((function(t){var e=t.code,r=t.message;console.log("エラーメッセージ",e,r)}))}}},c=(r(382),r(67)),l=r(84),d=r.n(l),v=r(200),f=r(361),h=r(614),m=r(186),_=r(370),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"10",md:"10"}},[r("v-card",[r("v-btn",{staticClass:"color-google text-capitalize mb-2",attrs:{block:""},on:{click:t.googleLogin}},[r("span",{staticClass:"color-google__icon v-icon notranslate v-icon--left"},[r("svg",{attrs:{"enable-background":"new 0 0 46 46",viewBox:"0 0 46 46",xmlns:"http://www.w3.org/2000/svg"}},[r("g",{attrs:{transform:"translate(14 14)"}},[r("g",{attrs:{"clip-rule":"evenodd","fill-rule":"evenodd"}},[r("path",{attrs:{d:"m31.1 9.5c0-1.6-.1-3.2-.4-4.7h-21.7v8.9h12.4c-.5 2.9-2.2 5.3-4.6 6.9v5.8h7.4c4.4-4 6.9-9.9 6.9-16.9z",fill:"#4285f4"}}),t._v(" "),r("path",{attrs:{d:"m9 32c6.2 0 11.4-2.1 15.2-5.6l-7.4-5.8c-2.1 1.4-4.7 2.2-7.8 2.2-6 0-11.1-4-12.9-9.5h-7.7v6c3.8 7.5 11.6 12.7 20.6 12.7z",fill:"#34a853"}}),t._v(" "),r("path",{attrs:{d:"m-3.9 13.4c-.4-1.4-.7-2.9-.7-4.4s.3-3 .7-4.4v-6h-7.7c-1.5 3.2-2.4 6.7-2.4 10.4s.9 7.2 2.4 10.3z",fill:"#fbbc05"}}),t._v(" "),r("path",{attrs:{d:"m9-4.9c3.4 0 6.4 1.2 8.8 3.4l6.6-6.5c-4-3.7-9.2-6-15.4-6-9 0-16.8 5.2-20.6 12.7l7.7 6c1.8-5.5 6.9-9.6 12.9-9.6z",fill:"#ea4335"}})]),t._v(" "),r("path",{attrs:{d:"m-14-14h46v46h-46z",fill:"none"}})])])]),t._v("\n          Googleアカウントでログイン\n        ")])],1),t._v(" "),r("v-card",[r("v-btn",{staticClass:"mb-2",attrs:{block:""},on:{click:t.userLogin}},[r("v-icon",{staticClass:"notranslate v-icon--left theme--light"},[t._v("mdi-account")]),t._v("\n          匿名アカウントでログイン\n        ")],1)],1)],1)],1)}),[],!1,null,"3dc86797",null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:f.a,VCol:h.a,VIcon:m.a,VRow:_.a})},382:function(t,e,r){"use strict";r(378)},383:function(t,e,r){(e=r(12)(!1)).push([t.i,".color-google__icon>svg[data-v-3dc86797]{position:absolute}",""]),t.exports=e},621:function(t,e,r){"use strict";r.r(e);var n=r(380),main=(r(379),r(47),r(587)),o=r.n(main),c=(r(203),{layout:"signin",components:{SocialLogin:n.default},data:function(){var t=this;return{registerErrorMsg:"",tab:null,register_valid:!0,register_email:"",register_password:"",register_password_again:"",emailRules:[function(t){return!t||(/.+@.+\..+/.test(t)||"有効なメールアドレスを入力してください")}],register_passwordRules:[function(t){return!!t||"パスワードを入力してください"},function(t){return o()(t).score>=3||"大文字・小文字・数字・記号を混ぜた強いパスワードにしてください"}],register_passwordAgainRules:[function(e){return!e||(t.$refs.register_password.value===e||"パスワードと一致しません")}],show_registerPassword:!1}},computed:{progress:function(){return this.score.value},score:function(){switch(o()(this.register_password).score){case 4:return{color:"green",value:100};case 3:return{color:"light-green lighten-1",value:75};case 2:return{color:"amber accent-2",value:50};case 1:return{color:"deep-orange lighten-1",value:25};default:return{color:"red darken-3",value:0}}}},methods:{email_register:function(t){var e=this;this.$refs.register_form.validate()&&this.$store.dispatch("signUp",{email:this.register_email,password:this.register_password}).then((function(){e.register_email="",e.register_password="",e.$router.push({name:"index",params:{dashboard_msg:!0,dashboard_msg_text:"アカウントの登録が完了しました。"}})})).catch((function(t){console.log(t),"auth/email-already-in-use"===t.code?e.registerErrorMsg="このメールアドレスは既に登録されています。":"auth/invalid-email"===t.code?e.registerErrorMsg="無効なメールアドレスです。":e.registerErrorMsg="エラーにより登録できませんでした。"}))}}}),l=r(67),d=r(84),v=r.n(d),f=r(623),h=r(200),m=r(361),_=r(360),w=r(614),x=r(374),y=r(615),k=r(616),V=r(188),C=r(370),R=r(617),E=r(620),j=r(610),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("h2",{staticClass:"text-center subtitle-1 font-weight-bold mb-2"},[t._v("\n\t\t\t\tメールアドレスで登録\n\t\t\t")]),t._v(" "),r("v-row",[r("v-col",[r("v-tabs",{staticClass:"mb-3",attrs:{"background-color":"transparent",color:"blue accent-2",grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab",{attrs:{to:"/login"}},[t._v("ログイン")]),t._v(" "),r("v-tab",{attrs:{to:"/register"}},[t._v("アカウント登録")])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{sm:"12"}},[r("v-card",{attrs:{flat:""}},[r("v-card-text",{staticClass:"pa-0"},[r("v-form",{ref:"register_form",attrs:{"lazy-validation":""},model:{value:t.register_valid,callback:function(e){t.register_valid=e},expression:"register_valid"}},[r("v-text-field",{attrs:{label:"メールアドレス",rules:t.emailRules,required:"","validate-on-blur":""},model:{value:t.register_email,callback:function(e){t.register_email=e},expression:"register_email"}}),t._v(" "),r("v-text-field",{ref:"register_password",attrs:{label:"パスワード",required:"","append-icon":t.show_registerPassword?"mdi-eye":"mdi-eye-off",type:t.show_registerPassword?"text":"password",rules:t.register_passwordRules,"validate-on-blur":"",loading:""},on:{"click:append":function(e){t.show_registerPassword=!t.show_registerPassword}},scopedSlots:t._u([{key:"progress",fn:function(){return[r("v-progress-linear",{attrs:{value:t.score.value,color:t.score.color,absolute:"",height:"2"}})]},proxy:!0}]),model:{value:t.register_password,callback:function(e){t.register_password=e},expression:"register_password"}}),t._v(" "),r("v-text-field",{attrs:{label:"パスワード（確認）",required:"","append-icon":t.show_registerPassword?"mdi-eye":"mdi-eye-off",type:t.show_registerPassword?"text":"password","validate-on-blur":"",rules:t.register_passwordAgainRules},on:{"click:append":function(e){t.show_registerPassword=!t.show_registerPassword}},model:{value:t.register_password_again,callback:function(e){t.register_password_again=e},expression:"\n\t\t\t\t\t\t\t\t\t\t\t\tregister_password_again\n\t\t\t\t\t\t\t\t\t\t\t"}}),t._v(" "),t.registerErrorMsg?r("v-alert",{attrs:{dense:"",text:"",type:"error"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.registerErrorMsg)+"\n\t\t\t\t\t\t\t\t\t\t")]):t._e(),t._v(" "),r("v-btn",{staticClass:"mr-4 white--text",attrs:{disabled:!t.register_valid,color:"blue darken-3"},on:{click:function(e){return t.email_register()}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t登録\n\t\t\t\t\t\t\t\t\t\t")])],1)],1)],1)],1)],1),t._v(" "),r("v-divider",{staticClass:"my-8"}),t._v(" "),r("v-row",[r("v-col",{attrs:{sm:"12"}},[r("h2",{staticClass:"text-center subtitle-1 font-weight-bold mb-2"},[t._v("\n\t\t\t\t\t\t\t\tその他のアカウントでログイン\n\t\t\t\t\t\t\t")])])],1),t._v(" "),r("SocialLogin")],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{SocialLogin:r(380).default}),v()(component,{VAlert:f.a,VBtn:h.a,VCard:m.a,VCardText:_.a,VCol:w.a,VContainer:x.a,VDivider:y.a,VForm:k.a,VProgressLinear:V.a,VRow:C.a,VTab:R.a,VTabs:E.a,VTextField:j.a})}}]);