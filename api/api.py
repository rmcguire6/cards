from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String
from flask_marshmallow import Marshmallow
import os

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'matches.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

@app.before_first_request
def create_tables():
    db.create_all()

@app.route('/api')
def homepage():
    return ('homepage')

# database models

class SpanishWord(db.Model):
    __tablename__ = 'spanish'
    id = Column(Integer, primary_key=True)
    word = Column(String, nullable=False)
    part = Column(String, nullable=False)
    group = Column(String, default='')

class SpanishWordSchema(ma.Schema):
    class Meta:
        fields = ('id','word', 'part', 'group')

spanish_word_schema = SpanishWordSchema()
spanish_words_schema = SpanishWordSchema(many=True)

# cli commands

@app.cli.command('db_create')
def db_create():
    db.create_all()
    print('Database created!')

if __name__ == '__main__':
    app.run()

 
