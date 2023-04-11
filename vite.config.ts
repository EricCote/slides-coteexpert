import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import rehypePrism from '@mapbox/rehype-prism';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({ remarkPlugins: [remarkGfm], rehypePlugins: [rehypePrism] }),
    },
    react(),
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
});
