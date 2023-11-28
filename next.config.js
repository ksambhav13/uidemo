/** @type {import('next').NextConfig} */

const backendEndpoint = "http://127.0.0.1:8080";
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${backendEndpoint}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
