import React from "react";
import SearchBar from "../components/SearchBar";
import search  from "..functions/Search";
const EasyDinner = () => {
  //time = 30 mins
  //mealType = dinner
  //Please add more suggestions that decrease the amount of possible results so it is a more specific list
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
        time={"30"}
        />
      </div>


    </div>
  );
};

export default EasyDinner;
