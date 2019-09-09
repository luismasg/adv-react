import React from 'react'
import { Router, Link } from '@reach/router'

import Ejemplo1 from './Ejemplo1'
import Ejercicio1 from './Ejercicio1'
import Ejemplo2 from './Ejemplo2'
import Ejercicio2 from './Ejercicio2'
import Postwork1 from './Postwork1'
import Postwork2 from './Postwork2'

const Home = () => (
  <section className="fl w-100">
    <div className="fl w-90 ph3">
      <h2 className="f2">Custom Hooks</h2>
      <div className="pa3 pa5-ns">
        <ul className="list pl0 measure">
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="Ejemplo1">
              Ejemplo 1 : Get coords on MouseMove (useEventListener)
            </Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="Ejercicio1">Reto 1: set Hue using Scroll</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="Ejemplo2">Ejemplo 2: Set Dark mode </Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="Ejercicio2">Reto 2: Change doc title</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="Postwork1">
              Postwork 1: useCallback con window.resize
            </Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="Postwork2">Postwork 2:</Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default function CustomHooks() {
  return (
    <Router>
      <Home path="/" />
      <Ejemplo1 path="Ejemplo1" />
      <Ejercicio1 path="prework-2" />
      <Ejemplo2 path="Ejemplo2" />
      <Ejercicio2 path="refresher2" />
      <Postwork1 path="Postwork1" />
      <Postwork2 path="Postwork2" />
    </Router>
  )
}
