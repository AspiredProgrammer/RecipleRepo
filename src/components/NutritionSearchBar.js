import React, { useState, useEffect } from "react";
import "../styles/styles.scss";

const NutritionSearchBar = () => {
    //const response = await fetch(``);
    //Nutrition API
    const NUTRITION_API_KEY = "604d449638b624dc7312b9d677e3f9f2 	— ";
    const NUTRITION_API_ID = "d1ae07e0";


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