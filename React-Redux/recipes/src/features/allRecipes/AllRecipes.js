import React, { useEffect } from 'react';

import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice.js';
import { loadData } from './allRecipesSlice';

import FavoriteButton from '../../components/FavoriteButton';
import Recipe from '../../components/Recipe';

const favoriteIcon = '../../img/favorite.svg';

export default function AllRecipes(props) {
  const { allRecipes, dispatch } = props;

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