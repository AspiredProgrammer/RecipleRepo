import React from "react";
import SearchBar from "../components/SearchBar";
import Search from "../Functions/Search";

const FamilyDinner = (props) => {
  //calories = 700 for healthy
  //Please add more suggestions that decrease the amount of possible results so it is a more specific list
  return (
    <div>
      <SearchBar />
      <h1>Welcome to the "Healthy" Recipe Page</h1>
      <p className="Intro">
        This page provides a list of recipes falling under the category of
        'healthy' meals. <br />
        Healthy recipes provide meals with the recommended amount of 700 <br/>
        calories (for a full-grown adult).
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
