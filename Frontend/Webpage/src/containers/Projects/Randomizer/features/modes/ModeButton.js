import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectModes, toggleMode } from './modesSlice';

export default function ModeButton(props) {
  const modes = useSelector(selectModes);
  const dispatch = useDispatch();
  return (
    <button
      className="btn btn-light"
      onClick={() => dispatch(toggleMode(props.mode))}
    >
      {props.modeName}: {modes[props.mode] ? props.modeYes : props.modeNo}
    </button>
  );
}
