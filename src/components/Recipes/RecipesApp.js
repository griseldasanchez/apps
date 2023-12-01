import React from 'react';
import SearchRecipes from './SearchRecipes';
import AllRecipes from './AllRecipes';
import './AllRecipes.css';

export default function RecipesApp() {
  return (
   <div id="recipes-app">
      {/* <div>This is the for the Recipes App.</div> */}
      {/* <p>Features Needed</p> */}

      <SearchRecipes/>

      <div>List of recipes by category</div>
      <AllRecipes />

        <div>Recipe Component</div>
        <div>Navigation bar within recipe - edit, delete, save, share</div>
          <li>Name</li>
          <li>Description</li>
          <li>Image if it exists</li>
          <li>Ingredients</li>
          <li>Instructions</li>
   </div>
  )
}