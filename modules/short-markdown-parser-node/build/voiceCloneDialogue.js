"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,n,r,t){return new(r||(r=Promise))((function(o,i){function a(e){try{s(t.next(e))}catch(e){i(e)}}function u(e){try{s(t.throw(e))}catch(e){i(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,u)}s((t=t.apply(e,n||[])).next())}))},__generator=this&&this.__generator||function(e,n){var r,t,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;switch(t=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,t=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],t=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.voiceCloneDialogue=void 0;var one_by_one_1=require("one-by-one"),parseDialogue_1=require("./parseDialogue"),uberduckSpeak_1=require("./uberduckSpeak"),voiceCloneDialogue=function(e){return __awaiter(void 0,void 0,void 0,(function(){var n,r;return __generator(this,(function(t){switch(t.label){case 0:return n=(0,parseDialogue_1.parseDialogue)(e),console.log({parsedDialogue:n}),[4/*yield*/,(0,one_by_one_1.oneByOne)(n,(function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(n){return"Morty"===e.voice?[2/*return*/,__assign(__assign({},e),{uuid:(0,uberduckSpeak_1.uberduckSpeak)("morty",e.sentence)})]:[2/*return*/,__assign(__assign({},e),{uuid:(0,uberduckSpeak_1.uberduckSpeak)("rick-sanchez",e.sentence)})]}))}))}))];case 1:return r=t.sent(),console.log({sentencesWithUuid:r}),[2/*return*/,r]}}))}))};exports.voiceCloneDialogue=voiceCloneDialogue;
//# sourceMappingURL=voiceCloneDialogue.js.map