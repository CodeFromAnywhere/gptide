#!/usr/bin/env node
"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function c(e){try{a(n.next(e))}catch(e){s(e)}}function i(e){try{a(n.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,i)}a((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,o,s,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return c.label++,{value:s[1],done:!1};case 5:c.label++,n=s[1],s=[0];continue;case 7:s=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){c=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){c.label=s[1];break}if(6===s[0]&&c.label<o[1]){c.label=o[1],o=s;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(s);break}o[2]&&c.ops.pop(),c.trys.pop();continue}s=t.call(e,c)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.vscodeOpen=void 0;var child_process_1=require("child_process"),fs_util_1=require("fs-util"),get_path_1=require("get-path"),vscodeOpen=function(e){var t=e.paths;return __awaiter(void 0,void 0,void 0,(function(){var e,r;return __generator(this,(function(n){switch(n.label){case 0:return(e=(0,get_path_1.getProjectRoot)())?t?[4/*yield*/,Promise.all(t.map((function(t){var r=fs_util_1.path.join(e,t),n=r.split(":")[0];if(!fs_util_1.fs.existsSync(n))return{success:!1,response:"This path doesn't exist"};var o="code --goto ".concat(r);return(0,child_process_1.execSync)(o),{success:!0,response:"Opened the file"}})))]:(r="code --goto ".concat(e),(0,child_process_1.execSync)(r),[2/*return*/,{success:!0,response:"Opened the project root"}]):[2/*return*/];case 1:return n.sent(),[2/*return*/,{success:!0,response:"Opened the file(s)"}]}}))}))};exports.vscodeOpen=vscodeOpen;
//# sourceMappingURL=general.js.map