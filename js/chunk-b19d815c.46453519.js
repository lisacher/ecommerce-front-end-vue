(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b19d815c"],{a09f:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"fav"},[e("Navbar"),e("FavoriteList"),e("FootNavBar",{staticClass:"mobile-show"}),e("Footer")],1)},s=[],o=e("fd2d"),r=e("45c5"),n=e("d178"),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"fav"},[e("div",{staticClass:"container border-top"},[e("h4",[t._v("My Wishlist 我的收藏")]),t.FavoriteData<1?e("div",{staticClass:"text-center border-top p-3",staticStyle:{"font-size":"13px"}},[t._v(" 您還沒有任何收藏 ")]):t._e(),t._l(t.FavoriteData,(function(a,i){return e("div",{key:a.id,staticClass:"row border-bottom mb-3"},[e("div",{staticClass:"col-sm-3 mb-3"},[e("router-link",{attrs:{to:{name:"product-detail",params:{id:a.id}}}},[e("img",{staticClass:"img",attrs:{src:a.image,alt:""}})])],1),e("div",{staticClass:"col-sm-3 fav-detail"},[e("router-link",{attrs:{to:{name:"product-detail",params:{id:a.id}}}},[e("div",{staticClass:"item-name"},[t._v(t._s(a.title))])])],1),e("div",{staticClass:"col-sm-3 fav-detail"},[e("span",{staticClass:"item-price"},[t._v("NT$ "+t._s(a.price))])]),e("div",{staticClass:"col-sm-3 mt-2 mb-3"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.addShoppingCart(a.title,a.image,a.price,a.id)}}},[t._v(" Add to cart ")]),e("font-awesome-icon",{staticClass:"icon me-4 ms-4",attrs:{icon:["far","trash-alt"],size:"lg"},on:{click:function(a){return a.preventDefault(),t.removeFromFavorite(i)}}})],1)])}))],2),e("router-link",{staticClass:"row",attrs:{to:"/new"}},[e("button",{staticClass:"btn btn-light",attrs:{type:"button"}},[t._v(" Continue shopping ")])])],1)},l=[],d=e("2fa3"),m={name:"FavoriteList",methods:{addShoppingCart:function(t,a,e,i){this.$store.commit("setShoppingCart",{id:i,title:t,image:a,price:e,count:1}),d["a"].fire({icon:"success",title:"已加入購物車"})},removeFromFavorite:function(t){this.$store.commit("deleteFavoriteItem",t)}},computed:{FavoriteData:function(){return this.$store.getters.getFavoriteItem}}},u=m,v=(e("f3b6"),e("2877")),p=Object(v["a"])(u,c,l,!1,null,"4d782868",null),f=p.exports,b={components:{Navbar:n["a"],FootNavBar:r["a"],Footer:o["a"],FavoriteList:f},name:"Favorite"},C=b,h=Object(v["a"])(C,i,s,!1,null,"468e9f68",null);a["default"]=h.exports},f3b6:function(t,a,e){"use strict";e("f9a4")},f9a4:function(t,a,e){}}]);
//# sourceMappingURL=chunk-b19d815c.46453519.js.map