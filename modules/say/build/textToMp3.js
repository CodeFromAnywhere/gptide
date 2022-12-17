"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.textToMp3 = void 0;
var saySomething_1 = require("./saySomething");
var fs_util_1 = require("fs-util");
var ffmpeg_util_1 = require("ffmpeg-util");
var textToMp3 = function (options, 
/**
 * Absolute path to the mp3
 */
absoluteOutputFilePath) { return __awaiter(void 0, void 0, void 0, function () {
    var parsed, aiffPath, finalOptions, finalPath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                parsed = fs_util_1.path.parse(absoluteOutputFilePath);
                aiffPath = fs_util_1.path.join(parsed.dir, "".concat(parsed.name, ".aiff"));
                finalOptions = __assign(__assign({}, options), { outputFilePath: aiffPath });
                return [4 /*yield*/, (0, saySomething_1.saySomething)(finalOptions)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, ffmpeg_util_1.convertToMp3)(aiffPath, absoluteOutputFilePath)];
            case 2:
                finalPath = _a.sent();
                if (!finalPath) return [3 /*break*/, 4];
                return [4 /*yield*/, fs_util_1.fs.rm(aiffPath)];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/, finalPath];
        }
    });
}); };
exports.textToMp3 = textToMp3;
//# sourceMappingURL=textToMp3.js.map