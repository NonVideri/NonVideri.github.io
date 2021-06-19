import React, { useState } from 'react'
import { connect } from 'react-redux'
import { toggleMode, submit } from '../actions'
  
function RandomizerForm(props) {
  const submitSound = new Audio('https://dl.dropboxusercontent.com/s/bvfvda83ls5fbwe/items_randomized.mp3')
  // Form inputs
  const [userInput, setUserInput] = useState({
    custom: '',
    number1: 0,
    number2: 0
  })
  // Enter items to be randomized
  const handleChange = (event) => {
    const fieldType = event.target.id
    const updatedInput = event.target.value
    setUserInput({ ...userInput, [fieldType]: updatedInput })
  }
  // Create a randomizable list
  const handleSubmit = (event) => {
    event.preventDefault()
    toggleMode('submitted')
    if (props.sound) {
      submitSound.play()
    }
    if (props.numberRange) {
      var num1 = parseInt(userInput.number1)
      var num2 = parseInt(userInput.number2)
    }
    var randomizedList = !props.numberRange?
      userInput.custom.split(',').map(string => string.trim()) :
      Array(Math.abs(num1 - num2)+1).fill().map((_, i) => i + (num1 < num2? num1 : num2))
    submit({
      list: randomizedList,
      counter: 0,
      max: randomizedList.length
    })
  }
  // Input form
  return (
  <form type='range' onSubmit={handleSubmit}>
    <div className="input-group">
      <span className="input-group-prepend input-group-text">
        {props.numberRange? 'Enter two integers (max 9999):' : 'Enter items separated by commas (","):'}
      </span>
      <textarea id='custom' className="form-control" hidden={props.numberRange} type='text' placeholder='Enter items here' onChange={handleChange}/>
      <input id='number1' className="form-control" hidden={!props.numberRange} type='number' placeholder='0' max='9999' onChange={handleChange}/>
      <input id='number2' className="form-control" hidden={!props.numberRange} type='number' placeholder='0' max='9999' onChange={handleChange}/>
    </div>
    <button className="btn btn-success" type='submit'>Submit</button>
  </form>
  )
}

export default connect()(RandomizerForm)