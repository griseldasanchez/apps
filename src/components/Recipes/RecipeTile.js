import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Styles
import './AllRecipes.css';

export default function RecipeTile({ recipe }) {
  const navigate = useNavigate();

  const handleRecipeClick = () => {
    console.log('RecipeTile handleRecipeClick item selected:', recipe);
    navigate('/recipe-details', { state: recipe });
  };

  return (
    <div className="recipe-item" onClick={handleRecipeClick}>
      <div className="recipe-item">
          <img src="/assets/images/pizza.jpg" className="recipe-thumbnail" alt="Recipe Thumbnail" />
          <br />
          <b>{recipe.recipeName}</b>
          <br />
          {recipe.description}
      </div>
    </div>
  );
}