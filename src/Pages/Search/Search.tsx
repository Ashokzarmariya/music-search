import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import AddSongToPlaylistModal from "../../Components/AddSongToPlaylist/AddSongToPlaylistModal";
import FavoriteSong, { song } from "../../Components/FavoriteSong/FavoriteSong";
// import { debounce } from 'lodash';

import { searchMusicHandler } from "../../Redux/song/Action";
import "./Search.css";

const Search = () => {
  const [searchResult, setSearchResult] = useState<song[]>([]);



  const handleChange = (keyword: string) => {
    console.log("search --- ", keyword);

    searchHandler(keyword);
  };

  const searchHandler = async (keyword: string) => {
    const res = await fetch(
      `https://shazam.p.rapidapi.com/search?term=${keyword}&offset=0&limit=5&locale=en-IN`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "1da9632d82mshe52cacb569a7414p138479jsn8498ceeb2ea5",
          "X-RapidAPI-Host": "shazam.p.rapidapi.com",
        },
      }
    );

    const data = await res.json();
    setSearchResult(data.tracks.hits);
    console.log("search result ", data.tracks.hits);
  };

  return (
    <div>
      <div className="searchDiv">
        <h2 className="searchHeading">Search Music</h2>
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="text"
          className="searchInput"
          placeholder="Search music..."
        />
      </div>

      <div className="searchResult mt-5">
        <FavoriteSong data={searchResult} isShow={true}/>
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default Search;
