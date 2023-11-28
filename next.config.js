/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['cdn.discordapp.com'],
//   }
// };
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
      }
    ]
  }
};

module.exports = nextConfig;
