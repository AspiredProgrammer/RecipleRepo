import React, { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import { APIEdamam } from "../services/APIedamam";
import RecipeList from "../components/RecipeList";

const SearchPage = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.trim() !== "") {
      getRecipes();
    }
  }, [query]);

  const getRecipes = async () => {
    const data = await APIEdamam(query);
    setRecipes(data);
  };

  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
  };
  return (
    <div>
      
      <SearchForm onSubmit={handleSearchSubmit} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default SearchPage;
