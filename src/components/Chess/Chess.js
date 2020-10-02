import React, { useRef, useContext, useEffect } from 'react'
import './Chess.css'
import { ChessContext } from '../../context/ChessContext'
import Cell from '../Cell/Cell'

function Chess() {
  const [{ cells, currentPlayer }, dispatch] = useContext(ChessContext)
  const preSelectdCellRef = useRef(null)
  useEffect(() => {
    preSelectdCellRef.current = null
  }, [currentPlayer])

  function handlCelleClick(cell, e) {
    const cellElements = document.querySelectorAll('.cell')
    const currentPlayerType = currentPlayer === 'p1' ? 'white' : 'black'
    let isAllowToMove = !!preSelectdCellRef.current

    if (isAllowToMove) {
      // if the currentPlayer click on the same type of piece again.
      isAllowToMove = preSelectdCellRef.current.type !== cell.type
    }
    document.getElementById('current-cell').innerText = cell.cellName

    if (!isAllowToMove) {
      if (currentPlayerType !== cell.type) return

      cellElements.forEach((el) => (el.style.border = 'none'))
      e.target.style.border = 'solid 2px tomato'

      preSelectdCellRef.current = cell
      // dispatch({type: 'valid-moves', payload: cell})
    } else {
      e.target.style.border = 'solid 2px red'

      dispatch({
        type: 'move-to',
        from: preSelectdCellRef.current,
        to: cell,
      })
    }
  }

  return (
    <div class="chess-wrapper">
      <div className="nums">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
      </div>
      <div className="letters">
        <span>A</span>
        <span>B</span>
        <span>C</span>
        <span>D</span>
        <span>E</span>
        <span>F</span>
        <span>G</span>
        <span>H</span>
      </div>
      <div className="chess-board">
        {cells.map((cell) => (
          <Cell onClick={(e) => handlCelleClick(cell, e)} cell={cell} key={cell.cellName} />
        ))}
      </div>
    </div>
  )
}

export default Chess
