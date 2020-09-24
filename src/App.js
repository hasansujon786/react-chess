import React, {useContext} from 'react'
import './App.css'
import {ChessContext} from './context/ChessContext'
import Chess from './components/Chess/Chess'
import {AlertBox} from './hook/useAlertBox'

function App() {
  const [{history, currentPlayer}, dispatch] = useContext(ChessContext)
  return (
    <>
      <AlertBox />
      <section className="App">
        <Chess />
        <section style={{textAlign: 'center'}}>
          <h3>{currentPlayer === 'p1' ? 'White' : 'Black'} </h3>
          <hr style={{margin: '.5rem 0'}} />
          <h4 id="current-cell">x</h4>
        </section>
        <section>
          <div className="history-controll">
            <button>redo</button>
            <button onClick={() => dispatch({type: 'undo'})}>undo</button>
          </div>
          <ul className="history">
            {history.map((his, i) => (
              <li>{`${i % 2 === 0 ? 'p1' : 'p2'} - ${his.from.cellName} >  ${his.to.cellName}`}</li>
            ))}
          </ul>
        </section>
      </section>
    </>
  )
}

export default App
