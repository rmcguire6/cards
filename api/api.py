from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, ForeignKey
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

class Spanish(db.Model):
    __tablename__ = 'spanish'
    id = Column(Integer, primary_key=True)
    word = Column(String, nullable=False)
    part = Column(String, nullable=False)
    group = Column(String, default='')

class SpanishSchema(ma.Schema):
    class Meta:
        fields = ('id','word', 'part', 'group')

spanish_word_schema = SpanishSchema()
spanish_words_schema = SpanishSchema(many=True)

class English(db.Model):
    __tablename__='english'
    id = Column(Integer, primary_key=True)
    english_word = Column(String, nullable=False)
    spanish_match = Column(String, ForeignKey("spanish.word"))

class EnglishSchema(ma.Schema):
    class Meta:
        fields = ('id', 'english_word', 'spanish_match')
        include_fk = True

english_word_schema = EnglishSchema()
english_words_schema = EnglishSchema(many=True)

# cli commands

@app.cli.command('db_create')
def db_create():
    db.create_all()
    print('Database created!')

@app.cli.command('db_drop')
def db_drop():
    db.drop_all()
    print('Database dropped')

@app.cli.command('db_seed')
def db_seed():
    vivir = Spanish(word = 'vivir',
                    part='verb',
                    group='ir')

    comer = Spanish(word = 'comer',
                    part='verb',
                    group='er')

    hablar = Spanish(word = 'hablar',
                    part='verb',
                    group='ar')

    db.session.add(vivir)
    db.session.add(comer)
    db.session.add(hablar)

    live = English(english_word ='live',
                    spanish_match = 'vivir')

    eat = English(english_word ='eat',
                    spanish_match = 'comer')

    speak = English(english_word ='speak',
                    spanish_match = 'hablar')

    db.session.add(live)
    db.session.add(eat)
    db.session.add(speak)
    db.session.commit()
    print('Database seeded!')

if __name__ == '__main__':
    app.run()


