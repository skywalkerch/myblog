---
title: wsl中docker换源
---
今天本来把 ArchLinux 的镜像写进了 U 盘，准备分一块盘然后装双系统，但是又回想起了之前痛苦的经历，又放弃了这个想法，后来就在 windows10 上装上了基于 wsl2 的 ubuntu20.04，在一番艰难折腾下终于成功撞上了 vimplus 和 doom-emacs(别问我为什么要装这两个编辑器，问就是 vim 太难学，准备转 emacs)，

折腾好了之后又觉得似乎少了点什么，wsl2 的 ip 宿主机好像不能访问来着？(**写博客的时候我再一次对这个问题进行了测试，发现现在 wsl2 的 ip 可以直接访问**

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202112292000365.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202112292000365.png)

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202112292002096.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202112292002096.png)

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202112292002594.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202112292002594.png)

**由于作者现在还未学习计算机网络的相关知识，并不能很好的解释清楚这是为什么，寒假过后再来补充原因**)

> WSL2 本身是由 Windows 负责运行的，因此使用 tree 或 ps 命令时会看到根进程不是 systemd，这将导致无法启动 Linux 系统服务的守护进程(deamon)。当我们执行 systemctl 命令的时候，会显示出我们的 init system (PID 1) 并非 systemd，而是微软提供的 /init —-
> 
> 
> [引文链接](https://zhuanlan.zhihu.com/p/419378675)
> 
> ![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/20211229195025.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/20211229195025.png)
> 

也就是说不能通过传统的方法即修改

```bash
/etc/docker/daemon.json
```

文件的方式来给 docker 服务更换镜像源. 但是因为

```bash
docker-desktop
```

可以给 wsl2 提供 docker 引擎组件，

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202112292006229.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202112292006229.png)

跟据我观察发现在 wsl2 中使用

```bash
sudo docker pull mysql
```

命令成功拉取`mysql`镜像后，`mysql` 的镜像其实被保存在了 `docker-desktop` 的默认存储路径，这其实就说明了 wsl2 的 `docker` 完全就是`docker-desktop`本身。

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202112292016044.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202112292016044.png)

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202112292007615.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202112292007615.png)

**因此修改`docker-desktop`设置里面的`json`就能真正更换 docker 的镜像源**

。

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202112292011598.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202112292011598.png)