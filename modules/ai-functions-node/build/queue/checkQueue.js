"use strict";
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
exports.checkQueue = void 0;
var database_1 = require("database");
var sdk_api_1 = require("sdk-api");
/**
 * ---
 * runEveryPeriod: minute
 * ---
 *
 * cron that runs every minute for executing new puppeteer queue items. It will open it as child process. You can set the amount of tabs it should have as a limit, and it will keep the tabs open afterwards, but after the thing is done it will just remove the item from the `Queue`.
 */
var checkQueue = function () { return __awaiter(void 0, void 0, void 0, function () {
    var queueItems, lateQueueItemsToNotify, idlePages, runnableNowAmount, queueItemsToExecute, removeResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1.db.get("Queue")];
            case 1:
                queueItems = (_a.sent()).filter(function (x) { return x.type === "puppeteer"; });
                if (queueItems.length === 0)
                    return [2 /*return*/];
                lateQueueItemsToNotify = queueItems.filter(function (x) {
                    return x.notifyLateAfterSeconds &&
                        Date.now() - x.createdAt > x.notifyLateAfterSeconds * 1000 &&
                        !x.hasNotifiedLate;
                });
                return [4 /*yield*/, database_1.db.get("BrowserPage")];
            case 2:
                idlePages = (_a.sent()).filter(function (p) { return p.isIdle; });
                runnableNowAmount = 1;
                queueItemsToExecute = queueItems.slice(0, runnableNowAmount);
                if (runnableNowAmount < lateQueueItemsToNotify.length) {
                    //email the ones that won't be executed
                    console.log({
                        runnableNowAmount: runnableNowAmount,
                        lateQueueItemsToNotify: lateQueueItemsToNotify.length,
                    }, "SHOULD EMAIL SOME THAT CAN'T BE EXECUTED AND PUT THEM ON NOTIFIED WITH ETA");
                }
                if (idlePages.length === 0)
                    return [2 /*return*/];
                // 2. check how many queue items can be executed now, and sort by importancy
                // NB: limit to 1 for now to test if that works
                // 3. take the ones that are most important and execute those
                return [4 /*yield*/, Promise.all(queueItemsToExecute.map(function (queue) { return __awaiter(void 0, void 0, void 0, function () {
                        var fn;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    fn = sdk_api_1.sdk[queue.functionName];
                                    if (!fn)
                                        return [2 /*return*/];
                                    return [4 /*yield*/, fn.apply(void 0, queue.parameters)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }))];
            case 3:
                // 2. check how many queue items can be executed now, and sort by importancy
                // NB: limit to 1 for now to test if that works
                // 3. take the ones that are most important and execute those
                _a.sent();
                return [4 /*yield*/, database_1.db.remove("Queue", function (item) {
                        return queueItemsToExecute.map(function (x) { return x.id; }).includes(item.id);
                    })];
            case 4:
                removeResult = _a.sent();
                console.log("executed", { removeResult: removeResult });
                return [2 /*return*/];
        }
    });
}); };
exports.checkQueue = checkQueue;
//# sourceMappingURL=checkQueue.js.map