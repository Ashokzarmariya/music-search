import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./CreatePlaylistModal.css";

const CreatePlaylistModal = ({ showModal, handleCloseModal }) => {
  const [playlistData, setPlaylistData] = useState({});

  const handleInputChange = (event) => {
    setPlaylistData({
      ...playlistData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCreatePlaylist = () => {
    playlistData.songs=[]
    console.log("playlist", playlistData);

    const playlist = localStorage.getItem("playlists");

    if (playlist && JSON.parse(playlist).length > 0) {
      const userPlaylists = JSON.parse(playlist);
      userPlaylists.push(playlistData);
      localStorage.setItem("playlists", JSON.stringify(userPlaylists));
    } else {
      localStorage.setItem("playlists", JSON.stringify([playlistData]));
    }

    handleCloseModal();
  };
  return (
    <div>
      <div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Playlist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="mb-2">
                <label className="pb-2">Playlist Name</label>
                <input
                  className="playlistNameInput"
                  type="text"
                  placeholder="Playlist Name..."
                  name="title"
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div>
                <lable className="pb-2">Description</lable>
                <textarea
                  className="description"
                  name="description"
                  id=""
                  placeholder="Descriptions..."
                  onChange={(e) => handleInputChange(e)}
                ></textarea>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="button"
              className="btn btn-primary"
              onClick={handleCreatePlaylist}
            >
              Creat Playlist
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default CreatePlaylistModal;
