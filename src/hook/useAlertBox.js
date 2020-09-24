import React, {
  createContext,
  useRef,
  useContext,
  useState,
  useEffect,
} from 'react'

export const AlertBoxContext = createContext()
const useLocal = () => {
  const logs = useRef([])

  const alertBox = (newlog) => {
    const foundIdx = logs.current.findIndex(
      (log) => JSON.stringify(log.value) === JSON.stringify(newlog)
    )
    if (foundIdx === -1) {
      logs.current.push({value: newlog, count: 1})
    } else {
      logs.current[foundIdx].count++
    }
  }

  return {alertBox, logs: logs.current}
}

export function AlertBoxContextProvider(props) {
  return (
    <AlertBoxContext.Provider value={useLocal()}>
      {props.children}
    </AlertBoxContext.Provider>
  )
}

export function AlertBox() {
  const {logs} = useContext(AlertBoxContext)
  const [showAlertBox, setShowAlertBox] = useState(false)

  const alertBoxEvent = (e) => {
    if (e.key === '=') {
      setShowAlertBox((bool) => !bool)
    }
  }

  useEffect(() => {
    window.addEventListener('keypress', alertBoxEvent)
    return () => window.removeEventListener('keypress', alertBoxEvent)
  }, [])
  return (
    <>
      {showAlertBox && (
        <div className="alertbox-container">
          <ul className="alertbox">
            {logs.map((log, i) => (
              <li key={i}>
                <pre>{JSON.stringify(log.value, null, 2)}</pre>
                <pre>
                  <span>{log.count}</span>
                </pre>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default function useAlertBox() {
  const {alertBox} = useContext(AlertBoxContext)
  return alertBox
}
