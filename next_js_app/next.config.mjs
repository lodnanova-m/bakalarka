/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "master.d3d95ljo92pafp.amplifyapp.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
