import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectForm, setForm } from './formSlice';
import { selectModes, toggleMode } from '../modes/modesSlice';
import { submitItems } from '../results/resultsSlice';

export default function Form(props) {
  const userInput = useSelector(selectForm);
  const modes = useSelector(selectModes);
  const dispatch = useDispatch();

  const submitSound = new Audio(
    'https://dl.dropboxusercontent.com/s/bvfvda83ls5fbwe/items_randomized.mp3'
  );

  // Enter items to be randomized
  const handleChange = e => {
    const fieldType = e.target.id;
    const userInput = e.target.value;
    dispatch(setForm({ [fieldType]: userInput }));
  };
  // Create a randomizable list
  const handleSubmit = e => {
    e.preventDefault();

    dispatch(toggleMode('submitted'));
    if (modes.sound) {
      submitSound.play();
    }
    if (modes.numberRange) {
      var num1 = parseInt(userInput.number1);
      var num2 = parseInt(userInput.number2);
    }
    var itemList = !modes.numberRange
      ? userInput.custom.split(',').map(string => string.trim())
      : Array(Math.abs(num1 - num2) + 1)
          .fill()
          .map((_, i) => i + (num1 < num2 ? num1 : num2));
    dispatch(submitItems(itemList));
  };
  // Input form
  return (
    <form type="range" onSubmit={handleSubmit}>
      <div className="input-group">
        <span className="input-group-prepend input-group-text">
          {modes.numberRange
            ? 'Enter two integers (max 9999):'
            : 'Enter items separated by commas (","):'}
        </span>
        <textarea
          id="custom"
          className="form-control"
          hidden={modes.numberRange}
          type="text"
          placeholder="Enter items here"
          onChange={handleChange}
        />
        <input
          id="number1"
          className="form-control"
          hidden={!modes.numberRange}
          type="number"
          placeholder="0"
          max="9999"
          onChange={handleChange}
        />
        <input
          id="number2"
          className="form-control"
          hidden={!modes.numberRange}
          type="number"
          placeholder="0"
          max="9999"
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-success" type="submit">
        Submit
      </button>
    </form>
  );
}
