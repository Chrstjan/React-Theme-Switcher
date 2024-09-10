import { Outlet } from "react-router-dom";
import {Header} from "../components/Header/Header";
import {Main} from "../components/Main/Main";
import {Footer} from "../components/Footer/Footer";
import { Navigation } from "../components/Header/Navigation/Navigation";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const MainLayout = () => {
    const { isDarkMode } = useContext(ThemeContext);
    
    return (
        <>
            <Header theme={isDarkMode}>
                <Navigation />
            </Header>
            <Main>
                <Outlet />
            </Main>
            <Footer></Footer>
        </>
    )
}