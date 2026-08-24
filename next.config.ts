import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/services", destination: "/#capabilities", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
      { source: "/partners", destination: "/#partners", permanent: false },
      { source: "/resources", destination: "/reference-projects", permanent: false },
      { source: "/resources/:id", destination: "/reference-projects", permanent: false },
      { source: "/case-study/:id", destination: "/reference-projects", permanent: false },
      { source: "/succes-story/:id", destination: "/reference-projects", permanent: false },
      { source: "/consulting/:slug", destination: "/#capabilities", permanent: false },
      { source: "/colors", destination: "/", permanent: false },
    ];
  },
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: 'https',
        hostname: "images.pexels.com",
      },
      {
        protocol: 'https',
        hostname: "images.unsplash.com",
      },
      {
        protocol: 'https',
        hostname: "api.dicebear.com",
      },
      {
        protocol: 'https',
        hostname: "yotta.com",
      },
      {
        protocol: 'https',
        hostname: "via.placeholder.com",
      },
      {
        protocol: 'https',
        hostname: "i.ytimg.com",
      },
      {
        protocol: 'https',
        hostname: "www.pronixinc.com",
      },
    ],
  }
};

export default nextConfig;
