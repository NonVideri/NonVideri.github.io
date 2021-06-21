import { createSlice } from '@reduxjs/toolkit';

// Slice
export const resultsSlice = createSlice({
  name: 'results',
  initialState: {
    list: [],
    counter: 0,
    max: 0
  },
  reducers: {
    submitItems: (state, action) => {
      return {
        ...state,
        list: action.payload,
        counter: 0,
        max: action.payload.length
      }
    },
    pickItem: (state, action) => {
      state.list.splice(action.payload, 1)
      state.counter += 1
    }
  }
})

// Selectors
export const selectResults = (state) => state.results;

// Exports
export const { submitItems, pickItem } = resultsSlice.actions;
export default resultsSlice.reducer;