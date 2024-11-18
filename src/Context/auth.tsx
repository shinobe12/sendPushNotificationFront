import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext<{email:string | null, isAuthenticated: boolean, login?:(email:string)=>void, logout?:()=>void}>({isAuthenticated: false, email:null})

export function AuthProvider(props: any) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    
  const  [email, setEmail] = useState<null | string>(null)
    
    const login=(email:string)=>{
        setEmail(email)
        sessionStorage.setItem('email', email)
    
        setIsAuthenticated(true)
       
    }
    const logout=()=>{
        setEmail(null)
        sessionStorage.clear()
        setIsAuthenticated(false)
    }
    useEffect(()=>{
       const _email = sessionStorage.getItem("email")
       setEmail(_email)
       if(_email) setIsAuthenticated(true)
    },[])


    return (
        
            <AuthContext.Provider value={{ email, login, logout, isAuthenticated }}>
                {props.children}
            </AuthContext.Provider>
        
    );
}