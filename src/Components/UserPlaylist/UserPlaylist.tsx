import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { playlist } from "../../Configs/Interfaces";
import PlaylistCard from "../PlaylistCard/PlaylistCard";
import "./UserPlaylist.css";

const UserPlaylist = () => {
  const [playlist, setPlaylist] = useState<playlist[]>([]);
  const playlists = localStorage.getItem("playlists");

  useEffect(() => {
    if (playlists) {
      console.log(
        "local storage playlists------------------ ",
        JSON.parse(playlists)
      );
      setPlaylist(JSON.parse(playlists));
    }
  }, [playlists]);

  
  return (
    <div>
      <div className="playlist">
        {playlist.map((item) => (
          <Link to={`/playlist/${item.title}`} className="link">
           <PlaylistCard
            title={item.title}
            description={item.description}
            img="https://cdn.pixabay.com/photo/2015/09/17/14/24/woman-944261__340.jpg"
          />
          </Link>
         
        ))}
      </div>
    </div>
  );
};

export default UserPlaylist;
