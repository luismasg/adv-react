##### EJERCICIO-4

## un refresher de lo que aprendimos

### OBJETIVO

Como parte es este ejercicio es parecido al anterior. Queremos convertir una clase en un compoente funcional

#### REQUISITOS

* Ejecutar `npm install` o `yarn` en la raiz de este proyecto
* Ejecutar `npm start` o `yarn start` en la raiz de este proyecto
* Navegar a la pagina `http://localhost:8080/refs/video`

### DESARROLLO


el codigo original crea un eventListener sobre el evento 'visibilitychange' , esto es, cuando escojemos una pestaña diferente en el browser.

usa CWU para destruir el eventListener.

para convertirlo a una component funcional  usando hooks usaremos `useEffect`. 

Necesitamos 3 cosas.

- la función que cambia el title del documento ( el texto que se ve en la pestaña)
  -  Esta funcion no recibe argumentos , mas bien tiene que leer el atributo hidden     (booleano) del `document`

- el codigo que agrega el eventlistener al `document` y corre la funcion anterior

- la funcion de retorno que le dice a React como destuir el eventListener  cuadno se desmonte este componente
  
