import './index.css'

const CounterItem = props => {
  const {item} = props

  return (
    <li className="counter-item-container">
      <p className="text-paragraph">{item.inputText}:</p>
      <p className="count">{item.count}</p>
    </li>
  )
}

export default CounterItem
