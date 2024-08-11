// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    minutes: 25,
    seconds: 0,
    isPaused: true,
    t: 25,
  }

  onClickStartOrPauseIcon = () => {
    console.log('Clicked Pause Or Start Button')
    const {isPaused} = this.state
    if (isPaused === false) {
      // Clear the interval
      console.log('Clearing the timer')
      clearInterval(this.timerId)
    } else {
      // Run the timer
      console.log('Running the timer')
      this.timerId = setInterval(this.timer, 1000)
    }
    this.setState(pre => ({isPaused: !pre.isPaused}))
  }

  timer = () => {
    console.log('Timer is running')
    const {minutes, seconds} = this.state
    let newMinutes = null
    let newSeconds = null
    if (minutes === 0 && seconds === 0) {
      clearInterval(this.timerId)

      this.setState(pre => ({
        isPaused: true,
        minutes: pre.t,
        seconds: 0,
      }))
    } else {
      if (seconds === 0) {
        newSeconds = 59
        newMinutes = minutes - 1
      } else {
        newSeconds = seconds - 1
        newMinutes = minutes
      }
      this.setState({minutes: newMinutes, seconds: newSeconds})
    }
  }

  onClickResetButton = () => {
    const {isPaused} = this.state
    if (isPaused === false) {
      clearInterval(this.timerId)

      this.setState(pre => ({
        minutes: pre.t,
        isPaused: true,
        seconds: 0,
      }))
    }
  }

  onClickIncrementBtn = () => {
    const {isPaused} = this.state

    if (isPaused === true) {
      this.setState(pre => ({
        t: pre.t + 1,
        minutes: pre.minutes + 1,
      }))
    }
  }

  onClickDecrementBtn = () => {
    const {isPaused} = this.state

    if (isPaused === true) {
      this.setState(pre => ({
        t: pre.t - 1,
        minutes: pre.minutes - 1,
      }))
    }
  }

  render() {
    const {isPaused, t, seconds, minutes} = this.state
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return (
      <div className="dt-bg-container">
        <h1 className="dt-heading">Digital Timer</h1>
        <div className="dt-timer-container">
          <div className="dt-timer-img-container">
            <div className="dt-timer-img-text">
              <h1 className="dt-timer-img-time">
                {stringifiedMinutes}:{stringifiedSeconds}
              </h1>
              {isPaused ? (
                <p className="dt-timer-img-state">Paused</p>
              ) : (
                <p className="dt-timer-img-state">Running</p>
              )}
            </div>
          </div>
          <div className="dt-timer-btns-container">
            <div className="btns-container">
              {isPaused ? (
                <div className="btn-container">
                  <button
                    className="btn"
                    type="button"
                    onClick={this.onClickStartOrPauseIcon}
                  >
                    <img
                      className="btn-icon"
                      src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                      alt="play icon"
                    />
                    <p className="btn-text">Start</p>
                  </button>
                </div>
              ) : (
                <div className="btn-container">
                  <button
                    className="btn"
                    type="button"
                    onClick={this.onClickStartOrPauseIcon}
                  >
                    <img
                      className="btn-icon"
                      src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                      alt="pause icon"
                    />
                    <p className="btn-text">Pause</p>
                  </button>
                </div>
              )}
              <div className="btn-container">
                <button
                  className="btn"
                  type="button"
                  onClick={this.onClickResetButton}
                >
                  <img
                    className="btn-icon"
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                  />
                  <p className="btn-text">Reset</p>
                </button>
              </div>
            </div>
            <p className="set-timer-text">Set Timer Limit</p>
            <div className="set-timer-container">
              <button
                className="inc-btn"
                type="button"
                onClick={this.onClickDecrementBtn}
              >
                -
              </button>
              <p className="time">{t}</p>
              <button
                className="inc-btn"
                type="button"
                onClick={this.onClickIncrementBtn}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
