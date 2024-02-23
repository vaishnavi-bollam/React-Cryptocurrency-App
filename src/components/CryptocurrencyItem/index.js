// Write your JS code here
const CryptocurrenciesItem = props => {
  const {each} = props
  const {currencyName, id, usdValue, euroValue, currencyLogo} = each
  console.log(currencyName)

  return (
    <ul>
      <li>
        <div>
          <img src={currencyLogo} alt={currencyName} />
          <p>{currencyName}</p>
        </div>
        <div>
          <p>{usdValue}</p>
          <p>{euroValue}</p>
        </div>
      </li>
    </ul>
  )
}

export default CryptocurrenciesItem
