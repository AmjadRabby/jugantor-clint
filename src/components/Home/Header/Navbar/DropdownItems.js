import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "./MenuItem";

const DropdownItems = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={
          click
            ? " dropdown-menu-bar clicked"
            : " dropdown-menu-bar bg-light rounded-bottom shadow row"
        }
      >
        {MenuItem.map((item, index) => {
          return (
            <li className="col-2 col-md-2 col-sm-6" key={index}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setClick(false)}
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
