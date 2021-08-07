(function(e){function t(t){for(var o,u,l=t[0],i=t[1],s=t[2],c=0,f=[];c<l.length;c++)u=l[c],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&f.push(r[u][0]),r[u]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},a=[];function u(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9fb93b48"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=u(e);var s=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}r[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},a=[],u=(n("034f"),n("2877")),l={},i=Object(u["a"])(l,r,a,!1,null,null,null),s=i.exports,c=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("Employees")]),e._l(e.employees,(function(t){return n("div",{key:t.id},[n("router-link",{attrs:{to:"/employees/"+t.id}},[n("img",{attrs:{src:t.picture,alt:""}}),n("h4",[e._v(e._s(t.first_name)+" "+e._s(t.last_name))])]),n("li",[e._v(e._s(t.gender))]),n("li",[e._v(e._s(t.email))]),n("li",[e._v(e._s(t.phone))]),n("li",[e._v(e._s(t.job_title))]),n("p")],1)}))],2)},f=[],d=n("bc3a"),m=n.n(d),h={data:function(){return{employees:[]}},created:function(){this.employeeIndex()},methods:{employeeIndex:function(){var e=this;m.a.get("http://localhost:3000/employees").then((function(t){e.employees=t.data,console.log(t.data)}))}}},v=h,_=Object(u["a"])(v,p,f,!1,null,null,null),y=_.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(e._s(e.employee.first_name)+" "+e._s(e.employee.last_name))]),n("img",{attrs:{src:e.employee.picture,alt:""}}),n("p",[e._v(e._s(e.employee.gender))]),n("p",[e._v(e._s(e.employee.email))]),n("p",[e._v(e._s(e.employee.phone))]),n("p",[e._v(e._s(e.employee.job_title))]),n("p",[e._v(e._s(e.employee.department.name))]),n("router-link",{attrs:{to:"/"}},[n("button",[e._v("Back")])])],1)},g=[],w={data:function(){return{employee:{}}},created:function(){this.employeeShow()},methods:{employeeShow:function(){var e=this;m.a.get("http://localhost:3000/employees/"+this.$route.params.id).then((function(t){e.employee=t.data,console.log(t.data)}))}}},j=w,O=Object(u["a"])(j,b,g,!1,null,null,null),k=O.exports;o["a"].use(c["a"]);var x=[{path:"/",name:"Home",component:y},{path:"/employees/:id",name:"EmployeeShow",component:k},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],P=new c["a"]({mode:"history",base:"/",routes:x}),E=P;o["a"].config.productionTip=!1,new o["a"]({router:E,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.c6e95552.js.map