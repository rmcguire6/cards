import React, { useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';
import Match from './Match'

function App() {
  const [englishWords, setEnglishWords] = useState([])
  const [spanishWords, setSpanishWords] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('/english_words')
        const english = result.data
        setEnglishWords(english.english_words)
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
    </div>
  );
}

export default App;
