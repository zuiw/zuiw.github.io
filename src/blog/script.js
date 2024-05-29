let posts = [];

posts.push({
	date: '2024-05-18', 
	title: '解决打不开github的问题', 
	author: '吴宇晨', 
	content: "\n"+
"\n"+
"因为github的服务器在外国，所以有时候打不开github，解决办法有两个\n"+
"\n"+
"1. 修改hosts文件\n"+
"2. 刷新DNS缓存\n"+
"\n"+
"## 修改hosts文件\n"+
"\n"+
"在Windows系统中，hosts文件位于C:\\Windows\\System32\\drivers\\etc\\hosts\n"+
"\n"+
"在Linux系统中，hosts文件位于/etc/hosts，即```sudo vim /etc/hosts```\n"+
"    \n"+
"在Mac系统中，hosts文件位于/private/etc/hosts，即```sudo vim /private/etc/hosts```\n"+
"\n"+
"在文件末尾添加以下内容\n"+
"\n"+
"```\n"+
"140.82.113.4 github.com\n"+
"199.232.69.194 github.global.ssl.fastly.net\n"+
"185.199.108.153 assets-cdn.github.com\n"+
"185.199.109.153 assets-cdn.github.com\n"+
"185.199.110.153 assets-cdn.github.com\n"+
"185.199.111.153 assets-cdn.github.com\n"+
"```\n"+
"\n"+
"## 刷新DNS缓存\n"+
"\n"+
"如果修改了hosts文件，但是仍然无法访问github，可以尝试刷新DNS缓存。\n"+
"\n"+
"在Windows系统中，可以使用命令```ipconfig /flushdns```来刷新DNS缓存。\n"+
"\n"+
"在Linux系统中，可以使用命令```sudo systemctl restart NetworkManager```来刷新DNS缓存。\n"+
"\n"+
"在Mac系统中，可以使用命令```sudo killall -HUP mDNSResponder```来刷新DNS缓存。\n"+
"\n"+
"## 参考资料\n"+
"\n"+
"[解决打不开github的问题](https://blog.csdn.net/weixin_43804496/article/details/131475204)\n"
});

posts.push({
	date: '2024-05-23', 
	title: '用CodeMirror打造一个自己的代码编辑器', 
	author: '吴宇晨', 
	content: "\n"+
"\n"+
"今天我来 分享一下如何用CodeMirror打造一个自己的代码编辑器。\n"+
"\n"+
"<!--more-->\n"+
"\n"+
"## 什么是CodeMirror\n"+
"\n"+
"CodeMirror是一个JavaScript的代码编辑器，它具有丰富的功能和灵活性，可以用于各种编程语言的代码编辑。\n"+
"\n"+
"## 使用\n"+
"\n"+
"新建一个index.html文件。然后引入CodeMirror的CSS和JavaScript文件。\n"+
"\n"+
"```html\n"+
"<!-- 主要的 -->\n"+
"\x3Cscript src=\"https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/codemirror.min.js\">\x3C/script>\n"+
"<link href=\"https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/codemirror.min.css\" rel=\"stylesheet\">\n"+
"\n"+
"<!-- 折叠用的 -->\n"+
"<link href=\"https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/addon/fold/foldgutter.css\" rel=\"stylesheet\">\n"+
"\x3Cscript src=\"https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/addon/fold/foldcode.js\">\x3C/script>\n"+
"\x3Cscript src=\"https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/addon/fold/foldgutter.js\">\x3C/script>\n"+
"\x3Cscript src=\"https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/addon/fold/brace-fold.js\">\x3C/script>\n"+
"\x3Cscript src=\"https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/addon/fold/comment-fold.js\">\x3C/script>\n"+
"\n"+
"<!-- 括号匹配用的 -->\n"+
"\x3Cscript src=\"https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/addon/edit/matchbrackets.js\">\x3C/script>\n"+
"\x3Cscript src=\"https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/addon/edit/closebrackets.js\">\x3C/script>\n"+
"\n"+
"<!-- 语言 -->\n"+
"\x3Cscript src=\"https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/mode/clike/clike.min.js\">\x3C/script>\n"+
"\x3Cscript src=\"https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/mode/python/python.min.js\">\x3C/script>\n"+
"\n"+
"<!-- 主题 -->\n"+
"<link href=\"https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/theme/dracula.min.css\" rel=\"stylesheet\">\n"+
"<link href=\"https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/theme/material.min.css\" rel=\"stylesheet\">\n"+
"```\n"+
"    \n"+
"新建一个`textarea`元素，并设置`id`为`code`。\n"+
"\n"+
"```html\n"+
"<textarea id=\"code\"></textarea>\n"+
"```\n"+
"\n"+
"然后，初始化CodeMirror。\n"+
"\n"+
"```javascript\n"+
"// 初始化\n"+
"var editor = CodeMirror.fromTextArea(document.getElementById(\"editor\"), {\n"+
"            lineWrapping: true, // 是否自动换行\n"+
"            indentWithTabs: true, // 是否使用制表符进行缩进\n"+
"            indentUnit: 4, // 缩进单位，默认为2\n"+
"            smartIndent: true, // 是否智能缩进\n"+
"            lineNumbers: true, // 是否显示行号\n"+
"            foldGutter: true, // 是否显示折叠图标\n"+
"            gutters: [\"CodeMirror-linenumbers\", \"CodeMirror-foldgutter\"], // 设置 gutters\n"+
"            mode: \"text/x-c++src\", // 设置代码模式\n"+
"            theme: \"dracula\", // 设置主题\n"+
"            matchBrackets: true, // 是否匹配括号\n"+
"            closeBrackets: true, // 是否自动闭合括号\n"+
"            autoCloseBrackets: true, // 是否自动闭合括号\n"+
"        });\n"+
"```\n"+
"\n"+
"现在新建一个style.css文件，用于自定义样式。\n"+
"\n"+
"```css\n"+
".CodeMirror {\n"+
"    width: 100%;\n"+
"    height: 100%;\n"+
"    font-size: 16px;\n"+
"    padding: 10px;\n"+
"    border: 1px solid #ccc;\n"+
"    border-radius: 5px;\n"+
"    box-sizing: border-box;\n"+
"    resize: none;\n"+
"    background-color: #f9f9f9;\n"+
"    color: #333;\n"+
"    font-family: Consolas, \'Courier New\', monospace;\n"+
"    line-height: 1.6;\n"+
"    outline: none;\n"+
"}\n"+
"```\n"+
"\n"+
"然后，在index.html文件中引入style.css文件。\n"+
"\n"+
"```html\n"+
"<link rel=\"stylesheet\" href=\"style.css\">\n"+
"```\n"+
"\n"+
"现在，你的代码编辑器已经基本完成了。你可以尝试输入一些代码，并尝试各种功能。\n"+
"\n"+
"## 效果\n"+
"\n"+
"![image](https://zuiw.github.io/image/code-mirror.png)\n"+
"\n"+
"## 总结\n"+
"\n"+
"CodeMirror是一个功能强大的代码编辑器，它具有丰富的功能和灵活性，可以用于各种编程语言的代码编辑。通过使用CodeMirror，你可以轻松地创建一个自定义的代码编辑器。\n"
});

posts.push({
	date: '2024-05-19', 
	title: '在VSCode上配置C++开发环境', 
	author: '吴宇晨', 
	content: "\n"+
"\n"+
"## 安装g++编译器\n"+
"\n"+
"如果是在Windows上，可以使用[MinGW](https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win64/Personal%20Builds/mingw-builds/8.1.0/threads-posix/seh/x86_64-8.1.0-release-posix-seh-rt_v6-rev0.7z/download)来安装MinGW编译器。\n"+
"下载之后，解压到任意目录，并将解压后的bin目录添加到环境变量PATH中。至于如何添加环境变量，[请点击这里](https://zhuanlan.zhihu.com/p/231668109)。\n"+
"\n"+
"如果是在Linux上，可以使用`sudo apt-get install g++`来安装g++编译器。\n"+
"\n"+
"在命令行中输入`g++ --version`，如果出现g++的版本信息，则表示安装成功。\n"+
"\n"+
"## 安装扩展\n"+
"\n"+
"在VSCode中，可以通过扩展来提供C++开发的功能和工具。\n"+
"在VSCode的扩展市场搜索并安装`C/C++`扩展。\n"+
"\n"+
"想要编译运行C++程序，还需安装`Code Runner`扩展。\n"+
"![code runner](https://zuiw.github.io/image/code-runner.png)\n"+
"\n"+
"安装完成后，重启VSCode。\n"+
"\n"+
"## 配置任务\n"+
"\n"+
"在VSCode的设置中，找到`Tasks: Configure Task Runner`，点击`+`号，选择`C/C++: g++.exe build active file`，并填写相应的配置信息。\n"+
"\n"+
"```json\n"+
"{\n"+
"    \"version\": \"2.0.0\",\n"+
"    \"tasks\": [\n"+
"        {\n"+
"            \"label\": \"build and run\",\n"+
"            \"type\": \"shell\",\n"+
"            \"command\": \"g++\",\n"+
"            \"args\": [\n"+
"                \"-g\",\n"+
"                \"${file}\",\n"+
"                \"-o\",\n"+
"                \"${fileDirname}/${fileBasenameNoExtension}\"\n"+
"            ],\n"+
"            \"group\": {\n"+
"                \"kind\": \"build\",\n"+
"                \"isDefault\": true\n"+
"            }\n"+
"        }\n"+
"    ]\n"+
"}\n"+
"```\n"+
"\n"+
"保存配置后，在VSCode的命令面板中输入`task`，选择`build and run`，即可编译并运行C++程序。\n"+
"\n"
});

posts.push({
	date: '2024-05-22', 
	title: 'C++20里的Hello,world!', 
	author: '吴宇晨', 
	content: "\n"+
"\n"+
"C++ 语言为了保持与 C 语言的兼容性，在语法层面上曾经尽力保持 C-like。但随着越来越多内容被加入到 C++ 中，这一要求也越来越难以实现。最终，C++11 标准的发布彻底改变了 C++ 语言的面貌，其改变之大甚至让 C++11 看起来像一门全新的语言。因此，多把 C++11 后的 C++ 称为“Modern C++”。\n"+
"\n"+
"而 C++20 则是在 C++11 之后发布的，它引入了更多的 C++ 特性，并致力于让 C++ 语言更加易用。\n"+
"\n"+
"## 你好，世界！\n"+
"\n"+
"```cpp\n"+
"// Hello from C++20\n"+
"\n"+
"import <iostream>;\n"+
"using std::cout, std::endl;\n"+
"\n"+
"auto main() -> int {\n"+
"    cout << \"Hello, world!\" << endl;\n"+
"\n"+
"    int answer {42};\n"+
"    \n"+
"    cout << \"21 + 21 = \"\n"+
"         << answer << endl;\n"+
"}\n"+
"\n"+
"```\n"+
"\n"+
"### 如何编译\n"+
"\n"+
"这里只有Windows x64版本的，其他版本请自行编译。\n"+
"\n"+
"首先得保证有最新的Clang编译器，如果没有，[点击这里](https://github.com/llvm/llvm-project/releases/download/llvmorg-16.0.0/LLVM-16.0.0-win64.exe)下载安装。\n"+
"\n"+
"然后打开命令行，输入以下命令：\n"+
"\n"+
"```sh\n"+
"clang++ -std=c++20 -o hello.exe hello.cpp\n"+
"```\n"+
"\n"+
"### 编译器选项\n"+
"\n"+
"- `-std=c++20` 表示使用C++20标准编译\n"+
"\n"+
"- `-o hello.exe` 表示将编译后的文件命名为hello.exe\n"+
"\n"+
"### 运行\n"+
"\n"+
"在命令行输入以下命令：\n"+
"\n"+
"```sh\n"+
"hello.exe\n"+
"```\n"+
"\n"+
"### 输出\n"+
"\n"+
"```cmd\n"+
"Hello, world!\n"+
"21 + 21 = 42\n"+
"```\n"+
"\n"+
"### 有什么改变\n"+
"\n"+
"为第一个 C++20 程序，它看起来还是相当地不一样的。\n"+
"\n"+
"首先注意到的就是 import 语句。C++20 引入了`模块` (Module) 机制，彻底（至少是在理论上）宣告了使用头文件+实现文件组织多文件代码历史的终结。\n"+
"\n"+
"然而，目前各大编译器对模块机制的支持都不甚完善。为了让代码至少看上去在使用这个新特性，我们使用一种称为`模块映射` (Module Mapping)的机制。这种机制可以将头文件映射为模块。目前我还没有深究模块机制的具体内容，因此这里只是这样用来让代码能跑起来而已。Clang为 libc++ 标准库提供了模块映射，因此只需 import <header>，其中 header 为标准库的头文件名，即可导入对应的头文件映射成的模块。\n"+
"\n"+
"Clang 也定义了一个模块 std，其包含了整个 C++ 标准库。为了方便兼容更早的版本，我在学习过程中将不会直接导入 std 模块，而是导入各头文件映射的模块。\n"+
"\n"+
"接下来，注意到一个长得很奇怪的变量定义语句。这是 C++11 引入的`通用初始化` (Universal Initialization，或称 Brace-init) 机制，旨在提供一种统一、安全的初始化方式。具体来说，在 C++11 前，有许多方式都可以初始化一个变量：\n"+
"\n"+
"```cpp\n"+
"int n = 0;\n"+
"Point p = {0, 1};\n"+
"double f(3.14);\n"+
"char s1[] = {\'H\', \'e\', \'l\' ,\'l\', \'o\', \'\\0\'};\n"+
"```\n"+
"\n"+
"而 C++11 之后，则统一使用花括号来初始化变量：\n"+
"\n"+
"```cpp\n"+
"int n {0};\n"+
"Point p {0, 1};\n"+
"double f {3.14};\n"+
"char s1[] {\'H\', \'e\', \'l\' ,\'l\', \'o\', \'\\0\'};\n"+
"// 直接指定 vector 内容；这在以前是无法实现的\n"+
"std::vector<std::string> v {\"Alpha\", \"Beta\", \"Gamma\"};\n"+
"```\n"+
"\n"+
"这种机制的优点在于，它统一了初始化的语法，使得初始化过程更加清晰。\n"+
"\n"+
"同时，通用初始化还加强了安全检查。例如：\n"+
"\n"+
"```cpp\n"+
"int f = 1145141919810;\n"+
"```\n"+
"\n"+
"在 C++11 之前，上述代码是合法的。但在 C++11 之后，编译器会报错，因为 1145141919810 超过了 int 类型的取值范围。\n"+
"\n"+
"```cpp\n"+
"int f {1145141919810};\n"+
"```\n"+
"\n"+
"在 C++11 之后，上述代码则会报错，因为 1145141919810 超过了 int 类型的取值范围。\n"+
"\n"+
"再然后，你可能会注意到，这里的main函数的返回类型是`auto`，但标注成了`int`。这是 C++17 引入的`auto`机制。\n"+
"\n"+
"在 C++17 之前，函数的返回类型只能使用`void`、`int`、`double`等基本类型。而在 C++17 之后，函数的返回类型也可以使用`auto`，表示返回类型由编译器自行推断。\n"+
"\n"+
"```cpp\n"+
"auto main() -> int {\n"+
"    // ...\n"+
"}\n"+
"```\n"+
"\n"+
"## 参考资料\n"+
"\n"+
"[来自 C++20 的 \"Hello, world!\"](https://zhuanlan.zhihu.com/p/463682667)\n"+
"\n"
});

posts.push({
	date: '2024-05-20', 
	title: 'C++关键字auto', 
	author: '吴宇晨', 
	content: "\n"+
"\n"+
"### 关键字auto\n"+
"\n"+
"auto是C++11新引入的关键字，用于自动推导变量类型。\n"+
"\n"+
"使用auto声明变量时，编译器会根据初始化的值来推导变量的类型。\n"+
"\n"+
"例如，以下代码声明了一个变量x，并将其初始化为10，编译器会根据初始值10的类型（int）来推导出x的类型也是int。\n"+
"\n"+
"```cpp\n"+
"auto x = 10;\n"+
"```\n"+
"  \n"+
"使用auto声明变量时，可以省略变量类型，让编译器自动推导。\n"+
"\n"+
"例如，以下代码声明了一个变量y，并将其初始化为字符串\"hello\"，编译器会根据初始值\"hello\"的类型（const char\\*）来推导出y的类型也是const char\\*。\n"+
"\n"+
"```cpp\n"+
"auto y = \"hello\";\n"+
"```\n"+
"\n"+
"auto关键字还可以用于函数的返回值类型，让编译器自动推导出返回值的类型。\n"+
"\n"+
"例如，以下代码定义了一个函数add，该函数接收两个整数参数，并返回它们的和。编译器会根据返回值的类型（int）来推导出add的返回值类型也是int。\n"+
"\n"+
"```cpp\n"+
"auto add(int a, int b) {\n"+
"    return a + b;\n"+
"}\n"+
"```\n"+
"\n"+
"使用auto关键字还可以用于函数的参数类型，让编译器自动推导出参数的类型。\n"+
"\n"+
"例如，以下代码定义了一个函数print，该函数接收一个整数参数，并打印出该整数。编译器会根据参数的类型（int）来推导出print的参数类型也是int。\n"+
"\n"+
"```cpp\n"+
"void print(auto x) {\n"+
"    std::cout << x << std::endl;\n"+
"}\n"+
"```\n"+
"\n"+
"需要注意的是，auto关键字只能用于声明变量，不能用于声明常量。如果需要声明常量，可以使用关键字const。\n"+
"\n"+
"例如，以下代码声明了一个常量x，并将其初始化为10。编译器会根据初始值10的类型（int）来推导出x的类型也是int，并且x的值不能被修改。\n"+
"\n"+
"```cpp\n"+
"const auto x = 10;\n"+
"```\n"+
"\n"+
"使用auto关键字还可以用于声明指针。例如，以下代码声明了一个指针p，并将其初始化为一个整数数组。编译器会根据初始值数组的类型（int\\*）来推导出p的类型也是int\\*。\n"+
"\n"+
"```cpp\n"+
"auto p = new int[10];\n"+
"```\n"+
"\n"+
"需要注意的是，auto关键字只能用于声明变量，不能用于声明引用。如果需要声明引用，可以使用关键字引用。\n"+
"\n"+
"例如，以下代码声明了一个引用r，并将其初始化为一个整数数组。编译器会根据初始值数组的类型（int\\&）来推导出r的类型也是int\\&。\n"+
"\n"+
"```cpp\n"+
"auto& r = p;\n"+
"```\n"+
"\n"+
"还有就是auto可以用于Range-Based循环。\n"+
"\n"+
"例如\n"+
"\n"+
"```cpp\n"+
"for(auto& i : vec) {\n"+
"    std::cout << i << std::endl;\n"+
"}\n"+
"```\n"+
"\n"+
"对比正常的循环。\n"+
"\n"+
"```cpp\n"+
"for(std::vector<int>::iterator itr = vec.begin(); itr != vec.end(); itr++) {\n"+
"    std::cout << *itr << std::endl;\n"+
"}\n"+
"```\n"+
"\n"+
"可以看到也是简便了许多。\n"+
"\n"+
"## 总结\n"+
"\n"+
"auto关键字是C++11新引入的关键字，用于自动推导变量类型。使用auto关键字可以简化代码，提高代码可读性。\n"+
"\n"+
"需要注意的是，auto关键字只能用于声明变量，不能用于声明常量、指针和引用。如果需要声明常量、指针和引用，可以使用关键字const、指针和引用。\n"+
"\n"+
"使用auto关键字还可以用于Range-Based循环。\n"+
"\n"+
"---\n"+
"\n"+
"## 参考\n"+
"\n"+
"[C++ auto用法及应用详解](https://blog.csdn.net/weixin_43744293/article/details/117440727)\n"+
"\n"+
"[C++11新特性之基本范围的For循环（range-based-for）](https://blog.csdn.net/hailong0715/article/details/54172848)\n"+
"\n"
});

posts.push({
	date: '2024-05-15', 
	title: '我的网站的第一篇博客', 
	author: '吴宇晨', 
	content: "\n"+
"\n"+
"\n"+
"# 2024.5.13\n"+
"\n"+
"## 我的网站的第一篇博客\n"+
"\n"+
"### 欢迎来到我的网站\n"+
"\n"+
"### 网站简介\n"+
"\n"+
"这是一个个人网站，用于记录我的学习、生活、工作等。\n"+
"\n"+
"### 网站功能\n"+
"\n"+
"- 记录学习、生活、工作等\n"+
"- 分享知识、经验\n"+
"- 展示个人作品\n"+
"\n"+
"### 网站特色\n"+
"\n"+
"- 简洁美观的设计\n"+
"- 丰富的内容\n"+
"- 易于使用的界面\n"+
"\n"+
"# 网站上面的所有博客文章都是我本人所写，未经许可，禁止转载。\n"
});

posts.push({
	date: '2024-05-18', 
	title: '如何搭建个人博客', 
	author: '吴宇晨', 
	content: "\n"+
"\n"+
"# 如何用Github Page 搭建个人博客\n"+
"\n"+
"此教程参考[Github Page 搭建个人博客](https://pianfan.github.io/build_own_website/)\n"+
"\n"+
"## Step 0. 准备工作\n"+
"\n"+
"利用 GitHub Pages 免费获取你自己的网站域名只需要一个先决条件：拥有你自己的 github 账号。如果你目前还没有，可以去 [GitHub 官网](https://github.com/) 注册一个。\n"+
"\n"+
"## Step 1. 创建一个 Github 仓库\n"+
"\n"+
"登录 Github 账号后，点击右上角的 New repository 按钮创建一个仓库。\n"+
"\n"+
"仓库名格式为：`username.github.io`，其中 `username` 是你的 Github 用户名。\n"+
"\n"+
"## Step 2. 编写博客内容\n"+
"\n"+
"在仓库中创建一个名为 `index.html` 的文件，然后将以下内容复制进去：\n"+
"\n"+
"```html\n"+
"<!DOCTYPE html>\n"+
"<html>\n"+
"<head>\n"+
"    <meta charset=\"utf-8\">\n"+
"    <title>Hello World</title>\n"+
"</head>\n"+
"<body>\n"+
"    <h1>Hello World</h1>\n"+
"</body>\n"+
"</html>\n"+
"```\n"+
"\n"+
"想要编写自己的博客网站，必须掌握HTML、CSS、JavaScript等前端技术。\n"+
"\n"+
"推荐使用 [Markdown](https://www.markdownguide.org/getting-started/) 语法来编写博客内容。\n"+
"\n"+
"使用 Markdown 语法编写博客内容后，在仓库中创建一个名为 `_post` 的文件夹，然后在该文件夹中创建一个以 `yyyy-mm-dd-title.md` 格式命名的文件，将博客内容复制进去。\n"+
"\n"+
"例如：\n"+
"\n"+
"```markdown\n"+
"---\n"+
"date: 2024-05-28\n"+
"title: 如何搭建个人博客\n"+
"author: 吴宇晨\n"+
"---\n"+
"\n"+
"# 这是一篇博客\n"+
"```\n"+
"\n"+
"## Step 3. 部署博客\n"+
"\n"+
"点击仓库中的 Settings 按钮，然后向下滚动到 GitHub Pages 部分，点击 Choose a theme 按钮，选择一个你喜欢的主题。\n"+
"\n"+
"然后点击 Save 按钮保存设置。\n"+
"\n"+
"## Step 4. 访问你的博客\n"+
"\n"+
"访问你的博客地址：`https://username.github.io`，其中 `username` 是你的 Github 用户名。\n"+
"\n"+
"## Step 5. 你可以给自己的网站添加可许证\n"+
"\n"+
"如果给自己的网站一个可许证，你就将他开源认证了。\n"+
"不同的可许证有不同的作用，想要一个自己满意的可许证，可以访问 [choosealicense.com](https://choosealicense.com/) 网站来选择。\n"+
"\n"+
"在仓库中创建一个名为 `LICNESE` 的文件。\n"+
"\n"+
"将可许证内容复制进去，然后点击 Save 按钮保存设置。\n"+
"\n"+
"---\n"+
"\n"+
"## 后续步骤\n"+
"恭喜你！读到这里，你已经成功一半了。剩下的那一半，需要你去自己摸索：这个博客仓库里的每一个文件里的每一句代码都有什么意义，该怎么把它玩转？如何改变网页的结构？如何把网页弄成你最喜欢的样式？如何给网站添加更多实用的功能？如何写出高质量高点击率的文章？如何吸引更多的人来到你的博客？如何把你的博客长期经营下去……等等等等。真的想做好个人博客的话，这些问题都是要考虑的。\n"+
"\n"+
"## 参考资料\n"+
"\n"+
"- [Github Page 搭建个人博客](https://pianfan.github.io/build_own_website/)\n"+
"- [Markdown 语法](https://www.markdownguide.org/getting-started/)\n"+
"- [choosealicense.com](https://choosealicense.com/)\n"
});

posts.push({
	date: '2024-05-20', 
	title: 'Python链式调用：优雅的编程风格', 
	author: '吴宇晨', 
	content: "\n"+
"\n"+
"\n"+
"链式调用是一种编程风格，通过连续调用对象的方法，可以简化代码、提高可读性。在Python中，链式调用常用于构建流畅的API、配置对象或实现一系列的数据处理操作。本文将深入介绍Python链式调用的概念、原理以及实际应用，通过丰富的示例代码，帮助读者更全面地理解和应用这一编程技巧。\n"+
"\n"+
"## 1. 链式调用的基本概念\n"+
"\n"+
"### 1.1 什么是链式调用？\n"+
"\n"+
"链式调用是一种通过连续调用对象的方法，使得代码可读性更强、结构更清晰的编程风格。在链式调用中，每个方法的返回值通常是一个包含了其他方法的对象，这样就可以在单一的表达式中完成多个操作。\n"+
"\n"+
"### 1.2 链式调用的原理\n"+
"\n"+
"链式调用的原理在于每个方法都返回调用它的对象，这样就可以在返回的对象上继续调用其他方法。这要求每个方法都要在执行完自己的操作后返回一个新的对象，以保证链式调用的连贯性。\n"+
"\n"+
"## 2.示例\n"+
"\n"+
"```py\n"+
"\n"+
"class calculator:\n"+
"    def __init__(self, num):\n"+
"        self.num = num\n"+
"\n"+
"    def add(self, num):\n"+
"        self.num += num\n"+
"        return self\n"+
"\n"+
"    def subtract(self, num):\n"+
"        self.num -= num\n"+
"        return self\n"+
"\n"+
"    def multiply(self, num):\n"+
"        self.num *= num\n"+
"        return self\n"+
"\n"+
"    def divide(self, num):\n"+
"        self.num /= num\n"+
"        return self\n"+
"\n"+
"    def calc(self):\n"+
"        return self.num\n"+
"\n"+
"\n"+
"# 创建一个calculator对象\n"+
"calc = calculator(10)\n"+
"\n"+
"# 使用链式调用计算结果\n"+
"result = calc.add(5).subtract(2).multiply(2).divide(2).calc()\n"+
"\n"+
"print(result)  # 输出结果为15\n"+
"\n"+
"```\n"+
"\n"+
"## 3. 实际应用\n"+
"\n"+
"### 3.1 构建流畅的API\n"+
"\n"+
"在Python中，链式调用常用于构建流畅的API，使得代码可读性更强、结构更清晰。例如，可以使用链式调用实现一个文件操作的类，该类提供一系列方法，如打开文件、读取文件内容、写入文件内容等，使得调用者可以以流畅的方式操作文件。\n"+
"\n"+
"```py\n"+
"\n"+
"class File:\n"+
"    def __init__(self, filename):\n"+
"        self.filename = filename\n"+
"\n"+
"    def open(self):\n"+
"        self.file = open(self.filename, \"r\")\n"+
"        return self\n"+
"\n"+
"    def read(self):\n"+
"        self.content = self.file.read()\n"+
"        return self\n"+
"\n"+
"    def write(self, content):\n"+
"        self.file.write(content)\n"+
"        return self\n"+
"\n"+
"    def close(self):\n"+
"        self.file.close()\n"+
"        return self\n"+
"\n"+
"\n"+
"# 使用链式调用操作文件\n"+
"file = File(\"example.txt\").open().read().content\n"+
"print(file)  # 输出文件内容\n"+
"\n"+
"```\n"+
"\n"+
"### 3.2 配置对象\n"+
"\n"+
"链式调用还可以用于配置对象，使得调用者可以以流畅的方式设置对象的属性。例如，可以使用链式调用实现一个配置对象的类，该类提供一系列方法，如设置属性值、获取属性值等，使得调用者可以以流畅的方式配置对象。\n"+
"\n"+
"```py\n"+
"\n"+
"class Config:\n"+
"    def __init__(self):\n"+
"        self.config = {}\n"+
"\n"+
"    def set(self, key, value):\n"+
"        self.config[key] = value\n"+
"        return self\n"+
"\n"+
"    def get(self, key):\n"+
"        return self.config.get(key)\n"+
"\n"+
"\n"+
"# 使用链式调用配置对象\n"+
"config = Config().set(\"name\", \"John\").set(\"age\", 25).get(\"name\")\n"+
"print(config)  # 输出配置对象的属性值\n"+
"\n"+
"```\n"+
"\n"+
"## 4.总结\n"+
"\n"+
"Python链式调用是一种优雅的编程风格，通过连续调用对象的方法，使得代码结构更清晰、可读性更强。本文通过构建链式调用的类、实际应用场景和数据处理示例，详细介绍了链式调用的基本概念、原理以及在实际项目中的应用。链式调用可以用于构建流畅的API、优雅的配置对象以及简化数据处理操作，是Python中一个强大且常用的编程技巧。希望通过本文的介绍，大家能够更深入地理解和应用Python链式调用，写出更具可读性和可维护性的代码。\n"+
"\n"+
"---\n"+
"\n"+
"## 参考资料\n"+
"\n"+
"[Python链式调用：优雅的编程风格](https://blog.csdn.net/wuShiJingZuo/article/details/134410935)\n"+
"\n"
});

posts.push({
	date: '2024-05-26', 
	title: '上传npm包', 
	author: '吴宇晨', 
	content: "\n"+
"\n"+
"今天我来教大家怎么创建一个自己的npm包。\n"+
"\n"+
"## 1.创建一个npm账号\n"+
"\n"+
"打开[npm官网](https://www.npmjs.com/)，点击右上角的`Sign up`按钮，注册一个账号。\n"+
"\n"+
"## 2.编写代码\n"+
"\n"+
"创建一个文件夹，例如`my-package`，在该文件夹下创建一个`index.js`文件，然后在该文件中编写代码。\n"+
"\n"+
"例如：\n"+
"\n"+
"```js\n"+
"// index.js\n"+
"\n"+
"function hello() {\n"+
"  console.log(\'Hello, World!\');\n"+
"}\n"+
"\n"+
"module.exports = hello;\n"+
"```\n"+
"\n"+
"## 3.发布npm包\n"+
"\n"+
"在命令行中进入`my-package`文件夹，运行以下命令：\n"+
"```bash\n"+
"npm login\n"+
"```\n"+
"\n"+
"然后他会打开一个网页，跟着他的指示完成注册就可以了。\n"+
"\n"+
"完成后，创建一个`package.json`的文件，然后输入一下字符\n"+
"\n"+
"```json\n"+
"{\n"+
"  \"name\": \"my-package\", // 替换为包的名称\n"+
"  \"version\": \"1.0.0\", // 版本号\n"+
"  \"description\": \"My first npm package\", // 描述\n"+
"  \"main\": \"index.js\", // 入口文件\n"+
"  \"scripts\": {\n"+
"    \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\"  // 不用管\n"+
"  },\n"+
"  \"keywords\": [], // 关键词\n"+
"  \"author\": \"\", // 作者全名\n"+
"  \"license\": \"ISC\" // 许可证\n"+
"}\n"+
"```\n"+
"\n"+
"完成后，运行以下命令：\n"+
"\n"+
"```bash\n"+
"npm publish\n"+
"```\n"+
"\n"+
"## 4.安装npm包\n"+
"\n"+
"在命令行中运行以下命令：\n"+
"\n"+
"```bash\n"+
"npm install my-package\n"+
"```\n"+
"\n"+
"然后你就可以在你的代码中使用`my-package`这个包了。\n"+
"\n"+
"## 5.更新npm包\n"+
"\n"+
"当你更新了`my-package`这个包后，你可以在`package.json`中更新版本号，然后重新发布。\n"+
"\n"+
"## 6.删除npm包\n"+
"\n"+
"当你不再需要`my-package`这个包时，你可以在npm官网中删除它。\n"+
"\n"+
"## 7.总结\n"+
"\n"+
"通过以上步骤，你已经成功创建并发布了你的第一个npm包。\n"+
"\n"+
"---\n"+
"\n"+
"## 8.参考\n"+
"\n"+
"- [npm官网](https://www.npmjs.com/)\n"+
"- [npm文档](https://docs.npmjs.com/)\n"+
"- [如何创建一个npm包](https://www.npmjs.com/package/create-npm-package)\n"+
"- [如何发布一个npm包](https://www.npmjs.com/package/publish-npm-package)\n"
});

