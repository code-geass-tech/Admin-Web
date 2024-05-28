import React, { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider"
import Landing  from "@/routes/Landing";
import AuthLayout from "./components/AuthLayout";
import Layout from "./components/Layout";
import Clinic from "./routes/Clinic";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />
      }
    ]
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "clinic/",
        element: <Clinic />
      }
    ]
  }
]);

const App = () => {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
