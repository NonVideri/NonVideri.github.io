import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

// Selectors
export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  let favoriteRecipes = selectFavoriteRecipes(state);
  let searchTerm = selectSearchTerm(state);
  return favoriteRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))
}

// Slice
export const favoriteRecipesSlice = createSlice({
  name: 'favoriteRecipes',
  initialState: [],
  reducers: {
    addFavorite: (state, action) => [...state, action.payload],
    removeFavorite: (state, action) => state.filter(recipe => recipe.id !== action.payload.id)
  },
});

// Exports
export const { addFavorite, removeFavorite } = favoriteRecipesSlice.actions;
export default favoriteRecipesSlice.reducer;