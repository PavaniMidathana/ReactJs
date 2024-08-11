import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currencyDetails

  return (
    <li className="li-container">
      <div className="li-icon">
        <img src={currencyLogo} alt={currencyName} className="li-img" />
        <p className="li-heading">{currencyName}</p>
      </div>
      <div className="li-text">
        <p className="li-value">{usdValue}</p>
        <p className="li-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
