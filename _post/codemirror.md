---
date: 2024-05-23
title: 用CodeMirror打造一个自己的代码编辑器
author: 吴宇晨
tag: web
---

今天我来 分享一下如何用CodeMirror打造一个自己的代码编辑器。

<!--more-->

## 什么是CodeMirror

CodeMirror是一个JavaScript的代码编辑器，它具有丰富的功能和灵活性，可以用于各种编程语言的代码编辑。

## 使用

新建一个index.html文件。然后引入CodeMirror的CSS和JavaScript文件。

```html
<!-- 主要的 -->
<script src="https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/codemirror.min.js"></script>
<link href="https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/codemirror.min.css" rel="stylesheet">

<!-- 折叠用的 -->
<link href="https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/addon/fold/foldgutter.css" rel="stylesheet">
<script src="https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/addon/fold/foldcode.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/addon/fold/foldgutter.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/addon/fold/brace-fold.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/addon/fold/comment-fold.js"></script>

<!-- 括号匹配用的 -->
<script src="https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/addon/edit/matchbrackets.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/addon/edit/closebrackets.js"></script>

<!-- 语言 -->
<script src="https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/mode/clike/clike.min.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/mode/python/python.min.js"></script>

<!-- 主题 -->
<link href="https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/theme/dracula.min.css" rel="stylesheet">
<link href="https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/theme/material.min.css" rel="stylesheet">
```
    
新建一个`textarea`元素，并设置`id`为`code`。

```html
<textarea id="code"></textarea>
```

然后，初始化CodeMirror。

```javascript
// 初始化
var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
            lineWrapping: true, // 是否自动换行
            indentWithTabs: true, // 是否使用制表符进行缩进
            indentUnit: 4, // 缩进单位，默认为2
            smartIndent: true, // 是否智能缩进
            lineNumbers: true, // 是否显示行号
            foldGutter: true, // 是否显示折叠图标
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"], // 设置 gutters
            mode: "text/x-c++src", // 设置代码模式
            theme: "dracula", // 设置主题
            matchBrackets: true, // 是否匹配括号
            closeBrackets: true, // 是否自动闭合括号
            autoCloseBrackets: true, // 是否自动闭合括号
        });
```

现在新建一个style.css文件，用于自定义样式。

```css
.CodeMirror {
    width: 100%;
    height: 100%;
    font-size: 16px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    resize: none;
    background-color: #f9f9f9;
    color: #333;
    font-family: Consolas, 'Courier New', monospace;
    line-height: 1.6;
    outline: none;
}
```

然后，在index.html文件中引入style.css文件。

```html
<link rel="stylesheet" href="style.css">
```

现在，你的代码编辑器已经基本完成了。你可以尝试输入一些代码，并尝试各种功能。

## 效果

![image](https://zuiw.github.io/image/code-mirror.png)

## 总结

CodeMirror是一个功能强大的代码编辑器，它具有丰富的功能和灵活性，可以用于各种编程语言的代码编辑。通过使用CodeMirror，你可以轻松地创建一个自定义的代码编辑器。