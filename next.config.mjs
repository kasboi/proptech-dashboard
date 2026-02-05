/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [],
        formats: ['image/avif', 'image/webp'],
    },
    typescript: {
        ignoreBuildErrors: false,
    },
    eslint: {
        ignoreDuringBuilds: false,
    },
};

export default nextConfig;
