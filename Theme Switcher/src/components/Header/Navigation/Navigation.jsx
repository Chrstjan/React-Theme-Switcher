import { NavLink } from "react-router-dom";
import style from "./Navigation.module.scss";

export const Navigation = () => {
    return (
        <>
            <nav className={style.navStyling}>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
            </nav>
        </>
    )
}