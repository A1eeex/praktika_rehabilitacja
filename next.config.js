/** @type {import('next').NextConfig} */
const nextConfig = {
output: 'standalone',
  
  unoptimized: true,
  experimental: {
    images: true,
  },
};

module.exports = nextConfig;
