##### RETO-01

## Referencias en JS

### OBJETIVO

Entender como las referencias funciona en la practica.

#### REQUISITOS

- Ejecutar `npm install` o `yarn` en la raiz de este proyecto
- Ejecutar `npm start` o `yarn start` en la raiz de este proyecto
- Navegar a la pagina `http://localhost:8080/refs/prework-2`

### DESARROLLO

Esta vez vamos a usar un metodo inusual de manejar un input. En lugar de definirle un `value` y un `onChange` al input, vamos a usar un boton para tomar el valor del input (usando su ref) y guardarlo en el `state`

Crea un ref llamada `textInputRef` como propiedad de instancia usando

```Javascript
class Example extends React.Component {
textInputRef = React.createRef()
 . . .
```

En este momento se crea la ref de react pero aun no se le asigna ningun valor

declara el state inicial como `{value:''}` es donde vamos a guardar el valor de nuestro input.

```Javascript
class Example extends React.Component {
textInputRef = React.createRef()
state = {
  value: '',
}
```

Nuestra intención es accesar el nodo html subyacente de manera imperativa, si bien, no es la manera react de hacerlo, resulta util cuando estamos integrando con librerias externas.

Para hacerlo vamos a declarar una forma con un input y un submit.
Al input le asignamos la ref llamada `textInputRef` que creamos anteriormente

```JSX
<form >
  <input type="text" ref={this.textInputRef} />
  <button>update in state</button>
</form>
```

Este input no está [controlado]('https://reactjs.org/docs/forms.html#controlled-components'), se maneja normalmente de acuerdo al spec HTML5, por lo que no está conectado al state ni ocasiona re-renders del componente.

por el momento no hace nada el input al componente de react, se rige solo.
Queremos copiar su valor al state del componente.
Primero vamos a mostrar el contendo del state en nuestro componente

```JSX

<div className="ref2-prework">
    <h1>React Ref - createRef</h1>
    <code>state.value: {this.state.value}</code>
    <form >
        <input type="text" ref={this.textInputRef} />
        <button>update in state</button>
    </form>
</div>

```

si corremos la aplicacion en el browser en estos momentos, podemos ver que el state no se está actualizando. lo que es peor, se refreca la pagina y se pierde el valor.

para corregirlo tenemos que agregar la funcion handleSubmit, prevenir el default y agregar el metodo a la forma

```js
handleSubmit = e => {
  e.preventDefault()
}

. . .

  <form onSubmit={this.handleSubmit}>

```

Por ultimo vamos a tomar el valor del input y guardarlo dentro del state. recuerda que el nodo html que queremos accesar esta dentro de la propiedad `current` de la ref

```js
handleSubmit = e => {
  e.preventDefault()
  this.setState({ value: this.textInputRef.current.value })
}
```
