import React, { useState } from "react";
import "./Sidebar.css";

interface menu {
  name: string;
  iconClassName: string;
}

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("Home");

  const menu: menu[] = [
    { name: "Home", iconClassName: "fas fa-home" },
    { name: "Search", iconClassName: "fas fa-search" },
    { name: "Favourites", iconClassName: "fas fa-star" },
    { name: "Playlists", iconClassName: "fab fa-playstation" },
  ];
  const handleSetActiveMenu = (item: string) => {
    setActiveMenu(item);
  };
  return (
    <div className="sidebar">
      <div>
        <h2>Music-Search</h2>
        <hr />
      </div>
      <div>
        {menu.map((item) => (
          <div
            onClick={() => handleSetActiveMenu(item.name)}
            className={` ${
              activeMenu === item.name ? "activeMenu" : ""
            } menuItem`}
          >
            <i className={`${item.iconClassName}`}></i>
            <p className="menuName">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
