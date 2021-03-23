from flask import Flask, jsonify, render_template, url_for, request
import pandas as pd
import json

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/eq', methods = ['POST'])
def get_post_User_Input():
    jsdata = request.form['data']
    print(jsdata)
    return jsdata

if __name__ == "__main__":
    app.run(debug=True)