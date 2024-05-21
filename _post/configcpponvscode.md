---
date: 2024-05-19
title: 在VSCode上配置C++开发环境
author: 吴宇晨
tag: C++
---

## 安装g++编译器

如果是在Windows上，可以使用[MinGW](https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win64/Personal%20Builds/mingw-builds/8.1.0/threads-posix/seh/x86_64-8.1.0-release-posix-seh-rt_v6-rev0.7z/download)来安装MinGW编译器。
下载之后，解压到任意目录，并将解压后的bin目录添加到环境变量PATH中。至于如何添加环境变量，[请点击这里](https://zhuanlan.zhihu.com/p/231668109)。

如果是在Linux上，可以使用`sudo apt-get install g++`来安装g++编译器。

在命令行中输入`g++ --version`，如果出现g++的版本信息，则表示安装成功。

## 安装扩展

在VSCode中，可以通过扩展来提供C++开发的功能和工具。
在VSCode的扩展市场搜索并安装`C/C++`扩展。

想要编译运行C++程序，还需安装`Code Runner`扩展。
![code runner](https://zuiw.github.io/image/code-runner.png)

安装完成后，重启VSCode。

## 配置任务

在VSCode的设置中，找到`Tasks: Configure Task Runner`，点击`+`号，选择`C/C++: g++.exe build active file`，并填写相应的配置信息。

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "build and run",
            "type": "shell",
            "command": "g++",
            "args": [
                "-g",
                "${file}",
                "-o",
                "${fileDirname}/${fileBasenameNoExtension}"
            ],
            "group": {
                "kind": "build",
                "isDefault": true
            }
        }
    ]
}
```

保存配置后，在VSCode的命令面板中输入`task`，选择`build and run`，即可编译并运行C++程序。
