import React, { useState } from 'react';
// import './style.css'; goes to HTML

export default function Randomizer() {
  // state hook declarations
  // mode select
  const [mode, setMode] = useState({
    randomized: false,
    numberRange: true,
    repeat: false,
    hidden: false
  });
  // randomized items and counter
  const [items, setItems] = useState({
    list: [],
    counter: 0,
    max: 0
  });
  const 
  return (
    // input form, submit button
    // mode select, sound select, random pick button, refresh button, option popup
    <div>
      <p>
        Counter: {items.counter} / {items.max}
      </p>
    </div>
  );
}
