import React from "react";
import UserPlaylist from "../../Components/UserPlaylist/UserPlaylist";
import "./Playlist.css";

const Playlist = () => {
  return (
    <div>
        <div>
            <h2 className="heading">Create New Playlist</h2>

           <div className="">
           <i className="createPlaylist fas fa-plus"></i>
           </div>
        </div>
      <div>
        <h2 className="heading">My Playlist</h2>
      </div>
      <div>
        <UserPlaylist />
      </div>
    </div>
  );
};

export default Playlist;
