import React, { useState } from 'react'
import {sendMatch} from './axios'

const AddMatches = () => {
  const [english, setEnglish] = useState('')
  const [spanish, setSpanish] = useState('')
  const selectedPartOfSpeech = 'verb'
  const group = ''
  const addMatch = (e) => {
    e.preventDefault()
    sendMatch({spanish:spanish, english:english, part: 'verb', group: group, spanish_match: spanish, english_match: english})
    setSpanish('')
    setEnglish('')
  }

  return (
    <>
      <h3>Add a Word Match</h3>
      <form onSubmit={addMatch}>
        <div className='container'>
          <label htmlFor='spanish' className="label">Spanish</label>
          <input name='spanish' value={spanish} onChange={(e) => setSpanish(e.target.value)} />
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

