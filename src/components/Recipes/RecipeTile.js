import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './AllRecipes';

export default function RecipeTile() {
  return (
    <div>
      <Link to="/recipe-details" className="recipe-link">
        <div className="recipe-item">
          <img src="/assets/images/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg" className="recipe-thumbnail" alt="Recipe Thumbnail" />
          <br />
          Recipe Name Here
          <br />
          This is there the description for the recipe will be included.
        </div>
      </Link>
    </div>
  )
}