from flask import Flask, render_template, request
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/results', methods=['POST'])
def result():
    name = request.form['name']
    location = request.form['location']
    lang = request.form['language']
    comment = request.form['comment']
    form_data = [name, location, lang, comment]
    return render_template('results.html',form_data = form_data)

app.run(debug=True)
