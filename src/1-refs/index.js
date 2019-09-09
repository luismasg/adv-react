import React from 'react'

import { Router, Link } from '@reach/router'

import Ejemplo1 from './Ejemplo1'
import Ejercicio1 from './Ejercicio1'
import Ejemplo2 from './Ejemplo2'
import Ejercicio2 from './Ejercicio2'
import Postwork1 from './Postwork1'
import PostWork2 from './PostWork2'

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
            <Link to="Ejercicio1">Reto 1: un input no controlado</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="Ejemplo2">Ejemplo 2:</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="Ejercicio2">Reto 2:</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="Postwork1">PostWork 1: createRef y video </Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="PostWork2">
              PostWork 2: usar refs de manera declarativa
            </Link>
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
      <Ejercicio1 path="Ejercicio1" />
      <Ejemplo2 path="Ejemplo2" />
      <Ejercicio2 path="Ejercicio2" />
      <Postwork1 path="Postwork1" />
      <PostWork2 path="PostWork2" />
    </Router>
  )
}
