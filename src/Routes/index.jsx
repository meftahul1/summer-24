import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from '../Pages/Register'
import Home from "../layouts/HomeLayout";
export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />

  },

    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/login",
      element: <Login />

    }
  ]);