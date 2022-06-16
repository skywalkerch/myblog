import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '884'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '623'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '866'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '241'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '5fa'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'b5a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '40d'),
    exact: true
  },
  {
    path: '/about',
    component: ComponentCreator('/about', '3f4'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '07b'),
    exact: true
  },
  {
    path: '/blog/2022/03/20/clion编译代码中文乱码解决方案',
    component: ComponentCreator('/blog/2022/03/20/clion编译代码中文乱码解决方案', 'dfe'),
    exact: true
  },
  {
    path: '/blog/2022/03/20/WSL安装ArchLinux',
    component: ComponentCreator('/blog/2022/03/20/WSL安装ArchLinux', '765'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '307'),
    exact: true
  },
  {
    path: '/day',
    component: ComponentCreator('/day', '310'),
    exact: true
  },
  {
    path: '/modernHistory',
    component: ComponentCreator('/modernHistory', '361'),
    exact: true
  },
  {
    path: '/nevigation',
    component: ComponentCreator('/nevigation', '88d'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '0d6'),
    exact: true
  },
  {
    path: '/thoughtDay',
    component: ComponentCreator('/thoughtDay', 'ade'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '096'),
    routes: [
      {
        path: '/docs/CET6/翻译预测',
        component: ComponentCreator('/docs/CET6/翻译预测', 'c36'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/CET6/翻译真题',
        component: ComponentCreator('/docs/CET6/翻译真题', 'ebc'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/CET6/关于book的表达',
        component: ComponentCreator('/docs/CET6/关于book的表达', '8f4'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/CET6/六级必会的584个词',
        component: ComponentCreator('/docs/CET6/六级必会的584个词', '0dc'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/CET6/五个英语学习技巧',
        component: ComponentCreator('/docs/CET6/五个英语学习技巧', 'e56'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/CET6/作文预测',
        component: ComponentCreator('/docs/CET6/作文预测', '955'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/CET6/作文真题',
        component: ComponentCreator('/docs/CET6/作文真题', '4bd'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'c49'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/Lang/C++/静态库与动态库',
        component: ComponentCreator('/docs/Lang/C++/静态库与动态库', '8b1'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/Lang/C++/const与指针',
        component: ComponentCreator('/docs/Lang/C++/const与指针', 'ee7'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/Lang/C++/make与automake',
        component: ComponentCreator('/docs/Lang/C++/make与automake', 'e8b'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/Lang/intro',
        component: ComponentCreator('/docs/Lang/intro', '1f4'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/latex/图片排版',
        component: ComponentCreator('/docs/latex/图片排版', '50f'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/Linux/软硬链接',
        component: ComponentCreator('/docs/Linux/软硬链接', '94c'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/Linux/intro',
        component: ComponentCreator('/docs/Linux/intro', '294'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/Linux/Linux系统编程/进程管理',
        component: ComponentCreator('/docs/Linux/Linux系统编程/进程管理', '47b'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/Linux/wsl中docker换源',
        component: ComponentCreator('/docs/Linux/wsl中docker换源', 'c18'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/Machine-Learning/intro',
        component: ComponentCreator('/docs/Machine-Learning/intro', '019'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/Machine-Learning/SLM-SL-Perceptron',
        component: ComponentCreator('/docs/Machine-Learning/SLM-SL-Perceptron', 'dfc'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/mathmodel/analytic_hierarchy_process',
        component: ComponentCreator('/docs/mathmodel/analytic_hierarchy_process', 'd55'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/mathmodel/linear_programing',
        component: ComponentCreator('/docs/mathmodel/linear_programing', '170'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/mathmodel/record',
        component: ComponentCreator('/docs/mathmodel/record', '43a'),
        exact: true,
        sidebar: "Sidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '0e7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
