import React, { useState } from 'react';
import Display from './components/Display';
import Timezone from './components/Timezone';

export default function Clock() {
  const [state, setState] = useState({
    precise: false,
    timezone: 'local'
  })
  
  // Change timezones
  const handleChange = (newTimezone) => {
    setState(state => {return {...state, timezone: newTimezone }})
  }

  // Toggle precise mode
  const handleClick = () => {
    setState(state => {return {...state, precise: !state.precise }})
  }
  return (
    <div>
      <span className="card-group">
        <Display className="card" timezone={state.timezone} isPrecise={state.precise}/>
        <Timezone className="card" setTimezone={handleChange} />
      </span>
      <button className="btn btn-primary" onClick={handleClick}>Toggle Precise Mode</button>
    </div>
  )
}