import "./Styles/App.css";
import "./Styles/styles.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React from "react";

function App() {
  //Recipe API
  const RECIPE_APP_ID = "015472df";
  const RECIPE_APP_KEY = "f5c90ece39c8ee2ffb082c15b189b178";

  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
