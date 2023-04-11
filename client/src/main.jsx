import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom'
import Home from './componetes/home/Home'
import Orders from './componetes/createOrders/Orders'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/pedidos",
    element: <Orders/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
