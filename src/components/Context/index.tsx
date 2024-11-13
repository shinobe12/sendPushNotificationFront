import { createContext, useState } from 'react';
import { Form } from '../Form';

import { Login } from 'src/pages/Login';
import { Notification } from 'src/pages/Notification/index.';

export const ThemeContext = createContext({});

export function ThemeProvider({ children }: { children: any }) {
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        </>
    );
}