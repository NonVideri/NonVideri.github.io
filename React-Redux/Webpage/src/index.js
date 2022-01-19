import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { FontsStyle, GlobalStyle, theme } from './style';

import reportWebVitals from './reportWebVitals';

import Navigation from './containers/Navigation';
import Splash from './containers/Splash';
import About from './containers/About';
import Statement from './containers/Statement';
import Skills from './containers/Skills';
import Projects from './containers/Projects/Projects';
import Gallery from './containers/Gallery';
import Contact from './containers/Contact';
import Footer from './containers/Footer';

ReactDOM.render(
  <React.StrictMode>
    <FontsStyle />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
