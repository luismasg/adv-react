import React, { useState } from 'react'

const exp = (a, b) => Math.pow(a, b)

export default function Pure() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [c, setC] = useState(1)
  return (
    <div className="pa3  flex flex-column w5">
      <div>{c}</div>
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
      <div>Pure {exp(a, b)}</div>
      <button
        onClick={() => {
          setC(exp(a, b))
        }}
      >
        Not pure {exp(a, b)}
      </button>
    </div>
  )
}
