import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { Button } from "../components/Button/Button";
import { Gallery } from "../components/Gallery/Gallery";

export const LandingPage = () => {
    const {changeTheme, isDarkMode} = useContext(ThemeContext);

    return (
        <>
        <Wrapper darkMode={isDarkMode}>
            <Button action={changeTheme} text="Change Theme"/>
            <h2 style={(isDarkMode ? {color: "white"} : {color: "black"})}>Landing Page</h2>
            <Gallery />
        </Wrapper>
        </>
    )
}