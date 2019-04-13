import React from 'react'

class Example extends React.Component {
  constructor(props) {
    super(props)

    // Create the ref
    this.exampleRef = React.createRef()
  }

  render() {
    return (
      <div>
        <input type="text" />
      </div>
    )
  }
}
