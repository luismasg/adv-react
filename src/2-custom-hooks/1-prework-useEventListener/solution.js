import React, { useState, useRef, useEffect, useCallback } from 'react'
import './styles.scss'

/**
 * lo que los alumonos construiran es el hook en un archivo separado
 * por lo que este archivo tendra menos import y el otro archivo no necesita React
 */

export default () => {
  //state para guardar las coordenadas del mouse
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  // un handler usando  useCallback para que la referencia nunca cambie

  const handler = useCallback(
    ({ clientX: x, clientY: y }) => {
      // actualizar coordenadas
      setCoords({ x, y })
    },
    [setCoords],
  )

  // agrega el eventListener usando nuestro hook
  useEventListener('mousemove', handler)

  return (
    <div className="eventListener-1-demo">
      the mouse position is ({coords.x}, {coords.y})
    </div>
  )
}

// Hook
function useEventListener(eventName, handler, element = window) {
  const savedHandler = useRef()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(
    () => {
      // asegurate que el element soporte addEventListener

      const isSupported = element && element.addEventListener
      if (!isSupported) return

      //crea un eventListener que llama  la funcion handler guardada en ref
      const eventListener = event => savedHandler.current(event)

      // agrega el  event listener
      element.addEventListener(eventName, eventListener)

      // remueve el eventListener cuando termines.
      return () => {
        element.removeEventListener(eventName, eventListener)
      }
    },
    [eventName, element], // vuelve a correr solo si el eventName o el elemento cambia
  )
}
