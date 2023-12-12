// src/components/RecipeList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sample = () => {
  const [recipes, setRecipes] = useState([]);
  const currentURL = window.location.href.slice(0,22);
console.log('currentURL', currentURL);

  useEffect(() => {
    console.log('window.location', window);
    // Make an HTTP GET request to fetch recipes from your backend
    axios.get(`http://localhost:3000/about`)  // Change to the correct port
      .then(response => {
        console.log('in then');
        setRecipes(response.data);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  }, []); // Empty dependency array ensures this effect runs once on component mount

  return (
    <div>
      <ul>start</ul>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map(recipe => (
          <div key={recipe.recipeId}>
            <li>{recipe.recipeName}</li>
            <li>{recipe.description}</li>
          </div>
        ))}
      </ul>
      <ul>end</ul>
    </div>
  );
};

export default Sample;
