import React from 'react';
import { useSelector } from 'react-redux';
import { selectModes } from './features/modes/modesSlice';

import Modes from './features/modes/Modes';
import Form from './features/form/Form';
import Results from './features/results/Results';

export default function App() {
  const modes = useSelector(selectModes);
  return (
    <>
      {/* Mode buttons */}
      {!modes.submitted ? <Modes /> : null}
      {/* Input form */}
      {!modes.submitted ? <Form /> : null}
      {/* Randomized results */}
      {modes.submitted ? <Results /> : null}
    </>
  );
}
