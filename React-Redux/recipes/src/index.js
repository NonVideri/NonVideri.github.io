import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css'
import App from './app/App';
import store from './app/store.js';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        dispatch={store.dispatch}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
store.subscribe(render);
render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
