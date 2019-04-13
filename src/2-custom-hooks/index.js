import React from 'react'
import { Router, Link } from '@reach/router'

import Prework1 from './1-prework-useEventListener'
import Prework2 from './2-prework-useDarkMode'
import Refresher1 from './3-refresher'
import Refresher2 from './4-refresher2'

const Home = () => (
  <section className="fl w-100">
    <div className="fl w-90 ph3">
      <h2 className="f2">Custom Hooks</h2>
      <div className="pa3 pa5-ns">
        <ul className="list pl0 measure">
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="prework-1">useEventListener</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="prework-2">useDarkmode</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="refresher1">Refresher 1</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="refresher2">Refresher 2</Link>
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

export default function CutomHooks() {
  return (
    <Router>
      <Home path="/" />
      <Prework1 path="prework-1" />
      <Prework2 path="prework-2" />
      <Refresher1 path="refresher1" />
      <Refresher2 path="refresher2" />
    </Router>
  )
}
