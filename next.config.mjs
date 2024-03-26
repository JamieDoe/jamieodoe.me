/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "media.licdn.com",
      },
      {
        hostname: "rfs.org.uk",
      },
      {
        hostname: "st4.depositphotos.com",
      },
    ],
  },
};

export default nextConfig;
