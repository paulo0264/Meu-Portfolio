/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://avatars.githubusercontent.com/u/60524381?s=96&v=4',
        port: '',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
