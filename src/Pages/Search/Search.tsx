import React from "react";
import "./Search.css";

const Search = () => {
  const handleChange = (keyword: string) => {
    console.log("search --- ", keyword);
  };

  return (
    <div>
      <div className="searchDiv">
        <h2 className="searchHeading">Search Music</h2>
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="text"
          className="searchInput"
        />
      </div>

      <div className="searchResult"></div>
    </div>
  );
};

export default Search;
