
import os

post_path = "../../_post"
script_psth = "./script.js"

# 遍历所有Markdown文件
for root, dirs, files in os.walk(post_path):
    with open(script_psth, "w", encoding="utf-8") as f:
        f.write('''
let posts = {}\n\n''')
    for file in files:
        if file.endswith(".md"):
            file_path = os.path.join(root, file)

            # 读取文件内容
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

                # 读取文件日期，标题

                date = content.split("---")[1].split("\n")[1].split(":")[1].strip()
                title = content.split("---")[1].split("\n")[2].split(":")[1].strip()

                # 时间只读取年份
                year = date.split("-")[0]

                # 更新script.js

                with open(script_psth, "a", encoding="utf-8") as f:
                    f.write(f'''if(!posts['{year}']) {{
    posts['{year}'] = {{
        date: '{date}',
        title: '{title}'
    }};
}} else {{
    if(Array.isArray(posts['{year}'])) {{
        posts['{year}'].push({{
            date: '{date}',
            title: '{title}'
        }});
    }} else {{
        posts['{year}'] = [posts['{year}'], {{
            date: '{date}',
            title: '{title}'
        }}];
    }}
}}''')
                    print(f'{year} 更新成功')

os.system("pause")