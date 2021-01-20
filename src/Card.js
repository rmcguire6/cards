import React from 'react'

const Card = ({word, handleClick}) => {
  return (
    <div className='card'>
      {<button className='button' onClick={() => handleClick(word)}>{word}</button>}
    </div>
  )
}
export { Card as default }
