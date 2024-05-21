

file_path = '../../about.md'

with open('./script.js', 'w', encoding='utf-8') as f:
    f.write('''
let content = ``;
''')

with open(file_path, 'r', encoding='utf-8') as f:
    text_content = f.read()

    lines = []

    for line in text_content.split("\n"):
        lines.append("\'" + line + "\\n\'" + "+" + "\n")

    text_content = "".join(lines)

    text_content = text_content[:-2]

    with open('./script.js', 'a', encoding='utf-8') as f:
        f.write(f'content = marked({text_content})')