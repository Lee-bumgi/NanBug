from flask import Flask, render_template


app = Flask(__name__)

@app.route('/')
def main_page():
    return render_template("mainPage.html")
@app.route('/free')
def free_training():
    return render_template("freeTraining.html")
@app.route('/game')
def game_page():
    return render_template("gamePage.html")

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0',port=8888)