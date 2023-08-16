import FoodSearchBar from "../components/FoodSearchBar.js";

const FoodDatabase = () => {

    return(
        <div>
            <FoodSearchBar/>
            <h1>Welcome to the "Food Database" Page</h1>
            <p className="Intro">
                This page provides the opporunity for a user to search for food items various food items <br/>
                and see their nutritional value.
            </p>
        </div>
    );
};

export default FoodDatabase;