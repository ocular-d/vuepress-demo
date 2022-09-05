// .vuepress/config.js
module.exports = {
  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/nprogress",
    "vuepress-plugin-reading-time",
    "vuepress-plugin-code-copy",
    "vuepress-plugin-right-anchor"
  ],
  title: "VuePress Demo",
  base: "/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/redoc@next/bundles/redoc.standalone.js' }]
  ],
  themeConfig: {
    lastUpdated: "Last Updated",
    repo: "ocular-d/vuepress-demo",
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    sidebarDepth: '0',
    nav: [
      { text: "Home", link: "/intro", target: "_self", rel: "" },
      { text: 'API Explorer', link: '/openapi/', target:'_blank' }
    ],
    sidebar: [
      {
        title: "Guide",
        collapsable: false,
        children: ["intro", "plugins", "components", "checks", "actions"],
      },
      {
        title: "Contribute",
        collapsable: false,
        children: ["contribute", "guide/actions", "acknowledgment"],
      }
    ]
  }
}
