webpackJsonp([1],{"7OqZ":function(t,a){},"7Otq":function(t,a,s){t.exports=s.p+"static/img/logo.13947c8.png"},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),r=s("oqQY"),i=s.n(r),n=s("B197"),c=s.n(n);i.a.extend(c.a);var l={name:"App",methods:{getRelativeTime:function(t){return i()(t).fromNow()}}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ais-index",{attrs:{"app-id":"GZV6PDPKZY","api-key":"b81a40a29d53e9d7d5ae6e919cce610d","index-name":"world-cup-2018"}},[e("div",{staticClass:"hero"},[e("div",{staticClass:"hero-content"},[e("img",{staticClass:"hero-img",attrs:{src:s("7Otq"),alt:"FIFA World Cup - Russia 2018"}}),t._v(" "),e("ais-search-box",{staticClass:"hero-input",attrs:{placeholder:"Search teams, stadiums, dates, results..."}}),t._v(" "),e("ais-stats",{scopedSlots:t._u([{key:"default",fn:function(a){var s=a.totalResults,r=a.processingTime;return a.query,a.resultStart,a.resultEnd,[t._v("\n          ⚡️ "),e("strong",[t._v(t._s(s)+" results")]),t._v(" found in "),e("strong",[t._v(t._s(r)+"ms")])]}}])}),t._v(" "),e("ais-powered-by")],1)]),t._v(" "),e("ais-results",{scopedSlots:t._u([{key:"default",fn:function(a){var s=a.result;return[e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"card"},[s.finished?e("div",{staticClass:"card-banner"},[t._v("Finished")]):t._e(),t._v(" "),e("span",{staticClass:"card-badge"},[e("ais-highlight",{staticClass:"card-badge",attrs:{result:s,"attribute-name":"name"}})],1),t._v(" "),e("div",{staticClass:"card-img-wrapper"},[s.home_team_flag||s.away_team_flag?e("div",{staticClass:"card-img-wrapper"},[e("div",{staticClass:"card-img",class:{"card-img-missing":!s.home_team_flag},style:{"background-image":"url("+s.home_team_flag+")"}}),t._v(" "),e("div",{staticClass:"card-img",class:{"card-img-missing":!s.away_team_flag},style:{"background-image":"url("+s.away_team_flag+")"}})]):e("div",{staticClass:"card-img card-img-missing"})]),t._v(" "),e("div",{staticClass:"card-content-wrapper"},[e("span",{staticClass:"card-stadium"},[e("ais-highlight",{attrs:{result:s,"attribute-name":"stadium"}})],1),t._v(" "),e("h2",{staticClass:"card-title"},[e("ais-highlight",{attrs:{result:s,"attribute-name":"home_team"}}),t._v(" "),e("ais-highlight",{attrs:{result:s,"attribute-name":"result"}}),t._v(" "),e("ais-highlight",{attrs:{result:s,"attribute-name":"away_team"}})],1)]),t._v(" "),e("footer",{staticClass:"card-content-footer"},[e("div",{staticClass:"card-block"},[e("svg",{staticClass:"card-icon",attrs:{height:"20",viewBox:"0 0 18 20",width:"18",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"m16 2h-1v-2h-2v2h-8v-2h-2v2h-1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2zm0 16h-14v-11h14z"}}),e("path",{attrs:{d:"m4 9h5v5h-5z"}})]),t._v(" "),e("span",{staticClass:"card-date"},[e("ais-highlight",{attrs:{result:s,"attribute-name":"date"}}),t._v(" ("+t._s(t.getRelativeTime(s.datetime))+")\n              ")],1)]),t._v(" "),e("div",{staticClass:"card-block"},[e("svg",{staticClass:"card-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 453 453"}},[e("path",{attrs:{d:"M420.1 110.2H280.1l49.7-81.6c4.3-7.1 2.1-16.3-5-20.6 -7.1-4.3-16.3-2.1-20.6 5l-59.2 97.2h-36.9L148.8 13c-4.3-7.1-13.5-9.3-20.6-5 -7.1 4.3-9.3 13.5-5 20.6l49.7 81.6H32.9C14.7 110.2 0 124.9 0 143.1v271.3c0 18.1 14.7 32.9 32.9 32.9h387.3c18.1 0 32.9-14.7 32.9-32.9V143.1C453 124.9 438.3 110.2 420.1 110.2zM317.7 374.9c0 9.9-8 17.9-17.9 17.9H71.2c-9.9 0-17.9-8-17.9-17.9V182.5c0-9.9 8-17.9 17.9-17.9h228.6c9.9 0 17.9 8 17.9 17.9V374.9zM383.8 369.2c-17.1 0-31-13.9-31-31 0-17.1 13.9-31 31-31 17.1 0 31 13.9 31 31S400.9 369.2 383.8 369.2zM383.8 250.2c-17.1 0-31-13.9-31-31s13.9-31 31-31c17.1 0 31 13.9 31 31S400.9 250.2 383.8 250.2z"}})]),t._v(" "),e("ul",{staticClass:"card-list card-channels"},t._l(s._highlightResult.channels,function(a){return e("li",{key:a.id,staticClass:"card-list-item",domProps:{innerHTML:t._s(a.value)}})}))])])])])]}}])}),t._v(" "),e("ais-no-results",{scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n        Sorry, nothing found for "),e("strong",[t._v(t._s(a.query))]),t._v(" 😢\n      ")]}}])}),t._v(" "),e("footer",{staticClass:"footer"},[t._v("\n      Made with ⚽️ by "),e("a",{attrs:{href:"https://github.com/sarahdayan",target:"_blank"}},[t._v("Sarah Dayan")]),e("br"),t._v("\n      Raw data by "),e("a",{attrs:{href:"https://github.com/lsv",target:"_blank"}},[t._v("Martin Århof")]),t._v(" - Images by "),e("a",{attrs:{href:"https://unsplash.com/@wuilmarmm",target:"_blank"}},[t._v("Wuilmar Matias-Morales")]),t._v(" and "),e("a",{attrs:{href:"https://unsplash.com/@fznsr_",target:"_blank"}},[t._v("Fauzan Saari")])])],1)},staticRenderFns:[]};var d=s("VU/8")(l,o,!1,function(t){s("7OqZ")},null,null).exports,u=s("/ocq");e.a.use(u.a);var h=new u.a({routes:[{path:"/"}]}),v=s("MdZJ");e.a.use(v.a),e.a.config.productionTip=!1,new e.a({el:"#app",router:h,components:{App:d},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.3b47cf1e622b57f7d1e5.js.map