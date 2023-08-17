import React, { useState, useEffect } from "react";
import RecipeList from "../components/RecipeList"; 
import { APIByCal } from "../services/APIByCal";

const Healthy = () => {
  const [recipes, setRecipes] = useState([]);
  const [caloriesLabel] = useState("700"); 
  // Specify the calories label for healthy recipes

  useEffect(() => {
    getRecipes();
  }, [caloriesLabel]);

  const getRecipes = async () => {
    const data = await APIByCal(caloriesLabel);
    setRecipes(data);
  };

  return (
    <div>
      
      <h1>Welcome to the "Healthy" Recipe Page</h1>
      <p className="Intro">
        This page provides a list of recipes falling under the category of
        'healthy' meals. <br />
        Healthy recipes provide meals with the recommended amount of 700 <br />
        calories (for a full-grown adult).
      </p>
      {recipes && recipes.length > 0 ? (
        <RecipeList recipes={recipes} />
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default Healthy;
