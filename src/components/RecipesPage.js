import React, { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("type");

 useEffect(() => {
    const fetchRecipes = async () => {
        try{
            const response = await fetch(
                `https://api.edamam.com/search?q=&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY&type=${category}&from=0&to=10`
            );
            const data = await response.json();
            setRecipes(data.hits);
        } catch (error) {
            console.error("Error fetching recipes: ", error);
        }
    };
 })

}

