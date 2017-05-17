from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def index():
  return render_template("index.html", phrase="hello", times=5)
app.run(debug=True)

<html>
    <head>
      <title>My First Template</title>
    </head>
    <body>
      <h3>My flask template with embedded Python-like code</h3>
      <!-- this will output the value of our phrase variable -->
      <p>Phrase: {{ phrase }}</p>
      <!-- this will output the value of our times variable -->
      <p>Times: {{ times }}</p>
      <!-- here is an example of embedding a for-loop in our code -->
      {% for x in range(0,times): %}
      <p>{{ phrase }}</p>
      {% endfor %}
      <!-- here is an example of embedding an if statement in our code -->
      {% if phrase == "hello" %}
 <p>The phrase says hello</p>
      {% endif %}
    </body>
</html>


<!-- linking a css style sheet -->
<link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='my_style_sheet.css') }}">
<!-- linking a javascript file -->
<script type="text/javascript" src="{{ url_for('static', filename='my_script.js') }}"></script>
<!-- linking an image -->
<img src="{{ url_for('static', filename='my_img.png') }}">
