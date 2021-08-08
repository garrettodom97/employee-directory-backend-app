(function(e){function t(t){for(var o,s,i=t[0],l=t[1],p=t[2],m=0,c=[];m<i.length;m++)s=i[m],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&c.push(a[s][0]),a[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(c.length)c.shift()();return r.push.apply(r,p||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9fb93b48"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=a[e]=[t,o]}));t.push(n[2]=o);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var p=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",p.name="ChunkLoadError",p.type=o,p.request=r,n[1](p)}a[e]=void 0}};var m=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var u=p;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),e.isLoggedIn()?e._e():n("router-link",{attrs:{to:"/login"}},[e._v("Login")]),e._v(" | "),e.isLoggedIn()?n("router-link",{attrs:{to:"/logout"}},[e._v("Login")]):e._e(),e._v(" | "),n("router-link",{attrs:{to:"/employees/new"}},[e._v("Create Employee")])],1),n("router-view")],1)},r=[],s={methods:{isLoggedIn:function(){return!!localStorage.getItem("jwt")}}},i=s,l=(n("034f"),n("2877")),p=Object(l["a"])(i,a,r,!1,null,null,null),m=p.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("Employees")]),e._l(e.employees,(function(t){return n("div",{key:t.id},[n("router-link",{attrs:{to:"/employees/"+t.id}},[n("img",{attrs:{src:t.picture,alt:""}}),n("h4",[e._v(e._s(t.first_name)+" "+e._s(t.last_name))])]),n("li",[e._v(e._s(t.gender))]),n("li",[e._v(e._s(t.email))]),n("li",[e._v(e._s(t.phone))]),n("li",[e._v(e._s(t.job_title))]),n("p")],1)}))],2)},d=[],v=n("bc3a"),f=n.n(v),h={data:function(){return{employees:[]}},created:function(){this.employeeIndex()},methods:{employeeIndex:function(){var e=this;f.a.get("https://pacific-thicket-40492.herokuapp.com/employees").then((function(t){e.employees=t.data,console.log(t.data)}))}}},y=h,g=Object(l["a"])(y,c,d,!1,null,null,null),_=g.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(e._s(e.employee.first_name)+" "+e._s(e.employee.last_name))]),n("img",{attrs:{src:e.employee.picture,alt:""}}),n("p",[e._v(e._s(e.employee.gender))]),n("p",[e._v(e._s(e.employee.email))]),n("p",[e._v(e._s(e.employee.phone))]),n("p",[e._v(e._s(e.employee.job_title))]),n("p",[e._v(e._s(e.employee.department.name))]),n("router-link",{attrs:{to:"/"}},[n("button",[e._v("Back")])])],1)},P=[],E={data:function(){return{employee:{}}},created:function(){this.employeeShow()},methods:{employeeShow:function(){var e=this;f.a.get("https://pacific-thicket-40492.herokuapp.com/employees/"+this.$route.params.id).then((function(t){e.employee=t.data,console.log(t.data)}))}}},b=E,x=Object(l["a"])(b,w,P,!1,null,null,null),j=x.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("h1",[e._v("Login")]),e._l(e.errors,(function(t){return n("li",{key:t.id},[e._v(" "+e._s(t)+" ")])})),n("form",{on:{submit:function(t){return t.preventDefault(),e.Login()}}},[n("p",[e._v("Email:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newSessionParams.email,expression:"newSessionParams.email"}],attrs:{type:"text"},domProps:{value:e.newSessionParams.email},on:{input:function(t){t.target.composing||e.$set(e.newSessionParams,"email",t.target.value)}}}),n("p",[e._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newSessionParams.password,expression:"newSessionParams.password"}],attrs:{type:"password"},domProps:{value:e.newSessionParams.password},on:{input:function(t){t.target.composing||e.$set(e.newSessionParams,"password",t.target.value)}}}),n("p"),n("input",{attrs:{type:"submit"}})])],2)},S=[],$={data:function(){return{newSessionParams:{},errors:[]}},methods:{Login:function(){var e=this;f.a.post("https://pacific-thicket-40492.herokuapp.com/sessions",this.newSessionParams).then((function(t){console.log(t.data),f.a.defaults.headers.common["Authorization"]="Bearer "+t.data.jwt,localStorage.setItem("jwt",t.data.jwt),localStorage.setItem("user_id",t.data.user_id),e.$router.push("/")})).catch((function(t){console.log(t.response),e.errors=["Invalid email or password"]}))}}},O=$,L=Object(l["a"])(O,k,S,!1,null,null,null),N=L.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Logout"})},C=[],A={created:function(){delete f.a.defaults.headers.common["Authorization"],localStorage.removeItem("jwt"),this.$router.push("/")}},M=A,T=Object(l["a"])(M,I,C,!1,null,null,null),z=T.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"employeeNew"},[n("h1",[e._v("Create a new employee")]),e._l(e.errors,(function(t){return n("li",{key:t.id},[e._v(" "+e._s(t)+" ")])})),n("form",{on:{submit:function(t){return t.preventDefault(),e.createEmployee()}}},[n("p",[e._v("First Name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newEmployeeParams.first_name,expression:"newEmployeeParams.first_name"}],attrs:{type:"text"},domProps:{value:e.newEmployeeParams.first_name},on:{input:function(t){t.target.composing||e.$set(e.newEmployeeParams,"first_name",t.target.value)}}}),n("p",[e._v("Last Name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newEmployeeParams.last_name,expression:"newEmployeeParams.last_name"}],attrs:{type:"text"},domProps:{value:e.newEmployeeParams.last_name},on:{input:function(t){t.target.composing||e.$set(e.newEmployeeParams,"last_name",t.target.value)}}}),n("p",[e._v("Gender:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newEmployeeParams.gender,expression:"newEmployeeParams.gender"}],attrs:{type:"text"},domProps:{value:e.newEmployeeParams.gender},on:{input:function(t){t.target.composing||e.$set(e.newEmployeeParams,"gender",t.target.value)}}}),n("p",[e._v("Email:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newEmployeeParams.email,expression:"newEmployeeParams.email"}],attrs:{type:"text"},domProps:{value:e.newEmployeeParams.email},on:{input:function(t){t.target.composing||e.$set(e.newEmployeeParams,"email",t.target.value)}}}),n("p",[e._v("Phone:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newEmployeeParams.phone,expression:"newEmployeeParams.phone"}],attrs:{type:"text"},domProps:{value:e.newEmployeeParams.phone},on:{input:function(t){t.target.composing||e.$set(e.newEmployeeParams,"phone",t.target.value)}}}),n("p"),n("p",[e._v("Picture:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newEmployeeParams.picture,expression:"newEmployeeParams.picture"}],attrs:{type:"text"},domProps:{value:e.newEmployeeParams.picture},on:{input:function(t){t.target.composing||e.$set(e.newEmployeeParams,"picture",t.target.value)}}}),n("p"),n("p",[e._v("Department Code (1: Engineering, 2: Sales, 3: Marketing, 4: Finance, 5: Human Resources):")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newEmployeeParams.phone,expression:"newEmployeeParams.phone"}],attrs:{type:"text"},domProps:{value:e.newEmployeeParams.phone},on:{input:function(t){t.target.composing||e.$set(e.newEmployeeParams,"phone",t.target.value)}}}),n("p"),n("input",{attrs:{type:"submit"}})])],2)},D=[],H={data:function(){return{newEmployeeParams:{},errors:[]}},methods:{createEmployee:function(){var e=this;f.a.post("https://pacific-thicket-40492.herokuapp.com/employees",this.newEmployeeParams).then((function(t){console.log(t.data),e.$router.push("/")})).catch((function(t){console.log(t.response),e.errors=t.response}))}}},F=H,J=Object(l["a"])(F,B,D,!1,null,null,null),q=J.exports;o["a"].use(u["a"]);var G=[{path:"/",name:"Home",component:_},{path:"/employees/:id",name:"EmployeeShow",component:j},{path:"/login",name:"Login",component:N},{path:"/logout",name:"Logout",component:z},{path:"/employees/new",name:"EmployeeNew",component:q},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],R=new u["a"]({mode:"history",base:"/",routes:G}),K=R;o["a"].config.productionTip=!1;var Q=localStorage.getItem("jwt");Q&&(f.a.defaults.headers.common["Authorization"]="Bearer "+Q),new o["a"]({router:K,render:function(e){return e(m)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.c5e90248.js.map