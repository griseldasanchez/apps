import React from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import './AllRecipes.css';

export default function RecipeTile({ recipe }) {
  const navigate = useNavigate();

  const handleRecipeClick = () => {
    console.log('RecipeTile handleRecipeClick item selected:', recipe);
    navigate('/recipe-details', { state: recipe });
  };

  return (
    <div onClick={handleRecipeClick}>
      <div className="recipe-item">
        <div className="test">
          <div className="recipe-image-box"> 
            <img src={recipe.imageURL} className="recipe-thumbnail" alt="Recipe Thumbnail" />
          </div>
        </div>
            <p>
              <b>{recipe.recipeName}</b>
            </p>          
            {recipe.description}
        </div>
    </div>
  );
}