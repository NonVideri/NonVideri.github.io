import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './style.scss';
import reportWebVitals from './reportWebVitals';

import Navigation from './containers/Navigation/Navigation';
import Splash from './containers/Splash/Splash';
import About from './containers/About/About';
import Statement from './containers/Statement/Statement';
import Skills from './containers/Skills/Skills';
import Projects from './containers/Projects/Projects';
import Gallery from './containers/Gallery/Gallery';
import Contact from './containers/Contact/Contact';
import Footer from './containers/Footer/Footer';
import { ThemeProvider } from 'styled-components';

const theme = {
  colorMain: `hsl(180, 6%, 87%)`,
  colorBackground: `hsl(0, 0%, 0%)`,
  colorBoxes: `hsl(0, 0%, 7%)`,
  colorTitles: `hsl(120, 100%, 20%)`,
  colorMuted: `hsl(0, 0%, 42%)`,
  fontMain: `"Spectral", serif`,
  fontText: `"Karla", sans-serif`,
  transition: `all 0.5s`
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
