import React, { useState } from 'react';
// Apps for random picking from sets of data or number ranges

export default function Randomizer() {
  // Constants and variables declarations
  const submitSound = new Audio('https://dl.dropboxusercontent.com/s/bvfvda83ls5fbwe/items_randomized.mp3')
  const itemSound = new Audio('https://dl.dropboxusercontent.com/s/e85v3w9rv9yr38t/item.wav')
  // Mode select
  const [mode, setMode] = useState({
    submitted: false,
    numberRange: true,
    repeat: false,
    hidden: false,
    sound: true
  });
  // Form inputs
  const [userInput, setUserInput] = useState({
    custom: '',
    number1: 0,
    number2: 0
  })
  // Randomized items and counter
  const [items, setItems] = useState({
    list: [],
    counter: 0,
    max: 0
  });
  // Toggle modes
  const toggleMode = (modeType) => {
    let changedMode = mode[modeType]? false : true
    setMode({ ...mode, [modeType]: changedMode })
  }
  // Enter items to be randomized
  const handleChange = (event) => {
    const fieldType = event.target.className
    const updatedInput = event.target.value
    setUserInput({ ...userInput, [fieldType]: updatedInput })
  }
  // Randomize items
  const handleSubmit = (event) => {
    event.preventDefault()
    setMode({ ...mode, submitted: true })
    if (mode.sound) {
      submitSound.play()
    }
    if (mode.numberRange) {
      var num1 = parseInt(userInput.number1)
      var num2 = parseInt(userInput.number2)
    }
    var randomizedList = !mode.numberRange?
      userInput.custom.split(',').map(string => string.trim()) :
      Array(Math.abs(num1 - num2)+1).fill().map((_, i) => i + (num1 < num2? num1 : num2))
    setItems({
      list: randomizedList,
      counter: 0,
      max: randomizedList.length
    })
  }
  // Get a random item
  const getItem = () => {
    let array = items.list
    let random = Math.ceil(Math.random() * (items.list.length-1))
    let item = array[random]
    if (!mode.repeat) {
      array.splice(random, 1)
      setItems({...items, list: array, counter: items.counter +1 })
    }
    if (mode.sound) {
      itemSound.play()
    }
    alert(item)
  }
  return (
    // mode buttons, input form, number input form, submit button
    // random pick button, refresh button, back button, option popup
    <div>
      {/* Buttons */}
      <button class="btn" hidden={mode.submitted} onClick={() => toggleMode('numberRange')}>
        Mode: {mode.numberRange? 'Number Range' : 'Custom Items'}
      </button>
      <button class="btn" hidden={mode.submitted} onClick={() => toggleMode('repeat')}>
        Repeat Mode: {mode.repeat? 'Repeat' : 'No Repeat'}
      </button>
      <button class="btn" hidden={mode.submitted} onClick={() => toggleMode('hidden')}>
        Item List: {mode.hidden? 'Hidden' : 'Visible'}
      </button>
      <button class="btn" hidden={mode.submitted} onClick={() => toggleMode('sound')}>
        Sound: {mode.sound? 'On' : 'Off'}
      </button>
      {/* Input form */}
      <form hidden={mode.submitted} type='range' onSubmit={handleSubmit}>
        <p>
          {mode.numberRange? 'Enter two integers (max 9999)' : 'Enter items separated by commas (",")'}
        </p>
        <textarea className='custom' hidden={mode.numberRange} type='text' placeholder='Enter items here' onChange={handleChange}/>
        <input className='number1' hidden={!mode.numberRange} type='number' placeholder='0' max='9999' onChange={handleChange}/>
        <input className='number2' hidden={!mode.numberRange} type='number' placeholder='0' max='9999' onChange={handleChange}/>
        <button class="btn" type='submit'>Submit</button>
      </form>
      {/* Randomized results */}
      <div hidden={!mode.submitted}>
        <button onClick={getItem} class="btn">
          Get Random {mode.numberRange? 'Number' : 'Item' }
        </button>
        <button class="btn" onClick={() => toggleMode('submitted')}>
          Exit
        </button>
        <div hidden={mode.repeat}>
          <strong>Counter:</strong> {items.counter} out of {items.max}
        </div>
        <div hidden={mode.hidden}>
          <p><strong>Items left:</strong></p>
          <p>{items.list.map((i) => i + " ")}</p>
        </div>
      </div>
    </div>
  );
}
