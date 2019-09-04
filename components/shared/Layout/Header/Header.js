import React, {Component} from "react";
import Link from "next/link";

import {withTranslation} from "../../../../i18n";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sample: null
        }
    }

    render() {
        return (
            <div className="Header">
                <nav className="navbar navbar-expand-lg container Header__navbar">
                    <Link href="/">
                        <a className="navbar-brand" href="#">
                            <img src="../../../static/images/logo.png" className="logo"/>
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            {this.props.t('links', {returnObjects: true}).map((link, i) => {
                                return (
                                    <li className="nav-item" key={i}>
                                        <a className="nav-link" href="#">{link.text}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </nav>

                <style jsx>{`
                    .Header {
                        height: 80px;
                        background: url("../../../../static/images/header-bg.png") no-repeat;
                        background-size: cover;
                    }
                    
                    .Header__navbar {
                        height: 80px;
                    }
                    
                    .logo {
                        height: 70px;
                    }
                    
                    .nav-link {
                        color: black !important;
                    }
                `}</style>
            </div>
        )
    }
}

export default withTranslation('header')(Header);
