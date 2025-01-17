import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Link } from '@reach/router'

import Refs from './1-refs'
import Hooks from './2-custom-hooks'
import Hocs from './3-HOC'
import DIYRedux from './4-DIY-redux'
import Auth0 from './5-auth0'

let Home = () => (
  <section className="fl w-100">
    <div className="fl w-90 ph3">
      <h1 className="f1">Class index</h1>
      <div className="pa3 pa5-ns">
        <ul className="list pl0 measure">
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="refs">Refs</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="hooks">Hooks</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="hoc">HOC</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="redux">DIY Redux</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="auth0">Auth0</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="apollo">Apollo</Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

ReactDOM.render(
  <main className="sans-serif">
    <Router>
      <Home path="/" />
      <Refs path="refs/*" />
      <Hocs path="hoc/*" />
      <Hooks path="hooks/*" />
      <DIYRedux path="redux/*" />
      <Auth0 path="auth0/*" />
    </Router>
  </main>,
  document.querySelector('#root'),
)
