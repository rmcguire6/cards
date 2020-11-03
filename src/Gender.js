import React, {useContext, useEffect, useState} from 'react'
import Results from './Results'
import MatchesContext from './matches-context'
import './App.css'


const Gender = () => {
  const {spanishWords} = useContext(MatchesContext)
  const [spanishList, setSpanishList] = useState([])
  const [selectedSpanishWord, setSelectedSpanishWord] = useState('')
  const [answer, setAnswer] = useState('')

  useEffect(() => {
    setSpanishList(spanishWords.filter((word) => word.part === 'noun'))
  }, [spanishWords])

  const handleGenderClick =(gender, spanish) => {
    setSelectedSpanishWord(spanish)
    setAnswer(gender)
    console.log('spanish part', selectedSpanishWord, 'answer', answer)

  }
  return (
    <div className='container'>
      <div>
        <h2 >What's the Gender?</h2>
        {spanishList.length > 0? <h3>Click El or La</h3> : <h3>Add Nouns to Matches</h3>}
        <div className='container'>
          <div className='gender'>
            <div className='list'>
            {spanishList.map(spanish => (
                <div className="card" key={spanish.spanish_id}>
                  <div className='line'>
                    <button className="button" onClick={() => handleGenderClick('masc', spanish)}>El</button><button className='button'onClick={() => handleGenderClick('fem', spanish)}>La</button><p className='button'>{spanish.spanish}</p>
                  </div>
                </div>
            ))}
            </div>
          </div>
          {answer.length === 0 ? <p className='button'>No Word Selected</p> :  <Results spanishWord={selectedSpanishWord.group} englishWord={answer}/>}
        </div>
      </div>
    </div>
  )
}
export { Gender as default }
