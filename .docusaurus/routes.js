
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/about',
    component: ComponentCreator('/about','408'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','afa'),
    exact: true
  },
  {
    path: '/blog/2022/03/20/clion编译代码中文乱码解决方案',
    component: ComponentCreator('/blog/2022/03/20/clion编译代码中文乱码解决方案','e85'),
    exact: true
  },
  {
    path: '/blog/2022/03/20/WSL安装ArchLinux',
    component: ComponentCreator('/blog/2022/03/20/WSL安装ArchLinux','23d'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search','79a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','3fc'),
    routes: [
      {
        path: '/docs/CET6/五个英语学习技巧',
        component: ComponentCreator('/docs/CET6/五个英语学习技巧','0b4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/CET6/六级必会的584个词',
        component: ComponentCreator('/docs/CET6/六级必会的584个词','705'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/CET6/关于book的表达',
        component: ComponentCreator('/docs/CET6/关于book的表达','cc3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Lang/C++/const与指针',
        component: ComponentCreator('/docs/Lang/C++/const与指针','7b6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Lang/C++/make与automake',
        component: ComponentCreator('/docs/Lang/C++/make与automake','929'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Lang/C++/静态库与动态库',
        component: ComponentCreator('/docs/Lang/C++/静态库与动态库','cdd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Lang/intro',
        component: ComponentCreator('/docs/Lang/intro','99e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Linux/intro',
        component: ComponentCreator('/docs/Linux/intro','c79'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Linux/Linux系统编程/进程管理',
        component: ComponentCreator('/docs/Linux/Linux系统编程/进程管理','430'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Linux/wsl中docker换源',
        component: ComponentCreator('/docs/Linux/wsl中docker换源','12c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Linux/软硬链接',
        component: ComponentCreator('/docs/Linux/软硬链接','adf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Machine-Learning/intro',
        component: ComponentCreator('/docs/Machine-Learning/intro','b8b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','f49'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
