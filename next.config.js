/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    EMAILJS_SERVICE_KEY: process.env.NEXT_EMAILJS_SERVICE_KEY,
    EMAILJS_TEMPLATE_KEY: process.env.NEXT_EMAILJS_TEMPLATE_KEY,
    EMAILJS_PUBLIC_KEY: process.env.NEXT_EMAILJS_PUBLIC_KEY,
  },
};

module.exports = nextConfig;
