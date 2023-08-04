import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Home from "./Home";
import EasyDinner from "./Recipe/EasyDinner";
import FamilyDinner from "./Recipe/FamilyDinner";
import Healthy from "./Recipe/Healthy";
import Search from "./Search";
import "./styles.scss";

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
            <li className="button-19" type="Food">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/food"
              >
                Food List
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
          <Route
            path="/nutrition"
            element={<Healthy />}
            // element={<Search search={"Healthy"} />}
          />
          <Route
            path="/food"
            element={<Healthy />}
            // element={<Search search={"Healthy"} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Header;
