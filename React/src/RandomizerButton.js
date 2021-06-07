import React from 'react'
import { connect } from 'react-redux'
import { toggleMode } from './randomizerActions'

function RandomizerButton (props) {
  return (
    <button className="btn btn-light" hidden={props.submitted} onClick={() => props.toggleMode(props.mode)}>
      {props.modeName}: {props[props.mode]? props.modeYes : props.modeNo}
    </button>
  )
}

const mapDipatchToProps = {
  toggleMode
}

export default connect(null, mapDipatchToProps)(RandomizerButton)