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
import * as React from "react";
import { queries } from "api";
import { ReaderPage } from "./ReaderPage";
import { useQueryPath } from "./useQueryPath";
/**
 * ReaderPage to export for next project. Uses either the props from the next server, or if they're available, the props from the query.
 */
export var ReaderPageNext = function (props) {
    var _a, _b;
    // props provide the static data for the website
    var queryPath = useQueryPath();
    var basePath = process.env.NEXT_PUBLIC_BASEPATH;
    var readerPageQuery = queries.useGetReaderPageProps(basePath || "", queryPath, true);
    var queryProps = (_b = (_a = readerPageQuery.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.props;
    // either use the props returned from the query or from the static site
    var realProps = (queryProps === null || queryProps === void 0 ? void 0 : queryProps.actualProjectRelativeFilePath)
        ? queryProps
        : props;
    return React.createElement(ReaderPage, __assign({}, realProps));
};
//# sourceMappingURL=ReaderPageNext.js.map