---
date: 2024-05-20
title: C++关键字auto
author: 吴宇晨
tag: C++
---

### 关键字auto

auto是C++11新引入的关键字，用于自动推导变量类型。

使用auto声明变量时，编译器会根据初始化的值来推导变量的类型。

例如，以下代码声明了一个变量x，并将其初始化为10，编译器会根据初始值10的类型（int）来推导出x的类型也是int。

```cpp
auto x = 10;
```
  
使用auto声明变量时，可以省略变量类型，让编译器自动推导。

例如，以下代码声明了一个变量y，并将其初始化为字符串"hello"，编译器会根据初始值"hello"的类型（const char\*）来推导出y的类型也是const char\*。

```cpp
auto y = "hello";
```

auto关键字还可以用于函数的返回值类型，让编译器自动推导出返回值的类型。

例如，以下代码定义了一个函数add，该函数接收两个整数参数，并返回它们的和。编译器会根据返回值的类型（int）来推导出add的返回值类型也是int。

```cpp
auto add(int a, int b) {
    return a + b;
}
```

使用auto关键字还可以用于函数的参数类型，让编译器自动推导出参数的类型。

例如，以下代码定义了一个函数print，该函数接收一个整数参数，并打印出该整数。编译器会根据参数的类型（int）来推导出print的参数类型也是int。

```cpp
void print(auto x) {
    std::cout << x << std::endl;
}
```

需要注意的是，auto关键字只能用于声明变量，不能用于声明常量。如果需要声明常量，可以使用关键字const。

例如，以下代码声明了一个常量x，并将其初始化为10。编译器会根据初始值10的类型（int）来推导出x的类型也是int，并且x的值不能被修改。

```cpp
const auto x = 10;
```

使用auto关键字还可以用于声明指针。例如，以下代码声明了一个指针p，并将其初始化为一个整数数组。编译器会根据初始值数组的类型（int\*）来推导出p的类型也是int\*。

```cpp
auto p = new int[10];
```

需要注意的是，auto关键字只能用于声明变量，不能用于声明引用。如果需要声明引用，可以使用关键字引用。

例如，以下代码声明了一个引用r，并将其初始化为一个整数数组。编译器会根据初始值数组的类型（int\&）来推导出r的类型也是int\&。

```cpp
auto& r = p;
```

还有就是auto可以用于Range-Based循环。

例如

```cpp
for(auto& i : vec) {
    std::cout << i << std::endl;
}
```

对比正常的循环。

```cpp
for(std::vector<int>::iterator itr = vec.begin(); itr != vec.end(); itr++) {
    std::cout << *itr << std::endl;
}
```

可以看到也是简便了许多。

## 总结

auto关键字是C++11新引入的关键字，用于自动推导变量类型。使用auto关键字可以简化代码，提高代码可读性。

需要注意的是，auto关键字只能用于声明变量，不能用于声明常量、指针和引用。如果需要声明常量、指针和引用，可以使用关键字const、指针和引用。

使用auto关键字还可以用于Range-Based循环。

---

## 参考

[C++ auto用法及应用详解](https://blog.csdn.net/weixin_43744293/article/details/117440727)

[C++11新特性之基本范围的For循环（range-based-for）](https://blog.csdn.net/hailong0715/article/details/54172848)
