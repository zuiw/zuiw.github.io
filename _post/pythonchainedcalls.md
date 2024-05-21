---
date: 2024-05-20
title: Python链式调用：优雅的编程风格
author: 吴宇晨
tags: Python
---


链式调用是一种编程风格，通过连续调用对象的方法，可以简化代码、提高可读性。在Python中，链式调用常用于构建流畅的API、配置对象或实现一系列的数据处理操作。本文将深入介绍Python链式调用的概念、原理以及实际应用，通过丰富的示例代码，帮助读者更全面地理解和应用这一编程技巧。

## 1. 链式调用的基本概念

### 1.1 什么是链式调用？

链式调用是一种通过连续调用对象的方法，使得代码可读性更强、结构更清晰的编程风格。在链式调用中，每个方法的返回值通常是一个包含了其他方法的对象，这样就可以在单一的表达式中完成多个操作。

### 1.2 链式调用的原理

链式调用的原理在于每个方法都返回调用它的对象，这样就可以在返回的对象上继续调用其他方法。这要求每个方法都要在执行完自己的操作后返回一个新的对象，以保证链式调用的连贯性。

## 2.示例

```py

class calculator:
    def __init__(self, num):
        self.num = num

    def add(self, num):
        self.num += num
        return self

    def subtract(self, num):
        self.num -= num
        return self

    def multiply(self, num):
        self.num *= num
        return self

    def divide(self, num):
        self.num /= num
        return self

    def calc(self):
        return self.num


# 创建一个calculator对象
calc = calculator(10)

# 使用链式调用计算结果
result = calc.add(5).subtract(2).multiply(2).divide(2).calc()

print(result)  # 输出结果为15

```

## 3. 实际应用

### 3.1 构建流畅的API

在Python中，链式调用常用于构建流畅的API，使得代码可读性更强、结构更清晰。例如，可以使用链式调用实现一个文件操作的类，该类提供一系列方法，如打开文件、读取文件内容、写入文件内容等，使得调用者可以以流畅的方式操作文件。

```py

class File:
    def __init__(self, filename):
        self.filename = filename

    def open(self):
        self.file = open(self.filename, "r")
        return self

    def read(self):
        self.content = self.file.read()
        return self

    def write(self, content):
        self.file.write(content)
        return self

    def close(self):
        self.file.close()
        return self


# 使用链式调用操作文件
file = File("example.txt").open().read().content
print(file)  # 输出文件内容

```

### 3.2 配置对象

链式调用还可以用于配置对象，使得调用者可以以流畅的方式设置对象的属性。例如，可以使用链式调用实现一个配置对象的类，该类提供一系列方法，如设置属性值、获取属性值等，使得调用者可以以流畅的方式配置对象。

```py

class Config:
    def __init__(self):
        self.config = {}

    def set(self, key, value):
        self.config[key] = value
        return self

    def get(self, key):
        return self.config.get(key)


# 使用链式调用配置对象
config = Config().set("name", "John").set("age", 25).get("name")
print(config)  # 输出配置对象的属性值

```

## 4.总结

Python链式调用是一种优雅的编程风格，通过连续调用对象的方法，使得代码结构更清晰、可读性更强。本文通过构建链式调用的类、实际应用场景和数据处理示例，详细介绍了链式调用的基本概念、原理以及在实际项目中的应用。链式调用可以用于构建流畅的API、优雅的配置对象以及简化数据处理操作，是Python中一个强大且常用的编程技巧。希望通过本文的介绍，大家能够更深入地理解和应用Python链式调用，写出更具可读性和可维护性的代码。

---

## 参考资料

[Python链式调用：优雅的编程风格](https://blog.csdn.net/wuShiJingZuo/article/details/134410935)
