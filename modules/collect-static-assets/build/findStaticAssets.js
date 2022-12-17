"use strict";var __awaiter=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(i,u){function s(t){try{o(n.next(t))}catch(t){u(t)}}function a(t){try{o(n.throw(t))}catch(t){u(t)}}function o(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}o((n=n.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var r,n,i,u,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(i=2&u[0]?n.return:u[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,u[1])).done)return i;switch(n=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,n=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){s=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){s.label=u[1];break}if(6===u[0]&&s.label<i[1]){s.label=i[1],i=u;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(u);break}i[2]&&s.ops.pop(),s.trys.pop();continue}u=e.call(t,s)}catch(t){u=[6,t],n=0}finally{r=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.findStaticAssets=void 0;var marked_util_1=require("marked-util"),fs_util_1=require("fs-util"),fs_util_js_1=require("fs-util-js"),findStaticAssets=function(t){return __awaiter(void 0,void 0,void 0,(function(){var e,r,n,i;return __generator(this,(function(u){switch(u.label){case 0:return fs_util_1.fs.existsSync(t)?[4/*yield*/,fs_util_1.fs.readFile(t,"utf8")]:[2/*return*/,[]];case 1:return e=u.sent(),r=(0,marked_util_1.findEmbeds)(e).filter((function(t){return(0,fs_util_js_1.isPathRelative)(t.src)})).map((function(t){return t.src})),n=(0,marked_util_1.findLinks)(e).filter((function(t){return(0,fs_util_js_1.isPathRelative)(t.href)}
// NB: bit shitty that we can't link to typescript files or pdfs this way, but it's ok, we can embed them. Once needed, this must be improved, not now.
)).filter((function(t){return"text"!==t.type&&"other"!==t.type})).map((function(t){return t.href})),i=(0,fs_util_js_1.getFolderJs)(t),[2/*return*/,[n,r].flat().map((function(t){return fs_util_1.path.join(i,t)}))]}}))}))};exports.findStaticAssets=findStaticAssets;
//# sourceMappingURL=findStaticAssets.js.map