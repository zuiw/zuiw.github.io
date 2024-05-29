---
date: 2024-05-29
title: 模块
author: 吴宇晨
---

今天来介绍C++20引入的`模块 (module)`。

## 模块

模块是C++20引入的一个新特性，它允许将代码组织成独立的单元，并可以在不同的项目中使用。模块可以包含头文件、源文件和实现文件，并且可以被其他模块导入和使用。

在具体介绍模块之前，我们先来了解一个概念：

### 模块单元（Module Unit）

C++中的基本编译单元称为“翻译单元（即translation unit）”。一个翻译单元由一个源文件和该源文件所直接或间接包括的头文件的内容组成。C++20中的模块是一种新的翻译单元，称为模块单元。

好的，接下来让我们来介绍模块的用法。

## 编译模块

模块单元文件的后缀名通常都是`cppm`，例如`my_module.cppm`。在编译模块单元时，可以使用`c++20`命令行选项来指定编译器使用C++20模块功能。例如，可以使用以下命令来编译`my_module.cppm`：

```bash
clang -std=c++20 -c my_module.cppm
```

编译完成后，会生成一个`.o`文件和一个`.pcm`文件。`.o`文件是模块单元的实现文件，`.pcm`文件是模块单元的接口文件。

## 声明模块单元

### 定义模块接口单元

要创建一个模块，可以使用`module`关键字来声明一个模块单元，用`export`关键字导出模块单元。例如，下面的代码创建了一个名为`my_module`的模块单元：

```cpp
// my_module.cppm
export module my_module;

void foo() { // 这个方法不会被导出
    std::cout << "foo" << std::endl;
}

export void bar() {
    std::cout << "bar" << std::endl;
}


//当需要导出的C++实体太多时，不必一一指定，可以在下面的大括号中统一指定
export {
    int value;
    
    void n() {
        std::cout << "n" << std::endl;
    }
    
    void b() {
        std::cout << "b" << std::endl;
    }
}
```

### 定义模块实现单元

模块实现单元只提供定义。

```cpp
module my_module; // 这样定义的
```

### 定义模块分区

当模块的规模过大时，可以将大模块划分为多个模块分区

```cpp
export module my_module::part1; // 给模块my_module定义模块分区part1

void foo() {
    std::cout << "foo" << std::endl;
}

module my_module::part2; // 给模块my_module::part1定义模块分区part2

export void bar() {
    std::cout << "bar" << std::endl;
}
```

## 导入模块单元

### 导入其他模块

使用`import`关键字导入模块单元，例如：

```cpp
import module my_module;

int main() {
    my_module::foo();
    my_module::bar();
    return 0;
}
```

### 导入C++传统头文件

C++标准允许我们通过import关键字来导入传统头文件。

```cpp
import <iostream>

int main() {
    std::cout << "Hello, world!" << std::endl;
    return 0;
}
```

## 模块使用限制

export不能导出具有内部链接的C++实体，静态变量、函数以及定义在匿名命名空间中的类、变量、函数皆具有内部链接。

```cpp
// my_module.cppm

export module myModule;
//静态变量，函数具有内部链接
export static int data = 1; 
export static void function() {} 
 
//匿名命名空间具有内部链接
namespace {
    export class Demo {} 
}
```

```cpp
// main.cpp

import myModule;
int main() { 
    std::cout << data << "\n"; // error: 'data' was not declared in this scope
    function();            // error: 'function' was not declared in this scope
    Demo d;                // error: 'Demo' was not declared in this scope
}
```

---

# 参考文献

[一文读懂C++20 新特性之module（模块）](https://blog.csdn.net/Jxianxu/article/details/127499762)

[Modules (since C++20) - cppreference.com](https://en.cppreference.com/w/cpp/language/modules)

[cxx-modules - GCC Wiki](https://gcc.gnu.org/wiki/cxx-modules)