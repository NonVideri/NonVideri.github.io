import React from "react";
import ReactDOM from "react-dom";

// import "./style.scss";
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
