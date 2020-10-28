import React, { useState } from 'react'
import Results from './Results'
import './App.css'

const Gender = () => {
  const [answer, setAnswer] = useState('')
  const spanish = {
    spanish: 'pelota',
    part: 'noun',
    group: 'fem'
  }

  const handleGenderClick =(gender) => {
    setAnswer(gender)
  }
  return (
    <div className='container'>
      <div>
        <h2 >What's the Gender?</h2>
        <h3>Click the Correct One</h3>
        <div className='container'>
          <div className='gender'>
            <button className='button'onClick={() => handleGenderClick('masc')}>El {spanish.spanish}</button><button className='button'onClick={() => handleGenderClick('fem')}>La {spanish.spanish}</button>
          </div>
          {answer.length === 0 ? <p className='button'>No Word Selected</p> :  <Results spanishWord={spanish.group} englishWord={answer}/>}
        </div>
      </div>
    </div>
  )
}
export { Gender as default }
