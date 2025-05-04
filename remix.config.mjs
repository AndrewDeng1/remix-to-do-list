export default {
  serverBuildTarget: "cloudflare-pages",
  server: "./server.mjs",
  ignoredRouteFiles: ["**/.*"],
  future: {
    v2_meta: true,
    v2_errorBoundary: true,
    v3_singleFetch: false, // Explicitly set this
  }
};