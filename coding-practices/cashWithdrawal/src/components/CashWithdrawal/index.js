// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onClickedButton = value => {
    this.setState(pre => ({amount: pre.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div className="cw-bg-container">
        <div className="cw-card-container">
          <div className="cw-card-section1">
            <div className="cw-card-section1-icon">S</div>
            <h1 className="cw-card-section1-name">Sarah Williams</h1>
          </div>

          <div className="cw-card-section2">
            <p className="cw-card-section2-text">Your Balance</p>
            <div className="cw-card-section2-balance-container">
              <p className="cw-card-section2-balance">{amount}</p>
              <p className="cw-card-section2-balance-inRupees">In Rupees</p>
            </div>
          </div>

          <div className="cw-card-section3">
            <p className="cw-card-section2-balance">Withdraw</p>
            <p className="cw-card-section2-text">CHOOSE SUM (IN RUPEES)</p>
            <ul className="cw-li-container">
              {denominationsList.map(each => (
                <DenominationItem
                  itemDetails={each}
                  key={each.id}
                  onWithdrawalAmount={this.onClickedButton}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
