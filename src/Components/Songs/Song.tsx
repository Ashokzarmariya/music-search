import React from "react";
import "./Song.css";

interface props {
  title: string;
  description: string;
  image:string;
}

const Song = ({ title, description,image }: props) => {
  return (
    <div>
      <div className="songCard">
        <img
          className="songImage"
          src={image}
          alt=""
        />
        <div className="songName">
          <p className="songTitle">{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
