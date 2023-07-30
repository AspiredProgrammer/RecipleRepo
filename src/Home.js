import React from "react";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <div className="Home">
        <SearchBar/>
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of your application.</p>
        <div className="Body">
            <div className="RecipeCard">
                Breakfast
            </div>
            <div className="RecipeCard">
                Lunch
            </div>
            <div className="RecipeCard">
                Dinner
            </div>
            <div className="RecipeCard">
                Snack
            </div>
            <div className="RecipeCard">
                Cuisine
            </div>
            <div className="RecipeCard">
                Teatime
            </div>
        </div>
    </div>
  );
};

export default Home;
