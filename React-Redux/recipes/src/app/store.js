import { createStore, combineReducers } from 'redux';
import favoriteRecipes from '../features/favoriteRecipes/favoriteRecipesSlice';
import searchTerm from '../features/searchTerm/searchTermSlice';
import allRecipes from '../features/allRecipes/allRecipesSlice';

const store = createStore(combineReducers({
  favoriteRecipes,
  searchTerm,
  allRecipes
}));

export default store;