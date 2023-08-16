import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../Styles/styles.scss";
import RecipeCard from "../components/RecipeCard";
const SearchPage = () => {
  //const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&random=true`);

  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [recipes, setRecipes] = useState([]);
  const RECIPE_APP_ID = "015472df";
  const RECIPE_APP_KEY = "f5c90ece39c8ee2ffb082c15b189b178 	—";
  // const navigate = useNavigate();
  const [mealType, setMealType] = useState("");
  const [cuisineType, setCuisineType] = useState("");
  const [diet, setDiet] = useState("");

  // const updateSearch = (e) => {
  //   setText(e.target.value);
  // };

  const handleKeyDown = async () => {
    // if (event.key === "Enter") {
    //   console.log('passed')
      try {
        
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?q=${text}&app_id=${RECIPE_APP_ID}&app_key=${RECIPE_APP_KEY}&from=0&to=50`);
        
        const data = await response.json();

        console.log(data.hits);

        setRecipes(data.hits);

      } catch (error) {
        console.error("Error fetching recipes: ", error);
        console.log('not passed')
      }

      
      //
    // }
  };
  
  useEffect(( ) => {
    handleKeyDown();
    // const eventObj = { key: 'Enter' };
    // handleKeyDown(eventObj);
  }, [text]);
  
  return (
    <div className="SearchBar">
      <strong>Search here for Recipes</strong>
      <input
        type="text"
        value={text}
        // onKeyPress={handleKeyDown}
        onChange={(e) => setText(e.target.value) }
      />
      <button onClick={() => {
        handleKeyDown()
      }}> Search</button>
      <div className="recipe-list">
       
        {recipes.map((recipe) => (
            <RecipeCard 
              key={recipe.recipe.label} 
              recipe={recipe.recipe} 
            />
          ))}
      </div>
      <div className="Form">
        <form>
          <label>    
            Diet:   
            <select value={diet} onChange={(e) => setDiet(e.target.value)}>
             
              <option value="&diet=balanced" >Balanced</option>
              <option value="&diet=high-fiber">High Fiber</option>
              <option value="&diet=high-protein">High-protein</option>
              <option value="&diet=low-carb">Low Carb</option>
              <option value="&diet=low-fat">Low Fat</option>
              <option value="&diet=low-sodium">Low Sodium</option>
              
            </select>
          </label>

          <br/>
          
          <label>
            Cuisine:       
            <select value= {cuisineType} onChange = {(e) => setCuisineType(e.target.value)}>
              <option value="&cuisineType=american">American</option>
              <option value="&cuisineType=asian">Asian</option>
              <option value="&cuisineType=british">British</option>
              <option value="&cuisineType=caribbean">Central Europe</option>
              <option value="&cuisineType=chinese">Chinese</option>
              <option value="&cuisineType=eastern-europe">Eastern Europe</option>
              <option value="&cuisineType=french">French</option>
              <option value="&cuisineType=greek">Greek</option>
              <option value="&cuisineType=indian">Indian</option>
              <option value="&cuisineType=italian">Italian</option>
              <option value="&cuisineType=japanese">Japanese</option>
              <option value="&cuisineType=korean">Korean</option>
              <option value="&cuisineType=kosher">Kosher</option>
              <option value="&cuisineType=mediterranean">Mediterranean</option>
              <option value="&cuisineType=mexican">Mexican</option>
              <option value="&cuisineType=middle-eastern">Middle Eastern</option>
            </select>
          </label>
          <br/>
          <label>
            Meal Type:       
            <select value= {mealType} onChange = {(e) => setMealType(e.target.value)}>
              <option value="&mealType=breakfast">Breakfast</option>
              <option value="&mealType=lunch">Lunch</option>
              <option value="&mealType=snack">Snack</option>
              <option value="&mealType=dinner">Dinner</option>
              <option value="&mealType=teatime">Teatime</option>
              
            </select>
          </label>

        </form>  
      </div>
      
    </div>
  );
};


export default SearchPage;

