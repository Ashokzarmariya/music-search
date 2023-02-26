import React, { useEffect, useState } from "react";
import FavoriteSong from "../FavoriteSong/FavoriteSong";
import "./PlaylistDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { playlist } from "../../Configs/Interfaces";
import Playlist from "../../Pages/Playlist/Playlist";

const PlaylistDetails = () => {
    const [playlist, setPlaylist] = useState<playlist[]>([]);
    const playlists = localStorage.getItem("playlists");
    const [selectedPlaylist,setSelectedPlaylist]=useState<playlist>();
    const {title}=useParams();


  console.log("selected playlist ---- ",selectedPlaylist)

    useEffect(() => {
      if (playlists) {
        console.log(
          "local storage playlists------------------ ",
          JSON.parse(playlists)
        );
        // setPlaylist(JSON.parse(playlists));

        for(let item of JSON.parse(playlists)){
            if(item.title===title){
                setSelectedPlaylist(item);
            }
        }
      }

    }, [playlists]);
  const navigate = useNavigate();
  const handleNavigate = (value: number) => {
    navigate(value);
  };
  return (
    <div>
      <div className="my-2 d-flex">
        <i
          onClick={() => handleNavigate(-1)}
          className="chevron fas fa-chevron-left leftChevron"
        ></i>
        {/* <i onClick={()=>handleNavigate(1)} className="chevron fas fa-chevron-right"></i> */}
      </div>

      <div className="playlistHeader">
        <img
          className="playlistImage"
          src="https://cdn.pixabay.com/photo/2021/07/11/16/02/freezelight-6404182__340.jpg"
          alt=""
        />
        <div>
          <h5>Playlist</h5>
          <h1 className="playlistName my-4">{selectedPlaylist?.title}</h1>
          <p className="opacity-25">{selectedPlaylist?.description}</p>
          <p className="mt-2">
            {" "}
         
            <span className="username">{selectedPlaylist?.songs?.length} songs</span>{" "}
            
          </p>
        </div>
      </div>

      <div className="plsylistSongs mt-5">
      {selectedPlaylist &&  <FavoriteSong data={selectedPlaylist?.songs} isShow={false}/>}
      </div>
    </div>
  );
};

export default PlaylistDetails;
