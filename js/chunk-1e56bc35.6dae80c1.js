(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e56bc35"],{"1c14":function(t,s,e){"use strict";var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"product"},[e("div",{staticClass:"row"},[e("form",{staticClass:"search d-flex mt-2 mb-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchWords,expression:"searchWords"}],staticClass:"form-control",attrs:{type:"search",placeholder:"Search","aria-label":"Search"},domProps:{value:t.searchWords},on:{input:function(s){s.target.composing||(t.searchWords=s.target.value)}}}),e("button",{staticClass:"btn",attrs:{type:"submit"},on:{click:function(s){return s.preventDefault(),t.filterSearch.apply(null,arguments)}}},[e("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","search"],size:"lg"}})],1)]),t._l(t.filterSearch(),(function(s){return e("div",{key:s.id,staticClass:"col-sm-3 item"},[e("router-link",{attrs:{to:{name:"product-detail",params:{id:s.id}}}},[e("img",{attrs:{src:s.image,alt:""}}),e("div",{staticClass:"item-detail mt-2"},[e("p",{staticClass:"item-name"},[t._v(t._s(s.title))]),e("p",{staticClass:"item-price"},[t._v("US$ "+t._s(s.price))])])])],1)}))],2)])},i=[],a=(e("4de4"),e("caad"),e("2532"),{name:"ProductList",props:{products:{type:Array,required:!0}},data:function(){return{product:this.products,searchWords:""}},methods:{filterSearch:function(){var t=this;return this.products.filter((function(s){return s.title.toLowerCase().includes(t.searchWords.toLowerCase())}))}}}),c=a,o=(e("ab25"),e("2877")),n=Object(o["a"])(c,r,i,!1,null,"555d990d",null);s["a"]=n.exports},2375:function(t,s,e){"use strict";var r=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"loadingio-spinner-spinner-x8futahb2h9"},[e("div",{staticClass:"ldio-lq2mt8rs2ki"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div")])])}],a=(e("d712"),e("2877")),c={},o=Object(a["a"])(c,r,i,!1,null,"c58f3c80",null);s["a"]=o.exports},2532:function(t,s,e){"use strict";var r=e("23e7"),i=e("5a34"),a=e("1d80"),c=e("ab13");r({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~String(a(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,s,e){var r=e("861d"),i=e("c6b6"),a=e("b622"),c=a("match");t.exports=function(t){var s;return r(t)&&(void 0!==(s=t[c])?!!s:"RegExp"==i(t))}},"5a34":function(t,s,e){var r=e("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},"6a2c":function(t,s,e){},7653:function(t,s,e){"use strict";e("6a2c")},"7a6a":function(t,s,e){"use strict";e.r(s);var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"new"},[e("Navbar"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-3"},[e("SideNavBar",{staticClass:"mobile-none"})],1),t.isLoading?e("Spinner"):[e("div",{staticClass:"col-sm-9"},[e("ProductList",{attrs:{products:t.products}})],1)]],2),e("div",{staticClass:"footer mt-5"},[e("FootNavBar",{staticClass:"mobile-show"}),e("Footer")],1)],1)},i=[],a=e("1da1"),c=(e("96cf"),e("fd2d")),o=e("d178"),n=e("e161"),l=e("1c14"),u=e("45c5"),d=e("ee21"),p=e("2375"),v={components:{Navbar:o["a"],SideNavBar:n["a"],Footer:c["a"],ProductList:l["a"],FootNavBar:u["a"],Spinner:p["a"]},name:"New",data:function(){return{products:[],isLoading:!0}},created:function(){this.fetchJewelery()},methods:{fetchJewelery:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function s(){var e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,d["a"].getJewelery();case 3:e=s.sent,t.products=e.data,t.isLoading=!1,s.next=12;break;case 8:s.prev=8,s.t0=s["catch"](0),t.isLoading=!1,console.log("error",s.t0);case 12:case"end":return s.stop()}}),s,null,[[0,8]])})))()}}},f=v,m=e("2877"),h=Object(m["a"])(f,r,i,!1,null,"4966e518",null);s["default"]=h.exports},ab13:function(t,s,e){var r=e("b622"),i=r("match");t.exports=function(t){var s=/./;try{"/./"[t](s)}catch(e){try{return s[i]=!1,"/./"[t](s)}catch(r){}}return!1}},ab25:function(t,s,e){"use strict";e("c38c")},c38c:function(t,s,e){},caad:function(t,s,e){"use strict";var r=e("23e7"),i=e("4d64").includes,a=e("44d2");r({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d712:function(t,s,e){"use strict";e("db67")},db67:function(t,s,e){},e161:function(t,s,e){"use strict";var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row side-list"},[e("ul",{staticClass:"list-group"},[e("router-link",{attrs:{to:"/new"}},[e("p",{staticClass:"list-group-title"},[t._v("新品上市")])]),e("router-link",{attrs:{to:"/top"}},[e("li",{staticClass:"list-group-item point"},[t._v("熱銷補貨")])])],1),e("ul",{staticClass:"list-group"},[e("p",{staticClass:"list-group-title"},[t._v("男士類")]),e("router-link",{attrs:{to:"/men"}},[e("li",{staticClass:"list-group-item"},[t._v("短袖上衣")])]),e("router-link",{attrs:{to:"/men"}},[e("li",{staticClass:"list-group-item"},[t._v("外套")])])],1),e("ul",{staticClass:"list-group"},[e("p",{staticClass:"list-group-title"},[t._v("女士類")]),e("router-link",{attrs:{to:"/women"}},[e("li",{staticClass:"list-group-item"},[t._v("短袖上衣")])]),e("router-link",{attrs:{to:"/women"}},[e("li",{staticClass:"list-group-item"},[t._v("外套")])])],1),e("ul",{staticClass:"list-group"},[e("p",{staticClass:"list-group-title"},[t._v("珠寶飾品類")]),e("router-link",{attrs:{to:"/jewelery"}},[e("li",{staticClass:"list-group-item"},[t._v("耳環")])]),e("router-link",{attrs:{to:"/jewelery"}},[e("li",{staticClass:"list-group-item"},[t._v("戒指")])]),e("router-link",{attrs:{to:"/jewelery"}},[e("li",{staticClass:"list-group-item"},[t._v("手環")])])],1),e("ul",{staticClass:"list-group"},[e("p",{staticClass:"list-group-title"},[t._v("電器用品類")]),e("router-link",{attrs:{to:"/electronice"}},[e("li",{staticClass:"list-group-item"},[t._v("SSD")])]),e("router-link",{attrs:{to:"/electronice"}},[e("li",{staticClass:"list-group-item"},[t._v("液晶螢幕")])]),e("router-link",{attrs:{to:"/electronice"}},[e("li",{staticClass:"list-group-item"},[t._v("硬碟")])])],1)])},i=[],a=(e("7653"),e("2877")),c={},o=Object(a["a"])(c,r,i,!1,null,"77aa76b3",null);s["a"]=o.exports}}]);
//# sourceMappingURL=chunk-1e56bc35.6dae80c1.js.map