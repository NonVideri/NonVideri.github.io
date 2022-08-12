import React from 'react';
import store from './store';
import { Provider } from 'react-redux';

import App from './App';

// App for random picking from sets of data or number ranges
export default function Randomizer() {
  return (
    // To be added: refresh button?
    <Provider store={store}>
      <App />
    </Provider>
  );
}
