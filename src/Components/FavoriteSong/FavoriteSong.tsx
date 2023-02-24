import React from "react";
import Song from "../Songs/Song";
interface song{
 title:string,
  album:string,
  duration:string
}
interface props {
  data:song[]
}
const FavoriteSong = ({data}:props) => {
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
          {data.map((item:song,index:number) => (
            <tr>
              <th scope="row">{index}</th>
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
