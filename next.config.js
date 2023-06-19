/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    experimental: {
        images: {
            loader: "akamai",
            path: "",
        },
        assetPrefix: "./",
        appDir: true,
    },
};

module.exports = nextConfig;
