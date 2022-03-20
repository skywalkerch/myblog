---
title: const与指针
---
# const 修饰指针的三种情况

- const 修饰指针
- const 修饰常量
- const 既修饰指针又修饰常量

# const 修饰指针

特点:

- **常量指针**
- 指针的指向可以更改
- 不能通过常量指针去修改指针所指的内存空间

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201142151535.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201142151535.png)

## 测试指针的指向能否更改

```cpp
#include<iostream>
using namespace  std;
int main(){ 
  //常量指针 
   int i = 10;
   const int* p = &i;  
  //测试常量指针的指向是否能更改    
{  int m = 9;   
   p = &m;
   cout <<*p<<endl;
} 
   return 0;
}
```

```
9
```

## 测试常量指针所指的内存空间能否更改

```cpp
#include<iostream>
using namespace  std;
int main(){
    //常量指针    
    int i = 10;    
    const int* p = &i;   
    //测试常量指针所指的内存空间能否更改    
    *p = 9; //--> 此操作编译器报错     
    return 0;
}
```

```
编译器报错
error C3892: “p”: 不能给常量赋值
```

# const 修饰常量

> 数组名其实就是一个指针常量
> 

特点

- **指针常量**
- 指针的指向不可以改
- 指针所指的内存可以更改

![https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201142154916.png](https://picbed-1303839378.cos.ap-nanjing.myqcloud.com/picbed/202201142154916.png)

## 测试指针指向能否更改

```cpp
#include<iostream>
using namespace  std;
int main(){
    //指针长量    
int i = 10;  
int* const  p = &i;    
//测试能否更改指针指向     
int m = 9;     
p = &m;    
return 0;
}
```

```
编译器报错
: error C3892: “p”: 不能给常量赋值
```

## 测试能否通过指针修改所指的内存空间

```cpp
#include<iostream>
using namespace  std;
int main(){  
  //指针长量    
 int i = 10;     
 int* const  p = &i;   
 //测试常量指针所指的内存空间能否更改    
 *p = 9; //--> 此操作编译器不报错    
 cout << i << endl;   
 return 0;
}
```

```
9
```

# const 既修饰指针又修饰常量

- 指针的指向不可以更改
- 也不能通过指针去修改指针所指的内存空间

## 测试指针指向能否更改

```cpp
#include<iostream>
using namespace  std;
int main(){    
  //双重const   
  int i = 10;  
   const int* const  p = &i;   
  //测试能否通过指针修改所指空间   
  *p = 8; //--->编译器此处报错   
   return 0;}
```

```
error C3892: “p”: 不能给常量赋值
```

## 测试指针指向能否更改

```cpp
#include<iostream>
using namespace  std;
int main(){ 
    //双重const   
    int i = 10; 
    const int* const  p = &i;  
    //测试能否更改指针指向    
    int m = 9; 
    p = &m; //-->编译器报错   
    return 0;
}
```

```
: error C3892: “p”: 不能给常量赋值
```