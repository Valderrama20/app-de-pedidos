import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom'
import Home from './Pages/Home'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/pedidos",
    element: <h1>jose</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
