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

    conn = portfolio.model.get_db()
    cur = conn.cursor()
    cur.execute('SELECT * FROM works;')
    works = cur.fetchall()
    print(works)
    cur.close()
    conn.close()
    context = {}
    return flask.render_template("index.html", **context)