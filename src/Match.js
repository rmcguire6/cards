import React, {useContext, useEffect, useState} from 'react'
import Card from './Card'
import Results from './Results'
import MatchesContext from './matches-context'
import createRandomList from './createRandomList'
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
          <div>
            {displaySpanishWords.map(spanish => (
                <Card key={spanish.spanish_id}
                word={spanish.spanish}
                handleClick={() => handleSpanishClick(spanish.spanish)}/>
            ))}
          </div>
          <div>
            {displayEnglishWords.map(english => (
                <Card key={english.english_id}
                word={english.english}
                handleClick={()=> handleEnglishClick(english.spanish_match)}/>
            ))}
          </div>
      </div>
      <h3>Results</h3>
      <Results
      spanishWord={selectedSpanishWord}
      englishWord={selectedEnglishWord}
      />
    </div>
  )
}
export { Match as default }
