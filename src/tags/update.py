
import os


post_path = '../../_post/'
script_path = './script.js'

# 遍历所有Markdown文件





for root, dirs, files in os.walk(post_path):
    with open(script_path, 'w', encoding='utf-8') as f:
        f.write('''
let tags = {};

    ''')

    for file in files:
        if file.endswith('.md'):

            file_path = os.path.join(root, file)

            # 打开文件并读取内容

            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

                # 读取文件日期、标题、作者
                
                date = content.split("---")[1].split("\n")[1].split(":")[1].strip()
                title = content.split("---")[1].split("\n")[2].split(":")[1].strip()
                tag = content.split("---")[1].split("\n")[4].split(":")[1].strip()

                # 更新script.js

                with open(script_path, 'a', encoding='utf-8') as f:
                    f.write(f'''
if(!tags['{tag}']){{
    tags['{tag}'] = [{{
        date: '{date}',
        title: '{title}',
        tag: '{tag}'
    }}]
}} else {{
    if(Array.isArray(tags['{tag}'])) {{
        tags['{tag}'].push({{
            date: '{date}',
            title: '{title}',
            tag: '{tag}'
        }})
    }} else {{
        tags['{tag}'] = [tags['{tag}'], {{
            date: '{date}',
            title: '{title}',
            tag: '{tag}'
        }}]
    }}
}}

''')
                    print(f'{tag} 更新成功')

os.system('pause')