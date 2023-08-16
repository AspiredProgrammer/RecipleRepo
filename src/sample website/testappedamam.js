import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import RecipeList from "./RecipeList";
import { searchrecipe } from "./searchrecipe"; // Update the import path
import "./edamam.css";

const AppEdamam = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState(" ");

  useEffect(() => {
    if (query.trim() !== "") {
      getRecipes();
    }
  }, [query]);

  const getRecipes = async () => {
    const data = await searchrecipe(query);
    setRecipes(data);
  };

  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <div className="App">
      <SearchForm onSubmit={handleSearchSubmit} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default AppEdamam;
