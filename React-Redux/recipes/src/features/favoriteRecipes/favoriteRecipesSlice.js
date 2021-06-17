import { ADD_RECIPE, REMOVE_RECIPE } from "../../action-types";

// Action creators
export function addRecipe(recipe) {
  return {
    type: ADD_RECIPE,
    payload: recipe
  }
}

export function removeRecipe(recipe) {
  return {
    type: REMOVE_RECIPE,
    payload: recipe
  }
}

// Reducer 
const initialState = [];
export default function favoriteRecipesReducer (favoriteRecipes = initialState, action) {
  switch (action.type) {
    case ADD_RECIPE:
      return [...favoriteRecipes, action.payload]
    case REMOVE_RECIPE:
      return favoriteRecipes.filter(recipe => recipe.id !== action.payload.id)
    default:
      return favoriteRecipes;
  }
}