/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  // compiler: {
  //   removeConsole: process.env.NODE_ENV === "production",
  // },
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": ["@svgr/webpack"],
      },
    },
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ];
  },
  // for static export
  publicRuntimeConfig: {
    env: {
      NEXT_PUBLIC_APP_ENV: process.env["NEXT_PUBLIC_APP_ENV"],
    },
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/faucet/:path*',
        destination: 'https://task-openapi.bsquared.network/v1/faucet/:path*',
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

module.exports = nextConfig;
