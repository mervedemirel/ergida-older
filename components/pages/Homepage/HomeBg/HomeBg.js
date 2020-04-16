import React from 'react';
import {FaCogs, FaLuggageCart, FaTruck, FaUtensils, FaTruckLoading, FaNetworkWired} from 'react-icons/fa';
import Button from "../../../shared/Button/Button";


import {withTranslation} from "../../../../i18n";

class HomeBg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconStyle: {
                fontSize: '4rem',
                color: 'white'
            }
        }
    }

    render() {
        const iconMap = {
            "cogs": <FaCogs style={this.state.iconStyle}/>,
            "luggage": <FaLuggageCart style={this.state.iconStyle}/>,
            "truck": <FaTruck style={this.state.iconStyle}/>,
            "utensils": <FaUtensils style={this.state.iconStyle}/>,
            "truckLoading": <FaTruckLoading style={this.state.iconStyle}/>,
            "network": <FaNetworkWired style={this.state.iconStyle}/>
        };
        return (
            <div className="container-fluid p-0 position-relative HomeBg">
                <div className="container-fluid HomeBg-top px-0 py-5">
                    <div className="container p-0">
                        <div className="row p-0 HomeBg-top-row">
                            <div className="col-md-7 col-lg-7 pr-5 pt-5">
                                <div className="row">
                                    <div class="leaf col-xs-auto container-fluid">
                                        <img src="../../../static/images/leaf.png" className="animation mx-auto d-block"/>
                                    </div>
                                </div>
                                <p className="text-right font-weight-bold HomeBg-ergida">ERGIDA</p>
                                <h2 className="text-right HomeBg-h2">{this.props.t('homeBg', {returnObjects: true}).top.title}</h2>
                                <br/>
                                <p className="text-right">
                                    {this.props.t('homeBg', {returnObjects: true}).top.text}
                                </p>
                                <br/>
                                <Button translateText="infoButtonText" goTo="/kurumsal"/>
                            </div>
                            <div className="col-md-5 col-lg-5 d-flex align-items-center justify-content-center">
                                <picture>
                                    <source srcSet="../../../static/images/av-domates.webp"  type="image/webp"/>
                                    <source srcSet="../../../static/images/av-domates.jpg"  type="image/jpeg"/>
                                    <img src="../../../static/images/av-domates.jpg" alt=""/>
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid HomeBg-mid px-0 py-5">
                    <div className="container">
                        <div className="row p-0">
                            {this.props.t('icons', {returnObjects: true}).map((icon, i) => {
                                return (
                                    <div
                                        className=" col-12 col-sm-6 col-md-4 col-lg-4 d-flex flex-column justify-content-center align-items-center py-5"
                                        key={i}>
                                        {iconMap[icon.icon]}
                                        <p className="text-center icon-text">{icon.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid HomeBg-top px-0 py-5">
                    <div className="container py-5">
                        <div className="row p-0">
                            <div className="col-md-6 col-lg-5 mobile-flex-center">
                                <picture>
                                    <source srcSet="../../../static/images/home-narenciye.webp" type="image/webp"/>
                                    <source srcSet="../../../static/images/home-narenciye.png" type="image/png"/>
                                    <img src="../../../static/images/home-narenciye.png" alt=""/>
                                </picture>
                            </div>
                            <div
                                className="col-md-6 col-lg-7 d-flex flex-column justify-content-center col-nar mobile-flex-center">
                                <h2 className="HomeBg-h2 font-weight-bold er-color-orange">{this.props.t('homeBg', {returnObjects: true}).nar.title}</h2>
                                <p>
                                    {this.props.t('homeBg', {returnObjects: true}).nar.text}
                                </p>
                                <Button translateText="infoButtonText" goTo="/narenciye"/>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
         
                .HomeBg-top {
                    background: rgba(255, 255, 255, .5);
                }
                
                @media (max-width: 767px) {
                    .HomeBg-top-row {
                        flex-direction: column-reverse
                    }
                }
                
                .HomeBg-ergida {
                    font-size:1.5rem;
                    letter-spacing: 0.1rem;
                    margin-bottom: -12px;
                }
                
                .HomeBg-h2 {
                    font-size: 2.2rem;
                    letter-spacing: 0.1rem;
                    font-weight: 300;
                }
                
                .HomeBg-mid {
                    height: 500px;
                    background: url('../../../../static/images/parallax.jpg');
                    background-attachment: fixed;
                      background-position: center;
                      background-repeat: no-repeat;
                      background-size: cover;
                }
                
                @media (max-width: 767px) {
                    .HomeBg-mid {
                        height: auto;
                        background: url('../../../../static/images/parallax-mob.jpg');
                        background-attachment: initial;
                          background-position: center;
                          background-repeat: no-repeat;
                          background-size: cover;
                    } 
                }
                
                .icon-text {
                    color: white;
                    font-size: 1.5rem;
                }
                
                .col-nar {
                    padding-left: 5rem;
                }
                
                @media (max-width: 991px) {
                    .col-nar {
                    padding: 1rem !important;
                }
                }
                
                img {
                    width: 100%;
                }

                .animation{
                  animation: animate 10s;
                  animation-iteration-count: infinite;
                }

                .leaf{
                    height:120px;
                }

                .container-fluid{
                    width: 100%;
                }

                .leaf img{
                    position: absolute;
                    z-index: -1;
                }

                @keyframes animate {
                  0% { transform: translate(1px, 1px) rotate(-10deg); }
                  10% { transform: translate(-1px, -2px) rotate(-10deg); }
                  20% { transform: translate(-3px, 0px) rotate(0deg); }
                  30% { transform: translate(3px, 2px) rotate(0deg); }
                  40% { transform: translate(1px, -1px) rotate(10deg); }
                  50% { transform: translate(-1px, 2px) rotate(0deg); }
                  60% { transform: translate(-3px, 1px) rotate(0deg); }
                  70% { transform: translate(3px, 1px) rotate(-10deg); }
                  80% { transform: translate(-1px, -1px) rotate(0deg); }
                  90% { transform: translate(1px, 2px) rotate(0deg); }
                  100% { transform: translate(1px, -2px) rotate(-10deg); }
                }
            `}</style>
            </div>
    );
    }
    }

    export default withTranslation('homepage')(HomeBg);
