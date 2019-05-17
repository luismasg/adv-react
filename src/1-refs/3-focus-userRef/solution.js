import React, { useRef } from 'react'

function Focus() {
  const ref = useRef(null)
  return (
    <div className="pa4">
      <button
        onClick={() => {
          console.log(ref)
        }}
      >
        focus
      </button>
      <input className="mh3" type="text" ref={ref} />
    </div>
  )
}

export default Focus
