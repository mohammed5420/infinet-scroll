import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const toggleDarkMode = () => {
    if (toggle) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="flex justify-between items-center shadow-md px-16 py-4 dark:bg-cusBlue-100">
      <Link to="/">
        <h2 className="text-sm md:text-xl  capitalize text-cusBlue-300 dark:text-cusBlue-500">
          where in the world?
        </h2>
      </Link>
      <div
        className="cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
          toggleDarkMode();
        }}
      >
        <img
          className="w-8 h-8 mr-2 inline-block"
          src={
            toggle
              ? `https://img.icons8.com/ios-filled/150/000000/partly-cloudy-night--v2.png`
              : `https://img.icons8.com/material-sharp/192/000000/sun--v2.png`
          }
        />
        <span className="dark:text-gray-50 ">{toggle ? "dark mode" : "light mode"}</span>
      </div>
    </nav>
  );
};

export default Nav;
