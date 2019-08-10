import React, { Component, createRef } from 'react'
import './styles.scss'
class CreateRef extends Component {
  constructor(props) {
    super(props)
    this.inputRef = createRef()
    this.addressRef = createRef()
    this.ulRef = createRef()
  }

  handleAttachClick = () => {
    console.log(this.ulRef)
    if (this.ulRef.current !== null && this.addressRef.current.value !== '') {
      const p = document.createElement('li')
      p.innerText = this.addressRef.current.value
      this.ulRef.current.append(p)

      // puntos extra
      this.addressRef.current.value = ''
      this.addressRef.current.focus()
    }
  }

  handleDeleteClick = () => {
    console.log(this.addressRef)
    if (this.addressRef.current !== null) {
      this.addressRef.current.parentNode.remove()
      //this.addressRef.current.parentElement.remove() tambien funciona
    }
  }
  handleFocusClick = () => {
    console.log(this.inputRef)
    if (this.inputRef.current !== null) {
      this.inputRef.current.focus()
    }
  }

  render() {
    return (
      <div className="pa4 ref3-prework">
        <h1>Getting close with refs</h1>
        <div>
          <button onClick={this.handleFocusClick}>focus on Name field</button>
          <button onClick={this.handleDeleteClick}>Delete Adress Field</button>
          <button onClick={this.handleAttachClick}>attach p to ul</button>
        </div>
        <label>
          Name
          <input className="mh3 nameField" type="text" ref={this.inputRef} />
        </label>
        <label>
          Address
          <input
            className="mh3 addressField"
            type="text"
            ref={this.addressRef}
          />
        </label>

        <h2>Addresses</h2>
        <ul ref={this.ulRef}>
          <li> Casablanca 27</li>
        </ul>
      </div>
    )
  }
}

export default CreateRef
