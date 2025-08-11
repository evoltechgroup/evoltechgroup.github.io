const isGithubPages = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  basePath: isGithubPages ? "/evoltechgroup.github.io" : "",
  assetPrefix: isGithubPages ? "/evoltechgroup.github.io/" : "",
};
