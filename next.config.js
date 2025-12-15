/** @type {import('next').NextConfig} */
const nextConfig = {
  // moved from experimental.serverComponentsExternalPackages (Next 15)
  serverExternalPackages: [
    '@react-email/render',
  ],
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // If you need remote image patterns, uncomment and use the block below:
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
    ],
  },
};

module.exports = nextConfig;
