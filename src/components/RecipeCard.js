import React from "react";
// import SearchBar from "./SearchBar";

// const RecipeCard = ({ title, calories, image, ingredients }) => {
//   return (
//     <div>
//       <ol>
//         {ingredients.map((ingredient) => (
//           <li>{ingredient.text}</li>
//         ))}
//       </ol>
//       <p>Calories: {calories.toFixed()}</p>
//       <img src={image} alt="" />
//     </div>
//   );
// };

const RecipeCard = ({ recipe }) => {
  const {label: title, calories, image, ingredients } = recipe;
   return (
     <div>
       <ol>
         {ingredients.map((ingredient) => (
           <li>{ingredient.text}</li>
         ))}
       </ol>
        <p>Calories: {calories.toFixed()}</p>
       <img src={image} alt="" />
     </div>
   );
};
export default RecipeCard;
