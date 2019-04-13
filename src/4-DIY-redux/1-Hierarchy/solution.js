import React, { useState } from 'react'

const Header = ({ name }) => (
  <header>
    <img href="" />
    <nav>
      <a href="#">{name}</a>
    </nav>
  </header>
)

Header.propTypes = {
  name: String,
}

const Footer = ({ setName }) => (
  <footer>
    <a href="mailto:example@google.com">mail</a>
    <button
      className="ml6"
      onClick={() => {
        setName('new name')
      }}
    >
      contact
    </button>
  </footer>
)

Footer.propTypes = {
  setName: Function,
}

const Body = ({ name, setName }) => (
  <div className="flex flex-column justify-between h5">
    <Header name={name} />
    <Footer setName={setName} />
  </div>
)

Body.propTypes = {
  name: String,
  setName: Function,
}

export default function Hirarchy() {
  const [name, setName] = useState('my name')
  return <Body name={name} setName={setName} />
}
