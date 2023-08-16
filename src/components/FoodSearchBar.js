import React, { useState, useEffect } from "react";
import "../styles/styles.scss";


const FoodSearchBar = () => {
    //const response = await fetch(``);
    const FOOD_API_KEY = "013b762d04f6e9c83c2198aa93dc6416 	— ";
    const FOOD_API_ID = "ed9c6b85";
    
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
      <strong>Search here for Food</strong>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        onChange={(e) => setText(e.target.value)}
      />
      
    </div>
  );
};

export default FoodSearchBar;