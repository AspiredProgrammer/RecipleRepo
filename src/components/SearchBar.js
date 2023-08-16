import React, { useState, useEffect } from "react";
import "../styles/styles.scss";
import Search from "../functions/Search";
const SearchBar = () => {
  //const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&random=true`);

  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [recipes, setRecipes] = useState("");
  const updateSearch = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2?type=public&q=${text}&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY`
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
  useEffect(() => {});

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

