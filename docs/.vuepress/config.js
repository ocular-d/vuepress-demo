// .vuepress/config.js
module.exports = {
  plugins: ['@vuepress/back-to-top'],
  title: 'Onna Developer Hub',
  base: '/',
  head: [
    [
      "script",
      {
        src:
          "https://cdn.jsdelivr.net/npm/redoc@next/bundles/redoc.standalone.js"
      }
    ]
  ],
  themeConfig: {
    nav: [
      { text: 'Help Center', link: 'https://google.com', target:'_self', rel:'' },
      { text: 'API Explorer', link: '/openapi/', target:'_blank' }
    ],
    sidebar: [
      {
      title: 'Getting Started',
      collapsable: false,
      children: [
          'install',
          'test1'
      ]
      }
    ]
  }
}
