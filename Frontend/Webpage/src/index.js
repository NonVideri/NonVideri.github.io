import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, useRouteMatch } from 'react-router-dom';
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

// let { contentName } = useParams();
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
  const mode = match.url.includes('translator') ? 'translator' : undefined;
  return (
    <Switch>
      <Route path="/contact">
        <Navigation />
        <Contact />
        <Footer />
      </Route>
      {/* <Route path="/:contentName">
      // let { contentName } = useParams();
      <Navigation />
      <Splash />
      {contentName === 'gallery' && <Gallery />}
      <Contact />
      <Footer />
    </Route> */}
      <Route path="/translator">
        {/* TOCONSIDER: extract to a new subroutes component,
          so useRouteMatch hook is used only in subroutes component
          Add ContextAPI */}
        {/* prop-drilling */}
        <Navigation mode={mode} />
        <Splash mode={mode} />
        <About mode={mode} />
        <Statement mode={mode} />
        <Skills mode={mode} />
        <Projects mode={mode} />
        <Gallery mode={mode} />
        <Contact mode={mode} />
        <Footer mode={mode} />
      </Route>
      {/* <Route path="/:contentName">
      <ContentRoutes />
    </Route> */}
      <Route path="*">
        <Navigation />
        <Splash />
        <About />
        <Statement />
        <Skills />
        <Projects />
        <Gallery />
        <Contact />
        <Footer />
      </Route>
    </Switch>
  );
}

// function ContentRoutes() {
//   const { contentName } = useParams();
//   return (
//     <>
//       <Navigation />
//       <Splash />
//       <About />
//       {contentName === 'statement' && <Statement />}
//       {contentName === 'skills' && <Skills />}
//       {contentName === 'projects' && <Projects />}
//       {contentName === 'gallery' && <Gallery />}
//       {contentName === 'contant' && <Contact />}
//       <Footer />
//     </>
//   );
// }
