import './index.css'

import {Component} from 'react'

class MyComponent extends Component {
  state = {count: 0}

  increment = () => {
    this.setState(prev => ({
      count: prev.count + 1,
    }))
  }

  decrement = () => {
    this.setState(prev => ({count: prev.count - 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="count">Count {count}</h1>
        <button className="button" onClick={this.increment}>
          Increase
        </button>
        <button className="button" onClick={this.decrement}>
          Decrease
        </button>
      </div>
    )
  }
}

export default MyComponent
