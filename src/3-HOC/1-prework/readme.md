##### EJERCICIO-1

## HOCs 101

### OBJETIVO

Queremos hacer composicion de component al envolver un component en otro que nos permita verificar si esta autorizado.

#### REQUISITOS

- Ejecutar `npm install` o `yarn` en la raiz de este proyecto
- Ejecutar `npm start` o `yarn start` en la raiz de este proyecto
- Navegar a la pagina `http://localhost:8080/refs/video`

### DESARROLLO

Empezamos con un component simple que muestra un texto condicionado a la condicion `isLogged`.
necesitamos un componente padre que pude reutilizar la misma logica de autentificaion en varioas lugares.

Vamos a crear una funcion adicional llamada wrapWithUser que tome un componente y regrese otra funcion que muestre el componente que se paso como argumento. pero agregandole props. Esta es la estructura basica de un Hoc. es una funcion que recibe un componente y lo muestra ligeramente modificado.

```js
function wrapWithUser(Component) {
  var secretUserInfo = {
    name: 'Jack Franklin',
    favouriteColour: 'blue',
  }

  return function(props) {
    return <Component user={secretUserInfo} {...props} />
  }
}
```

Ahora vamos a crear un componente usando ese hoc, pasandole nuestra función inicial (AppHeader).

`const ConnectedAppHeader = wrapWithUser(AppHeader)`

por ultimo lo que vamos a exportar de este file es el JSX representando el componente Hoc y le pasamos props adicionales.

`export default () => <ConnectedAppHeader extraStuff="This Works Too" />`

antes de que funcione, necesitamos cambiar nuestro coponente inicial para tomar las props que le va a pasar `wrapWithUser`

```js
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
```
