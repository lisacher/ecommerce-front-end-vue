(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f427a8f4"],{2375:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"loadingio-spinner-spinner-x8futahb2h9"},[e("div",{staticClass:"ldio-lq2mt8rs2ki"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div")])])}],r=(e("d712"),e("2877")),n={},o=Object(r["a"])(n,s,a,!1,null,"c58f3c80",null);i["a"]=o.exports},"44ea":function(t,i,e){"use strict";e("c318")},"5f47":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"detail"},[e("Navbar"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-3"},[e("SideNavBar",{staticClass:"mobile-none"})],1),e("div",{staticClass:"col-sm-9"},[e("Products")],1)]),e("div",{staticClass:"footer mt-5"},[e("FootNavBar",{staticClass:"mobile-show"}),e("Footer")],1)],1)},a=[],r=e("1da1"),n=(e("96cf"),e("fd2d")),o=e("d178"),c=e("e161"),l=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"row"},[t.isLoading?e("Spinner"):[e("div",{staticClass:"col-sm-6"},[e("img",{staticClass:"p-5",attrs:{src:t.SingleProduct.image,alt:""}})]),e("div",{staticClass:"col-sm-6 p-5"},[e("h4",[t._v(t._s(t.SingleProduct.title))]),t.isFavorite?e("div",{staticClass:"icon-list"},[e("font-awesome-icon",{staticClass:"icon heart mt-4 me-2",attrs:{icon:["fas","heart"],size:"lg"},on:{click:function(i){return i.preventDefault(),t.removeFromFavorite(t.index)}}}),e("p",{staticClass:"mt-4 wish"},[t._v("WISH LIST")])],1):e("div",{staticClass:"icon-list"},[e("font-awesome-icon",{staticClass:"icon heart mt-4 me-2",attrs:{icon:["far","heart"],size:"lg"},on:{click:function(i){return i.preventDefault(),t.addFavoriteItem(t.SingleProduct.title,t.SingleProduct.image,t.SingleProduct.price,t.SingleProduct.id)}}}),e("p",{staticClass:"mt-4 wish"},[t._v("WISH LIST")])],1),e("p",{staticClass:"mt-4 bold"},[t._v("US$ "+t._s(t.SingleProduct.price))]),e("div",{staticClass:"count mt-2"},[e("font-awesome-icon",{staticClass:"me-4 icon",attrs:{icon:["fas","minus-circle"],size:"1x"},on:{click:function(i){return i.preventDefault(),t.handleMinus()}}}),t._v(" "+t._s(t.count)+" "),e("font-awesome-icon",{staticClass:"ms-4 me-3 icon",attrs:{icon:["fas","plus-circle"],size:"1x"},on:{click:function(i){return i.preventDefault(),t.handlePlus()}}})],1),e("div",{staticClass:"description mt-4"},[e("p",[t._v(" "+t._s(t.SingleProduct.description)+" ")])]),e("button",{staticClass:"mt-4 btn",on:{click:function(i){return i.preventDefault(),t.addShoppingCart(t.SingleProduct.title,t.SingleProduct.image,t.SingleProduct.price,t.count,t.SingleProduct.id)}}},[t._v(" 加入購物車 ")])])]],2)},u=[],d=e("ee21"),v=e("2fa3"),p=e("2375"),m={components:{Spinner:p["a"]},name:"Products",data:function(){return{SingleProduct:{id:-1,title:"",price:"",category:"",description:"",image:""},count:1,isFavorite:!1,isLoading:!0}},created:function(){var t=this.$route.params.id;this.fetchSingleProduct(t)},methods:{fetchSingleProduct:function(t){var i=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d["a"].getSingleProduct({productId:t});case 3:s=e.sent,a=s.data,i.SingleProduct=a,i.isLoading=!1,e.next=14;break;case 9:e.prev=9,e.t0=e["catch"](0),i.isLoading=!1,console.log(e.t0),v["a"].fire({icon:"error",title:"無法取得商品資料，請稍後再試"});case 14:case"end":return e.stop()}}),e,null,[[0,9]])})))()},handlePlus:function(){this.count++},handleMinus:function(){this.count>1&&this.count--},addShoppingCart:function(t,i,e,s,a){this.$store.commit("setShoppingCart",{title:t,image:i,price:e,count:s,id:a}),v["a"].fire({icon:"success",title:"已加入購物車"})},addFavoriteItem:function(t,i,e,s){this.isFavorite=!0,this.$store.commit("setFavoriteItem",{title:t,image:i,price:e,id:s}),v["a"].fire({icon:"success",title:"已加入收藏清單"})},removeFromFavorite:function(t){this.isFavorite=!1,this.$store.commit("deleteFavorite",t),v["a"].fire({icon:"success",title:"已移除收藏"})}}},g=m,f=(e("44ea"),e("2877")),h=Object(f["a"])(g,l,u,!1,null,"3dd0a70d",null),C=h.exports,_=e("45c5"),S={components:{Navbar:o["a"],SideNavBar:c["a"],Footer:n["a"],Products:C,FootNavBar:_["a"]},name:"ProductDetail",data:function(){return{SingleProduct:{id:-1,title:"",price:"",category:"",description:"",image:""}}},created:function(){var t=this.$route.params.id;this.fetchSingleProduct(t)},methods:{fetchSingleProduct:function(t){var i=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d["a"].getSingleProduct({productId:t});case 3:s=e.sent,a=s.data,console.log("data",a),i.SingleProduct=a,e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0),v["a"].fire({icon:"error",title:"無法取得商品資料，請稍後再試"});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},w=S,P=Object(f["a"])(w,s,a,!1,null,null,null);i["default"]=P.exports},"6a2c":function(t,i,e){},7653:function(t,i,e){"use strict";e("6a2c")},c318:function(t,i,e){},d712:function(t,i,e){"use strict";e("db67")},db67:function(t,i,e){},e161:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"row side-list"},[e("ul",{staticClass:"list-group"},[e("router-link",{attrs:{to:"/new"}},[e("p",{staticClass:"list-group-title"},[t._v("新品上市")])]),e("router-link",{attrs:{to:"/top"}},[e("li",{staticClass:"list-group-item point"},[t._v("熱銷補貨")])])],1),e("ul",{staticClass:"list-group"},[e("p",{staticClass:"list-group-title"},[t._v("男士類")]),e("router-link",{attrs:{to:"/men"}},[e("li",{staticClass:"list-group-item"},[t._v("短袖上衣")])]),e("router-link",{attrs:{to:"/men"}},[e("li",{staticClass:"list-group-item"},[t._v("外套")])])],1),e("ul",{staticClass:"list-group"},[e("p",{staticClass:"list-group-title"},[t._v("女士類")]),e("router-link",{attrs:{to:"/women"}},[e("li",{staticClass:"list-group-item"},[t._v("短袖上衣")])]),e("router-link",{attrs:{to:"/women"}},[e("li",{staticClass:"list-group-item"},[t._v("外套")])])],1),e("ul",{staticClass:"list-group"},[e("p",{staticClass:"list-group-title"},[t._v("珠寶飾品類")]),e("router-link",{attrs:{to:"/jewelery"}},[e("li",{staticClass:"list-group-item"},[t._v("耳環")])]),e("router-link",{attrs:{to:"/jewelery"}},[e("li",{staticClass:"list-group-item"},[t._v("戒指")])]),e("router-link",{attrs:{to:"/jewelery"}},[e("li",{staticClass:"list-group-item"},[t._v("手環")])])],1),e("ul",{staticClass:"list-group"},[e("p",{staticClass:"list-group-title"},[t._v("電器用品類")]),e("router-link",{attrs:{to:"/electronice"}},[e("li",{staticClass:"list-group-item"},[t._v("SSD")])]),e("router-link",{attrs:{to:"/electronice"}},[e("li",{staticClass:"list-group-item"},[t._v("液晶螢幕")])]),e("router-link",{attrs:{to:"/electronice"}},[e("li",{staticClass:"list-group-item"},[t._v("硬碟")])])],1)])},a=[],r=(e("7653"),e("2877")),n={},o=Object(r["a"])(n,s,a,!1,null,"77aa76b3",null);i["a"]=o.exports}}]);
//# sourceMappingURL=chunk-f427a8f4.5786d602.js.map