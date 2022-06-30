---
title: WSL安装ArchLinux总结
authors: skywalkerch
---

> 不要简单抄袭别人的博客而不加思考。
> 

# 准备环境

## 环境

- Windows 10(Build 19041 and higher) or Windows 11.
- hyper-V 和 Linux 子系统模块已经**[启用](https://docs.microsoft.com/en-us/windows/wsl/install-manual)**
- 在`ms store`安装`windows terminal`方便在 wsl 和 powershell 中切换

# 准备 LxRunOffline

LxRunOffline 是一个用来管理`Windows Subsystem for Linux`的全功能管理工具 其具有以下这些特点

- 能够把任何发行版安装在任意目录
- 能够将已经安装好的 Linux 子系统的根目录移动到其他目录.
- 可以复制一个已经安装好的子系统
- 注册现有的安装目录。 这使你可以安装到 U 盘并在不同的计算机上使用它。
- 在指定的安装中运行任意 Linux 命令。
- 配置默认用户，环境变量和各种标志。
- 将配置导出到 XML 文件并从文件导入。
- 将安装好的 Linux 子系统导出到 Tar 文件。

## **[LxRunOffline 主页链接](https://github.com/DDoSolitary/LxRunOffline)**

## 下载好了`LxRunOffline`之后

- [**必选**]把**解压目录**加到系统的环境变量中，这样才能在`powershell`里面调用。
- [**可选**]找到解压目录，用**管理员权限**打开 powershell 并 cd 到这个目录，输入

```powershell
regsvr32 LxRunOfflineShellExt.dll
```

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201031008388.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201031008388.png)

此操作是把 LxRunOffline 快速启动 wsl 添加到右键菜单，

**其实没什么大用**

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201031011188.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201031011188.png)

# 下载 ArchLinux BootStrap

这里给的链接是阿里云的

**[http://mirrors.aliyun.com/archlinux/iso/2022.01.01/iso/](http://mirrors.aliyun.com/archlinux/iso/)**

因为 ArchLinux 的更新速度一般很快，所以就直接去找最新日期的版本就行

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201031002436.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201031002436.png)

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201031003288.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201031003288.png)

# 创建安装目录

选择一个你觉得方便管理的目录，该工具会把 wsl 安装在这里 比如我选择了

```powershell
c:/Users/skywalkerch/software/Wsl/ArchLinux
```

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201031018215.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201031018215.png)

> 虽然说把 wsl 安装在这里了，但是这里只有一个虚拟磁盘文件，想要访问子系统的目录还是得在子系统内部输入explore.exe ./
> 

# 开始安装

- 在 powershell 中用**管理员权限**执行以下命令

```powershell
LxRunOffline i -n <ArchLinux的命名> -d <wsl的安装路径> -f <ArchLinux.tar.gz下载路径>  -r root.x86_64
```

- **安装成功之后需要执行转换到 wsl2 命令**

```powershell
wsl --set-version <ArchLinux的命名> 2
```

否则会出现

```powershell
kernel too old报错
```

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201012257048.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201012257048.png)

现在就可以进入 ArchLinux 子系统内部 进入命令

- 在**powershell**中输入

```powershell
wsl -d <ArchLinux的命名>
```

进去之后需要做一些事

- 在**ArchLinux**内输入

```powershell
rm /etc/resolv.conf #删除resolve.conf
```

> rosolv.conf 是各种操作系统中使用的计算机文件的名称，用于配置系统的域名系统（DNS）解析器。 该文件是通常由网络管理员或管理系统配置任务的应用程序创建的纯文本文件。 resolveconf 程序是 FreeBSD 或其他 UNIX 计算机上的一个这样的程序，该程序管理 resolv.conf 文件。
> 
- 接着关闭 ArchLinux 的终端窗口并在**powershell**中输入

```powershell
wsl --shutdown <ArchLinux的命名`> ##重启ArchLinux
wsl -d <ArchLinux的命名> #再次进入子系统
```

- 在**ArchLinux**中输入

```bash
explorer.exe ./ #弹出网络目录浏览器
```

找到并修改

```bash
/etc/pacman.d/mirrorlist
```

，随便取消一个中国的镜像源注释

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201031050603.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201031050603.png)

- 然后更新镜像源并下载一些必要软件包

```bash
pacman -Syyu
pacman-key --init
pacman-key --populate
pacman -S base base-devel vim git wget nano sudo glibc
```

- 创建新用户

```bash
useradd -m -G wheel -s /bin/bash <用户名>
passwd <用户名>
visudo ##修改用户以及用户组的sudo权限
id -u <用户名> #获取账户的id号
```

配置用户 sudo 权限和免密操作

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201031333345.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201031333345.png)

- wsl 设置默认登录用户

```powershell
lxrunoffline su -n <你的arch名字> -v <账户id>
```

# 开始 ArchLinux 的折腾之旅

```powershell
#接下来就可以在ArchLinux中安装这些工具软件了
yay
vimplus
doom-emacs
oh-my-zsh+powerline10k
jdk
```