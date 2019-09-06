##### RETO-2

## Referencias en JS

### OBJETIVO

usar el hook `useRef()` para llamar `.focus()` y practicar forwardRef

#### REQUISITOS

* Ejecutar `npm install` o `yarn` en la raiz de este proyecto
* Ejecutar `npm start` o `yarn start` en la raiz de este proyecto
* Navegar a la pagina `http://localhost:8080/refs/focus-useref`

### DESARROLLO

1. Este ejercicio es prácticamente igual que el anterior solo hay que user [`useRef`](https://reactjs.org/docs/hooks-reference.html#useref) en lugar de `React.createRef`.

La function `createRef()` asigna el valor a una variable de instancia.
en el caso de un component funcional no hay instancia a cual asignar.
por lo que ```useRef()``` resulta util

Primer creamos una variable llamada ref con el `useRef()` hook 
`const ref= React.useRef(null)` para despues asignar la ref al input con `ref={ref} y en onCick del botón primero confirmamos que no este vacia la referencia y luego hacemos focus

```JSX
 <button
        onClick={() => {
          if (ref.current !== null) {
            ref.current.focus()
          }
        }}
      >
```

Ahora vamos a crear un archivo nuevo donde creamos un input igual al que acabamos de ver.
  cuando lo exportemos vamos a usar forwardRef

  ```JSX
  import React from 'react';
   export default React.forwardRef((props, ref) => (
  <input ref={ref} {...props}  />
))
  ```

  y sustituimos el input por este componente 

  ```JSX
import React, { useRef } from 'react'
import FancyInput from './input'

function Focus() {
  const ref = useRef(null)
  return (
    <div className="pa4">
      <button  ...   >
        focus
      </button>
      <FancyInput ref={ref} />
    </div>
  )
}
  ````

  Ahora cuando intentamos hacer focus desde el componente padre, aun podemos usar la ref del hijo
