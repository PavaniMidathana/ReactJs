// Write your code here
import {Component} from 'react'

import './index.css'

const images = [
  {
    id: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
  },
]

class CoinToss extends Component {
  state = {id: 0, total: 0, heads: 0, tails: 0}

  onTossed = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({id: tossResult})
    if (tossResult === 0) {
      this.setState(pre => ({heads: pre.heads + 1, total: pre.total + 1}))
    } else {
      this.setState(pre => ({tails: pre.tails + 1, total: pre.total + 1}))
    }
  }

  render() {
    const {id, total, heads, tails} = this.state

    return (
      <div className="toss-game-bg-container">
        <div className="toss-game-card-container">
          <h1 className="toss-game-heading">Coin Toss Game</h1>
          <p className="toss-game-p">Heads (or) Tails</p>
          <img
            className="toss-game-img"
            src={images[id].imageUrl}
            alt="toss result"
          />
          <button
            className="toss-game-btn"
            type="button"
            onClick={this.onTossed}
          >
            Toss Coin
          </button>
          <div className="toss-game-count-container">
            <p className="toss-game-count">Total: {total}</p>
            <p className="toss-game-count">Heads: {heads}</p>
            <p className="toss-game-count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
