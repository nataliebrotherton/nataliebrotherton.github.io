"""
portfolio index (main) view.

URLs include:
/
"""
import portfolio
import flask
import psycopg2


@portfolio.app.route('/')
def show_index():
    """Display / route."""

    context={"message": "hello"}
    return flask.render_template("index.html", **context)