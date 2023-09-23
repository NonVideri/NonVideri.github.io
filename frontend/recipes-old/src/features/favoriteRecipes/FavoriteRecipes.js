import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeRecipe, selectFilteredFavoriteRecipes } from './favoriteRecipesSlice.js';

import Recipe from "../../components/Recipe";
import FavoriteButton from "../../components/FavoriteButton";

const unfavoriteIcon = 'img/unfavorite.svg';

export default function FavoriteRecipes() {
  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
  const dispatch = useDispatch();

  const onRemoveRecipeHandler = (recipe) => {
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