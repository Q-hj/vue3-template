# PLC_web

## 项目结构

后续需要在src目录下执行tree命令，生成目录结构，更新结构

```

├─public
│      favicon.ico  应用图标
│
├─src
│ ├─assets
│ │  ├─icon
│ │  ├─image
│ │  │
│ │  └─styles
│ │
│ ├─components
│ │
│ ├─controllers
│ │
│ ├─hooks
│ │
│ ├─layout
│ │  └─Header
│ │      │
│ │      ├─MenuBar
│ │      │
│ │      └─ToolBar
│ │
│ ├─pages
│ │  ├─error
│ │  └─start
│ │
│ ├─router
│ │
│ ├─stores
│ │  └─modules
│ │
│ ├─types
│ │
│ └─utils
│
├─.eslintrc.cjs     esLint配置
│
├─.gitignore        git忽略配置
│
├─.prettierrc.json  prettier配置
│
├─index.html        入口页面
│
├─package.json
│
├─pnpm-lock.yaml    pnpm锁定文件
│
├─README.md         说明文档
│
├─stats.html        依赖分析页面
│
├─tsconfig.json     TypeScript配置
│
├─uno.config.ts     unoCSS配置
│
└─vite.config.ts    vite配置
```

## 项目依赖

|    依赖     | 版本 | 简介                                   |
| :---------: | :--: | -------------------------------------- |
|     vue     | 3.4  | 性能出色的渐进式前端框架               |
| vue-router  | 4.2  | vue 官方路由                           |
|    pinia    | 2.1  | 符合直觉的 vue 状态管理库              |
| arco-design | 2.54 | 企业级 UI 设计系统                     |
|   vueuse    | 10.7 | 提供丰富的 vueHooks                    |
|  lodash-es  | 4.17 | 模块化、高性能的 JavaScript 实用工具库 |
|   Day.js    | 1.11 | 轻量级的 JavaScript 日期库             |
|    mitt     | 3.0  | vue3推荐事件总线库                     |

### 开发依赖

|           依赖           | 版本 | 简介                              |
| :----------------------: | :--: | --------------------------------- |
|           Vite           | 5.0  | 下一代的前端工具链                |
|        TypeScript        | 5.3  | 提供代码类型检查和自动完成功能    |
|          unocss          | 0.58 | 即时按需的原子化 CSS 引擎         |
|          eslint          | 8.56 | 提供代码语法检查和约束风格        |
|         prettier         | 3.2  | 代码格式化工具                    |
|  vite-plugin-svg-icons   | 2.0  | 在 Vite 项目中轻松地使用 SVG 图标 |
| rollup-plugin-visualizer | 5.12 | 可视化打包依赖分析工具            |
