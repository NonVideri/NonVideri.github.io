import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

import AllRecipes from '../features/allRecipes/AllRecipes.js';
import SearchTerm from '../features/searchTerm/SearchTerm.js';
import FavoriteRecipes from '../features/favoriteRecipes/FavoriteRecipes.js';
import { loadRecipes } from '../features/allRecipes/allRecipesSlice';

export default function App() {
  const dispatch = useDispatch();
  const { hasError } = useSelector((state) => state.allRecipes);

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

  const onTryAgainHandler = () => {
    dispatch(loadRecipes());
  };

  return (
    <main>
      <section>
        <SearchTerm/>
      </section>
      {hasError ? (
        <div id="error-wrapper">
          <h1>
            Oh no! There was a mess in the kitchen and we couldn't get the
            recipes.
          </h1>
          <button onClick={onTryAgainHandler}>Try again</button>
        </div>
      ) : (
        <>
          <section id="favorite-recipes" className="recipes-section">
            <h2 className="header">Favorite Recipes</h2>
            <FavoriteRecipes/>
          </section>
          <hr />
          <section className="recipes-section">
            <h2 className="header">All Recipes</h2>
            <AllRecipes/>
          </section>
        </>
      )}
    </main>
  );
}
