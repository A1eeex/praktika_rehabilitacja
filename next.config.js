/** @type {import('next').NextConfig} */
const nextConfig = {
//   output: "export",
output: 'standalone',
  
  unoptimized: true,
  experimental: {
    images: true,
  },
};

module.exports = nextConfig;
