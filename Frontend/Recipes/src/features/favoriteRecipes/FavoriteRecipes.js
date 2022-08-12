import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeFavorite, selectFilteredFavoriteRecipes } from './favoriteRecipesSlice.js';

import Recipe from "../../components/Recipe";
import FavoriteButton from "../../components/FavoriteButton";
import Spinner from "../../components/Spinner"

const unfavoriteIcon = 'img/unfavorite.svg';

export default function FavoriteRecipes() {
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
  const { isLoading } = useSelector((state) => state.allRecipes);

  const onRemoveFavoriteHandler = (recipe) => {
    dispatch(removeFavorite(recipe));
  };

  if (isLoading) {
    return <Spinner />;
  }

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