const isGithubPages = process.env.NODE_ENV === "production";

module.exports = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? "/evoltechgroup.github.io" : "",
  assetPrefix: isGithubPages ? "/evoltechgroup.github.io/" : "",
  images: {
    unoptimized: true,
  },
};
