/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
        // port: "",
        // pathname: "/lokeshkavisth/**",
      },
    ],
  },
};

module.exports = nextConfig;
