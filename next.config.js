/** @type {import('next').NextConfig} */
const configs = require('./configs.json');

const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: 'default',
    domains: [configs.STRAPI_DOMAIN],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
