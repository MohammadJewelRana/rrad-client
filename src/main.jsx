import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <div className='max-w-7xl mx-auto   bg-black '>



      <RouterProvider router={Router}></RouterProvider>
    </div>

  </React.StrictMode>,
)