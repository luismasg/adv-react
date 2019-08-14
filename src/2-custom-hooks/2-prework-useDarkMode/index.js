import React from 'react'

export default function UseDarkMode() {
  return (
    <div className="fl w-90 ph3 pv3 hooks2-darkMode">
      <input
        type="checkbox"
        id="scales"
        name="scales"
        onChange={({ target }) => {
          console.log('evt', target.checked)
        }}
      />
      <label htmlFor="scales" className="ph3">
        Toggle
      </label>
    </div>
  )
}
