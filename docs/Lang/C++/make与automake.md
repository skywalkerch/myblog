---
title: make与automake
---
# make概述

make工程管理器起到了自动编译的作用，这里的自动是它能自动根据文件时间戳发现那个文件更新过，这样便大大减少了编译工作量

# makefile语法

## 规则语法

```makefile
目标文件:依赖文件
        编译命令
```

eg:

```makefile
a.out:main.o m.o
	    gcc  main.o m.o
main.o: main.c bank.h 
	    gcc -c main.c
m.o: m.c bank.h
	   gcc -c m.c 
```

## 使用makefile

```bash
make -f makefile filepath target
```

```bash
make -f makefile ./ a.out
```

## makefile文件中的变量

变量名可以包含字符，数字，下划线，但不能包含 `:` `#` `=` `Enter` `Backspace` ...

```makefile
变量名=字符串
C=-c
main.o:main.c bank.h
       gcc $(C) main.c
```

## makefile中常用默认变量

| 变量名 | 变量的作用 |
| --- | --- |
| RM | 删除文件的命令，默认值为rm -rf |
| $+ | 所有的依赖文件，不去除重复的依赖目标 |
| $^ | 所有的依赖文件，去除重复的依赖目标 |
| $< | 表示第一个依赖文件 |
| $? | 所有的依赖文件，以空格隔开，这些依赖文件比目标还要新 |
| $@ | 表示目标文件 |
| $% | 仅当目标是函数库文件中，表示规则中的目标成员名。例如：目标是静态库文件f.a，那么$%表示库文件成员，比如m.o sort.o等。若不是函数库文件，其值为空。 |