import React from "react";
import SearchBar from "../components/SearchForm";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of your application.</p>
      <div className="Body">
        <div className="RecipeCard">
          Breakfast
          <img src="https://placehold.co/600x400/png" alt="image placeholder" />
        </div>
        <div className="RecipeCard">
          Lunch
          <img src="https://placehold.co/600x400/png" alt="image placeholder" />
        </div>
        <div className="RecipeCard">
          Dinner
          <img src="https://placehold.co/600x400/png" alt="image placeholder" />
        </div>
        <div className="RecipeCard">
          Snack
          <img src="https://placehold.co/600x400/png" alt="image placeholder" />
        </div>

        <div className="RecipeCard">
          Teatime
          <img src="https://placehold.co/600x400/png" alt="image placeholder" />
        </div>
      </div>
    </div>
  );
};

export default Home;
