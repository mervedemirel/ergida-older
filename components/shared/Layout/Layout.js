import React from "react";
import Header from "./Header/Header";
import "../../../static/css/bootstrap.min.css";
import "../../../static/css/colors.css";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
        </>
    )
};

export default Layout;
