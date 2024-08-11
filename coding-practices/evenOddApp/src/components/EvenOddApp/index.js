// Write your code here
import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  changeCount = () => {
    const randomNo = Math.ceil(Math.random() * 100)
    this.setState(pre => ({count: pre.count + randomNo}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Count {count}</h1>
          {count % 2 === 0 ? (
            <p className="p1">Count is Even</p>
          ) : (
            <p className="p1">Count is Odd</p>
          )}
          <button type="button" onClick={this.changeCount}>
            Increment
          </button>
          <p className="p2">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
