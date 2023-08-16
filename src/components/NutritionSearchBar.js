import React, { useState, useEffect } from "react";
import "../styles/styles.scss";

const NutritionSearchBar = () => {
    //const response = await fetch(``);

    const [text, setText] = useState("");
    const [submitted, setSubmitted] = useState("");
    const [foodItem, setFoodItem] = useState("");
    const updateSearch = (e) => {
        setText(e.target.value);
    };

  const handleKeyDown = async (event) => {

    
    }
  
  useEffect(() => {});

  return (
    <div className="SearchBar">
      <strong>Search here for Nutritional Value of Recipes </strong>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        onChange={(e) => setText(e.target.value)}
      />
      
    </div>
  );
};

export default NutritionSearchBar;