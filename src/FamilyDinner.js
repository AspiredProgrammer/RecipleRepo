import React from "react";
import SearchBar from "./SearchBar";

const FamilyDinner = () => {
    //dishType = main course 
    //ingr= 5+
    //mealType = dinner
    //Please add more suggestions that decrease the amount of possible results so it is a more specific list
  return (
    <div>
        <SearchBar/>
        <h1>Welcome to the "FamilyDinner" Recipe Page</h1>
        <p>
            This page provides a list of recipes falling under the category of 'family dinner' meals. <br/> 
            Family dinner recipes provide dinner meals for a large number of people with over 
            five ingredients and with the main course as the type of dish.
        </p>
    </div>
  );
};

export default FamilyDinner;