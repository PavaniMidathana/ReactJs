import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  getClicksCount = () => {
    this.setState(pre => ({count: pre.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="counter">{count}</span>{' '}
          times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button type="button" className="btn" onClick={this.getClicksCount}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
