import { createSlice } from '@reduxjs/toolkit';
import allRecipesData from '../../data.js';
import { selectSearchTerm } from '../searchTerm/searchTermSlice';
import { addFavorite, removeFavorite } from '../favoriteRecipes/favoriteRecipesSlice';

// Slice
export const allRecipesSlice = createSlice({
  name: 'allRecipes',
  initialState: [],
  reducers: {
    loadData: () => allRecipesData },
  extraReducers: (builder) => {
    builder
      .addCase(addFavorite, (state, action) => state.filter(recipe => recipe.id !== action.payload.id))
      .addCase(removeFavorite, (state, action) => [...state, action.payload]) }
});

// Selectors
export const selectAllRecipes = (state) => state.allRecipes;

export const selectFilteredAllRecipes = (state) => {
  let allRecipes = selectAllRecipes(state);
  let searchTerm = selectSearchTerm(state);
  return allRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))
}

// Exports
export const { loadData } = allRecipesSlice.actions;
export default allRecipesSlice.reducer;