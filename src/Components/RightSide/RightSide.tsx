import React from "react";
import Favorite from "../FavoriteSong/FavoriteSong";
import PlaylistCard from "../PlaylistCard/PlaylistCard";
import Song from "../Songs/Song";
import UserPlaylist from "../UserPlaylist/UserPlaylist";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div>
      <div className="userPlaylist">
        <h1 className="heading">My Playlist</h1>

        <div className="playlist">
        <UserPlaylist/>
        </div>
      </div>
      <div className="favouriteSong">
        <h1 className="heading">Favourite Song</h1>

        <div>
         <Favorite/>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
