import { Outlet } from "react-router-dom";
import {Header} from "../components/Header/Header";
import {Main} from "../components/Main/Main";
import {Footer} from "../components/Footer/Footer";
import { Navigation } from "../components/Header/Navigation/Navigation";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FooterInfo } from "../components/Footer/FooterInfo/FooterInfo";
import { FooterNewsLetter } from "../components/Footer/FooterInfo/FooterNewsletter/FooterNewsLetter";

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
            <Footer theme={isDarkMode}>
                <FooterInfo>
                    <FooterNewsLetter />
                </FooterInfo>
            </Footer>
        </>
    )
}