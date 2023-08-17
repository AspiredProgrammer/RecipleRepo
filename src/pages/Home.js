import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Output from "./Output";
import { breakfast, lunch, Dinner, snack, teatime } from '../assets/assets';

const Home = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleChange = (category) => {
    setValue(category);
    navigate("/CategoryResults");
  };

  return (
    <div className="Home">
      <h1>Welcome to the Home Page</h1>
      <div className="Body">
        <div className="RecipeCard">
          Breakfast
          <img src={breakfast} alt="image placeholder" onClick={() => handleChange("&mealType=breakfast")} />
        </div>
        <div className="RecipeCard">
          Lunch
          <img src={lunch} alt="image placeholder" onClick={() => handleChange("&mealType=lunch")} />
        </div>
        <div className="RecipeCard">
          Dinner
          <img src={Dinner} alt="image placeholder" onClick={() => handleChange("&mealType=dinner")} />
        </div>
        <div className="RecipeCard">
          Snack
          <img src={snack} alt="image placeholder" onClick={() => handleChange("&mealType=snack")} />
        </div>
        <div className="RecipeCard-Teatime">
          Teatime
          <img src={teatime} alt="image placeholder" onClick={() => handleChange("&mealType=teatime")} />
        </div>
      </div>
    </div>
  );
};

export default Home;
