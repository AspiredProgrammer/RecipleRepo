import NutritionSearchBar from "../components/NutritionSearchBar";

const Nutrition = () => {
    return(
        <div>
            <NutritionSearchBar/>
            <h1>Welcome to the "Nutrition" Page</h1>
            <p className="Intro">
                This page provides a nutrition analysis of a recipe and/or ingredients provided <br/>
                in the search field. 
            </p>
        </div>
    );
};
    
export default Nutrition;
