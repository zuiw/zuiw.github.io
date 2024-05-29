---
date: 2024-05-22
title: C++20里的Hello,world!
author: 吴宇晨
tag: C++
---

C++ 语言为了保持与 C 语言的兼容性，在语法层面上曾经尽力保持 C-like。但随着越来越多内容被加入到 C++ 中，这一要求也越来越难以实现。最终，C++11 标准的发布彻底改变了 C++ 语言的面貌，其改变之大甚至让 C++11 看起来像一门全新的语言。因此，多把 C++11 后的 C++ 称为“Modern C++”。

而 C++20 则是在 C++11 之后发布的，它引入了更多的 C++ 特性，并致力于让 C++ 语言更加易用。

## 你好，世界！

```cpp
// Hello from C++20

import <iostream>;
using std::cout, std::endl;

auto main() -> int {
    cout << "Hello, world!" << endl;

    int answer {42};
    
    cout << "21 + 21 = "
         << answer << endl;
}

```

### 如何编译

这里只有Windows x64版本的，其他版本请自行编译。

首先得保证有最新的Clang编译器，如果没有，[点击这里](https://github.com/llvm/llvm-project/releases/download/llvmorg-16.0.0/LLVM-16.0.0-win64.exe)下载安装。

然后打开命令行，输入以下命令：

```sh
clang++ -std=c++20 -o hello.exe hello.cpp
```

### 编译器选项

- `-std=c++20` 表示使用C++20标准编译

- `-o hello.exe` 表示将编译后的文件命名为hello.exe

### 运行

在命令行输入以下命令：

```sh
hello.exe
```

### 输出

```cmd
Hello, world!
21 + 21 = 42
```

### 有什么改变

为第一个 C++20 程序，它看起来还是相当地不一样的。

首先注意到的就是 import 语句。C++20 引入了`模块` (Module) 机制，彻底（至少是在理论上）宣告了使用头文件+实现文件组织多文件代码历史的终结。

然而，目前各大编译器对模块机制的支持都不甚完善。为了让代码至少看上去在使用这个新特性，我们使用一种称为`模块映射` (Module Mapping)的机制。这种机制可以将头文件映射为模块。目前我还没有深究模块机制的具体内容，因此这里只是这样用来让代码能跑起来而已。Clang为 libc++ 标准库提供了模块映射，因此只需 import <header>，其中 header 为标准库的头文件名，即可导入对应的头文件映射成的模块。

Clang 也定义了一个模块 std，其包含了整个 C++ 标准库。为了方便兼容更早的版本，我在学习过程中将不会直接导入 std 模块，而是导入各头文件映射的模块。

接下来，注意到一个长得很奇怪的变量定义语句。这是 C++11 引入的`通用初始化` (Universal Initialization，或称 Brace-init) 机制，旨在提供一种统一、安全的初始化方式。具体来说，在 C++11 前，有许多方式都可以初始化一个变量：

```cpp
int n = 0;
Point p = {0, 1};
double f(3.14);
char s1[] = {'H', 'e', 'l' ,'l', 'o', '\0'};
```

而 C++11 之后，则统一使用花括号来初始化变量：

```cpp
int n {0};
Point p {0, 1};
double f {3.14};
char s1[] {'H', 'e', 'l' ,'l', 'o', '\0'};
// 直接指定 vector 内容；这在以前是无法实现的
std::vector<std::string> v {"Alpha", "Beta", "Gamma"};
```

这种机制的优点在于，它统一了初始化的语法，使得初始化过程更加清晰。

同时，通用初始化还加强了安全检查。例如：

```cpp
int f = 1145141919810;
```

在 C++11 之前，上述代码是合法的。但在 C++11 之后，编译器会报错，因为 1145141919810 超过了 int 类型的取值范围。

```cpp
int f {1145141919810};
```

在 C++11 之后，上述代码则会报错，因为 1145141919810 超过了 int 类型的取值范围。

再然后，你可能会注意到，这里的main函数的返回类型是`auto`，但标注成了`int`。这是 C++17 引入的`auto`机制。

在 C++17 之前，函数的返回类型只能使用`void`、`int`、`double`等基本类型。而在 C++17 之后，函数的返回类型也可以使用`auto`，表示返回类型由编译器自行推断。

```cpp
auto main() -> int {
    // ...
}
```

## 参考资料

[来自 C++20 的 "Hello, world!"](https://zhuanlan.zhihu.com/p/463682667)