(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{379:function(e,t,r){"use strict";r(49),r(58),r(59),r(68),r(101);var n=r(25),o=r(24),c=r(38),l=r(99),d=r(47),m=function(){function e(t){var time=t.time,body=t.body,r=t.date;Object(o.a)(this,e),this.time=time,this.body=body,this.date=r}var t,r,m;return Object(c.a)(e,null,[{key:"save",value:(m=Object(n.a)(regeneratorRuntime.mark((function e(t){var time,body,r,n,o,c,data,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(time=t.time,body=t.body,time){e.next=3;break}throw new Error("入力欄が空欄です。");case 3:if(body&&body.trim()){e.next=5;break}throw new Error("入力欄が空欄です。");case 5:return r=l.a.auth().currentUser.uid,n={time:time,body:body,date:l.a.firestore.FieldValue.serverTimestamp(),uid:r},e.next=9,d.b.add(n);case 9:return o=e.sent,e.next=12,o.get();case 12:return c=e.sent,data=c.data(),m=this.create(data),e.abrupt("return",m);case 16:case"end":return e.stop()}}),e,this)}))),function(e){return m.apply(this,arguments)})},{key:"fetchMessages",value:(r=Object(n.a)(regeneratorRuntime.mark((function e(){var t,r,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.a.auth().currentUser.uid,e.next=3,d.b.where("uid","==",t).orderBy("date").get();case 3:if(!(r=e.sent).empty){e.next=6;break}return e.abrupt("return",[]);case 6:return e.abrupt("return",r.docs.map((function(e){return n.create(e.data())})));case 7:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)})},{key:"create",value:function(data){return new e({time:data.time,body:data.body,date:data.date.toDate().toLocaleString()})}},{key:"dbtime",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.a.auth().currentUser.uid,e.prev=1,e.next=4,d.b.where("uid","==",t).get();case 4:return r=e.sent,n=0,r.forEach((function(e){n+=e.data().time})),e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(){return t.apply(this,arguments)})}]),e}();t.a=m},395:function(e,t,r){var content=r(594);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(13).default)("15ffa267",content,!0,{sourceMap:!1})},531:function(e,t,r){var content=r(599);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(13).default)("6e7f2a69",content,!0,{sourceMap:!1})},532:function(e,t,r){var content=r(601);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(13).default)("66d73f7a",content,!0,{sourceMap:!1})},533:function(e,t,r){var content=r(605);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(13).default)("510e1e1d",content,!0,{sourceMap:!1})},534:function(e,t,r){var content=r(607);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(13).default)("6d31a8d9",content,!0,{sourceMap:!1})},535:function(e,t,r){var content=r(609);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(13).default)("0f5ef4b1",content,!0,{sourceMap:!1})},537:function(e,t,r){"use strict";r.r(t);r(85),r(101);var n=r(25),o=r(379),c=r(538),l=r(543),d=r(539),m=r(544),f=r(540),v={components:{TotalTime:c.default,Chart:l.default,TextBox:d.default,Spinner:m.default,MessageList:f.default},data:function(){return{num:0,name:"",index:"",done:!1,messages:[],BarChartData:{},options:{},times:0,initialLoaded:!1}},computed:{reversedMessages:function(){return this.messages.slice().reverse()}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.makeData();case 2:case"end":return t.stop()}}),t)})))()},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchMessages();case 2:return r=t.sent,t.next=5,e.totalTime();case 5:return n=t.sent,t.next=8,e.getChart();case 8:o=t.sent,e.messages=r,e.times=n,e.BarChartData.datasets[0].data[0]=o[0],e.initialLoaded=!0;case 13:case"end":return t.stop()}}),t)})))()},methods:{addMessage:function(e){this.messages.push(e)},addTime:function(e){this.times=e},makeData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],t.next=3,o.a.dbtime();case 3:if(n=t.sent,0!==r.length){t.next=7;break}return t.next=7,r.push(n);case 7:e.BarChartData={labels:["学習時間"],datasets:[{label:["学習時間"],data:r,backgroundColor:["rgba(54, 162, 235, 0.2)"],borderColor:["rgba(54, 162, 235, 1)"]}]},e.BarChartOptions={responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{stacked:!0,scaleLabel:{display:!0,labelString:""}}],yAxes:[{ticks:{beginAtZero:!0,max:1e3,stepSize:100,callback:function(label,e,t){return label+" h"}}}]},tooltips:{callbacks:{label:function(e,data){return e.yLabel+" h"}}}};case 8:case"end":return t.stop()}}),t)})))()},fetchMessages:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,e.next=4,o.a.fetchMessages();case 4:t=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0.message);case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))()},totalTime:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,e.prev=1,e.t0=t,e.next=5,o.a.dbtime();case 5:t=e.t0+=e.sent,e.next=11;break;case 8:e.prev=8,e.t1=e.catch(1),console.error(e.t1.message);case 11:return e.abrupt("return",t);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()},getChart:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,o.a.dbtime();case 3:if(r=e.sent,e.prev=4,0!==t.length){e.next=8;break}return e.next=8,t.push(r);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),console.error(e.t0.message);case 13:return e.abrupt("return",t);case 14:case"end":return e.stop()}}),e,null,[[4,10]])})))()}}},h=(r(608),r(67)),j=r(84),x=r.n(j),y=r(614),k=r(370),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("client-only",[r("v-row",{staticClass:"container d-flex justify-center"},[r("v-col",{attrs:{cols:"6",sm:"6",md:"5"}},[r("TotalTime",{attrs:{times:e.times}})],1),e._v(" "),e.initialLoaded?r("v-col",{attrs:{cols:"6",sm:"6",md:"7"}},[r("Chart",{attrs:{"chart-data":e.BarChartData,options:e.BarChartOptions}})],1):e._e()],1),e._v(" "),r("TextBox",{staticClass:"container",attrs:{"on-post":e.addMessage,"on-get":e.addTime,"on-chart":e.makeData}}),e._v(" "),e.initialLoaded?e.initialLoaded&&0===e.messages.length?r("p",{staticClass:"no-messages"},[e._v("\n      毎日の積み上げ0件\n    ")]):e._e():r("Spinner",{staticClass:"container"}),e._v(" "),r("MessageList",{staticClass:"container",attrs:{messages:e.reversedMessages}})],1)],1)}),[],!1,null,"7296c797",null);t.default=component.exports;x()(component,{TotalTime:r(538).default,Chart:r(543).default,TextBox:r(539).default,Spinner:r(544).default,MessageList:r(540).default}),x()(component,{VCol:y.a,VRow:k.a})},538:function(e,t,r){"use strict";r.r(t);r(20);var n={data:function(){return{image_src:r(592)}},props:{times:{type:Number,required:!0}}},o=(r(593),r(67)),c=r(84),l=r.n(c),d=r(361),m=r(153),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("client-only",[t("v-card",{staticStyle:{margin:"0 auto"},attrs:{"max-width":"374"}},[t("v-img",{attrs:{height:"350",src:this.image_src}}),this._v(" "),t("div",{staticClass:"totaltime"},[t("p",{staticClass:"times_text"},[this._v("これまでのトータル学習時間は")]),this._v(" "),t("span",{staticClass:"times"},[this._v(this._s(this.times)+"時間")])])],1)],1)],1)}),[],!1,null,"24edda9c",null);t.default=component.exports;l()(component,{VCard:d.a,VImg:m.a})},539:function(e,t,r){"use strict";r.r(t);r(20),r(101);var n=r(25),o=r(541),c=r(379),l={components:{Button:o.default},props:{onPost:{type:Function,required:!0},onGet:{type:Function,required:!0},onChart:{type:Function,required:!0}},data:function(){return{time:0,body:"",canPost:!0}},methods:{post:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.canPost=!1,t.prev=1,t.next=4,c.a.save({time:Number(e.time),body:e.body});case 4:r=t.sent,e.onPost(r),e.time=0,e.body="",t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),alert(t.t0.message);case 13:e.canPost=!0;case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()},get:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=0,t.prev=1,t.t0=r,t.next=5,c.a.dbtime();case 5:r=t.t0+=t.sent,e.onGet(r),t.next=12;break;case 9:t.prev=9,t.t1=t.catch(1),alert(t.t1.message);case 12:return t.abrupt("return",r);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},chart:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],t.next=3,c.a.dbtime();case 3:n=t.sent;try{0===r.length&&r.push(n),e.onChart(r[0])}catch(e){alert(e.message)}return t.abrupt("return",r[0]);case 6:case"end":return t.stop()}}),t)})))()}}},d=(r(600),r(67)),m=r(84),f=r.n(m),v=r(618),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"textbox-container"},[r("client-only",[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.time,expression:"time",modifiers:{trim:!0}}],staticClass:"textbox-input",attrs:{type:"number",max:"24",min:"0.25",step:"0.25",placeholder:"3"},domProps:{value:e.time},on:{input:function(t){t.target.composing||(e.time=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v("時間\n    "),r("p",[e._v("今日のアウトプット内容")]),e._v(" "),r("v-textarea",{staticClass:"textbox-area",attrs:{label:"JavaScriptの非同期処理について学んだが、まだまだ理解不足なのでクイズアプリの実装を通して学んでいきたい。",flat:"","auto-grow":"",outlined:"",rows:"1","row-height":"100"},model:{value:e.body,callback:function(t){e.body="string"==typeof t?t.trim():t},expression:"body"}}),e._v(" "),r("div",{staticClass:"textbox-button"},[r("Button",{attrs:{title:"今日の学習内容送信！！！",onClick:e.post,onGet:e.get,onChart:e.chart,clickable:e.canPost}})],1)],1)],1)}),[],!1,null,"58d9b229",null);t.default=component.exports;f()(component,{Button:r(541).default}),f()(component,{VTextarea:v.a})},540:function(e,t,r){"use strict";r.r(t);r(197);var n={components:{Message:r(542).default},props:{messages:{type:Array,required:!0,validator:function(e){return e.every((function(e){return"number"==typeof e.time&&("string"==typeof e.date&&"string"==typeof e.body)}))}}}},o=r(67),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"message-list"},[t("client-only",[this._l(this.messages,(function(e,r){return[t("Message",{key:r,attrs:{time:e.time,body:e.body,date:e.date}})]}))],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Message:r(542).default})},541:function(e,t,r){"use strict";r.r(t);var n={props:{title:{type:String,default:"今日の学習内容送信！！！"},onClick:{type:Function,required:!0},onGet:{type:Function,required:!0},onChart:{type:Function,required:!0},clickable:{type:Boolean,default:!0}}},o=(r(598),r(67)),c=r(84),l=r.n(c),d=r(200),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-btn",{staticClass:"button",class:{disabled:!e.clickable},attrs:{elevation:"7",large:"",outlined:"",plain:"",raised:"",rounded:"",text:"","x-large":"",disabled:!e.clickable},on:{click:function(t){e.onClick(),e.onGet(),e.onChart()}}},[e._v("\n  "+e._s(e.title)+"\n")])}),[],!1,null,"742da510",null);t.default=component.exports;l()(component,{VBtn:d.a})},542:function(e,t,r){"use strict";r.r(t);r(20);var n={props:{time:{type:Number,required:!0},body:{type:String,required:!0},date:{type:String,required:!0}}},o=(r(606),r(67)),c=r(84),l=r.n(c),d=r(361),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"message"},[r("p",{staticClass:"message-text mb-0"},[e._v(e._s(e.time)+"時間")]),e._v(" "),r("div",{staticClass:"message-date"},[e._v(e._s(e.date))]),e._v(" "),r("p",{staticClass:"message-text mb-0"},[e._v(e._s(e.body))])])}),[],!1,null,"bec4bc8e",null);t.default=component.exports;l()(component,{VCard:d.a})},543:function(e,t,r){"use strict";r.r(t);var n=r(611),o=n.b.reactiveProp,c={extends:n.a,mixins:[o],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},l=r(67),component=Object(l.a)(c,void 0,void 0,!1,null,null,null);t.default=component.exports},544:function(e,t,r){"use strict";r.r(t);r(604);var n=r(67),o=r(84),c=r.n(o),l=r(185),component=Object(n.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"text-center"},[t("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)}),[],!1,null,"53860534",null);t.default=component.exports;c()(component,{VProgressCircular:l.a})},592:function(e,t,r){e.exports=r.p+"img/Upgrade.01729ff.png"},593:function(e,t,r){"use strict";r(395)},594:function(e,t,r){(t=r(12)(!1)).push([e.i,".totaltime[data-v-24edda9c]{text-align:center;padding:1vw}.times_text[data-v-24edda9c]{font-weight:700}.times[data-v-24edda9c]{font-weight:900;font-size:3vw}",""]),e.exports=t},597:function(e,t,r){var map={"./af":396,"./af.js":396,"./ar":397,"./ar-dz":398,"./ar-dz.js":398,"./ar-kw":399,"./ar-kw.js":399,"./ar-ly":400,"./ar-ly.js":400,"./ar-ma":401,"./ar-ma.js":401,"./ar-sa":402,"./ar-sa.js":402,"./ar-tn":403,"./ar-tn.js":403,"./ar.js":397,"./az":404,"./az.js":404,"./be":405,"./be.js":405,"./bg":406,"./bg.js":406,"./bm":407,"./bm.js":407,"./bn":408,"./bn-bd":409,"./bn-bd.js":409,"./bn.js":408,"./bo":410,"./bo.js":410,"./br":411,"./br.js":411,"./bs":412,"./bs.js":412,"./ca":413,"./ca.js":413,"./cs":414,"./cs.js":414,"./cv":415,"./cv.js":415,"./cy":416,"./cy.js":416,"./da":417,"./da.js":417,"./de":418,"./de-at":419,"./de-at.js":419,"./de-ch":420,"./de-ch.js":420,"./de.js":418,"./dv":421,"./dv.js":421,"./el":422,"./el.js":422,"./en-au":423,"./en-au.js":423,"./en-ca":424,"./en-ca.js":424,"./en-gb":425,"./en-gb.js":425,"./en-ie":426,"./en-ie.js":426,"./en-il":427,"./en-il.js":427,"./en-in":428,"./en-in.js":428,"./en-nz":429,"./en-nz.js":429,"./en-sg":430,"./en-sg.js":430,"./eo":431,"./eo.js":431,"./es":432,"./es-do":433,"./es-do.js":433,"./es-mx":434,"./es-mx.js":434,"./es-us":435,"./es-us.js":435,"./es.js":432,"./et":436,"./et.js":436,"./eu":437,"./eu.js":437,"./fa":438,"./fa.js":438,"./fi":439,"./fi.js":439,"./fil":440,"./fil.js":440,"./fo":441,"./fo.js":441,"./fr":442,"./fr-ca":443,"./fr-ca.js":443,"./fr-ch":444,"./fr-ch.js":444,"./fr.js":442,"./fy":445,"./fy.js":445,"./ga":446,"./ga.js":446,"./gd":447,"./gd.js":447,"./gl":448,"./gl.js":448,"./gom-deva":449,"./gom-deva.js":449,"./gom-latn":450,"./gom-latn.js":450,"./gu":451,"./gu.js":451,"./he":452,"./he.js":452,"./hi":453,"./hi.js":453,"./hr":454,"./hr.js":454,"./hu":455,"./hu.js":455,"./hy-am":456,"./hy-am.js":456,"./id":457,"./id.js":457,"./is":458,"./is.js":458,"./it":459,"./it-ch":460,"./it-ch.js":460,"./it.js":459,"./ja":461,"./ja.js":461,"./jv":462,"./jv.js":462,"./ka":463,"./ka.js":463,"./kk":464,"./kk.js":464,"./km":465,"./km.js":465,"./kn":466,"./kn.js":466,"./ko":467,"./ko.js":467,"./ku":468,"./ku.js":468,"./ky":469,"./ky.js":469,"./lb":470,"./lb.js":470,"./lo":471,"./lo.js":471,"./lt":472,"./lt.js":472,"./lv":473,"./lv.js":473,"./me":474,"./me.js":474,"./mi":475,"./mi.js":475,"./mk":476,"./mk.js":476,"./ml":477,"./ml.js":477,"./mn":478,"./mn.js":478,"./mr":479,"./mr.js":479,"./ms":480,"./ms-my":481,"./ms-my.js":481,"./ms.js":480,"./mt":482,"./mt.js":482,"./my":483,"./my.js":483,"./nb":484,"./nb.js":484,"./ne":485,"./ne.js":485,"./nl":486,"./nl-be":487,"./nl-be.js":487,"./nl.js":486,"./nn":488,"./nn.js":488,"./oc-lnc":489,"./oc-lnc.js":489,"./pa-in":490,"./pa-in.js":490,"./pl":491,"./pl.js":491,"./pt":492,"./pt-br":493,"./pt-br.js":493,"./pt.js":492,"./ro":494,"./ro.js":494,"./ru":495,"./ru.js":495,"./sd":496,"./sd.js":496,"./se":497,"./se.js":497,"./si":498,"./si.js":498,"./sk":499,"./sk.js":499,"./sl":500,"./sl.js":500,"./sq":501,"./sq.js":501,"./sr":502,"./sr-cyrl":503,"./sr-cyrl.js":503,"./sr.js":502,"./ss":504,"./ss.js":504,"./sv":505,"./sv.js":505,"./sw":506,"./sw.js":506,"./ta":507,"./ta.js":507,"./te":508,"./te.js":508,"./tet":509,"./tet.js":509,"./tg":510,"./tg.js":510,"./th":511,"./th.js":511,"./tk":512,"./tk.js":512,"./tl-ph":513,"./tl-ph.js":513,"./tlh":514,"./tlh.js":514,"./tr":515,"./tr.js":515,"./tzl":516,"./tzl.js":516,"./tzm":517,"./tzm-latn":518,"./tzm-latn.js":518,"./tzm.js":517,"./ug-cn":519,"./ug-cn.js":519,"./uk":520,"./uk.js":520,"./ur":521,"./ur.js":521,"./uz":522,"./uz-latn":523,"./uz-latn.js":523,"./uz.js":522,"./vi":524,"./vi.js":524,"./x-pseudo":525,"./x-pseudo.js":525,"./yo":526,"./yo.js":526,"./zh-cn":527,"./zh-cn.js":527,"./zh-hk":528,"./zh-hk.js":528,"./zh-mo":529,"./zh-mo.js":529,"./zh-tw":530,"./zh-tw.js":530};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=597},598:function(e,t,r){"use strict";r(531)},599:function(e,t,r){(t=r(12)(!1)).push([e.i,".disabled[data-v-742da510]{opacity:.3}",""]),e.exports=t},600:function(e,t,r){"use strict";r(532)},601:function(e,t,r){(t=r(12)(!1)).push([e.i,".textbox-container[data-v-58d9b229]{padding:0 5vw}.textbox-input[data-v-58d9b229]{margin:1vw;border:1px solid #a1a1a1}.textbox-area[data-v-58d9b229]{width:100%;resize:none;background:#fff;border-radius:5px;padding:0}.textbox-button[data-v-58d9b229]{margin-top:10px;text-align:right}",""]),e.exports=t},604:function(e,t,r){"use strict";r(533)},605:function(e,t,r){(t=r(12)(!1)).push([e.i,".v-progress-circular[data-v-53860534]{margin:0 auto}",""]),e.exports=t},606:function(e,t,r){"use strict";r(534)},607:function(e,t,r){(t=r(12)(!1)).push([e.i,".message[data-v-bec4bc8e]{min-height:30px;padding:10px;margin:0 5vw 2vw}.message[data-v-bec4bc8e]:hover{background-color:#eee}.message-date[data-v-bec4bc8e]{font-size:.8em;color:#777;text-align:right}",""]),e.exports=t},608:function(e,t,r){"use strict";r(535)},609:function(e,t,r){(t=r(12)(!1)).push([e.i,".no-messages[data-v-7296c797]{text-align:center}.container[data-v-7296c797]{max-width:1300px;margin:0 auto}",""]),e.exports=t},622:function(e,t,r){"use strict";r.r(t);var n=r(2),o=r(536),c=r.n(o),l=(r(379),r(47),r(203)),d=r(537);n.default.use(c.a);var m={components:{Header:l.a,Main:d.default}},f=r(67),v=r(84),h=r.n(v),j=r(374),component=Object(f.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",[t("Header"),this._v(" "),t("Main")],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{Main:r(537).default}),h()(component,{VContainer:j.a})}}]);