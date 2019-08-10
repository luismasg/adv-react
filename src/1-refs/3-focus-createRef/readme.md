##### EJERCICIO-02

## Referencias en JS

### OBJETIVO

Como utilizar el api de `createRef`

#### REQUISITOS

* Ejecutar `npm install` o `yarn` en la raiz de este proyecto
* Ejecutar `npm start` o `yarn start` en la raiz de este proyecto
* Navegar a la pagina `http://localhost:8080/refs/focus-create-ref"`

### DESARROLLO

En esta ocasion vamos a expandir en el ejercicio anterior para poder modificar el dom imperativamente.

 #### no abusar de las refs
las refs tienen sus usos por compatibilidad o casos muy especificos pero por lo general si hay una manera de hacer lo que necesitas que no involucre refs es mejor no usarlas

en la pantalla tenemos tres botones , dos inputs  y una lista. Nuestro objetivo es usar refs para lograr 3 diferentes cosas.

### .focus()

Queremos hacer focus en el campos de name , para eso primero creamos una ref  con ```inputRef=React.createRef()``` luego la asignamos al primero input  usando ```ref={this.inputRef}``` y finalmente en el metodo ```handleFocusClick``` tenemos que llamar el método focus del elemento ```current``` de la ref. Primero asegurate que la ref si este apuntando a un nodo antes de intentar invocar metodos.Ten en mente que el atributo ```current``` es una referencia directa al nodo del DOM por lo que tiene todos los [metodos estandar de nodo]('https://developer.mozilla.org/en-US/docs/Web/API/Node#Methods')

```js
handleFocusClick = () => {
    console.log(this.inputRef)
    if (this.inputRef.current !== null) {
      this.inputRef.current.focus()
    }
  }
  ```
si probamos esto en el browser podemos ver como el cursor de texto se posiciona dentro del campo indicando.


### .remove()

Este es _similar_ al focus.
creamos una ref llamada `addressRef`  y la asignamos al segundo input.
Posteriormente dentro del método `handleDeleteClick`  queremos comprobar que la ref no sea nula para despues aplicarle el metodo remove al nodo.
**_En este caso queremos aplicarle el metodo remove al  _** [elemento padre]('https://developer.mozilla.org/en-US/docs/Web/API/Node) dado a que está dentro de una `<label>`.
si tenemos exito, deberia desaparecer el campo `address` junto con la etiqueta.
en este punto es bueno aclarar que el nodo no se esconde, ni pierde opacidad. Se elimina del DOM.


### .append()

por ultimo vamos a intentar agregar imperativamente el texto del campo ```Address``` a la lista.  Para lograrlo necesitamos:
- crear una ref llamada `ulRef` y asignarla a la ul
- dentro del metodo `handleAttachClick`, queremos verificar que la ulRef no sea nula y que el  campo `Address` no esté vacio. luego [creamos un elemento]('https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement')  tipo 'li' y asignamos su `innerText` al contenido del campo `Address`
- usamos `.append()` para insertar el element que acabamos de crear dentro de la ul.

Cabe aclarar que esto no va a funcionar si ya removimos el campo `Address`` con el boton anterior por lo que tenemos que recargar la pagina.

Si tenemos exito podremos agregar lo que esté en el campo `Address` a la lista.

como una meta extra, despues de agregar una direccion nueva a la lista queremos
- borrar el contenido del campos `Address
- posicionar el curso dentro del campos para agregar otro


