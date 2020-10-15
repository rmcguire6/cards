import React, { useEffect, useState} from 'react';
import axios from 'axios'
import Match from './Match'
import Verbs from './Verbs'
import MatchesContext from './matches-context'
import createRandomList from './createRandomList'
import './App.css'

function App() {
  const [englishWords, setEnglishWords] = useState([])
  const [spanishWords, setSpanishWords] = useState([])
 
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
    <MatchesContext.Provider value = {{ englishWords, setEnglishWords, spanishWords, setSpanishWords }} >
    <div className="App">
      <header>
        <h1>Fast Cards</h1>
      </header>
      <Match />
      <Verbs />
    </div>
    </MatchesContext.Provider>
  );
}

export default App;
