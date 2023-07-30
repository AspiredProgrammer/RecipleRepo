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
                    <button type="Home">
                        <Link to="/">Home</Link>
                    </button>
                    <button type="Easy-Dinner">
                        <Link to="/search">Easy Dinner</Link>
                    </button>
                    <button type="Family-Dinner">
                        <Link to="/search">Family Dinner</Link>
                    </button>
                    <button type="Healthy">
                        <Link to="/search">Healthy</Link>
                    </button>
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