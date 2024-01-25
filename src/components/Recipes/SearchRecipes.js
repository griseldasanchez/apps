import React from 'react';
import updateSearchTerm from './AllRecipes.js';

export default function SearchRecipes() {

  // const [searchTerm, setSearchTerm] = useState("");

  // const updateSearchTerm = (e) => {    
  //   setSearchTerm(e.target.value);
  // }

  const filterRecipes = () => {
    console.log('Filter recipes.');
  }

  return (
   <div id="search-recipes">
      {/* <div>Search bar to look through the recipes here:</div> */}
      <div className="recipes-searchbar">
        <input className="searchbar" placeholder='Search Recipes' onChange={updateSearchTerm}></input>
        <button className="searchbar-button" onClick={filterRecipes}> Search button </button>
      </div>
   </div>
  )
}