import React, { useState, useEffect } from "react";
import "../Styles/styles.scss";


const Search = () => {
    const [text, setText] = useState("");
    const [submitted, setSubmitted] = useState("");
    const [recipes, setRecipes] = useState("");
    const RECIPE_APP_ID = "015472df";
    const RECIPE_APP_KEY = "f5c90ece39c8ee2ffb082c15b189b178 	—";

    const getRecipes = async (event) => {
        try {
            console.log('passed')
            const response = await fetch(
            `https://api.edamam.com/search?q=${text}&app_id=${RECIPE_APP_ID}&app_key=${RECIPE_APP_KEY}&from=0&to=50&`
            );
            console.log('passed')
            const data = await response.json();
            console.log(data.hits);
            setRecipes(data.hits);
        } catch (error) {
            console.error("Error fetching recipes: ", error);
        }

        console.log('not passed')
        //
      }
  };

  export default Search;