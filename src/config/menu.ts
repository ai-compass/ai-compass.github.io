export interface Menu {
  name: string
  icon: string
  link?: string
  list?: List[]
  children?: Menu[]
  showChildren?: boolean
}

export interface List {
  name: string
  icon: string
  href: string
  desc: string
}

const menuList: Menu[] = [
  {
    name: 'ChatGPT',
    icon: 'i-carbon:chat',
    link: 'chatgpt',
    list: [
      {
        name: 'chat.gpt.bz',
        icon: 'https://chat.gpt.bz/favicon.ico',
        href: 'https://chat.gpt.bz/',
        desc: '基于 GPT-3.5 的聊天机器人',
      },
    ],
  },
  {
    name: 'AI 设计',
    icon: 'i-carbon:data-enrichment-add',
    link: 'ai-design',
    list: [
      {
        name: 'CleanUp.pictures',
        icon: 'https://cleanup.pictures/favicon.ico',
        href: 'https://cleanup.pictures/',
        desc: '快速擦去图片中不需要的部分',
      },
      {
        name: 'hotpot.ai',
        icon: 'https://hotpot.ai/favicon.ico',
        href: 'https://hotpot.ai/',
        desc: '照片修复、上色、去背景、无损放大、面部打码等照片处理的实用工具',
      },
      {
        name: 'Paletee',
        icon: 'https://palette.fm/favicon.png',
        href: 'https://palette.fm/',
        desc: '给黑白照片着色',
      },
      {
        name: 'SocialBook',
        icon: 'https://d35b8pv2lrtup8.cloudfront.net/assets/img/fav/sb.png',
        href: 'https://socialbook.io/remove-background',
        desc: 'AI人物背景移除算法 - 100%全自动，秒出结果',
      },
      {
        name: 'fococlipping',
        icon: 'https://st0.dancf.com/static/02/202104290317-0b91.ico',
        href: 'https://www.fococlipping.com/',
        desc: '免费线上抠图，支持手动编辑，边缘清晰',
      },
      {
        name: 'Magic Eraser',
        icon: 'https://www.magiceraser.io/MagicEraserBlob-16x16.png',
        href: 'https://www.magiceraser.io/',
        desc: '通过 AI 算法自动抠除不想要的元素，并能保证画面整体的和谐程度',
      },
      {
        name: 'PurePhotos',
        icon: 'https://tc.seoipo.com/favicon/purephotos.app.png',
        href: 'https://purephotos.app/',
        desc: '批量去背景，可输出为 PSD，去背景性能好，每月有 100 张免费处理额度',
      },
      {
        name: 'webp2jpg',
        icon: 'https://tc.seoipo.com/favicon/renzhezhilu.gitee.io.png',
        href: 'https://renzhezhilu.gitee.io/webp2jpg-online/',
        desc: '图片批量压缩、格式互换，可指定宽度，转换过程在浏览器中完成，无需上传图片到服务器，且程序开源，可进行私有化部署',
      },
      {
        name: '佐糖',
        icon: 'https://qncdn.aoscdn.com/img/picwish-home/favicon.png',
        href: 'https://picwish.cn/remove-unwanted-object',
        desc: '在线图片工具，去水印、抠图',
      },
      {
        name: 'waifu2x',
        icon: 'https://tc.seoipo.com/favicon/waifu2x.ico',
        href: 'https://waifu2x.udp.jp/index.zh-CN.html',
        desc: '图片无损放大降噪',
      },
      {
        name: 'TinyPNG',
        icon: 'https://tc.seoipo.com/favicon/tinypng.ico',
        href: 'https://tinypng.com/',
        desc: '在线图片压缩，视觉差异不大',
      },
      {
        name: 'SideIt',
        icon: 'https://sideit.app/favicon-32x32.png',
        href: 'https://sideit.app/',
        desc: '无缝拼图，自动调整图片比例',
      },
      {
        name: 'AnimeGANv2',
        icon: 'https://huggingface.co/favicon.ico',
        href: 'https://huggingface.co/spaces/akhaliq/AnimeGANv2',
        desc: '将图片和视频转换成漫画风格的工具。采用的是神经风格迁移+生成对抗网络（GAN）的组合，转换速度快。',
      },
      {
        name: 'Free Profile Picture Maker',
        icon: 'https://pfpmaker.com/favicon-32x32.png',
        href: 'https://pfpmaker.com/',
        desc: '上传肖像照片，平台会自动去掉图片背景，添加几十种设计效果，帮你创建头像照片。',
      },
      {
        name: 'Generated Photos',
        icon: 'https://tc.seoipo.com/favicon/generated.photos.png',
        href: 'https://generated.photos/',
        desc: 'AI 头像库，都不是真实存在的人，按种族、年龄、性别、肤色等划分，免费商用。可上传图片，生成相似的头像。',
      },
      {
        name: 'Avataaars Generator',
        icon: 'https://tc.seoipo.com/favicon/getavataaars.com.png',
        href: 'https://getavataaars.com/',
        desc: '卡通头像生成，可免费按条件定制',
      },
      {
        name: 'QR Code Generator',
        icon: 'https://tc.seoipo.com/favicon/qrbtf.com.ico',
        href: 'https://qrbtf.com/',
        desc: '生成简洁且有艺术感的二维码',
      },
      {
        name: 'Word art',
        icon: 'https://tc.seoipo.com/favicon/wordart.com.ico',
        href: 'https://wordart.com/create',
        desc: '文字云在线制作工具，可根据图片设置文字云，支持二维码',
      },
      {
        name: '求字体',
        icon: 'https://tc.seoipo.com/favicon/qiuziti.com.ico',
        href: 'https://www.qiuziti.com/',
        desc: '识别图片中的字体，可识别中、英、日、韩、法、德等多国语言字体',
      },
      {
        name: 'figen',
        icon: 'https://figen.cc/favicon.ico',
        href: 'https://figen.cc/',
        desc: '封面图在线制作工具',
      },
      {
        name: 'Haikei',
        icon: 'https://api.iowen.cn/favicon/app.haikei.app.png',
        href: 'https://app.haikei.app/',
        desc: '快速生成独特的背景设计',
      },
      {
        name: 'uigradients',
        icon: 'https://tc.seoipo.com/favicon/uigradients.com.png',
        href: 'https://uigradients.com/',
        desc: '随机渐变色背景',
      },
      {
        name: 'Everypixel Pattern Generator',
        icon: 'https://tc.seoipo.com/favicon/everypixel.ico',
        href: 'https://www.everypixel.com/patterns/generate',
        desc: '随机生成无缝图片，适合当背景图',
      },
      {
        name: 'Cool Backgrounds',
        icon: 'https://tc.seoipo.com/favicon/coolbackgrounds.io.png',
        href: 'https://coolbackgrounds.io/',
        desc: '生成具有颜色，渐变和形状等时尚元素的背景图像',
      },
      {
        name: 'FotoForensics',
        icon: 'https://tc.seoipo.com/favicon/fotoforensic.com.ico',
        href: 'https://fotoforensic.com/',
        desc: '检测照片是否被PS处理过',
      },
      {
        name: 'AutoDraw',
        icon: 'https://tc.seoipo.com/favicon/autodraw.png',
        href: 'https://www.autodraw.com/',
        desc: 'AI 猜测你要画什么，并将图案变成更专业、更好看！这些插图都是邀请各地艺术家预先绘制而成，只需简单勾勒几笔，AutoDraw会自动建议你一些相关图案，一点立即套用',
      },
      {
        name: 'Petalica Paint',
        icon: 'https://tc.seoipo.com/favicon/petalica-paint.png',
        href: 'https://paintschainer.preferred.tech/index_zh.html',
        desc: '为线稿、插画自动上色',
      },
      {
        name: 'Artbreeder',
        icon: 'https://tc.seoipo.com/favicon/artbreeder.com.ico',
        href: 'https://www.artbreeder.com/',
        desc: '在线图像合成，直接合成（从网站自带图像库选择图片合成）；上传合成（自己从电脑中上传图片进行合成）；动画合成（即选择多张图片生成动态效果）',
      },
      {
        name: 'Everypixel Aesthetics Test',
        icon: 'https://tc.seoipo.com/favicon/everypixel.ico',
        href: 'https://www.everypixel.com/aesthetics',
        desc: '图片评分工具 - Ask Neural Network if Your Photo is Good or Not',
      },
    ],
  },
  {
    name: '文字编辑',
    icon: 'i-carbon:edit',
    link: 'text-edit',
    list: [
      {
        name: 'copy.ai',
        icon: 'https://app.copy.ai/favicon.ico',
        href: 'https://app.copy.ai/',
        desc: '智能生成内容文案，每月 10 篇免费额度，注册第一个月有 30 篇免费。',
      },
      {
        name: 'WantQuotes 据意查句',
        icon: 'https://wantquotes.net/favicon.ico',
        href: 'https://wantquotes.net/',
        desc: '通过描述的意思来查找名句，包括名人名言、古诗词和文言文名句、谚语俗语歇后语等。',
      },
      {
        name: '万词王',
        icon: 'https://wantwords.net/static/image/zm2.ico',
        href: 'https://wantwords.net/',
        desc: '反向词典，查询 100 个近义词，告别「词不达意」，支持中文、英文',
      },
      {
        name: '近邻词汇检索',
        icon: 'https://tool.mingdawoo.com/lang/nearby_word/static/img/bird.favicon.ico',
        href: 'https://tool.mingdawoo.com/lang/nearby_word/',
        desc: '查找近似短语和相关术语，支持检索成语、诗歌流行语。多种姿势夸人、写文助手、文案灵感。',
      },
      {
        name: 'Gramara',
        icon: 'https://app.gramara.com/favicon.png',
        href: 'https://app.gramara.com/',
        desc: 'AI 语法检查器，自动修复你的英语病句',
      },
      {
        name: 'Ludwig • Find your English sentence',
        icon: 'https://ludwig.guru/l-favicon-32x32.png',
        href: 'https://ludwig.guru/',
        desc: '搜索并翻译相关的英文句式，帮您找到完美的单词或句子来表达您的想法。',
      },
      {
        name: '微信 Markdown 编辑器',
        icon: 'https://tc.seoipo.com/favicon/doocs.github.io.png',
        href: 'https://doocs.gitee.io/md/',
        desc: '将Markdown即时渲染为微信图文，让你不再为微信文章排版而发愁！只要你会基本的 Markdown 语法，就能做出一篇样式简洁而又美观大方的微信图文。',
      },
      {
        name: '文本文件合并工具',
        icon: 'https://uutool.cn/favicon.ico',
        href: 'https://uutool.cn/txt-merge/',
        desc: 'UU在线工具是一个免费便捷的在线工具站，无需下载，即来即用，简洁高效，让数据处理更简单和高效。',
      },
      {
        name: 'Diffchecker',
        icon: 'https://tc.seoipo.com/favicon/diffchecker.com.ico',
        href: 'https://www.diffchecker.com/',
        desc: '在线的文本比较工具，用于比较两个文本文件之间的差异。',
      },
    ],
  },
  {
    name: '在线工具',
    icon: 'i-carbon:tools',
    link: 'online-tools',
    list: [
      {
        name: '网络视频解析器',
        icon: 'https://api.iowen.cn/favicon/bilibili.iiilab.com.png',
        href: 'https://bilibili.iiilab.com/',
        desc: '解析下载哔哩哔哩、微博、秒拍、绿洲、小咖秀、YouTube、Twitter、Instagram、AcFun、最右、微视、全民K歌、全民小视频、陌陌、美拍、Facebook、Vimeo、Tumblr、云音乐、趣头条、映客、小影、梨视频、兽音译者、淘宝等平台的视频',
      },
      {
        name: 'apk-downloader',
        icon: 'https://apps.evozi.com/apk-downloader/assets/favicon.ico',
        href: 'https://apps.evozi.com/apk-downloader/',
        desc: '下载 Google Play 的 APK 应用',
      },
      {
        name: 'ExtensionDock',
        icon: 'https://nav.newzone.top/wp-content/uploads/2022/11/3b79c-extensiondock.com.png',
        href: 'https://extensiondock.com/',
        desc: '下载Chrome插件的CRX文件，让你无需登陆商店即可下载并安装使用Chrome扩展插件',
      },
      {
        name: 'PDFmyURL',
        icon: 'https://pdfmyurl.com/xfavicon-32x32.png.pagespeed.ic.ui76vLCKJj.webp',
        href: 'https://pdfmyurl.com/',
        desc: '保留网页原本格式，完整导出为pdf',
      },
      {
        name: 'Wormhole',
        icon: 'https://api.iowen.cn/favicon/wormhole.app.png',
        href: 'https://wormhole.app/',
        desc: '端对端加密和自动过期链接的方式分享文件',
      },
      {
        name: '文叔叔',
        icon: 'https://tc.seoipo.com/favicon/wenshushu.cn.ico',
        href: 'https://www.wenshushu.cn/',
        desc: '国内大文件分享，免登录，最大5G，2天后自动销毁；微信中无法直接打开',
      },
      {
        name: 'ufile',
        icon: 'https://tc.seoipo.com/favicon/ufile.io.webp',
        href: 'https://ufile.io/',
        desc: '免注册匿名上传，单文档5G，最多保存30天；国内打开偏慢',
      },
      {
        name: 'Product Hunt',
        icon: 'https://ph-static.imgix.net/ph-favicon.ico?auto=format&auto=compress',
        href: 'https://www.producthunt.com/',
        desc: '每日推荐最新科技应用产品，类似于 36kr 原本的 NEXT。',
      },
      {
        name: 'lumen5',
        icon: 'https://storage.googleapis.com/lumen5-site-images/favicon/favicon.ico',
        href: 'https://lumen5.com/',
        desc: '视频制作工具，适合用于项目介绍，免费版有水印，限制 720p，但没数量限制',
      },
      {
        name: 'RTINGS',
        icon: 'https://i.rtings.com/assets/favicon/current/favicon-32x32-5a80ecb0b3d10a17fb280c3224b7e7a4a0f8d03b724901e162d9025c622e6e5f.png',
        href: 'https://www.rtings.com/',
        desc: '国外知名评测网站：电视、耳机、显示屏、音箱、鼠标、键盘',
      },
      {
        name: '临时教育邮箱',
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9InJnYigyMjYsMjI5LDEzNykiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMjI5LDE0NywxMTQpIiBjeD0iMzEiIGN5PSIxNS41IiByPSI2MCIgIG9wYWNpdHk9Ii40Ij48L2NpcmNsZT4NCiAgICAgICAgICAgICAgICA8Y2lyY2xlIGZpbGw9InJnYigxMzksMjI5LDExNCkiIGN4PSI2MiIgY3k9IjEyNCIgcj0iNTAiICBvcGFjaXR5PSIuNiI+PC9jaXJjbGU+DQogICAgICAgICAgICAgICAgPHRleHQgeD0iNTAiIHk9IjUwIiBmb250LXNpemU9IjUwIiB0ZXh0LWNvcHk9ImZhc3QiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRleHQtcmlnaHRzPSJhZG1pbiIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIiBmb250LWZhbWlseT0iJ1BpbmdGYW5nIFNDJywnTWljcm9zb2Z0IFlhaGVpJyI+5Li0PC90ZXh0Pjwvc3ZnPg==',
        href: 'https://mail.mjj.edu.ge/',
        desc: '可以随机生成的教育邮箱，也称为白嫖邮箱，隐私邮箱，10分钟临时邮，可日抛邮箱，是百分百匿名防追踪的。可以通过一些网站的教育认证，享受教育优惠。没实际试过。',
      },
      {
        name: '网页有效性检测',
        icon: 'https://nav.newzone.top/wp-content/uploads/2022/08/8a3e2-doj.me.png',
        href: 'https://doj.me/',
        desc: '检查特定网站是否当机或无法联机的免费在线工具，当你发现某个网站无法打开时就可透过 DOJ.me 将网址贴上进行检查，这项工具会在几秒钟后显示网站状态、Ping、Http 回传状态和延迟情形，也有独立网址可随时返回该页面重新检查状态。',
      },
    ],
  },
  {
    name: '视频工具',
    icon: 'i-carbon-video',
    link: 'video-tools',
    list: [
      {
        name: 'Pexels',
        icon: 'https://tc.seoipo.com/favicon/pexels.ico',
        href: 'https://www.pexels.com/zh-cn/',
        desc: '图片、视频 CC0 授权素材，可商用',
      },
      {
        name: '33台词',
        icon: 'https://tc.seoipo.com/favicon/agilestudio.cn.ico',
        href: 'https://33-app.agilestudio.cn/',
        desc: '通过中英文台词找影片素材',
      },
      {
        name: '33搜帧',
        icon: 'https://fse.agilestudio.cn/favicon.ico',
        href: 'https://fse.agilestudio.cn/',
        desc: '通过文本描述来搜索视频帧画面的工具，可以帮助视频创作者快速找到相关视频场景素材，提升工作效率，是视频创作者的必备利器。',
      },
      {
        name: 'YARN',
        icon: 'https://y.yarn.co/site/favicon-32x32.png',
        href: 'https://getyarn.io/',
        desc: '英文台词找片段，支持电视节目、电影、音乐',
      },
      {
        name: 'Mixkit',
        icon: 'https://tc.seoipo.com/favicon/mixkit.co.png',
        href: 'https://mixkit.co/',
        desc: '免费视频、音乐素材，Download Free Stock Video Footage, Stock Music &amp; Premiere Pro Templates for your next video editing project. All assets can be downloaded for free!',
      },
      {
        name: 'Mazwai',
        icon: 'https://mazwai.com/assets/images/favicon-32x32.png',
        href: 'https://mazwai.com/stock-video-footage',
        desc: '不支持关键词搜索，只能按分类查找，但分类清晰，一般能找合适的视频素材',
      },
      {
        name: 'coverr',
        icon: 'https://coverr.co/favicon-32x32.png',
        href: 'https://coverr.co/',
        desc: '关键词搜索，所有视频都可免费下载使用',
      },
      {
        name: 'Ignite Motion',
        icon: 'https://api.iowen.cn/favicon/www.ignitemotion.com.png',
        href: 'https://www.ignitemotion.com/',
        desc: '以背景最为擅长，气泡，宇宙，云雾等等，全部可以免费用于商业或个人用途',
      },
      {
        name: '预告片世界',
        icon: 'https://tc.seoipo.com/favicon/yugaopian.cn.ico',
        href: 'https://www.yugaopian.cn/',
        desc: '高清电影预告片、电影花絮、精彩片段的在线观看和免费下载。',
      },
      {
        name: '知鱼素材',
        icon: 'https://tc.seoipo.com/favicon/zhiyu.art.png',
        href: 'https://sucai.zhiyu.art/',
        desc: '原创素材授权下载平台|视频素材、图片素材、AE模板、PS素材、音乐、音效_免费下载',
      },
      {
        name: '音频蛋AudioDown',
        icon: 'https://tc.seoipo.com/favicon/audiodown.com.png',
        href: 'https://www.audiodown.com/tosound',
        desc: '免费音效素材及视频剪辑配乐和游戏背景音乐打包下载',
      },
      {
        name: '淘声网',
        icon: 'https://www.tosound.com/favicon.ico',
        href: 'https://www.tosound.com/',
        desc: '声音素材、游戏音效、影视配乐、实地录音、音乐样本、节奏音源',
      },
      {
        name: '抖几句',
        icon: 'https://tc.seoipo.com/favicon/doujiju.com.png',
        href: 'https://www.doujiju.com/',
        desc: '百万原创短视频剧本，包括搞笑反转剧本、情感类剧本、亲子类剧本、直播剧本等，专注于为网红IP、MCN机构及企业短视频营销提供剧本服务，平台已入驻上万个专业的短视频剧本编剧创作者。',
      },
      {
        name: '金句谷',
        icon: 'https://tc.seoipo.com/favicon/jinjugu.com.ico',
        href: 'https://www.jinjugu.com/',
        desc: '收集高品质句子，是您最佳的句子摘抄本。',
      },
      {
        name: '文案狗',
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9InJnYigxOTcsMTM3LDIyOSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMTE0LDEyNiwyMjkpIiBjeD0iNDciIGN5PSIyMy41IiByPSI2MCIgIG9wYWNpdHk9Ii40Ij48L2NpcmNsZT4NCiAgICAgICAgICAgICAgICA8Y2lyY2xlIGZpbGw9InJnYigyMjksMTE0LDE4MykiIGN4PSI3OSIgY3k9IjE1OCIgcj0iNTAiICBvcGFjaXR5PSIuNiI+PC9jaXJjbGU+DQogICAgICAgICAgICAgICAgPHRleHQgeD0iNTAiIHk9IjUwIiBmb250LXNpemU9IjUwIiB0ZXh0LWNvcHk9ImZhc3QiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRleHQtcmlnaHRzPSJhZG1pbiIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIiBmb250LWZhbWlseT0iJ1BpbmdGYW5nIFNDJywnTWljcm9zb2Z0IFlhaGVpJyI+5paHPC90ZXh0Pjwvc3ZnPg==',
        href: 'https://www.wenangou.com/xieyin.html',
        desc: '谐音梗',
      },
      {
        name: '船长解析',
        icon: 'https://api.iowen.cn/favicon/czjx8.com.png',
        href: 'https://czjx8.com/',
        desc: '免费在线查看爱奇艺，腾讯，优酷，芒果，bilibili vip视频，并没有解析到最高画质，适合使用手机小屏追剧',
      },
      {
        name: 'AUDIOSTRIP',
        icon: 'https://audiostripcdnendpoint.azureedge.net/assets/favicon.ico',
        href: 'https://www.audiostrip.co.uk/',
        desc: '智能分离人声和背景音',
      },
    ],
  },
  {
    name: '平面设计',
    icon: 'i-carbon:ruler-alt',
    children: [
      {
        name: '图片素材',
        icon: 'i-carbon:image',
        link: 'pictures-material',
        list: [
          {
            name: 'Unsplash',
            icon: 'https://tc.seoipo.com/favicon/unsplash.png',
            href: 'https://unsplash.com/',
            desc: '免费、无版权高清大图',
          },
          {
            name: 'StockSnap',
            icon: 'https://tc.seoipo.com/favicon/stocksnap.ico',
            href: 'https://stocksnap.io/',
            desc: '高清晰摄影师图片，可商用',
          },
          {
            name: 'unDraw',
            icon: 'https://undraw.co/favicon.ico',
            href: 'https://undraw.co/',
            desc: '免费可商用向量插图图库，无需注明出处，数百张风格一致的扁平化插图。你可以更改图标颜色，默认提供了 6 种配色方案，也可以手动输入颜色哦。下载支持 PNG 和 SVG 两种格式。',
          },
          {
            name: 'Storyset',
            icon: 'https://storyset.com/favicon-32x32.png',
            href: 'https://storyset.com/',
            desc: '免费可商用的矢量插图，但必须标明出处（图源：Storyset），提供可自定义的动画、插图插画、登录页面、应用程序以及 PPT 演讲稿，可下载 SVG 和 PNG 格式图片，也可以调整插图的背景、颜色以及素材图层。',
          },
          {
            name: 'ISO Republic',
            icon: 'https://tc.seoipo.com/favicon/isorepublic.ico',
            href: 'https://isorepublic.com/',
            desc: '高分辨率照片和视频，免费可商业用',
          },
          {
            name: 'SplitShire',
            icon: 'https://tc.seoipo.com/favicon/splitshire.com.webp',
            href: 'https://www.splitshire.com/',
            desc: '高品质免费图库，可商用，不可上传至其他图库',
          },
          {
            name: 'pixabay',
            icon: 'https://tc.seoipo.com/favicon/pixabay.png',
            href: 'https://pixabay.com/',
            desc: '相片、视频、向量图与艺术插图素材图库，可商业',
          },
          {
            name: 'Startup Stock Photos',
            icon: 'https://tc.seoipo.com/favicon/startupstockphotos.png',
            href: 'https://startupstockphotos.com/',
            desc: '新创、办公室和科技题材的免费图库，可商业',
          },
          {
            name: 'albumarium',
            icon: 'https://tc.seoipo.com/favicon/albumarium.ico',
            href: 'https://albumarium.com/',
            desc: '分类筛选图片，大多可商用',
          },
          {
            name: 'myphotopack',
            icon: 'https://tc.seoipo.com/favicon/myphotopack.png',
            href: 'https://myphotopack.com/',
            desc: '时间划分，每月 10 张免费图片',
          },
          {
            name: 'ColorHub',
            icon: 'https://colorhub.me/colorhub.png',
            href: 'https://foter.com/',
            desc: '色号快速筛选相似图片，可商用',
          },
          {
            name: 'PNGIMG',
            icon: 'https://pngimg.com/favicon.ico',
            href: 'https://pngimg.com/',
            desc: '免抠图PNG素材库',
          },
          {
            name: 'NASA Image and Video Library',
            icon: 'https://tc.seoipo.com/favicon/NASA.ico',
            href: 'https://images.nasa.gov/',
            desc: '高清太空图、视频',
          },
          {
            name: 'GGAC_CG艺术创作分享平台',
            icon: 'https://tc.seoipo.com/favicon/ggac.png',
            href: 'https://www.ggac.net/',
            desc: '汇聚国内外前沿游戏、动漫、影视IP开发者、设计师，致力于为CG领域从业者、爱好者提供学习、展示、交流、就业、交易、IP孵化等服务， 打造以原创作品为核心的CG艺术创作生态体系。',
          },
          {
            name: 'Pexels',
            icon: 'https://tc.seoipo.com/favicon/pexels.ico',
            href: 'https://www.pexels.com/zh-cn/',
            desc: '图片、视频 CC0 授权素材，可商用',
          },
          {
            name: 'Artvee',
            icon: 'https://artvee.com/saconud/icon-350x350.png',
            href: 'https://artvee.com/',
            desc: '古典艺术作品，完全免费浏览和下载高分辨率的公共领域艺术品。',
          },
          {
            name: 'Loose Drawing',
            icon: 'https://loosedrawing.com/wp/wp-content/themes/loose-drawing/img/favicon/favicon.ico',
            href: 'https://loosedrawing.com/',
            desc: '可商用的简笔插画平台',
          },
        ],
      },
      {
        name: '图库引擎',
        icon: 'i-carbon:image-copy',
        link: 'pictures-engine',
        list: [
          {
            name: 'librestock',
            icon: 'https://tc.seoipo.com/favicon/librestock.png',
            href: 'https://librestock.com/',
            desc: '从 20 个常用图库搜寻数万张高画质 CC0 授权免费相片素材',
          },
          {
            name: 'Everypixel',
            icon: 'https://tc.seoipo.com/favicon/everypixel.ico',
            href: 'https://www.everypixel.com/',
            desc: '50 个图库搜寻引擎，使用演算法过滤不适合图片还能比价',
          },
          {
            name: 'Wallhaven－Awesome Wallpapers',
            icon: 'https://tc.seoipo.com/favicon/wallhaven.ico',
            href: 'https://wallhaven.cc/',
            desc: '高清背景图搜索引擎，高质量，勿商用',
          },
          {
            name: '微信表情包',
            icon: 'https://tc.seoipo.com/favicon/v2fy.com.png',
            href: 'https://www.v2fy.com/asset/0i/ChineseBQB/',
            desc: 'ChineseBQB开源斗图表情包工具，根据任意关键词查找表情包 长按表情包发送给好友',
          },
          {
            name: 'GIPHY',
            icon: 'https://tc.seoipo.com/favicon/giphy.png',
            href: 'https://giphy.com/',
            desc: 'Search All the GIFs; Make Your Own Animated GIF',
          },
        ],
      },
      {
        name: '矢量图标',
        icon: 'i-carbon:svg',
        link: 'svg-icon',
        list: [
          {
            name: 'Iconfont',
            icon: 'https://tc.seoipo.com/favicon/iconfont.svg',
            href: 'https://www.iconfont.cn/',
            desc: '阿里巴巴矢量图标库',
          },
          {
            name: 'IconPark',
            icon: 'https://tc.seoipo.com/favicon/iconpark.svg',
            href: 'https://iconpark.bytedance.com/official',
            desc: '字节跳动免费图标',
          },
          {
            name: 'SVGEdit',
            icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9InJnYigxMzcsMTcyLDIyOSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMTE0LDIyOSwyMTQpIiBjeD0iMTkiIGN5PSI5LjUiIHI9IjYwIiAgb3BhY2l0eT0iLjQiPjwvY2lyY2xlPg0KICAgICAgICAgICAgICAgIDxjaXJjbGUgZmlsbD0icmdiKDE1NiwxMTQsMjI5KSIgY3g9Ijc3IiBjeT0iMTU0IiByPSI1MCIgIG9wYWNpdHk9Ii42Ij48L2NpcmNsZT4NCiAgICAgICAgICAgICAgICA8dGV4dCB4PSI1MCIgeT0iNTAiIGZvbnQtc2l6ZT0iNTAiIHRleHQtY29weT0iZmFzdCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgdGV4dC1yaWdodHM9ImFkbWluIiBhbGlnbm1lbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGZvbnQtZmFtaWx5PSInUGluZ0ZhbmcgU0MnLCdNaWNyb3NvZnQgWWFoZWknIj5TPC90ZXh0Pjwvc3ZnPg==',
            href: 'https://svgedit.netlify.app/editor/index.html',
            desc: 'SVG 图片编辑器',
          },
          {
            name: 'Easyicon',
            icon: 'https://tc.seoipo.com/favicon/easyicon.ico',
            href: 'https://www.easyicon.cc/',
            desc: 'Search 500,000+ (SVG,PNG,ICO,ICNS) free icons, desktop icons, icons Download',
          },
          {
            name: 'Iconfinder',
            icon: 'https://tc.seoipo.com/favicon/iconfinder.webp',
            href: 'https://www.iconfinder.com/',
            desc: 'Iconfinder is the world\'s largest marketplace for vector and raster icons in SVG and PNG formats.',
          },
          {
            name: 'Findicons',
            icon: 'https://tc.seoipo.com/favicon/findicons.png',
            href: 'https://findicons.com/',
            desc: 'Download Free Icons and Free Icon Packs. More than 500,000 icons in PNG, ICO and ICNS icons for Mac! +2000 icon pack for free use.',
          },
          {
            name: 'Free Favicon Maker',
            icon: 'https://tc.seoipo.com/favicon/formito.com.svg',
            href: 'https://formito.com/tools/favicon',
            desc: 'Create SVG &amp; PNG favicon in seconds!',
          },
          {
            name: 'Animated icons',
            icon: 'https://tc.seoipo.com/favicon/icons8.png',
            href: 'https://icons8.com/animated-icons',
            desc: '900+ 免费动态图标，可商用',
          },
          {
            name: 'Pixel True－MIT Free Vector Illustrations',
            icon: 'https://tc.seoipo.com/favicon/pixeltrue.png',
            href: 'https://www.pixeltrue.com/free-illustrations',
            desc: '200 张免费动态图',
          },
          {
            name: 'Icons8 插图',
            icon: 'https://tc.seoipo.com/favicon/icons8.cn.illustrations.png',
            href: 'https://icons8.cn/illustrations',
            desc: '免费矢量插图以提升您的设计格调',
          },
          {
            name: '60logo',
            icon: 'https://tc.seoipo.com/favicon/60logo.ico',
            href: 'https://www.60logo.com/',
            desc: '高清LOGO矢量素材下载_logo图片大全_PPT模板,Word模板,Excel模板下载等服务，办公资源网模板库。',
          },
          {
            name: '100font',
            icon: 'https://tc.seoipo.com/favicon/100font.com.ico',
            href: 'https://www.100font.com/',
            desc: '免费商用字体',
          },
          {
            name: 'EmojiAll',
            icon: 'https://www.emojiall.com/favicon.ico',
            href: 'https://www.emojiall.com/zh-hans/all-emojis',
            desc: '分类查询 emoji 表情符號，還能查詢表情符號相關資訊',
          },
          {
            name: 'Emojipedia',
            icon: 'https://tc.seoipo.com/favicon/emojipedia.png',
            href: 'https://emojipedia.org/',
            desc: 'The emoji search engine. A fast emoji search experience with options to browse every emoji by name, category, or platform.',
          },
        ],
      },
      {
        name: '在线配色',
        icon: 'i-carbon:color-palette',
        link: 'online-color',
        list: [
          {
            name: 'Tailwind CSS color families',
            icon: 'https://uicolors.app/favicon/favicon-32x32.png',
            href: 'https://uicolors.app/create',
            desc: '根据指定颜色，派生出一个调色板系列',
          },
          {
            name: 'Huemint',
            icon: 'https://huemint.com/assets/img/logo-32.png',
            href: 'https://huemint.com/brand-intersection/',
            desc: '基于机器学习结果，自动生成配色组合的网页工具。你可以在左侧选择需要的主题色数量、面向的设计场景（品牌设计、网站、杂志、插画等），右侧预览界面会生成相应的配色以及模拟效果图。',
          },
          {
            name: '中国古典色卡',
            icon: 'https://tc.seoipo.com/favicon/colors.ichuantong.cn.ico',
            href: 'https://colors.ichuantong.cn/',
            desc: '中国传统颜色在线手册',
          },
          {
            name: 'NIPPON COLORS',
            icon: 'https://tc.seoipo.com/favicon/nipponcolors.com.ico',
            href: 'https://nipponcolors.com/',
            desc: '日本の伝統色',
          },
          {
            name: 'Paletton',
            icon: 'https://tc.seoipo.com/favicon/paletton.png',
            href: 'https://paletton.com/',
            desc: '专业色轮The Color Scheme Designer',
          },
          {
            name: 'Palettable',
            icon: 'https://tc.seoipo.com/favicon/palettable.io.ico',
            href: 'https://www.palettable.io/',
            desc: '颜色从零开始，随机推荐颜色，选择是否喜欢',
          },
          {
            name: 'Color Hunt',
            icon: 'https://tc.seoipo.com/favicon/colorhunt.co.gif',
            href: 'https://colorhunt.co/',
            desc: '小清新风格的现成配色方案',
          },
          {
            name: 'Color Wheel',
            icon: 'https://tc.seoipo.com/favicon/color-calculator.jpg',
            href: 'https://www.sessions.edu/color-calculator/',
            desc: '专业学院的配色套路',
          },
          {
            name: 'Adobe Color',
            icon: 'https://tc.seoipo.com/favicon/color-wheel.ico',
            href: 'https://color.adobe.com/zh/create/color-wheel',
            desc: 'Adobe 超强配色网站',
          },
        ],
      },
      {
        name: 'Logo 设计',
        icon: 'i-carbon:image-search',
        link: 'logo-design',
        list: [
          {
            name: 'favicon',
            icon: 'https://favicon.io/assets/static/favicon.b9532cc.ed88c65f76fa003989a0c683d668c765.png',
            href: 'https://favicon.io/',
            desc: '网站图标 Favicon 的在线生成工具',
          },
          {
            name: 'DesignEvo',
            icon: 'https://tc.seoipo.com/favicon/designevo.ico',
            href: 'https://www.designevo.com/cn/',
            desc: '随心所欲免费订制你的专属Logo。DesignEvo为你提供10000+ Logo模板，帮助你在线免费制作Logo。只需几分钟，你就能轻松制作出独一无二的Logo设计。',
          },
          {
            name: 'Logo Maker',
            icon: 'https://tc.seoipo.com/favicon/freelogodesign.png',
            href: 'https://www.freelogodesign.org/',
            desc: '免费定制 Logo',
          },
          {
            name: 'Brandmark Logo Maker',
            icon: 'https://brandmark.io/favicons/project/favicon.ico',
            href: 'https://brandmark.io/',
            desc: 'Create a unique logo, business card and social media graphics in less than a minute. Build your brand identity with our generative AI.',
          },
          {
            name: 'Emblemmatic — MarkMaker',
            icon: 'https://emblemmatic.org/markmaker/favicon.ico',
            href: 'https://emblemmatic.org/markmaker/#/',
            desc: '智能生成简单 Logo，仅支持英文',
          },
          {
            name: '阿里云智能设计',
            icon: 'https://tc.seoipo.com/favicon/aliyun.ico',
            href: 'https://logo.aliyun.com/design#/home',
            desc: '根据用户的设计场景，为您提供智能logo设计，高端logo定制，产品外观设计，品牌物料包装设计服务。',
          },
        ],
      },
      {
        name: '海报设计',
        icon: 'i-carbon:carbon-for-ibm-product',
        link: 'poster-design',
        list: [
          {
            name: 'beautiful.ai',
            icon: 'https://global-uploads.webflow.com/59deb588800ae30001ec19c9/5d4891e0e260e3c1bc37b100_beautiful%20ai%20favicon%20%20blue%20square.png',
            href: 'https://www.beautiful.ai/',
            desc: '在线 PPT 生成工具，帮你设计更好看的 PPT',
          },
          {
            name: 'Coverview',
            icon: 'https://coverview.vercel.app/logo.png',
            href: 'https://coverview.vercel.app/',
            desc: '为文章定制封面图片，可自订颜色、图示和背景图案',
          },
          {
            name: 'Figma',
            icon: 'https://tc.seoipo.com/favicon/figma.ico',
            href: 'https://www.figma.com/',
            desc: '在线协作式 UI 设计工具',
          },
          {
            name: 'Fotor懒设计',
            icon: 'https://tc.seoipo.com/favicon/fotor.png',
            href: 'https://www.fotor.com.cn/',
            desc: 'Fotor懒设计是全球最受欢迎的在线图片制作神器、平面设计工具和在线平面设计软件之一,提供海量海报,PPT,邀请函,banner,名片,logo等免费设计素材和模板,可在线一键稿定设计印刷,并能在线图片编辑、照片编辑。',
          },
          {
            name: '创客贴',
            icon: 'https://tc.seoipo.com/favicon/chuangkit.ico',
            href: 'https://www.chuangkit.com/designtools/design',
            desc: '极简好用的平面设计作图软件,在线图片编辑器,免费使用.提供免费设计模板，有海报、名片、公众号图片、PPT、邀请函等65个场景模板,一键稿定设计印刷.',
          },
          {
            name: 'Canva',
            icon: 'https://tc.seoipo.com/favicon/canva.ico',
            href: 'https://www.canva.cn/',
            desc: '可画在线平面设计软件',
          },
          {
            name: '鹿班',
            icon: 'https://tc.seoipo.com/favicon/luban.png',
            href: 'https://luban.aliyun.com/web/gen-next/entry',
            desc: '淘宝海报智能生成',
          },
        ],
      },
    ],
  },
  {
    name: '文档引擎',
    icon: 'i-carbon:document',
    link: 'document-engine',
    list: [
      {
        name: 'Awesome Github REPO',
        icon: 'https://api.iowen.cn/favicon/github.com.png',
        href: 'https://github.com/Wechat-ggGitHub/Awesome-GitHub-Repo',
        desc: '收集整理 GitHub 上高质量、有趣的开源项目，并将他们进行归类。值得注意的是，不是简单的按照编程语言来分类，而是按照更有趣的分类方式，比如：有趣项目、沙雕项目、实战项目、学习项目、实用工具等等。同时欢迎通过 Pull Request 或者 issues 给我们推荐优秀好玩的开源项目。',
      },
      {
        name: '知乎根话题精华',
        icon: 'https://tc.seoipo.com/favicon/zhihu.com.ico',
        href: 'https://www.zhihu.com/topic/19776749/top-answers',
        desc: '知乎Top1000高票回答',
      },
      {
        name: 'wikiHow',
        icon: 'https://tc.seoipo.com/favicon/wikihow.com.png',
        href: 'https://zh.wikihow.com/',
        desc: '奇葩思维聚集地。wikiHow是一项协作项目，目标是建立世界最大的最高质量的指导手册。无论您想做什么，都可以为您提供免费的逐步指导，是你可以信赖的多语种万事指南。',
      },
      {
        name: 'Library Genesis',
        icon: 'https://libgen.rs/favicon.ico',
        href: 'https://libgen.rs/',
        desc: 'Z-Library 的替代品，可惜中文书籍要少些',
      },
      {
        name: '中国国家数字图书馆',
        icon: 'https://tc.seoipo.com/favicon/nlc.cn.ico',
        href: 'https://www.nlc.cn/',
        desc: '国家图书馆是国家总书库，国家书目中心，国家古籍保护中心，国家典籍博物馆，拥有各类古籍资源。',
      },
      {
        name: 'Jiumo Search 鸠摩搜索',
        icon: 'https://tc.seoipo.com/favicon/jiumodiary.com.png',
        href: 'https://www.jiumodiary.com/',
        desc: '鸠摩文档搜索引擎',
      },
      {
        name: 'iData-知识检索',
        icon: 'https://tc.seoipo.com/favicon/cn-ki.net.ico',
        href: 'https://www.cn-ki.net/',
        desc: 'iData知识检索—免费下载学术文献,免费论文下载。',
      },
      {
        name: '淘链客',
        icon: 'https://tc.seoipo.com/favicon/toplinks.cc.ico',
        href: 'https://www.toplinks.cc/s/',
        desc: '电子书 PDF 聚合搜索引擎',
      },
      {
        name: 'Dataset Search',
        icon: 'https://tc.seoipo.com/favicon/google.ico',
        href: 'https://datasetsearch.research.google.com/',
        desc: 'Google 提供的数据集搜索，提供如人口、男女比例等数据，并附上数据来源。',
      },
      {
        name: '默克诊疗手册家庭版',
        icon: 'https://tc.seoipo.com/favicon/msdmanuals.ico',
        href: 'https://www.msdmanuals.cn/home',
        desc: '医生、学生和消费者的医学参考书的全球标准——自 1899 年至今，在美国和加拿大称为默克手册。',
      },
      {
        name: '医学微视',
        icon: 'https://tc.seoipo.com/favicon/mvyxws.com.ico',
        href: 'https://www.mvyxws.com/',
        desc: '医学微视-中国医学科普微视频百科全书，官方短视频讲解。',
      },
      {
        name: '考试酷',
        icon: 'https://tc.seoipo.com/favicon/examcoo.com.ico',
        href: 'https://www.examcoo.com/index/ku',
        desc: '永久免费的在线考试系统,网络考试系统,提供在线考试,电子作业,自测练习和模拟考试,智能组卷,试卷分享,试题库等考试系统和考试相关服务.',
      },
      {
        name: 'Firefox Monitor',
        icon: 'https://tc.seoipo.com/favicon/monitor.firefox.com.png',
        href: 'https://monitor.firefox.com/',
        desc: '查询自 2007 年开始所有公开数据泄漏事件当中，有没有包含你的电子邮件。',
      },
      {
        name: 'OnlineToolsBook',
        icon: 'https://tc.seoipo.com/favicon/github.svg',
        href: 'https://github.com/zhaoolee/OnlineToolsBook',
        desc: '收集超过一百款在线工具的开源中文说明书',
      },
    ],
  },
  {
    name: '博客资源',
    icon: 'i-carbon-blog',
    link: 'blog-resource',
    list: [
      {
        name: '中文播客榜',
        icon: 'https://xyzrank.justinbot.com/public/favicon.png',
        href: 'https://xyzrank.com/',
        desc: '以小宇宙为主的中文播客榜单',
      },
      {
        name: '播客 RSS Feed',
        icon: 'https://tc.seoipo.com/favicon/getpodcast.xyz.ico',
        href: 'https://getpodcast.xyz/',
        desc: '泛用型播客订阅，针对喜马拉雅、荔枝FM、网易云音乐、微信公众号等播客、电台节目的 RSS Feed 服务',
      },
      {
        name: '中文独立播客',
        icon: 'https://tc.seoipo.com/favicon/typlog.com.ico',
        href: 'https://typlog.com/featured/podcasts',
        desc: '发现与推荐高质量的中文独立播客',
      },
      {
        name: 'Listen Notes',
        icon: 'https://tc.seoipo.com/favicon/listennotes.com.webp',
        href: 'https://www.listennotes.com/',
        desc: '播客搜索引擎. Discover best podcasts. Search podcast show notes and audio transcripts by people, places, or topics.',
      },
      {
        name: 'Chartable',
        icon: 'https://chartable.com/favicon.ico',
        href: 'https://chartable.com/',
        desc: '播客数据分析和统计榜单',
      },
    ],
  },
  {
    name: 'IT 编程',
    icon: 'i-carbon-code',
    link: 'it-programming',
    list: [
      {
        name: 'StackBlitz',
        icon: 'https://c.staticblitz.com/assets/favicon-editor-675989317f34707a17fe9d649da3609d70f6f8abc9546445389238ddd570a1d4.png',
        href: 'https://stackblitz.com/',
        desc: '在线 IDE',
      },
      {
        name: 'freeCodeCamp',
        icon: 'https://chinese.freecodecamp.org/favicon-32x32.png',
        href: 'https://chinese.freecodecamp.org/learn',
        desc: '免费零基础编程学习网站，课程内容包括响应式网页设计、JavaScript 算法和数据结构、前端开发库、Python 与机器学习等 10 门中文课程。',
      },
      {
        name: 'HelloGitHub',
        icon: 'https://tc.seoipo.com/favicon/github.svg',
        href: 'https://hellogithub.com/',
        desc: '分享 GitHub 入门级、有趣的开源项目。推广自己的开源项目、编程实践项目、适合练手的开源项目、HelloGitHub月刊',
      },
      {
        name: 'GitHub中文排行榜',
        icon: 'https://tc.seoipo.com/favicon/github.svg',
        href: 'https://github.com/kon9chunkit/GitHub-Chinese-Top-Charts',
        desc: '帮你发现高分优秀中文项目、更高效地吸收国人的优秀经验成果；榜单每周更新一次！',
      },
      {
        name: 'free-programming-books',
        icon: 'https://api.iowen.cn/favicon/ebookfoundation.github.io.png',
        href: 'https://ebookfoundation.github.io/free-programming-books/books/free-programming-books-zh.html',
        desc: 'IT 编程电子书，整合各种语言，适合新手入门、了解编程背景',
      },
      {
        name: '现代 Javascript 教程',
        icon: 'https://tc.seoipo.com/favicon/javascript.info.png',
        href: 'https://zh.javascript.info/',
        desc: '涵盖 JavaScript 编程语言相关知识和浏览器行为，此外还有一系列的专题文章。',
      },
      {
        name: '正则表达式入门',
        icon: 'https://tc.seoipo.com/favicon/regex.ico',
        href: 'https://deerchao.net/tutorials/regex/regex.htm',
        desc: '正则表达式30分钟入门教程',
      },
      {
        name: '鱼C工作室',
        icon: 'https://tc.seoipo.com/favicon/fishc.ico',
        href: 'https://fishc.com.cn/',
        desc: '各类编程入门，已购 VIP，可做参考入门网站',
      },
      {
        name: 'CodeSandbox',
        icon: 'https://tc.seoipo.com/favicon/codesandbox.io.ico',
        href: 'https://codesandbox.io/',
        desc: '在线编程工具',
      },
    ],
  },
  {
    name: '网页前端',
    icon: 'i-carbon-html',
    link: 'web-html',
    list: [
      {
        name: 'Staticfile CDN',
        icon: 'https://tc.seoipo.com/favicon/staticfilecdn.png',
        href: 'https://www.staticfile.org/',
        desc: '国内静态 CDN 加速(七牛云)',
      },
      {
        name: '字节跳动静态资源公共库',
        icon: 'https://cdn.bytedance.com/src/res/favicon.png',
        href: 'https://cdn.bytedance.com/',
        desc: '(2022.03 停止更新)字节跳动静态资源库支持多协议、资源动态拼接、快速检索及资源的动态更新,安全、稳定、实时。',
      },
      {
        name: 'HTML minifier',
        icon: 'https://api.iowen.cn/favicon/kangax.github.io.png',
        href: 'https://kangax.github.io/html-minifier/',
        desc: '压缩 html 代码',
      },
      {
        name: 'CSS Tricks',
        icon: 'https://api.iowen.cn/favicon/qishaoxuan.github.io.png',
        href: 'https://qishaoxuan.github.io/css_tricks/filter/',
        desc: '常用 CSS 样式示例集合',
      },
      {
        name: 'Bar chart race generator',
        icon: 'https://tc.seoipo.com/favicon/barchartrace.png',
        href: 'https://fabdevgit.github.io/barchartrace/',
        desc: '动态图表生成(如：随时间变化的各个国家的 GDP 变化)',
      },
      {
        name: 'Font Awesome',
        icon: 'https://tc.seoipo.com/favicon/fontawesome.png',
        href: 'https://fontawesome.com/icons?d=gallery',
        desc: '绝佳的图标字体库和CSS框架',
      },
      {
        name: 'toastr',
        icon: 'https://api.iowen.cn/favicon/codeseven.github.io.png',
        href: 'https://codeseven.github.io/toastr/demo.html',
        desc: 'jquery 通知插件',
      },
      {
        name: 'Element',
        icon: 'https://tc.seoipo.com/favicon/element.ico',
        href: 'https://element-plus.gitee.io/zh-CN/component/container.html',
        desc: '基于 Vue 3.0 的桌面端组件库，饿了么前端团队开源',
      },
      {
        name: 'Bootstrap',
        icon: 'https://tc.seoipo.com/favicon/bootstrap.ico',
        href: 'https://getbootstrap.com/docs/',
        desc: 'The most popular HTML, CSS, and JS library in the world.',
      },
      {
        name: 'HTML Tables generator',
        icon: 'https://www.tablesgenerator.com/static/img/favicon.png',
        href: 'https://www.tablesgenerator.com/markdown_tables',
        desc: '无代码生成表格源码，支持 LaTeX，HTML，Text，Markdown，MediaWiki',
      },
      {
        name: 'Brizy',
        icon: 'https://tc.seoipo.com/favicon/brizy.cloud.ico',
        href: 'https://www.brizy.cloud/',
        desc: '免费定制个人网站',
      },
      {
        name: 'codepen',
        icon: 'https://tc.seoipo.com/favicon/codepen.png',
        href: 'https://codepen.io/',
        desc: '免费的前端代码托管服务，可修改并即时预览别人的作品。',
      },
      {
        name: 'Find cheap domain to buy!',
        icon: 'https://tc.seoipo.com/favicon/domcomp.com.png',
        href: 'https://www.domcomp.com/',
        desc: '找便宜域名，Considering to register, renew or transfer a domain? Check domain name availability and compare domain prices for 720 extensions across 38 providers with Domcomp. You can find cheap domains to buy or get the cheapest price for your desired URL name with up-to-date coupon. Lookup and compare now!',
      },
    ],
  },
  {
    name: '软件资源',
    icon: 'i-carbon-app',
    link: 'app-resource',
    list: [
      {
        name: '423down',
        icon: 'https://www.423down.com/wp-content/themes/D7/img/favicon.ico',
        href: 'https://www.423down.com/',
        desc: '老牌软件网站开设，资源较全',
      },
      {
        name: '谷粒',
        icon: 'https://tc.seoipo.com/favicon/github.svg',
        href: 'https://github.com/zhaoolee/ChromeAppHeroes',
        desc: 'Chrome插件英雄榜',
      },
      {
        name: '乐软博客',
        icon: 'https://tc.seoipo.com/favicon/isharepc.com.ico',
        href: 'https://www.isharepc.com/',
        desc: '乐软博客，致力于搜集与分享各种软件资源，有大量实用软件推荐，详细图文介绍，并提供下载。',
      },
      {
        name: '老殁软件',
        icon: 'https://tc.seoipo.com/favicon/laomo.ico',
        href: 'https://acold.xyz/',
        desc: '曾经用的比较多，但软件有段时间没更新了',
      },
      {
        name: 'Awesome Windows',
        icon: 'https://tc.seoipo.com/favicon/github.svg',
        href: 'https://github.com/Awesome-Windows/Awesome/blob/master/README-cn.md',
        desc: 'Windows上优质&amp;精选的最佳应用程序及工具列表',
      },
      {
        name: 'opensource.builders',
        icon: 'https://tc.seoipo.com/favicon/opensource.builders.png',
        href: 'https://opensource.builders/',
        desc: '为你常用软件寻找开源工具替代',
      },
      {
        name: 'AlternativeTo',
        icon: 'https://tc.seoipo.com/favicon/alternativeto.net.ico',
        href: 'https://alternativeto.net/',
        desc: '全平台软件横评，找应用替代',
      },
      {
        name: '脑袋瓜子',
        icon: 'https://api.iowen.cn/favicon/www.naodai.org.png',
        href: 'https://www.naodai.org/',
        desc: '软件分享，胡萝卜周替代',
      },
      {
        name: 'JOKER.PS',
        icon: 'https://tc.seoipo.com/favicon/jokerps.com.jpg',
        href: 'https://www.jokerps.com/',
        desc: '软件分享，胡萝卜周替代',
      },
    ],
  },
  {
    name: '影视资源',
    icon: 'i-carbon-video',
    link: 'video-resource',
    list: [
      {
        name: '麦克周',
        icon: 'https://tc.seoipo.com/favicon/mkzhou.com.jpg',
        href: 'https://mkzhou.com/',
        desc: '经典影视音乐资源合集',
      },
      {
        name: '高清MP4',
        icon: 'https://tc.seoipo.com/favicon/mp4pa.com.ico',
        href: 'https://www.mp4pa.com/',
        desc: '热播电影,电视剧,动漫资源分享，下载较简单',
      },
      {
        name: '爱恋动漫BT下载',
        icon: 'https://tc.seoipo.com/favicon/kisssub.png',
        href: 'https://www.kisssub.org/',
        desc: '爱恋BT分享站，动画～漫画～游戏～动漫音乐～片源（RAW）～各类ACG资源聚集地～',
      },
      {
        name: '酷搜',
        icon: 'https://tc.seoipo.com/favicon/wowenda.com.ico',
        href: 'https://www.kolsou.com/',
        desc: '专注百度云资源搜索引擎网站,各类网盘资源免费下载,提供设计素材及源码和java、python、人工智能、大数据、web前端、考研等视频教程百度网盘下载.',
      },
      {
        name: '罗马盘搜索',
        icon: 'https://tc.seoipo.com/favicon/luomapan.com.ico',
        href: 'https://www.luomapan.com/',
        desc: '百度网盘搜索引擎',
      },
      {
        name: '大力盘搜索',
        icon: 'https://tc.seoipo.com/favicon/dalipan.com.png',
        href: 'https://www.dalipan.com/',
        desc: '百度网盘搜索引擎',
      },
      {
        name: '云网盘之家',
        icon: 'https://tc.seoipo.com/favicon/wowenda.com.ico',
        href: 'https://www.wowenda.com/',
        desc: '百度云网盘搜索',
      },
      {
        name: 'BT种子批量转磁力链接',
        icon: 'https://tc.seoipo.com/favicon/qtool.net.ico',
        href: 'https://www.qtool.net/tomagnet',
        desc: '将BT种子批量转磁力链接，适合115等批量下载BT任务',
      },
    ],
  },
]

const getFlatMenuList = (menuList: Menu[]) => {
  const flatMenuList: Menu[] = []
  const flatMenu = (menu: Menu) => {
    if (menu.children) {
      menu.children.forEach((item: Menu) => {
        flatMenu(item)
      })
    }
    else {
      flatMenuList.push(menu)
    }
  }
  menuList.forEach((item: any) => {
    flatMenu(item)
  })
  return flatMenuList
}

export const flatMenuList = getFlatMenuList(menuList)

export default menuList
