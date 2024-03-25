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
    ],
  },
};

export default nextConfig;
