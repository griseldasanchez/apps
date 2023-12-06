import React, { useState, useEffect } from 'react';

import axios from 'axios';


// Components
import RecipeTile from './RecipeTile';

// Styles
import './AllRecipes.css';

export default function AllRecipes() {

  const [recipes, setRecipes] = useState([]);
  

  useEffect(() => {
    const apiBaseUrl = process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_API_BASE_URL_DEV
    : process.env.REACT_APP_API_BASE_URL_PROD;
    
  
    console.log('apiBaseUrl', process.env);
    // Make an HTTP GET request to fetch recipes from your backend
    axios.get(`http://localhost:3001/allRecipes`)  // Change to the correct port
    .then(response => {
      console.log('allRecipes in the statement:');
      setRecipes(response.data);
    })
    .catch(error => {
      console.error('Error fetching recipes:', error);
    });
  }, []); // Empty dependency array ensures this effect runs once on component mount
  

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
