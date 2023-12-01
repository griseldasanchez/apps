import React from 'react';
import './SearchRecipes.css';


export default function SearchRecipes() {
  return (
   <div id="search-recipes">
      <div>Search bar to look through the recipes here.</div>
      <div className="recipes-searchbar">
        <div className="searchbar"> Search bar </div>
        <div className="searchbar-button"> Search button </div>
      </div>
   </div>
  )
}