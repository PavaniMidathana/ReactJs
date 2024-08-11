// Write your code here
import {Component} from 'react'
import './index.css'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: false}

  changeLogin = () => {
    this.setState(pre => ({isLogin: !pre.isLogin}))
  }

  render() {
    const {isLogin} = this.state

    return (
      <div className="home-bg-container">
        <div className="card-bg-container">
          {isLogin ? (
            <div>
              <Message text="Welcome User" />
              <Logout changeLogin={this.changeLogin} />
            </div>
          ) : (
            <div>
              <Message text="Please Login" />
              <Login changeLogin={this.changeLogin} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
