import React, { useEffect, useState } from 'react'
import createRandomList from './createRandomList'
import './App.css'

const Nouns = () => {
  const [spanishList, setSpanishList] = useState([])
  const [englishList, setEnglishList] = useState([])
  const [selectedEnglishWord, setSelectedEnglishWord] = useState('')
  const [selectedSpanishWord, setSelectedSpanishWord] = useState('')

  const english = 'ball'
  const spanish = {
    spanish: 'pelota',
    part: 'noun',
    group: 'fem'
  }
  const createSpanishCases = (spanish, group) => {
    let spanishCases = []
    if (group === 'fem') {
      spanishCases = [{ num: 'sing', case: `la ${spanish}` },
        { num: 'plural', case: `las ${spanish}s` }]
    } else {
        spanishCases = [{ num: 'sing', case: `el ${spanish}` },
        { num: 'plural', case: `los ${spanish}s` }]
    }
    return spanishCases
  }
  const createEnglishCases = (english) => {
    return [{ num: 'sing', case: `${english}` },
      { num: 'plural', case: `${english}s` }]
  }
  useEffect(() => {
    setSpanishList(createSpanishCases(spanish.spanish, spanish.group))
    setEnglishList(createRandomList(createEnglishCases(english)))
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
      <h2>Match the Nouns</h2>
      <div className='lists'>
        <div className='list'>
          {spanishList.map((word) => (
            <div className='card' key={word.num}>
            <button className='button' onClick={() => handleSpanishClick(word.num)}>{word.case}</button>
            </div>
          ))}
        </div>
        <div className='list'>
          {englishList.map((word) => (
            <div className='card' key={word.num}>
             <button className='button' onClick={() => handleEnglishClick(word.num)}>{word.case}</button>
            </div>
          ))}
        </div>
        </div>
        <div>
          <h3>Results</h3>
          {selectedSpanishWord.length === 0 ?
          (<span className="button">No Words Selected</span>) : (
    <>
   {selectedSpanishWord === selectedEnglishWord ?
   <p className='button green'>Words Match</p> : <p className='button red'>Words Do Not Match</p>}
   </>
)}
        </div>
    </div>
  )
}
export { Nouns as default }
