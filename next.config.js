/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",
    output: 'export',
    basePath: '/nextjs-dashboard',
    assetPrefix: '/nextjs-dashboard',
    trailingSlash: true,
};

module.exports = nextConfig;
