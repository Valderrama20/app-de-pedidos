import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom'
import {Home,Prueba} from './Pages'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/pedidos",
    element: <Prueba/>
  },
  {
    path: "/editarPedido/:id",
    element: <Prueba/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
