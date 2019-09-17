import React, {Component} from "react";
import {Link, i18n} from "../../../../i18n";
import {MdMenu} from "react-icons/md";
import {withTranslation} from "../../../../i18n";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownVisible: false
        };

        this.classHandler = this.classHandler.bind(this)
    }

    classHandler() {
        this.setState({dropdownVisible: !this.state.dropdownVisible})
    }


    render() {
        return (
            <div className="Header">
                <nav className="navbar navbar-expand-lg container Header__navbar">
                    <Link href="/">
                        <a className="navbar-brand" href="#">
                            <img src="../../../static/images/logo.jpg" className="logo" style={{height: '66px'}}/>
                        </a>
                    </Link>
                    <span className="Hamburger ml-auto">
                        <MdMenu style={{fontSize: '3rem'}} onClick={this.props.menuHandler}/>
                    </span>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            {this.props.t('links', {returnObjects: true}).map((link, i) => {
                                return link.url !== '/urunler' ? (

                                    <li className="nav-item" key={i}>
                                        <Link href={link.url}>
                                            <a className="nav-link" href="#">{link.text}</a>
                                        </Link>
                                    </li>
                                ) : (
                                    <li className="nav-item" key={i}>

                                        <div className="dropdown">
                                            <a className="nav-link" onClick={this.classHandler}
                                               style={{cursor: 'pointer'}}>
                                                {link.text}
                                            </a>
                                            <div
                                                className={this.state.dropdownVisible ? "dropdown-menu show" : "dropdown-menu"}
                                                aria-labelledby="dropdownMenu2">
                                                <a className="dropdown-item" href="/sebze">{this.props.t("drop1")}</a>
                                                {/*<a className="dropdown-item" href="/narenciye">{this.props.t("drop2")}</a>*/}
                                            </div>
                                        </div>
                                    </li>

                                )

                            })}
                            <li><a className="nav-link" style={{cursor: 'pointer'}}
                                   onClick={() => i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}>{i18n.language === 'tr' ? "EN" : "TR"}</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <style jsx>{`
                    .Header {
                        height: 80px;
                        background: white;
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
