import React, { useState, useEffect } from "react";
import "../styles/styles.scss";

const SearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);
    setSearch("");
  };

  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="Button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};


export default SearchForm;

