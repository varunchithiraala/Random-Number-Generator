// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  onClickGenerateRandomNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: newRandomNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="random-number-generator-container">
        <div className="random-number-container">
          <h1 className="random-number-heading">Random Number</h1>
          <p className="random-number-description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="random-number-button"
            onClick={this.onClickGenerateRandomNumber}
            type="button"
          >
            Generate
          </button>
          <p className="random-number-value">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
