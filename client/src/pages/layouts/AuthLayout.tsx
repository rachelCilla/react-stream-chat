// an Outlet is where you put the code that goes inside your layout (in this case, the login/signup form)
import { Outlet } from "react-router-dom";

export function AuthLayout(){
    
    return <Outlet/> 
}