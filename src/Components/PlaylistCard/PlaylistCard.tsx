import React from "react";
import "./PlaylistCard.css";

interface props {
  img: string;
  title:string,
  description:string;
}
const PlaylistCard = ({ img,title,description }: props) => {
  return (
    <div>
      <div className="card playlistCard">
        <img src="https://cdn.pixabay.com/photo/2021/07/11/16/02/freezelight-6404182__340.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
