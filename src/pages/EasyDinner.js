import React, { useState, useEffect } from "react";
import { APIByType } from "../services/APIByType";
import RecipeList from "../components/RecipeList";

const EasyDinner = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Dinner&time=0-30&health=alcohol-free&dishType=main course");

  useEffect(() => {
    if (query.trim() !== "") {
      getRecipes();
    }
  }, [query]);

  const getRecipes = async () => {
    const data = await APIByType(query);
    setRecipes(data);
  };
  
  return (
    <div>
      <h1>Welcome to the "EasyDinner" Recipe Page</h1>
      <p className="Intro">
        This page provides a list of recipes falling under the category of 'easy
        dinner' meals. <br />
        Easy dinner recipes provide dinner meals with a short prep-time of 30{" "}
        <br />
        minutes or less.
      </p>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default EasyDinner;
