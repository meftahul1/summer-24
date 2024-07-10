import React from 'react'
import ReactDOM from 'react-dom/client'
import { app } from './firebaseConfig.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.scss'
import { router } from './Routes/index.jsx';
import { ToastContainer, useToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <ToastContainer />
  </React.StrictMode>
)
