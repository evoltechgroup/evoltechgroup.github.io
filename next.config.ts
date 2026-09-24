const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";

module.exports = {
  output: "export",

  basePath: isGithubPages ? "/evoltechgroup.github.io" : "",

  assetPrefix: isGithubPages
    ? "/evoltechgroup.github.io/"
    : "",

  images: {
    unoptimized: true,
  },
};
