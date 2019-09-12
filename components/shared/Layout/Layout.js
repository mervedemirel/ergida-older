import React, {useState} from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {slide as Menu} from 'react-burger-menu'
import {Link} from '../../../i18n';
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";


import "../../../static/css/bootstrap.min.css";
import "../../../static/css/colors.css";

Router.onRouteChangeStart = url => {
    NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

const Layout = ({children}) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const changeMenuOpenStatus = () => {
        setMenuIsOpen(!menuIsOpen)
    };

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                      integrity="sha256-pMhcV6/TBDtqH9E9PWKgS+P32PVguLG8IipkPyqMtfY=" crossOrigin="anonymous"/>
            </Head>
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
                <Link href="/sebze">
                    <a id="contact" className="menu-item color-white mt-2 py-1">Sebze</a>
                </Link>
                <Link href="/galeri">
                    <a id="contact" className="menu-item color-white mt-2 py-1">Galeri</a>
                </Link>
                <Link href="/iletisim">
                    <a id="contact" className="menu-item color-white mt-2 py-1">İletişim</a>
                </Link>
                <a className="menu-item color-white mt-2 py-1" style={{cursor: 'pointer'}}
                                   onClick={() => i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}>{i18n.language === 'tr' ? "English" : "Türkçe"}</a>
            </Menu>
            <Header menuHandler={changeMenuOpenStatus} />
            {children}
            <Footer/>
        </>
    )
};


export default Layout;
