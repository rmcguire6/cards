import React, { useState } from 'react'
import {sendMatch} from './axios'
import './App.css'

const AddMatches = () => {
  const [english, setEnglish] = useState('')
  const [spanish, setSpanish] = useState('')
  const [selectedPartOfSpeech, setSelectedPartOfSpeech] = useState('verb')

  const addMatch = (e) => {
    e.preventDefault()
    sendMatch({spanish:spanish, english:english, part: selectedPartOfSpeech, group: '', spanish_match: spanish, english_match: english})
    setSpanish('')
    setEnglish('')
  }

  return (
    <>
      <h3>Add a Word Match</h3>
      <form onSubmit={addMatch}>
        <div>
          <div className='container'>
            <label htmlFor='spanish' className="bold label">Spanish</label>
            <input name='spanish' value={spanish} onChange={(e) => setSpanish(e.target.value)} />
            <p className='bold'>Select a part of speech</p>
            <div className='radio'>
            <div>
                <label>
                <input
                  type='radio'
                  name='part'
                  value='verb'
                  checked={selectedPartOfSpeech === 'verb'}
                  onChange={(e) => setSelectedPartOfSpeech(e.target.value)}
                />
                Verb
                </label>
            </div>
            <div>
                <label>
                <input
                   type='radio'
                   name='part'
                   value='noun'
                   checked={selectedPartOfSpeech === 'noun'}
                   onChange={(e) => setSelectedPartOfSpeech(e.target.value)}
                />
                Noun
                </label>
            </div>
                <label>
                <input
                  type='radio'
                  name='part'
                  value='other'
                  checked={selectedPartOfSpeech === 'other'}
                  onChange={(e) => setSelectedPartOfSpeech(e.target.value)}
                />
                Other
                </label>
            </div>
            </div>
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

