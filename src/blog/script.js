let posts = [];

posts.push({
	date: '2024-05-18', 
	title: '解决打不开github的问题', 
	author: '吴宇晨', 
	content: marked('\n'+
'\n'+
'因为github的服务器在外国，所以有时候打不开github，解决办法有两个\n'+
'\n'+
'1. 修改hosts文件\n'+
'2. 刷新DNS缓存\n'+
'\n'+
'## 修改hosts文件\n'+
'\n'+
'在Windows系统中，hosts文件位于C:\Windows\System32\drivers\etc\hosts\n'+
'\n'+
'在Linux系统中，hosts文件位于/etc/hosts，即```sudo vim /etc/hosts```\n'+
'    \n'+
'在Mac系统中，hosts文件位于/private/etc/hosts，即```sudo vim /private/etc/hosts```\n'+
'\n'+
'在文件末尾添加以下内容\n'+
'\n'+
'```\n'+
'140.82.113.4 github.com\n'+
'199.232.69.194 github.global.ssl.fastly.net\n'+
'185.199.108.153 assets-cdn.github.com\n'+
'185.199.109.153 assets-cdn.github.com\n'+
'185.199.110.153 assets-cdn.github.com\n'+
'185.199.111.153 assets-cdn.github.com\n'+
'```\n'+
'\n'+
'## 刷新DNS缓存\n'+
'\n'+
'如果修改了hosts文件，但是仍然无法访问github，可以尝试刷新DNS缓存。\n'+
'\n'+
'在Windows系统中，可以使用命令```ipconfig /flushdns```来刷新DNS缓存。\n'+
'\n'+
'在Linux系统中，可以使用命令```sudo systemctl restart NetworkManager```来刷新DNS缓存。\n'+
'\n'+
'在Mac系统中，可以使用命令```sudo killall -HUP mDNSResponder```来刷新DNS缓存。\n'+
'\n'+
'## 参考资料\n'+
'\n'+
'[解决打不开github的问题](https://blog.csdn.net/weixin_43804496/article/details/131475204)\n')
});

posts.push({
	date: '2024-05-19', 
	title: '在VSCode上配置C++开发环境', 
	author: '吴宇晨', 
	content: marked('\n'+
'\n'+
'## 安装g++编译器\n'+
'\n'+
'如果是在Windows上，可以使用[MinGW](https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win64/Personal%20Builds/mingw-builds/8.1.0/threads-posix/seh/x86_64-8.1.0-release-posix-seh-rt_v6-rev0.7z/download)来安装MinGW编译器。\n'+
'下载之后，解压到任意目录，并将解压后的bin目录添加到环境变量PATH中。至于如何添加环境变量，[请点击这里](https://zhuanlan.zhihu.com/p/231668109)。\n'+
'\n'+
'如果是在Linux上，可以使用`sudo apt-get install g++`来安装g++编译器。\n'+
'\n'+
'在命令行中输入`g++ --version`，如果出现g++的版本信息，则表示安装成功。\n'+
'\n'+
'## 安装扩展\n'+
'\n'+
'在VSCode中，可以通过扩展来提供C++开发的功能和工具。\n'+
'在VSCode的扩展市场搜索并安装`C/C++`扩展。\n'+
'\n'+
'想要编译运行C++程序，还需安装`Code Runner`扩展。\n'+
'![code runner](https://zuiw.github.io/image/code-runner.png)\n'+
'\n'+
'安装完成后，重启VSCode。\n'+
'\n'+
'## 配置任务\n'+
'\n'+
'在VSCode的设置中，找到`Tasks: Configure Task Runner`，点击`+`号，选择`C/C++: g++.exe build active file`，并填写相应的配置信息。\n'+
'\n'+
'```json\n'+
'{\n'+
'    "version": "2.0.0",\n'+
'    "tasks": [\n'+
'        {\n'+
'            "label": "build and run",\n'+
'            "type": "shell",\n'+
'            "command": "g++",\n'+
'            "args": [\n'+
'                "-g",\n'+
'                "${file}",\n'+
'                "-o",\n'+
'                "${fileDirname}/${fileBasenameNoExtension}"\n'+
'            ],\n'+
'            "group": {\n'+
'                "kind": "build",\n'+
'                "isDefault": true\n'+
'            }\n'+
'        }\n'+
'    ]\n'+
'}\n'+
'```\n'+
'\n'+
'保存配置后，在VSCode的命令面板中输入`task`，选择`build and run`，即可编译并运行C++程序。\n'+
'\n')
});

posts.push({
	date: '2024-05-20', 
	title: 'C++关键字auto', 
	author: '吴宇晨', 
	content: marked('\n'+
'\n'+
'### 关键字auto\n'+
'\n'+
'auto是C++11新引入的关键字，用于自动推导变量类型。\n'+
'\n'+
'使用auto声明变量时，编译器会根据初始化的值来推导变量的类型。\n'+
'\n'+
'例如，以下代码声明了一个变量x，并将其初始化为10，编译器会根据初始值10的类型（int）来推导出x的类型也是int。\n'+
'\n'+
'```cpp\n'+
'auto x = 10;\n'+
'```\n'+
'  \n'+
'使用auto声明变量时，可以省略变量类型，让编译器自动推导。\n'+
'\n'+
'例如，以下代码声明了一个变量y，并将其初始化为字符串"hello"，编译器会根据初始值"hello"的类型（const char\*）来推导出y的类型也是const char\*。\n'+
'\n'+
'```cpp\n'+
'auto y = "hello";\n'+
'```\n'+
'\n'+
'auto关键字还可以用于函数的返回值类型，让编译器自动推导出返回值的类型。\n'+
'\n'+
'例如，以下代码定义了一个函数add，该函数接收两个整数参数，并返回它们的和。编译器会根据返回值的类型（int）来推导出add的返回值类型也是int。\n'+
'\n'+
'```cpp\n'+
'auto add(int a, int b) {\n'+
'    return a + b;\n'+
'}\n'+
'```\n'+
'\n'+
'使用auto关键字还可以用于函数的参数类型，让编译器自动推导出参数的类型。\n'+
'\n'+
'例如，以下代码定义了一个函数print，该函数接收一个整数参数，并打印出该整数。编译器会根据参数的类型（int）来推导出print的参数类型也是int。\n'+
'\n'+
'```cpp\n'+
'void print(auto x) {\n'+
'    std::cout << x << std::endl;\n'+
'}\n'+
'```\n'+
'\n'+
'需要注意的是，auto关键字只能用于声明变量，不能用于声明常量。如果需要声明常量，可以使用关键字const。\n'+
'\n'+
'例如，以下代码声明了一个常量x，并将其初始化为10。编译器会根据初始值10的类型（int）来推导出x的类型也是int，并且x的值不能被修改。\n'+
'\n'+
'```cpp\n'+
'const auto x = 10;\n'+
'```\n'+
'\n'+
'使用auto关键字还可以用于声明指针。例如，以下代码声明了一个指针p，并将其初始化为一个整数数组。编译器会根据初始值数组的类型（int\*）来推导出p的类型也是int\*。\n'+
'\n'+
'```cpp\n'+
'auto p = new int[10];\n'+
'```\n'+
'\n'+
'需要注意的是，auto关键字只能用于声明变量，不能用于声明引用。如果需要声明引用，可以使用关键字引用。\n'+
'\n'+
'例如，以下代码声明了一个引用r，并将其初始化为一个整数数组。编译器会根据初始值数组的类型（int\&）来推导出r的类型也是int\&。\n'+
'\n'+
'```cpp\n'+
'auto& r = p;\n'+
'```\n'+
'\n'+
'还有就是auto可以用于Range-Based循环。\n'+
'\n'+
'例如\n'+
'\n'+
'```cpp\n'+
'for(auto& i : vec) {\n'+
'    std::cout << i << std::endl;\n'+
'}\n'+
'```\n'+
'\n'+
'对比正常的循环。\n'+
'\n'+
'```cpp\n'+
'for(std::vector<int>::iterator itr = vec.begin(); itr != vec.end(); itr++) {\n'+
'    std::cout << *itr << std::endl;\n'+
'}\n'+
'```\n'+
'\n'+
'可以看到也是简便了许多。\n'+
'\n'+
'## 总结\n'+
'\n'+
'auto关键字是C++11新引入的关键字，用于自动推导变量类型。使用auto关键字可以简化代码，提高代码可读性。\n'+
'\n'+
'需要注意的是，auto关键字只能用于声明变量，不能用于声明常量、指针和引用。如果需要声明常量、指针和引用，可以使用关键字const、指针和引用。\n'+
'\n'+
'使用auto关键字还可以用于Range-Based循环。\n'+
'\n'+
'---\n'+
'\n'+
'## 参考\n'+
'\n'+
'[C++ auto用法及应用详解](https://blog.csdn.net/weixin_43744293/article/details/117440727)\n'+
'\n'+
'[C++11新特性之基本范围的For循环（range-based-for）](https://blog.csdn.net/hailong0715/article/details/54172848)\n'+
'\n')
});

posts.push({
	date: '2024-05-15', 
	title: '我的网站的第一篇博客', 
	author: '吴宇晨', 
	content: marked('\n'+
'\n'+
'\n'+
'# 2024.5.13\n'+
'\n'+
'## 我的网站的第一篇博客\n'+
'\n'+
'### 欢迎来到我的网站\n'+
'\n'+
'### 网站简介\n'+
'\n'+
'这是一个个人网站，用于记录我的学习、生活、工作等。\n'+
'\n'+
'### 网站功能\n'+
'\n'+
'- 记录学习、生活、工作等\n'+
'- 分享知识、经验\n'+
'- 展示个人作品\n'+
'\n'+
'### 网站特色\n'+
'\n'+
'- 简洁美观的设计\n'+
'- 丰富的内容\n'+
'- 易于使用的界面\n'+
'\n'+
'# 网站上面的所有博客文章都是我本人所写，未经许可，禁止转载。\n')
});

posts.push({
	date: '2024-05-18', 
	title: '如何搭建个人博客', 
	author: '吴宇晨', 
	content: marked('\n'+
'\n'+
'# 如何用Github Page 搭建个人博客\n'+
'\n'+
'此教程参考[Github Page 搭建个人博客](https://pianfan.github.io/build_own_website/)\n'+
'\n'+
'## Step 0. 准备工作\n'+
'\n'+
'利用 GitHub Pages 免费获取你自己的网站域名只需要一个先决条件：拥有你自己的 github 账号。如果你目前还没有，可以去 [GitHub 官网](https://github.com/) 注册一个。\n'+
'\n'+
'## Step 1. 创建一个 Github 仓库\n'+
'\n'+
'登录 Github 账号后，点击右上角的 New repository 按钮创建一个仓库。\n'+
'\n'+
'仓库名格式为：`username.github.io`，其中 `username` 是你的 Github 用户名。\n'+
'\n'+
'## Step 2. 编写博客内容\n'+
'\n'+
'在仓库中创建一个名为 `index.html` 的文件，然后将以下内容复制进去：\n'+
'\n'+
'```html\n'+
'<!DOCTYPE html>\n'+
'<html>\n'+
'<head>\n'+
'    <meta charset="utf-8">\n'+
'    <title>Hello World</title>\n'+
'</head>\n'+
'<body>\n'+
'    <h1>Hello World</h1>\n'+
'</body>\n'+
'</html>\n'+
'```\n'+
'\n'+
'想要编写自己的博客网站，必须掌握HTML、CSS、JavaScript等前端技术。\n'+
'\n'+
'推荐使用 [Markdown](https://www.markdownguide.org/getting-started/) 语法来编写博客内容。\n'+
'\n'+
'使用 Markdown 语法编写博客内容后，在仓库中创建一个名为 `_post` 的文件夹，然后在该文件夹中创建一个以 `yyyy-mm-dd-title.md` 格式命名的文件，将博客内容复制进去。\n'+
'\n'+
'例如：\n'+
'\n'+
'```markdown\n'+
'---\n'+
'date: 2024-05-28\n'+
'title: 如何搭建个人博客\n'+
'author: 吴宇晨\n'+
'---\n'+
'\n'+
'# 这是一篇博客\n'+
'```\n'+
'\n'+
'## Step 3. 部署博客\n'+
'\n'+
'点击仓库中的 Settings 按钮，然后向下滚动到 GitHub Pages 部分，点击 Choose a theme 按钮，选择一个你喜欢的主题。\n'+
'\n'+
'然后点击 Save 按钮保存设置。\n'+
'\n'+
'## Step 4. 访问你的博客\n'+
'\n'+
'访问你的博客地址：`https://username.github.io`，其中 `username` 是你的 Github 用户名。\n'+
'\n'+
'## Step 5. 你可以给自己的网站添加可许证\n'+
'\n'+
'如果给自己的网站一个可许证，你就将他开源认证了。\n'+
'不同的可许证有不同的作用，想要一个自己满意的可许证，可以访问 [choosealicense.com](https://choosealicense.com/) 网站来选择。\n'+
'\n'+
'在仓库中创建一个名为 `LICNESE` 的文件。\n'+
'\n'+
'将可许证内容复制进去，然后点击 Save 按钮保存设置。\n'+
'\n'+
'---\n'+
'\n'+
'## 后续步骤\n'+
'恭喜你！读到这里，你已经成功一半了。剩下的那一半，需要你去自己摸索：这个博客仓库里的每一个文件里的每一句代码都有什么意义，该怎么把它玩转？如何改变网页的结构？如何把网页弄成你最喜欢的样式？如何给网站添加更多实用的功能？如何写出高质量高点击率的文章？如何吸引更多的人来到你的博客？如何把你的博客长期经营下去……等等等等。真的想做好个人博客的话，这些问题都是要考虑的。\n'+
'\n'+
'## 参考资料\n'+
'\n'+
'- [Github Page 搭建个人博客](https://pianfan.github.io/build_own_website/)\n'+
'- [Markdown 语法](https://www.markdownguide.org/getting-started/)\n'+
'- [choosealicense.com](https://choosealicense.com/)\n')
});

posts.push({
	date: '2024-05-20', 
	title: 'Python链式调用：优雅的编程风格', 
	author: '吴宇晨', 
	content: marked('\n'+
'\n'+
'\n'+
'链式调用是一种编程风格，通过连续调用对象的方法，可以简化代码、提高可读性。在Python中，链式调用常用于构建流畅的API、配置对象或实现一系列的数据处理操作。本文将深入介绍Python链式调用的概念、原理以及实际应用，通过丰富的示例代码，帮助读者更全面地理解和应用这一编程技巧。\n'+
'\n'+
'## 1. 链式调用的基本概念\n'+
'\n'+
'### 1.1 什么是链式调用？\n'+
'\n'+
'链式调用是一种通过连续调用对象的方法，使得代码可读性更强、结构更清晰的编程风格。在链式调用中，每个方法的返回值通常是一个包含了其他方法的对象，这样就可以在单一的表达式中完成多个操作。\n'+
'\n'+
'### 1.2 链式调用的原理\n'+
'\n'+
'链式调用的原理在于每个方法都返回调用它的对象，这样就可以在返回的对象上继续调用其他方法。这要求每个方法都要在执行完自己的操作后返回一个新的对象，以保证链式调用的连贯性。\n'+
'\n'+
'## 2.示例\n'+
'\n'+
'```py\n'+
'\n'+
'class calculator:\n'+
'    def __init__(self, num):\n'+
'        self.num = num\n'+
'\n'+
'    def add(self, num):\n'+
'        self.num += num\n'+
'        return self\n'+
'\n'+
'    def subtract(self, num):\n'+
'        self.num -= num\n'+
'        return self\n'+
'\n'+
'    def multiply(self, num):\n'+
'        self.num *= num\n'+
'        return self\n'+
'\n'+
'    def divide(self, num):\n'+
'        self.num /= num\n'+
'        return self\n'+
'\n'+
'    def calc(self):\n'+
'        return self.num\n'+
'\n'+
'\n'+
'# 创建一个calculator对象\n'+
'calc = calculator(10)\n'+
'\n'+
'# 使用链式调用计算结果\n'+
'result = calc.add(5).subtract(2).multiply(2).divide(2).calc()\n'+
'\n'+
'print(result)  # 输出结果为15\n'+
'\n'+
'```\n'+
'\n'+
'## 3. 实际应用\n'+
'\n'+
'### 3.1 构建流畅的API\n'+
'\n'+
'在Python中，链式调用常用于构建流畅的API，使得代码可读性更强、结构更清晰。例如，可以使用链式调用实现一个文件操作的类，该类提供一系列方法，如打开文件、读取文件内容、写入文件内容等，使得调用者可以以流畅的方式操作文件。\n'+
'\n'+
'```py\n'+
'\n'+
'class File:\n'+
'    def __init__(self, filename):\n'+
'        self.filename = filename\n'+
'\n'+
'    def open(self):\n'+
'        self.file = open(self.filename, "r")\n'+
'        return self\n'+
'\n'+
'    def read(self):\n'+
'        self.content = self.file.read()\n'+
'        return self\n'+
'\n'+
'    def write(self, content):\n'+
'        self.file.write(content)\n'+
'        return self\n'+
'\n'+
'    def close(self):\n'+
'        self.file.close()\n'+
'        return self\n'+
'\n'+
'\n'+
'# 使用链式调用操作文件\n'+
'file = File("example.txt").open().read().content\n'+
'print(file)  # 输出文件内容\n'+
'\n'+
'```\n'+
'\n'+
'### 3.2 配置对象\n'+
'\n'+
'链式调用还可以用于配置对象，使得调用者可以以流畅的方式设置对象的属性。例如，可以使用链式调用实现一个配置对象的类，该类提供一系列方法，如设置属性值、获取属性值等，使得调用者可以以流畅的方式配置对象。\n'+
'\n'+
'```py\n'+
'\n'+
'class Config:\n'+
'    def __init__(self):\n'+
'        self.config = {}\n'+
'\n'+
'    def set(self, key, value):\n'+
'        self.config[key] = value\n'+
'        return self\n'+
'\n'+
'    def get(self, key):\n'+
'        return self.config.get(key)\n'+
'\n'+
'\n'+
'# 使用链式调用配置对象\n'+
'config = Config().set("name", "John").set("age", 25).get("name")\n'+
'print(config)  # 输出配置对象的属性值\n'+
'\n'+
'```\n'+
'\n'+
'## 4.总结\n'+
'\n'+
'Python链式调用是一种优雅的编程风格，通过连续调用对象的方法，使得代码结构更清晰、可读性更强。本文通过构建链式调用的类、实际应用场景和数据处理示例，详细介绍了链式调用的基本概念、原理以及在实际项目中的应用。链式调用可以用于构建流畅的API、优雅的配置对象以及简化数据处理操作，是Python中一个强大且常用的编程技巧。希望通过本文的介绍，大家能够更深入地理解和应用Python链式调用，写出更具可读性和可维护性的代码。\n'+
'\n'+
'---\n'+
'\n'+
'## 参考资料\n'+
'\n'+
'[Python链式调用：优雅的编程风格](https://blog.csdn.net/wuShiJingZuo/article/details/134410935)\n'+
'\n')
});

