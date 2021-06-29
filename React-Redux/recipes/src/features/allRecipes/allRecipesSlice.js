import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../searchTerm/searchTermSlice';
import { addFavorite, removeFavorite } from '../favoriteRecipes/favoriteRecipesSlice';

// Thunk
export const loadRecipes = createAsyncThunk(
  "allRecipes/loadRecipes",
  async () => {
    const data = await fetch("api/recipes?limit=10");
    const json = await data.json();
    return json;
  }
);

// Slice
export const allRecipesSlice = createSlice({
  name: 'allRecipes',
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadRecipes.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadRecipes.fulfilled, (state, action) => {
        state.recipes = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(loadRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(addFavorite, (state, action) => state.recipes.filter(recipe => recipe.id !== action.payload.id))
      .addCase(removeFavorite, (state, action) => {
        state.recipes = [...state.recipes, action.payload]
      })
}});

// Selectors
export const selectAllRecipes = (state) => state.allRecipes.recipes;

export const selectFilteredAllRecipes = (state) => {
  let allRecipes = selectAllRecipes(state);
  let searchTerm = selectSearchTerm(state);
  return allRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))
}

// Exports
export default allRecipesSlice.reducer;