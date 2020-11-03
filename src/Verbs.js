import React, { useEffect, useState } from 'react'
import Results from './Results'
import createRandomList from './createRandomList'
import './App.css'

const Verbs = () => {
  const [spanishList, setSpanishList] = useState([])
  const [englishList, setEnglishList] = useState([])
  const [selectedEnglishWord, setSelectedEnglishWord] = useState('')
  const [selectedSpanishWord, setSelectedSpanishWord] = useState('')

  const english = 'eat'
  const spanish = {
    word: 'comer',
    group: 'er'
  }
  const createSpanishTenses = (inf, conj) => {
    let spanishTenses = []
    const stem = inf.slice(0, inf.length - 1)
    const shortstem = inf.slice(0, inf.length - 2)
    if (conj !== 'ir') {
      spanishTenses = [{ pers: '1s', tense: `yo ${shortstem}o` },
        { pers: '2s', tense: `tu ${stem}s` }, { pers: '3s', tense: `el ${stem}` },
        { pers: '1p', tense: `nosotros ${stem}mos` }, { pers: '2p', tense: `vosotros ${stem}is` },
        { pers: '3p', tense: `ellos ${stem}n` }]
    } else {
      spanishTenses = spanishTenses = [{ pers: '1s', tense: `yo ${shortstem}o` },
        { pers: '2s', tense: `tu ${shortstem}es` }, { pers: '3s', tense: `el ${shortstem}e` },
        { pers: '1p', tense: `nosotros ${stem}mos` }, { pers: '2p', tense: `vosotros ${stem}s` },
        { pers: '3p', tense: `ellos ${shortstem}en` }]
    }
    return spanishTenses
  }
  const createEnglishTenses = (inf) => {
    return [{ pers: '1s', tense: `I ${inf}` },
      { pers: '2s', tense: `you ${inf}` }, { pers: '3s', tense: `he or she ${inf}s` },
      { pers: '1p', tense: `we ${inf}` }, { pers: '2p', tense: `you(pl) ${inf}` },
      { pers: '3p', tense: `they ${inf}` }]
  }
  useEffect(() => {
    setSpanishList(createSpanishTenses(spanish.word, spanish.group))
    setEnglishList(createRandomList(createEnglishTenses(english)))
  // eslint-disable-next-line
  }, [])
  const handleEnglishClick =(item) => {
    setSelectedEnglishWord(item)
  }
  const handleSpanishClick =(item) => {
    setSelectedSpanishWord(item)
  }
  return (
    <div className='container'>
      <h2>Match the Verb Forms</h2>
      <div className='lists'>
        <div className='list'>
          {spanishList.map((word) => (
            <div className='card' key={word.pers}> 
            <button className='button' onClick={() => handleSpanishClick(word.pers)}>{word.tense}</button>
            </div>
          ))}
        </div>
        <div className='list'>
          {englishList.map((word) => (
            <div className='card' key={word.pers}> 
             <button className='button' onClick={() => handleEnglishClick(word.pers)}>{word.tense}</button>
            </div>
          ))}
        </div>
        </div>
        <div>
          <h3>Results</h3>
          <Results spanishWord={selectedSpanishWord} englishWord={selectedEnglishWord} />
        </div>
    </div>
  )
}
export { Verbs as default }
