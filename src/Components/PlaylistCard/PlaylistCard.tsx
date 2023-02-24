import React from "react";
import "./PlaylistCard.css";

interface props {
  img: string;
}
const PlaylistCard = ({ img }: props) => {
  return (
    <div>
      <div className="card playlistCard">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">my favorite song</p>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
