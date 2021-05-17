import React, { useState } from 'react';

export default function Randomizer() {
  // state hook declarations
  // mode select
  const [mode, setMode] = useState({
    randomized: false,
    numberRange: true,
    repeat: false,
    hidden: false,
    sound: true
  });
  // randomized items and counter
  const [items, setItems] = useState({
    list: [],
    counter: 0,
    max: 0
  });
  // toggle between modes
  const toggleMode = (modeType) => {
    let changedMode = mode[modeType]===true?
      false : true
    setMode({ [modeType]: changedMode })
  }
  return (
    // mode buttons, input form, number input form, submit button
    // random pick button, refresh button, back button, option popup
    <div>
      <button hidden={mode.randomized} onClick={() => toggleMode('numberRange')}>
        Mode: {mode.numberRange===true? 'Number Range' : 'Custom Items'} </button>
      <button hidden={mode.randomized} onClick={() => toggleMode('repeat')}>
        Repeat Mode: {mode.repeat===true? 'Repeat' : 'No Repeat'} </button>
      <button hidden={mode.randomized} onClick={() => toggleMode('hidden')}>
        Item List: {mode.hidden===true? 'Hidden' : 'Visible'} </button>
      <button hidden={mode.randomized} onClick={() => toggleMode('sound')}>
        Sound: {mode.sound===true? 'On' : 'Off'} </button>
      <p hidden={!mode.randomized}>
        Counter: {items.counter} / {items.max}
      </p>
    </div>
  );
}
