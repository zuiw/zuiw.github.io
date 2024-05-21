---
date: 2024-05-18
title: 解决打不开github的问题
author: 吴宇晨
tag: github
---

因为github的服务器在外国，所以有时候打不开github，解决办法有两个

1. 修改hosts文件
2. 刷新DNS缓存

## 修改hosts文件

在Windows系统中，hosts文件位于C:\Windows\System32\drivers\etc\hosts

在Linux系统中，hosts文件位于/etc/hosts，即```sudo vim /etc/hosts```
    
在Mac系统中，hosts文件位于/private/etc/hosts，即```sudo vim /private/etc/hosts```

在文件末尾添加以下内容

```
140.82.113.4 github.com
199.232.69.194 github.global.ssl.fastly.net
185.199.108.153 assets-cdn.github.com
185.199.109.153 assets-cdn.github.com
185.199.110.153 assets-cdn.github.com
185.199.111.153 assets-cdn.github.com
```

## 刷新DNS缓存

如果修改了hosts文件，但是仍然无法访问github，可以尝试刷新DNS缓存。

在Windows系统中，可以使用命令```ipconfig /flushdns```来刷新DNS缓存。

在Linux系统中，可以使用命令```sudo systemctl restart NetworkManager```来刷新DNS缓存。

在Mac系统中，可以使用命令```sudo killall -HUP mDNSResponder```来刷新DNS缓存。

## 参考资料

[解决打不开github的问题](https://blog.csdn.net/weixin_43804496/article/details/131475204)