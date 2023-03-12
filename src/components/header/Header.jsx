import React from "react";
import logo from '../assets/images/logo.png'

export const Header = () => {
  const activeNavLink = ({ isActive }) => (isActive ? 'active' : 'NavLink')
  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-screen h-[8vh] md:shadow-sm bg-white">
        {/* desktop */}
        <div className="hidden md:flex justify-between px-7 p-2">
          <div className="logo flex">
            <div>
              <img src={logo} alt="logo" width="40px" height="40px" />
            </div>
            <h2 className="text-2xl font-semibold ml-3">pluse</h2>
          </div>

          {/* navlinks */}
          <div className="menu">
            <div className="flex">
              {navBar.map((list,i) => (
                <li className={`mx-5 py-2 ${activeNavLink}`} key={i}></li>
              ))}
            </div>
          </div>
          <div></div>
        </div>
      </header>
    </>
  );
};