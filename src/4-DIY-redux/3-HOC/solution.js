import React, { Component } from 'react'

function tick(WrappedComponent) {
  return class HOC extends Component {
    state = {
      seconds: 0,
    }
    timer = 0
    componentDidMount() {
      this.timer = setTimeout(this.changeSecond, 1000)
    }
    componentWillUnmount() {
      clearTimeout(this.changeSecond)
    }

    changeSecond = () => {
      this.setState(({ seconds }) => ({
        seconds: seconds + 1,
      }))
      this.timer = setTimeout(this.changeSecond, 1000)
    }
    render() {
      return <WrappedComponent seconds={this.state.seconds} />
    }
  }
}

const DisplaySeconds = ({ seconds }) => <div>secons: {seconds}</div>

DisplaySeconds.propTypes = {
  seconds: Number,
}

export default function HOC() {
  const HigherOrderComponetn = tick(DisplaySeconds)
  return <HigherOrderComponetn />
}
