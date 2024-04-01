/** @type {import('next').NextConfig} */
const {join} = require("path");

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    sassOptions: {
        fiber: false,
        includePaths: [join(__dirname, "styles")],
    },
};

module.exports = nextConfig;
