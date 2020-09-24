import React, {useState, useEffect, useContext} from 'react'
import './AlertBox.css'
import {AlertBoxContext} from '../../context/AlertBoxContext'

function AlertBox() {
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

export default AlertBox
