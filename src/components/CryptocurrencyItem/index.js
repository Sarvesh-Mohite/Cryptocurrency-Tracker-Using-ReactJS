import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoData} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoData

  return (
    <li>
      <div className="ccl-list-item">
        <div className="ccl-logo-name">
          <img src={currencyLogo} alt={currencyName} className="crypto-logo" />
          <p className="crypto-name">{currencyName}</p>
        </div>
        <div className="ccl-currency-values">
          <p className="ccl-currency-value">{usdValue}</p>
          <p className="ccl-currency-value">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem