import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createBrowserRouter, RouterProvider} from "react-router-dom"

import Signup from './pages/Signup/Signup';
import Post from "./pages/Post/Post" 

const router =  createBrowserRouter([
  {
    path: "/",
    element: <Signup/>
  },
  {
    path:"post",
    element: <Post/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
