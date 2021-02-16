import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "./MenuItem";
// import MenuItem from "./MenuItem";

const DropdownItems = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // console.log(MenuItem);
  return (
    <>
      <ul onClick={handleClick} className={click ? " " : "row list-unstyled"}>
        {MenuItem.map((item, index) => {
          return (
            <li className="col-2 col-md-2 col-sm-6 mb-2" key={index}>
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
