import style from "./Footer.module.scss";

export const Footer = ({children, theme}) => {
    return (
        <>
            <footer className={`${style.footerStyling} ${theme ? style.darkMode : style.lightMode}`}>{children}</footer>
        </>
    )
}