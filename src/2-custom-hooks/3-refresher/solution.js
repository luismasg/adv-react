import React, { useState, useRef, useEffect } from 'react'

export default function Refresher() {
  const sectionRef = useRef(null)
  const [hueComponent, setHueComponent] = useState(0)
  useEffect(() => {
    function handleScroll({ srcElement }) {
      setHueComponent((srcElement.scrollTop / srcElement.offsetHeight) * 360)
    }
    if (sectionRef.current !== null) {
      const sectionDomElement = this.sectionRef.current
      sectionDomElement.addEventListener('scroll', handleScroll)
    }
  }, [sectionRef.current])
  return (
    <section
      ref={this.sectionRef}
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'scroll',
      }}
    >
      <div
        style={{
          width: '100vw',
          height: '200vh',
          backgroundColor: `hsl(${hueComponent}, 100%, 77%)`,
        }}
      />
    </section>
  )
}
