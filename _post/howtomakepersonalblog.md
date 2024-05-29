---
date: 2024-05-18
title: 如何搭建个人博客
author: 吴宇晨
tag: web
---

# 如何用Github Page 搭建个人博客

此教程参考[Github Page 搭建个人博客](https://pianfan.github.io/build_own_website/)

## Step 0. 准备工作

利用 GitHub Pages 免费获取你自己的网站域名只需要一个先决条件：拥有你自己的 github 账号。如果你目前还没有，可以去 [GitHub 官网](https://github.com/) 注册一个。

## Step 1. 创建一个 Github 仓库

登录 Github 账号后，点击右上角的 New repository 按钮创建一个仓库。

仓库名格式为：`username.github.io`，其中 `username` 是你的 Github 用户名。

## Step 2. 编写博客内容

在仓库中创建一个名为 `index.html` 的文件，然后将以下内容复制进去：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello World</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```

想要编写自己的博客网站，必须掌握HTML、CSS、JavaScript等前端技术。

推荐使用 [Markdown](https://www.markdownguide.org/getting-started/) 语法来编写博客内容。

使用 Markdown 语法编写博客内容后，在仓库中创建一个名为 `_post` 的文件夹，然后在该文件夹中创建一个以 `yyyy-mm-dd-title.md` 格式命名的文件，将博客内容复制进去。

例如：

```markdown
---
date: 2024-05-28
title: 如何搭建个人博客
author: 吴宇晨
---

# 这是一篇博客
```

## Step 3. 部署博客

点击仓库中的 Settings 按钮，然后向下滚动到 GitHub Pages 部分，点击 Choose a theme 按钮，选择一个你喜欢的主题。

然后点击 Save 按钮保存设置。

## Step 4. 访问你的博客

访问你的博客地址：`https://username.github.io`，其中 `username` 是你的 Github 用户名。

## Step 5. 你可以给自己的网站添加可许证

如果给自己的网站一个可许证，你就将他开源认证了。
不同的可许证有不同的作用，想要一个自己满意的可许证，可以访问 [choosealicense.com](https://choosealicense.com/) 网站来选择。

在仓库中创建一个名为 `LICNESE` 的文件。

将可许证内容复制进去，然后点击 Save 按钮保存设置。

---

## 后续步骤
恭喜你！读到这里，你已经成功一半了。剩下的那一半，需要你去自己摸索：这个博客仓库里的每一个文件里的每一句代码都有什么意义，该怎么把它玩转？如何改变网页的结构？如何把网页弄成你最喜欢的样式？如何给网站添加更多实用的功能？如何写出高质量高点击率的文章？如何吸引更多的人来到你的博客？如何把你的博客长期经营下去……等等等等。真的想做好个人博客的话，这些问题都是要考虑的。

## 参考资料

- [Github Page 搭建个人博客](https://pianfan.github.io/build_own_website/)
- [Markdown 语法](https://www.markdownguide.org/getting-started/)
- [choosealicense.com](https://choosealicense.com/)