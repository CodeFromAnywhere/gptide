import { AppProps } from "next/app";
import Head from "next/head";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { StoreProvider, MyLayout } from "generative-ui";

import { AlertProvider } from "react-with-native-alert";
import { ModalProvider } from "react-with-native-modal";
import { ToastContainer } from "react-with-native-notification";

import "generative-ui/css.css";
import "timeline/css.css";
import "context-menu/css.css";
import "tooltip/css.css";
import "react-toastify/dist/ReactToastify.css";
import "../globals.css";
import "authentication/css.css";
import "layout/css.css";
import "menu/css.css";
import "react-datetime/css/react-datetime.css";
import "rc-time-picker/assets/index.css";
import "react-datepicker/dist/react-datepicker.css";

///rwn
import "simplified-schema-form/css.css";

import "react-with-native/css.css";
import "react-with-native-modal/css.css";
import "react-with-native-alert/css.css";
import "react-with-native-form/css.css";
import "react-with-native-form-inputs/css.css";
import "react-with-native-router/css.css";
import "react-with-native-select/css.css";
import "react-with-native-store/css.css";
import "react-with-native-ui/css.css";
import "react-with-native-table/css.css";
import "big-button/css.css";
import "fancy-loader/css.css";
import "asset-input/css.css";

const progress = new ProgressBar();

//Binding events.
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const queryClient = new QueryClient();

// Only holds serverRuntimeConfig and publicRuntimeConfig

function MyApp({ Component, pageProps }: AppProps) {
  const title = process.env.NEXT_PUBLIC_TITLE;
  const description =
    "Learn mode about the impact of ChatGPT and other LLM's! GPT Ideas presents a database of prompts for you to learn from and start building!";
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>{title}</title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/default.min.css"
        />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="head-explosion.png" />

        <meta name="description" content={description} />
      </Head>
      <ToastContainer />
      <AlertProvider>
        <ModalProvider>
          <StoreProvider>
            <MyLayout pageProps={pageProps} nextPage={Component} />
          </StoreProvider>
        </ModalProvider>
      </AlertProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
