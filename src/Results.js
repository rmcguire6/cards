import React from 'react'

const Results = ({spanishWord, englishWord }) => {
    console.log('spanish', spanishWord, 'english', englishWord)
    return (
        <>
        {spanishWord.length === 0 ?
            (<span className="button">No Words Selected</span>) : (
      <>
     {spanishWord === englishWord ?
     <p className='button green'>Correct</p> : <p className='button red'>Not Correct</p>}
     </>
  )}
  </>
    )
}
export {Results as default}