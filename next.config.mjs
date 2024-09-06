/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "stgaccinwbsdevlrs01.blob.core.windows.net",
      "img.freepik.com",
      "www.itmuniversity.org",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "allat.one",
      },
      {
        protocol: "https",
        hostname: "c8.alamy.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "thumbs.dreamstime.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "www.shutterstock.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "imagecdn.jeevansathi.com",
      },
    ],
  },
};

export default nextConfig;
