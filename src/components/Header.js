import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Home from "./Home";
import EasyDinner from "../pages/EasyDinner";
import FamilyDinner from "../pages/FamilyDinner";
import Healthy from "../pages/Healthy";
import "../Styles/styles.scss";
import SearchPage from "../pages/Searchpage";

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
          path="/searchPage"
          element={<SearchPage/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Header;
