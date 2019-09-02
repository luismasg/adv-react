import React from 'react'
import { Auth0Provider } from './react-auth0-wrapper'
import NavBar from './NavBar'
import { useAuth0 } from './react-auth0-wrapper'

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname,
  )
}

function Ejercicio1() {
  const { loading } = useAuth0()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Auth0Provider
      domain="testgit.auth0.com"
      client_id="5wBQ5zVtdam7RD4sd4DI5IQHN33Vh90Y"
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <div className="App">
        <header>
          <NavBar />
        </header>
      </div>
    </Auth0Provider>
  )
}

// export default Ejercicio1

export default () => <p>hello Auth0</p>
