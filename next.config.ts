import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    reactStrictMode: true,

    // Image optimization
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
        ],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // TypeScript configuration
    typescript: {
        ignoreBuildErrors: false,
    },

    // Experimental features for Next.js 15
    experimental: {
        optimizePackageImports: ['lucide-react', 'recharts', 'date-fns'],
    },

    // Performance optimizations
    compress: true,
    poweredByHeader: false,

    // Webpack configuration
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
        }
        return config
    },
}

export default nextConfig
