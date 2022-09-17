/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig


module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
    // env: {
      //   NEXT_PUBLIC_DEVELOPMENT_URL: process.env.NEXT_PUBLIC_DEVELOPMENT_URL
      // }
    },
  }
  
  
  module.exports = {
    // reactStrictMode=true,
    images: {
      domains: ['localhost', 'https://inmatown.com', 'inmatown.com', 'www.inmatown.com'],
    },
  }