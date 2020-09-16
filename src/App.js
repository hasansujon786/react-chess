import React, {useContext} from 'react'
import './App.css'
import {ChessContext} from './context/ChessContext'
import Chess from './components/Chess/Chess'

function App() {
  const [{history, currentPlayer}] = useContext(ChessContext)

  return (
    <div className="App">
      <Chess />
      <ul>
        <li>{currentPlayer}</li>
        {history.map((his, i) => (
          <li>{`${i % 2 === 0 ? 'p1' : 'p2'} : ${his.from} -  ${his.to}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
