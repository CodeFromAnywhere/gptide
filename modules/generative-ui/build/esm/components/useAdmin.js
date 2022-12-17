import { queries } from "api";
import { useStore } from "./store";
/**
 * Useful hook to make a static site dynamic for administrator
 */
export var useAdmin = function (projectRelativeFilePath) {
    var _a, _b, _c;
    var _d = queries.useGetReaderPageProps(projectRelativeFilePath, process.env.NEXT_PUBLIC_BASEPATH, true), refetch = _d.refetch, isLoading = _d.isLoading;
    var meQuery = queries.useGetMeWithContext();
    var isAdmin = !!((_c = (_b = (_a = meQuery.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.groups) === null || _c === void 0 ? void 0 : _c.find(function (x) { return x.slug === "admin"; }));
    var config = useStore("generativeWeb.config")[0];
    var isAdminActive = isAdmin && !config.disableAdmin;
    var result = isAdminActive
        ? {
            isAdminActive: isAdminActive,
            isLoading: isLoading,
            refetch: refetch,
        }
        : { isAdminActive: isAdminActive };
    return result;
};
//# sourceMappingURL=useAdmin.js.map