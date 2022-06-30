import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'fd6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '355'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '2e2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c8a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '4bb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'ba6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'bbb'),
    exact: true
  },
  {
    path: '/about',
    component: ComponentCreator('/about', '527'),
    exact: true
  },
  {
    path: '/day',
    component: ComponentCreator('/day', '44a'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags', '6fd'),
    exact: true
  },
  {
    path: '/docs/tags/极限',
    component: ComponentCreator('/docs/tags/极限', '4a4'),
    exact: true
  },
  {
    path: '/docs/tags/数学竞赛',
    component: ComponentCreator('/docs/tags/数学竞赛', '953'),
    exact: true
  },
  {
    path: '/modernHistory',
    component: ComponentCreator('/modernHistory', '8ce'),
    exact: true
  },
  {
    path: '/nevigation',
    component: ComponentCreator('/nevigation', 'e0e'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', 'c6f'),
    exact: true
  },
  {
    path: '/thoughtDay',
    component: ComponentCreator('/thoughtDay', 'b65'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '4eb'),
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
        path: '/docs/Machine-Learning/KNN',
        component: ComponentCreator('/docs/Machine-Learning/KNN', '0a6'),
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
        path: '/docs/MathCompetetion/常用的等价无穷小',
        component: ComponentCreator('/docs/MathCompetetion/常用的等价无穷小', '8a2'),
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
    component: ComponentCreator('/', '812'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
