import React, {useState} from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {slide as Menu} from 'react-burger-menu'
import {Link} from '../../../i18n';


import "../../../static/css/bootstrap.min.css";
import "../../../static/css/colors.css";

const Layout = ({children}) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const changeMenuOpenStatus = () => {
        setMenuIsOpen(!menuIsOpen)
    };

    return (
        <>
            <Menu left customBurgerIcon={false} isOpen={menuIsOpen} disableAutoFocus>
                <Link href="/">
                    <a className="menu-item">
                        <img className="Nav-logo" src="../../../static/images/logo.png" alt="Ergıda Tarım Logosu"/>
                    </a>
                </Link>
                <Link href="/">
                    <a id="home" className="menu-item color-white mt-4">Anasayfa</a>
                </Link>
                <Link href="/kurumsal">
                    <a id="about" className="menu-item color-white mt-2 py-1">Kurumsal</a>
                </Link>
                <Link href="/hizmetlerimiz">
                    <a id="contact" className="menu-item color-white mt-2 py-1">Hizmetlerimiz</a>
                </Link>
                <Link href="/urunler">
                    <a id="contact" className="menu-item color-white mt-2 py-1">Ürünler</a>
                </Link>
                <Link href="/galeri">
                    <a id="contact" className="menu-item color-white mt-2 py-1">Galeri</a>
                </Link>
                <Link href="/iletisim">
                    <a id="contact" className="menu-item color-white mt-2 py-1">İletişim</a>
                </Link>
            </Menu>
            <Header menuHandler={changeMenuOpenStatus} />
            {children}
            <Footer/>
        </>
    )
};

export default Layout;
