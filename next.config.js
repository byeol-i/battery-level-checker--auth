/** @type {import('next').NextConfig} */

const { createProxyMiddleware } = require("http-proxy-middleware");

const ADDR = process.env.ADDR;

const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/request/:path*",
                destination: `https://` + `${ADDR}` + `/:path*`,
            },
        ];
    },
    async serverMiddleware() {
        const apiProxy = createProxyMiddleware("/request", {
            target: `https://` + ADDR,
            changeOrigin: true,
            secure: true,
            protocolRewrite: "https",
            onProxyReq: (proxyReq) => {
                proxyReq.setHeader("Connection", "keep-alive");
            },
        });

        return [apiProxy];
    },
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
