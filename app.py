from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os



app = Flask(__name__)
app.secret_key = "change-this-secret-key"  # needed for flash messages


@app.route("/")
def home():
    whatsapp_number = os.getenv("WHATSAPP_NUMBER")
    return render_template(
        "MyProfile.html",
        whatsapp_number=whatsapp_number)


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
