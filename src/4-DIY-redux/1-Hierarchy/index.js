import React, { useState } from 'react'

const Header = ({ name }) => (
  <header>
    <img href="" />
    <nav>
      <a href="#">{window._name}</a>
    </nav>
  </header>
)

Header.propTypes = {
  name: String,
}
const Footer = ({ changeName }) => (
  <footer>
    <a href="mailto:example@google.com">mail</a>
    <button
      className="ml6"
      onClick={() => {
        changeName()
      }}
    >
      contact
    </button>
  </footer>
)

Footer.propTypes = {
  changeName: Function,
}

const Body = ({ name, changeName }) => (
  <div className="flex flex-column justify-between h5">
    <Header name={name} />
    <Footer changeName={changeName} />
  </div>
)

Body.propTypes = {
  name: String,
  changeName: Function,
}

// export default function Hirarchy() {
//   const [name, setName] = useState('rodrigo')
//   return (
//     <Body
//       name={name}
//       changeName={() => {
//         // console.log('changeName')
//         setName('aldo')
//       }}
//     />
//   )
// }

export default class Hirarchy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'rodrigo',
    }
    this.changeName = this.changeName.bind(this)
  }
  changeName() {
    this.setState({
      name: 'aldo',
    })
  }
  render() {
    return (
      <Body
        name={this.state.name}
        changeName={() => {
          this.changeName()
        }}
      />
    )
  }
}
