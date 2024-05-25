import React from "react";
import Logo from "../../assets/caridentlogo2.png";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import LoginDialog from "../LoginPopup/LoginDialog";

const Navbar = ({ handleLoginPopup }) => {

  return (
    <>
      <main className="bg-background-95 sticky top-0 z-50 border-b border-slate-100 backdrop-blur-sm dark:border-gray-800 dark:bg-zinc-950/60">
        <div className="container">
          <nav className="flex items-center justify-between">
            <a href="#" className="mt-2 text-2xl text-gray-800 dark:text-white">
              <img src={Logo} alt="Logo" className="mb-3 mr-1 inline h-10" />
              Carident
            </a>
            <div className="flex items-center gap-2">
              <ModeToggle />
              <LoginDialog />
            </div>
          </nav>
        </div>
      </main>
    </>
  );
};

export default Navbar;
