import React from 'react'

const Results = ({spanishWord, englishWord }) => {
    console.log('spanish', spanishWord, 'english', englishWord)
    return (
        <>
            <p className='display'>Spanish Word: {spanishWord.spanish}</p>
            <p className='display'>English Word:  {englishWord.english}</p>
            {spanishWord.spanish && englishWord.english?
               <>{(spanishWord.spanish === englishWord.spanish_match) ?
               <p className='button green'>Correct</p>
               : <p className='button red'>Not Correct</p>}</>
            : <span className='button'>Please select two words</span> }
        </>
    )
}
export {Results as default}
