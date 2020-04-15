import React from 'react';
import {withTranslation} from "../../../../i18n";


const AboutNature = ({t}) => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 text-center text-md-right flex-column d-flex justify-content-center">
                    <h2><span className="er-darkest-green font-weight-bold green-title">{t('natureTitleTop')}</span><br/> {t('natureTitleBot')}</h2>
                        <div className="leaf col-md-1">
                            <img src="../../../../static/images/leaf.png" className="animation mx-auto d-block"/>
                        </div> 
                    <p>{t('natureText')}</p>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <img className="full-width" src="../../../../static/images/about-turp.jpg" alt=""/>
                </div>
            </div>
            <hr/>
            <div className="row mt-5">
                <div className="col-md-6 d-flex">
                    <img src="../../../../static/images/about-garlic.jpg" className="full-width" alt=""/>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h3><span className="er-darkest-green font-weight-bold green-title">{t('countryTitleTop')}</span> <br/> {t('countryTitleBot')}</h3>
                        <div className="leaf col-md-1">
                            <img src="../../../../static/images/leaf.png" className="animation mx-auto d-block"/>
                        </div> 
                    <p className="mt-3">{t('countryText')}</p>
                </div>
            </div>
            <div className="row mt-5 flex-column-reverse flex-md-row">
                <div className="col-md-6">
                    <h3 className="mt-5 mt-md-0"><span className="er-darkest-green font-weight-bold green-title">{t('globalTitle')}</span></h3>
                        <div className="leaf col-md-1">
                            <img src="../../../../static/images/leaf.png" className="animation mx-auto d-block"/>
                        </div> 
                    <p className="mt-3">{t('globalText')}</p>

                    <h4 className="mt-5 green-title er-darkest-green">{t('missionTitle')}</h4>
                    <p>{t('missionText')}</p>
                </div>
                <div className="col-md-6 d-flex align-items-start">
                    <img src="../../../../static/images/about-grape.jpg" className="full-width" alt=""/>
                </div>
            </div>

            <style jsx>{`
                .green-title {
                    font-size: 1.5rem;
                    letter-spacing: -0.02rem;
                }
                
                @media (min-width: 767px) {
                    hr {
                        display: none;
                    }
                }

                .animation{
                  animation: animate 10s;
                  animation-iteration-count: infinite;
                }

                .leaf img{
                    position: absolute;
                    left: 300px;
                    top: 150px;
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
};

export default withTranslation('about')(AboutNature);
