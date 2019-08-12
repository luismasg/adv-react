##### RETO-3

## Referencias en JS

### OBJETIVO

En este ejecicio vamso a encapsular la logica imperativa del video y exponer una declarativa mas alineado al mindset React.

#### REQUISITOS

* Ejecutar `npm install` o `yarn` en la raiz de este proyecto
* Ejecutar `npm start` o `yarn start` en la raiz de este proyecto
* Navegar a la pagina `http://localhost:8080/refs/video`

### DESARROLLO

1. Primero vamos a crear un archivo nuevo llamada  `video.js` y crear una clase que regre el video en el metodo `render()`
2. Usamos `React.createRef()` para crear una `ref` y luego la asignamos al video.
3. Creamos el metodo `componentDidUpdate()` y adentro checamos que la ref no sea `null` y despues cuando `this.props.isPlaying` sea `true` empezamos la reproduccion del video. si es `false` la detenemos. 

```js
 componentDidUpdate() {
    if (this.ref.current !== null) {
      this.props.isPlaying ? this.ref.current.play() : this.ref.current.pause()
    }
  }
```

##### De vuelta a nuestro archivo principal.

4. Declaramos state con una propiedad llamada `isPlaying` igual a `false`
5. Borramos un boton y al otro boton le cambiamos el texto para condicionalmente mostrar `play` o `pause` al inverso de nuestro state y en el onClick conmutamos `state.isPlaying` de `true` a `false`

Por ultimo importamos nuestro componente `Video` y lo rendereamos en lugar del anterior y le pasamos la prop `isPlaying` igual a  `this.state.isPlaying` 

`<Video isPlaying={this.state.isPlaying} />`






