from portfolio import db

class Work(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text(), nullable=False)
    description = db.Column(db.Text())
    medium = db.Column(db.Text())
    date = db.Column(db.Text(), nullable=False)
    img_path = db.Column(db.Text(), nullable=False)
    category = db.Column(db.Text())



    def __repr__(self):
        return '<Work: {}>'.format(self.name, self.description, self.medium, self.date, self.img_path, self.category)