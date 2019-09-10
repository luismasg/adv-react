import React from 'react'
import './styles.scss'

class Example extends React.Component {
  // Crea the ref
  textInputRef = React.createRef()
  state = {
    value: '',
  }

  //actualiza el valor state usando la ref
  handleSubmit = e => {
    e.preventDefault()
    this.setState({ value: this.textInputRef.current.value })
  }

  render() {
    return (
      <div className="ref2-prework">
        <h1>React Ref - createRef</h1>
        <code className="mb5">state.value: {this.state.value}</code>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.textInputRef} />
          <button>update in state</button>
        </form>
      </div>
    )
  }
}

export default Example
