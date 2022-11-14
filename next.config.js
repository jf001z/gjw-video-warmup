/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  eslint: {
    dirs: ['pages', 'src']
  }
}

module.exports = nextConfig

