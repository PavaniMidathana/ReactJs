// Write your code here
import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribed: false}

  changeSubscribe = () => {
    this.setState(pre => ({isSubscribed: !pre.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="welcome-bg-container">
        <h1 className="welcome-heading">Welcome</h1>
        <p className="welcome-description">Thank you!Happy Learning</p>
        {isSubscribed ? (
          <button type="button" onClick={this.changeSubscribe}>
            Subscribed
          </button>
        ) : (
          <button type="button" onClick={this.changeSubscribe}>
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
