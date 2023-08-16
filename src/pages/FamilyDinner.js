import React from "react";
import SearchBar from "../components/SearchForm";

const FamilyDinner = (props) => {
  //dishType = main course
  //ingr= 5+
  //mealType = dinner

  return (
    <div>
      <h1>Welcome to the "FamilyDinner" Recipe Page</h1>
      <p className="Intro">
        This page provides a list of recipes falling under the category of
        'family dinner' meals. <br />
        Family dinner recipes provide dinner meals for a large number of people{" "}
        <br />
        with over five ingredients and with the main course as the type of dish.
      </p>

    </div>
  );
};

export default FamilyDinner;
