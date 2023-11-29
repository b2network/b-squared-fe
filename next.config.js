const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  productionBrowserSourceMaps: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'),path.join(__dirname, 'components')],
  },
  async redirects() {
    return [
      {
        source: '/bridge',
        destination: '/',
        permanent: true
      }, {
        source: '/transfer',
        destination: '/',
        permanent: true
      },
    ];
  },
  publicRuntimeConfig: {
    env: {
      NODE_ENV: process.env['NODE_ENV'],
    },
  },
}

module.exports = nextConfig
