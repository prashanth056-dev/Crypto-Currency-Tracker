import Loader from 'react-loader-spinner'
import './index.css'
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {list: [], isLoading: true}

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    this.setState({list: formattedData, isLoading: false})
  }

  render() {
    const {list, isLoading} = this.state
    console.log(list)
    return (
      <div className="card">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="card">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
              alt="cryptocurrency"
            />
            <ul className="list-container">
              <li className="list-head">
                <div className="col1">Coin Type</div>
                <div className="col2">USD</div>
                <div className="col3">EURO</div>
              </li>
              {list.map(each => (
                <CryptocurrencyItem key={each.id} obj={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
