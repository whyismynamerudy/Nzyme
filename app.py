"""python file for flask backend stuff"""
from flask import Flask, request, jsonify
from text_summarization import summarize
from keyword_extraction import get_keywords

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
        input_str = data['text']["inputText"]
        result = summarize(input_str)
        res = {
            "summary": result
        }
        return jsonify(res)
    else:
        return 'Wrong content type'


@app.route('/keywords', methods=['POST'])
def keywords_text():
    content_type = request.headers.get('Content-Type')
    if content_type == "application/json":
        data = request.get_json()
        print(data["text"])
        input_str = data['text']["summarizedText"]
        subset, new = get_keywords(input_str)
        res = {
            "subset": subset,
            "new": new,
        }
        return jsonify(res)
    else:
        return 'Wrong content type'
