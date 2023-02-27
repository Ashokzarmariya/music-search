import React, { useEffect, useState } from "react";
import Favorite, { song } from "../FavoriteSong/FavoriteSong";
import PlaylistCard from "../PlaylistCard/PlaylistCard";
import Song from "../Songs/Song";
import UserPlaylist from "../UserPlaylist/UserPlaylist";
import "./RightSide.css";

const RightSide = () => {

  const songs=[{track:{title:"aaa",album:"bbbb",duration:"10 hours",images:{background:"https://tse2.mm.bing.net/th?id=OIP.khdcOD-9zfajSweZVrGfJwHaEP&pid=Api&P=0"}}}]; 

  const [favorite, setFavorite] = useState<song[]>([]);
  const favoriteSongs = localStorage.getItem("favorite_songs");

  useEffect(() => {
    if (favoriteSongs) {
      console.log(
        "local storage ------------------ ",
        JSON.parse(favoriteSongs)
      );
      setFavorite(JSON.parse(favoriteSongs));
    }
  }, [favoriteSongs]);
  
  
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
         <Favorite isShow={false} data={favorite}/>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
