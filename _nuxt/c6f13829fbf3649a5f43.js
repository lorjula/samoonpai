(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{388:function(t,e,c){t.exports=c.p+"img/a1a8ab9.png"},402:function(t,e,c){"use strict";c.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 align-content-center"},[e("div",{staticStyle:{"text-align":"center",width:"100%"}},[e("img",{staticStyle:{width:"80%"},attrs:{src:c(388)}})])])])}],l=c(210),o=c(211),r=c(219),d={components:{Navbar:l.a,Back:o.a},name:"tenyaped",data:function(){return{tags:[],list:[]}},mounted:function(){this.getTenyaped()},methods:{getTenyaped:function(){console.log(r.a),this.tags=r.a.tags,this.list=r.a.list},onSearchResult:function(t){document.location="#"+t.tag}}},v=c(43),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"background",staticStyle:{"background-color":"#f5f5f5"}},[c("Navbar",{attrs:{onSearchResult:t.onSearchResult}}),t._v(" "),c("div",{staticClass:"container"},[t._m(0),t._v(" "),c("div",{staticClass:"row"},[c("div",{staticClass:"col-md-12"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-md-2"},[c("div",{staticClass:"mt-sm-0 btn-group-vertical"},[c("a",{staticStyle:{"font-weight":"bold","font-size":"23px",color:"#4F4F4F"}},[t._v("สมุนไพรไทย")]),t._v(" "),t._l(t.tags,(function(e){return[c("a",{staticStyle:{color:"#696969"},attrs:{href:e.tag}},[t._v(t._s(e.name))])]}))],2)]),t._v(" "),c("div",{staticClass:"col-md-10"},[c("div",{staticClass:"pr-sm-5"},[t._l(t.list,(function(e){return[c("div",{staticClass:"container card shadow border",staticStyle:{width:"100%"},attrs:{id:e.tag}},[c("div",{staticClass:"row  align-content-md-center"},[c("div",{staticClass:"col-sm-7 p-2 "},[c("img",{staticStyle:{width:"100%"},attrs:{src:e.image}})]),t._v(" "),c("div",{staticClass:"col-sm-5 p-3",staticStyle:{width:"auto"}},[c("div",{staticClass:"font-weight-normal"},[c("h3",[t._v(t._s(e.name))]),t._v(" "),t._l(e.benefit,(function(text){return[c("p",{staticStyle:{margin:"0"}},[t._v(" "+t._s(text))])]})),t._v(" "),c("p",{staticStyle:{"font-size":"10px"}},[t._v(t._s(e.reference))])],2)])])]),t._v(" "),c("br")]}))],2)])])])])]),t._v(" "),c("Back")],1)}),n,!1,null,"02d6898d",null);e.default=component.exports}}]);