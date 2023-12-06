import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './AllRecipes';

export default function RecipeTile(  ) {
  
  return (
    <div>
      <Link to={{ pathname: '/recipe-details' }} className="recipe-link">
        <div className="recipe-item">
          <img src="/assets/images/pizza.jpg" className="recipe-thumbnail" alt="Recipe Thumbnail" />
          <br />
          Name Sample
          <br />
        Information description sample
        </div>
      </Link>
    </div>
  )
}