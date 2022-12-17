import * as React from "react";
import { AuthenticationLayout } from "layout";
import { useRouter } from "next/router";
export var MyLayout = function (props) {
    var nextPage = props.nextPage, pageProps = props.pageProps;
    var router = useRouter();
    // in index, we need this
    if (router.isReady && router.pathname === "/") {
        var Index = nextPage;
        return React.createElement(Index, { pageProps: pageProps });
    }
    return (React.createElement(AuthenticationLayout, { overwriteDefaultPages: ["signup"], nextPage: nextPage, pageProps: pageProps }));
};
//# sourceMappingURL=MyLayout.js.map