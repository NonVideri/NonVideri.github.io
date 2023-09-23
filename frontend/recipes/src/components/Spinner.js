import React from "react";

const spinnerIconUrl = './img/spinner.png'

export default function Spinner() {
  return (
    <img src={spinnerIconUrl} alt="Recipes are loading" className="spinner" />
  );
}