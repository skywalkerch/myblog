
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/myblog/about',
    component: ComponentCreator('/myblog/about','994'),
    exact: true
  },
  {
    path: '/myblog/blog',
    component: ComponentCreator('/myblog/blog','acd'),
    exact: true
  },
  {
    path: '/myblog/blog/2022/03/20/clion编译代码中文乱码解决方案',
    component: ComponentCreator('/myblog/blog/2022/03/20/clion编译代码中文乱码解决方案','84e'),
    exact: true
  },
  {
    path: '/myblog/blog/2022/03/20/WSL安装ArchLinux',
    component: ComponentCreator('/myblog/blog/2022/03/20/WSL安装ArchLinux','c29'),
    exact: true
  },
  {
    path: '/myblog/blog/archive',
    component: ComponentCreator('/myblog/blog/archive','182'),
    exact: true
  },
  {
    path: '/myblog/markdown-page',
    component: ComponentCreator('/myblog/markdown-page','d20'),
    exact: true
  },
  {
    path: '/myblog/docs',
    component: ComponentCreator('/myblog/docs','91d'),
    routes: [
      {
        path: '/myblog/docs/CET6/五个英语学习技巧',
        component: ComponentCreator('/myblog/docs/CET6/五个英语学习技巧','547'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myblog/docs/CET6/六级必会的584个词',
        component: ComponentCreator('/myblog/docs/CET6/六级必会的584个词','1c2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myblog/docs/CET6/关于book的表达',
        component: ComponentCreator('/myblog/docs/CET6/关于book的表达','b86'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myblog/docs/intro',
        component: ComponentCreator('/myblog/docs/intro','7c4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myblog/docs/Lang/C++/const与指针',
        component: ComponentCreator('/myblog/docs/Lang/C++/const与指针','099'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myblog/docs/Lang/C++/make与automake',
        component: ComponentCreator('/myblog/docs/Lang/C++/make与automake','d2b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myblog/docs/Lang/C++/静态库与动态库',
        component: ComponentCreator('/myblog/docs/Lang/C++/静态库与动态库','88e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myblog/docs/Lang/intro',
        component: ComponentCreator('/myblog/docs/Lang/intro','10c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myblog/docs/Linux/intro',
        component: ComponentCreator('/myblog/docs/Linux/intro','adc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myblog/docs/Linux/Linux系统编程/进程管理',
        component: ComponentCreator('/myblog/docs/Linux/Linux系统编程/进程管理','cd6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myblog/docs/Linux/wsl中docker换源',
        component: ComponentCreator('/myblog/docs/Linux/wsl中docker换源','fba'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myblog/docs/Linux/软硬链接',
        component: ComponentCreator('/myblog/docs/Linux/软硬链接','7dc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/myblog/docs/Machine-Learning/intro',
        component: ComponentCreator('/myblog/docs/Machine-Learning/intro','2cb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/myblog/',
    component: ComponentCreator('/myblog/','f18'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
