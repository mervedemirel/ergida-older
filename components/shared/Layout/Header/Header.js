import React, {Component} from "react";
import {Link} from "../../../../i18n";
import {MdMenu} from "react-icons/md"
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
                            <img src="../../../static/images/logo.png" className="logo" style={{height: '66px'}}/>
                        </a>
                    </Link>
                    <span className="Hamburger ml-auto">
                        <MdMenu style={{fontSize: '3rem'}} onClick={this.props.menuHandler}/>
                    </span>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            {this.props.t('links', {returnObjects: true}).map((link, i) => {
                                return (
                                    <li className="nav-item" key={i}>
                                        <Link href={link.url}>
                                            <a className="nav-link" href="#">{link.text}</a>
                                        </Link>
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
                    
                    @media (min-width: 992px) {
                        .Hamburger {
                            display: none !important;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default withTranslation('header')(Header);
