import React, {useContext} from 'react'
import MatchesContext from './matches-context'
import './App.css'
const Match = () => {
  const {spanishWords, englishWords} = useContext(MatchesContext)
  return (
    <div className='container'>
      <h2>Match</h2>
        <div className='lists'>
        <div className='list'>
            {spanishWords.map(spanish => (
                <div className="card" key={spanish.spanish_id}>
                  <button className="button">{spanish.word}</button>
                </div>
            ))}
        </div>
        <div className='list'>
            {englishWords.map(english => (
                <div className="card" key={english.english_id}>
                  <button className="button">{` to ${english.english_word}`}</button>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}
export { Match as default }
