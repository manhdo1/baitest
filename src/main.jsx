import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/login.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/danhsachNV",
    element: <Login/>,
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
