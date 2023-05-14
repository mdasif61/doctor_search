import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "./components/Layout/Main";
import Home from "./components/Home/Home";
import Services from "./components/pages/Services";
import Booking from "./components/pages/Booking";
import Details from "./components/pages/Details";
import MyBooking from "./components/pages/MyBooking";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import LoginLayout from "./components/pages/LoginLayout";
import AuthProvider from "./components/shared/AuthProvider";
import PrivateRoute from "./components/shared/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/service',
        element:<Services></Services>,
        loader:()=>fetch('http://localhost:5000/service')
      },
      {
        path:'/booking/:id',
        element:<PrivateRoute><Booking></Booking></PrivateRoute>
      },
      {
        path:'/details/:id',
        element:<Details></Details>,
        loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`)
      },
      {
        path:'/mybooking/:id',
        element:<PrivateRoute><MyBooking></MyBooking></PrivateRoute>,
      }
    ]
  },
  {
    path:'/',
    element:<LoginLayout></LoginLayout>,
    children:[
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto p-7'>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </div>
  </React.StrictMode>
);
