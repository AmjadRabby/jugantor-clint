import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "./MenuItem";

const DropdownItems = ({ setNavHide, setClick }) => {
  const [clickItem, setClickItem] = useState(false);
  const handleClick = () => {
    setClickItem(!clickItem);
  };
  const handleNavMenu = () => {
    setClickItem(false);
    setNavHide(true);
    setClick(false);
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={
          clickItem
            ? " dropdown-menu-bar clicked"
            : " dropdown-menu-bar border border-5  bg-light pt-3 pb-3 rounded-bottom shadow row"
        }
      >
        {MenuItem.map((item, index) => {
          return (
            <li className="col-4 col-md-3 col-sm-6" key={index}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={handleNavMenu}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DropdownItems;
