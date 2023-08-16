import "./styles/App.css";
import "./styles/styles.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React from "react";

function App() {
  //Recipe API
  const RECIPE_APP_ID = "015472df";
  const RECIPE_APP_KEY = "f5c90ece39c8ee2ffb082c15b189b178 	—";

  //Nutrition API
  const NUTRITION_API_KEY = "604d449638b624dc7312b9d677e3f9f2 	— ";
  const NUTRITION_API_ID = "d1ae07e0";

  //Food Database API
  const FOOD_API_KEY = "013b762d04f6e9c83c2198aa93dc6416 	— ";
  const FOOD_API_ID = "ed9c6b85";

  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
