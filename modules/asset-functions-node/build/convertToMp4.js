"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.convertToMp4=void 0;var fluent_ffmpeg_1=__importDefault(require("fluent-ffmpeg")),convertToMp4=function(e,t){return new Promise((function(o,r){(0,fluent_ffmpeg_1.default)({source:e}).toFormat("mp4").saveToFile(t).on("end",(function(){o(t)})).on("error",(function(e){o(void 0)}))}))};
/**
 * Uses ffmpeg to convert a file to mp3
 *
 * Returns the new file path on success
 */exports.convertToMp4=convertToMp4;
//# sourceMappingURL=convertToMp4.js.map