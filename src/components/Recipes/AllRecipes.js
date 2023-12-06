import React from 'react';

// Components
import RecipeTile from './RecipeTile';

// Styles
import './AllRecipes.css';

export default function AllRecipes(state) {
  return (
    <div>
      <div className="search-header-name">Recipes:</div>
      <div className="recipes-grid-container">
        <RecipeTile />
    </div>
    </div>
  );
}
