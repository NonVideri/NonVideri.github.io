import React from 'react'
import RandomizerForm from './RandomizerForm'
import RandomizerResults from './RandomizerResults'
import RandomizerButton from './RandomizerButton'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
// Apps for random picking from sets of data or number ranges

const initialState = {
  // App modes
  submitted: false,
  numberRange: true,
  repeat: false,
  hidden: false,
  sound: true,
  // List of items and counter
  list: [],
  counter: 0,
  max: 0
}

const store = createStore((state = initialState, action) => {
  switch(action.type) {
    // Toggle between modes
    case 'TOGGLE_MODE':
      let changedMode = state[action.payload] ? false : true
      return {...state, [action.payload]: changedMode}
    case 'SUBMIT':
      return {...state, ...action.payload}
    default:
      return state;
  }
})

// Functions changing the state here, to be passed as props to the buttons
// The results will be passed to display elements
// UNLESS I just use Redux

const Randomizer = () => {
  return (
    // mode buttons, input form, number input form, submit button
    // random pick button, refresh button, back button, option popup
    <Provider store={store}>
      {/* Buttons */}
      <RandomizerButton mode='numberRange' modeName='Mode' modeYes='Number Range' modeNo='Custom Items' />
      <RandomizerButton mode='repeat' modeName='Repeat Mode' modeYes='Repeat' modeNo='No Repeat' />
      <RandomizerButton mode='hidden' modeName='Item List' modeYes='Hidden' modeNo='Visible' />
      <RandomizerButton mode='sound' modeName='Sound' modeYes='On' modeNo='Off' />
      {/* Input form */}
      <RandomizerForm hidden={store.submitted} />
      {/* Randomized results */}
      <RandomizerResults hidden={!store.submitted} />
    </Provider>
  );
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return 
}

export default connect()(Randomizer)