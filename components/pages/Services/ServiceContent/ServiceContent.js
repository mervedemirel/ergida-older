import React from 'react';
import {withTranslation} from "../../../../i18n";

const ServiceContent = ({t}) => {
    return (
        <div className="container p-0">
            <div className="row m-0 p-0">
                <div className="col-xl-8 offset-xl-2 mt-4">
                    <h2 className="text-center er-color-dark-green">{t('firstRowTitle')}</h2>
                    <p className="text-center">
                        {t('firstRowContent')}
                    </p>
                </div>
            </div>
            <div className="row mt-lg-3 mt-lg-5 p-0">
                <div className="col-md-6 col-lg-4 col-xl-3 mt-3 mt-md-0">
                    <h3 className="text-center er-color-dark-green">{t('oneOneTitle')}</h3>
                    <p className="text-center">{t('oneOneContent')}</p>
                </div>
                <div className="col-lg-4 col-xl-6 pl-0 is-hidden-touch">
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 mt-3 mt-md-0">
                    <h3 className="text-center er-color-dark-green">{t('oneTwoTitle')}</h3>
                    <p className="text-center">{t('oneTwoContent')}</p>
                </div>
            </div>
            <div className="row m-0 p-0">
                <div className="col-md-3"></div>
                <div className="col-md-6 col-lg-6 position-relative">
                    <img className="Services-basket" src="../../../../static/images/services-basket.jpg" alt=""/>
                </div>
                <div className="col-bd-3"></div>
            </div>
            <div className="row mt-lg-2 mt-xl-5 p-0">
                <div className="col-md-6 col-lg-4 col-xl-3 mt-3 mt-md-0">
                    <h3 className="text-center er-color-dark-green">{t('twoOneTitle')}</h3>
                    <p className="text-center">{t('twoOneContent')}</p>
                </div>
                <div className="col-lg-4 col-xl-6 is-hidden-touch"></div>
                <div className="col-md-6 col-lg-4 col-xl-3 mt-3 mt-md-0">
                    <h3 className="text-center er-color-dark-green">{t('twoTwoTitle')}</h3>
                    <p className="text-center">{t('twoTwoContent')}</p>
                </div>
            </div>


            <style jsx>{`
                .Services-basket {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-30%);
                    z-index: -1;
                }
                
                @media (max-width: 767px) {
                    .Services-basket {
                        position: relative;
                        transform: none;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }
                
                @media (min-width: 768px) and (max-width: 991px) {
                    .Services-basket {
                        width: 50%;
                        top: 0;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }
            
            
                // .Services-bg {
                //     background: url('../../../../static/images/services-basket.jpg') no-repeat;
                //     background-size: contain;
                // }
                //
                // @media (max-width: 991px) {
                //     .Services-bg-wrapper {
                //         display: none;
                //     }
                // }
                //
                // @media (max-width: 1199px) {
                //     .Services-bg-wrapper {
                //         padding-top: 15rem;
                //     }
                // }
                //
                // @media (min-width: 1200px) {
                //     .Services-bg {
                //         position: absolute;
                //         margin-left: -2rem;
                //         z-index: -1;
                //         height: 100%;                   
                //     }
                // }
            `}</style>
        </div>
    );
};

export default withTranslation('services')(ServiceContent);
