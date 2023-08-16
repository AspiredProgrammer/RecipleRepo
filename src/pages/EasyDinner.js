import React from "react";
import SearchBar from "../components/SearchBar";
import Search  from "../Functions/Search";
const EasyDinner = (props) => {
  //time = 30 mins
  //mealType = dinner
  return (
    <div>
      <h1>Welcome to the "EasyDinner" Recipe Page</h1>
      <p className="Intro">
        This page provides a list of recipes falling under the category of 'easy
        dinner' meals. <br />
        Easy dinner recipes provide dinner meals with a short prep-time of 30 <br/>
        minutes or less.
      </p>
      <div>
        <Search
        api={`https://api.edamam.com/api/search?q=${props.text}&app_id=${props.RECIPE_APP_ID}&app_key=${props.RECIPE_APP_KEY}&from=0&to=50&$&time=30&mealType=Dinner`}
        />
      </div>


    </div>
  );
};

export default EasyDinner;
