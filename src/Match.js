import React, {useContext, useEffect, useState} from 'react'
import MatchesContext from './matches-context'
import createRandomList from './createRandomList'
import './App.css'
const Match = () => {
  const {spanishWords, englishWords} = useContext(MatchesContext)
  const [displaySpanishWords, setDisplaySpanishWords] = useState([])
  const [displayEnglishWords, setDisplayEnglishWords] = useState([])
 
  useEffect(() => {
        setDisplayEnglishWords(createRandomList(englishWords))
        setDisplaySpanishWords(spanishWords)
  }, [englishWords, spanishWords])
  
  return (
    <div className='container'>
      <h2>Match</h2>
        <div className='lists'>
        <div className='list'>
            {displaySpanishWords.map(spanish => (
                <div className="card" key={spanish.spanish_id}>
                  <button className="button" >{spanish.word}</button>
                </div>
            ))}
        </div>
        <div className='list'>
            {displayEnglishWords.map(english => (
                <div className="card" key={english.english_id}>
                  <button className="button" >{` to ${english.english_word}`}</button>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}
export { Match as default }
