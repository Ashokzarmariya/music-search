import React, { useEffect, useState } from "react";
import FavoriteSong, { song } from "../../Components/FavoriteSong/FavoriteSong";
import "./Favorite.css";

const Favorite = () => {
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

const handleOnClick=()=>{};
  const songs = [
    {
      track: {
        title: "aaa",
        album: "bbbb",
        duration: "10 hours",
        images: {
          background:
            "https://tse2.mm.bing.net/th?id=OIP.khdcOD-9zfajSweZVrGfJwHaEP&pid=Api&P=0",
        },
      },
    },
  ];
  return (
    <div>
      <div>
        <h1 className="favoritesSong">My Favorite Songs</h1>
      </div>
      <div>
        <FavoriteSong isShow={false} data={favorite} />
      </div>
    </div>
  );
};

export default Favorite;
