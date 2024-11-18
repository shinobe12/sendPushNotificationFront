import { useContext, useEffect } from "react";
import { Login } from "../Login";
import { Notification } from "../Notification/index.";
import { AuthContext } from "../../Context/auth";
import { Navigate, redirect, useNavigate } from "react-router-dom";


export function Home() {
  const {isAuthenticated} =useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(()=>{
    console.log("home")//
    if(isAuthenticated){
      navigate("/notification")
    }else{
      navigate("/login")
    }
  }, [])
  

  return null
};
