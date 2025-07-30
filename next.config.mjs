/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    QLOO_API_KEY: process.env.QLOO_API_KEY,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },
  images: {
    domains: ["images.qloo.com"],
  },
};

export default nextConfig;
