import React, { Component, createRef } from 'react'
import flowerVideo from '../assets/flower.mp4'

class Video extends Component {
  state = {
    video: null,
  }
  ref = createRef()
  render() {
    return (
      <div className="pa3">
        <div className="fl w-100 pa2">
          <video src={flowerVideo} ref={this.ref} />
        </div>
        <div className="fl w-25 pa2">
          <button onClick={() => {}}>play</button>
        </div>
        <div className="fl w-25 pa2">
          <button onClick={() => {}}>pause</button>
        </div>
      </div>
    )
  }
}

export default Video
