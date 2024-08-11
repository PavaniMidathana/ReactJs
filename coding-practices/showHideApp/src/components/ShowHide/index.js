// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {key1: false, key2: false}

  getFirstName = () => {
    this.setState(pre => ({key1: !pre.key1}))
  }

  getLastName = () => {
    this.setState(pre => ({key2: !pre.key2}))
  }

  render() {
    const {key1, key2} = this.state

    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Show/Hide</h1>
          <div className="buttons-container">
            <div>
              <button type="button" onClick={this.getFirstName}>
                Show/Hide Firstname
              </button>
              {key1 && <p className="name-container">Joe</p>}
            </div>
            <div>
              <button type="button" onClick={this.getLastName}>
                Show/Hide Lastname
              </button>
              {key2 && <p className="name-container">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
