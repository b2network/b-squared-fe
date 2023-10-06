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
        source: '/node',
        destination: '/',
        permanent: true
      },
      {
        source: '/dapps',
        destination: '/',
        permanent: true
      } ,{
        source: '/resources',
        destination: '/',
        permanent: true
      }
    ];
  },
  publicRuntimeConfig: {
    env: {
      NODE_ENV: process.env['NODE_ENV'],
    },
  },
}

module.exports = nextConfig
