// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  getRandomNumber = () => {
    const n = Math.ceil(Math.random() * 100)
    this.setState({number: n})
  }

  render() {
    const {number} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="card-h">Random Number</h1>
          <p className="card-p">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="card-button"
            type="button"
            onClick={this.getRandomNumber}
          >
            Generate
          </button>
          <p className="card-number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
