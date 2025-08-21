import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos", // for api call image domain
        pathname: "/**", // allow all paths
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com", //  for fine-grained control
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

//^ What remotePatterns Does
// Restricts allowed external sources for optimized images.

// You can specify:

// protocol (e.g., https)

// hostname (e.g., picsum.photos)

// pathname (supports wildcards like /**)

// (Optional) Port and query string filters

//! other way-
// Or even more simply (broad allowance):

// remotePatterns: [
//   {
//     protocol: 'https',
//     hostname: '**',
//   },
// ]
