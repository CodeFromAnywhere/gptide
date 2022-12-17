import { setItem } from "react-with-native-store";
export var setConfig = function (apiUrl, disableAdmin) {
    setItem("api.customUrl", apiUrl === "" ? null : apiUrl);
    setItem("generativeWeb.config", { disableAdmin: disableAdmin });
};
//# sourceMappingURL=setConfig.js.map