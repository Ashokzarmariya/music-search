import React, { useEffect, useState } from "react";
import CreatePlaylistModal from "../../Components/CreatePlaylistModal/CreatePlaylistModal";
import UserPlaylist from "../../Components/UserPlaylist/UserPlaylist";
import "./Playlist.css";

const Playlist = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <div>
      <div onClick={handleShowModal}>
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
      <CreatePlaylistModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};

export default Playlist;
