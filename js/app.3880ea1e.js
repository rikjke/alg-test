(function(t){function e(e){for(var r,a,s=e[0],u=e[1],l=e[2],p=0,d=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"alg-test"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{rows:"25",cols:"100",placeholder:"Ввод текста",type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("input",{attrs:{type:"text",placeholder:"Первое слово"},on:{input:t.setFirstWord}}),n("input",{attrs:{type:"text",placeholder:"Второе слово"},on:{input:t.setSecondWord}}),n("button",{on:{click:t.getDistance}},[t._v("Вычислить дистанцию")]),n("p",[t._v("Минимальное расстояние "+t._s(t.minDistance))]),n("p",[t._v("Максимальное расстояние "+t._s(t.maxDistance))])])])},i=[],a=(n("ac1f"),n("1276"),{name:"App",methods:{setFirstWord:function(t){console.log(t),this.firstWord=t.path[0].value.toLowerCase()},setSecondWord:function(t){this.secondWord=t.path[0].value.toLowerCase()},getDistance:function(){var t=null,e=null,n=null,r=null,o=this.text.toLowerCase().split(" "),i=o.length;for(var a in o)this.firstWord===o[a]&&null==t&&(t=a),this.secondWord===o[a]&&null==n&&(n=a),this.firstWord===o[a]&&(e=a),this.secondWord===o[a]&&(r=a),e&&r&&Math.abs(e-r)<i&&(i=Math.abs(e-r));this.maxDistance=e-n>r-t&&t&&e&&n&&r?e-n:r-t,i==o.length?(this.minDistance="Совпадений нет",this.maxDistance="Совпадений нет"):this.minDistance=i}},data:function(){return{text:"",minDistance:null,maxDistance:null,firstWord:"",secondWord:""}}}),s=a,u=(n("034f"),n("2877")),l=Object(u["a"])(s,o,i,!1,null,null,null),c=l.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(c)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.3880ea1e.js.map