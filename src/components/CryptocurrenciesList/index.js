import {Component} from 'react'
import {Rings} from 'react-loader-spinner' 
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, cryptoList: []}

  componentDidMount() {
    this.getCryptoList()
  }

  getCryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const responseList = await response.json()
    const formattedList = responseList.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptoList: formattedList, isLoading: false})
  }

  render() {
    const {cryptoList, isLoading} = this.state

    return (
      <div className="ccl-main-container">
        <h1 className="ccl-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="ccl-image"
        />
        <ul className="ccl-list">
          <li>
            <div className="ccl-list-top">
              <p>Coin Type</p>
              <div className="ccl-currencies">
                <p className="ccl-currency">USD</p>
                <p className="ccl-currency">EURO</p>
              </div>
            </div>
          </li>
          {isLoading ? (
            <div data-testid="loader">
              <Rings color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            cryptoList.map(item => (
              <CryptocurrencyItem cryptoData={item} key={item.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList