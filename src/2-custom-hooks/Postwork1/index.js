import React, { useState, useRef, useEffect, useCallback } from 'react'

export default () => {
  const WindowSize = {
    innerWidth: 200,
    innerHeight: 400,
  }

  return (
    <div className="eventListener-1-demo">
      the screen size is ({WindowSize.innerWidth}, {WindowSize.innerHeight})
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
