// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  increaseMangoesCount = () => {
    this.setState(pre => ({count1: pre.count1 + 1}))
  }

  increaseBananasCount = () => {
    this.setState(pre => ({count2: pre.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="counter">{count1}</span> mangoes{' '}
            <span className="counter">{count2}</span> bananas
          </h1>
          <div className="fruit-container">
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="Mango"
                className="image"
              />
              <button
                className="btn"
                type="button"
                onClick={this.increaseMangoesCount}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="Banana"
                className="image"
              />
              <button
                className="btn"
                type="button"
                onClick={this.increaseBananasCount}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
