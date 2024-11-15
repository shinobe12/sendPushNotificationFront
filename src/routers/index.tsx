
import {
    createBrowserRouter, 
    BrowserRouter,
    createRoutesFromElements, 
    Route,
    Routes
} from 'react-router-dom'
import {Login} from "../pages/Login"
import { Notification } from '../pages/Notification/index.'


import { Navigate } from "react-router-dom";
import { useContext } from 'react'
import { AuthContext } from '../Context/auth'

const PrivateRoute = ({ Component }:{Component:any}) => {
const {isAuthenticated} = useContext(AuthContext);
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export const Routers =()=>{
    const {isAuthenticated} = useContext(AuthContext);
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<PrivateRoute Component={Notification} />}/>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/notification"/> : <Login />} />
        {/* Private route implementation */}
        <Route path="/notification" element={<PrivateRoute Component={Notification} />} />
      </Routes>
        </BrowserRouter>
      
    )}



