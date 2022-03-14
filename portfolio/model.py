import os
import portfolio
import psycopg2
import flask

def dict_factory(cursor, row):
    return {col[0]: row[idx] for idx, col in enumerate(cursor.description)}

def get_db():
    """Open a new databse connection"""

    conn = psycopg2.connect(host='localhost',
                            database='works',
                            user=os.environ['DB_USERNAME'],
                            password=os.environ['DB_PASSWORD'])

    return conn
