import React, {useContext} from 'react'
import './App.css'
import {ChessContext} from './context/ChessContext'
import Chess from './components/Chess/Chess'

function App() {
  const [{history, currentPlayer}] = useContext(ChessContext)

  return (
    <section className="App">
      <Chess />
      <section style={{textAlign: 'center'}}>
        <h3>{currentPlayer === 'p1' ? 'White' : 'Black'} </h3>
        <hr style={{margin: '.5rem 0'}} />
        <h4 id="current-cell">x</h4>
        <div className="history-controll">
          <button>redo</button>
          <button>undo</button>
        </div>
      </section>
      <section>
        <ul className="history">
          {history.map((his, i) => (
            <li>{`${i % 2 === 0 ? 'p1' : 'p2'} - ${his.from} >  ${his.to}`}</li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default App
