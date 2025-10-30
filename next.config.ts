import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// @ts-ignore
const nextConfig: NextConfig = {
  // Enable standalone output for Docker deployment (disable on Windows due to symlink issues)
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable file tracing completely on Windows
  ...(process.platform === 'win32' && {
    outputFileTracingRoot: undefined,
    outputFileTracingExcludes: {
      '*': ['**/*'],
    },
  }),
  // Move these to root level as they're no longer experimental
  allowedDevOrigins: [
    'museums.duckdns.org',
    '144.91.76.213',
    'localhost'
  ],
  // Normal configuration for non-Windows platforms
  ...(process.platform !== 'win32' && {
    outputFileTracingRoot: process.cwd(),
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@swc/core-linux-x64-gnu',
        'node_modules/@swc/core-linux-x64-musl',
        'node_modules/@esbuild/linux-x64',
      ],
    },
  }),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'central-asia.guide',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.britannica.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'http',
        hostname: 'minio.mm.global.uz',
      },
      {
        protocol: 'https',
        hostname: 'minio-s3.mm.global.uz',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
  typescript: {
    // ✅ Ignore type errors during `next build`
    ignoreBuildErrors: true,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
