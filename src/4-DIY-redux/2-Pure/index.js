import React from 'react'

export default function Pure() {
  return (
    <div className="pa3  flex flex-column w5">
      <div>{1}</div>
      <input type="number" placeholder="0" />
      <input type="number" placeholder="0" />
      <div>Pure {0}</div>
      <button>Not pure {0}</button>
    </div>
  )
}
