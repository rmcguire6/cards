import React from 'react'
import Results from './Results'

const Display = ({spanishWord, englishWord }) => {
    return (
        <div className='display'>
            <p className='display_word'>Spanish Word: {spanishWord.spanish}</p>
            <p className='display_word'>English Word:  {englishWord.english}</p>
            <Results
              spanishWord={spanishWord}
              englishWord={englishWord}
            />
        </div>
    )
}
export {Display as default}
