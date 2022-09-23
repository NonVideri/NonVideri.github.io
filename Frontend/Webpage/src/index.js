import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, useRouteMatch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { FontsStyle, GlobalStyle, theme } from './style';

import Navigation from './containers/Navigation';
import Splash from './containers/Splash';
import About from './containers/About';
import Statement from './containers/Statement';
import Skills from './containers/Skills';
import Projects from './containers/Projects/Projects';
import Gallery from './containers/Gallery';
import Contact from './containers/Contact';
import Footer from './containers/Footer';

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
  return (
    <React.StrictMode>
      <FontsStyle />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}

function AppRoutes() {
  let match = useRouteMatch();
  const mode = match.url.includes('translations') ? 'translations' : undefined;
  return (
    <>
      {/* TOCONSIDER: extract to a new subroutes component,
          so useRouteMatch hook is used only in subroutes component (but that's most of the components anyway)
          Add ContextAPI to pass mode, instead of props? */}
      <Navigation mode={mode} />
      <Splash mode={mode} />
      <About mode={mode} />
      <Statement mode={mode} />
      <Skills mode={mode} />
      <Projects mode={mode} />
      <Gallery mode={mode} />
      <Contact mode={mode} />
      <Footer mode={mode} />
    </>
  );
}
