import React from 'react'

const GameScore = ({count}) => {
  return (
    <div className='score'>
      <h1>{count}</h1>
      <p>TOTLA SCORE</p>
    </div>
  )
}

export default GameScore