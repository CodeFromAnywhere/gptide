"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{u(a.next(e))}catch(e){o(e)}}function c(e){try{u(a.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((a=a.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,a,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(i=0)),i;)try{if(n=1,a&&(r=2&c[0]?a.return:c[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,c[1])).done)return r;switch(a=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,a=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){i.label=c[1];break}if(6===c[0]&&i.label<r[1]){i.label=r[1],r=c;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(c);break}r[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],a=0}finally{n=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.recalculateOperationIndexJson=void 0;var log_1=require("log"),get_path_1=require("get-path"),path_util_1=require("path-util"),database_1=require("database"),getOperationMetaData_1=require("./getOperationMetaData"),getDependenciesSummary_1=require("./getDependenciesSummary"),js_util_1=require("js-util"),recalculateOperationIndexJson=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var t,n,a,r,o,i,c,u,s,l,p,d;return __generator(this,(function(_){switch(_.label){case 0:return[4/*yield*/,(0,getOperationMetaData_1.getOperationMetaData)(e)];case 1:return(t=_.sent())?(n=t.operation,a=t.operationFolderName,r=t.operationName,o=t.relativeOperationLocationPath,n&&r&&o?(i=(0,get_path_1.getOperationClassification)(e),[4/*yield*/,(0,getDependenciesSummary_1.getDependenciesSummary)(r)]):((0,log_1.log)("Operation on ".concat(e," doesn't have a name or relativeOperationLocationPath or package.json"),{type:"error"}),[2/*return*/])):((0,log_1.log)("Operation on ".concat(e," doesn't have a basepath"),{type:"error"}),[2/*return*/]);case 2:return c=_.sent(),u=c.coreDependencies,s=c.operationDependencies,l=c.packageDependencies,[4/*yield*/,(0,path_util_1.categorizeFiles)({basePath:e,ignoreIndexFiles:!0})];case 3:return p=_.sent(),[4/*yield*/,(0,path_util_1.getFolderSummary)(p)];case 4:
// console.log("UPDATE QUERY");
return d=_.sent(),[4/*yield*/,database_1.db.update("Operation",(function(e){return e.name===n.name}),(function(e){return(0,js_util_1.mergeNestedObject)(e,{operation:{lastRebuildAt:Date.now(),sizeIndexed:d,folderNameIndexed:a,relativeOperationLocationPathIndexed:o,classificationIndexed:i,coreDependenciesIndexed:u,operationDependenciesIndexed:s,packageDependenciesIndexed:l}})}),{operationName:n.name})];case 5:
// console.log("UPDATE QUERY");
return _.sent(),[2/*return*/]}}))}))};exports.recalculateOperationIndexJson=recalculateOperationIndexJson;
//# sourceMappingURL=recalculateOperationIndexJson.js.map