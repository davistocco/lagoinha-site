/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['lagoinha-ribeirao.herokuapp.com'],
  },

}

module.exports = nextConfig
