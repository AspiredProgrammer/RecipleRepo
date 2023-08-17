import React, { useState, useEffect } from "react";
import { APIEdamam } from "../services/APIedamam";
import RecipeList from "../components/RecipeList";

const Output = (props) => {
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    getRecipes();
  }, [props.category]);

  const getRecipes = async () => {
    const data = await APIEdamam(props.category);
    setRecipes(data);
  };

  return (
    <div>
      <h1>Results for Category</h1>
      <p className="Intro">
        These recipes are for the category chosen on the Home page.
      </p>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Output;
