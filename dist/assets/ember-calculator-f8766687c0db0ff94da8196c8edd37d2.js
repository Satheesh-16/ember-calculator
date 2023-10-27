"use strict"
define("ember-calculator/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-calculator/app",["exports","@ember/application","ember-resolver","ember-load-initializers","ember-calculator/config/environment"],(function(e,t,r,i,l){function a(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var i=r.call(e,t||"default")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class n extends t.default{constructor(){super(...arguments),a(this,"modulePrefix",l.default.modulePrefix),a(this,"podModulePrefix",l.default.podModulePrefix),a(this,"Resolver",r.default)}}e.default=n,(0,i.default)(n,l.default.modulePrefix)})),define("ember-calculator/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-calculator/components/cal-button",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service","@ember/object","@glimmer/tracking"],(function(e,t,r,i,l,a,n){var o,u,c
function s(e,t,r,i){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(i):void 0})}function d(e,t,r,i,l){var a={}
return Object.keys(i).forEach((function(e){a[e]=i[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce((function(r,i){return i(e,t,r)||r}),a),l&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(l):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const f=(0,r.createTemplateFactory)({id:"bKJrMZQ/",block:'[[[1,"\\n"],[10,0],[14,1,"calci"],[12],[1,"\\n        "],[8,[39,0],[[24,1,"display"]],[["@value","@type"],[[30,0,["total"]],"text"]],null],[1,"\\n    "],[10,"hr"],[12],[13],[1,"\\n    "],[10,0],[14,1,"inp-but"],[12],[1,"\\n"],[42,[28,[37,2],[[28,[37,2],[[30,0,["model"]]],null]],null],null,[[[1,"            "],[11,"button"],[24,4,"button"],[4,[38,3],["click",[28,[37,4],[[30,0,["displayer"]],[30,1]],null]],null],[12],[1,[30,1]],[13],[1,"\\n"]],[1]],null],[1,"        "],[11,"button"],[24,4,"button"],[4,[38,3],["click",[30,0,["backup"]]],null],[12],[1,"Q"],[13],[1,"\\n        "],[11,"button"],[24,4,"button"],[4,[38,3],["click",[28,[37,4],[[30,0,["calculate"]],[30,0,["total"]]],null]],null],[12],[1,"="],[13],[1,"\\n    "],[13],[1,"\\n"],[13]],["val"],false,["input","each","-track-array","on","fn"]]',moduleName:"ember-calculator/components/cal-button.hbs",isStrictMode:!1})
var b=""
let p=(o=class extends i.default{constructor(){super(...arguments),s(this,"history",u,this),s(this,"total",c,this)}displayer(e){"÷"==e?this.total+="/":"AC"==e?this.total="":"C"==e?this.total=this.total.slice(0,-1):this.total+=e}calculate(e){e=e.split(" ").join(""),b=e
let t=[],r=""
for(let i=0;i<e.length;i++)this.checker(e[i])?r+=e[i]:(r=parseInt(r),t.push(r,e[i]),r="")
t.push(parseInt(r)),isNaN(t[0])&&t.splice(0,1),this.calculator(t)}checker(e){if(!isNaN(e))return!0}calculator(e){"-"==e[0]&&(e.splice(0,1),e[0]*=-1,console.log(e))
var t=e[0]
console.log(e[0])
for(let r=0;r<e.length;r++)if(isNaN(e[r]))switch(e[r]){case"+":t+=e[r+1]
break
case"-":t-=e[r+1]
break
case"/":t/=e[r+1]
break
case"*":t*=e[r+1]
break
case"%":t%=e[r+1]
break
default:alert("no such operation")}this.total=t.toString(),this.history.addtocal({total:b,result:this.total})}backup(){alert(b)}get model(){return["%","00","AC","C","7","8","9","÷","4","5","6"," * ","1","2","3"," - ","0"," + "]}},u=d(o.prototype,"history",[l.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=d(o.prototype,"total",[n.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),d(o.prototype,"displayer",[a.action],Object.getOwnPropertyDescriptor(o.prototype,"displayer"),o.prototype),d(o.prototype,"calculate",[a.action],Object.getOwnPropertyDescriptor(o.prototype,"calculate"),o.prototype),d(o.prototype,"backup",[a.action],Object.getOwnPropertyDescriptor(o.prototype,"backup"),o.prototype),o)
e.default=p,(0,t.setComponentTemplate)(f,p)})),define("ember-calculator/components/clear",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service","@ember/object"],(function(e,t,r,i,l,a){var n,o
function u(e,t,r,i,l){var a={}
return Object.keys(i).forEach((function(e){a[e]=i[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce((function(r,i){return i(e,t,r)||r}),a),l&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(l):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const c=(0,r.createTemplateFactory)({id:"LYtvPqsz",block:'[[[10,0],[14,1,"ans"],[12],[1,"\\n"],[42,[28,[37,1],[[28,[37,1],[[30,1]],null]],null],null,[[[1,"        "],[10,2],[12],[1,[30,2,["total"]]],[1," ==> "],[1,[30,2,["result"]]],[13],[1,"\\n"]],[2]],null],[13],[1,"\\n\\n"],[11,"button"],[24,0,"clearhist"],[24,4,"button"],[4,[38,2],["click",[30,0,["clear"]]],null],[12],[1,"Clear History"],[13],[1,"\\n"],[11,"button"],[24,1,"but-on"],[24,4,"button"],[4,[38,2],["click",[30,0,["refresh"]]],null],[12],[1,"refresh"],[13],[1,"\\n\\n"],[1,[30,0,["value"]]],[1,"\\n"]],["@model","cal"],false,["each","-track-array","on"]]',moduleName:"ember-calculator/components/clear.hbs",isStrictMode:!1})
let s=(n=class extends i.default{constructor(){var e,t,r,i
super(...arguments),e=this,t="history",i=this,(r=o)&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(i):void 0})}clear(){this.history.calculations=[],document.querySelector("#ans").innerHTML="History Cleared"}refresh(){if(document.querySelector("#ans").innerHTML="",0==this.history.calculations.length)document.querySelector("#ans").innerHTML="0 ==> 0"
else{var e=""
for(let t=0;t<this.history.calculations.length;t++){e+=` <br>${this.history.calculations[t].total} ==> ${this.history.calculations[t].result} <br>`}document.querySelector("#ans").innerHTML=e}}},o=u(n.prototype,"history",[l.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u(n.prototype,"clear",[a.action],Object.getOwnPropertyDescriptor(n.prototype,"clear"),n.prototype),u(n.prototype,"refresh",[a.action],Object.getOwnPropertyDescriptor(n.prototype,"refresh"),n.prototype),n)
e.default=s,(0,t.setComponentTemplate)(c,s)})),define("ember-calculator/components/head",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const l=(0,r.createTemplateFactory)({id:"yq2d9ohS",block:'[[[10,0],[14,1,"head"],[12],[1,"\\n    "],[10,3],[14,6,"https://zoho.com/"],[12],[10,"img"],[14,"src","/Images/zoho-img-99c4a7164a36698790098bd86bf47aea.png"],[14,"alt","zoho link"],[14,"width","70"],[14,"height","30"],[12],[13],[13],[1,"\\n    "],[10,"h2"],[12],[8,[39,0],null,[["@route"],["index"]],[["default"],[[[[1,"Calculator"]],[]]]]],[13],[1,"\\n    "],[10,0],[14,1,"head-right"],[12],[1,"\\n    "],[10,"h4"],[12],[8,[39,0],[[24,0,"nav-hist"]],[["@route"],["calci.historydisplay"]],[["default"],[[[[1,"History"]],[]]]]],[13],[1,"\\n    "],[13],[1,"\\n"],[13]],[],false,["link-to"]]',moduleName:"ember-calculator/components/head.hbs",isStrictMode:!1})
var a=(0,t.setComponentTemplate)(l,(0,i.default)())
e.default=a})),define("ember-calculator/components/main-body",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const l=(0,r.createTemplateFactory)({id:"NK4o3CVE",block:'[[[10,0],[14,0,"main-body"],[12],[1,"\\n"],[41,[30,0,["nonhis"]],[[[1,"        "],[10,0],[14,1,"head"],[12],[1,"\\n            "],[10,3],[14,6,"https://www.calculator.net/"],[12],[10,"img"],[14,"src","/Images/logo-7e0b258a1c02418ae767a61d8ac5bd40.png"],[14,"alt","zoho link"],[14,"width","80"],[14,"height","40"],[12],[13],[13],[1,"\\n            "],[10,"h2"],[12],[8,[39,1],null,[["@route"],["index"]],[["default"],[[[[1,"Calculator"]],[]]]]],[13],[1,"\\n            "],[10,0],[14,1,"head-right"],[12],[1,"\\n                "],[10,"h4"],[12],[8,[39,1],[[24,0,"nav-hist"]],[["@route"],["calci"]],[["default"],[[[[1,"Go Back"]],[]]]]],[13],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n"]],[]],[[[1,"        "],[10,0],[14,1,"head"],[12],[1,"\\n            "],[10,3],[14,6,"https://www.calculator.net/"],[12],[10,"img"],[14,"src","/Images/logo-7e0b258a1c02418ae767a61d8ac5bd40.png"],[14,"alt","zoho link"],[14,"width","80"],[14,"height","40"],[12],[13],[13],[1,"\\n            "],[10,"h2"],[12],[8,[39,1],null,[["@route"],["index"]],[["default"],[[[[1,"Calculator"]],[]]]]],[13],[1,"\\n            "],[10,0],[14,1,"head-right"],[12],[1,"\\n                "],[10,"h4"],[12],[8,[39,1],[[24,0,"nav-hist"]],[["@route"],["calci.historydisplay"]],[["default"],[[[[1,"History"]],[]]]]],[13],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n"]],[]]],[1,"    "],[18,1,null],[1,"\\n"],[13]],["&default"],false,["if","link-to","yield"]]',moduleName:"ember-calculator/components/main-body.hbs",isStrictMode:!1})
var a=(0,t.setComponentTemplate)(l,(0,i.default)())
e.default=a})),define("ember-calculator/controllers/calci/historydisplay",["exports","@ember/controller","@ember/service","@ember/object"],(function(e,t,r,i){var l,a,n
function o(e,t,r,i){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(i):void 0})}function u(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var i=r.call(e,t||"default")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t,r,i,l){var a={}
return Object.keys(i).forEach((function(e){a[e]=i[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce((function(r,i){return i(e,t,r)||r}),a),l&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(l):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
let s=(l=class extends t.default{constructor(){super(...arguments),o(this,"history",a,this),o(this,"router",n,this),u(this,"welcome","Welcome to the History Page")}greet(){alert(this.welcome)}transs(){this.router.transitionTo("index")}},a=c(l.prototype,"history",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),n=c(l.prototype,"router",[r.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c(l.prototype,"greet",[i.action],Object.getOwnPropertyDescriptor(l.prototype,"greet"),l.prototype),c(l.prototype,"transs",[i.action],Object.getOwnPropertyDescriptor(l.prototype,"transs"),l.prototype),l)
e.default=s})),define("ember-calculator/data-adapter",["exports","@ember-data/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-calculator/helpers/app-version",["exports","@ember/component/helper","ember-calculator/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,r,i){function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const l=r.default.APP.version
let a=t.versionOnly||t.hideSha,n=t.shaOnly||t.hideVersion,o=null
return a&&(t.showExtended&&(o=l.match(i.versionExtendedRegExp)),o||(o=l.match(i.versionRegExp))),n&&(o=l.match(i.shaRegExp)),o?o[0]:l}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=l,e.default=void 0
var a=(0,t.helper)(l)
e.default=a})),define("ember-calculator/helpers/ensure-safe-component",["exports","@embroider/util"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.EnsureSafeComponentHelper}})})),define("ember-calculator/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("ember-calculator/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("ember-calculator/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("ember-calculator/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-calculator/config/environment"],(function(e,t,r){let i,l
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(i=r.default.APP.name,l=r.default.APP.version)
var a={name:"App Version",initialize:(0,t.default)(i,l)}
e.default=a})),define("ember-calculator/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize(){(arguments[1]||arguments[0]).register("container-debug-adapter:main",t.default)}}
e.default=r})),define("ember-calculator/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-calculator/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i={name:"ember-data",initialize:r.default}
e.default=i})),define("ember-calculator/initializers/index",["exports"],(function(e){function t(e){window.console.log("%c🚫STOP!","color:red;font-size:xx-large;font-weight:bold"),window.console.log("%cThis is a browser feature intended for developers. Do not enter or paste code which you don't understand. It may allow attackers to steal your information or impersonate you.\nSee https://en.wikipedia.org/wiki/Self-XSS for more details","font-size:large;")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.initialize=t
var r={initialize:t}
e.default=r})),define("ember-calculator/instance-initializers/ember-data",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={name:"ember-data",initialize(){}}
e.default=t})),define("ember-calculator/router",["exports","@ember/routing/router","ember-calculator/config/environment"],(function(e,t,r){function i(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var i=r.call(e,t||"default")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class l extends t.default{constructor(){super(...arguments),i(this,"location",r.default.locationType),i(this,"rootURL",r.default.rootURL)}}e.default=l,l.map((function(){this.route("calci",(function(){this.route("historydisplay")})),this.route("form")}))})),define("ember-calculator/routes/calci/historydisplay",["exports","@ember/routing/route","@ember/service"],(function(e,t,r){var i,l
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
let a=(i=class extends t.default{constructor(){var e,t,r,i
super(...arguments),e=this,t="history",i=this,(r=l)&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(i):void 0})}async model(){return this.history.calculations}},n=i.prototype,o="history",u=[r.inject],c={configurable:!0,enumerable:!0,writable:!0,initializer:null},d={},Object.keys(c).forEach((function(e){d[e]=c[e]})),d.enumerable=!!d.enumerable,d.configurable=!!d.configurable,("value"in d||d.initializer)&&(d.writable=!0),d=u.slice().reverse().reduce((function(e,t){return t(n,o,e)||e}),d),s&&void 0!==d.initializer&&(d.value=d.initializer?d.initializer.call(s):void 0,d.initializer=void 0),void 0===d.initializer&&(Object.defineProperty(n,o,d),d=null),l=d,i)
var n,o,u,c,s,d
e.default=a})),define("ember-calculator/routes/form",["exports","@ember/routing/route"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class r extends t.default{}e.default=r})),define("ember-calculator/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-calculator/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-calculator/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-calculator/services/-ensure-registered",["exports","@embroider/util/services/ensure-registered"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-calculator/services/history",["exports","@ember/service","@glimmer/tracking","@ember/object"],(function(e,t,r,i){var l,a
function n(e,t,r,i,l){var a={}
return Object.keys(i).forEach((function(e){a[e]=i[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce((function(r,i){return i(e,t,r)||r}),a),l&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(l):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
let o=(l=class extends t.default{constructor(){var e,t,r,i
super(...arguments),e=this,t="calculations",i=this,(r=a)&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(i):void 0})}addtocal(e){this.calculations=[...this.calculations,e],console.log(this.calculations)}},a=n(l.prototype,"calculations",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),n(l.prototype,"addtocal",[i.action],Object.getOwnPropertyDescriptor(l.prototype,"addtocal"),l.prototype),l)
e.default=o})),define("ember-calculator/services/page-title-list",["exports","ember-page-title/services/page-title-list"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-calculator/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}))
define("ember-calculator/services/store",["exports","ember-data/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-calculator/templates/application",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"RmT1Vc8V",block:'[[[1,[28,[35,0],["EmberCalculator"],null]],[1,"\\n\\n\\n\\n\\n"],[46,[28,[37,2],null,null],null,null,null]],[],false,["page-title","component","-outlet"]]',moduleName:"ember-calculator/templates/application.hbs",isStrictMode:!1})
e.default=r})),define("ember-calculator/templates/calci",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"t0h8iP7a",block:'[[[10,0],[14,0,"his"],[12],[1,"\\n\\n"],[8,[39,0],null,[["@nonhis"],[false]],[["default"],[[[[1,"\\n    "],[8,[39,1],null,null,[["default"],[[[],[]]]]],[1,"\\n"]],[]]]]],[1,"\\n\\n\\n\\n"],[46,[28,[37,3],null,null],null,null,null],[1,"\\n"],[13],[1,"\\n\\n\\n"]],[],false,["main-body","cal-button","component","-outlet"]]',moduleName:"ember-calculator/templates/calci.hbs",isStrictMode:!1})
e.default=r})),define("ember-calculator/templates/calci/historydisplay",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"+Z6STIZx",block:'[[[8,[39,0],null,[["@nonhis"],[true]],[["default"],[[[[1,"\\n    "],[10,0],[14,0,"history"],[12],[1,"\\n    "],[11,"button"],[24,4,"button"],[4,[38,1],["click",[30,0,["greet"]]],null],[12],[1,"Greet me"],[13],[1,"\\n    "],[11,"button"],[24,0,"startingpage"],[24,4,"button"],[4,[38,1],["click",[30,0,["transs"]]],null],[12],[1,"Click me for starting page"],[13],[1,"\\n\\n    "],[10,"h3"],[12],[1,"The history for the present session"],[13],[1,"\\n    \\n    "],[8,[39,2],null,[["@model"],[[30,1]]],null],[1,"\\n\\n\\n\\n"],[13],[1,"\\n"]],[]]]]]],["@model"],false,["main-body","on","clear"]]',moduleName:"ember-calculator/templates/calci/historydisplay.hbs",isStrictMode:!1})
e.default=r})),define("ember-calculator/templates/form",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"03BQEyZb",block:'[[[1,[28,[35,0],["Form"],null]],[1,"\\n"],[46,[28,[37,2],null,null],null,null,null]],[],false,["page-title","component","-outlet"]]',moduleName:"ember-calculator/templates/form.hbs",isStrictMode:!1})
e.default=r})),define("ember-calculator/templates/index",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"VVTE+mXz",block:'[[[8,[39,0],null,null,[["default"],[[[[1,"\\n    "],[10,0],[14,1,"main"],[12],[8,[39,1],[[24,0,"start-link"]],[["@route"],["calci"]],[["default"],[[[[1," Start Calculating..."]],[]]]]],[13],[1,"\\n    "],[10,0],[14,1,"main-img"],[12],[1,"\\n    "],[10,"img"],[14,"src","/Images/calculators-c3d5ecd685517f68464bcf59ba313f53.png"],[14,"alt","Calculator_image"],[14,"height","400"],[14,1,"home-image"],[12],[13],[1,"\\n    "],[13],[1,"\\n"]],[]]]]]],[],false,["main-body","link-to"]]',moduleName:"ember-calculator/templates/index.hbs",isStrictMode:!1})
e.default=r})),define("ember-calculator/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})})),define("ember-calculator/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})})),define("ember-calculator/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})})),define("ember-calculator/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})})),define("ember-calculator/config/environment",[],(function(){try{var e="ember-calculator/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(i){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("ember-calculator/app").default.create({name:"ember-calculator",version:"0.0.0+33b09dc9"})
