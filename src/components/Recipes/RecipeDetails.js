import React from 'react';

export default function RecipeDetails() {
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
      <div className="recipe-name">Name of the Recipe</div>

      <div className="recipe-description">
        Here is a description for the current recipe on the tile.
      </div>

      <div className="recipe-image">
        <img src="/assets/images/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg" className="recipe-thumbnail" alt="Recipe Thumbnail" />
      </div>

      <div className="recipe-ingredients-instructions"> 
            <div className="recipe-ingredients">
              Ingredients
              <div className="ingredients-list">
                <ul>
                  <li>1/2 cup of ingredient</li>
                  <li>3tsp of ingredient</li>
                </ul>
              </div>
            </div>

            <div className="recipe-instructions">
              Instructions
              <div className="instructions-list"> 
                <ol>
                  <li>This is step one.</li>
                  <li>Here is the next step to take.</li>
                  <li>Next step.</li>
                  <li>Here is the final step for the recipe.</li>
                </ol>
              </div>
            </div>
      </div>

    </div>
  )
}