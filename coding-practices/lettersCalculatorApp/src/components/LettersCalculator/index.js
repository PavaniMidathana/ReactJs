// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeInput = event => {
    const len = event.target.value.length
    this.setState({count: len})
  }

  render() {
    const {count} = this.state

    return (
      <div className="lc-bg-container">
        <div className="lc-card-sec1-container">
          <h1 className="lc-card-sec1-heading">
            Calculate the Letters you enter
          </h1>
          <label className="lc-card-sec1-label" htmlFor="userInput">
            Enter the Phrase
          </label>
          <input
            className="lc-card-sec1-input"
            type="text"
            id="userInput"
            placeholder="Enter the phrase"
            onChange={this.onChangeInput}
          />
          <p className="lc-card-btn">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="lc-card-img"
        />
      </div>
    )
  }
}

export default LettersCalculator
