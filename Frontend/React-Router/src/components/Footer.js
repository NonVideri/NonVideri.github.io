import React from 'react';
import { useHistory } from 'react-router';

export default function Footer() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const goForward = () => {
    history.goForward();
  };

  return (
    <footer>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
    </footer>
  );
}
