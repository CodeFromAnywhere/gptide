"use strict";var __awaiter=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(r,i){function o(e){try{u(n.next(e))}catch(e){i(e)}}function a(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}u((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var s,n,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(s)throw new TypeError("Generator is already executing.");for(;o;)try{if(s=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{s=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.findAbsoluteAssetPathFromReference=void 0;var fs_util_1=require("fs-util"),fs_util_js_1=require("fs-util-js"),get_path_1=require("get-path"),findAbsoluteAssetPathFromReference=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var s,n,r,i,o,a,u,c,l,f;return __generator(this,(function(h){switch(h.label){case 0:return e&&t?(s=(0,get_path_1.getProjectRoot)())?(n=(0,fs_util_js_1.getExtension)(e),["ts","tsx","md","mdx","json"].includes(n)?(r=fs_util_1.path.join(s,e),fs_util_1.fs.existsSync(r)?[4/*yield*/,fs_util_1.fs.readFile(r,"utf8")]:[2/*return*/,{isSuccessful:!1,message:"Invalid file"}]):[2/*return*/,{isSuccessful:!1,message:"Invalid extension"}]):[2/*return*/,{isSuccessful:!1,message:"No project root"}]:(console.log({projectRelativeReferencingFilePath:e,referencingFileRelativeAssetPath:t}),[2/*return*/,{isSuccessful:!1,message:"Incorrect parameters for fetching absolute asset from reference"}]);case 1:return i=h.sent(),o="json"===("json"===n?"json":"markdown")?'"relativePath": "'.concat(t,'"'):"](".concat(t,")"),a=i.includes(o),u=fs_util_1.path.parse(e).name,c=t.startsWith("./".concat(u)),a||c?(l=fs_util_1.path.parse(r).dir,f=fs_util_1.path.join(l,t),fs_util_1.fs.existsSync(f)?[2/*return*/,{isSuccessful:!0,message:"Found path",absoluteAssetPath:f}]:[2/*return*/,{isSuccessful:!1,message:"The referenced asset does not exist"}]):[2/*return*/,{isSuccessful:!1,message:"Pattern not found"}]}}))}))};exports.findAbsoluteAssetPathFromReference=findAbsoluteAssetPathFromReference;
//# sourceMappingURL=findAbsoluteAssetPathFromReference.js.map