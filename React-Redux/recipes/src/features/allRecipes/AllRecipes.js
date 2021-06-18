import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice.js';
import { loadData, selectFilteredAllRecipes } from './allRecipesSlice';

import Recipe from '../../components/Recipe';
import FavoriteButton from '../../components/FavoriteButton';

const favoriteIcon = 'img/favorite.svg';

export default function AllRecipes() {
  const allRecipes = useSelector(selectFilteredAllRecipes);
  const dispatch = useDispatch();

  const onFirstRender = () => {
    dispatch(loadData());
  }
  useEffect(onFirstRender, [])

  const onAddRecipeHandler = (recipe) => {
    dispatch(addRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIcon}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  )
}