import React, { useState } from "react";

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
    <form onSubmit={handleSubmit} className="search-form">
      <input
        className="search-bar"
        type="text"
        value={search}
        onChange={updateSearch}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
