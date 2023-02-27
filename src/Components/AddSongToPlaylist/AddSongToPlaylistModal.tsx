import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { playlist } from "../../Configs/Interfaces";
import { song } from "../FavoriteSong/FavoriteSong";
import "./AddSongToPlaylist.css";

interface props {
  showModal: boolean;
  handleCloseModal: () => void;
  song:song
}

const AddSongToPlaylistModal = ({ showModal, handleCloseModal,song }: props) => {
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

  const handleAddSongToPlaylist = (title: string) => {
    for(let item of playlist){
      if(item.title===title){
        console.log(item)
        item.songs.push(song)
       
      }
    }
    localStorage.setItem("playlists",JSON.stringify(playlist));
  };

  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Select Playlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {playlist.map((item) => (
              <p
                onClick={() => handleAddSongToPlaylist(item?.title)}
                className="px-2 p-1 bg-primary my-1 text-white text-capitalize playlistItem"
              >
                {item.title}
              </p>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddSongToPlaylistModal;
