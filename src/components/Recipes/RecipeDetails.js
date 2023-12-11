import React from 'react';
import { useLocation } from 'react-router-dom';

export default function RecipeDetails() {
  const location = useLocation();
  const { state } = location || {};

  if (!state) {
    return <div>No recipe information available.</div>;
  }

  console.log('RecipeDetails information received:', state);

  return (
    <div className="recipe-details">
      {/* Action Buttons */}
      <div className="recipe-action-buttons">
        <button onClick={() => (console.log('edit'))}>
          Edit
        </button>
        <button onClick={() => (console.log('save'))}>
          Save
        </button>
        <button onClick={() => (console.log('share'))}>
          Share
        </button>
      </div>

      {/* Recipe Details */}
      <div className="recipe-name">{state.recipeName}</div>

      <div className="recipe-description">
        {state.description}
      </div>

      <div className="recipe-image">
        <img src={state.imageURL} className="recipe-thumbnail" alt="Recipe Thumbnail" />
      </div>

      <div className="recipe-ingredients-instructions">
        <div className="recipe-ingredients">
          <b>Ingredients</b>
          <div className="ingredients-list">
            {state.ingredients.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>

        <div className="recipe-instructions">
          <b>Instructions</b>
          <div className="instructions-list">
            <ol>
              {state.instructions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

    </div>
  )
}
