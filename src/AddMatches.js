import React, { useState } from 'react'
import {sendMatch} from './axios'

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
    sendMatch({spanish:spanish, english:english, part: 'verb', group: group, spanish_match: spanish, english_match: english})
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
          <label htmlFor='spanish' className="label">Spanish</label>
          {isHidden? <></> :
          <div>
            <select
              value={group}
              className='label'
              onChange={(e) => setGroup(e.target.value)}
            >
              <option className='label' value="fem">La</option>
              <option className='label' value="masc">El</option>
            </select>
          </div>}
          <input name='spanish' value={spanish} onChange={(e) => setSpanish(e.target.value)} />
        </div>
          <h4>Select a part of speech</h4>
          <div>
            <select
              value={selectedPartOfSpeech}
              className='label'
              onChange={(e) => setPartOfSpeech(e.target.value)}
            >
              <option className="label" value="verb">Verb</option>
              <option className="label" value="noun">Noun</option>
              <option className="label" value="other">Other</option>
            </select>
        </div>
        <div className='container'>
          <label htmlFor='english' className="label">English</label>
          <input name='english' value={english} onChange={(e) => setEnglish(e.target.value)} />
        </div>
        <button className='button'>Add a word pair</button>
      </form>
    </>
  )
}
export { AddMatches as default }

