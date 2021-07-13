import { createSlice } from '@reduxjs/toolkit';

// Slice
export const modesSlice = createSlice({
  name: 'modes',
  initialState: {
    numberRange: true,
    repeat: false,
    hidden: false,
    sound: true,
    submitted: false,
  },
  reducers: {
    toggleMode: (state, action) => {
      let changedMode = state[action.payload] ? false : true;
      return { ...state, [action.payload]: changedMode };
    },
  },
});

// Selectors
export const selectModes = state => state.modes;

// Exports
export const { toggleMode } = modesSlice.actions;
export default modesSlice.reducer;
