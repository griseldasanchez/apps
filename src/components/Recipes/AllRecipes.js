import React from 'react';
import './AllRecipes.css';
import RecipeTile from './RecipeTile';

export default function AllRecipes() {
  return (
    <div>
      <div className="search-header-name">Recipes:</div>
      <div className="recipes-grid-container">
        <RecipeTile />
        <RecipeTile />
        <RecipeTile />
        <RecipeTile />
        <RecipeTile />
    </div>
    </div>
  );
}
