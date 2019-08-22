import React from 'react'

// componente contenedor
function wrapWithUser(Component) {
  var secretUserInfo = {
    name: 'Jack Franklin',
    favouriteColour: 'blue',
  }

  return function(props) {
    return <Component user={secretUserInfo} {...props} />
  }
}

// componente contenido
const AppHeader = function(props) {
  if (props.user) {
    return (
      <p>
        Logged in as {props.user.name} ... including "{props.extraStuff}"
      </p>
    )
  } else {
    return <p>You need to login ... including "{props.extraStuff}"</p>
  }
}

const ConnectedAppHeader = wrapWithUser(AppHeader)

export default () => <ConnectedAppHeader extraStuff="your password" />
