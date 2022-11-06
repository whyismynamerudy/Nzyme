"""python file for flask backend stuff"""
from flask import Flask, request, jsonify
import asyncio
from text_summarization import summarize

app = Flask(__name__, static_folder='./new-hacks-frontend/build', static_url_path='/')

app.config['PROPAGATE_EXCEPTIONS'] = True


@app.route('/')
def initalize():
    return app.send_static_file('index.html')


@app.route('/summarize', methods=['POST'])
def summarize_text():
    content_type = request.headers.get('Content-Type')
    if content_type == "application/json":
        data = request.get_json()
        input_str = data['text']['input_text']
        result = summarize(input_str)
        res = {
            "summary": result
        }
        return jsonify(res)
    else:
        return 'Wrong content type'