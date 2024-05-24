import React from "react";
import Logo from "../../assets/caridentlogo2.png";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";

const Navbar = ({ handleLoginPopup, isDarkTheme, toggleTheme }) => {
  return (
    <>
      <main className="shadow-lg bg-white/70 backdrop-blur-sm dark:bg-gray-900/70">
        <div className="container">
          <nav className="flex justify-between items-center">
            <a href="#" className="text-gray-800 dark:text-white text-3xl font-bold mt-2">
              <img src={Logo} alt="Logo" className="h-10 inline mr-1 mb-3" />
              Carident
            </a>
            <div className="flex items-center">
              <ModeToggle />
              <label className="switch">
                <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
                <span className="slider round"></span>
              </label>
              <a
                href="#"
                onClick={handleLoginPopup}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-4 py-4 inline-block select-none"
              >
                Login
              </a>
              <Button>Test</Button>
            </div>
          </nav>
        </div>
      </main>
    </>
  );
};

export default Navbar;
