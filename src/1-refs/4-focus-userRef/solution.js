import React, { useRef } from 'react'
//import FancyInput from './input'  // suponiendo que se creo en otro file el input
import './styles.scss'

///en otro file ...
const FancyInput = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} />
))

function Focus() {
  const ref = useRef(null)
  return (
    <div className="pa4 forward-ref-example">
      <button
        onClick={() => {
          if (ref.current !== null) {
            ref.current.focus()
          }
        }}
      >
        focus
      </button>
      <FancyInput ref={ref} type="email" className="AppEmailInput" />
    </div>
  )
}

export default Focus
