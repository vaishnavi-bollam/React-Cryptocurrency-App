// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrenciesItem from '../CryptocurrencyItem/index'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, currenciesList: []}

  componentDidMount() {
    this.cryptoItems()
  }

  cryptoItems = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const jsondataOutput = await response.json()
    console.log(jsondataOutput)

    const newOutputObject = jsondataOutput.map(eachUser => ({
      currencyName: eachUser.currency_name,
      id: eachUser.id,
      usdValue: eachUser.usd_value,
      euroValue: eachUser.euro_value,
      currencyLogo: eachUser.currency_logo,
    }))
    console.log(newOutputObject)
    this.setState({currenciesList: newOutputObject, isLoading: false})
  }

  render() {
    const {isLoading, currenciesList} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div>
            <div>
              <h1>Cryptocurrency Tracker</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
                alt="cryptocurrency"
              />
            </div>
            <div>
              <h1>Coin Type</h1>
              <h1>USD</h1>
              <h1>EURO</h1>
              <div>
                {currenciesList.map(each => (
                  <CryptocurrenciesItem each={each} key={each.id} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
