import React from 'react'
import { Router, Link } from '@reach/router'

import Ejemplo1 from './Ejemplo1'
import Reto1 from './reto1'
import Ejemplo2 from './Ejemplo2'
import Reto2 from './reto2'
import Ejemplo3 from './ejemplo3'
import Postwork1 from './Postwork1'

const Home = () => (
  <section className="fl w-100">
    <div className="fl w-90 ph3">
      <h2 className="f2">Refs</h2>
      <div className="pa3 pa5-ns">
        <ul className="list pl0 measure">
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="Ejemplo1">
              Ejemplo 1:usando referencias con Timeouts{' '}
            </Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="Reto1">Reto 1: un input no controlado</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="Ejemplo2">Ejemplo 2: createRef y focus</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="Reto2">Reto 2: useRef y focus con forwardRef </Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="Ejemplo3">
              Ejemplo 3 : usar refs de manera declarativa
            </Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="Postwork1">Postwork: createRef y video </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default function Refs() {
  return (
    <Router>
      <Home path="/" />
      <Ejemplo1 path="Ejemplo1" />
      <Reto1 path="Reto1" />
      <Ejemplo2 path="Ejemplo2" />
      <Reto2 path="Reto2" />
      <Ejemplo3 path="Ejemplo3" />
      <Postwork1 path="Postwork1" />
    </Router>
  )
}
