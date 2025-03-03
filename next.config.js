/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.pinimg.com"], // Allow external images from Pinterest
  },
  experimental: {
    turbo: {},
  },
};

module.exports = nextConfig;
