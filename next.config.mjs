import mdx from '@next/mdx'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import hljs from 'highlight.js'
import svelte from 'highlightjs-svelte'

// Add svelte highlighting to the global hljs instance
svelte(hljs)

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [rehypeHighlight, {
        ignoreMissing: true,
      },],
      rehypeSlug,
      rehypeAutolinkHeadings,
    ],
    providerImportSource: "@mdx-js/react",
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default withMDX(nextConfig)
