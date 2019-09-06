import React, { Component, createRef } from 'react'

class Refresher extends Component {
  state = {
    hueComponent: 0,
  }
  sectionRef = createRef()
  componentDidMount() {
    if (this.sectionRef.current !== null) {
      const sectionDomElement = this.sectionRef.current
      sectionDomElement.addEventListener('scroll', this.handleScroll)
    }
  }
  handleScroll = ({ srcElement }) => {
    this.setState({
      hueComponent: (srcElement.scrollTop / srcElement.offsetHeight) * 360,
    })
  }
  render() {
    const { hueComponent } = this.state
    return (
      <section
        ref={this.sectionRef}
        style={{
          width: '100vw',
          height: '100vh',
          overflow: 'scroll',
        }}
      >
        <div
          style={{
            width: '100vw',
            height: '200vh',
            backgroundColor: `hsl(${hueComponent}, 100%, 77%)`,
          }}
        />
      </section>
    )
  }
}

export default Refresher
