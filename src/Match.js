import React from 'react'
const Match = ({englishWords, spanishWords}) => {
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
