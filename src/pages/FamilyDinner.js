import React from "react";
import SearchBar from "../components/SearchBar";
import Search from "../Functions/Search";

const FamilyDinner = (props) => {
  //dishType = main course
  //ingr= 5+
  //mealType = dinner
  
  return (
    <div>
      <SearchBar />
      <h1>Welcome to the "FamilyDinner" Recipe Page</h1>
      <p className="Intro">
        This page provides a list of recipes falling under the category of
        'family dinner' meals. <br />
        Family dinner recipes provide dinner meals for a large number of people <br/>
        with over five ingredients and with the main course as the type of dish.
      </p>

      <div>
        <Search
        api={`https://api.edamam.com/api/search?q=${props.text}&app_id=${props.RECIPE_APP_ID}&app_key=${props.RECIPE_APP_KEY}&from=0&to=50&$&ingr=5+&mealType=Dinner&dishType=Maincourse`}
        />
      </div>
    </div>
  );
};

export default FamilyDinner;
