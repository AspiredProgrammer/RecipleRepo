import React from "react";
import SearchBar from "../../WebPageComponents/SearchBar";

const FamilyDinner = () => {
  //calories = 700 for healthy
  //Please add more suggestions that decrease the amount of possible results so it is a more specific list
  return (
    <div>
      <SearchBar />
      <h1>Welcome to the "Healthy" Recipe Page</h1>
      <p>
        This page provides a list of recipes falling under the category of
        'healthy' meals. <br />
        Healthy recipes provide meals with the recommended amount of 700
        calories (for a full-grown adult).
      </p>
    </div>
  );
};

export default FamilyDinner;
