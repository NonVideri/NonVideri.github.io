import React from "react";
import ReactDOM from "react-dom";

import "./style.css";
import reportWebVitals from "./reportWebVitals";

import Navigation from "./components/Navigation";
import Splash from "./components/Splash";
import About from "./components/About";
import Statement from "./components/Statement";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
/* import Randomizer from './Randomizer/Randomizer';
import Clock from './Clock/Clock';
import ToDoApp from './ToDoApp/ToDoApp'; */
// import ContactManager from './ContactManager/ContactManager';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Splash />
    <About />
    <Statement />
    <Skills />
    <Projects />
    <Gallery />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

/*
ReactDOM.render(
  <React.StrictMode>
    <Randomizer />
  </React.StrictMode>,
  document.getElementById('randomizer')
);

ReactDOM.render(
  <React.StrictMode>
    <ToDoApp />
  </React.StrictMode>,
  document.getElementById('todoapp')
);

ReactDOM.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>,
  document.getElementById('clock')
);

ReactDOM.render(
  <React.StrictMode>
    <ContactManager data={[]} />
  </React.StrictMode>,
  document.getElementById('contactapp')
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
