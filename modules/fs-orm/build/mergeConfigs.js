"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeConfigs=void 0;var get_path_1=require("get-path"),js_util_1=require("js-util"),mergeConfigs=function(e,t,o){var r,i={dbStorageMethod:"jsonMultiple",manualProjectRoot:(0,get_path_1.getProjectRoot)()},u=null===(r=null==t?void 0:t.modelQueryConfig)||void 0===r?void 0:r[e];return(0,js_util_1.mergeObjects)(i,null==t?void 0:t.defaultQueryConfig,u,o)};exports.mergeConfigs=mergeConfigs;
//# sourceMappingURL=mergeConfigs.js.map