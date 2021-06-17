import { createStore, combineReducers } from 'redux';
import favoriteRecipes from '../features/favoriteRecipes/favoriteRecipes';
import searchTerm from '../features/searchTerm/searchTerm';
import allRecipes from '../features/allRecipes/allRecipes';

const store = createStore(combineReducers({
  favoriteRecipes,
  searchTerm,
  allRecipes
}));

export default store;