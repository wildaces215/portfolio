/* eslint-disable no-unused-expressions */
/* eslint-disable no-labels */
/* eslint-disable no-path-concat */
/* eslint-disable quotes */
var PrerenderSpaPlugin = require("prerender-spa-plugin");
var path = require("path");
module.exports = {
  lintOnSave: false,
  //publicPath: "</../dist/index.html>",
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      plugins: [
        new PrerenderSpaPlugin({
          staticDir: path.join(__dirname, "dist"),
          routes: ["/", "/about", "/projects", "/contact"]
        })
      ];
    }
  }
};
