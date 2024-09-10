import style from "./Header.module.scss";

export const Header = ({children, theme}) => {
    return (
        <>
            <header className={`${style.headerStyling} ${theme ? style.darkMode : style.lightMode}`}>
                {children}
            </header>
        </>
    )
}