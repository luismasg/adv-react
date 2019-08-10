import React from 'react'
import './styles.scss'

class Example extends React.Component {
  state = {
    flag: true,
  }
  constructor(props) {
    super(props)

    // Create the ref
    this.exampleRef = React.createRef()
    const refCont = { time: 0 }
    this.ref1 = refCont
    this.ref2 = refCont
  }

  componentDidMount() {
    const updateTime = () => {
      this.ref1.time = Date.now()
      this.timer = setTimeout(updateTime, 1000)
    }
    this.timer = setTimeout(updateTime, 1000)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    const { flag } = this.state
    return (
      <div className="ref1-prework">
        <h2>Understanding references</h2>
        <p>state.flag: {flag ? 1 : 0}</p>
        <p>ref2: {this.ref2.time}</p>
        <button
          onClick={() => {
            this.setState({ flag: !flag })
          }}
        >
          click
        </button>
      </div>
    )
  }
}

export default Example
