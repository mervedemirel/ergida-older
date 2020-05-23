import React, { Component } from "react";
import { Link, i18n, withTranslation } from "../../../../i18n";
import { MdMenu } from "react-icons/md";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaPhone
} from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false,
      activeLanguage: undefined
    };

    this.classHandler = this.classHandler.bind(this);
  }

  classHandler() {
    this.setState({ dropdownVisible: !this.state.dropdownVisible });
  }

  componentDidMount() {
    localStorage.setItem("lng", i18n.language);
    this.setState({ activeLanguage: localStorage.getItem("lng") });
  }

  render() {
    return (
      <>
        <div className="SubNav container d-flex justify-content-end align-items-center position-relative">
          <a
            href="tel:+905468870222"
            className="mr-auto"
            style={{ fontSize: "1rem", color: "black" }}
          >
            <FaPhone style={{ transform: "rotate(90deg)" }} /> +90 546 887 0 222
          </a>
          <a
            href="https://www.facebook.com/ergida48"
            style={{ color: "black", fontSize: "1.1rem" }}
            className="mr-2 d-flex align-items-center"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://twitter.com/"
            style={{ color: "black", fontSize: "1.1rem" }}
            className="mr-2 d-flex align-items-center"
          >
            <FaTwitterSquare />
          </a>
          <a
            href="https://www.instagram.com/ergidatarim/"
            style={{ color: "black", fontSize: "1.1rem" }}
            className=" d-flex align-items-center"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="Header">
          <nav className="navbar navbar-expand-lg container Header__navbar">
            <Link href="/">
              <a className="navbar-brand" href="#" aria-label="Anasayfaya Dön">
                <img
                  src="../../../static/images/logo.png"
                  className="logo"
                  alt="Ergıda Tarım Logo"
                  style={{ height: "66px" }}
                />
              </a>
            </Link>
            <span className="Hamburger ml-auto">
              <MdMenu
                style={{ fontSize: "3rem" }}
                onClick={this.props.menuHandler}
              />
            </span>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                {this.props
                  .t("links", { returnObjects: true })
                  .map((link, i) => {
                    return link.url !== "/urunler" ? (
                      <li className="nav-item" key={i}>
                        <Link href={link.url}>
                          <a className="nav-link" href="#">
                            {link.text}
                          </a>
                        </Link>
                      </li>
                    ) : (
                      <li className="nav-item" key={i}>
                        <div className="dropdown">
                          <a
                            className="nav-link"
                            onMouseOver={() =>
                              this.setState({ dropdownVisible: true })
                            }
                            onMouseOut={() =>
                              this.setState({ dropdownVisible: false })
                            }
                            style={{ cursor: "pointer" }}
                          >
                            {link.text}
                          </a>
                          <div
                            onMouseOver={() =>
                              this.setState({ dropdownVisible: true })
                            }
                            onMouseOut={() =>
                              this.setState({ dropdownVisible: false })
                            }
                            className={
                              this.state.dropdownVisible
                                ? "dropdown-menu animate slideIn show"
                                : "dropdown-menu"
                            }
                            aria-labelledby="dropdownMenu2"
                          >
                            <a className="dropdown-item" href="/sebze">
                              {this.props.t("drop1")}
                            </a>
                            <a className="dropdown-item" href="/meyve">
                              {this.props.t("drop3")}
                            </a>
                            <a className="dropdown-item" href="/narenciye">
                              {this.props.t("drop2")}
                            </a>
                            {/*<a className="dropdown-item" href="/narenciye">{this.props.t("drop2")}</a>*/}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                <li>
                  <a
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      localStorage.setItem(
                        "lng",
                        localStorage.getItem("lng") === "tr" ? "en" : "tr"
                      );
                      this.setState({
                        activeLanguage:
                          this.state.activeLanguage === "tr" ? "en" : "tr"
                      });
                      i18n.changeLanguage(i18n.language === "tr" ? "en" : "tr");
                    }}
                  >
                    {this.state.activeLanguage === "tr" ? (
                      <img
                        src="../../../../static/images/uk.svg"
                        alt=""
                        style={{ height: "0.8rem" }}
                      />
                    ) : (
                      <img
                        src="../../../../static/images/turkey.svg"
                        alt=""
                        style={{ height: "0.8rem" }}
                      />
                    )}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <style jsx>{`
          .SubNav {
            height: 30px;
            border-bottom: 1px solid #f4f4f4;
          }

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

          @media (min-width: 992px) {
          .animate {
            animation-duration: 0.3s;
            -webkit-animation-duration: 0.3s;
            animation-fill-mode: both;
            -webkit-animation-fill-mode: both;
          }
        }

        @keyframes slideIn {
          0% {
            transform: translateY(1rem) rotate(-90deg);
            opacity: 0;
          }
          100% {
            transform:translateY(0rem) rotate(0deg);
            opacity: 1;
          }
          0% {
            transform: translateY(1rem) rotate(-90deg);
            opacity: 0;
          }
        }

        @-webkit-keyframes slideIn {
          0% {
            -webkit-transform: transform;
            -webkit-opacity: 0;
          }
          100% {
            -webkit-transform: translateY(0);
            -webkit-opacity: 1;
          }
          0% {
            -webkit-transform: translateY(1rem);
            -webkit-opacity: 0;
          }
        }

        .slideIn {
          -webkit-animation-name: slideIn;
          animation-name: slideIn;
        }
        
        .dropdown-menu {
                perspective: 1000px;
            }

            .dropdown-item {
                opacity: 0;
                transform-origin: top right;
            }
             
            .dropdown-item:nth-child(1) {
              animation-name: bottomToTop;
              animation-duration: 400ms;
              animation-delay: (150ms) - 300;
              animation-timing-function: ease-in-out;
              animation-fill-mode: forwards;
            }

            .dropdown-item:nth-child(2) {
              animation-name: bottomToTop;
              animation-duration: 400ms;
              animation-delay: (150ms * 2) - 300;
              animation-timing-function: ease-in-out;
              animation-fill-mode: forwards;
            }

            .dropdown-item:nth-child(3) {
              animation-name: bottomToTop;
              animation-duration: 400ms;
              animation-delay: (150ms * 3) - 300;
              animation-timing-function: ease-in-out;
              animation-fill-mode: forwards;
            }

            @keyframes bottomToTop {
                0% {
                    opacity:0;
                    transform:rotate(-30deg);
                }
                100% {
                    opacity:1;
                    transform:rotate(0deg);
                }
            }
            
        `}</style>
      </>
    );
  }
}

export default withTranslation("header")(Header);
