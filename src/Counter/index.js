import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CounterItem from '../CounterItem'

class Counter extends Component {
  state = {inputList: [], inputText: ''}

  changeInput = event => {
    this.setState({
      inputText: event.target.value,
    })
  }

  addClicked = event => {
    event.preventDefault()
    const {inputText} = this.state
    const count = inputText.length
    const newObject = {id: uuidv4(), inputText, count}
    this.setState(prevState => ({
      inputList: [...prevState.inputList, newObject],
    }))
    this.setState({
      inputText: '',
    })
  }

  render() {
    const {inputList, inputText} = this.state
    console.log(inputList, inputText)
    return (
      <div className="container">
        <div className="left-container">
          <div className="left-top-container">
            <h4>Count the characters like a Boss</h4>
          </div>
          <ul className="left-bottom-container">
            {inputList.length > 0 &&
              inputList.map(each => <CounterItem key={each.id} item={each} />)}
            {inputList.length === 0 && (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="no-input-image"
              />
            )}
          </ul>
        </div>
        <div className="right-container">
          <h1 className="right-heading">Character Counter</h1>
          <form className="input-container" onSubmit={this.addClicked}>
            <input
              type="text"
              className="input-text"
              placeholder="Enter the characters here"
              value={inputText}
              onChange={this.changeInput}
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Counter
