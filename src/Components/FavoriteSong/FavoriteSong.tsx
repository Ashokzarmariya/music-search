import React from "react";
import Song from "../Songs/Song";

const FavoriteSong = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Album</th>
            <th scope="col">
              <i className="far fa-clock"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <tr>
              <th scope="row">{item}</th>
              <td>
                <Song />
              </td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FavoriteSong;
