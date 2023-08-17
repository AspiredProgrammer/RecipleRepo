import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
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
            <li className="Button" type="Home">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="Button" type="Search">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/search"
              >
                Search
              </Link>
            </li>
            <li className="Button" type="Easy-Dinner">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/easyDinner"
              >
                Easy Dinner
              </Link>
            </li>
            <li className="Button" type="Family-Dinner">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/familyDinner"
              >
                Family Dinner
              </Link>
            </li>
            <li className="Button" type="Healthy">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/healthy"
              >
                Healthy
              </Link>
            </li>
            <li className="Button" type="Search">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/search"
              >
                Healthy
              </Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/EasyDinner" element={<EasyDinner />} />
          <Route path="/familyDinner" element={<FamilyDinner />} />
          <Route path="/healthy" element={<Healthy />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Header;
