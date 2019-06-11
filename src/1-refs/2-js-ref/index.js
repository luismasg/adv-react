import React from 'react'

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

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { flag } = this.state
    return (
      <div>
        {flag ? 1 : 0}
        <div>{this.ref2.time}</div>
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
