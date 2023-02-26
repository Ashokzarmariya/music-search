import React, { useState } from "react";
import AddSongToPlaylistModal from "../AddSongToPlaylist/AddSongToPlaylistModal";
import Song from "../Songs/Song";
export interface song {
  track: {
    title: string;
    album: string;
    duration: string;
    images: { background: string };
    subtitle: string;
  };
}
interface props {
  data: song[];
  isShow:boolean;
  // handleOnClick: () => void;
}
const FavoriteSong = ({ data,isShow }: props) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleAddFavorite = (data: song) => {
    const jsonData = JSON.stringify(data);
    const fav = localStorage.getItem("favorite_songs");

    if (fav && JSON.parse(fav).length > 0) {
      const newData = JSON.parse(fav);
      newData.push(data);
      localStorage.setItem("favorite_songs", JSON.stringify(newData));
    } else {
      localStorage.setItem("favorite_songs", JSON.stringify([data]));
    }
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Album</th>
          {isShow &&  <th scope="col">Add To Favorites</th>}
            {isShow && <th scope="col">Add To Playlist</th>}
          </tr>
        </thead>
        <tbody>
          {data?.map((item: song, index: number) => (
            <tr>
              <th scope="row">{index+1}</th>
              <td>
                <Song
                  title={item?.track?.title}
                  description={item?.track?.subtitle}
                  image={item?.track.images.background}
                />
              </td>
              <td>{item?.track?.subtitle}</td>
              {isShow && <td>
                <button
                  onClick={() => handleAddFavorite(item)}
                  type="button"
                  className="btn btn-primary"
                >
                  Add To Favorite
                </button>
              </td>}
              {isShow && <td>
                <button
                  onClick={handleShowModal}
                  type="button"
                  className="btn btn-primary"
                >
                  Add To Playlist
                </button>

                <AddSongToPlaylistModal
                  song={item}
                  showModal={showModal}
                  handleCloseModal={handleCloseModal}
                />
              </td>}
            </tr>
          ))}
        </tbody>
      </table>

      <div></div>
    </div>
  );
};

export default FavoriteSong;
