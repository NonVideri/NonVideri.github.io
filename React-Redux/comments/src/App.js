import React, { useState } from 'react';
import './App.css';

import Search from './features/Search';
import Comments from './features/Comments';

const getComments = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  if (response.ok) {
    const jsonresponse = await response.json();
    return jsonresponse
  }
  throw new Error('Request failed!');
}

export default function App() {
  const [mode, setMode] = useState({
    hasError: false
  });
  let comments = {};

  try {
    comments = getComments();
  } catch(error) {
    console.log(error)
    setMode({hasError: true})
  }

  if (mode.hasError) {
    return <h2>Error loading data!</h2>
  }

  return (
    <div className="App">
      <Search/>
      <Comments comments={comments}/>
    </div>
  );
}

