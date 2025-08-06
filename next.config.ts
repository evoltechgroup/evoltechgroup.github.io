const isGithubPages = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isGithubPages ? "/evoltechgroup.github.io" : "",
  assetPrefix: isGithubPages ? "/evoltechgroup.github.io/" : "",
  webpack: (config:any) => {
    config.module.rules.push({
      test: /\.(mp4)$/i,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });
    return config;
  },
};

module.exports = nextConfig;
