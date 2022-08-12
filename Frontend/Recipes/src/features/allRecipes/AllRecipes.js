import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addFavorite } from '../favoriteRecipes/favoriteRecipesSlice.js';
import { selectFilteredAllRecipes } from './allRecipesSlice';

import Recipe from '../../components/Recipe';
import FavoriteButton from '../../components/FavoriteButton';
import Spinner from "../../components/Spinner";

const favoriteIcon = 'img/favorite.svg';

export default function AllRecipes() {
  const dispatch = useDispatch();
  const allRecipes = useSelector(selectFilteredAllRecipes);
  const { isLoading } = useSelector((state) => state.allRecipes);

  const onAddFavoriteHandler = (recipe) => {
    dispatch(addFavorite(recipe));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddFavoriteHandler(recipe)}
            icon={favoriteIcon}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  )
}