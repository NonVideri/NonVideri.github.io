import React from "react";
import ReactDOM from "react-dom";

import "./style.scss";
import reportWebVitals from "./reportWebVitals";

import Navigation from "./components/Navigation/Navigation";
import Splash from "./components/Splash/Splash";
import About from "./components/About/About";
import Statement from "./components/Statement/Statement";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
