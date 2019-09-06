import React, { Component, createRef } from 'react'
import flowerVideo from '../assets/flower.mp4'
import './styles.scss'

class Video extends Component {
  ref = createRef()
  render() {
    return (
      <div className="pa3 refs-video1">
        <div className="fl w-100 pa2">
          <video src={flowerVideo} ref={this.ref} />
        </div>
        <div className="fl w-25 pa2">
          <button
            onClick={() => {
              if (this.ref.current !== null) {
                this.ref.current.play()
              }
            }}
          >
            play
          </button>
        </div>
        <div className="fl w-25 pa2">
          <button
            onClick={() => {
              if (this.ref.current !== null) {
                this.ref.current.pause()
              }
            }}
          >
            pause
          </button>
        </div>
      </div>
    )
  }
}

export default Video
