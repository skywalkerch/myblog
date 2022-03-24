
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
    path: '/day',
    component: ComponentCreator('/day','c6e'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search','79a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','d21'),
    routes: [
      {
        path: '/docs/CET6/关于book的表达',
        component: ComponentCreator('/docs/CET6/关于book的表达','8f4'),
        exact: true,
        'sidebar': "Sidebar"
      },
      {
        path: '/docs/CET6/六级必会的584个词',
        component: ComponentCreator('/docs/CET6/六级必会的584个词','0dc'),
        exact: true,
        'sidebar': "Sidebar"
      },
      {
        path: '/docs/CET6/五个英语学习技巧',
        component: ComponentCreator('/docs/CET6/五个英语学习技巧','e56'),
        exact: true,
        'sidebar': "Sidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','c49'),
        exact: true,
        'sidebar': "Sidebar"
      },
      {
        path: '/docs/Lang/C++/静态库与动态库',
        component: ComponentCreator('/docs/Lang/C++/静态库与动态库','8b1'),
        exact: true,
        'sidebar': "Sidebar"
      },
      {
        path: '/docs/Lang/C++/const与指针',
        component: ComponentCreator('/docs/Lang/C++/const与指针','ee7'),
        exact: true,
        'sidebar': "Sidebar"
      },
      {
        path: '/docs/Lang/C++/make与automake',
        component: ComponentCreator('/docs/Lang/C++/make与automake','e8b'),
        exact: true,
        'sidebar': "Sidebar"
      },
      {
        path: '/docs/Lang/intro',
        component: ComponentCreator('/docs/Lang/intro','1f4'),
        exact: true,
        'sidebar': "Sidebar"
      },
      {
        path: '/docs/Linux/软硬链接',
        component: ComponentCreator('/docs/Linux/软硬链接','94c'),
        exact: true,
        'sidebar': "Sidebar"
      },
      {
        path: '/docs/Linux/intro',
        component: ComponentCreator('/docs/Linux/intro','294'),
        exact: true,
        'sidebar': "Sidebar"
      },
      {
        path: '/docs/Linux/Linux系统编程/进程管理',
        component: ComponentCreator('/docs/Linux/Linux系统编程/进程管理','47b'),
        exact: true,
        'sidebar': "Sidebar"
      },
      {
        path: '/docs/Linux/wsl中docker换源',
        component: ComponentCreator('/docs/Linux/wsl中docker换源','c18'),
        exact: true,
        'sidebar': "Sidebar"
      },
      {
        path: '/docs/Machine-Learning/watermelon',
        component: ComponentCreator('/docs/Machine-Learning/watermelon','f59'),
        exact: true,
        'sidebar': "Sidebar"
      },
      {
        path: '/docs/mathmodel/linear_programing',
        component: ComponentCreator('/docs/mathmodel/linear_programing','170'),
        exact: true,
        'sidebar': "Sidebar"
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
