import { createSlice } from '@reduxjs/toolkit';

// Slice
export const formSlice = createSlice({
  name: 'form',
  initialState: {
    custom: '',
    number1: 0,
    number2: 0,
  },
  reducers: {
    setForm: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

// Selectors
export const selectForm = state => state.form;

// Exports
export const { setForm } = formSlice.actions;
export default formSlice.reducer;
