import React, {useContext, useEffect, useState} from 'react'
import MatchesContext from './matches-context'
import createRandomList from './createRandomList'
import './App.css'
const Match = () => {
  const {spanishWords, englishWords} = useContext(MatchesContext)
  const [displaySpanishWords, setDisplaySpanishWords] = useState([])
  const [displayEnglishWords, setDisplayEnglishWords] = useState([])
  const [selectedEnglishWord, setSelectedEnglishWord] = useState('')
  const [selectedSpanishWord, setSelectedSpanishWord] = useState('')
  useEffect(() => {
        setDisplayEnglishWords(createRandomList(englishWords))
        setDisplaySpanishWords(spanishWords)
  }, [englishWords, spanishWords])
  const handleEnglishClick =(item) => {
    setSelectedEnglishWord(item)
  }
  const handleSpanishClick =(item) => {
    setSelectedSpanishWord(item)
  }
  return (
    <div className='container'>
      <h2>Match</h2>
        <div className='lists'>
        <div className='list'>
            {displaySpanishWords.map(spanish => (
                <div className="card" key={spanish.spanish_id}>
                  <button className="button" onClick={() => handleSpanishClick(spanish.spanish)}>{spanish.spanish}</button>
                </div>
            ))}
        </div>
        <div className='list'>
            {displayEnglishWords.map(english => (
                <div className="card" key={english.english_id}>
                  <button className="button" onClick={() => handleEnglishClick(english.spanish_match)}>{` to ${english.english}`}</button>
                </div>
            ))}
        </div>
      </div>
      <h3>Results</h3>
      <div>
          {selectedSpanishWord.length === 0 ? 
          (<span className="button white">No Words Selected</span>) : (
    <>
   
   {selectedSpanishWord === selectedEnglishWord ?
    <p className='button green'>Words Match</p> : <p className='button red'>Words Do Not Match</p>}
   </>
)}
        </div>
    </div>
  )
}
export { Match as default }
