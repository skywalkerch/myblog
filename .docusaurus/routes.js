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
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags', '5fd'),
    exact: true
  },
  {
    path: '/docs/tags/极限',
    component: ComponentCreator('/docs/tags/极限', '982'),
    exact: true
  },
  {
    path: '/docs/tags/数学建模',
    component: ComponentCreator('/docs/tags/数学建模', '150'),
    exact: true
  },
  {
    path: '/docs/tags/数学竞赛',
    component: ComponentCreator('/docs/tags/数学竞赛', '557'),
    exact: true
  },
  {
    path: '/docs/tags/主成分分析',
    component: ComponentCreator('/docs/tags/主成分分析', 'e2f'),
    exact: true
  },
  {
    path: '/nevigation',
    component: ComponentCreator('/nevigation', '88d'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', 'ee2'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '70d'),
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
        path: '/docs/mathmodel/第十章 多元分析方法/10.1 主成分分析/降维',
        component: ComponentCreator('/docs/mathmodel/第十章 多元分析方法/10.1 主成分分析/降维', 'efb'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/mathmodel/第十章 多元分析方法/10.1 主成分分析/协方差矩阵',
        component: ComponentCreator('/docs/mathmodel/第十章 多元分析方法/10.1 主成分分析/协方差矩阵', 'eac'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/mathmodel/第十章 多元分析方法/10.1 主成分分析/主成分分析的原理',
        component: ComponentCreator('/docs/mathmodel/第十章 多元分析方法/10.1 主成分分析/主成分分析的原理', '76e'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/mathmodel/第十章 多元分析方法/10.2 层次分析法/层次分析法',
        component: ComponentCreator('/docs/mathmodel/第十章 多元分析方法/10.2 层次分析法/层次分析法', '776'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/mathmodel/第十章 多元分析方法/10.3 因子分析法/因子分析法的介绍',
        component: ComponentCreator('/docs/mathmodel/第十章 多元分析方法/10.3 因子分析法/因子分析法的介绍', '7da'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/mathmodel/第十章 多元分析方法/10.3 因子分析法/因子分析法原理',
        component: ComponentCreator('/docs/mathmodel/第十章 多元分析方法/10.3 因子分析法/因子分析法原理', 'ee5'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/mathmodel/第十章 多元分析方法/10.3 因子分析法/因子载荷矩阵的统计意义',
        component: ComponentCreator('/docs/mathmodel/第十章 多元分析方法/10.3 因子分析法/因子载荷矩阵的统计意义', 'f65'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/mathmodel/第一章 规划方法/1.1 线性规划/线性规划',
        component: ComponentCreator('/docs/mathmodel/第一章 规划方法/1.1 线性规划/线性规划', '3eb'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/mathmodel/ALL打卡',
        component: ComponentCreator('/docs/mathmodel/ALL打卡', 'b99'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/mathmodel/intro',
        component: ComponentCreator('/docs/mathmodel/intro', '7f1'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/write/2022-6-30',
        component: ComponentCreator('/docs/write/2022-6-30', '05b'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/write/后验概率最大化的含义',
        component: ComponentCreator('/docs/write/后验概率最大化的含义', 'd91'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/write/clion编译代码中文乱码解决方案',
        component: ComponentCreator('/docs/write/clion编译代码中文乱码解决方案', '451'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/write/clion配置QT6.2.4环境',
        component: ComponentCreator('/docs/write/clion配置QT6.2.4环境', '3e9'),
        exact: true,
        sidebar: "Sidebar"
      },
      {
        path: '/docs/write/WSL安装ArchLinux',
        component: ComponentCreator('/docs/write/WSL安装ArchLinux', '152'),
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
