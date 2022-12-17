"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.fileExplorerOpen=void 0;var child_process_1=require("child_process"),fs_util_1=require("fs-util"),get_path_1=require("get-path"),fileExplorerOpen=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r,n,o,i,s;return __generator(this,(function(a){switch(a.label){case 0:return(t=(0,get_path_1.getProjectRoot)())?(r=fs_util_1.path.join(t,e))&&fs_util_1.fs.existsSync(r)?[4/*yield*/,fs_util_1.fs.stat(r)]:[2/*return*/,{isSuccessful:!1,message:"This path doesn't exist"}]:[2/*return*/,{isSuccessful:!1,message:"No projectroot"}];case 1:return n=a.sent(),o=n.isDirectory()?r:fs_util_1.path.parse(r).dir,i="win32"===process.platform,s=i?"start ".concat(o):"open ".concat(o),(0,child_process_1.execSync)(s),[2/*return*/,{isSuccessful:!0,message:"Opened"}]}}))}))};exports.fileExplorerOpen=fileExplorerOpen;
//# sourceMappingURL=fileExplorerOpen.js.map