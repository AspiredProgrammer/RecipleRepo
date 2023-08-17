import React, { useState, useEffect } from "react"; 
import RecipeList from "../components/RecipeList"; 
import { APIByType } from "../services/APIByType"; 

const FamilyDinner = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [mealType] = useState("Dinner&ingr=5-10&dishType=main course");

  useEffect(() => {
    getRecipes();
  }, [mealType]);

  const getRecipes = async () => {
    const data = await APIByType(mealType);
    setRecipes(data);
  };

  return (
    <div>
      <h1>Welcome to the "FamilyDinner" Recipe Page</h1>
      <p className="Intro">
        This page provides a list of recipes falling under the category of
        'family dinner' meals. <br />
        Family dinner recipes provide dinner meals for a large number of people
        <br />
        with over five ingredients and with the main course as the type of dish.
      </p>
      {recipes && recipes.length > 0 ? (
        <RecipeList recipes={recipes} />
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default FamilyDinner;
