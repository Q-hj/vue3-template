import { defineConfig } from 'unocss/vite';
import presetRemToPx from '@unocss/preset-rem-to-px';
import {
  presetUno,
  presetAttributify,
  transformerVariantGroup,
  transformerDirectives,
} from 'unocss';

export default defineConfig({
  exclude: [
    'node_modules',
    'dist',
    '.git',
    '.husky',
    '.vscode',
    'public',
    'build',
    'mock',
    './stats.html',
  ],
  presets: [
    presetUno({ dark: 'class' }),
    presetAttributify(), //可以将类直接写在属性上
    // 默认单位 Rem 转 px
    presetRemToPx({
      baseFontSize: 4,
    }),
  ],
  shortcuts: {
    /* 尺寸 */
    full: 'w-full h-full',
    'full-v': 'w-100vw h-100vh',

    /* flex居中 */
    'flex-x-center': 'flex justify-center', //水平居中
    'flex-y-center': 'flex items-center', //垂直居中
    'flex-center': 'flex justify-center items-center', //水平垂直居中
    'flex-col': 'flex flex-col', //沿副轴
    'flex-col-center': 'flex-col flex-center', // 沿副轴水平垂直居中

    /* 鼠标小手 */
    pointer: 'cursor-pointer',

    /* 边框 */
    border: 'border border-solid border-gray-3',

    /* 过渡效果 */
    transition: 'transition-all duration-300 ease-in-out',

    /* 阻止文字溢出且不换行 */
    'nowrap-hidden': 'whitespace-nowrap overflow-hidden',

    /* 文字溢出显示省略号 */
    'overflow-ellipsis': 'nowrap-hidden text-ellipsis',

    // 提高提示的优先级
    'overflow-hidden': 'overflow-hidden',

    /* 绝对定位 */
    'absolute-lt': 'absolute left-0 top-0',
    'absolute-lb': 'absolute left-0 bottom-0',
    'absolute-rt': 'absolute right-0 top-0',
    'absolute-rb': 'absolute right-0 bottom-0',
    'absolute-tl': 'absolute-lt',
    'absolute-tr': 'absolute-rt',
    'absolute-bl': 'absolute-lb',
    'absolute-br': 'absolute-rb',

    /* 固定定位 */
    'fixed-lt': 'fixed left-0 top-0',
    'fixed-lb': 'fixed left-0 bottom-0',
    'fixed-rt': 'fixed right-0 top-0',
    'fixed-rb': 'fixed right-0 bottom-0',
    'fixed-tl': 'fixed-lt',
    'fixed-tr': 'fixed-rt',
    'fixed-bl': 'fixed-lb',
    'fixed-br': 'fixed-rb',
  },
  theme: {
    colors: {
      theme: 'var(--theme)',
      text: 'var(--color-text-1)',
      'text-2': 'var(--color-text-2)',
      'text-3': 'var(--color-text-3)',
      'text-4': 'var(--color-text-4)',
      bg: 'var(--color-bg-1)',
      'bg-1': 'var(--color-bg-1)',
      'bg-2': 'var(--color-bg-2)',
      'bg-3': 'var(--color-bg-3)',
      'bg-4': 'var(--color-bg-4)',
    },
    breakpoints: {
      // css单位必须一致。
      sm: `${576}px`,
      md: `${768}px`,
      lg: `${992}px`,
      xl: `${1200}px`,
      xxl: `${1600}px`,
    },
  },
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(), //支持 @apply、@screen指令
  ],
});
