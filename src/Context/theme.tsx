import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({})

export function ThemeProvider(props: any) {
    const [theme, setTheme] = useState<string | null>(null)
    const toggleTheme = () => {
       setTheme(theme === "dark" ? "light" : "dark")
    }
    useEffect(()=>{
        const prefersColorScheme =window.matchMedia('(prefers-color-scheme: dark)')
        if(prefersColorScheme.matches) {
            setTheme("dark")
          } else {
            setTheme("light")
          }
    },[])
    return (
        
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {props.children}
            </ThemeContext.Provider>
        
    );
}