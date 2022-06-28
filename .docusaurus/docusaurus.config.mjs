/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "橙子的小破站",
  "tagline": "致力于成为一个合格的小橙子",
  "url": "https://myblog.skywalkerch.cn",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/orange.svg",
  "organizationName": "Skywalkerch",
  "projectName": "myblog",
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "C:\\Users\\skywalkerch\\mysite\\sidebars.js",
          "remarkPlugins": [
            null
          ],
          "rehypePlugins": [
            null
          ],
          "editUrl": "https://github.com/skywalkerch/myblog/blob/main"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/skywalkerch/myblog/blob/main"
        },
        "theme": {
          "customCss": "C:\\Users\\skywalkerch\\mysite\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "stylesheets": [
    {
      "href": "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      "type": "text/css",
      "integrity": "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      "crossorigin": "anonymous"
    }
  ],
  "themeConfig": {
    "algolia": {
      "appId": "D8GSM3SDUV",
      "apiKey": "3b2768ccb2f62f0a5e199df1e46270e0",
      "indexName": "blog_query_suggestions",
      "contextualSearch": true,
      "searchParameters": {},
      "searchPagePath": "search"
    },
    "navbar": {
      "title": "橙子的小破站",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/orange.svg"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "所得所感"
        },
        {
          "to": "https://myblog2-five.vercel.app/",
          "label": "博客",
          "position": "left"
        },
        {
          "href": "https://github.com/skywalkerch/",
          "label": "GitHub",
          "position": "right"
        },
        {
          "to": "/nevigation",
          "label": "导航",
          "position": "right"
        },
        {
          "to": "/about",
          "label": "关于",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "文档",
          "items": [
            {
              "label": "所得所感",
              "to": "/docs/intro"
            }
          ]
        },
        {
          "title": "社交",
          "items": [
            {
              "label": "邮箱",
              "href": "mailto:skywalkerch@foxmail.com"
            }
          ]
        },
        {
          "title": "更多",
          "items": [
            {
              "label": "博客",
              "to": "https://myblog2-five.vercel.app/"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/skywalkerch"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 橙子的小破站"
    },
    "metadata": [
      {
        "name": "msvalidate.01",
        "content": "746EDE45770E2CA6A99A4AD87020E42A"
      },
      {
        "name": "baidu-site-verification",
        "content": "code-QYVX95fhH3"
      },
      {
        "name": "skywalkerch,橙子,小橙子",
        "content": "数学建模,博客,Linux,机器学习,神经网络,深度学习"
      }
    ],
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "themes": [],
  "scripts": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false
};
