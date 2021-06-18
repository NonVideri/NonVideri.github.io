import allRecipesData from '../../data.js'
import { LOAD_DATA, ADD_RECIPE, REMOVE_RECIPE } from '../../action-types'
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

// Action creators
export const loadData = () => {
  return {
    type: LOAD_DATA,
    payload: allRecipesData
  }
}

// Selectors
export const selectAllRecipes = (state) => state.allRecipes;

export const selectFilteredAllRecipes = (state) => {
  let allRecipes = selectAllRecipes(state);
  let searchTerm = selectSearchTerm(state);
  return allRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))
}

// Reducer
const initialState = [];
export default function allRecipesReducer (allRecipes = initialState, action) {
  switch (action.type) {
    // Loads recipes data
    case LOAD_DATA:
      return action.payload;
    // Adding recipe to Favorites removes it from All Recipes and vice versa
    case ADD_RECIPE:
      return allRecipes.filter(recipe => recipe.id !== action.payload.id);
    case REMOVE_RECIPE:
      return [...allRecipes, action.payload]
    default:
      return allRecipes;
  }
}