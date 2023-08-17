import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => (
  <div className="recipes">

    {recipes.map((recipe) => (
      <RecipeCard
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
      />
    ))}
  </div>
);

export default RecipeList;
