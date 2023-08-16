import React from "react";
import RecipeEdamam from "./recipeedamam";

const RecipeList = ({ recipes }) => (
  <div className="recipes">
    {recipes.map((recipe) => (
      <RecipeEdamam
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
