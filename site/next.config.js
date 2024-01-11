/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kinetic Compute Registry',
    description: 'Images built for Kinetic Compute.',
    icon: '/img/logo.svg',
    listUrl: 'https://hickey.github.io/kasm_registry/',
    contactUrl: 'https://github.com/hickey/kasm_registry/issues/new/choose',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
