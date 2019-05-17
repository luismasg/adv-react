import React, { Component, createRef } from 'react'

class CreateRef extends Component {
  constructor(props) {
    super(props)
    this.inputRef = createRef()
  }
  render() {
    return (
      <div className="pa4">
        <button
          onClick={() => {
            console.log(this.inputRef)
            if (this.inputRef.current !== null) {
              this.inputRef.current.focus()
            }
          }}
        >
          focus
        </button>
        <input className="mh3" type="text" ref={this.inputRef} />
      </div>
    )
  }
}

export default CreateRef
