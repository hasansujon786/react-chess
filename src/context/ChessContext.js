import React, {createContext} from 'react'
import useChess from '../hook/useChess'

export const ChessContext = createContext()

function ChessContextProvider(props) {
  return (
    <ChessContext.Provider value={useChess()}>
      {props.children}
    </ChessContext.Provider>
  )
}

export default ChessContextProvider
