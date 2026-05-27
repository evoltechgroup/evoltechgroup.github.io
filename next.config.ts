const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";
const isStaticExport =
  process.env.STATIC_EXPORT === "true" || process.env.NODE_ENV === "production";

module.exports = {
  output: isStaticExport ? "export" : undefined,
  basePath: isGithubPages ? "/evoltechgroup.github.io" : "",
  assetPrefix: isGithubPages ? "/evoltechgroup.github.io/" : "",
  images: {
    unoptimized: true,
  },
};
