from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = "change-this-secret-key"  # needed for flash messages


@app.route("/")
def home():
    return render_template("MyProfile.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/projects")
def projects():
    return render_template("projects.html")


@app.route("/contact", methods=["GET", "POST"])
def submit_contact_form():
    if request.method == "POST":
        name = request.form.get("name") or request.form.get("first_name", "")
        email = request.form.get("email", "")
        message = request.form.get("message", "")

        # For now this just prints to the console.
        # Later you can wire this up to send an email or save to a database.
        print(f"New contact form submission:\nName: {name}\nEmail: {email}\nMessage: {message}")

        flash("Thanks for reaching out! I'll get back to you soon.")
        return redirect(url_for("home"))

    return render_template("form.html")


if __name__ == "__main__":
    app.run(debug=True)
