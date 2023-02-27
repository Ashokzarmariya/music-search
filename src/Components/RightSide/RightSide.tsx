import React, { useEffect, useState } from "react";
import CreatePlaylistButton from "../CreatPlaylistButton/CreatePlaylistButton";
import Favorite, { song } from "../FavoriteSong/FavoriteSong";
import PlaylistCard from "../PlaylistCard/PlaylistCard";
import Song from "../Songs/Song";
import UserPlaylist from "../UserPlaylist/UserPlaylist";
import "./RightSide.css";

const RightSide = () => {


  const [favorite, setFavorite] = useState<song[]>([]);
  const favoriteSongs = localStorage.getItem("favorite_songs");
  const [isPlaylist,setIsPlaylist]=useState(false);
  const playlists = localStorage.getItem("playlists");

  useEffect(() => {
    if (playlists && JSON.parse(playlists)?.length>0) {
      setIsPlaylist(true);
    }
  }, [playlists]);


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

        {isPlaylist && <div className="playlist">
          <UserPlaylist/>
        </div>}
       {!isPlaylist && <div>
          <CreatePlaylistButton/>
        </div>}
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
