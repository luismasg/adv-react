##### Postwork 2


### OBJETIVO

crea un custom hook para actualizar el contenido del input  y guardarlo al  local storage

cada ves que cambies el valor del input, necesitas guardarlo en localstoraga.
de tal manera que si refrescas la pantall no se pierda


#### DESARROLLO


Actualmente estamos guardando en memoria la modificacion al input.
pero si refrescamos, se pierde el valor y regresa al valor inicial.

lo primero que tenemos que hacer es modificar el useState hook para que se respalde en localStorage.
lo cual requiere  controlar que pasa si es que no funciona.


- intentar (try)  obetener el valor del storage 
so no funciona regresar el valor inicial .
- guardar el state usando
- regresar nuestra propia version del valor y la funcion para actualizarlo.
  
  Creamos  nuestro custom hook llamado useLocalState que toma dos parametros. el nombre y el valor inicial 

  ```function useLocalStorage(key, initialValue)```

luego usamos inicializacion lazy para crear el valor 'inicial' del hook

```js 
  const [storedValue, setStoredValue] = useState(() => {
  
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      return initialValue
    }
  })
  ```

  acto seguido creamos una función spara actualizar el valor 

```js
 const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error)
    }
  }
  ```

  al final regresamos estos dos valores 
  ```  return [storedValue, setValue```


en resumen : 

  ```js 
  function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
  
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error)
    }
  }

  return [storedValue, setValue]
}
```

de vuelta al  jsx :

cambiar useState por nuestra nueva version 

```js 
export default function() {
  const [name, setName] = useLocalStorage('name', 'juan perez')

  return (
    <div>
      <input
        type="text"
        placeholder="introduce tu nombre"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  )
}
```

para probarlo podemos modificar el valor inicial del input  y refrescamos la pagina. el valor persiste.