"use strict";var __awaiter=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(a,i){function o(e){try{l(n.next(e))}catch(e){i(e)}}function u(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(o,u)}l((n=n.apply(e,r||[])).next())}))},__generator=this&&this.__generator||function(e,r){var t,n,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=r.call(e,o)}catch(e){i=[6,e],n=0}finally{t=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.readMarkdownFile=void 0;var fs_util_1=require("fs-util"),markdown_parse_js_1=require("markdown-parse-js"),readMarkdownFile=function(e){return __awaiter(void 0,void 0,void 0,(function(){var r,t,n;return __generator(this,(function(a){switch(a.label){case 0:return r=fs_util_1.path.parse(e),["md","mdx"].includes(r.ext.slice(1))&&fs_util_1.fs.existsSync(e)?[4/*yield*/,(0,fs_util_1.canRead)(e)]:[2/*return*/,null];case 1:return a.sent()?[4/*yield*/,fs_util_1.fs.readFile(e,"utf8")]:[2/*return*/,null];case 2:return(t=a.sent())?(n=fs_util_1.path.parse(e).name,[2/*return*/,(0,markdown_parse_js_1.mdToJsonParse)(t,n)]):[2/*return*/,null]}}))}))};exports.readMarkdownFile=readMarkdownFile;
//# sourceMappingURL=readMarkdownFile.js.map