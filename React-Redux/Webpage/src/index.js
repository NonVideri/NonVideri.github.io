import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './style.scss';
import reportWebVitals from './reportWebVitals';

import Navigation from './components/Navigation/Navigation';
import Splash from './components/Splash/Splash';
import About from './components/About/About';
import Statement from './components/Statement/Statement';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
// import { ThemeProvider } from 'styled-components';

// const theme = {
//   colorMain: `hsl(180, 6%, 87%)`,
//   colorBackground: `hsl(0, 0%, 0%)`,
//   colorBoxes: `hsl(0, 0%, 7%)`,
//   colorTitles: `hsl(120, 100%, 20%)`,
//   colorMuted: `hsl(0, 0%, 42%)`,
//   fontMain: `"Spectral", serif`,
//   fontText: `"Karla", sans-serif`,
//   transition: `all 0.5s`
// };

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Splash />
      <About />
      <Statement />
      <Skills />
      <Projects />
      <Gallery />
      <Contact />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
