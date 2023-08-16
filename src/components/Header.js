import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Home from "./Home";
import EasyDinner from "../pages/EasyDinner";
import FamilyDinner from "../pages/FamilyDinner";
import Healthy from "../pages/Healthy";
import Search from "./RecipeCard";
import "../styles/styles.scss";
import Nutrition from "../pages/Nutrition";
import FoodDatabase from "../pages/FoodDatabase";

function Header() {
  return (
    <div>
      <BrowserRouter>
        <div className="Header">
          <ul>
            <li className="button-19" type="Home">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="button-19" type="Easy-Dinner">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/easyDinner"
              >
                Easy Dinner
              </Link>
            </li>
            <li className="button-19" type="Family-Dinner">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/familyDinner"
              >
                Family Dinner
              </Link>
            </li>
            <li className="button-19" type="Healthy">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/healthy"
              >
                Healthy
              </Link>
            </li>
            <li className="button-19" type="Nutrition">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/nutrition"
              >
                Nutritional Analysis
              </Link>
            </li>
            <li className="button-19" type="FoodDatbase">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/foodDatabase"
              >
                Food Database
              </Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/EasyDinner"
            element={<EasyDinner />}
            // element={<Search search={"Easy Dinner"} />}
          />
          <Route
            path="/familyDinner"
            element={<FamilyDinner />}
            // element={<Search search={"Family Dinner"} />}
          />
          <Route
            path="/healthy"
            element={<Healthy />}
            // element={<Search search={"Healthy"} />}
          />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/foodDatabase" element={<FoodDatabase />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Header;
