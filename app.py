from flask import Flask, render_template, send_from_directory
import os
import markdown

app = Flask(__name__)

# Путь к директориям проекта
VIDEO_FOLDER = os.path.join(app.root_path, 'static', 'video')  # Папка для видео
TEXT_FILE = os.path.join(app.root_path, 'text.txt')  # Путь к текстовому файлу

@app.route('/')
def index():
    # Чтение контента из текстового файла (Markdown)
    with open(TEXT_FILE, 'r', encoding='utf-8') as file:
        text_content = file.read()

    # Преобразуем Markdown в HTML
    text_content_html = markdown.markdown(text_content)

    # Отправляем преобразованный текст в шаблон
    return render_template('index.html', text_content=text_content_html)

@app.route('/video/<filename>')
def video(filename):
    return send_from_directory(os.path.join(app.root_path, 'static', 'video'), filename)


if __name__ == '__main__':
    app.run(debug=True)
