import React, {useContext, useEffect, useState} from 'react'
import Card from './Card'
import Display from './Display'
import MatchesContext from './matches-context'
import createRandomList from './createRandomList'
const Match = () => {
  const {spanishWords, englishWords} = useContext(MatchesContext)
  const [displaySpanishWords, setDisplaySpanishWords] = useState([])
  const [displayEnglishWords, setDisplayEnglishWords] = useState([])
  const [selectedEnglishWord, setSelectedEnglishWord] = useState('')
  const [selectedSpanishWord, setSelectedSpanishWord] = useState('')
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    setDisplayEnglishWords(createRandomList(englishWords))
    setDisplaySpanishWords(spanishWords)
  }, [englishWords, spanishWords])
  const handleEnglishClick =(item) => {
    setSelectedEnglishWord(item)
    handleMatch()
  }
  const handleSpanishClick =(item) => {
    setSelectedSpanishWord(item)
    handleMatch()
  }
  const handleMatch = () => {
    setIsHidden(false)
  }
  return (
    <div className='container'>
      <h2>Match</h2>
      {isHidden? <></> :
        <>
       <Display
        spanishWord={selectedSpanishWord}
        englishWord={selectedEnglishWord}
       />
       </>}
        <div className='lists'>
          <div>
            {displaySpanishWords.map(spanish => (
                <Card key={spanish.spanish_id}
                word={spanish.spanish}
                handleClick={() => handleSpanishClick(spanish)}
                />
            ))}
          </div>
          <div>
            {displayEnglishWords.map(english => (
                <Card key={english.english_id}
                word={english.english}
                handleClick={()=> handleEnglishClick(english)}
                />
            ))}
          </div>
      </div>
    </div>
  )
}
export { Match as default }
