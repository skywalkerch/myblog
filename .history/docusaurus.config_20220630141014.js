// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: '橙子的小破站',
  tagline: '致力于成为一个合格的小橙子',
  url: 'https://myblog.skywalkerch.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/orange.svg',
  organizationName: 'Skywalkerch', // Usually your GitHub org/user name.
  projectName: 'myblog', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // Please change this to your repo.
          editUrl: 'https://github.com/skywalkerch/myblog/blob/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/skywalkerch/myblog/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [{
    href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
    type: 'text/css',
    integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
    crossorigin: 'anonymous',
  },],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // The application ID provided by Algolia
        appId: 'D8GSM3SDUV',

        // Public API key: it is safe to commit it
        apiKey: '3b2768ccb2f62f0a5e199df1e46270e0',

        indexName: 'blog_query_suggestions',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
      navbar: {
        title: '橙子的小破站',
        logo: {
          alt: 'My Site Logo',
          src: 'img/orange.svg',
        },
        items: [{
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '所得所感',
        },
        
        {
          href: 'https://github.com/skywalkerch/',
          label: 'GitHub',
          position: 'right',
        },



        {
          to: '/nevigation',
          label: '导航',
          position: 'right'
        },



        {
          to: '/about',
          label: '关于',
          position: 'right'
        },

        ],
      },
      footer: {
        style: 'dark',
        links: [{
          title: '文档',
          items: [{
            label: '所得所感',
            to: '/docs/intro',
          },],
        },
        {
          title: '社交',
          items: [{
            label: '邮箱',
            href: 'mailto:skywalkerch@foxmail.com',
          },],
        },
        {
          title: '更多',
          items: [
          {
            label: 'GitHub',
            href: 'https://github.com/skywalkerch',
          },
          ],
        },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 橙子的小破站`,
      },
      metadata: [
        { name: 'msvalidate.01', content: '746EDE45770E2CA6A99A4AD87020E42A' },
        { name: 'baidu-site-verification', content: 'code-QYVX95fhH3' },
        { name: 'skywalkerch,橙子,小橙子', content: '数学建模,博客,Linux,机器学习,神经网络,深度学习' }],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;