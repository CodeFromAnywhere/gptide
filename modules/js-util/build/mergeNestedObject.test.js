"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var mergeNestedObject_1=require("./mergeNestedObject"),mergeNestedObjectTest=function(){var e={a:"lol",b:8,c:{x:"lol",y:88,z:{a:"wow",b:888,c:{x:"wow"}}}},t=(0,mergeNestedObject_1.mergeNestedObject)(e,{c:{z:{c:{x:void 0},b:999}}});console.dir({testObject:e,result:t},{depth:999})};mergeNestedObjectTest();
//# sourceMappingURL=mergeNestedObject.test.js.map