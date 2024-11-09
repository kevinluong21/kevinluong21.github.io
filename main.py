from flask import Flask, render_template, url_for, flash, redirect, request
import pandas as pd

app = Flask(__name__)

projects = pd.read_csv("database/projects.csv")
projects["Date Published"] = pd.to_datetime(projects["Date Published"], format="%Y-%m-%d")
projects["Year Published"] = projects["Date Published"].dt.year
projects = projects.sort_index(ascending=False)
projects = projects.to_dict(orient="records")

@app.route("/", methods=['GET','POST'])
@app.route("/home", methods=['GET','POST'])
def home():
    return render_template("index.html", projects=projects)

if __name__ == '__main__': #allows us to run the file using only "python filename.py"
    app.run(debug=True)