"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function u(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}l((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.canSeeFileContent=exports.canSeeFile=exports.expandFrontmatter=exports.getFirstFile=void 0;var fs_util_1=require("fs-util"),getFirstFile=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r,n,i,o,a,u;return __generator(this,(function(l){switch(l.label){case 0:return[4/*yield*/,fs_util_1.fs.readdir(e,{encoding:"utf8",withFileTypes:!0})];case 1:return t=l.sent(),r=t.filter((function(e){return e.isFile()})),n=null===(o=r.find((function(e){return"readme.md"===e.name.toLowerCase()})))||void 0===o?void 0:o.name,i=null===(a=r.find((function(e){return e.name.startsWith("index.")})))||void 0===a?void 0:a.name,[2/*return*/,n||i||(null===(u=r[0])||void 0===u?void 0:u.name)||void 0]}}))}))};
/**
 * Gets the first file in a directory:
 *
 * Either readme or index, or the first file it finds.
 */exports.getFirstFile=getFirstFile;var expandFrontmatter=function(e){return e?{isPrivate:"true"===e.isPrivate,authorizedGroup:e.authorizedGroup,isDraft:"true"===e.isDraft,isSecret:"true"===e.isSecret}:{}};exports.expandFrontmatter=expandFrontmatter;
/**
 * TODO: use something like this to ensure we have the type safety and not work with strings >.<
 *
```ts
import { frontmatterToObject } from "frontmatter-util";
import webMarkdownFileTsInterface from "markdown-types/db/ts-interfaces/webmarkdownfile.json";
```

 */
var canSeeFile=function(e,t){
// dev can always see it
return!!t||(
// no parameters seems fine
!e||!e.isDraft&&!e.isSecret&&("premium"===e.authorizedGroup||"enterprise"===e.authorizedGroup||e.isPrivate,!0))};exports.canSeeFile=canSeeFile;var canSeeFileContent=function(e,t){var r,n;
// dev can always see it
return!!t||(
// no parameters seems fine
!e||"true"!==e.isDraft&&"true"!==e.isSecret&&("premium"!==(null===(r=e.authorizedGroup)||void 0===r?void 0:r.trim())&&"enterprise"!==(null===(n=e.authorizedGroup)||void 0===n?void 0:n.trim())&&"true"!==e.isPrivate))};exports.canSeeFileContent=canSeeFileContent;
//# sourceMappingURL=general.js.map