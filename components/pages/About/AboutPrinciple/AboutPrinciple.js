import React from 'react';
import {withTranslation} from "../../../../i18n";

const AboutPrinciple = ({t}) => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 text-center text-md-right flex-column d-flex justify-content-center">
                    <h2><span className="er-darkest-green font-weight-bold green-title">{t('principleTopTitle')}</span><br/> {t('principleBotTitle')}</h2>
                    <p>{t('principleTextTop')} <br/> <strong>{t('principleTextBot')}</strong></p>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <img className="full-width" src="../../../../static/images/av-domates.jpg" alt=""/>
                </div>
            </div>
            <hr/>
            <div className="row mt-5 flex-column-reverse flex-md-row">
                <div className="col-md-6 d-flex align-items-end pl-md-0 pl-lg-5">
                    <img src="../../../../static/images/av-biber.jpg" className="full-width" alt=""/>
                </div>
                <div className="col-md-6">
                    <h3><span className="er-darkest-green font-weight-bold green-title">{t('expTopTitle')}</span> <br/> {t('expBotTitle')}</h3>
                    <p className="mt-3">{t('expText')}</p>

                    <h4 className="mt-5 green-title er-darkest-green">{t('ilkeTitle')}</h4>
                    <p>{t('ilkeText')}</p>
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
            `}</style>
        </div>
    );
};

export default withTranslation('about')(AboutPrinciple);
