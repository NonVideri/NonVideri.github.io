import React from 'react';
import { render, screen } from '@testing-library/react'

import { Thought } from './Thought.js';

test('Display the Thought component' , () => {
  const thought = {text: "I want to get the knack of RTL"}

  render(<Thought thought={thought} removeThought={() => {}}/>)
  screen.debug()
});