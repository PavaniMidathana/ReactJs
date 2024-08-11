import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {lightMode: false}

  changeMode = () => {
    this.setState(pre => ({lightMode: !pre.lightMode}))
  }

  getClass1 = () => {
    const {lightMode} = this.state
    const result = lightMode ? 'card-container2' : 'card-container1'
    return result
  }

  getClass2 = () => {
    const {lightMode} = this.state
    const result = lightMode ? 'heading2' : 'heading1'
    return result
  }

  getClass3 = () => {
    const {lightMode} = this.state
    const result = lightMode ? 'Dark Mode' : 'Light Mode'
    return result
  }

  render() {
    const {lightMode} = this.state
    return (
      <div className="bg-container">
        <div className={this.getClass1()}>
          <h1 className={this.getClass2()}>Click to Change Mode</h1>
          <button type="button" onClick={this.changeMode}>
            {this.getClass3()}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
