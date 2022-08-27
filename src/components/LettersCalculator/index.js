import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: ''}

  textInputCounter = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-1">
          <img
            className="img"
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
          />
        </div>
        <div className="card-2">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="para" htmlFor="phraseText">
            Enter the phrase
          </label>
          <input
            className="input"
            id="phraseText"
            value={count}
            type="text"
            onChange={this.textInputCounter}
            placeholder="Enter the phrase"
          />
          <p className="counter">No.of Letters: {count.length}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
