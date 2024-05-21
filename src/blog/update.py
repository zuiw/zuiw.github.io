
'''
    copyright © 2024 by wuyuchen
    This program is licensed under a
    MIT license.

    You should have received a copy of the license along with the
    program. If not, see <https://opensource.org/licenses/MIT>.
'''



import os


post_path = "../../_post"
script_path = "./script.js"
page_path = "./posts"



# 遍历所有Markdown文件
for root, dirs, files in os.walk(post_path):

    with open("./script.js", "w", encoding="utf-8") as f:
        print("更新script.js文件")
        f.write("let posts = [];\n\n")

    for file in files:



        if file.endswith(".md"):

            file_path = os.path.join(root, file)
            
            # 读取文件内容

            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

                # 读取文件日期、标题、作者
                
                date = content.split("---")[1].split("\n")[1].split(":")[1].strip()
                title = content.split("---")[1].split("\n")[2].split(":")[1].strip()
                author = content.split("---")[1].split("\n")[3].split(":")[1].strip()
                
                # 读取文件内容，需要读取到"---"之后的内容
                
                text_content = content.split("---", 2)[2]
                
                # 处理文件内容

                lines = []

                for line in text_content.split("\n"):
                    line.replace("\"", "\\\'")
                    line.replace("'", "\\\'")

                    lines.append("\'" + line + "\\n\'" + "+" + "\n")

                text_content = "".join(lines)

                text_content = text_content[:-2]

                # 更新script.js文件

                with open(script_path, "a", encoding="utf-8") as f:
                    
                    f.write(f'''posts.push({{\n\tdate: '{date}', \n\ttitle: '{title}', \n\tauthor: '{author}', \n\tcontent: marked({text_content})\n}});\n\n''')
                    
                    print(f"{file_path} 更新成功")

                # 更新posts文件夹
                    
                
                with open(f"{page_path}/{title}.html", "w", encoding="utf-8") as f:
                    f.write(f'''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
                            
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../../index.css">
    <script src="../script.js"></script>
    <script src="https://cdn.bootcss.com/marked/0.8.1/marked.min.js"></script>
    <script src="https://cdn.bootcss.com/highlight.js/9.15.10/highlight.min.js"></script>
    <link rel="stylesheet" href="https://cdn.bootcss.com/highlight.js/8.0/styles/monokai_sublime.min.css">
    <script>
        hljs.initHighlightingOnLoad();
    </script>
    <style>
        :root {{
            overflow-x: hidden;
            overflow-y: scroll;
        }}
        li {{
             list-style: none;
        }}

        .date {{
            position: relative;
            top: 20px;
            left: 48%;
            font-size: 22px;
        }}

        .author {{
            position: relative;
            top: 20px;
            left: 48%;
            font-size: 22px;
        }}

        pre {{
            position: relative;
            top: 20px;
            left: 20px;
            width: 100%;
            height: 90%;
            font-size: 20px;
            background-color: #282a36;
            color: #f8f8f2;
            padding: 10px;
            border-radius: 10px;
            text-align: left;
        }}
    </style>
</head>
<body>
    <button style="position: relative; top: 20px; left: 20px;" onclick="window.location.href = '../index.html'">返回</button>

    <div class="main">
        <div class="title">{title}</div>
        <div class="date">{date}</div>
        <div class="author">{author}</div>
        <div class="content"></div>
        <script>
            marked.setOptions({{
                gfm: true,
                breaks: true,
                highlight: function (code) {{
                    return hljs.highlightAuto(code).value;
                }}
            }});

            document.querySelector(".content").innerHTML = marked({text_content});
        </script>

    </div>

    <div class="footer">
        <p>版权所有 &copy; 2024 个人网站</p>
        <p>作者：吴宇晨</p>
        <p>联系方式：lvyan740826@163.com</p>
        <p>地址：中国·辽宁·沈阳</p>
        <style>
            .footer {{
                position: relative;
                margin-top: 20px;
                bottom: 0;
                width: 100%;
                height: 120px;
                background-color: #ccc6c6;
                padding: 10px;
                text-align: center;
            }}
            
            .footer p {{
                margin-top: 5px;
                margin-bottom: 5px;
                font-size: 14px;
            }}
        </style>
    </div>
</body>
</html>''')
                    print(f"{page_path}/{title}.html 更新成功")

os.system("pause")