import { useReducer } from 'react'
// import useAlertBox from './useAlertBox'

function useChess() {
  // const alertBox = useAlertBox()

  const defaultReducerValue = {
    name: 'hasansujon',
    currentPlayer: 'p1',
    history: [],
    cells: [
      { cellName: '1A', c: 'w', type: 'black', piece: 'rock' },
      { cellName: '2A', c: 'b', type: 'black', piece: 'knight' },
      { cellName: '3A', c: 'w', type: 'black', piece: 'bishop' },
      { cellName: '4A', c: 'b', type: 'black', piece: 'quenn' },
      { cellName: '5A', c: 'w', type: 'black', piece: 'king' },
      { cellName: '6A', c: 'b', type: 'black', piece: 'bishop' },
      { cellName: '7A', c: 'w', type: 'black', piece: 'knight' },
      { cellName: '8A', c: 'b', type: 'black', piece: 'rock' },

      { cellName: '1B', c: 'b', type: 'black', piece: 'pond' },
      { cellName: '2B', c: 'w', type: 'black', piece: 'pond' },
      { cellName: '3B', c: 'b', type: 'black', piece: 'pond' },
      { cellName: '4B', c: 'w', type: 'black', piece: 'pond' },
      { cellName: '5B', c: 'b', type: 'black', piece: 'pond' },
      { cellName: '6B', c: 'w', type: 'black', piece: 'pond' },
      { cellName: '7B', c: 'b', type: 'black', piece: 'pond' },
      { cellName: '8B', c: 'w', type: 'black', piece: 'pond' },

      { cellName: '1C', c: 'w', type: '', piece: '' },
      { cellName: '2C', c: 'b', type: '', piece: '' },
      { cellName: '3C', c: 'w', type: '', piece: '' },
      { cellName: '4C', c: 'b', type: '', piece: '' },
      { cellName: '5C', c: 'w', type: '', piece: '' },
      { cellName: '6C', c: 'b', type: '', piece: '' },
      { cellName: '7C', c: 'w', type: '', piece: '' },
      { cellName: '8C', c: 'b', type: '', piece: '' },

      { cellName: '1D', c: 'b', type: '', piece: '' },
      { cellName: '2D', c: 'w', type: '', piece: '' },
      { cellName: '3D', c: 'b', type: '', piece: '' },
      { cellName: '4D', c: 'w', type: '', piece: '' },
      { cellName: '5D', c: 'b', type: '', piece: '' },
      { cellName: '6D', c: 'w', type: '', piece: '' },
      { cellName: '7D', c: 'b', type: '', piece: '' },
      { cellName: '8D', c: 'w', type: '', piece: '' },

      { cellName: '1E', c: 'w', type: '', piece: '' },
      { cellName: '2E', c: 'b', type: '', piece: '' },
      { cellName: '3E', c: 'w', type: '', piece: '' },
      { cellName: '4E', c: 'b', type: '', piece: '' },
      { cellName: '5E', c: 'w', type: '', piece: '' },
      { cellName: '6E', c: 'b', type: '', piece: '' },
      { cellName: '7E', c: 'w', type: '', piece: '' },
      { cellName: '8E', c: 'b', type: '', piece: '' },

      { cellName: '1F', c: 'b', type: '', piece: '' },
      { cellName: '2F', c: 'w', type: '', piece: '' },
      { cellName: '3F', c: 'b', type: '', piece: '' },
      { cellName: '4F', c: 'w', type: '', piece: '' },
      { cellName: '5F', c: 'b', type: '', piece: '' },
      { cellName: '6F', c: 'w', type: '', piece: '' },
      { cellName: '7F', c: 'b', type: '', piece: '' },
      { cellName: '8F', c: 'w', type: '', piece: '' },

      { cellName: '1G', c: 'w', type: 'white', piece: 'pond' },
      { cellName: '2G', c: 'b', type: 'white', piece: 'pond' },
      { cellName: '3G', c: 'w', type: 'white', piece: 'pond' },
      { cellName: '4G', c: 'b', type: 'white', piece: 'pond' },
      { cellName: '5G', c: 'w', type: 'white', piece: 'pond' },
      { cellName: '6G', c: 'b', type: 'white', piece: 'pond' },
      { cellName: '7G', c: 'w', type: 'white', piece: 'pond' },
      { cellName: '8G', c: 'b', type: 'white', piece: 'pond' },

      { cellName: '1H', c: 'b', type: 'white', piece: 'rock' },
      { cellName: '2H', c: 'w', type: 'white', piece: 'knight' },
      { cellName: '3H', c: 'b', type: 'white', piece: 'bishop' },
      { cellName: '4H', c: 'w', type: 'white', piece: 'quenn' },
      { cellName: '5H', c: 'b', type: 'white', piece: 'king' },
      { cellName: '6H', c: 'w', type: 'white', piece: 'bishop' },
      { cellName: '7H', c: 'b', type: 'white', piece: 'knight' },
      { cellName: '8H', c: 'w', type: 'white', piece: 'rock' },
    ],
  }

  function chessReducder(state, action) {
    switch (action.type) {
      case 'valid-moves': {
        return {
          ...state,
        }
      }

      case 'move-to': {
        const { from, to } = action
        const cells = state.cells.map((curCell) => {
          // empty the previous cell
          if (curCell.cellName === from.cellName) {
            return { ...curCell, type: '', piece: '' }
          }

          // move to this cell
          if (curCell.cellName === to.cellName) {
            return { ...curCell, type: from.type, piece: from.piece }
          }

          return curCell
        })

        return {
          ...state,
          cells,
          currentPlayer: state.currentPlayer === 'p1' ? 'p2' : 'p1',
          history: [{ from, to }, ...state.history],
        }
      }

      case 'undo': {
        if (state.history.length === 0) return state

        const cells = [...state.cells]
        const history = [...state.history]
        const lastCell = history[0]

        const lastToIdx = cells.findIndex((cell) => cell.cellName === lastCell.to.cellName)
        const lastfrIdx = cells.findIndex((cell) => cell.cellName === lastCell.from.cellName)

        cells[lastToIdx] = {
          ...cells[lastToIdx],
          type: lastCell.to.type,
          piece: lastCell.to.piece,
        }
        cells[lastfrIdx] = {
          ...cells[lastfrIdx],
          type: lastCell.from.type,
          piece: lastCell.from.piece,
        }
        history.shift()

        const cellElements = document.querySelectorAll('.cell')
        cellElements.forEach((el) => (el.style.border = 'none'))
        document.getElementsByClassName(lastCell.from.cellName)[0].style.border = 'solid 2px red'
        document.getElementsByClassName(lastCell.to.cellName)[0].style.border = 'solid 2px green'

        return {
          ...state,
          cells,
          history,
          redoList: [lastCell, ...redoList],
          currentPlayer: state.currentPlayer === 'p1' ? 'p2' : 'p1',
        }
      }

      case 'redo': {
        return { ...state }
      }

      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(chessReducder, defaultReducerValue)

  return [state, dispatch]
}

export default useChess
