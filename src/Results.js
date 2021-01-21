import React from 'react'

const Results = ({spanishWord, englishWord }) => {
    console.log('spanish', spanishWord, 'english', englishWord)
    return (
        <>
            {spanishWord.spanish && englishWord.english?
               <>{(spanishWord.spanish === englishWord.spanish_match) ?
                <p className='display green'>Correct</p>
               : <p className='display red'>Incorrect</p>}</>
            : <p>Please select two words</p> }
        </>
    )
}
export {Results as default}
