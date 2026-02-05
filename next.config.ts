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

    // Experimental features for Next.js 16
    experimental: {
        optimizePackageImports: ['lucide-react', 'recharts', 'date-fns'],
    },

    // Performance optimizations
    compress: true,
    poweredByHeader: false,

    // Turbopack configuration (Next.js 16 default bundler)
    turbopack: {},
}

export default nextConfig
