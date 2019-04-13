import React, { useState } from 'react'

const pure = (a, b) => a + b

export default function Pure() {
  const [top, setTop] = useState(0)
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  return (
    <div className="pa3  flex flex-column w5">
      <div>{top}</div>
      <input
        type="number"
        placeholder="0"
        value={a}
        onChange={evt => {
          setA(evt.target.value)
        }}
      />
      <input
        type="number"
        placeholder="0"
        value={b}
        onChange={evt => {
          setB(evt.target.value)
        }}
      />
      <div>Pure {pure(parseInt(a || 0), parseInt(b || 0))}</div>
      <button>Not pure {pure(parseInt(a || 0), parseInt(b || 0))}</button>
    </div>
  )
}
