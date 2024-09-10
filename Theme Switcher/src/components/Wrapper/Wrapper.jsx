import { useContext } from "react";
import style from "./Wrapper.module.scss";
import { ThemeContext } from "../../context/ThemeContext";

export const Wrapper = ({children, darkMode}) => {

    return (
        <>
            <section className={`${style.wrapperStyling} ${darkMode ? style.darkMode : style.lightMode}`}>
                {children}
            </section>
        </>
    )
}