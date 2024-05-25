import React, { useState } from "react";

import { ThemeProvider } from "@/components/theme-provider"
import Landing  from "@/routes/Landing";
import Navbar from "./components/Navbar/Navbar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  }
]);

const App = () => {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
