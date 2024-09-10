import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const [isDarkMode, SetIsDarkMode] = useState(false);

    const changeTheme = () => {
        SetIsDarkMode((prev) => !prev);
    }

    return (
            <ThemeContext.Provider value={{ isDarkMode, changeTheme }}>
                {children}
            </ThemeContext.Provider>
    )
}