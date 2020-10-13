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

@app.route('/api/spanish_words', methods=['GET'])
def get_spanish_words():
    spanish_list = Spanish.query.all()
    result = spanish_words_schema.dump(spanish_list)
    return jsonify(result)

@app.route('/api/english_words', methods=['GET'])
def get_english_words():
    english_list = English.query.all()
    result = english_words_schema.dump(english_list)
    return jsonify(result)

@app.route('/api/spanish_words/<int:spanish_id>', methods=['GET'])
def get_spanish_word(spanish_id: int):
    spanish = Spanish.query.filter_by(spanish_id=spanish_id).first()
    if spanish:
        result = spanish_word_schema.dump(spanish)
        return jsonify(result)
    else:
        return jsonify(message="That spanish word is not in the database."), 404

@app.route('/api/english_words/<int:english_id>', methods=['GET'])
def get_english_word(english_id: int):
    english = English.query.filter_by(english_id=english_id).first()
    if english:
        result = english_word_schema.dump(english)
        return jsonify(result)
    else:
        return jsonify(message="That english word is not in the database"), 404

# database models

class Spanish(db.Model):
    __tablename__ = 'spanish'
    spanish_id = Column(Integer, primary_key=True)
    word = Column(String, nullable=False)
    part = Column(String, nullable=False)
    group = Column(String, default='')
    english_match = Column(String, ForeignKey("english.english_word"), nullable=False)

class SpanishSchema(ma.Schema):
    class Meta:
        fields = ('spanish_id','word', 'part', 'group','english_match')

spanish_word_schema = SpanishSchema()
spanish_words_schema = SpanishSchema(many=True)

class English(db.Model):
    __tablename__='english'
    english_id = Column(Integer, primary_key=True)
    english_word = Column(String, nullable=False)
    spanish_match = Column(String, ForeignKey("spanish.word"), nullable=False)

class EnglishSchema(ma.Schema):
    class Meta:
        fields = ('english_id', 'english_word', 'spanish_match')
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
                    group='ir',
                    english_match='live')

    comer = Spanish(word = 'comer',
                    part='verb',
                    group='er',
                    english_match='eat')

    hablar = Spanish(word = 'hablar',
                    part='verb',
                    group='ar',
                    english_match='speak')

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


