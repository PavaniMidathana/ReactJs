// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    currienciesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoCurrienciesList()
  }

  getCryptoCurrienciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedCurrienciesList = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      id: each.id,
      usdValue: each.usd_value,
    }))
    this.setState({currienciesList: updatedCurrienciesList, isLoading: false})
  }

  render() {
    const {currienciesList, isLoading} = this.state

    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="card-container">
        <h1 className="card-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="card-img"
        />
        <ul className="card-ul-container">
          <li className="card-li-el">
            <p className="card-li-name">Coin Type </p>
            <div className="card-li-text">
              <p className="card-li-name">USD</p>
              <p className="card-li-name">EURO</p>
            </div>
          </li>
          {currienciesList.map(each => (
            <CryptocurrencyItem currencyDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
