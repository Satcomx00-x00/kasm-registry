/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Satcom - Kasm Registry',
    description: 'Satcom - Kasm Registry, fill free to push requests on Github to add images.',
    icon: 'https://images.vexels.com/media/users/3/185202/isolated/preview/04210f166dee214fc751791106b453b2-donut-rosa-sirup-symbol.png',
    listUrl: 'https://Satcomx00-x00.github.io/kasm-registry/',
    contactUrl: 'https://github.com/Satcomx00-x00/kasm-registry',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
