import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

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

  const button = screen.getByRole('button')
  expect(button).toBeEnabled()
});

test('Clicking the x button should remove a thought', () => {
  render(<App/>);
  // Get only the first button
  const button = screen.getAllByText('×')[0]
  userEvent.click(button)
  const removedThought = screen.queryByText('This is a place for your negative thoughts.')
  expect(removedThought).toBeNull()
});

test('Should add a new thought' , () => {
  render(<App/>);
  const input = screen.getByRole('textbox');
  const submit = screen.getByText('Add');
  userEvent.type(input, 'I need other people to be happy.')
  userEvent.click(submit)
  const thought = screen.getByText('I need other people to be happy.');
  expect(thought).toBeInTheDocument();
});

test('Should show Thought to be removed', async () => {
  render(<App/>);
  const input = screen.getByRole('input');
  const submit = screen.getByRole('submit')
  userEvent.type(input, 'Life is unfair.');
  userEvent.click(submit)

  await waitFor(() => {
  const thought = screen.queryByText('Life is unfair.');
  expect(thought).toBeNull();
  })
});