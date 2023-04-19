import './index.css'

const CryptocurrencyItem = props => {
  const {obj} = props
  const {currencyLogo, euroValue, usdValue, currencyName} = obj

  return (
    <li className="list-row">
      <div className="col1">
        <img src={currencyLogo} alt={currencyName} className="img" />
        <p>{currencyName}</p>
      </div>
      <div className="col2">
        <p>{usdValue}</p>
      </div>
      <div className="col3">
        <p>{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
