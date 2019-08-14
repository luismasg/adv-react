##### EJERCICIO-1

## Creando tus propios hooks

### OBJETIVO

Como parte es este prework queremos implementar un hook propio (custom hook) para que podamos crear, actualzar y terminar una susbcripcion a un evento del browser.

#### REQUISITOS

* Ejecutar `npm install` o `yarn` en la raiz de este proyecto
* Ejecutar `npm start` o `yarn start` en la raiz de este proyecto
* Navegar a la pagina `http://localhost:8080/refs/video`

### DESARROLLO

Tenemos una  componente funcional que muestra una div con texto.
y queremos que responda cada vez que movemos el mouse

```JSX
import React, { useState, useCallback } from 'react'
import './styles.scss'

export default () => (
  <div className="eventListener-1-demo">the mouse position is ()</div>
)
```

Como que queremos que la ui sea una funcion del estado,
primero vamos a usar el useState hook para poder guardar un state entra cada re-render, usamos el `useState` hook pasando el estado inicial `useState({x:0, y:0})` y destructuramos el retorno de esta función usando array destructuring.

```js
  const [coords, setCoords] = useState({ x: 0, y: 0 });
```

Creamos una variable llamada `eventHandler` para guardar el escuchador de evento.
Esto es la funcion que se corre cada que sucede un evento.
la funcion se va a correr con el evento completo y todos sus atributos.  
Como solo nos interesa clientX y clientY, vamos a destructurarlos y renombrarlos para simplificar la asignacion. ` ( {clientX:x, clientY:y} )=>{  }` 

Ese funcion tiene que tomar los valores que recibió (x,y) y usarlos para settear el estado de las coordenadas. esa funcion la extrajimos en la linea anterior.

```js
const handler=useCallback(
    ({clientX:x, clientY:y})=>{ setCoords({ x,y }) }
) 
```
Nota como el setCoords se simplica a `setCoords({ x,y })`.  Esto es por un feature de es6 que nos permite obviar la asignacion si la key y el value se llaman igual.



`useCallback` toma un segundo argumento. Un array de las dependencias de este callback.
Solo se volverá a crear esta funcion si cambian estas dependencias.
`useCallback( ()=>{} , depArray)`

En este caso la unica dependencia es la funcion `setCoords` de tal maenra que quedaria useCalblack con la funcion que settea el estado nuevo  y un array cuyo unico elemento el la funcions `setCoords`

```js
const handler=useCallback(
    ({clientX:x, clientY:y})=>{ setCoords({ x,y }) },    /* primer argumento. nuestra funcion */
    [setCoords] /*segundo argumento. array de deps*/
) 
```

Ya tenemos varias piezas creadas

- el state coords
-  la funcion setCoords
-   un eventHandler que va a responder a a un evento
  
nota como aun no le decimos que evento es los que va a manejar.
lo que si podemos hacer ahora es cambiar el JSX para mostrar  las coordenadas desde el state.

vamos a cambiar nuestra div 
```JSX
  <div className="eventListener-1-demo">the mouse position is ()</div>
  ```

  a usar ahora el nuevo state.

  ```JSX
  <div className="eventListener-1-demo">the mouse position is ({coords.x}, {coords.y})</div>
  ```

Por el momento nada cambia.
vamos a detenernos un momento en este componente y trabajar en el custom hook.


----
Creemos un archivo nuevo llamado _useEventlistener.js_

Exportamos una funcion que tome 3 parametros pero el ultimo tiene un default param a `window`.
estos tres parametros son _nombre del evento_, _la funcion_ que correrá cuando  suceda el evento, y el _elemento_ al cual asignarlo.

```js
export default (eventName,handler,element=window)=>{}
```
Dentro del la funcion primero creamos una ref con `useRef()`

`const savedHandler=useRef()`

En este momento, no tenemos importado este hook. vamos a *importarlo* al principio del archivo.

`import {useRef} from 'react';`

Ahora usamos el hook `useEffect` para guardar  la funcion que recibimos como argumento a la ref que creamos anteriormente.

```js
 useEffect(() => {
    savedHandler.current = handler
  }, [handler])
  ```

3 cosas que notar

- Tenemos que importar `useEffect from 'react' `
-  el metodo `useRef()` no solo es para guardar nodos. aqui lo usamos para guardar una referencia a nuestra funcion :scream: es el equivlente a una variable de intancia.
-  Al final está de nuevo declarando un array de dependencias para no volver a correr esta asignacion en cada re-render. 


 por ultimo usamos useEffet de nuevo con otra funcion.
 Por motivos de claridad mostramos la estructura de la segunda llamada a useEffect

 ```js
useEffect(
    ()=>{}, 
    [eventName,element]
)
```

a este useEffect le estamos diciendo que las dependencias son *eventName* y el *element* los cuales ambos obtenemos de los parametros

Ahora en el cuerpo de esta funcion 

1. checamos que elemento no venga vacío y tambien que se le pueda asignar un  _eventListener_ , si esta vacio terminamos la funcion con un `return` prematuro.

2. creamos un variable eventlistener  que sea funcion que asigne el evento a  la ref.
` const eventListener = event => savedHandler.current(event)`
`current` en esta caso , es la funcion que obtenemos por parametro pero guardada en una ref. Es basicamente una copia del `handler`

3. Usamos le funcion `addEventListener` del element pasandole el nombre del evento (parametro) y el eventlistener de la linea anterior.
` element.addEventListener(eventName, eventListener)`
4. por ulitmo, _regresamos _ una funcion que remueve el eventListener

Recuerda que lo que regresamos de un hook, se corre cuando se desmonte el component que lo implementa

Recapitulemos

```js
export default(eventName,handler, element=window) =>{

const savedHandler = useRef();

 useEffect(() => {
    savedHandler.current = handler
  }, [handler]);

  useEffect(
    () => {
      // asegurate que el element soporte addEventListener
      
      const isSupported = element && element.addEventListener
      if (!isSupported) return

      
      //crea un eventListener que llama  la funcion handler guardada en ref
      const eventListener = event => savedHandler.current(event)

      // agrega el  event listener
      element.addEventListener(eventName, eventListener)

      // remueve el eventListener cuando termines.
      return () => {
        element.removeEventListener(eventName, eventListener)
      }
    },
    [eventName, element], // vuelve a correr solo si el eventName o el elemento cambia
  )

}
```

Quizas te preguntes para que le pasamos dependencias a las funciones si se que nunca va a cambiar el `eventName`, el `handler`  o el `element`.
Recuerda que estamos diseñando un hook que  puede ser usado en cualquier contexto  y momento. 
este mismo hook lo puedes usar en otra app , en un boton , en la ventana, sobre una div  etc.

---

de vuelta a nuestro archivo principal ...


importamos el hook que hicimos
`import useEventListener from './useEventlistener'`

y lo llamamos  justo antes del render


```JSX

import React, { useState,  useCallback } from 'react';
import useEventListener from './useEventlistener';
import './styles.scss'

// Usage
export default  () => {
  //state para guardar las coordenadas del mouse
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  // un handler usando  useCallback para que la referencia nunca cambie

  const handler = useCallback(
    ({ clientX: x, clientY: y }) => {
      // actualizar coordenadas
      setCoords({ x, y })
    },
    [setCoords],
  )

  // agrega el eventListener usando nuestro hook
  useEventListener('mousemove', handler)

  return (
     <div className="eventListener-1-demo">the mouse position is ({coords.x}, {coords.y})</div>    
  )
}
```


Como nuestro hook tiene el tercer parametro opcional, si nose lo pasamos usame que es `window`



