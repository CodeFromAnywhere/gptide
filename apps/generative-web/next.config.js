/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const path = require("path");
/**
 * Put your `Operation`s here with `OperationClassification` ui-ts here, so they will be transpiled
 */

const withTM = require("next-transpile-modules")([]);
module.exports = withPWA({ dest: "public" })(
  withTM({
    reactStrictMode: true,

    // // needed for allowing reading files in prod
    // // see: https://nextjs.org/docs/advanced-features/output-file-tracing
    // experimental: {
    //   // this includes files from the monorepo base two directories up
    //   outputFileTracingRoot: path.join(__dirname, "../../"),
    // },
    publicRuntimeConfig: {
      NEXT_PUBLIC_SITE: process.env.NEXT_PUBLIC_SITE,
    },
  })
);
