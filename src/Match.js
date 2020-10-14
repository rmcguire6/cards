import React from 'react'

const Match = ({englishWords, spanishWords}) => {
  return (
    <div className='container'>
      <h2>Match</h2>
        <div className='lists'>
          <div className='list'>
            {englishWords.map(english => (
                <div key={english.english_id}>
                  <p>{` to ${english.english_word}`}</p>
                </div>
            ))}
        </div>
        <div className='list'>
            {spanishWords.map(spanish => (
                <div key={spanish.spanish_id}>
                  <p>{spanish.word}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}
export { Match as default }
