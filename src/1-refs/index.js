import React from 'react'

import { Router, Link } from '@reach/router'

import Prework1 from './1-prework-createRef'

const Home = () => (
  <section className="fl w-100">
    <div className="fl w-90 ph3">
      <h2 className="f2">Refs</h2>
      <div className="pa3 pa5-ns">
        <ul className="list pl0 measure">
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="prework-1">Create ref</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            Grapefruit
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            Kiwi
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
      <Prework1 path="prework-1" />
    </Router>
  )
}
