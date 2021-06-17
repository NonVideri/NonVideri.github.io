import React from 'react';

import { removeRecipe } from './favoriteRecipesSlice.js';

import Recipe from "../../components/Recipe";
import FavoriteButton from "../../components/FavoriteButton";

const unfavoriteIcon = '../../img/unfavorite.svg';

export default function FavoriteRecipes(props) {
  const { favoriteRecipes, dispatch } = props;

  const onRemoveRecipeHandler = (recipe) => {
    // Dispatch a removeRecipe() action.
    dispatch(removeRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {favoriteRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onRemoveRecipeHandler(recipe)}
            icon={unfavoriteIcon}
          >
            Remove Favorite
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  )
}