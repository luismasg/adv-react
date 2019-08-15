##### EJERCICIO-3

## Creando tus propios hooks

### OBJETIVO

Como parte es este ejercicio  vamos controlar el tono de un elemento en base a su posicion.

#### REQUISITOS

* Ejecutar `npm install` o `yarn` en la raiz de este proyecto
* Ejecutar `npm start` o `yarn start` en la raiz de este proyecto
* Navegar a la pagina `http://localhost:8080/refs/video`

### DESARROLLO


Tenemos una seccion  que usa un color tipo HSL , el hue es una valor radial que varia los tonos. la `s` es la saturacion y la `l es la luminancia.
Queremos 'girar' el tono con el scroll bar.

Para hacer esto calculamos al distancia a scrolltop eso lo convertimos an grados.
este componente usa los metodos componentDidmount para generar la suscripsion a el evento scroll.

Queremos convertirlo a un componente funcional  usando hooks.

1. Primero convertimos esta clase a un componente funcional
2. usando useRef  y useState , generamos la ref  `sectionRef`  y el hueComponent (junto con su setHueComponent)

```js 
import React, { useState, useRef, useEffect } from 'react'

export default function Refresher() {
  const sectionRef = useRef(null)
  const [hueComponent, setHueComponent] = useState(0)
  . . . 
```

3.  usando `useEffect` primero confirmamos que la ref no esté vacia y le creamos una eventListener al elemento de la ref (la seccion) que responda a 'scroll' 
en el callback, calculamos la relacion entre scrollTop y offsetHeight  y lo multiplicamos por 360. esto es, scroll hasta arriba corresponde a 0 grados, scroll hasta abajo , equivale a 360 grados. el resultado va a ser nuestro  nuevo  hueComponent usando `setHueComponent` 

```js
useEffect(() => {

    // el callback que va a recibir el evento
    function handleScroll({ srcElement }) {
      setHueComponent((srcElement.scrollTop / srcElement.offsetHeight) * 360)
    }

    //si la ref no viene vacia, creamos el eventLsitener  y le pasamos el callback
    if (sectionRef.current !== null) {
      const sectionDomElement = sectionRef.current
      sectionDomElement.addEventListener('scroll', handleScroll)
    }
  }, [sectionRef.current]) /* este eventListener solo debe volver a correrse si cambia la seccion*/
```

por ultimo recordemos que este ya no es una clase por lo que `this` ya no existe. 
4. Quitamos la referencia a `this` de la ref  `this.sectionRef` es ahora `sectionRef`




