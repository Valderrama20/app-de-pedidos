import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom'
import Home from './Pages/Home'
import CreateOrders from './Pages/CreateOrder'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/pedidos",
    element: <CreateOrders/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
