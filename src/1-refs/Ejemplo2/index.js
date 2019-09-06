import React, { Component, createRef } from 'react'
import './styles.scss'
class CreateRef extends Component {
  handleAttachClick = () => {
    console.log('not implemented yet')
  }

  handleDeleteClick = () => {
    console.log('not implemented yet')
  }
  handleFocusClick = () => {
    console.log('not implemented yet')
  }

  render() {
    return (
      <div className="pa4 ref3-prework">
        <h1>Getting close with refs</h1>
        <div>
          <button onClick={this.handleFocusClick}>focus on Name field</button>
          <button onClick={this.handleDeleteClick}>Delete Adress Field</button>
          <button onClick={this.handleAttachClick}>Submit Address</button>
        </div>
        <label>
          Name
          <input className="mh3 nameField" type="text" />
        </label>
        <label>
          Address
          <input className="mh3 addressField" type="text" />
        </label>

        <h2>Addresses</h2>
        <ul>
          <li> 24 First street, El paso,TX.</li>
        </ul>
      </div>
    )
  }
}

export default CreateRef
