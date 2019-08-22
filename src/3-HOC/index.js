import React from 'react'
import { Router, Link } from '@reach/router'

import Prework1 from './1-prework'
import Prework2 from './2-prework'
import Refresher1 from './3-refresher'
import Refresher2 from './4-refresher'
import Postwork1 from './5-postwork'
import Postwork2 from './6-postwork'

import hocs from './hoc-intro.jpg'
const Home = () => (
  <section className="fl w-100">
    <div className="fl w-90 ph3">
      {/* <h2 className="f2">Hooks</h2> */}
      <img src={hocs} alt="" />
      <div className="pa3 pa5-ns">
        <ul className="list pl0 measure">
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="prework-1">prework 1</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="prework-2">prework 2</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="refresher1">Refresher 1</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="refresher2">Refresher 2</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="postwork1">Postwork 1</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="postwork2">Postwork 2</Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default function HOC() {
  return (
    <Router>
      <Home path="/" />
      <Prework1 path="prework-1" />
      <Prework2 path="prework-2" />
      <Refresher1 path="refresher1" />
      <Refresher2 path="refresher2" />
      <Postwork1 path="postwork-1" />
      <Postwork2 path="postwork-2" />
    </Router>
  )
}
