// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    minutes: 0,
    seconds: 0,
  }

  onClickStartBtn = () => {
    this.timerId = setInterval(this.timer, 1000)
  }

  onClickStopBtn = () => {
    clearInterval(this.timerId)
  }

  onClickResetBtn = () => {
    clearInterval(this.timerId)
    this.setState({minutes: 0, seconds: 0})
  }

  timer = () => {
    const {minutes, seconds} = this.state
    let newMinutes = null
    let newSeconds = null
    if (seconds === 59) {
      newSeconds = 0
      newMinutes = minutes + 1
    } else {
      newSeconds = seconds + 1
      newMinutes = minutes
    }
    this.setState({minutes: newMinutes, seconds: newSeconds})
  }

  render() {
    const {minutes, seconds} = this.state
    const stringfiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringfiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return (
      <div className="sw-bg-container">
        <div className="sw-con">
          <h1 className="sw-con-h">Stopwatch</h1>
          <div className="sw-con-card">
            <div className="sw-con-card-sec1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="sw-con-card-sec1-img"
              />
              <p className="sw-con-card-sec1-text">Timer</p>
            </div>
            <h1 className="sw-con-card-sec2">
              {stringfiedMinutes}:{stringfiedSeconds}
            </h1>
            <div className="sw-con-card-sec3">
              <button
                type="button"
                className="btn btn1"
                onClick={this.onClickStartBtn}
              >
                Start
              </button>
              <button
                type="button"
                className="btn btn2"
                onClick={this.onClickStopBtn}
              >
                Stop
              </button>
              <button
                type="button"
                className="btn btn3"
                onClick={this.onClickResetBtn}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
