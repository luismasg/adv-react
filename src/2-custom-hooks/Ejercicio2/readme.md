##### Reto-2

## un refresher de lo que aprendimos

### OBJETIVO

Como parte es este ejercicio es parecido al anterior. Queremos convertir una clase en un componente funcional

#### REQUISITOS

* Ejecutar `npm install` o `yarn` en la raiz de este proyecto
* Ejecutar `npm start` o `yarn start` en la raiz de este proyecto
* Navegar a la pagina `http://localhost:8080/refs/video`

### DESARROLLO


el codigo original crea un eventListener sobre el evento 'visibilitychange'.  esto es, cuando escojemos una pestaña diferente en el browser.

usa CWU para destruir el eventListener.

para convertirlo a una component funcional  usando hooks usaremos `useEffect`. 

`useEffect` necesita 3 cosas.

- la función que cambia el title del documento ( el texto que se ve en la pestaña)
  -  Esta funcion no recibe argumentos, mas bien tiene que leer el atributo `hidden` (booleano) del `document`
- El codigo que agrega el eventlistener al `document` y corre la funcion anterior
- La funcion de retorno que le dice a React como destuir el eventListener  cuadno se desmonte este componente
  
Si estás teniendo el presentimiento que `useEffect` está haciendo el trabajo de componentDidmount y componentWillUnmount es por que en efecto al depender del lenguaje y las closures, muchas cosas se facilitan elegantemente por consecuencia del event loop natural de js.

No es tanto que useEffect sea una imitacion de CDM y CWU juntos. Mas bien CDM, CDUpdate y CWU fueron necearios para lidiar con los diferentes egde cases que empezaron a salir al manejar el state.  useEffect es mas apegado al funcionamiento de js sin frameworks.

Tambien, si te preguntas cual seria el equivalente a componentDidUpdate, esas serian las dependencias que le pasas como segundo argumento el hook  (el array de dependencias) esto hace que se vuelva a correr si cambia el valor. 