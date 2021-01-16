import React, { useEffect, useState} from 'react';
import axios from 'axios'
import AppRouter from './AppRouter'
import MatchesContext from './matches-context'
import './App.css'

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
    <MatchesContext.Provider value = {{ englishWords, spanishWords }} >
    <div className="container">
      <AppRouter />
    </div>
    </MatchesContext.Provider>
  );
}

export default App;
