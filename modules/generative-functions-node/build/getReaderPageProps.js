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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReaderPageProps = void 0;
var fs_util_1 = require("fs-util");
var fs_util_js_1 = require("fs-util-js");
var get_path_1 = require("get-path");
var js_util_1 = require("js-util");
var read_markdown_file_1 = require("read-markdown-file");
var augmentMarkdown_1 = require("./augmentMarkdown");
var general_1 = require("./general");
/**
NB: this thing doesn't know about the basepath, it allows any path in the project.

Idea: would it be easy to allow for path outside of project as well?
 */
var getReaderPageProps = function (projectRelativeFilePath, 
/**
 * Good to know in case the path requested can't be found (will show basePath root dir)
 */
basePath, 
/**
 * If true, isDev will be overwritten to be false, even in prod
 */
isAdmin) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, absoluteQueryPath, pathExists, isValidPath, _a, _b, currentAbsolutePath, stat, isFile, isFolder, folderPath, dirents, isDev, readmeDirent, readmePath, readmeFrontmatter, _c, canSeeFolder, navigation, markdownParse, _d, allowedOtherExtensions, pathParse, rawContent, _e, canSeeContent, fileContentString, augmentedResult, props;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot) {
                    return [2 /*return*/, { props: { notFound: true, notFoundReason: "No projectroot" } }];
                }
                if (!projectRelativeFilePath) {
                    return [2 /*return*/, {
                            props: {
                                notFound: true,
                                notFoundReason: "No path given",
                                projectRelativeFilePath: null,
                            },
                        }];
                }
                absoluteQueryPath = fs_util_1.path.join(projectRoot, projectRelativeFilePath);
                pathExists = fs_util_1.fs.existsSync(absoluteQueryPath);
                _a = pathExists;
                if (!_a) return [3 /*break*/, 4];
                return [4 /*yield*/, fs_util_1.fs.stat(absoluteQueryPath)];
            case 1:
                _b = (_g.sent()).isFile();
                if (_b) return [3 /*break*/, 3];
                return [4 /*yield*/, fs_util_1.fs.stat(absoluteQueryPath)];
            case 2:
                _b = (_g.sent()).isDirectory();
                _g.label = 3;
            case 3:
                _a = (_b);
                _g.label = 4;
            case 4:
                isValidPath = _a;
                currentAbsolutePath = isValidPath
                    ? absoluteQueryPath
                    : basePath
                        ? fs_util_1.path.join(projectRoot, basePath)
                        : projectRoot;
                return [4 /*yield*/, fs_util_1.fs.stat(currentAbsolutePath)];
            case 5:
                stat = _g.sent();
                isFile = stat.isFile();
                isFolder = stat.isDirectory();
                if (!isFile && !isFolder) {
                    // should never happen
                    console.log("Not file, not folder (shouldn't happen, unless your basePath is incorrect, maybe.");
                    return [2 /*return*/, {
                            props: { notFound: true, notFoundReason: "Is no file or no folder" },
                        }];
                }
                folderPath = isFile
                    ? fs_util_1.path.parse(currentAbsolutePath).dir
                    : currentAbsolutePath;
                return [4 /*yield*/, fs_util_1.fs.readdir(folderPath, {
                        withFileTypes: true,
                        encoding: "utf8",
                    })];
            case 6:
                dirents = _g.sent();
                isDev = process.env.NODE_ENV === "development";
                readmeDirent = dirents.find(function (x) { return x.name.toLowerCase() === "readme.md"; });
                readmePath = readmeDirent
                    ? fs_util_1.path.join(folderPath, readmeDirent.name)
                    : undefined;
                if (!readmePath) return [3 /*break*/, 8];
                return [4 /*yield*/, (0, read_markdown_file_1.readMarkdownFile)(readmePath)];
            case 7:
                _c = (_f = (_g.sent())) === null || _f === void 0 ? void 0 : _f.parameters;
                return [3 /*break*/, 9];
            case 8:
                _c = undefined;
                _g.label = 9;
            case 9:
                readmeFrontmatter = _c;
                canSeeFolder = readmePath
                    ? (0, general_1.canSeeFileContent)(readmeFrontmatter, isDev)
                    : true;
                return [4 /*yield*/, Promise.all(dirents.map(function (dirent) { return __awaiter(void 0, void 0, void 0, function () {
                        var ignoredFilesFolders, fullPath, type, firstFile, _a, frontmatter, _b, _c, folderContent;
                        var _d, _e;
                        return __generator(this, function (_f) {
                            switch (_f.label) {
                                case 0:
                                    ignoredFilesFolders = [".DS_Store", ".index"];
                                    if (ignoredFilesFolders.includes(dirent.name))
                                        return [2 /*return*/];
                                    fullPath = fs_util_1.path.join(folderPath, dirent.name);
                                    type = dirent.isDirectory()
                                        ? "folder"
                                        : dirent.isSymbolicLink()
                                            ? "link"
                                            : dirent.isFile()
                                                ? "file"
                                                : "unknown";
                                    if (!(type === "folder")) return [3 /*break*/, 2];
                                    return [4 /*yield*/, (0, general_1.getFirstFile)(fullPath)];
                                case 1:
                                    _a = _f.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    _a = undefined;
                                    _f.label = 3;
                                case 3:
                                    firstFile = _a;
                                    if (!((0, fs_util_js_1.getExtension)(dirent.name) === "md")) return [3 /*break*/, 5];
                                    return [4 /*yield*/, (0, read_markdown_file_1.readMarkdownFile)(fullPath)];
                                case 4:
                                    _b = (_d = (_f.sent())) === null || _d === void 0 ? void 0 : _d.parameters;
                                    return [3 /*break*/, 9];
                                case 5:
                                    if (!(type === "folder")) return [3 /*break*/, 7];
                                    return [4 /*yield*/, (0, read_markdown_file_1.readMarkdownFile)(fs_util_1.path.join(fullPath, "README.md"))];
                                case 6:
                                    _c = (_e = (_f.sent())) === null || _e === void 0 ? void 0 : _e.parameters;
                                    return [3 /*break*/, 8];
                                case 7:
                                    _c = undefined;
                                    _f.label = 8;
                                case 8:
                                    _b = _c;
                                    _f.label = 9;
                                case 9:
                                    frontmatter = _b;
                                    folderContent = {
                                        type: type,
                                        name: dirent.name,
                                        firstFile: firstFile,
                                        frontmatter: frontmatter,
                                        projectRelativePath: (0, fs_util_js_1.makeRelative)(fs_util_1.path.join(folderPath, dirent.name), projectRoot),
                                    };
                                    return [2 /*return*/, folderContent];
                            }
                        });
                    }); }))];
            case 10:
                navigation = (_g.sent())
                    .filter(js_util_1.notEmpty)
                    .map(function (_a) {
                    var frontmatter = _a.frontmatter, other = __rest(_a, ["frontmatter"]);
                    var folderContent = __assign(__assign({}, other), (0, general_1.expandFrontmatter)(frontmatter));
                    return folderContent;
                })
                    .filter(function (file) {
                    // filter out the files that should be HIDDEN
                    return (0, general_1.canSeeFile)(file, isDev);
                })
                    .map(js_util_1.omitUndefinedValues);
                if (!isFile) return [3 /*break*/, 12];
                return [4 /*yield*/, (0, read_markdown_file_1.readMarkdownFile)(currentAbsolutePath)];
            case 11:
                _d = _g.sent();
                return [3 /*break*/, 13];
            case 12:
                _d = null;
                _g.label = 13;
            case 13:
                markdownParse = _d;
                allowedOtherExtensions = [".ts", ".tsx", ".json"];
                pathParse = fs_util_1.path.parse(currentAbsolutePath);
                if (!(isFile && allowedOtherExtensions.includes(pathParse.ext))) return [3 /*break*/, 15];
                return [4 /*yield*/, fs_util_1.fs.readFile(currentAbsolutePath, "utf8")];
            case 14:
                _e = _g.sent();
                return [3 /*break*/, 16];
            case 15:
                _e = undefined;
                _g.label = 16;
            case 16:
                rawContent = _e;
                canSeeContent = (0, general_1.canSeeFileContent)(markdownParse === null || markdownParse === void 0 ? void 0 : markdownParse.parameters, isDev);
                fileContentString = !canSeeContent || !canSeeFolder || !isFile
                    ? null
                    : markdownParse
                        ? markdownParse.raw
                        : rawContent
                            ? rawContent
                            : null;
                return [4 /*yield*/, (0, augmentMarkdown_1.augmentMarkdown)(fileContentString, {
                        // for now no code yet, it's too slow
                        isAdmin: isAdmin,
                        augmentCode: false,
                        augmentContextualPrompts: false,
                        augmentContextualPromptResults: true,
                        augmentStatements: true,
                        augmentWords: true,
                        externalHost: undefined,
                        markdown_projectRelativeFilePath: (0, fs_util_js_1.makeRelative)(currentAbsolutePath, projectRoot),
                    })];
            case 17:
                augmentedResult = _g.sent();
                props = {
                    notFound: !isValidPath,
                    notFoundReason: isValidPath ? null : "Path isn't valid",
                    isFolder: isFolder,
                    canSeeContent: canSeeContent,
                    unauthorizedWarningMessage: canSeeContent
                        ? null
                        : "You have to be premium to see this. [Click here to see our offers](/offers)",
                    markdown: (augmentedResult === null || augmentedResult === void 0 ? void 0 : augmentedResult.augmentedMarkdown) || rawContent || null,
                    navigation: navigation,
                    projectRelativeFilePath: projectRelativeFilePath,
                    actualProjectRelativeFilePath: (0, fs_util_js_1.makeRelative)(currentAbsolutePath, projectRoot),
                    contextualPromptResults: (augmentedResult === null || augmentedResult === void 0 ? void 0 : augmentedResult.contextualPromptResults) || null,
                    contextualPromptsObject: (augmentedResult === null || augmentedResult === void 0 ? void 0 : augmentedResult.contextualPromptsObject) || null,
                };
                console.log(currentAbsolutePath, props.notFound, props.notFoundReason);
                return [2 /*return*/, { props: props }];
        }
    });
}); };
exports.getReaderPageProps = getReaderPageProps;
//# sourceMappingURL=getReaderPageProps.js.map