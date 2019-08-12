import React from 'react'
import flowerVideo from '../assets/flower.mp4'
import './styles.scss'

export default class Player extends React.Component {
  state = { isPlaying: false }

  togglePlay = () => {
    this.setState({ isPlaying: !this.state.isPlaying })
  }

  render() {
    const { isPlaying } = this.state

    return (
      <div className="ref6-videouseRef">
        <Video isPlaying={isPlaying} />
        <button onClick={this.togglePlay}>
          {isPlaying ? 'pause' : 'play'}
        </button>
      </div>
    )
  }
}

class Video extends React.Component {
  ref = React.createRef()

  componentDidUpdate() {
    if (this.ref.current !== null) {
      this.props.isPlaying ? this.ref.current.play() : this.ref.current.pause()
    }
  }

  render() {
    return <video src={flowerVideo} ref={this.ref} />
  }
}
