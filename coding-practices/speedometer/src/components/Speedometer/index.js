// Write your code here
import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(pre => ({speed: pre.speed + 10}))
    }
  }

  applyBreaks = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(pre => ({speed: pre.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h2 className="speed">Speed is {speed}mph</h2>
        <p className="speed-limit">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="btn btn1" type="button" onClick={this.accelerate}>
            Accelerate
          </button>
          <button className="btn btn2" type="button" onClick={this.applyBreaks}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
