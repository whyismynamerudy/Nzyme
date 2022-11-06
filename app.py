"""python file for flask backend stuff"""
from flask import Flask

app = Flask(__name__)


@app.route('/')
def initalize():
    return '' \
           '<h1>we running</h1>' \
           ''
