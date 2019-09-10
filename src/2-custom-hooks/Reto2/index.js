import React, { Component } from 'react'

class Refresher extends Component {
  orgTitle = document.title
  componentDidMount() {
    document.addEventListener('visibilitychange', this.changeVisibility)
  }
  changeVisibility = () => {
    if (document.hidden) {
      document.title = 'I miss u 😓 '
    } else {
      document.title = this.orgTitle + ' 🤟'
    }
  }
  componentWillUnmount() {
    document.removeEventListener('visibilitychange', this.changeVisibility)
  }
  render() {
    return (
      <sup>
        nothing is rendered. the document title changes if you change tab
      </sup>
    )
  }
}

export default Refresher
