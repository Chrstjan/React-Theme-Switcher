import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const LandingPage = () => {
    const {changeTheme, isDarkMode} = useContext(ThemeContext);

    return (
        <>
        <div style={(isDarkMode ? {backgroundColor: "black"} : {backgroundColor: "white"})}>
            <button onClick={() => changeTheme()}>Change Theme</button>
            <h2 style={(isDarkMode ? {color: "white"} : {color: "black"})}>Landing Page</h2>
        </div>
        </>
    )
}