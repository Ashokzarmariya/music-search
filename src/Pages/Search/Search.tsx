import React from "react";
// import { useDispatch } from "react-redux";
import { useDispatch } from 'react-redux';

import { searchMusicHandler } from "../../Redux/song/Action";
import "./Search.css";

const Search = () => {
  const dispatch=useDispatch();

  const handleChange = (keyword: string) => {
    console.log("search --- ", keyword);
    searchHandler(keyword)
  };

  const searchHandler= async (keyword:string)=>{

    // https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=5
    const res = await fetch(
      `https://shazam.p.rapidapi.com/search?term=${keyword}&offset=0&limit=5`,
      {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': '1da9632d82mshe52cacb569a7414p138479jsn8498ceeb2ea5',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
      }
    );

    console.log("res ",res)
  
    const data = await res.json();
    
    console.log("search result ", data)
  }

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
