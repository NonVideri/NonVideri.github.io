import React, { useState } from 'react';

export default function Randomizer() {
  // state hook declarations
  // mode select
  const [mode, setMode] = useState({
    submitted: false,
    numberRange: true,
    repeat: false,
    hidden: false,
    sound: true
  });
  // submit form textarea
  const [userInput, setUserInput] = useState({
    custom: '',
    number1: 0,
    number2: 0
  })
  // randomized items and counter
  const [items, setItems] = useState({
    list: [],
    counter: 0,
    max: 0
  });
  // toggle between modes
  const toggleMode = (modeType) => {
    let changedMode = mode[modeType]===true ? false : true
    setMode({ ...mode, [modeType]: changedMode })
  }
  // enter items to be randomized
  const handleChange = (event) => {
    const fieldType = event.target.className
    const updatedInput = event.target.value;
    setUserInput( { ...userInput, [fieldType]: updatedInput } );
  }
  // randomize items
  const handleSubmit = () => {
    setMode({...mode, submitted: true})
  }
  return (
    // mode buttons, input form, number input form, submit button
    // random pick button, refresh button, back button, option popup
    <div>
      {/* Buttons */}
      <button hidden={mode.submitted} onClick={() => toggleMode('numberRange')}>
        Mode: {mode.numberRange===true? 'Number Range' : 'Custom Items'} </button>
      <button hidden={mode.submitted} onClick={() => toggleMode('repeat')}>
        Repeat Mode: {mode.repeat===true? 'Repeat' : 'No Repeat'} </button>
      <button hidden={mode.submitted} onClick={() => toggleMode('hidden')}>
        Item List: {mode.hidden===true? 'Hidden' : 'Visible'} </button>
      <button hidden={mode.submitted} onClick={() => toggleMode('sound')}>
        Sound: {mode.sound===true? 'On' : 'Off'} </button>
      {/* Input form */}
      <form hidden={mode.submitted} type='range' onSubmit={handleSubmit}>
        <p>{mode.numberRange===true? 'Enter two integers' : 'Enter items separated by commas (",")'}</p>
        <textarea className='custom' hidden={mode.numberRange} type='text' placeholder='Enter items here' onChange={handleChange}/>
        <input className='number1' hidden={!mode.numberRange} type='number' placeholder='0' onChange={handleChange}/>
        <input className='number2' hidden={!mode.numberRange} type='number' placeholder='0' onChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>
      {/* Randomized results */}
      <p hidden={!mode.submitted}>
        Counter: {items.counter} / {items.max}
      </p>
    </div>
  );
}
