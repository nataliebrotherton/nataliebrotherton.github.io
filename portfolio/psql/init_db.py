import os
import portfolio
import psycopg2

conn = psycopg2.connect(
    host='localhost',
    database='works',
    user='postgres',
    password='password')

cur = conn.cursor()

cur.execute('DROP TABLE IF EXISTS works;')
cur.execute('CREATE TABLE works (id serial PRIMARY KEY,'
                                'title varchar (50) NOT NULL,'
                                'medium varchar (50) NOT NULL,'
                                'category varchar (50),'
                                'description TEXT,'
                                'img_path varchar (100) NOT NULL,'
                                'date varchar (50) NOT NULL);')

cur.execute('INSERT INTO works (title, medium, category,description, img_path, date)'
    'VALUES (%s, %s, %s, %s, %s, %s)',
    ('South Campus Prog Poster',
    'Photoshop',
    'NULL',
    'A poster made for the ICC (Inter Cooperative Council)',
    'ICC_SCP_F21_final.png',
    'November 2021'
    )
)


conn.commit()
cur.close()
conn.close()