import { resolve } from 'path';

import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

import Unocss from 'unocss/vite';

import { visualizer } from 'rollup-plugin-visualizer';

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig({
  plugins: [
    vue(),
    Unocss(),

    /** 压缩及依赖分析 */
    visualizer({
      open: true,
      template: 'sunburst',
      gzipSize: true,
      // brotliSize: true,
    }),

    /** 自动加载SVG */
    createSvgIconsPlugin({
      /** 指定需要缓存的图标文件夹 */
      iconDirs: [resolve(process.cwd(), 'src/assets/icon')],

      /** 指定symbolId格式 */
      symbolId: 'icon-[dir]-[name]',
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  server: {
    host: '0.0.0.0',
  },

  build: {
    rollupOptions: {
      output: {
        // 静态资源分类和包装
        chunkFileNames: 'public/assets/js/[name].js', //-[hash]
        entryFileNames: 'public/assets/js/[name].js', //-[hash]
        assetFileNames: 'public/assets/[ext]/[name].[ext]', //-[hash]
      },
    },
  },
});
