---
date: 2024-05-26
title: 上传npm包
author: 吴宇晨
tag: npm
---

今天我来教大家怎么创建一个自己的npm包。

## 1.创建一个npm账号

打开[npm官网](https://www.npmjs.com/)，点击右上角的`Sign up`按钮，注册一个账号。

## 2.编写代码

创建一个文件夹，例如`my-package`，在该文件夹下创建一个`index.js`文件，然后在该文件中编写代码。

例如：

```js
// index.js

function hello() {
  console.log('Hello, World!');
}

module.exports = hello;
```

## 3.发布npm包

在命令行中进入`my-package`文件夹，运行以下命令：
```bash
npm login
```

然后他会打开一个网页，跟着他的指示完成注册就可以了。

完成后，创建一个`package.json`的文件，然后输入一下字符

```json
{
  "name": "my-package", // 替换为包的名称
  "version": "1.0.0", // 版本号
  "description": "My first npm package", // 描述
  "main": "index.js", // 入口文件
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"  // 不用管
  },
  "keywords": [], // 关键词
  "author": "", // 作者全名
  "license": "ISC" // 许可证
}
```

完成后，运行以下命令：

```bash
npm publish
```

## 4.安装npm包

在命令行中运行以下命令：

```bash
npm install my-package
```

然后你就可以在你的代码中使用`my-package`这个包了。

## 5.更新npm包

当你更新了`my-package`这个包后，你可以在`package.json`中更新版本号，然后重新发布。

## 6.删除npm包

当你不再需要`my-package`这个包时，你可以在npm官网中删除它。

## 7.总结

通过以上步骤，你已经成功创建并发布了你的第一个npm包。

---

## 8.参考

- [npm官网](https://www.npmjs.com/)
- [npm文档](https://docs.npmjs.com/)
- [如何创建一个npm包](https://www.npmjs.com/package/create-npm-package)
- [如何发布一个npm包](https://www.npmjs.com/package/publish-npm-package)