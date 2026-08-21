from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os

print(os.getenv("MAIL_USERNAME"))
load_dotenv()


app = Flask(__name__)
app.secret_key = "change-this-secret-key"  # needed for flash messages

# Flask-Mail Configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
mail = Mail(app)

@app.route("/")
def home():
    return render_template("MyProfile.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/projects")
def projects():
    return render_template("projects.html")


@app.route("/contact")
def contact():
    return render_template("form.html")

@app.route("/skills")
def skills():
    return render_template("skills.html")

if __name__ == "__main__":
    app.run(debug=True)
