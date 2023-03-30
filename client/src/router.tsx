import {createBrowserRouter} from 'react-router-dom'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { AuthLayout } from './pages/layouts/AuthLayout'

// createBrowserRouter() is a func that takes an array of all our different routes 
export const router = createBrowserRouter([
    // ATHENTICATION ROUTES

{
    //  element is our layout for our authentication (login/signup share the same layout)
    element: <AuthLayout/>,
    // children is an array of all the routes that are nested within the AuthLayout 
    children: [
        {path: "login", element: <Login/>},
        {path: "signup", element: <Signup/>},

]
}
])