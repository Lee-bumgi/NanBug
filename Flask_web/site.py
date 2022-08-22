import time
from flask import Flask, render_template, request
import json


app = Flask(__name__)

while 1:
    @app.route('/')
    def hello_world():
        return render_template("index.html")

    if __name__ == '__main__':
        app.run(debug=True, host='0.0.0.0',port=8888)
