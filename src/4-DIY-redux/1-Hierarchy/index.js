import React from 'react'

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

const Footer = () => (
  <footer>
    <a href="mailto:example@google.com">mail</a>
    <button className="ml6">contact</button>
  </footer>
)

const Body = ({ name }) => (
  <div className="flex flex-column justify-between h5">
    <Header name={name} />
    <Footer />
  </div>
)

Body.propTypes = {
  name: String,
}

export default function Hirarchy() {
  return <Body name="my name" />
}
