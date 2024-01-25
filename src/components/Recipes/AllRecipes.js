import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import RecipeTile from './RecipeTile';
import SearchRecipes from './SearchRecipes';

// Styles
import './AllRecipes.css';

export default function AllRecipes() {

  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [recipeNames, setRecipeNames] = useState([]);
  const currentURL = window.location.href.split('/');
  const userURL = currentURL[2].split(':');
  const currentUser = userURL[0];
  
  useEffect(() => {
    axios.get(`http://${currentUser}:3000/allRecipes`)
      .then(response => {
        // Use filter to get recipes containing "chicken" in the name
        const filtered = response.data.filter(item => 
          item.recipeName.toLowerCase().includes(searchTerm) || 
          item.description.toLowerCase().includes(searchTerm) ||
          item.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
        );      
        // Set the state of recipes
          setRecipes(filtered);
          console.log('filterd', recipes);  
        
        
        // Use map to extract recipe names and set the state
        const names = response.data.map(item => item.recipeName);
        setRecipeNames(names);
        console.log('names ->', names);  // Access names directly, not recipeNames
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  }, [recipes]);

  const updateSearchTerm = (e) => {  
    console.log('in update', e.target.value);  
    setSearchTerm(e.target.value.toLowerCase());
  }

  const filterRecipes = () => {
    console.log('Filter recipes.');
  }


  if (!recipes) {
    return <div>No recipe information available.</div>;
  } else {
    return (
      <div>
          <div id="search-recipes">
          {/* <div>Search bar to look through the recipes here:</div> */}
          <div className="recipes-searchbar">
            <input className="searchbar" placeholder='Search Recipes' onChange={updateSearchTerm}></input>
            <button className="searchbar-button" onClick={filterRecipes} > Search button </button>
          </div>
      </div>
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
