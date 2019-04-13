import React from 'react'

import { Router, Link } from '@reach/router'

import Hierarchy from './1-Hierarchy'
import Pure from './2-Pure'
import HOC from './3-HOC'
import Redux from './4-Redux'
import Redux2 from './5-Redux'

const Home = () => (
  <section className="fl w-100">
    <div className="fl w-90 ph3">
      <h2 className="f2">DIY Redux</h2>
      <div className="pa3 pa5-ns">
        <ul className="list pl0 measure">
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="hierarchy">Jerarquia</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="pure">Pure</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="hoc">HOC</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="redux">DIY redux</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="redux2">DIY redux 2</Link>
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
      <Hierarchy path="hierarchy" />
      <Pure path="pure" />
      <HOC path="hoc" />
      <Redux path="redux" />
      <Redux2 path="redux2" />
    </Router>
  )
}
