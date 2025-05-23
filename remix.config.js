/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "cloudflare-workers",
  server: "./server.js",
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "build/worker.js",
  publicPath: "/build/",
  serverModuleFormat: "esm",
  serverPlatform: "neutral"
};
