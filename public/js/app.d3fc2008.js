(function(e){function t(t){for(var o,s,i=t[0],l=t[1],u=t[2],c=0,m=[];c<i.length;c++)s=i[c],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9fb93b48"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var u=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}r[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),n("router-view")],1)},a=[],s=(n("034f"),n("2877")),i={},l=Object(s["a"])(i,r,a,!1,null,null,null),u=l.exports,c=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("Employees")]),e._l(e.employees,(function(t){return n("div",{key:t.id},[n("router-link",{attrs:{to:"/employees/"+t.id}},[n("img",{attrs:{src:t.picture,alt:""}}),n("h4",[e._v(e._s(t.first_name)+" "+e._s(t.last_name))])]),n("li",[e._v(e._s(t.gender))]),n("li",[e._v(e._s(t.email))]),n("li",[e._v(e._s(t.phone))]),n("li",[e._v(e._s(t.job_title))]),n("p")],1)}))],2)},m=[],d=n("bc3a"),f=n.n(d),v={data:function(){return{employees:[]}},created:function(){this.employeeIndex()},methods:{employeeIndex:function(){var e=this;f.a.get("https://pacific-thicket-40492.herokuapp.com/employees").then((function(t){e.employees=t.data,console.log(t.data)}))}}},h=v,_=Object(s["a"])(h,p,m,!1,null,null,null),y=_.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(e._s(e.employee.first_name)+" "+e._s(e.employee.last_name))]),n("img",{attrs:{src:e.employee.picture,alt:""}}),n("p",[e._v(e._s(e.employee.gender))]),n("p",[e._v(e._s(e.employee.email))]),n("p",[e._v(e._s(e.employee.phone))]),n("p",[e._v(e._s(e.employee.job_title))]),n("p",[e._v(e._s(e.employee.department.name))]),n("router-link",{attrs:{to:"/"}},[n("button",[e._v("Back")])])],1)},b=[],w={data:function(){return{employee:{}}},created:function(){this.employeeShow()},methods:{employeeShow:function(){var e=this;f.a.get("https://pacific-thicket-40492.herokuapp.com/employees/"+this.$route.params.id).then((function(t){e.employee=t.data,console.log(t.data)}))}}},P=w,j=Object(s["a"])(P,g,b,!1,null,null,null),S=j.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("h1",[e._v("Login")]),e._l(e.errors,(function(t){return n("li",{key:t.id},[e._v(" "+e._s(t)+" ")])})),n("form",{on:{submit:function(t){return t.preventDefault(),e.Login()}}},[n("p",[e._v("Email:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newSessionParams.email,expression:"newSessionParams.email"}],attrs:{type:"text"},domProps:{value:e.newSessionParams.email},on:{input:function(t){t.target.composing||e.$set(e.newSessionParams,"email",t.target.value)}}}),n("p",[e._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newSessionParams.password,expression:"newSessionParams.password"}],attrs:{type:"password"},domProps:{value:e.newSessionParams.password},on:{input:function(t){t.target.composing||e.$set(e.newSessionParams,"password",t.target.value)}}}),n("p"),n("input",{attrs:{type:"submit"}})])],2)},x=[],O={data:function(){return{newSessionParams:{},errors:[]}},methods:{Login:function(){var e=this;f.a.post("https://pacific-thicket-40492.herokuapp.com/sessions",this.newSessionParams).then((function(t){console.log(t.data),f.a.defaults.headers.common["Authorization"]="Bearer "+t.data.jwt,localStorage.setItem("jwt",t.data.jwt),localStorage.setItem("user_id",t.data.user_id),e.$router.push("/")})).catch((function(t){console.log(t.response),e.errors=["Invalid email or password"]}))}}},E=O,$=Object(s["a"])(E,k,x,!1,null,null,null),L=$.exports;o["a"].use(c["a"]);var I=[{path:"/",name:"Home",component:y},{path:"/employees/:id",name:"EmployeeShow",component:S},{path:"/login",name:"Login",component:L},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],T=new c["a"]({mode:"history",base:"/",routes:I}),A=T;o["a"].config.productionTip=!1;var C=localStorage.getItem("jwt");C&&(f.a.defaults.headers.common["Authorization"]="Bearer "+C),new o["a"]({router:A,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.d3fc2008.js.map