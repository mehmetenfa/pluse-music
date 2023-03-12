import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navBar } from "../assets/data/data";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/b4.jpg";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

export const Header = () => {
  const activeNavLink = ({ isActive }) => (isActive ? "active" : "NavLink");
  const [isMenu, setIsMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-screen h-[8vh] md:shadow-md shadow-sm bg-white">
      {/* desktop and tablet */}
      <div className="hidden md:flex justify-between px-7 p-2">
        {/* logo */}
        <div className="logo flex">
          <div>
            <img src={logo} alt="logo" width="40px" height="40px" />
          </div>
          <h2 className="text-2xl font-semibold ml-3">pluse</h2>
        </div>

        {/* navlinks  */}
        <div className="menu">
          <ul className="flex">
            {navBar.map((list, i) => (
              <li className={`mx-5 py-2  ${activeNavLink}`} key={i}>
                <NavLink to={list.path}>{list.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div></div>
      </div>
    </header>
  );
};
