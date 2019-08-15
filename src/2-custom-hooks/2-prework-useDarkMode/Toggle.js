import React from 'react'
export default ({ darkMode, setDarkMode }) => (
  <>
    <input
      type="checkbox"
      checked={!darkMode}
      onChange={() => {
        setDarkMode(!darkMode)
      }}
      id="toggle"
      className="checkbox"
    />
    <label htmlFor="toggle" className="switch" />
  </>
)
