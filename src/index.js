import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './styles/alertbox.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ChessContextProvider from './context/ChessContext'
import {AlertBoxContextProvider} from './hook/useAlertBox'

ReactDOM.render(
  <React.StrictMode>
    <AlertBoxContextProvider>
      <ChessContextProvider>
        <App />
      </ChessContextProvider>
    </AlertBoxContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
