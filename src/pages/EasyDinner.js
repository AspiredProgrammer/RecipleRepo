import React, { useState, useEffect } from "react";
import { APIEdamam } from "../services/APIedamam";
import RecipeList from "../components/RecipeList";

const EasyDinner = () => {
  const [recipes, setRecipes] = useState([]);
  const [query] = useState("&Dinner&time=0-30&health=alcohol-free&dishType=main course");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const data = await APIEdamam(query);
    setRecipes(data);
  };

  return (
    <div>
      <h1>Welcome to the "EasyDinner" Recipe Page</h1>
      <p className="Intro">
        This page provides a list of recipes falling under the category of 'easy
        dinner' meals. <br />
        Easy dinner recipes provide dinner meals with a short prep-time of  30
        <br />
        minutes or less.
      </p>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default EasyDinner;
