import React from "react";
import SearchBar from "./SearchBar";

const Search = ({title, calories, image, ingredients}) => {
  
  return (
    <div>
      <SearchBar/>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {calories.toFixed()}</p>
      <img src={image} alt=""/>
    </div>
  );
};

export default Search;
