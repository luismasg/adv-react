##### EJEMPLO 1

## Referencias en JS

### OBJETIVO

Entender como las referencias funciona en la practica.

#### REQUISITOS

- Ejecutar `npm install` o `yarn` en la raiz de este proyecto
- Ejecutar `npm start` o `yarn start` en la raiz de este proyecto
- Navegar a la pagina `http://localhost:8080/refs/prework-1`

### DESARROLLO

- Modificar el archivo para que la variable `this.ref1` sea modificada cada segundo con el valor de `Date.now()`

- Cancelar el timer

lo que queremos hacer en empezar un contador cuando se monta la clase.
para esto usamos el metodo de ciclo de vida llamado `componentWillMount`

1. dentro del `componentDidMount` (cdm), declara una fat arrow function llamada `updateTime` que haga dos cosas:
   - asignar al atributo `time` de la ref1 el timestamp actual
   - iniciar un timeout de un segundo que llame a `updateTime` y asignar el valor de regreso a una variable de instancia llamada `timer`
2. dentro del `cdm` pero afuera de `updateTime` vuelve a crear un timeout de 1 segundo asignado a `this.timer` que llame a `updateTime`

<details>

```js
 componentDidMount() {
    const updateTime = () => {
      this.ref1.time = Date.now()
      this.timer = setTimeout(updateTime, 1000)
    }
    this.timer = setTimeout(updateTime, 1000)
  }
```

<summary >Solución</summary>
</details>

3. el timeout que iniciamos seguirá corriendo por su cuenta sin importar lo que haga react, por lo que necesitamos usar la referencia del timer que obtuvimos en el paso 2 para cancelarlo cuando desmontemos el componente, de lo contrario generaria un [memory leak]('https://en.wikipedia.org/wiki/Memory_leak') o fuga de memoria. En el mejor de los casos esto nos daría un molesto warning en la consola, en el peor de los casos un desempeño lento.

   ```js
   componentWillUnmount(){
       clearTimeout(this.timer)
   }
   ```

   Ahora cuando corremos la app , podemos ver que apesar de que estamos asignando el valor the `date.now()` a  `ref1` , cuando mostramos ref2 en pantalla su valor también se actualiza. esto es por que ambos son una referencia al mismo objeto original : ` {time:0}`
