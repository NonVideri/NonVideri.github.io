import React, { useEffect } from 'react';
import { loadData } from './allRecipesSlice'

import Recipe from '../../components/Recipe';

export default function AllRecipes(props) {
  const { allRecipes, dispatch } = props;

  const onFirstRender = () => {
    dispatch(loadData());
  }
  useEffect(onFirstRender, [])

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}></Recipe>
      ))}
    </div>
  )
}