import React from "react";
import { createStore } from "redux";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";

const App = () => {
  const initialState = {
    username: "Janny",
    totalAmount: 2500701
  };

  const withdraw = (amount) => ({
    type: "WITHDRAW",
    amount: amount
  })

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "WITHDRAW": return { ...state, totalAmount: state.totalAmount - action.amount }
      default: return state
    }
  }

  const store = createStore(reducer);
  
  const handleClick = (e) => {
    const amount = e.target.dataset.amount
    store.dispatch(withdraw(amount))
  }

  const { totalAmount, username } = store.getState();
  return (
    <div className="App">
      <img className="App__userpic" src={photographer} alt="user" />
      <p className="App__username">Hello, {username}! </p>
      <div className="App__amount">
        {formatNumber({ prefix: "$" })(totalAmount)}
        <p className="App__amount--info">Total Amount</p>
      </div>

      <section className="App__buttons">
        <button onClick={handleClick} data-amount="10000">WITHDRAW $10,000</button>
        <button onClick={handleClick} data-amount="5000">WITHDRAW $5,000</button>
      </section>

      <p className="App__giveaway">Give away all your cash to charity</p>
    </div>
  );
}

export default App;
