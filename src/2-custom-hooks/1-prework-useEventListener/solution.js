import React, { useRef, useEffect } from 'react'

// Como usarlo
export default function UseEventListener() {
  // Estado para guardar las coordenadas del mouse
  const [coords, setCoords] = useState([0, 0])
  // Agregar event listener que usa el hook
  useEventListener('mousemove', ({ clientX, clientY }) => {
    // Update coordinates
    setCoords([clientX, clientY])
  })

  return (
    <h1>
      The mouse position is ({coords.x}, {coords.y})
    </h1>
  )
}

// Hook
function useEventListener(eventName, handler, element = global) {
  // Crear un ref que guarda el handler
  const savedHandler = useRef()

  // Acutualizar el valor ref.current si hanlder cambia.
  // Esto nos permite simpre tener el handler mas acutalizado
  // sin necesidad de pasar un arreglo de dependencias
  // y pontencialmente re-correr useEffext en cada render

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(
    () => {
      // Asegurarse que el elemento soporta addEventListener
      const isSupported = element && element.addEventListener
      if (!isSupported) return

      // Crear un event listener que llama la funcion handler guardada en ref
      const eventListener = event => savedHandler.current(event)

      // Agregar event listener
      element.addEventListener(eventName, eventListener)

      // Remover el event listener
      return () => {
        element.removeEventListener(eventName, eventListener)
      }
    },
    [eventName, element], // Ejecutar useEffect si cambia el nombre del evento o el elemento
  )
}
