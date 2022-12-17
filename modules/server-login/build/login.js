"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(e){a(e)}}function u(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}s((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.login=void 0;var database_1=require("database"),login=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,n,r,i;return __generator(this,(function(a){switch(a.label){case 0:return[4/*yield*/,database_1.db.get("Device")];case 1:return(t=a.sent().find((function(t){return t.id===e})))?[4/*yield*/,database_1.db.get("Person")]:[2/*return*/,{isSuccessful:!1,message:"Couldn't find that device"}];case 2:return n=a.sent().find((function(e){var n,r=e.authenticationMethods.filter((function(e){return!!t.authenticationMethods.find((function(t){return t.method===e.method&&t.handle===e.handle&&t.encryptedCredential===e.encryptedCredential}))})),i=(e.amountAuthenticationMethodsRequired||1)<=r.length,a=!!(null===(n=e.requiredAuthenticationMethods)||void 0===n?void 0:n.find((function(e){return!t.authenticationMethods.find((function(t){return t.method===e}))})));return!(!i||a)})),n?[4/*yield*/,database_1.db.update("Device",(function(e){return e.id===t.id}),(function(e){return __assign(__assign({},e),{personId:n.id})}))]:[2/*return*/,{isSuccessful:!1,message:"Couldn't login"}];case 3:return r=a.sent(),[2/*return*/,{isSuccessful:i=!!r.isSuccesful&&1===r.amountUpdated,message:i?"Logged in":r.message||"Something went wrong"}]}}))}))};
/**
 * attaches the `Device` with `authToken` (`id`) to a `Person` once all required authenticationMethods are provided. If not, it needs to return the required authenticationMethods so the user can attach those to the device until loggin is successful.
 */exports.login=login;
//# sourceMappingURL=login.js.map