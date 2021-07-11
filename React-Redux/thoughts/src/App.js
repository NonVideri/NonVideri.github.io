import React, { useState } from 'react';

import './App.css'

import { AddThoughtForm } from './components/AddThoughtForm';
import { Thought } from './components/Thought';
import { generateId, getNewExpirationTime } from './utilities';

export default function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your negative thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They will disappear forever after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thought)=>{
    setThoughts(thoughts => [thought,...thoughts])
  }

  const removeThought = (thoughtIdToRemove)=>{
    setThoughts(thoughts=>thoughts.filter(thought => thought.id!==thoughtIdToRemove))
  }

  return (
    <div className="App">
      <header>
        <h1>Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought removeThought={removeThought} key={thought.id} thought={thought} />
          ))}
        </ul>
      </main>
    </div>
  );
}