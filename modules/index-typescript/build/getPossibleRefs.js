"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPossibleRefs=void 0;var js_util_1=require("js-util"),getPossibleRefs=function(e){return e.map((function(e){return e.type.typeDefinition?{name:e.name,schema:e.type.typeDefinition}:null})).filter(js_util_1.notEmpty)};exports.getPossibleRefs=getPossibleRefs;
//# sourceMappingURL=getPossibleRefs.js.map