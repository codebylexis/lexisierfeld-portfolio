const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
};

module.exports = withMDX(nextConfig);
