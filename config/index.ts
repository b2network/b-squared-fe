import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const env = publicRuntimeConfig.env.NODE_ENV;
export const isProd = env === 'production';
export const isDev = env === 'development';