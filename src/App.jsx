import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Services from "./components/Services/Services";
import Hero from "./components/Hero/Hero";

import { ThemeProvider } from "@/components/theme-provider"

const App = () => {
  const [loginPopup, setLoginPopup] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true); // Default to dark theme

  const handleLoginPopup = () => {
    setLoginPopup(!loginPopup);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className={`${loginPopup ? "blur-sm bg-black/30" : ""}`}>
        <div>
          <Navbar handleLoginPopup={handleLoginPopup} isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
          <Hero handleLoginPopup={handleLoginPopup} isDarkTheme={isDarkTheme} />
        </div>
        {/* <Services /> */}
      </div>

      {/* Login Popup */}
      <LoginPopup loginPopup={loginPopup} handleLoginPopup={handleLoginPopup} />
    </ThemeProvider>
    </>
  );
};

export default App;
