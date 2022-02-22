import { configureStore } from "@reduxjs/toolkit";
import favoriteRecipes from '../features/favoriteRecipes/favoriteRecipesSlice';
import searchTerm from '../features/searchTerm/searchTermSlice';
import allRecipes from '../features/allRecipes/allRecipesSlice';

export default configureStore({
  reducer: {
    favoriteRecipes,
    searchTerm,
    allRecipes
}});

