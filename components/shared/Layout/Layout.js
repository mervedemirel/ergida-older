import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import "../../../static/css/bootstrap.min.css";
import "../../../static/css/colors.css";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>>
        </>
    )
};

export default Layout;
