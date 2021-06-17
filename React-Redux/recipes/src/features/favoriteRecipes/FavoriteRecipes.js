import React from 'react';
import Recipe from "../../components/Recipe";

export default function FavoriteRecipes(props) {

  const { favoriteRecipes, dispatch } = props;

  return (
    <div className="recipes-container">
      {favoriteRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}></Recipe>
      ))}
    </div>
  )
}