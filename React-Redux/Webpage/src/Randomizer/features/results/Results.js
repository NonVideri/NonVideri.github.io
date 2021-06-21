import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { selectResults, pickItem } from './resultsSlice';
import { selectModes, toggleMode } from '../modes/modesSlice'

export default function Results(props) {
  const modes = useSelector(selectModes);
  const items = useSelector(selectResults);
  const dispatch = useDispatch();
  const itemSound = new Audio('https://dl.dropboxusercontent.com/s/e85v3w9rv9yr38t/item.wav')

  // Get a random item
  const getItem = () => {
    let array = items.list
    let random = Math.ceil(Math.random() * (items.list.length-1))
    let item = array[random]
    if (!modes.repeat) {
      dispatch(pickItem(random))
    }
    if (modes.sound) {
      itemSound.play()
    }
    alert(item)
  }

  return (
    <>
    <button onClick={getItem} className="btn btn-primary">
      Get Random {modes.numberRange? 'Number' : 'Item' }
    </button>
    <button className="btn btn-danger" onClick={() => dispatch(toggleMode('submitted'))}>
      Exit
    </button>
    <div hidden={modes.repeat} className="appline">
      <strong>Counter:</strong> {items.counter} out of {items.max}
    </div>
    <div hidden={modes.hidden} className="card">
      <p className="card-header"><i>Items left:</i></p>
      <p className="card-body">{items.list.map((i) => i + " ")}</p>
    </div>
    </>
  )
}