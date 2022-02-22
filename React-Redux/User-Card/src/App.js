import React, { Component } from "react";
import { createStore } from "redux";
import user from "./images/user.png";
import "./App.css";

class App extends Component {
  initialState = {
    name: "Alex Bakery",
    description: "Software Engineer, Speaker, and Occasional Model",
    likes: "Cats, Wine, and Black dresses",
    location: "localhost"
  };

  store = createStore((state=this.initialState) => {
    return state	
  })

  render() {
    const { name, description, likes, location } = this.store;
    return (
      <div className="App">
        <section className="User__img">
          <img src={user} alt="user" />
        </section>

        <section className="User__info">
          <p>
            {" "}
            <span className="faint">I am</span> a {description}
          </p>
          <p>
            {" "}
            <span className="faint">I like</span> {likes}
          </p>

          <p className="User__info__details User__info__divider faint">
            <span>Name: </span>
            <span>{name}</span>
          </p>
          <p className="User__info__details faint">
            <span>Location: </span>
            <span>{location}</span>
          </p>
        </section>
      </div>
    );
  }
}

export default App;
