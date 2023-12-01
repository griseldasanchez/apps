import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './AllRecipes';

export default function RecipeTile( information ) {
  
  return (
    <div>
      <Link to={{ pathname: '/recipe-details' }} className="recipe-link">
        <div className="recipe-item">
          <img src="/assets/images/pizza.jpg" className="recipe-thumbnail" alt="Recipe Thumbnail" />
          <br />
          {information.information.state.name}
          <br />
          {information.information.state.description}
        </div>
      </Link>
    </div>
  )
}