import { defineConfig } from "vuepress/config";
import navbar from "./navbar";
import sidebar from "./sidebar";
import footer from "./footer";
import extraSideBar from "./extraSideBar";

const author = "mydjin";
const domain = "https://mydjin.github.io";
const tags = ["程序员", "编程", "计算机"];

export default defineConfig({
  title: "mydjin的编程宝典",
  // description: "贴心的编程学习路线，全面的知识百科",
  description: "feedId:76473931194706944+userId:63112175590810624",
  head: [
    // 站点图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // SEO
    [
      "meta",
      {
        name: "keywords",
        content:
          "知识扫盲, 编程学习, Java, 编程导航, 前端, 开发, 编程分享, 项目, IT, 行业认知, 求职, 面经",
      },
    ],
    // 百度统计
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?2675818a983a3131404cee835018f016";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `,
    ],
  ],
  permalink: "/:slug",

  // 监听文件变化，热更新
  extraWatchFiles: [".vuepress/*.ts", ".vuepress/sidebars/*.ts"],
  markdown: {
    // 开启代码块的行号
    lineNumbers: true,
    // 支持 4 级以上的标题渲染
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"],
  },
  // @ts-ignore
  plugins: [
    ["@vuepress/back-to-top"],
    // Google 分析
    [
      "@vuepress/google-analytics",
      {
        ga: "GTM-WVS9HM6W", // 补充自己的谷歌分析 ID，比如 UA-00000000-0
      },
    ],
    ["@vuepress/medium-zoom"],
    // https://github.com/lorisleiva/vuepress-plugin-seo
    [
      "seo",
      {
        siteTitle: (_, $site) => $site.title,
        title: ($page) => $page.title,
        description: ($page) =>
          $page.frontmatter.description || $page.description,
        author: (_, $site) => $site.themeConfig.author || author,
        tags: ($page) => $page.frontmatter.tags || tags,
        type: ($page) => "article",
        url: (_, $site, path) =>
          ($site.themeConfig.domain || domain || "") + path,
        image: ($page, $site) =>
          $page.frontmatter.image &&
          (($site.themeConfig.domain &&
            !$page.frontmatter.image.startsWith("http")) ||
            "") + $page.frontmatter.image,
        publishedAt: ($page) =>
          $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: ($page) => $page.lastUpdated && new Date($page.lastUpdated),
      },
    ],
    // https://github.com/ekoeryanto/vuepress-plugin-sitemap
    [
      "sitemap",
      {
        hostname: domain,
      },
    ],
    // https://github.com/IOriens/vuepress-plugin-baidu-autopush
    ["vuepress-plugin-baidu-autopush"],
    // https://github.com/zq99299/vuepress-plugin/tree/master/vuepress-plugin-tags
    ["vuepress-plugin-tags"],
    // https://github.com/znicholasbrown/vuepress-plugin-code-copy
    [
      "vuepress-plugin-code-copy",
      {
        successText: "代码已复制",
      },
    ],
    // https://github.com/webmasterish/vuepress-plugin-feed
    [
      "feed",
      {
        canonical_base: domain,
        count: 10000,
        // 需要自动推送的文档目录
        posts_directories: [],
      },
    ],
    // https://github.com/tolking/vuepress-plugin-img-lazy
    ["img-lazy"],
    // 光标效果
    ['cursor-effects', {
      size: 2, // size of the particle, default: 2
      shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
      }],
    ['@vssue/vuepress-plugin-vssue', {
      // 设置 `platform` 而不是 `api`
      platform: 'github-v4',

      // 其他的 Vssue 配置
      owner: 'mydjin',
      repo: 'mydjin.github.io',
      clientId: 'Ov23liwcaeG8ZLMOLThH',
      clientSecret: '81829b2b2315cfc7981b21d0e09c72ed42a3159c',
      autoCreateIssue: true,
    },],
    // 文章加密 
    ['@oak-tree-house/encrypt', {
      contentTitle: 'Encrypted Content',
      unencryptedText: 'The content is shown below. It should be encrypted when published.',
      encryptedText: 'This part of content is encrypted. To view it, you need to enter the correct key in the input field below.',
      decryptedText: 'The encrypted content is successfully decrypted and shown below.',
      decryptButtonText: 'Decrypt',
      decryptFailText: 'Failed to decrypt!',
      unencryptedIcon: undefined,
      encryptedIcon: undefined,
      decryptedIcon: undefined
    }]
  ],
  // 主题配置
  themeConfig: {
    logo: "/logo.png",
    nav: navbar,
    sidebar,
    lastUpdated: "最近更新",

    // GitHub 仓库位置
    repo: "mydjin/mydjin.github.io",
    docsBranch: "master",

    // 编辑链接
    editLinks: true,
    editLinkText: "完善页面",

    // @ts-ignore
    // 底部版权信息
    footer,
    // 额外右侧边栏
    extraSideBar,

    encrypt: {
      config: {
        // 这会加密整个 guide 目录，并且两个密码都是可用的
        "/国学/儒学/": ["1234", "5678"],
        // 这只会加密 config/page.html
        "/config/page.html": "1234"
      }
    },
    feed:
    {
      enable: true,
    }, // rss
  },
});
