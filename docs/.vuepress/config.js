// .vuepress/config.js
module.exports = {
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    'vuepress-plugin-reading-time'
],
  title: 'VuePress Demo',
  base: '/',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'ocular-d/vuepress-demo',
    nav: [
      { text: 'Help Center', link: 'https://google.com', target:'_self', rel:'' },
      //{ text: 'API Explorer', link: '/openapi/', target:'_blank' }
    ],
    sidebar: [
      {
      title: 'About',
      collapsable: false,
      children: [
          'contribute'
        ]
      },
      {
      title: 'Getting Started',
      collapsable: false,
      children: [
          'install'
        ]
      },
      {
      title: 'VuePress',
      collapsable: false,
      children: [
          'vuepress-plugins'
        ]
      },
      {
        title: 'GitHub Actions',
        collapsable: false,
        children: [
            'contribute',
            'test'
          ]
      },
    ]
  }
}
