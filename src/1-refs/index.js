import React from 'react'

import { Router, Link } from '@reach/router'

import Prework1 from './1-js-ref'
import Prework2 from './2-js-ref'
import FocusCreateRef from './3-focus-createRef'
import FocusUseRef from './4-focus-userRef'
import Video from './5-video-createRef'
import VideoUseRef from './6-video-useRef'

const Home = () => (
  <section className="fl w-100">
    <div className="fl w-90 ph3">
      <h2 className="f2">Refs</h2>
      <div className="pa3 pa5-ns">
        <ul className="list pl0 measure">
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="prework-1">Pure JS ref</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="prework-2">Pure JS ref</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="focus-create-ref">Focus</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="focus-useref">Focus useRef</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="video">Video</Link>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <Link to="video-useref">Video Use Ref</Link>
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
      <Prework2 path="prework-2" />
      <FocusCreateRef path="focus-create-ref" />
      <FocusUseRef path="focus-useref" />
      <Video path="video" />
      <VideoUseRef path="video-useref" />
    </Router>
  )
}
