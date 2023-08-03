import React, { useEffect } from "react";
import './styles.scss';
import { useState } from "react";
const SearchBar = () => {
  // const APP_ID = '015472df';
  // const APP_KEY = 'f5c90ece39c8ee2ffb082c15b189b178 	—';

  // const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&random=true`);
  //calories = 700 for healthy 
  //time = 30 mins for easy dinner
  //dishType = main course or ingredients >= 5 for family dinner 

  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState('');
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('do validate')
      //
    }
  }
  useEffect(() => {
    
  });

  return (
    <div className="SearchBar">
      <strong>Search here for Recipes</strong>
      <input type="text" onKeyDown={handleKeyDown}/>
    </div>
  );
};

export default SearchBar;
