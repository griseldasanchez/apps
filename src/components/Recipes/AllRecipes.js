import React, { useState, useEffect } from 'react';

import axios from 'axios';


// Components
import RecipeTile from './RecipeTile';

// Styles
import './AllRecipes.css';

export default function AllRecipes() {

  const [recipes, setRecipes] = useState([]);
  const currentURL = window.location.href.split('/');
  const userURL = currentURL[2].split(':');
  const currentUser = userURL[0];
  
  useEffect(() => {
    // Make an HTTP GET request to fetch recipes from your backend
    axios.get(`http://${currentUser}:3000/allRecipes`)
      .then(response => {
        console.log('allRecipes in the statement:');
        setRecipes(response.data);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  }, []);

  if (!recipes) {
    return <div>No recipe information available.</div>;
  } else {
    return (
      <div>
        <div className="search-header-name">Recipes:</div>
        <div className="recipes-grid-container">
          {recipes.map((recipe, index) => (
            <div key={recipe.recipeId}>
              <RecipeTile recipe={recipe}/>
            </div>
          ))}
      </div>
      </div>
    );
  }
}
