import React from 'react'
import './styles.scss'

function Focus() {
  return (
    <div className="pa4 forward-ref-example">
      <button
        onClick={() => {
          console.log('not implemented yet')
        }}
      >
        focus
      </button>
      <input type="email" className="AppEmailInput" />
    </div>
  )
}

export default Focus
