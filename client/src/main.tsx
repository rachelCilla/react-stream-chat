import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import {router} from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // React.StrictMode is a development-only tool that helps you identify potential problems in your application.
  <React.StrictMode>
    {/* RouterProvider comp. allows you to define your app's routes and associated comp. and handle nav between them */}
    {/* router prop is being passed to the RouterProvider comp.It's value is an instance of the router used for our app,  . */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
