import React, { useState, useEffect } from "react";
import RecipeList from "../components/RecipeList"; 
import { APIEdamam } from "../services/APIedamam";

const Healthy = () => {
  const [recipes, setRecipes] = useState([]);
  const [query] = useState("&calories=700"); 
  // Specify the calories label for healthy recipes

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const data = await APIEdamam(query);
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
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Healthy;
