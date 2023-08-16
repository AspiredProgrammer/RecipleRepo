import React, { useState, useEffect } from "react";
import "../Styles/styles.scss";


const Search = (props) => {
    const [text, setText] = useState("");
    const [submitted, setSubmitted] = useState("");
    const [recipes, setRecipes] = useState("");
    const RECIPE_APP_ID = "015472df";
    const RECIPE_APP_KEY = "f5c90ece39c8ee2ffb082c15b189b178 	—";

    const getRecipes = async (event) => {
        try {
            console.log('passed')
            const response = await fetch(
            `${props.api}`
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

      useEffect(() => { 
        getRecipes();
      }, [text]);
  };

  export default Search;