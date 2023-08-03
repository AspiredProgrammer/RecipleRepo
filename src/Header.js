import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Home from './Home';
import Search from './Search';
import './styles.scss';

function Header() {
    return (
        <div>
          <BrowserRouter>
                <div className="Header">
                    <ul>
                        <li type="Home">
                            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">
                                Home
                            </Link>
                        </li>
                        <li type="Easy-Dinner">
                            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/search">
                                Easy Dinner
                            </Link>
                        </li>
                        <li type="Family-Dinner">
                            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/search">
                                Family Dinner
                            </Link>
                        </li>
                        <li type="Healthy">
                            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/search">
                                Healthy
                            </Link>
                        </li>
                    </ul>
                </div>
            
    
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/search"
                        element={<Search search={"Easy Dinner"} />}
                    />{" "}
                    <Route
                        path="/search"
                        element={<Search search={"Family Dinner"} />}
                    />{" "}
                    <Route
                        path="/search"
                        element={<Search search={"Healthy"} />}
                    />{" "}
                </Routes>
            </BrowserRouter>
        </div>
      );
}

export default Header;