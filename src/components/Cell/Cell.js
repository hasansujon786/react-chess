import React from 'react'
import './Cell.css'

function Cell({cell, classNames, ...props}) {
  return (
    <button className={`cell ${cell.c} ${cell.type}`} {...props}>
      {cell.piece ? (cell.piece === 'knight' ? 'n' : cell.piece.charAt(0)) : ''}
    </button>
  )
}

export default Cell
