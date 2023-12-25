import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./views/Home/Home";
import ShowTransaction from "./views/ShowTransaction/ShowTransaction";
import AddTransaction from "./views/AddTransaction/AddTransaction";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/showTransaction',
    element:<ShowTransaction/>
  },
  {
    path:'/addTransaction',
    element:<AddTransaction/>
  }

])

root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
