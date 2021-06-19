import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeFavorite, selectFilteredFavoriteRecipes } from './favoriteRecipesSlice.js';

import Recipe from "../../components/Recipe";
import FavoriteButton from "../../components/FavoriteButton";

const unfavoriteIcon = 'img/unfavorite.svg';

export default function FavoriteRecipes() {
  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
  const dispatch = useDispatch();

  const onRemoveFavoriteHandler = (recipe) => {
    dispatch(removeFavorite(recipe));
  };

  return (
    <div className="recipes-container">
      {favoriteRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onRemoveFavoriteHandler(recipe)}
            icon={unfavoriteIcon}
          >
            Remove Favorite
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  )
}