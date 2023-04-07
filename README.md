# AI Compass

AI Compass 是一个开源工具导航网站，旨在帮助开发者快速找到自己需要的工具，同时也是一个开源项目，欢迎大家一起参与。

AI Compass 集成了：

- AI 设计
- 文字编辑
- 在线工具
- 视频工具
- 平面设计
  - 图片素材
  - 图库引擎
  - 矢量图标
  - 在线配色
  - Logo 设计
  - 海报设计
- 文档引擎
- 博客资源
- IT 编程
- 网页前端
- 软件资源
- 影视资源

相关网站资源，项目刚刚创建，大家有什么好的创意可以提出来，一起完善。

## 使用方法

### Clone

```bash
git clone https://github.com/ai-compass/ai-compass.git
```

### Install

```bash
pnpm install
```

### Run

```bash
pnpm dev
```

ai-compass base on [simple-vite-templete-v2](https://github.com/webB1an/simple-vite-templete-v2).

- icon from [Carbon](https://icon-sets.iconify.design/carbon/) by [@unocss/preset-icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons)
- [tailwindcss](https://tailwindcss.com/)
- [tailwindcss-中文站](https://www.tailwindcss.cn/)

## Unocss 使用问题

图标通过动态 `:class` 绑定不会显示，具体可以看 [issue](https://github.com/unocss/unocss/issues/1355)，在这个 issue 里说明了这是 UnoCSS 的[工作原理](https://github.com/unocss/unocss#scanning)，需要在 `unocss.config.ts` 中配置 `safelist` 添加动态的 `class` 图标即可。

## 待完成

- [x] 通过 midjourney 设计 logo
- [x] 自适应侧边栏布局
- [x] 定位锚点跳转
- [x] 自适应侧边栏布局的多菜单情况
- [x] tooltip
- [x] 页面数据填充
- [ ] 页面数据动态化
- [ ] 切换主题模式
