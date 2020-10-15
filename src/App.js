import React, { useEffect, useState} from 'react';
import axios from 'axios'
import Match from './Match'
import Verbs from './Verbs'
import createRandomList from './createRandomList'
// import './App.css'

function App() {
  const [englishWords, setEnglishWords] = useState([])
  const [spanishWords, setSpanishWords] = useState([])
  const randomEnglishWord = 'eat'
  const randomSpanishWord = {
    word: 'comer',
    group: 'er'
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('/english_words')
        const english = result.data
        setEnglishWords(createRandomList(english.english_words))
      } catch (error) {
      }
    }
    fetchData()
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('/spanish_words')
        const spanish = result.data
        setSpanishWords(spanish.spanish_words)
      } catch (error) {
      }
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Fast Cards</h1>
      </header>
      <Match englishWords={englishWords}
        spanishWords={spanishWords}
      />
      <Verbs english={randomEnglishWord} spanish={randomSpanishWord}/>
    </div>
  );
}

export default App;
