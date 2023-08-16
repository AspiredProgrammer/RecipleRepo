import React, { useState, useEffect } from "react";
import "../Styles/styles.scss";
import Search from "../Recipe/Search";

const SearchBar = () => {
  //const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&random=true`);


  const RECIPE_APP_ID = "015472df";
  const RECIPE_APP_KEY = "f5c90ece39c8ee2ffb082c15b189b178 	—";

  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [recipes, setRecipes] = useState("");
  const updateSearch = (e) => {
    setText(e.target.value);
  };

  useEffect(() => { handleKeyDown()}, []);

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2?type=public&q=${text}&app_id=015472df&app_key=f5c90ece39c8ee2ffb082c15b189b178`
        );
        const data = await response.json();
        setRecipes(data.hits);
      } catch (error) {
        console.error("Error fetching recipes: ", error);
      }

      //console.log('do validate')
      //
    }
  };
  

  return (
    <div className="SearchBar">
      <strong>Search here for Recipes</strong>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="recipe-list">
        {/* {recipes.map((recipe) => (
            <RecipeCard key={recipe.recipe.uri} recipe={recipe.recipe} />
          ))} */}
      </div>
    </div>
  );
};

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt={recipe.label} />
      {/* Display other recipe information as needed */}
    </div>
  );
};

export default SearchBar;
