import React from 'react';
import './App.css';

import Search from './features/Search';
import View from './features/View';

export default function App() {
  return (
    <div className="App">
      <Search/>
      <View/>
    </div>
  );
}