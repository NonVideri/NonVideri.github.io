import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'

import { Thought } from './Thought.js';

test('Display the Thought component' , () => {
  const thought = {text: "I want to get the knack of RTL"}

  render(<Thought thought={thought} removeThought={() => {}}/>)
  screen.debug()
});

test('Should have header text Thoughts',() => {
  render(<App/>);
  const header = screen.getByText("Thoughts")
  expect(header).toHaveTextContent("Thoughts")
});

test('Should have button enabled' , () => {
  render(<Thought 
  thought={{text:'Hello'}}
  removeThought={()=>{}}/>)
  // Test status of button here
  const button = screen.getByRole('button')
  expect(button).toBeEnabled()
});