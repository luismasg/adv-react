import React from 'react'

export default function AppHeader(props) {
  const isLogged = false
  if (isLogged) {
    return <p>Logged in as peter</p>
  } else {
    return <p>You need to login ... including credentials</p>
  }
}
