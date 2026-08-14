/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const fs = require("fs");
const path = require("path");

const configPathFile = path.join(process.cwd(), "config_transitions.json");
const data = fs.readFileSync(configPathFile, { encoding: "utf8" });
const runtimeConfig = JSON.parse(data);

console.log(runtimeConfig);

const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [],
  },
  env: {
    GRAPHQL_URL: runtimeConfig.GRAPHQL_URL,
    AKAMAY_PATH: runtimeConfig.AKAMAY_PATH,
    NEXT_PUBLIC_AKAMAY_PATH: runtimeConfig.AKAMAY_PATH,
  },
};

try {
  module.exports = withBundleAnalyzer(nextConfig);
} catch (err) {
  console.log(err);
  module.exports = withBundleAnalyzer(nextConfig);
}
