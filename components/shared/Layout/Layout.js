import React, {useState, useEffect} from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {bubble as Menu} from 'react-burger-menu'
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import {i18n, withTranslation, Link} from "../../../i18n";

import "../../../static/css/bootstrap.min.css";
import "../../../static/css/colors.css";
import "../../../static/css/np.css";

Router.onRouteChangeStart = url => {
    NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

const Layout = ({children, t}) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const changeMenuOpenStatus = () => {
        setMenuIsOpen(!menuIsOpen)
    };

    return (
        <>
            <Menu left customBurgerIcon={false} isOpen={menuIsOpen} disableAutoFocus>
                <Link href="/">
                    <a className="menu-item">
                        <img className="Nav-logo" style={{maxHeight: '70px'}} src="../../../static/images/logo.png"
                             alt="Ergıda Tarım Logosu"/>
                    </a>
                </Link>
                <Link href="/kurumsal">
                    <a id="about"
                       className="menu-item color-black mt-2 py-1">{t('mobileLinks', {returnObjects: true}).kurumsal.text}</a>
                </Link>
                <Link href="/hizmetlerimiz">
                    <a id="contact"
                       className="menu-item color-black mt-2 py-1">{t('mobileLinks', {returnObjects: true}).hizmetler.text}</a>
                </Link>
                <Link href="/sebze">
                    <a id="contact"
                       className="menu-item color-black mt-2 py-1">{t('mobileLinks', {returnObjects: true}).urun.text}</a>
                </Link>
                <Link href="/meyve">
                    <a id="contact"
                       className="menu-item color-black mt-2 py-1">{t('mobileLinks', {returnObjects: true}).meyve.text}</a>
                </Link>

                <Link href="/narenciye">
                    <a id="contact"
                       className="menu-item color-black mt-2 py-1">{t('mobileLinks', {returnObjects: true}).citrus.text}</a>
                </Link>
                <Link href="/galeri">
                    <a id="contact"
                       className="menu-item color-black mt-2 py-1">{t('mobileLinks', {returnObjects: true}).gallery.text}</a>
                </Link>
                <Link href="/iletisim">
                    <a id="contact"
                       className="menu-item color-black mt-2 py-1">{t('mobileLinks', {returnObjects: true}).contact.text}</a>
                </Link>
                <Link href="/">
                    <a id="contact" className="menu-item color-white mt-2 py-1"
                       onClick={() => {
                           localStorage.setItem('lng', localStorage.getItem('lng') === 'tr' ? 'en' : 'tr');
                           i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')
                       }}>{i18n.language === 'tr' ?
                        <img src="../../../../static/images/uk.svg" alt="" style={{height: '1rem'}}/> :
                        <img src="../../../../static/images/turkey.svg" alt="" style={{height: '1rem'}}/>}</a>
                </Link>
            </Menu>
            <Header menuHandler={changeMenuOpenStatus}/>
            {children}
            <Footer/>
        </>
    )
};


export default withTranslation('header')(Layout);
