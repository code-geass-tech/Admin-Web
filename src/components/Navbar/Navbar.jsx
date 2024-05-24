import React from "react";
import Logo from "../../assets/caridentlogo2.png";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";

const Navbar = ({ handleLoginPopup }) => {
  return (
    <>
      <main className="shadow-lg bg-white/70 backdrop-blur-sm dark:bg-gray-900/70">
        <div className="container">
          <nav className="flex justify-between items-center">
            <a href="#" className="text-gray-800 dark:text-white text-3xl font-bold mt-2">
              <img src={Logo} alt="Logo" className="h-10 inline mr-1 mb-3" />
              Carident
            </a>
            <div className="flex gap-2 items-center">
              <ModeToggle />
              <Button onClick={handleLoginPopup}>Login</Button>
            </div>
          </nav>
        </div>
      </main>
    </>
  );
};

export default Navbar;
