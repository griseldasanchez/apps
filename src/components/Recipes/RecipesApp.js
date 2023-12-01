import React from 'react';
import { useLoaderData } from 'react-router-dom';

// Components
import SearchRecipes from './SearchRecipes';
import AllRecipes from './AllRecipes';

// Styles
import './AllRecipes.css';

export default function RecipesApp() {

  const informationUrl = useLoaderData();

  return (
   <div id="recipes-app">

      <SearchRecipes/>

      <div>List of recipes by category</div>
      <AllRecipes state={informationUrl}/>

   </div>
  )
}

export const dataLoader = () => {
  const recipe = {
    name: "Name of the Recipe",
    description: "Here is a description for the current recipe on the tile."
  }

  return recipe;
}