import React from 'react';

// Components
import SearchRecipes from './SearchRecipes';
import AllRecipes from './AllRecipes';

// Styles
import './AllRecipes.css';

export default function RecipesApp() {

  return (
   <div id="recipes-app">

      {/* <SearchRecipes/> */}

      <div>List of recipes by category</div>
      <AllRecipes/>

   </div>
  )
}