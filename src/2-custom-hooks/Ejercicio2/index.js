import { Component } from 'react'

class Refresher extends Component {
  orgTitle = document.title
  componentDidMount() {
    document.addEventListener('visibilitychange', this.changeVisibility)
  }
  changeVisibility = () => {
    if (document.hidden) {
      document.title = 'I miss u'
    } else {
      document.title = this.orgTitle
    }
  }
  componentWillUnmount() {
    document.removeEventListener('visibilitychange', this.changeVisibility)
  }
  render() {
    return null
  }
}

export default Refresher
