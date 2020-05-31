// .vuepress/config.js
module.exports = {
  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/nprogress",
    "vuepress-plugin-reading-time",
  ],
  title: "VuePress Demo",
  base: "/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }]
  ],
  themeConfig: {
    lastUpdated: "Last Updated",
    repo: "ocular-d/vuepress-demo",
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    nav: [
      { text: "Home", link: "/", target: "_self", rel: "" },
      //{ text: 'API Explorer', link: '/openapi/', target:'_blank' }
    ],
    sidebar: [
      {
        title: "Guide",
        collapsable: false,
        children: ["guide/install", "guide/actions"],
      },
      {
        title: "Contribute",
        collapsable: false,
        children: ["contribute", "test", "guide/actions"],
      }
    ]
  }
}
