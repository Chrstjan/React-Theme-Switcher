import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const [isDarkMode, SetIsDarkMode] = useState(false);

    const changeTheme = () => {
        SetIsDarkMode((prev) => !prev);
    }

    useEffect(() => {
        SetIsDarkMode(localStorage.getItem("theme"));
    }, [])


    useEffect(() => {
        localStorage.setItem("theme", isDarkMode);
    }, [isDarkMode])

    return (
            <ThemeContext.Provider value={{ isDarkMode, changeTheme }}>
                {children}
            </ThemeContext.Provider>
    )
}