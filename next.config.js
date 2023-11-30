/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  output: 'export',
  trailingSlash: true,
  experimental: {
    turbo: {
      rules: {
        '*.svg': ['@svgr/webpack'],
      },
    },
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/bridge',
  //       destination: '/',
  //       permanent: true
  //     }, {
  //       source: '/transfer',
  //       destination: '/',
  //       permanent: true
  //     },
  //   ];
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
}


module.exports = nextConfig
