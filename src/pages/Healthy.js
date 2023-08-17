import React from "react";
import SearchBar from "../components/SearchForm";

const FamilyDinner = (props) => {
  //calories = 700 for healthy
  return (
    <div>
      <SearchBar />
      <h1>Welcome to the "Healthy" Recipe Page</h1>
      <p className="Intro">
        This page provides a list of recipes falling under the category of
        'healthy' meals. <br />
        Healthy recipes provide meals with the recommended amount of 700 <br />
        calories (for a full-grown adult).
      </p>

    </div>
  );
};

export default FamilyDinner;
