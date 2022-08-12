import { configureStore } from '@reduxjs/toolkit';
import modes from './features/modes/modesSlice';
import form from './features/form/formSlice';
import results from './features/results/resultsSlice';

export default configureStore({
  reducer: {
    modes,
    form,
    results,
  },
});
