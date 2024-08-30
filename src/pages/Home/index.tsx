import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export function Home() {
  let navigate = useNavigate()
  useEffect(() =>{
    let email = sessionStorage.getItem("email")
    if(email === "" || email === null){
      navigate("/login")
    }else navigate("/notification")
  })
    return (
      <main className='min-h-screen bg-zinc-950'>
        
      </main>
         
    );
  };
  