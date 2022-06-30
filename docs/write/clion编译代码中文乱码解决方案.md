---
title: Clion编译运行时中文乱码解决方案
authors: skywalkerch
---
> 此方案仅在 clion 的编译工具链为 mingw 的环境下测试过！
环境不同则需要选择对应的方案
> 

在 windows 系统中需要保证默认编码是**GBK**，即下图

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201140053064.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201140053064.png)

clion 的控制台其实是一个伪终端，这个伪终端不支持类似中文这种宽字符，所以官方给出的解决方案是将 clion 的`run.processes.with.pty`(一个注册表功能)关掉

![https://pic3.zhimg.com/80/v2-fc9e19127aeb42f6bd204c849f8de6de_720w.jpg](https://pic3.zhimg.com/80/v2-fc9e19127aeb42f6bd204c849f8de6de_720w.jpg)

# **第一步**

将 clion 的`file Encodings`设置全部设置为**`GBK`**

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201140057920.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201140057920.png)

# **第二步**

在 clion 的程序内按快捷键`CTRL SHIFT ALT /`,然后选择`Registry`

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201140059877.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201140059877.png)

将`run.processes.with.pty`的勾选框**取消**勾选

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201140059728.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201140059728.png)

# **第三步**

将项目文件的文件编码转成**GBK**

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201140101012.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201140101012.png)

然后 clion 的控制台就能正常输入中文了

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201140103818.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201140103818.png)

# **参考文章**

[知乎原文](https://zhuanlan.zhihu.com/p/106747225)  
[腾讯云投稿](https://cloud.tencent.com/developer/article/1858478)