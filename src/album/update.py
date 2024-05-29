
import os


album_path = '../../_album/'
script_path = './script.js'

# 遍历专辑文件夹，子文件夹中包含多个文件夹，每个文件夹中包含一个.md文件

with open(script_path, 'w', encoding='utf-8') as f:
    f.write('''\nlet albums = [];\n\n''')

for root, dirs, files in os.walk(album_path):
    for dir in dirs:
        # 获取文件夹路径
        dir_path = os.path.join(root, dir)
        # 获取文件夹名称
        dir_name = os.path.basename(dir_path)
        
        # 遍历文件夹中的文件
        for file in os.listdir(dir_path):
            # 获取文件路径
            file_path = os.path.join(dir_path, file)
            # 获取文件名称
            file_name = os.path.basename(file_path)
            
            file_name = file_name.split(".")[0]

            with open(file_path, 'r', encoding='utf-8') as f:
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
                    line = line.replace("\\", "\\\\")
                    line = line.replace("\'", "\\\'")
                    line = line.replace("\"", "\\\"")

                    line = line.replace("<script", "\\x3Cscript")
                    line = line.replace("</script>", "\\x3C/script>")

                    lines.append("\"" + line + "\\n\"" + "+" + "\n")

                text_content = "".join(lines)

                text_content = text_content[:-2]

                with open(script_path, 'a', encoding='utf-8') as f:
                    f.write(f'''if(!albums['{dir_name}']) {{
    albums['{dir_name}'] = [{{
        "date": "{date}",
        "title": "{title}",
        "author": "{author}",
        "content": {text_content}
    }}];
}} else {{
    let post = {{
        "date": "{date}",
        "title": "{title}",
        "author": "{author}",
        "content": {text_content}
    }};
    if(Array.isArray(albums['{dir_name}'])) {{
        albums['{dir_name}'].push(post);
    }} else {{
        albums['{dir_name}'] = [albums['{dir_name}'], post];
    }}
}}\n''')
                
                if os.path.exists('./_albums/' + dir_name):
                    pass
                else:
                    os.makedirs('./_albums/' + dir_name)

                with open('./_albums/' + dir_name + '/' + title + '.html', 'w', encoding='utf-8') as f:
                    f.write(f'''<!DOCTYPE html>
                            
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{dir_name} · {title}</title>                 
    <link rel="stylesheet" href="../../../../index.css">
    <script src="../../script.js"></script>
    
    <script src="https://cdn.bootcss.com/marked/0.8.1/marked.min.js"></script>
    <script src="https://cdn.bootcss.com/highlight.js/9.15.10/highlight.min.js"></script>
    <link rel="stylesheet" href="https://cdn.bootcss.com/highlight.js/8.0/styles/monokai_sublime.min.css">
    <style>
        :root {{
            overflow-y: scroll;
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

        pre code {{
            font-family: Consolas, Monaco, monospace;
        }}
    </style>
</head>

<body>
    <button style="position: relative; top: 20px; left: 20px;" onclick="window.location.href = './index.html'">返回</button>

    <div class="main">
        <div class="title">{title}</div>
        <div class="date">{date}</div>
        <div class="author">{author}</div>
        <div class="content">

        <script>
            marked.setOptions({{
                gfm: true,
                breaks: true,
                highlight: function (code) {{
                    return hljs.highlightAuto(code).value;
                }}
            }});

            document.getElementsByClassName("content")[0].innerHTML = marked({text_content});
        </script>
    </div>
</body>
</html>''')
                
                with open('./_albums/' + dir_name + '/index.html', 'w', encoding='utf-8') as f:
                    print(file_name)
                    f.write(f'''<!DOCTYPE html>

<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{dir_name}</title>
    <link rel="stylesheet" href="../../../../index.css">
    <script src="../../script.js"></script>
    <style>
        :root {{
            overflow-y: scroll;
        }}

        .post {{
            margin-bottom: 20px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f9f9f9;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            cursor: pointer;
        }}
    </style>
</head>

<body>
    <button style="position: relative; top: 20px; left: 20px;" onclick="window.location.href = '../../index.html'">返回</button>

    <h1 class="title">{dir_name}</h1>

    <div class="posts-container" style="position: relative; top: 20px; left: 20px;">
         <div class="posts"></div>

         <script>
            let postsContainer = document.getElementsByClassName("posts")[0];

            albums['{dir_name}'] = albums['{dir_name}'].sort(function(a, b) {{
                return new Date(b.date) - new Date(a.date);
            }})

            for(let post in albums['{dir_name}']) {{
                let p = albums['{dir_name}'][post];

                let postDiv = document.createElement("div");
                postDiv.className = "post";

                let title = document.createElement("h2");
                title.innerText = p.title;
                postDiv.appendChild(title);

                let date = document.createElement("div");
                date.innerText = p.date;
                postDiv.appendChild(date);

                let author = document.createElement("div");
                author.innerText = "作者：" + p.author;
                postDiv.appendChild(author);

                postDiv.onclick = function() {{
                    window.location.href = "./" + p.title + ".html";
                }}

                postsContainer.appendChild(postDiv);
            }}
         </script>
    </div>
</body>
</html>''')

os.system("pause")