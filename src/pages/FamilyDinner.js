import React, { useState, useEffect } from "react"; 
import RecipeList from "../components/RecipeList"; 
import { APIEdamam } from "../services/APIedamam"; 

const FamilyDinner = () => {
  const [recipes, setRecipes] = useState([]);
  const [query] = useState("&mealType=Dinner&ingr=5-10&dishType=main course");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const data = await APIEdamam(query);
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
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default FamilyDinner;
