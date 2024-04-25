/** @type {import('next').NextConfig} */

const repo = "the-game";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  images: {
    unoptimized: true,
  },
};


export default nextConfig;
