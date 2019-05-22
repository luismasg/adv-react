import React from 'react'

class Example extends React.Component {
  constructor(props) {
    super(props)

    // Create the ref
    this.exampleRef = React.createRef()
  }

  componentDidMount() {
    console.log(this.exampleRef)
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.exampleRef} />
      </div>
    )
  }
}
