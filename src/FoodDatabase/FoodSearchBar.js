import React, { useState, useEffect } from "react";
import "../Styles/styles.scss";


const FoodSearchBar = () => {
    //const response = await fetch(``);

    const [text, setText] = useState("");
    const [submitted, setSubmitted] = useState("");
    const [foodItem, setFoodItem] = useState("");
    const updateSearch = (e) => {
        setText(e.target.value);
    };

  const handleKeyDown = async (event) => {
    // if (event.key === "Enter") {
    //   try {
    //     const response = await fetch(
    //       `https://api.edamam.com/api/recipes/v2?type=public&q=${text}&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY`
    //     );
    //     const data = await response.json();
    //     setFoodItem(data.hits);
    //   } catch (error) {
    //     console.error("Error fetching food: ", error);
    //   }

      //console.log('do validate')
      //
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