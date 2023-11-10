import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Products from './Components/Products.jsx';
import DashBoard from './Components/DashBoard.jsx';
import Product from './Components/Product.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>

      },
      {
        path:"/products",
        element:<Products></Products>,
        loader:()=>fetch(`https://dummyjson.com/products`)
      },
      {
        path:"/product/:id",
        element:<Product></Product>,
        loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`)

      },
      {
        path:"/dashboard",
        element:<DashBoard></DashBoard>
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
