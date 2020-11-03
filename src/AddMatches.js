import React, { useState } from 'react'
import {sendMatch} from './axios'
import './App.css'

const AddMatches = () => {
  const [english, setEnglish] = useState('')
  const [spanish, setSpanish] = useState('')
  const [selectedPartOfSpeech, setSelectedPartOfSpeech] = useState('verb')
  const [group, setGroup] = useState('')
  const [isHidden, setIsHidden] = useState(true)

  const setPartOfSpeech = (partOfSpeech) => {
    setSelectedPartOfSpeech(partOfSpeech)
    if (partOfSpeech === 'noun') {
      setIsHidden(false)
    }
  }
  const addMatch = (e) => {
    e.preventDefault()
    if (selectedPartOfSpeech === 'noun') {
      setGroup(group)
    }
    sendMatch({spanish:spanish, english:english, part: selectedPartOfSpeech, group: group, spanish_match: spanish, english_match: english})
    setSpanish('')
    setEnglish('')
    setGroup('')
    setIsHidden(true)
  }

  return (
    <>
      <h3>Add a Word Match</h3>
      <form onSubmit={addMatch}>
        <div className='container'>
          <label htmlFor='spanish' className="bold label">Spanish</label>
          {isHidden? <></> :
          <div>
            <select
              value={group}
              onChange={(e) => setGroup(e.target.value)}
            >
              <option value="fem">La</option>
              <option value="masc">El</option>
            </select>
          </div>}
          <input name='spanish' value={spanish} onChange={(e) => setSpanish(e.target.value)} />
        </div>
        <p className='bold'>Select a part of speech</p>
        <div>
            <select
              value={selectedPartOfSpeech}
              onChange={(e) => setPartOfSpeech(e.target.value)}
            >
              <option value="verb">Verb</option>
              <option value="noun">Noun</option>
              <option value="other">Other</option>
            </select>
        </div>
        <div className='container'>
          <label htmlFor='english' className="bold label">English</label>
          <input name='english' value={english} onChange={(e) => setEnglish(e.target.value)} />
        </div>
        <button className='button'>Add a word pair</button>
      </form>
    </>
  )
}
export { AddMatches as default }

