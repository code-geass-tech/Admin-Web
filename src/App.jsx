import React, { useState } from "react";

import { ThemeProvider } from "@/components/theme-provider"
import Landing  from "@/routes/Landing";
import AuthLayout from "./components/AuthLayout";
import Layout from "./components/Layout";
import Appointments from "./routes/Appointments";

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
        path: "appointments/",
        element: <Appointments />
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
