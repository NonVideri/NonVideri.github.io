import React, { useState } from 'react'
import { connect } from 'react-redux'
import { toggleMode } from '../actions'

function RandomizerResults(props) {
  const itemSound = new Audio('https://dl.dropboxusercontent.com/s/e85v3w9rv9yr38t/item.wav')
  

  // Get a random item
  const getItem = () => {
    let array = props.list
    let random = Math.ceil(Math.random() * (items.list.length-1))
    let item = array[random]
    if (!props.repeat) {
      array.splice(random, 1)
      setItems({...items, list: array, counter: items.counter +1 })
    }
    if (props.sound) {
      itemSound.play()
    }
    alert(item)
  }

  return (
    <>
    <button onClick={getItem} className="btn btn-primary">
      Get Random {props.numberRange? 'Number' : 'Item' }
    </button>
    <button className="btn btn-danger" onClick={() => toggleMode('submitted')}>
      Exit
    </button>
    <div hidden={props.repeat} className="appline">
      <strong>Counter:</strong> {items.counter} out of {items.max}
    </div>
    <div hidden={props.hidden} className="card">
      <p className="card-header"><i>Items left:</i></p>
      <p className="card-body">{items.list.map((i) => i + " ")}</p>
    </div>
    </>
  )
}

export default connect()(RandomizerResults)